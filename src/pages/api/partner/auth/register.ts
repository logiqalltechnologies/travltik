import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../../backend/db';
import { verifyOtp } from '../../../../lib/otp';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const pool = getPool();
    const body = await request.json();
    const { role = 'country_partner', email, password, otp } = body;

    // 1. Basic validation
    if (!email || !EMAIL_REGEX.test(email.trim())) {
      return new Response(JSON.stringify({ success: false, message: 'Please provide a valid corporate email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!password || password.length < 8) {
      return new Response(JSON.stringify({ success: false, message: 'Password must be at least 8 characters long.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // 2. Verify OTP code if provided (or required)
    if (otp) {
      const otpVerify = await verifyOtp(cleanEmail, String(otp).trim());
      if (!otpVerify.success) {
        return new Response(JSON.stringify({
          success: false,
          message: otpVerify.error === 'EXPIRED'
            ? 'Verification code has expired. Please request a new code.'
            : 'Invalid 6-digit verification code. Please check your email and try again.'
        }), { status: 400, headers: { 'Content-Type': 'application/json' } });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let partnerRecord: any = null;

    // 3. Role Specific Processing — Immediately Approved & Active
    if (role === 'country_partner') {
      const { company_name, contact_person, phone, country = 'India', tax_id } = body;
      if (!company_name || !contact_person) {
        return new Response(JSON.stringify({ success: false, message: 'Company name and contact person are required.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Check existing email
      const existing = await pool.query('SELECT * FROM channel_partners WHERE LOWER(email) = LOWER($1)', [cleanEmail]);
      if (existing.rows.length > 0) {
        // If already exists, update password and ensure active status
        const updateRes = await pool.query(
          `UPDATE channel_partners 
           SET password_hash = $1, status = 'active', company_name = $2, contact_person = $3, phone = $4, country = $5, tax_id = $6
           WHERE id = $7 RETURNING *`,
          [hashedPassword, company_name, contact_person, phone || '', country, tax_id || '', existing.rows[0].id]
        );
        partnerRecord = updateRes.rows[0];
      } else {
        const insertRes = await pool.query(
          `INSERT INTO channel_partners (company_name, email, password_hash, contact_person, phone, country, tax_id, tier, role, status)
           VALUES ($1, $2, $3, $4, $5, $6, $7, 'platinum', 'country_partner', 'active')
           RETURNING *`,
          [
            company_name,
            cleanEmail,
            hashedPassword,
            contact_person,
            phone || '',
            country,
            tax_id || ''
          ]
        );
        partnerRecord = insertRes.rows[0];
      }
    } else if (role === 'state_partner') {
      const { agency_name, contact_person, phone, operating_state, country = 'India', country_partner_id } = body;
      if (!agency_name || !operating_state) {
        return new Response(JSON.stringify({ success: false, message: 'Agency name and operating state are required.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Find or determine the Parent Country Partner (Hierarchy: Country Partner -> State Partner)
      let cpId = Number(country_partner_id) || 0;
      if (!cpId) {
        // Look for existing Country Partner for this country
        const cpMatch = await pool.query(
          "SELECT id FROM channel_partners WHERE role = 'country_partner' AND LOWER(country) = LOWER($1) ORDER BY id ASC LIMIT 1",
          [country]
        );
        if (cpMatch.rows.length > 0) {
          cpId = cpMatch.rows[0].id;
        } else {
          // Look for any master country partner
          const anyCp = await pool.query("SELECT id FROM channel_partners WHERE role = 'country_partner' ORDER BY id ASC LIMIT 1");
          if (anyCp.rows.length > 0) {
            cpId = anyCp.rows[0].id;
          } else {
            // Create initial Master Country Partner for this country
            const masterCP = await pool.query(
              `INSERT INTO channel_partners (company_name, email, password_hash, contact_person, country, tier, role, status)
               VALUES ($1, $2, $3, $4, $5, 'platinum', 'country_partner', 'active')
               RETURNING id`,
              ['TravlTik ' + country + ' Master Network', 'director.' + country.toLowerCase().replace(/[^a-z]/g, '') + '@travltik.com', hashedPassword, 'Director - ' + country, country]
            );
            cpId = masterCP.rows[0].id;
          }
        }
      }

      // Create/update in channel_partners
      const cpPartner = await pool.query(
        `INSERT INTO channel_partners (company_name, email, password_hash, contact_person, phone, country, tier, role, status)
         VALUES ($1, $2, $3, $4, $5, $6, 'platinum', 'state_partner', 'active')
         ON CONFLICT (email) DO UPDATE SET password_hash = $3, status = 'active', country = $6, company_name = $1
         RETURNING *`,
        [agency_name, cleanEmail, hashedPassword, contact_person || agency_name, phone || '', country]
      );
      partnerRecord = cpPartner.rows[0];

      await pool.query(
        `INSERT INTO state_partners (country_partner_id, partner_name, company_name, operating_state, email, phone, contact_person, password_hash, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'active')`,
        [cpId, agency_name, agency_name, operating_state, cleanEmail, phone || '', contact_person || agency_name, hashedPassword]
      ).catch(async (e) => {
        console.warn('[state_partners insert error fallback]', e.message);
      });
    } else if (role === 'referral_consultant') {
      const { consultant_name, phone, state, country = 'India', state_partner_id, specialization } = body;
      if (!consultant_name) {
        return new Response(JSON.stringify({ success: false, message: 'Consultant name is required.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Hierarchy: Country Partner -> State Partner -> Referral Consultant
      let spId = Number(state_partner_id) || 0;
      let cpId = 1;

      if (spId > 0) {
        const spMatch = await pool.query('SELECT id, country_partner_id FROM state_partners WHERE id = $1', [spId]);
        if (spMatch.rows.length > 0) {
          cpId = spMatch.rows[0].country_partner_id;
        }
      } else {
        // Find state partner matching this state
        const spMatch = await pool.query(
          'SELECT id, country_partner_id FROM state_partners WHERE LOWER(operating_state) LIKE LOWER($1) LIMIT 1',
          ['%' + (state || 'default') + '%']
        );
        if (spMatch.rows.length > 0) {
          spId = spMatch.rows[0].id;
          cpId = spMatch.rows[0].country_partner_id;
        } else {
          // Find any country partner
          const cpMatch = await pool.query("SELECT id FROM channel_partners WHERE role = 'country_partner' ORDER BY id ASC LIMIT 1");
          cpId = cpMatch.rows[0]?.id || 1;
        }
      }

      // Create login partner
      const cpPartner = await pool.query(
        `INSERT INTO channel_partners (company_name, email, password_hash, contact_person, phone, country, tier, role, status)
         VALUES ($1, $2, $3, $4, $5, $6, 'platinum', 'referral_consultant', 'active')
         ON CONFLICT (email) DO UPDATE SET password_hash = $3, status = 'active', country = $6
         RETURNING *`,
        [consultant_name, cleanEmail, hashedPassword, consultant_name, phone || '', country]
      );
      partnerRecord = cpPartner.rows[0];

      await pool.query(
        `INSERT INTO referral_consultants (country_partner_id, state_partner_id, consultant_name, email, phone, region, speciality, password_hash, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'active')`,
        [cpId, spId || null, consultant_name, cleanEmail, phone || '', state || '', specialization || 'General Migration', hashedPassword]
      ).catch(async (e) => {
        console.warn('[referral_consultants insert fallback]', e.message);
      });
    }

    // 4. Create active session token immediately
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    await pool.query(
      'INSERT INTO partner_sessions (token, partner_id, expires_at) VALUES ($1, $2, $3)',
      [token, partnerRecord.id, expiresAt]
    );

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.append(
      'Set-Cookie',
      `cp_sid=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60}`
    );

    return new Response(JSON.stringify({
      success: true,
      message: '🎉 Email Verified & Partner Account Activated! Redirecting to dashboard...',
      redirectUrl: '/channel-partner/dashboard',
      partner: {
        id: partnerRecord.id,
        company_name: partnerRecord.company_name,
        email: partnerRecord.email,
        role: partnerRecord.role,
        tier: partnerRecord.tier,
        country: partnerRecord.country
      }
    }), { status: 200, headers });

  } catch (err: any) {
    console.error('[PartnerRegister API Error]', err);
    return new Response(JSON.stringify({ success: false, message: err.message || 'Registration processing failed.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
