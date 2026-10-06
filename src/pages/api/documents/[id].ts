import type { APIRoute } from 'astro';
import { runMigrations, getReadPool } from '../../../backend/db';
import { decrypt } from '../../../lib/encryption';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    await runMigrations();
    const pool = getReadPool();
    const docId = params.id;

    if (!docId) {
      return new Response(JSON.stringify({ error: 'Missing document ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await pool.query(
      `SELECT * FROM documents WHERE id = $1`,
      [Number(docId) || 0]
    );

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Document not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const doc = result.rows[0];

    // Transparently decrypt sensitive fields if encrypted
    const decryptedPassportNumber = doc.passport_number_encrypted
      ? decrypt(doc.passport_number_encrypted)
      : null;

    const decryptedBankAccount = doc.bank_account_encrypted
      ? decrypt(doc.bank_account_encrypted)
      : null;

    return new Response(
      JSON.stringify({
        success: true,
        document: {
          id: doc.id,
          userId: doc.user_id,
          userType: doc.user_type,
          label: doc.label,
          documentType: doc.document_type,
          fileName: doc.file_name,
          fileUrl: doc.file_url,
          status: doc.status,
          passportNumber: decryptedPassportNumber,
          bankAccount: decryptedBankAccount,
          createdAt: doc.created_at,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
