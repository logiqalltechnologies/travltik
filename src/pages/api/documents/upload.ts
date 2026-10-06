// src/pages/api/documents/upload.ts
// Secure Document Upload Endpoint with Sovereign AES-256-GCM Field Encryption
import type { APIRoute } from 'astro';
import { runMigrations, getPool } from '../../../backend/db';
import { encrypt } from '../../../lib/encryption';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    await runMigrations();
    const pool = getPool();
    const user = (locals as any)?.user;
    const body = await request.json();

    const {
      userId = user?.id || 0,
      userType = 'seeker',
      label = 'Visa Supporting Document',
      documentType = 'Passport',
      fileName = 'document.pdf',
      fileUrl = '',
      passportNumber = '',
      bankAccount = '',
    } = body;

    // Encrypt sensitive legal identifiers using AES-256-GCM
    const encryptedPassportNo = passportNumber ? encrypt(passportNumber) : null;
    const encryptedBankAccount = bankAccount ? encrypt(bankAccount) : null;

    const result = await pool.query(
      `INSERT INTO documents (
        user_id,
        user_type,
        label,
        document_type,
        file_name,
        file_url,
        passport_number_encrypted,
        bank_account_encrypted,
        status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'uploaded')
      RETURNING id, label, document_type, file_name, file_url, status, created_at`,
      [
        Number(userId) || 0,
        userType,
        label,
        documentType,
        fileName,
        fileUrl,
        encryptedPassportNo,
        encryptedBankAccount,
      ]
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Document saved and sensitive fields encrypted with AES-256-GCM.',
        document: result.rows[0],
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
