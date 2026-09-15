import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../backend/db';
import { createSession } from '../../../backend/auth';
import bcrypt from 'bcryptjs';
import { sendWelcomeEmail } from '../../../lib/email';
import { deleteOtpRecord } from '../../../lib/otp';
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

    const { 
      business_name, email, password, contact_number, advisor_type, 
      about_me, portfolio_link, office_address, gov_registration_number, 
      license_document_url, expertise_tags, countries_expertise,
      business_type, year_established, business_email, business_phone,
      website, city, state, country, pin_code, full_name,
      experience_years, languages_spoken, services, is_google_verified
    } = body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ status: 'error', message: 'Please provide a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const pool = getPool();
    await runMigrations().catch(err => console.warn('[RegisterExpert] Migration check:', err));

    // ── Step 1: Duplicate Check (Seeker or Expert) ──────────────
    const cleanEmail = email.toLowerCase().trim();
    const [seekerCheck, expertCheck] = await Promise.all([
      pool.query('SELECT id FROM seekers WHERE LOWER(email) = LOWER($1)', [cleanEmail]),
      pool.query('SELECT id FROM experts WHERE LOWER(email) = LOWER($1)', [cleanEmail]),
    ]);
    if (seekerCheck.rows.length > 0 || expertCheck.rows.length > 0) {
      return new Response(JSON.stringify({
        status: 'error',
        code: 'EMAIL_ALREADY_EXISTS',
        message: 'This email is already registered. Please log in instead.'
      }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // ── Step 2: Mandatory OTP Verification Check (15 min validity) ───
    if (!is_google_verified) {
      const otpCheck = await pool.query(
        `SELECT verified, created_at FROM email_verifications 
         WHERE LOWER(email) = LOWER($1) AND verified = true 
           AND created_at > NOW() - INTERVAL '15 minutes'
         ORDER BY created_at DESC LIMIT 1`,
        [cleanEmail]
      );

      if (otpCheck.rows.length === 0) {
        return new Response(JSON.stringify({ 
          status: 'error', 
          code: 'EMAIL_NOT_VERIFIED',
          message: 'Please verify your email with the 6-digit code first.' 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Hash password with bcrypt (12 salt rounds)
    const hashedPassword = password ? await bcrypt.hash(password, 12) : '';

    const resolvedBusinessName = business_name || full_name || 'Business Partner';
    const resolvedAdvisorType = advisor_type || business_type || 'Consultant';
    const resolvedServices = expertise_tags || services || [];
    const resolvedCountries = typeof countries_expertise === 'string' ? countries_expertise : JSON.stringify(countries_expertise || []);
    const resolvedLanguages = typeof languages_spoken === 'string' ? languages_spoken : JSON.stringify(languages_spoken || []);
    const resolvedServiceCategory = body.service_category || body.serviceCategory || (Array.isArray(resolvedServices) && resolvedServices.includes('work_permit') ? 'work_permit' : 'work_permit');

    // ── Step 3: Insert Expert Record with Race Condition Protection ───
    try {
      await pool.query(`
        INSERT INTO experts (
          business_name, email, password_hash, contact_number, advisor_type, 
          about_me, portfolio_link, office_address, gov_registration_number, 
          license_document_url, expertise_tags, countries_expertise,
          business_type, year_established, business_email, business_phone,
          website, city, state, country, pin_code, full_name,
          experience_years, languages_spoken, is_google_verified, service_category
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26);
      `, [
        resolvedBusinessName,
        cleanEmail,
        hashedPassword,
        contact_number || business_phone || '',
        resolvedAdvisorType,
        about_me || '',
        website || portfolio_link || '',
        office_address || '',
        gov_registration_number || '',
        license_document_url || '',
        JSON.stringify(resolvedServices),
        resolvedCountries,
        business_type || '',
        year_established || '',
        business_email || cleanEmail,
        business_phone || contact_number || '',
        website || '',
        city || '',
        state || '',
        country || '',
        pin_code || '',
        full_name || '',
        experience_years || '',
        resolvedLanguages,
        !!is_google_verified,
        resolvedServiceCategory
      ]);
    } catch (insertErr: any) {
      // PostgreSQL unique constraint error code 23505
      if (insertErr?.code === '23505' || insertErr?.message?.includes('duplicate key') || insertErr?.message?.includes('unique')) {
        return new Response(JSON.stringify({
          status: 'error',
          code: 'EMAIL_ALREADY_EXISTS',
          message: 'This email is already registered. Please log in instead.'
        }), {
          status: 409,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      throw insertErr;
    }

    // ── Step 4: Cleanup OTP & Send Dedicated Service Provider Welcome Email ──
    try {
      await deleteOtpRecord(cleanEmail);
      await sendWelcomeEmail({
        firstName: full_name || resolvedBusinessName,
        displayName: resolvedBusinessName,
        email: cleanEmail,
        userType: 'expert',
      });
    } catch (emailErr) {
      console.error('Post-registration actions failed for expert:', emailErr);
    }

    const userRes = await pool.query('SELECT * FROM experts WHERE LOWER(email) = LOWER($1)', [email.toLowerCase().trim()]);
    const user = userRes.rows[0];

    const token = await createSession(user.id, 'expert');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append(
      'Set-Cookie',
      `travltik_sid=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60};`
    );

    return new Response(JSON.stringify({
      status: 'success',
      message: 'Expert registered successfully!',
      user: {
        uid: `expert_${user.id}`,
        email: user.email,
        displayName: user.business_name || full_name,
        type: 'expert',
        rawUser: { ...user, password_hash: undefined }
      }
    }), {
      status: 200,
      headers
    });
  } catch (err: any) {
    console.error('Expert API error:', err);
    return new Response(JSON.stringify({ status: 'error', message: err.message || 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
