// src/pages/api/whatsapp/webhook.ts
import type { APIRoute } from 'astro';
import { getPool, getReadPool } from '../../../backend/db';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

export const prerender = false;

// Meta Cloud API Verification (GET)
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const verifyToken = process.env.META_VERIFY_TOKEN || 'travltik_verify_pro';
  const mode = url.searchParams.get('hub.mode');
  const token = url.searchParams.get('hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === verifyToken) {
    return new Response(challenge || '', { status: 200 });
  }
  return new Response('Forbidden', { status: 403 });
};

// Resolve Gemini API key safely
const getGeminiApiKey = (): string => {
  let key = (
    (import.meta?.env?.GEMINI_API_KEY as string | undefined) ||
    (import.meta?.env?.NEXT_PUBLIC_GEMINI_API_KEY as string | undefined) ||
    process.env.GEMINI_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
    process.env.PUBLIC_GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ''
  )?.trim();
  if (key) return key;

  try {
    const envFiles = ['.env', '.env.local'];
    for (const f of envFiles) {
      const envPath = path.resolve(process.cwd(), f);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const match = content.match(/^(?:GEMINI_API_KEY|NEXT_PUBLIC_GEMINI_API_KEY|PUBLIC_GEMINI_API_KEY|GOOGLE_API_KEY)\s*=\s*(.*)$/m);
        if (match) {
          key = match[1].trim().replace(/^["']|["']$/g, '');
          if (key) return key;
        }
      }
    }
  } catch (err) {}

  return '';
};

type NormalizedMsg = {
  instanceName: string;
  from: string;
  text: string;
  fromMe: boolean;
  pushName?: string;
};

function normalizeMessage(body: any): NormalizedMsg | null {
  // 1. Evolution API format
  if (body.event === 'messages.upsert' || body.event === 'messages-upsert') {
    let item = Array.isArray(body.data) ? body.data[0] : body.data;
    if (!item) return null;
    if (item.message?.key) item = item.message;

    const key = item.key || {};
    const fromMe = key.fromMe === true;
    const remoteJid = key.remoteJid || '';

    // Ignore broadcast, status, and group messages
    if (remoteJid.includes('status@broadcast') || remoteJid.includes('@g.us')) {
      return null;
    }

    const from = remoteJid.replace(/@s\.whatsapp\.net$/, '').replace(/@c\.us$/, '');
    const m = item.message?.message || item.message || item;
    const text =
      m?.conversation ||
      m?.extendedTextMessage?.text ||
      m?.buttonsResponseMessage?.selectedButtonId ||
      m?.templateButtonReplyMessage?.selectedId ||
      m?.interactiveResponseMessage?.body?.text ||
      (typeof m === 'string' ? m : '');

    return {
      instanceName: body.instance || '',
      from,
      text: String(text || '').trim(),
      fromMe,
      pushName: item.pushName || ''
    };
  }

  // 2. Meta Cloud API format
  if (body.object === 'whatsapp_business_account') {
    const entry = body.entry?.[0]?.changes?.[0]?.value;
    const m = entry?.messages?.[0];
    if (!m) return null;
    return {
      instanceName: entry?.metadata?.phone_number_id || 'meta',
      from: m.from || '',
      text: m.text?.body || '',
      fromMe: false,
      pushName: entry?.contacts?.[0]?.profile?.name || ''
    };
  }

  return null;
}

// Send WhatsApp message back
async function sendWhatsApp(instance: string, to: string, text: string) {
  const evolutionUrl = process.env.EVOLUTION_API_URL;
  const evolutionKey = process.env.EVOLUTION_API_KEY;

  if (evolutionUrl && evolutionKey && instance) {
    try {
      const res = await fetch(`${evolutionUrl}/message/sendText/${instance}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: evolutionKey
        },
        body: JSON.stringify({
          number: to,
          text,
          delay: 400
        })
      });
      console.log(`[WhatsApp Sent] to=${to} status=${res.status}`);
      return;
    } catch (e: any) {
      console.warn(`[WhatsApp Send Error] to=${to}:`, e.message);
    }
  }

  // Meta Cloud API Fallback
  if (process.env.META_ACCESS_TOKEN && process.env.META_PHONE_ID) {
    try {
      await fetch(
        `https://graph.facebook.com/v20.0/${process.env.META_PHONE_ID}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.META_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to,
            text: { body: text }
          })
        }
      );
    } catch (e: any) {
      console.warn(`[Meta WhatsApp Send Error] to=${to}:`, e.message);
    }
  }
}

// Generate AI Response using Gemini
async function generateAIAnswer(
  companyName: string,
  botName: string,
  userMessage: string,
  historyText: string,
  botInstructions?: string
): Promise<string> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    return `Hello! Thank you for contacting ${companyName}. Our immigration consultant will get in touch with you shortly. How can we help you today?`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are ${botName}, a top-tier immigration & visa consultant AI assistant representing "${companyName}".
You are chatting with a prospective client on WhatsApp.

RULES:
1. Be polite, warm, professional, and concise (WhatsApp chat format, max 2-3 short paragraphs or clean bullet points).
2. Answer visa questions accurately (Study, PR, Work Permit, Tourist/Visitor Visa, Business Visa).
3. If the user wants to book a consultation or check eligibility, encourage them warmly.
4. If asked about prices or official filing fees, give a general transparent overview and offer to book an assessment.
5. Use appropriate emojis naturally (✈️, 🛂, 📋, ✨).
${botInstructions ? `SPECIAL COMPANY INSTRUCTIONS: ${botInstructions}` : ''}

CONVERSATION CONTEXT:
${historyText || 'New conversation'}

CLIENT MESSAGE:
${userMessage}

YOUR WHATSAPP RESPONSE:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        temperature: 0.3,
        maxOutputTokens: 350
      }
    });

    const reply = response.text ? response.text.trim() : '';
    return reply || `Hello! Thank you for contacting ${companyName}. How may we assist with your visa and travel plans today?`;
  } catch (err: any) {
    console.warn('[WhatsApp Gemini AI generation error]:', err.message);
    return `Hello! Thank you for reaching out to ${companyName}. An expert advisor is reviewing your query and will reply shortly. Feel free to leave your name and target destination! ✈️`;
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    console.log(`[WhatsApp Webhook] event=${body.event} instance=${body.instance}`);

    const pool = getPool();

    // 1. Connection update event
    if (body.event === 'connection.update' || body.event === 'connection-update') {
      const instance = body.instance;
      const state = body.data?.state || body.data?.connectionState;
      if (instance && (state === 'open' || state === 'connected')) {
        await pool.query(
          `UPDATE whatsapp_companies SET status = 'live', updated_at = NOW() WHERE whatsapp_session_id = $1`,
          [instance]
        ).catch(() => {});
      }
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // 2. Normalize incoming message
    const msg = normalizeMessage(body);
    if (!msg) {
      return new Response(JSON.stringify({ ok: true, ignored: 'no_message_data' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    if (msg.fromMe) {
      return new Response(JSON.stringify({ ok: true, ignored: 'from_me' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    if (!msg.text) {
      return new Response(JSON.stringify({ ok: true, ignored: 'empty_text' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    const { instanceName, from, text } = msg;

    // 3. Find company from DB
    let companyRes = await pool.query(
      `SELECT id, name, bot_name, bot_instructions, whatsapp_number, status FROM whatsapp_companies WHERE whatsapp_session_id = $1 LIMIT 1`,
      [instanceName]
    ).catch(() => ({ rows: [] }));

    let company = companyRes.rows[0];

    // Fallback if company not found by exact session id
    if (!company) {
      companyRes = await pool.query(
        `SELECT id, name, bot_name, bot_instructions, whatsapp_number, status FROM whatsapp_companies ORDER BY created_at DESC LIMIT 1`
      ).catch(() => ({ rows: [] }));
      company = companyRes.rows[0];
    }

    const companyId = company ? company.id : 'default_pro';
    const companyName = company ? company.name : 'TravlTik Verified Immigration Hub';
    const botName = company ? (company.bot_name || 'TravlTik AI Concierge') : 'TravlTik AI Concierge';
    const botInstructions = company ? company.bot_instructions : '';

    // 4. Update or create conversation record
    await pool.query(
      `INSERT INTO whatsapp_conversations (company_id, customer_phone, customer_name, last_intent, last_message_at)
       VALUES ($1, $2, $3, 'message', NOW())
       ON CONFLICT DO NOTHING`,
      [companyId, from, msg.pushName || null]
    ).catch(() => {});

    // 5. Check Human Handoff Triggers
    const lower = text.toLowerCase();
    const explicitHuman = /human|agent|operator|manager|person|insaan|real person|call me/i.test(lower);
    if (explicitHuman) {
      const handoffMsg = `Connecting you with a senior immigration specialist at ${companyName} right away 🙏\n\nOur office will also follow up on this number. You can also reach our direct help desk at ${company.whatsapp_number || '+91 98765 43210'}.`;
      await sendWhatsApp(instanceName, from, handoffMsg);

      // Log lead as escalated
      await pool.query(
        `INSERT INTO whatsapp_leads (company_id, phone, name, requirement, status, notes)
         VALUES ($1, $2, $3, $4, 'escalated', 'Requested human specialist')`,
        [companyId, from, msg.pushName || 'Client', text]
      ).catch(() => {});

      return new Response(JSON.stringify({ ok: true, handoff: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // 6. Check Booking / Appointment Intent
    const bookingPattern = /appointment|book|schedule|slot|consultation|milna|meeting/i;
    if (bookingPattern.test(lower)) {
      // Create quick consultation appointment record
      const today = new Date();
      today.setDate(today.getDate() + 1);
      const bookingDate = today.toISOString().split('T')[0];

      await pool.query(
        `INSERT INTO whatsapp_appointments (company_id, customer_phone, customer_name, service_name, appointment_date, appointment_time, status, notes)
         VALUES ($1, $2, $3, 'Visa & Immigration Assessment', $4, '11:00 AM', 'pending', $5)`,
        [companyId, from, msg.pushName || 'Client', bookingDate, text]
      ).catch(() => {});

      // Record lead
      await pool.query(
        `INSERT INTO whatsapp_leads (company_id, phone, name, requirement, status, notes)
         VALUES ($1, $2, $3, $4, 'appointment_requested', 'Client requested consultation booking')`,
        [companyId, from, msg.pushName || 'Client', text]
      ).catch(() => {});

      const bookingReply = `Certainly! I've initiated a 1-on-1 Visa Consultation slot with ${companyName} 🗓️\n\n📅 Suggested Slot: Tomorrow (${bookingDate}) at 11:00 AM\n📋 Service: Comprehensive Visa & Profile Evaluation\n👤 Name: ${msg.pushName || 'Valued Client'}\n📱 Phone: ${from}\n\nReply 'CONFIRM' to lock in this time, or let us know if another date/time works better for you! ✨`;
      await sendWhatsApp(instanceName, from, bookingReply);
      return new Response(JSON.stringify({ ok: true, booking: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // 7. Auto Lead Detection (Pricing, Visa inquiries, Eligibility)
    const leadPattern = /visa|pr|study|cost|fees|price|eligibility|points|canada|australia|uk|usa|schengen|dubai|work permit|job/i;
    if (leadPattern.test(lower)) {
      await pool.query(
        `INSERT INTO whatsapp_leads (company_id, phone, name, requirement, status, notes)
         VALUES ($1, $2, $3, $4, 'new', 'Captured via WhatsApp AI Concierge')`,
        [companyId, from, msg.pushName || 'Prospect', text]
      ).catch(() => {});
    }

    // 8. Generate and dispatch AI Response
    const aiReply = await generateAIAnswer(companyName, botName, text, '', botInstructions);
    await sendWhatsApp(instanceName, from, aiReply);

    return new Response(JSON.stringify({ ok: true, replied: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    console.error('[WhatsApp Webhook Handler Error]:', error);
    return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
};
