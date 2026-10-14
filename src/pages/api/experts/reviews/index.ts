import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '@/backend/db';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    await runMigrations();
    const pool = getPool();

    // Fetch user from session or cookie
    const cookieHeader = request.headers.get('cookie') || '';
    const match = cookieHeader.match(/session=([^;]+)/);
    const token = match ? match[1] : '';

    let expertId: number | null = null;
    if (token) {
      const sessRes = await pool.query('SELECT user_id, user_type FROM sessions WHERE token = $1 AND expires_at > NOW()', [token]);
      if (sessRes.rows.length > 0 && sessRes.rows[0].user_type === 'expert') {
        expertId = sessRes.rows[0].user_id;
      }
    }

    if (!expertId) {
      // Return latest public reviews if not logged in
      const res = await pool.query(`SELECT * FROM expert_reviews ORDER BY created_at DESC LIMIT 20`);
      return new Response(JSON.stringify({ success: true, reviews: res.rows }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await pool.query(`SELECT * FROM expert_reviews WHERE expert_id = $1 ORDER BY created_at DESC`, [expertId]);
    return new Response(JSON.stringify({ success: true, reviews: res.rows }), {
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
