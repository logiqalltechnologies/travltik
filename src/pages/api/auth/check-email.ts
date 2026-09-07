// ============================================================
// src/pages/api/auth/check-email.ts
// Fast check if an email is already registered as seeker or expert
// ============================================================

import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email = (body.email || '').trim().toLowerCase();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        exists: false, 
        message: 'Invalid email format' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await runMigrations().catch(() => {});
    const pool = getPool();

    const [seekerCheck, expertCheck] = await Promise.all([
      pool.query('SELECT id FROM seekers WHERE LOWER(email) = LOWER($1) LIMIT 1', [email]),
      pool.query('SELECT id FROM experts WHERE LOWER(email) = LOWER($1) LIMIT 1', [email])
    ]);

    const isSeeker = seekerCheck.rows.length > 0;
    const isExpert = expertCheck.rows.length > 0;
    const exists = isSeeker || isExpert;

    let role: 'seeker' | 'expert' | 'both' | null = null;
    if (isSeeker && isExpert) role = 'both';
    else if (isSeeker) role = 'seeker';
    else if (isExpert) role = 'expert';

    return new Response(JSON.stringify({
      exists,
      role,
      message: exists 
        ? 'This email is already registered. Please log in instead.' 
        : 'Email is available for registration.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[check-email API error]:', err);
    return new Response(JSON.stringify({ 
      exists: false, 
      error: 'Server error checking email' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
