import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../backend/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    await runMigrations();
    const pool = getPool();
    const result = await pool.query(`SELECT * FROM ads ORDER BY id DESC LIMIT 50;`);
    return new Response(JSON.stringify({ status: 'success', ads: result.rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ status: 'error', ads: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
