// src/pages/api/bookings/[id]/escrow.ts
import type { APIRoute } from 'astro';
import { runMigrations, getPool } from '../../../../backend/db';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    await runMigrations();
    const pool = getPool();
    const bookingId = params.id;

    if (!bookingId) {
      return new Response(JSON.stringify({ error: 'Missing booking ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await pool.query(
      `SELECT id, booking_id as "bookingId", step_order as "order", title, percentage, amount, status, released_at as "releasedAt", proof_url as "proofUrl"
       FROM escrow_milestones
       WHERE booking_id = $1
       ORDER BY step_order ASC`,
      [bookingId]
    );

    return new Response(JSON.stringify({ milestones: result.rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
