import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      id,
      title,
      company,
      location,
      country,
      countryCode,
      category,
      salary,
      salaryNote,
      salaryAmount,
      salaryCurrency,
      salaryPeriod,
      posted,
      type,
      slots,
      sponsorship,
      relocation,
      featured,
      urgent,
      logo,
      heroImg,
      tags,
      desc,
      processSteps,
      benefits,
      costs,
      expertEmail,
    } = body;

    if (!title || !company) {
      return new Response(JSON.stringify({ status: 'error', message: 'Job title and company name are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await runMigrations();
    const pool = getPool();

    const offerId = id || `wp-${Date.now()}`;

    const query = `
      INSERT INTO work_permit_jobs (
        offer_id, title, company, location, country, country_code,
        category, salary, salary_note, salary_amount, salary_currency, salary_period,
        posted, employment_type, slots, sponsorship, relocation,
        featured, urgent, logo, hero_img, tags, description,
        process_steps, benefits, costs, expert_email, status
      )
      VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11, $12,
        $13, $14, $15, $16, $17,
        $18, $19, $20, $21, $22, $23,
        $24, $25, $26, $27, 'active'
      )
      ON CONFLICT (offer_id) DO UPDATE SET
        title = EXCLUDED.title,
        company = EXCLUDED.company,
        location = EXCLUDED.location,
        country = EXCLUDED.country,
        country_code = EXCLUDED.country_code,
        category = EXCLUDED.category,
        salary = EXCLUDED.salary,
        salary_note = EXCLUDED.salary_note,
        salary_amount = EXCLUDED.salary_amount,
        salary_currency = EXCLUDED.salary_currency,
        salary_period = EXCLUDED.salary_period,
        employment_type = EXCLUDED.employment_type,
        slots = EXCLUDED.slots,
        sponsorship = EXCLUDED.sponsorship,
        relocation = EXCLUDED.relocation,
        featured = EXCLUDED.featured,
        urgent = EXCLUDED.urgent,
        logo = EXCLUDED.logo,
        hero_img = EXCLUDED.hero_img,
        tags = EXCLUDED.tags,
        description = EXCLUDED.description,
        process_steps = EXCLUDED.process_steps,
        benefits = EXCLUDED.benefits,
        costs = EXCLUDED.costs,
        expert_email = EXCLUDED.expert_email
      RETURNING *;
    `;

    const values = [
      offerId,
      title,
      company,
      location || 'Europe 🌍',
      country || 'Europe',
      countryCode || 'eu',
      category || 'Engineering',
      salary || 'Competitive',
      salaryNote || 'per month',
      salaryAmount ? Number(salaryAmount) : null,
      salaryCurrency || 'USD',
      salaryPeriod || 'month',
      posted || 'Just now',
      type || 'Contract',
      slots ? Number(slots) : 1,
      sponsorship !== undefined ? Boolean(sponsorship) : true,
      relocation !== undefined ? Boolean(relocation) : true,
      featured !== undefined ? Boolean(featured) : true,
      urgent !== undefined ? Boolean(urgent) : true,
      logo || '',
      heroImg || '/images/job_construction_greece.png',
      JSON.stringify(tags || []),
      desc || '',
      JSON.stringify(processSteps || []),
      JSON.stringify(benefits || {}),
      JSON.stringify(costs || {}),
      expertEmail || '',
    ];

    const result = await pool.query(query, values);

    return new Response(JSON.stringify({
      status: 'success',
      message: 'Work permit job published successfully across the platform.',
      job: result.rows[0],
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Failed to create work permit job:', err);
    return new Response(JSON.stringify({
      status: 'error',
      message: err.message || 'Failed to save work permit job offer.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
