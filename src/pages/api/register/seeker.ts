import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../backend/db';
import { createSession } from '../../../backend/auth';
import bcrypt from 'bcryptjs';
import { sendWelcomeEmail } from '../../../lib/email';
import { deleteOtpRecord, isEmailVerified } from '../../../lib/otp';
import { verifyTurnstileToken } from '../../../lib/verify-turnstile';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const tokenHeader = request.headers.get('x-turnstile-token');
    const turnstileToken = body.turnstileToken || tokenHeader;

    if (turnstileToken) {
      verifyTurnstileToken(turnstileToken, request).catch(() => {});
    }

    const { first_name, last_name, email, password, phone, passport_country, goals, destinations, looking_for, area, city, state, zip_code, address, current_visa_status, date_of_birth, dob } = body;
    const finalDob = date_of_birth || dob || null;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ status: 'error', message: 'Please provide a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await runMigrations();
    const pool = getPool();

    // Verify email verification has succeeded
    const otpCheck = await pool.query(
      'SELECT verified FROM email_verifications WHERE LOWER(email) = LOWER($1) AND verified = true ORDER BY created_at DESC LIMIT 1',
      [email.toLowerCase().trim()]
    );

    if (otpCheck.rows.length === 0) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Please verify your email first' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const [seekerCheck, expertCheck] = await Promise.all([
      pool.query('SELECT id FROM seekers WHERE LOWER(email) = LOWER($1)', [email]),
      pool.query('SELECT id FROM experts WHERE LOWER(email) = LOWER($1)', [email]),
    ]);
    if (seekerCheck.rows.length > 0 || expertCheck.rows.length > 0) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        code: 'EMAIL_ALREADY_EXISTS',
        message: 'This email is already registered. Please log in instead.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const isNew = true;

    // Hash password with bcrypt (12 salt rounds)
    const hashedPassword = password ? await bcrypt.hash(password, 12) : '';

    const fullAddress = address || [area, city, state, zip_code].filter(Boolean).join(', ');

    // Insert seeker record
    await pool.query(`
      INSERT INTO seekers (first_name, last_name, email, password_hash, phone, passport_country, goals, destinations, looking_for, area, city, state, zip_code, address, current_visa_status, date_of_birth)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      ON CONFLICT (email) DO UPDATE 
      SET first_name = $1, last_name = $2, phone = $5, passport_country = $6, goals = $7, destinations = $8, looking_for = $9, area = $10, city = $11, state = $12, zip_code = $13, address = $14, current_visa_status = $15, date_of_birth = $16;
    `, [
      first_name, 
      last_name, 
      email, 
      hashedPassword,
      phone, 
      passport_country, 
      JSON.stringify(goals || []), 
      JSON.stringify(destinations || []),
      looking_for || '',
      area || '',
      city || '',
      state || '',
      zip_code || '',
      fullAddress || '',
      current_visa_status || '',
      finalDob
    ]);

    if (isNew) {
      try {
        // Clean up OTP record after successful registration
        await deleteOtpRecord(email);
        // Send welcome email via EmailService
        await sendWelcomeEmail({
          firstName: first_name,
          displayName: `${first_name} ${last_name || ''}`.trim(),
          email,
          userType: 'seeker',
        });
      } catch (emailErr) {
        console.error('Post-registration actions failed for seeker:', emailErr);
      }
    }

    const userRes = await pool.query('SELECT * FROM seekers WHERE LOWER(email) = LOWER($1)', [email]);
    const user = userRes.rows[0];

    const token = await createSession(user.id, 'seeker');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append(
      'Set-Cookie',
      `travltik_sid=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60};`
    );

    return new Response(JSON.stringify({
      status: 'success',
      message: 'Seeker registered successfully!',
      user: {
        uid: `seeker_${user.id}`,
        email: user.email,
        displayName: `${user.first_name} ${user.last_name || ''}`.trim(),
        type: 'seeker',
        rawUser: { ...user, password_hash: undefined }
      }
    }), {
      status: 200,
      headers
    });
  } catch (err: any) {
    console.error('Seeker API error:', err);
    return new Response(JSON.stringify({ status: 'error', message: err.message || 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
