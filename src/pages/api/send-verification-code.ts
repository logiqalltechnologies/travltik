// src/pages/api/send-verification-code.ts
import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../backend/db';
import { Resend } from 'resend';
import crypto from 'crypto';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, allowExisting = false } = body;

    if (!email) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Email is required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    
    await runMigrations();
    const pool = getPool();

    // Check if email already exists in seekers or experts table
    const [seekerRes, expertRes] = await Promise.all([
      pool.query('SELECT id FROM seekers WHERE LOWER(email) = LOWER($1)', [normalizedEmail]),
      pool.query('SELECT id FROM experts WHERE LOWER(email) = LOWER($1)', [normalizedEmail])
    ]);

    if ((seekerRes.rows.length > 0 || expertRes.rows.length > 0) && !allowExisting) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Email already registered. Please login instead.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check cooldown (30 seconds between requests)
    const existingOtp = await pool.query(
      'SELECT created_at FROM email_verifications WHERE LOWER(email) = LOWER($1) ORDER BY created_at DESC LIMIT 1',
      [normalizedEmail]
    );

    if (existingOtp.rows.length > 0) {
      const lastAttempt = new Date(existingOtp.rows[0].created_at);
      const secondsSince = (Date.now() - lastAttempt.getTime()) / 1000;
      if (secondsSince < 30) {
        return new Response(JSON.stringify({ 
          status: 'error', 
          message: 'COOLDOWN_ACTIVE',
          cooldownSecondsLeft: Math.ceil(30 - secondsSince)
        }), {
          status: 429,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Generate OTP
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const hashedOtp = crypto.createHash('sha256').update(otp).digest('hex');
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Save OTP to database
    await pool.query(
      `INSERT INTO email_verifications (email, otp_hash, expires_at, verified, attempts, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW())
       ON CONFLICT (email) DO UPDATE 
       SET otp_hash = $2, expires_at = $3, verified = $4, attempts = $5, created_at = NOW()`,
      [normalizedEmail, hashedOtp, expiresAt, false, 0]
    );

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'TravlTik <no-reply@travltik.com>',
        to: normalizedEmail,
        subject: 'Your Verification Code - TravlTik',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #333;">Email Verification</h2>
            <p style="color: #666;">Your verification code is:</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #333;">
              ${otp}
            </div>
            <p style="color: #666; margin-top: 20px;">This code will expire in 10 minutes.</p>
            <p style="color: #999; font-size: 12px; margin-top: 30px;">If you didn't request this, please ignore this email.</p>
          </div>
        `
      });

      if (error) {
        console.error('[Resend] Error:', error);
      }
    }

    return new Response(JSON.stringify({ 
      status: 'success', 
      message: 'Verification code sent successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[send-verification-code] Error:', error);
    return new Response(JSON.stringify({ 
      status: 'error', 
      message: 'Server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
