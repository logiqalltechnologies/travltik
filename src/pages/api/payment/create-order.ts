// src/pages/api/payment/create-order.ts
// Creates real Razorpay order for $5 AI Visa Plan (3 queries)
import type { APIRoute } from 'astro';
import { getPool } from '../../../backend/db';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

export const prerender = false;

function getEnvVar(name: string): string {
  if (process.env[name]) return process.env[name]!;
  if ((import.meta as any).env?.[name]) return (import.meta as any).env[name];
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...rest] = trimmed.split('=');
          if (key.trim() === name) {
            return rest.join('=').trim().replace(/^['"]|['"]$/g, '');
          }
        }
      }
    }
  } catch (e) {}
  return '';
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const {
      targetCountry = 'Global',
      passport = 'India',
      selectedPurpose = 'Student',
      userEmail = '',
      userName = '',
      userPhone = ''
    } = body;

    const keyId =
      getEnvVar('RAZORPAY_KEY_ID') ||
      getEnvVar('NEXT_PUBLIC_RAZORPAY_KEY_ID') ||
      getEnvVar('PUBLIC_RAZORPAY_KEY_ID');

    const keySecret = getEnvVar('RAZORPAY_KEY_SECRET');

    if (!keyId || !keySecret) {
      return new Response(
        JSON.stringify({ success: false, error: 'Razorpay credentials not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Support dynamic tier pricing ($5 for 3 queries, $10 for 10 queries, $15 for 25 queries)
    const rawAmount = Number(body.amount);
    const amountInDollars = (!isNaN(rawAmount) && rawAmount > 0) ? rawAmount : 5.00;
    const amountInCents = Math.round(amountInDollars * 100);
    const currency = (body.currency || 'USD').toUpperCase();
    const planName = body.plan || (amountInDollars === 10 ? 'visa_expert_10_queries' : amountInDollars === 15 ? 'visa_concierge_25_queries' : 'visa_done_3_queries');

    // Call real Razorpay API to generate live Order ID
    const receiptId = `rcpt_visa_${Date.now().toString(36)}_${crypto.randomBytes(3).toString('hex')}`;

    const rzpResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64')
      },
      body: JSON.stringify({
        amount: amountInCents,
        currency: currency,
        receipt: receiptId,
        notes: {
          plan: planName,
          target_country: targetCountry,
          passport: passport,
          purpose: selectedPurpose
        }
      })
    });

    const rzpData = await rzpResponse.json();

    if (!rzpResponse.ok || !rzpData.id) {
      console.error('[Razorpay Order Creation Failed]', rzpData);
      return new Response(
        JSON.stringify({
          success: false,
          error: rzpData.error?.description || 'Failed to create Razorpay live order'
        }),
        { status: rzpResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Record order in database
    try {
      const pool = getPool();
      await pool.query(
        `INSERT INTO payment_orders (
          order_id,
          booking_id,
          amount,
          currency,
          provider,
          status
        ) VALUES ($1, $2, $3, $4, 'razorpay', 'created')`,
        [rzpData.id, 0, amountInDollars, currency]
      );
    } catch (dbErr) {
      console.warn('[payment/create-order] DB order record warning:', dbErr);
    }

    return new Response(
      JSON.stringify({
        success: true,
        orderId: rzpData.id,
        amount: rzpData.amount,
        currency: rzpData.currency,
        keyId: keyId,
        targetCountry,
        passport,
        selectedPurpose,
        userName,
        userEmail,
        userPhone
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('[API /api/payment/create-order POST] Error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || 'Server error creating order.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
