import type { APIRoute } from 'astro';
import crypto from 'crypto';
import { getPool } from '../../../backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET || process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    return new Response(
      JSON.stringify({ error: 'Webhook secret not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const signature = request.headers.get('x-razorpay-signature');
  if (!signature) {
    return new Response(
      JSON.stringify({ error: 'Missing signature' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const rawBody = await request.text();

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  if (signature !== expectedSignature) {
    return new Response(
      JSON.stringify({ error: 'Invalid signature' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const event = JSON.parse(rawBody);

  try {
    const pool = getPool();
    // Handle escrow events
    switch (event.event) {
      case 'payment.captured': {
        // Update escrow status to 'funded'
        const paymentEntity = event.payload?.payment?.entity;
        const orderId = paymentEntity?.order_id;
        if (orderId) {
          await pool.query(
            `UPDATE payment_orders SET status = 'funded', updated_at = NOW() WHERE order_id = $1`,
            [orderId]
          );
        }
        break;
      }
      case 'refund.processed': {
        // Update escrow status to 'refunded'
        const paymentEntity = event.payload?.payment?.entity;
        const orderId = paymentEntity?.order_id;
        if (orderId) {
          await pool.query(
            `UPDATE payment_orders SET status = 'refunded', updated_at = NOW() WHERE order_id = $1`,
            [orderId]
          );
        }
        break;
      }
    }
  } catch (dbErr) {
    console.warn('[escrow webhook] DB update skipped or logged:', dbErr);
  }

  return new Response(
    JSON.stringify({ received: true }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
