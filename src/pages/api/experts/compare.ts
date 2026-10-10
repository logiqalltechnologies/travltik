import type { APIRoute } from 'astro';
import { runMigrations, getReadPool } from '../../../backend/db';

import { dummyExperts } from '../../../data/dummyExperts';

export const prerender = false;

function parseArray(val: any): string[] {
  if (!val) return [];
  if (Array.isArray(val)) {
    return val.map(x => String(x).replace(/^[\{\"\s]+|[\}\"\s]+$/g, '').trim()).filter(Boolean);
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
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const idsParam = url.searchParams.get('ids')?.trim() || '';
    if (!idsParam) {
      return new Response(JSON.stringify({ success: true, experts: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
      });
    }

    const rawIds = idsParam
      .split(',')
      .map(s => s.trim().replace(/^db_/i, ''))
      .filter(Boolean);

    if (rawIds.length === 0) {
      return new Response(JSON.stringify({ success: true, experts: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const numericIds = rawIds
      .map(s => parseInt(s, 10))
      .filter(n => !isNaN(n));

    const dummyIds = rawIds.filter(s => isNaN(parseInt(s, 10)) || s.toLowerCase().startsWith('d'));

    let dbExperts: any[] = [];
    if (numericIds.length > 0) {
      await runMigrations();
      const pool = getReadPool();

      const placeholders = numericIds.map((_, i) => `$${i + 1}`).join(',');
      const query = `
        SELECT
          e.id,
          e.business_name,
          e.full_name,
          e.email,
          e.advisor_type,
          e.about_me,
          e.office_address,
          e.city,
          e.state,
          e.country,
          e.gov_registration_number,
          e.license_no,
          e.license_type,
          e.experience_years,
          e.hourly_rate,
          e.response_time_minutes,
          e.success_rate,
          e.specializations,
          e.languages,
          e.languages_spoken,
          e.location,
          e.escrow_protected,
          e.rating,
          e.review_count,
          e.profile_photo,
          e.expertise_tags,
          e.countries_expertise,
          e.is_verified,
          COUNT(r.id)::int AS live_reviews_count,
          COALESCE(ROUND(AVG(r.rating)::numeric, 1), 0.0) AS live_avg_rating
        FROM experts e
        LEFT JOIN reviews r ON r.expert_id = e.id
        WHERE e.id IN (${placeholders})
        GROUP BY e.id
      `;

      const result = await pool.query(query, numericIds);

      dbExperts = result.rows.map((row: any) => {
        const dbRating = row.live_reviews_count > 0 ? Number(row.live_avg_rating) : (row.rating != null ? Number(row.rating) : 4.8);
        const dbReviews = row.live_reviews_count > 0 ? Number(row.live_reviews_count) : (row.review_count != null ? Number(row.review_count) : 12);

        let specializations = parseArray(row.specializations);
        if (specializations.length === 0) specializations = parseArray(row.expertise_tags);
        if (specializations.length === 0) specializations = ['Student Visa', 'PR', 'Work Permit'];

        let languages = parseArray(row.languages);
        if (languages.length === 0) languages = parseArray(row.languages_spoken);
        if (languages.length === 0) languages = ['English', 'Hindi'];

        const license = row.license_no || row.gov_registration_number || row.license_type || 'RCIC Verified';
        const licenseType = row.license_type || (row.gov_registration_number?.includes('RCIC') ? 'RCIC' : row.gov_registration_number?.includes('MARA') ? 'MARA' : 'Bar Council');
        const location = row.location || [row.city, row.country].filter(Boolean).join(', ') || 'Delhi, India';
        const hourlyRate = row.hourly_rate ? (String(row.hourly_rate).startsWith('₹') || String(row.hourly_rate).startsWith('$') ? String(row.hourly_rate) : `₹${row.hourly_rate}/hr`) : '₹2,000/hr';

        return {
          id: String(row.id),
          name: row.full_name || row.business_name || (row.email ? row.email.split('@')[0] : 'Expert Consultant'),
          businessName: row.business_name || '',
          avatar: (row.profile_photo && !row.profile_photo.includes('unsplash.com')) ? row.profile_photo : '',
          role: row.advisor_type || 'Immigration Specialist',
          license: license,
          licenseType: licenseType,
          experienceYears: row.experience_years ? (String(row.experience_years).includes('year') ? row.experience_years : `${row.experience_years} Years`) : '8 Years',
          rating: dbRating,
          reviewCount: dbReviews,
          hourlyRate: hourlyRate,
          responseTime: row.response_time_minutes ? (row.response_time_minutes <= 60 ? '< 1 hour' : `${Math.round(row.response_time_minutes / 60)} hours`) : '< 1 hour',
          successRate: row.success_rate ? `${row.success_rate}%` : '95%',
          specializations: specializations,
          languages: languages,
          location: location,
          escrowProtected: row.escrow_protected !== false,
          profileUrl: `/expert/${row.id}`
        };
      });
    }

    // Map any dummy IDs (e.g., d1, d2, d4)
    const dummyMapped = dummyExperts
      .filter(de => rawIds.includes(de.id.toLowerCase()))
      .map(de => ({
        id: de.id,
        name: de.name,
        businessName: de.businessName || '',
        avatar: de.image || '',
        role: de.role,
        license: de.govReg || 'RCIC-R54219',
        licenseType: de.govReg?.includes('ICCRC') ? 'RCIC' : de.govReg?.includes('OISC') ? 'OISC' : de.govReg?.includes('BAR') ? 'Bar Council' : 'Registered',
        experienceYears: String(de.experienceYears || '8+ Years'),
        rating: Number(de.rating) || 4.8,
        reviewCount: Number(de.reviews) || 120,
        hourlyRate: de.hourlyRate ? `₹${de.hourlyRate}/hr` : '₹2,500/hr',
        responseTime: '< 1 hour',
        successRate: '96%',
        specializations: de.tags && de.tags.length > 0 ? de.tags : ['Student Visa', 'Work Permit', 'PR'],
        languages: de.languages && de.languages.length > 0 ? de.languages : ['English', 'Hindi'],
        location: `${de.city}, India`,
        escrowProtected: true,
        profileUrl: `/expert/${de.id}`
      }));

    const allFound = [...dbExperts, ...dummyMapped];

    // Preserve the requested rawIds order
    const sortedExperts = rawIds
      .map(id => allFound.find(e => e.id.toLowerCase() === id.toLowerCase()))
      .filter(Boolean);

    return new Response(JSON.stringify({ success: true, experts: sortedExperts }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    });

  } catch (err: any) {
    console.error('[API /api/experts/compare] Error:', err);
    return new Response(
      JSON.stringify({ success: false, experts: [], error: err?.message || 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
