import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '@/backend/db';
import crypto from 'crypto';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { expertId, email } = await request.json();

    if (!expertId || !email) {
      return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await runMigrations();
    const pool = getPool();
    const cleanId = String(expertId).replace(/^db_/i, '').trim();
    const numId = parseInt(cleanId, 10);

    if (isNaN(numId)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid business ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if business exists and not claimed
    const existing = await pool.query(
      `SELECT id, business_name, is_claimed FROM experts WHERE id = $1`,
      [numId]
    );

    if (existing.rows.length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'Business not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (existing.rows[0].is_claimed) {
      return new Response(JSON.stringify({ success: false, error: 'Business already claimed' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate claim token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    // Save claim request
    await pool.query(
      `INSERT INTO expert_claims (expert_id, claimant_email, claim_token, expires_at)
       VALUES ($1, $2, $3, $4)`,
      [numId, email.trim().toLowerCase(), token, expiresAt]
    );

    // Update expert status
    await pool.query(
      `UPDATE experts SET claim_status = 'pending', claim_token = $1, claim_token_expires_at = $2
       WHERE id = $3`,
      [token, expiresAt, numId]
    );

    // Verification URL
    const verifyUrl = `${process.env.SITE_URL || 'https://travltik.com'}/verify-claim?token=${token}`;
    console.log(`[CLAIM EMAIL] To: ${email}, Verify URL: ${verifyUrl}`);

    return new Response(JSON.stringify({ success: true, verifyUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('[claim API error]:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
