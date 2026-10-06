// src/lib/escrow.ts
import { runMigrations, getPool } from '../backend/db';

export async function createEscrowMilestones(bookingId: string, totalAmount: number) {
  await runMigrations();
  const pool = getPool();

  const milestones = [
    { order: 1, title: 'Document Verification', percentage: 20, amount: (totalAmount * 0.2).toFixed(2) },
    { order: 2, title: 'Application Filing', percentage: 30, amount: (totalAmount * 0.3).toFixed(2) },
    { order: 3, title: 'Embassy Submission', percentage: 50, amount: (totalAmount * 0.5).toFixed(2) },
  ];

  for (const m of milestones) {
    await pool.query(
      `INSERT INTO escrow_milestones (booking_id, step_order, title, percentage, amount, status)
       VALUES ($1, $2, $3, $4, $5, 'pending')`,
      [bookingId, m.order, m.title, m.percentage, m.amount]
    );
  }
}
