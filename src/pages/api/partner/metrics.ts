import type { APIRoute } from 'astro';
import { getPool, runMigrations } from '../../../backend/db';

export const prerender = false;

async function verifyPartnerSession(token: string) {
  const pool = getPool();
  const res = await pool.query(
    `SELECT ps.partner_id, cp.company_name, cp.email, cp.role, cp.tier, cp.country, cp.contact_person
     FROM partner_sessions ps
     JOIN channel_partners cp ON cp.id = ps.partner_id
     WHERE ps.token = $1 AND ps.expires_at > NOW()`,
    [token]
  );
  return res.rows[0] || null;
}

export const GET: APIRoute = async ({ cookies }) => {
  try {
    await runMigrations();
    const token = cookies.get('cp_sid')?.value;
    if (!token) return new Response(JSON.stringify({ success: false, message: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });

    const session = await verifyPartnerSession(token);
    if (!session) return new Response(JSON.stringify({ success: false, message: 'Session expired' }), { status: 401, headers: { 'Content-Type': 'application/json' } });

    const pool = getPool();
    const cpId = session.partner_id;

    const [spRes, rcRes, expRes, spTotal] = await Promise.all([
      pool.query('SELECT id, partner_name, company_name, operating_state, email, phone, status, created_at FROM state_partners WHERE country_partner_id = $1 OR country_partner_id IS NULL ORDER BY created_at DESC', [cpId]),
      pool.query('SELECT id, consultant_name, email, phone, region, speciality, status, revenue, commission, leads_count, state_partner_id, created_at FROM referral_consultants WHERE country_partner_id = $1 ORDER BY created_at DESC', [cpId]),
      pool.query('SELECT id, business_name, full_name, email, contact_number, city, country, advisor_type, created_at, is_verified FROM experts WHERE channel_partner_id = $1 ORDER BY created_at DESC', [cpId]),
      pool.query('SELECT COUNT(*) FROM state_partners WHERE country_partner_id = $1 OR country_partner_id IS NULL', [cpId]),
    ]);

    const spMap: Record<number, string> = {};
    spRes.rows.forEach((sp: any) => { spMap[sp.id] = sp.partner_name; });

    const seenEmails = new Set<string>();
    const consultants: any[] = [];

    // 1. Add consultants from referral_consultants
    rcRes.rows.forEach((rc: any) => {
      const e = (rc.email || '').toLowerCase().trim();
      if (e) seenEmails.add(e);
      consultants.push({
        ...rc,
        revenue: parseFloat(rc.revenue || '0'),
        commission: parseFloat(rc.commission || '0'),
        leads_count: parseInt(rc.leads_count || '0', 10),
        state_partner_name: rc.state_partner_id ? (spMap[rc.state_partner_id] || 'Unassigned') : 'Unassigned'
      });
    });

    // 2. Also include service providers / experts who registered using this partner's referral code
    expRes.rows.forEach((exp: any) => {
      const e = (exp.email || '').toLowerCase().trim();
      if (!seenEmails.has(e)) {
        seenEmails.add(e);
        consultants.push({
          id: exp.id,
          consultant_name: exp.business_name || exp.full_name || 'Service Provider',
          email: exp.email,
          phone: exp.contact_number || '',
          region: exp.city || exp.country || 'Global',
          speciality: exp.advisor_type || 'Immigration Consultant',
          status: 'approved',
          revenue: 0,
          commission: 0,
          leads_count: 0,
          state_partner_id: null,
          state_partner_name: 'Direct (Referral Code)',
          created_at: exp.created_at
        });
      }
    });

    const approvedCount = consultants.filter((c: any) => c.status === 'approved' || c.status === 'active').length;
    const pendingCount = consultants.filter((c: any) => c.status === 'pending_workflow' || c.status === 'PENDING_APPROVAL').length;
    const totalRevenue = consultants.reduce((s: number, r: any) => s + (parseFloat(r.revenue) || 0), 0);
    const myCommission = consultants.reduce((s: number, r: any) => s + (parseFloat(r.commission) || 0), 0);
    const totalLeads = consultants.reduce((s: number, r: any) => s + (parseInt(r.leads_count, 10) || 0), 0);

    return new Response(JSON.stringify({
      success: true,
      partner: { company_name: session.company_name, email: session.email, role: session.role, tier: session.tier, country: session.country, contact_person: session.contact_person },
      metrics: {
        total_revenue: totalRevenue,
        my_commission: myCommission,
        total_leads: totalLeads,
        state_partners_count: parseInt(spTotal.rows[0].count, 10),
        approved_consultants: approvedCount,
        pending_consultants: pendingCount,
        conversion_rate: totalLeads > 0 ? parseFloat(((approvedCount / totalLeads) * 100).toFixed(1)) : 0,
      },
      state_partners: spRes.rows,
      consultants,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    console.error('[PartnerMetrics]', err);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
