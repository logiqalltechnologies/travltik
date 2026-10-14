import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '@/backend/db';
import { verifySession } from '@/backend/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Enforce login check
    const cookieHeader = request.headers.get('Cookie') || '';
    const match = cookieHeader.match(/travltik_sid=([^;]+)/);
    const token = match ? match[1] : '';

    if (!token) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Please login to add your business.' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const session = await verifySession(token);
    if (!session || !session.user) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Session expired. Please login again.' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await request.json();
    const { businessType, businessName, website, email, phone, country, city, description } = data;

    // Validation
    if (!businessName || !email || !country || !city) {
      return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await runMigrations();
    const pool = getPool();

    // Check if business already exists
    const existing = await pool.query(
      `SELECT id FROM experts WHERE LOWER(business_name) = LOWER($1) AND LOWER(country) = LOWER($2)`,
      [businessName.trim(), country.trim()]
    );

    if (existing.rows.length > 0) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'This business already exists. Try claiming it instead.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if email already exists
    const existingEmail = await pool.query(
      `SELECT id FROM experts WHERE LOWER(email) = LOWER($1)`,
      [email.trim()]
    );
    if (existingEmail.rows.length > 0) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'An account with this email already exists. Try claiming or logging in.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert business linked with logged in user
    const result = await pool.query(
      `INSERT INTO experts (
        business_name, business_type, website, email, contact_number, 
        country, city, about_me, is_claimed, claim_status, password_hash
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, false, 'unclaimed', 'unclaimed_placeholder')
      RETURNING id, business_name as name`,
      [
        businessName.trim(), 
        businessType || 'consultant', 
        website ? website.trim() : null, 
        email.trim().toLowerCase(), 
        phone ? phone.trim() : null, 
        country.trim(), 
        city.trim(), 
        description ? description.trim() : null
      ]
    );

    return new Response(JSON.stringify({ 
      success: true, 
      expert: result.rows[0] 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('[add-business API error]:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
