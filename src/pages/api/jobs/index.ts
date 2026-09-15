import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../backend/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    await runMigrations();
    const pool = getPool();

    const result = await pool.query(`
      SELECT * FROM work_permit_jobs
      WHERE status = 'active'
      ORDER BY created_at DESC
      LIMIT 100;
    `);

    // Map database snake_case fields back to component format
    const jobs = result.rows.map((row: any) => ({
      id: row.offer_id || `wp-${row.id}`,
      title: row.title,
      company: row.company,
      location: row.location,
      country: row.country,
      countryCode: row.country_code || 'eu',
      category: row.category || 'Engineering',
      salary: row.salary,
      salaryNote: row.salary_note,
      posted: row.posted || 'Recently',
      type: row.employment_type || 'Contract',
      sponsorship: row.sponsorship !== false,
      relocation: row.relocation !== false,
      featured: row.featured !== false,
      urgent: row.urgent !== false,
      logo: row.logo || '',
      heroImg: row.hero_img || '/images/job_construction_greece.png',
      tags: typeof row.tags === 'string' ? JSON.parse(row.tags) : (row.tags || []),
      desc: row.description || '',
      processSteps: typeof row.process_steps === 'string' ? JSON.parse(row.process_steps) : (row.process_steps || []),
      benefits: typeof row.benefits === 'string' ? JSON.parse(row.benefits) : (row.benefits || {}),
      costs: typeof row.costs === 'string' ? JSON.parse(row.costs) : (row.costs || {}),
      expertEmail: row.expert_email || '',
      isProviderOffer: true,
      createdAt: row.created_at,
    }));

    return new Response(JSON.stringify({
      status: 'success',
      count: jobs.length,
      jobs,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (err: any) {
    console.error('Failed to fetch work permit jobs:', err);
    return new Response(JSON.stringify({
      status: 'error',
      message: err.message || 'Failed to fetch jobs.',
      jobs: [],
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
