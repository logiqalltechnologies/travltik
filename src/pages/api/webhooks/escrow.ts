import type { APIRoute } from 'astro';
import crypto from 'crypto';
import { getPool } from '../../../backend/db';

export const prerender = false;
export const config = { api: { bodyParser: false } };

async function getRawBody(request: Request): Promise<Buffer> {
  const arrayBuffer = await request.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function updateEscrowStatus(bookingId: string, status: string, txnId: string) {
  try {
    const pool = getPool();
    // Atomic DB transaction: INITIATED → HELD_IN_ESCROW → RELEASED/DISPUTED
    await pool.query('BEGIN');
    if (bookingId) {
      await pool.query(
        `UPDATE bookings SET status = $1, payment_intent_id = $2, updated_at = NOW() WHERE id = $3`,
        [status === 'HELD_IN_ESCROW' ? 'confirmed' : status, txnId, bookingId]
      );
      await pool.query(
        `UPDATE payment_orders SET status = $1, updated_at = NOW() WHERE booking_id = $2 OR order_id = $2`,
        [status, bookingId]
      );
    }
    await pool.query('COMMIT');
  } catch (err) {
    try {
      const pool = getPool();
      await pool.query('ROLLBACK');
    } catch (_) {}
    console.error('[escrow webhook] DB transaction failed:', err);
  }
}

export const POST: APIRoute = async ({ request }) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET || process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    return new Response(
      JSON.stringify({ error: 'Webhook secret not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const rawBody = await getRawBody(request);
  const signature = request.headers.get('x-razorpay-signature') || '';

  if (!signature) {
    return new Response(
      JSON.stringify({ error: 'Missing signature' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  if (signature !== expectedSignature) {
    return new Response(
      JSON.stringify({ error: 'Invalid signature' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const payload = JSON.parse(rawBody.toString());

  if (payload.event === 'payment.captured') {
    const bookingId = payload.payload?.payment?.entity?.notes?.booking_id || payload.payload?.payment?.entity?.order_id;
    const txnId = payload.payload?.payment?.entity?.id || '';
    if (bookingId) {
      await updateEscrowStatus(bookingId, 'HELD_IN_ESCROW', txnId);
    }
  } else if (payload.event === 'refund.processed') {
    const bookingId = payload.payload?.payment?.entity?.notes?.booking_id || payload.payload?.payment?.entity?.order_id;
    const txnId = payload.payload?.payment?.entity?.id || '';
    if (bookingId) {
      await updateEscrowStatus(bookingId, 'REFUNDED', txnId);
    }
  }

  return new Response(JSON.stringify({ status: 'ok', received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
