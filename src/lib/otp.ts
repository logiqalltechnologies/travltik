// src/lib/otp.ts
// OTP Generation, Storage & Verification

import crypto from 'crypto';
import { getPool, runMigrations } from '../backend/db';

export function generateOtp(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function hashOtp(otp: string): string {
  return crypto.createHash('sha256').update(otp).digest('hex');
}

export async function saveOtp(email: string, otp: string): Promise<{
  success: boolean;
  error?: string;
  cooldownSecondsLeft?: number;
}> {
  try {
    const pool = getPool();
    const normalizedEmail = email.toLowerCase().trim();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Check for existing OTP with cooldown
    const existing = await pool.query(
      'SELECT created_at, last_resend_at, resend_count FROM email_verifications WHERE LOWER(email) = LOWER($1) ORDER BY created_at DESC LIMIT 1',
      [normalizedEmail]
    ).catch(() => ({ rows: [] as any[] }));

    if (existing.rows.length > 0) {
      const row = existing.rows[0];
      const lastTime = row.last_resend_at || row.created_at;
      const lastAttempt = new Date(lastTime);
      const secondsSince = (Date.now() - lastAttempt.getTime()) / 1000;
      if (secondsSince < 15) {
        return {
          success: false,
          error: 'COOLDOWN_ACTIVE',
          cooldownSecondsLeft: Math.ceil(15 - secondsSince),
        };
      }
    }

    // Hash OTP for secure storage
    const hashedOtp = hashOtp(otp);

    await pool.query(
      `INSERT INTO email_verifications (email, otp_hash, expires_at, verified, attempts, created_at, resend_count, last_resend_at)
       VALUES ($1, $2, $3, $4, $5, NOW(), 1, NOW())
       ON CONFLICT (email) DO UPDATE 
       SET otp_hash = $2,
           expires_at = $3,
           verified = $4,
           attempts = $5,
           resend_count = email_verifications.resend_count + 1,
           last_resend_at = NOW()`,
      [normalizedEmail, hashedOtp, expiresAt, false, 0]
    );

    return { success: true };
  } catch (error) {
    console.error('[OTP] Save error:', error);
    return { success: false, error: 'Database error' };
  }
}

export async function verifyOtp(email: string, otp: string): Promise<{
  success: boolean;
  error?: 'NOT_FOUND' | 'EXPIRED' | 'TOO_MANY_ATTEMPTS' | 'INVALID' | 'ALREADY_VERIFIED' | 'SERVER_ERROR';
  attemptsRemaining?: number;
}> {
  try {
    const pool = getPool();
    const normalizedEmail = email.toLowerCase().trim();
    const hashedOtp = hashOtp(otp);

    const result = await pool.query(
      `SELECT otp_hash, expires_at, verified, attempts 
       FROM email_verifications 
       WHERE LOWER(email) = LOWER($1) 
       ORDER BY created_at DESC LIMIT 1`,
      [normalizedEmail]
    );

    if (result.rows.length === 0) {
      return { success: false, error: 'NOT_FOUND' };
    }

    const record = result.rows[0];

    // Check if already verified
    if (record.verified) {
      return { success: true, error: 'ALREADY_VERIFIED' };
    }

    // Check expiry
    if (new Date(record.expires_at) < new Date()) {
      return { success: false, error: 'EXPIRED' };
    }

    // Check attempts
    if (record.attempts >= 5) {
      return { success: false, error: 'TOO_MANY_ATTEMPTS', attemptsRemaining: 0 };
    }

    // Verify OTP
    if (record.otp_hash !== hashedOtp) {
      const newAttempts = (record.attempts || 0) + 1;
      await pool.query(
        'UPDATE email_verifications SET attempts = $1 WHERE LOWER(email) = LOWER($2)',
        [newAttempts, normalizedEmail]
      );
      return {
        success: false,
        error: newAttempts >= 5 ? 'TOO_MANY_ATTEMPTS' : 'INVALID',
        attemptsRemaining: Math.max(0, 5 - newAttempts),
      };
    }

    // Mark as verified
    await pool.query(
      'UPDATE email_verifications SET verified = true WHERE LOWER(email) = LOWER($1)',
      [normalizedEmail]
    );

    return { success: true };
  } catch (error) {
    console.error('[OTP] Verify error:', error);
    return { success: false, error: 'SERVER_ERROR' };
  }
}

export async function deleteOtpRecord(email: string): Promise<void> {
  try {
    const pool = getPool();
    await pool.query('DELETE FROM email_verifications WHERE LOWER(email) = LOWER($1)', [email.toLowerCase().trim()]);
  } catch (error) {
    console.warn('[OTP] Delete error:', error);
  }
}

export async function isEmailVerified(email: string): Promise<boolean> {
  try {
    const pool = getPool();
    const result = await pool.query(
      'SELECT verified FROM email_verifications WHERE LOWER(email) = LOWER($1) ORDER BY created_at DESC LIMIT 1',
      [email.toLowerCase().trim()]
    );
    return result.rows.length > 0 && result.rows[0].verified === true;
  } catch (error) {
    console.warn('[OTP] Check verification error:', error);
    return false;
  }
}
