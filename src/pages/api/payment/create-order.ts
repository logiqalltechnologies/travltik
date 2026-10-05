// src/pages/api/payment/create-order.ts
// Creates real Razorpay order for $5 AI Visa Plan (3 queries)
import type { APIRoute } from 'astro';
import { runMigrations, getPool } from '../../../backend/db';
import crypto from 'crypto';

export const prerender = false;

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
      process.env.RAZORPAY_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      process.env.PUBLIC_RAZORPAY_KEY_ID ||
      (import.meta as any).env?.PUBLIC_RAZORPAY_KEY_ID ||
      (import.meta as any).env?.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      (import.meta as any).env?.RAZORPAY_KEY_ID ||
      'rzp_live_SXMX6RIgR8HDyH';

    const keySecret =
      process.env.RAZORPAY_KEY_SECRET ||
      (import.meta as any).env?.RAZORPAY_KEY_SECRET ||
      '5bNJ35RwCJ3yUZIVdSNxrDoE';

    if (!keyId || !keySecret) {
      return new Response(
        JSON.stringify({ success: false, error: 'Razorpay credentials not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Call real Razorpay API to generate live Order ID ($5.00 USD = 500 cents)
    const receiptId = `rcpt_visa_${Date.now().toString(36)}_${crypto.randomBytes(3).toString('hex')}`;
    const amountInCents = 500; // $5.00 USD
    const currency = 'USD';

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
          plan: 'visa_done_3_queries',
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
        [rzpData.id, 0, 5.00, currency]
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
