import type { APIRoute } from 'astro';
import { loginUser, createSession } from '../../backend/auth';
import { verifyTurnstileToken } from '../../lib/verify-turnstile';
import { getPool } from '../../backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, password, turnstileToken, role, portal, preferredRole } = body;
    const requestedRole = (role || portal || preferredRole) as ('seeker' | 'expert' | undefined);
    const tokenHeader = request.headers.get('x-turnstile-token');
    const cfToken = turnstileToken || tokenHeader;

    // Verify Cloudflare Turnstile token
    const isHuman = await verifyTurnstileToken(cfToken, request);
    if (!isHuman) {
      return new Response(JSON.stringify({ status: 'error', message: 'Security validation failed. Human verification required.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!email || !password) {
      return new Response(JSON.stringify({ status: 'error', message: 'Email and password are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { user, type } = await loginUser(email, password, requestedRole);
    const token = await createSession(user.id, type);

    // Link referral code or sync existing expert to referral_consultants
    let finalUser = user;
    if (type === 'expert') {
      const inputRefCode = String(body.referralCode || body.referral_code || '').trim();
      const pool = getPool();

      if (inputRefCode) {
        try {
          const cpMatch = await pool.query(
            'SELECT id FROM channel_partners WHERE LOWER(invite_code) = LOWER($1) LIMIT 1',
            [inputRefCode]
          );
          if (cpMatch.rows.length > 0) {
            const cpId = cpMatch.rows[0].id;
            await pool.query(
              'UPDATE experts SET channel_partner_id = $1, referral_code = $2 WHERE id = $3 AND (channel_partner_id IS NULL OR referral_code IS NULL)',
              [cpId, inputRefCode, user.id]
            );
            finalUser = { ...user, channel_partner_id: cpId, referral_code: inputRefCode };
          }
        } catch (linkErr) {
          console.warn('[Login Expert Referral Link Warning]', linkErr);
        }
      }

      // Ensure expert with channel_partner_id is synced to referral_consultants
      const activeCpId = finalUser.channel_partner_id || user.channel_partner_id;
      if (activeCpId) {
        try {
          const existingRef = await pool.query(
            'SELECT id FROM referral_consultants WHERE LOWER(email) = LOWER($1)',
            [user.email.toLowerCase().trim()]
          );
          if (existingRef.rows.length === 0) {
            await pool.query(
              `INSERT INTO referral_consultants (
                country_partner_id, consultant_name, email, phone, region, speciality, status
              ) VALUES ($1, $2, $3, $4, $5, $6, 'approved')`,
              [
                activeCpId,
                user.business_name || 'Service Provider',
                user.email,
                user.contact_number || user.business_phone || '',
                user.city || user.country || 'Global',
                user.advisor_type || 'Immigration Consultant'
              ]
            );
          } else {
            await pool.query(
              'UPDATE referral_consultants SET country_partner_id = $1 WHERE id = $2',
              [activeCpId, existingRef.rows[0].id]
            );
          }
        } catch (refErr) {
          console.warn('[Login Expert Sync Warning]', refErr);
        }
      }
    }

    // Set cookie headers for session persistence
    const isSecure = request.url.startsWith('https:') || request.headers.get('x-forwarded-proto') === 'https';
    const secureFlag = isSecure ? 'Secure; ' : '';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append(
      'Set-Cookie',
      `travltik_sid=${token}; Path=/; HttpOnly; ${secureFlag}SameSite=Lax; Max-Age=${30 * 24 * 60 * 60};`
    );

    const displayName = type === 'seeker' 
      ? `${user.first_name} ${user.last_name || ''}`.trim() 
      : finalUser.business_name;

    return new Response(JSON.stringify({
      status: 'success',
      user: {
        uid: `${type}_${user.id}`,
        email: user.email,
        displayName: displayName || 'User',
        type,
        rawUser: { ...finalUser, password_hash: undefined }
      }
    }), { status: 200, headers });

  } catch (err: any) {
    console.error('Login API error:', err);
    // Generic message to prevent email enumeration
    return new Response(JSON.stringify({ status: 'error', message: 'Invalid email or password.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
