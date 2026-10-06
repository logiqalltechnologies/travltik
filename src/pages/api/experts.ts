import type { APIRoute } from 'astro';
import { runMigrations, getReadPool } from '../../backend/db';
import { cacheGet, cacheSet } from '../../backend/redis';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const q       = url.searchParams.get('q')?.trim() || '';
    const country = url.searchParams.get('country')?.trim() || '';
    const purpose = url.searchParams.get('purpose')?.trim() || '';
    const city    = url.searchParams.get('city')?.trim() || '';

    const cacheKey = `experts:search:${q}:${country}:${purpose}:${city}`.toLowerCase();
    const cachedData = await cacheGet<any[]>(cacheKey);
    if (cachedData && Array.isArray(cachedData)) {
      return new Response(JSON.stringify({ success: true, experts: cachedData, total: cachedData.length, cached: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' }
      });
    }

    await runMigrations();
    const pool = getReadPool();

    // Build WHERE clause dynamically
    const conditions: string[] = [];
    const params: any[] = [];
    let idx = 1;

    // Show all valid expert profiles
    conditions.push(`((business_name IS NOT NULL AND business_name != '') OR (email IS NOT NULL AND email != ''))`);

    if (q) {
      conditions.push(`(
        LOWER(COALESCE(business_name, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(full_name, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(about_me, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(advisor_type, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(expertise_tags::text, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(countries_expertise::text, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(office_address, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(city, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(state, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(country, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(email, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(contact_number, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(service_category, '')) LIKE LOWER($${idx})
      )`);
      params.push(`%${q}%`);
      idx++;
    }

    if (country) {
      conditions.push(`(LOWER(COALESCE(countries_expertise::text, '')) LIKE LOWER($${idx}) OR LOWER(COALESCE(country, '')) LIKE LOWER($${idx}))`);
      params.push(`%${country}%`);
      idx++;
    }

    if (purpose) {
      let purposeKeyword = purpose.toLowerCase();
      if (purposeKeyword.includes('stud') || purposeKeyword.includes('student') || purposeKeyword.includes('education')) {
        purposeKeyword = 'stud';
      } else if (purposeKeyword.includes('work') || purposeKeyword.includes('job') || purposeKeyword.includes('permit')) {
        purposeKeyword = 'work';
      } else if (purposeKeyword.includes('visit') || purposeKeyword.includes('tourist')) {
        purposeKeyword = 'visit';
      }
      conditions.push(`(
        LOWER(COALESCE(expertise_tags::text, '')) LIKE LOWER($${idx}) OR 
        LOWER(COALESCE(advisor_type, '')) LIKE LOWER($${idx}) OR 
        LOWER(COALESCE(service_category, '')) LIKE LOWER($${idx}) OR
        LOWER(COALESCE(about_me, '')) LIKE LOWER($${idx})
      )`);
      params.push(`%${purposeKeyword}%`);
      idx++;
    }

    if (city) {
      conditions.push(`(LOWER(COALESCE(office_address, '')) LIKE LOWER($${idx}) OR LOWER(COALESCE(city, '')) LIKE LOWER($${idx}) OR LOWER(COALESCE(state, '')) LIKE LOWER($${idx}))`);
      params.push(`%${city}%`);
      idx++;
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const result = await pool.query(
      `SELECT
        id,
        business_name,
        full_name,
        email,
        contact_number,
        advisor_type,
        about_me,
        portfolio_link,
        office_address,
        city,
        state,
        country,
        gov_registration_number,
        expertise_tags,
        countries_expertise,
        profile_photo,
        is_verified,
        verification_status,
        verification_tier,
        hourly_rate,
        experience_years,
        languages_spoken,
        is_google_verified,
        service_category,
        created_at
      FROM experts
      ${where}
      ORDER BY created_at DESC
      LIMIT 100`,
      params
    );

    // Clean Postgres array format e.g. {"Uk","Canada"} or JSON array
    const parseArrayField = (val: any): string[] => {
      if (!val) return [];
      if (Array.isArray(val)) {
        return val.map(x => String(x).replace(/^[\{\"\s]+|[\}\"\s]+$/g, '')).filter(Boolean);
      }
      if (typeof val === 'string') {
        try {
          const parsed = JSON.parse(val);
          if (Array.isArray(parsed)) return parsed.map(x => String(x).trim()).filter(Boolean);
        } catch {}
        return val
          .replace(/^\{|\}$/g, '')
          .split(',')
          .map(x => x.replace(/^["'\s]+|["'\s]+$/g, '').trim())
          .filter(Boolean);
      }
      return [];
    };

    // Deduplicate by email ONLY so experts with similar business names are not dropped
    const seenEmails = new Set<string>();
    const uniqueRows = result.rows.filter((row: any) => {
      const emailKey = (row.email || String(row.id)).toLowerCase().trim();
      if (!emailKey) return true;
      if (seenEmails.has(emailKey)) return false;
      seenEmails.add(emailKey);
      return true;
    });

    const experts = uniqueRows.map((row: any) => {
      const tags = parseArrayField(row.expertise_tags);
      const countries = parseArrayField(row.countries_expertise);

      return {
        id: `db_${row.id}`,
        name: row.business_name || row.full_name || (row.email ? row.email.split('@')[0] : 'TravlTik Consultant'),
        businessName: row.business_name || '',
        fullName: row.full_name || '',
        role: row.advisor_type || 'Immigration Consultant',
        city: row.city || row.office_address || 'Remote',
        state: row.state || '',
        country: row.country || 'India',
        address: row.office_address || '',
        bio: row.about_me || 'Verified TravlTik Immigration Consultant.',
        email: row.email || '',
        phone: row.contact_number || '',
        govReg: row.gov_registration_number || '',
        portfolio: row.portfolio_link || '',
        tags: tags.length > 0 ? tags : ['Visa Consultation', 'Immigration'],
        countries: countries.length > 0 ? countries : ['Worldwide'],
        image: (row.profile_photo && !row.profile_photo.includes('unsplash.com')) ? row.profile_photo : '',
        rating: 5.0,
        reviews: 1,
        isVerified: row.is_verified === true || row.verification_status === 'active',
        isGoogleVerified: row.is_google_verified === true,
        verificationTier: row.verification_tier || 'email_verified',
        hourlyRate: row.hourly_rate || 49,
        experienceYears: row.experience_years || '',
        languages: parseArrayField(row.languages_spoken),
        serviceCategory: row.service_category || '',
        isRemote: true,
        createdAt: row.created_at,
      };
    });

    // Cache in Redis for 5 minutes (300 seconds)
    await cacheSet(cacheKey, experts, 300);

    return new Response(JSON.stringify({ success: true, experts, total: experts.length }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    });

  } catch (err: any) {
    console.error('[API /api/experts] Error:', err);
    return new Response(
      JSON.stringify({ success: false, experts: [], error: err?.message || 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
