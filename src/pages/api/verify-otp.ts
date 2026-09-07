// src/pages/api/verify-otp.ts
import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../backend/db';
import crypto from 'crypto';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, otp } = body;

    if (!email || !otp) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Email and OTP are required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const hashedOtp = crypto.createHash('sha256').update(otp).digest('hex');

    await runMigrations();
    const pool = getPool();

    const result = await pool.query(
      `SELECT otp_hash, expires_at, verified, attempts 
       FROM email_verifications 
       WHERE LOWER(email) = LOWER($1) 
       ORDER BY created_at DESC LIMIT 1`,
      [normalizedEmail]
    );

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'INVALID' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const record = result.rows[0];

    // Check if already verified
    if (record.verified) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'ALREADY_VERIFIED' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check expiry
    if (new Date(record.expires_at) < new Date()) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'EXPIRED' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check attempts
    if (record.attempts >= 5) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'TOO_MANY_ATTEMPTS' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify OTP
    if (record.otp_hash !== hashedOtp) {
      await pool.query(
        'UPDATE email_verifications SET attempts = attempts + 1 WHERE LOWER(email) = LOWER($1)',
        [normalizedEmail]
      );
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'INVALID' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Mark as verified
    await pool.query(
      'UPDATE email_verifications SET verified = true WHERE LOWER(email) = LOWER($1)',
      [normalizedEmail]
    );

    return new Response(JSON.stringify({ 
      status: 'success', 
      message: 'Email verified successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[verify-otp] Error:', error);
    return new Response(JSON.stringify({ 
      status: 'error', 
      message: 'Server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
