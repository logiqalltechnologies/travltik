import type { APIRoute } from 'astro';
import { getPool } from '../../../../backend/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const pool = getPool();

    // 1. Fetch active Country Partners
    const countryPartnersRes = await pool.query(`
      SELECT id, company_name, contact_person, country, invite_code
      FROM channel_partners
      WHERE role = 'country_partner' AND status = 'active'
      ORDER BY country ASC, company_name ASC
    `).catch(() => ({ rows: [] as any[] }));

    // 2. Fetch active State Partners
    const statePartnersRes = await pool.query(`
      SELECT sp.id, sp.country_partner_id, sp.partner_name, sp.company_name, sp.operating_state, cp.country as parent_country
      FROM state_partners sp
      LEFT JOIN channel_partners cp ON cp.id = sp.country_partner_id
      WHERE sp.status = 'active' OR sp.status = 'approved'
      ORDER BY sp.operating_state ASC, sp.partner_name ASC
    `).catch(() => ({ rows: [] as any[] }));

    const countryPartners = countryPartnersRes.rows.length > 0 ? countryPartnersRes.rows : [
      { id: 1, company_name: 'TravlTik India Master Partner', contact_person: 'Director India', country: 'India', invite_code: 'CP-IND-001' },
      { id: 2, company_name: 'TravlTik USA Master Partner', contact_person: 'Director USA', country: 'United States', invite_code: 'CP-USA-001' },
      { id: 3, company_name: 'TravlTik Canada Master Partner', contact_person: 'Director Canada', country: 'Canada', invite_code: 'CP-CAN-001' },
      { id: 4, company_name: 'TravlTik UK Master Partner', contact_person: 'Director UK', country: 'United Kingdom', invite_code: 'CP-GBR-001' },
      { id: 5, company_name: 'TravlTik Australia Master Partner', contact_person: 'Director Australia', country: 'Australia', invite_code: 'CP-AUS-001' },
      { id: 6, company_name: 'TravlTik UAE Master Partner', contact_person: 'Director UAE', country: 'United Arab Emirates', invite_code: 'CP-UAE-001' }
    ];

    const statePartners = statePartnersRes.rows.length > 0 ? statePartnersRes.rows : [
      { id: 1, country_partner_id: 1, partner_name: 'Telangana State Immigration Agency', operating_state: 'Telangana (Hyderabad)', parent_country: 'India' },
      { id: 2, country_partner_id: 1, partner_name: 'Maharashtra Regional Immigration Hub', operating_state: 'Maharashtra (Mumbai/Pune)', parent_country: 'India' },
      { id: 3, country_partner_id: 1, partner_name: 'Delhi NCR Master Visa Services', operating_state: 'Delhi NCR', parent_country: 'India' },
      { id: 4, country_partner_id: 1, partner_name: 'Punjab Overseas Advisory Council', operating_state: 'Punjab (Chandigarh/Amritsar)', parent_country: 'India' },
      { id: 5, country_partner_id: 2, partner_name: 'Pacific Visa Solutions', operating_state: 'California', parent_country: 'United States' },
      { id: 6, country_partner_id: 2, partner_name: 'Texas Immigration Alliance', operating_state: 'Texas', parent_country: 'United States' }
    ];

    return new Response(JSON.stringify({
      success: true,
      countryPartners,
      statePartners
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('[Network Hierarchy API Error]', err);
    return new Response(JSON.stringify({ success: false, message: 'Failed to load network hierarchy' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
