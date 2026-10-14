import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '@/backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { token } = await request.json();

    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Missing token' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await runMigrations();
    const pool = getPool();

    // Find valid claim
    const claim = await pool.query(
      `SELECT * FROM expert_claims 
       WHERE claim_token = $1 AND status = 'pending' AND expires_at > NOW()`,
      [token]
    );

    if (claim.rows.length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid or expired token' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const claimRecord = claim.rows[0];

    // Update expert
    await pool.query(
      `UPDATE experts 
       SET is_claimed = true, claim_status = 'claimed', claimed_at = NOW(),
           claim_token = NULL, claim_token_expires_at = NULL
       WHERE id = $1`,
      [claimRecord.expert_id]
    );

    // Update claim record
    await pool.query(
      `UPDATE expert_claims SET status = 'approved', approved_at = NOW() WHERE id = $1`,
      [claimRecord.id]
    );

    return new Response(JSON.stringify({ 
      success: true, 
      expertId: claimRecord.expert_id 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('[verify-claim API error]:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
