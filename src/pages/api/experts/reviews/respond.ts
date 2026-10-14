import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '@/backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { reviewId, response } = await request.json();

    if (!reviewId || !response) {
      return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await runMigrations();
    const pool = getPool();

    await pool.query(
      `UPDATE expert_reviews 
       SET owner_response = $1, owner_responded_at = NOW() 
       WHERE id = $2`,
      [response.trim(), reviewId]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
