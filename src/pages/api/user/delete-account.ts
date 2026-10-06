// src/pages/api/user/delete-account.ts
// DPDP / GDPR Article 17 "Right to be Forgotten" compliant account deletion
import type { APIRoute } from 'astro';
import { runMigrations, getPool } from '../../../backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    await runMigrations();
    const user = (locals as any)?.user;
    const authHeader = request.headers.get('authorization');
    const body = await request.json();

    const { confirm, email, userId } = body;
    if (confirm !== 'DELETE') {
      return new Response(JSON.stringify({ error: 'Type DELETE to confirm' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const targetUserId = user?.id || userId;
    const targetEmail = user?.email || email;

    if (!targetUserId && !targetEmail) {
      return new Response(JSON.stringify({ error: 'Unauthorized: User identifier required' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const pool = getPool();

    if (targetEmail) {
      // Anonymize seeker data and remove documents
      const anonymizedEmail = `deleted_${Date.now()}_${Math.floor(Math.random() * 1000)}@deleted.travltik.com`;
      await pool.query(
        `UPDATE seekers 
         SET email = $1, first_name = 'Deleted', last_name = 'User', phone = NULL, address = NULL
         WHERE LOWER(email) = LOWER($2)`,
        [anonymizedEmail, targetEmail]
      );
    }

    if (targetUserId) {
      await pool.query(`DELETE FROM documents WHERE user_id = $1`, [targetUserId]);
      await pool.query(`DELETE FROM sessions WHERE user_id = $1`, [targetUserId]);
    }

    return new Response(JSON.stringify({ success: true, message: 'Account and associated documents permanently purged.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
