// ============================================================
// src/lib/resend.ts
// Central Resend client with complete delivery audit logging & domain verification
// ============================================================

import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const getApiKey = (): string => {
  let key = (import.meta?.env?.RESEND_API_KEY as string | undefined)?.trim();
  if (key) return key;

  key = (process.env.RESEND_API_KEY as string | undefined)?.trim();
  if (key) return key;

  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/^RESEND_API_KEY\s*=\s*(.*)$/m);
      if (match) {
        key = match[1].trim().replace(/^["']|["']$/g, '');
        if (key) return key;
      }
    }
  } catch (err) {
    // ignore
  }

  return '';
};

export function getResendClient(): Resend {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('[Resend] RESEND_API_KEY is missing');
  }
  return new Resend(apiKey);
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
  emailType?: string;
}

export const sendEmail = async ({
  to,
  subject,
  html,
  text,
  from,
  emailType = 'transactional'
}: SendEmailOptions) => {
  const apiKey = getApiKey();
  const apiKeyAvailable = Boolean(apiKey) ? 'YES' : 'NO';
  
  const fromName = (process.env.EMAIL_FROM_NAME || 'Abroad Zen').trim();
  const fromEmail = (process.env.EMAIL_FROM || 'noreply@abroadzen.com').trim();
  let sender = from || `${fromName} <${fromEmail}>`;

  const toArray = Array.isArray(to) ? to : [to];
  const maskedTo = toArray.map(addr => addr.replace(/^(.{2}).*(@.*)$/, "$1***$2")).join(', ');

  console.log(`[OTP TRACE] Step 8: sendEmail() executed = YES`);
  console.log(`[OTP TRACE] Step 9: exact to value passed = ${maskedTo}`);
  console.log(`[OTP TRACE] Step 10: exact from value passed = ${sender}`);
  console.log(`[OTP TRACE] Step 11: RESEND_API_KEY available = ${apiKeyAvailable}`);
  console.log(`[OTP DEBUG] resend request started`);

  if (!apiKey) {
    const err = 'RESEND_API_KEY is missing from environment';
    console.log(`[OTP DEBUG] resend error: ${err}`);
    return { success: false, error: err };
  }

  try {
    const resend = getResendClient();
    let result = await resend.emails.send({
      from: sender,
      to,
      subject,
      html,
      text,
    });

    // If sender domain is not verified yet in Resend, automatically fallback to verified backup domain
    if (result.error && (result.error.message?.toLowerCase().includes('not verified') || (result.error as any).statusCode === 403)) {
      console.warn(`[Resend Fallback] Sender domain in "${sender}" is not verified yet. Retrying with verified fallback domain...`);
      const fallbackSender = 'Abroad Zen <noreply@travltik.com>';
      result = await resend.emails.send({
        from: fallbackSender,
        to,
        subject,
        html,
        text,
      });
    }

    if (result.data?.id) {
      console.log(`[OTP DEBUG] resend response ID: ${result.data.id}`);
      return { success: true, data: result.data };
    }

    if (result.error) {
      const errDetail = result.error.message || JSON.stringify(result.error);
      console.log(`[OTP DEBUG] resend error: ${errDetail}`);
      return { success: false, error: errDetail };
    }

    return { success: true, data: result.data };
  } catch (error: any) {
    // If exception indicates unverified domain, attempt fallback as well
    const errMsg = error?.message || String(error);
    if (errMsg.toLowerCase().includes('not verified') || error?.statusCode === 403) {
      try {
        console.warn(`[Resend Fallback on Exception] Retrying with verified fallback domain...`);
        const resend = getResendClient();
        const fallbackResult = await resend.emails.send({
          from: 'Abroad Zen <noreply@travltik.com>',
          to,
          subject,
          html,
          text,
        });
        if (fallbackResult.data?.id) {
          return { success: true, data: fallbackResult.data };
        }
      } catch (fallbackErr: any) {
        console.error(`[Resend Fallback Error]:`, fallbackErr);
      }
    }
    const errDetail = error?.message || String(error);
    console.log(`[OTP DEBUG] resend error: ${errDetail}`);
    return { success: false, error: errDetail };
  }
};

