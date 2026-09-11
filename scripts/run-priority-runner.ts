import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const LOG_FILE = path.join(process.cwd(), 'healing-reports', 'priority-runner.log');
fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });

function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

const BATCHES = [
  'P1_SEA',
  'P2_EASIA',
  'P3_SCHENGEN',
  'P4_AMERICAS',
  'P5_AFRICA',
  'P6_OCEANIA',
];

async function runBatch(batch: string) {
  log(`\n========================================`);
  log(`🚀 STARTING BATCH: ${batch}`);
  log(`========================================`);

  try {
    log(`▶️ Running: npm run visa:all -- --priority=${batch}`);
    execSync(`npm run visa:all -- --priority=${batch}`, {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: { ...process.env, npm_config_priority: batch },
    });
    log(`✅ Batch ${batch} COMPLETED successfully.`);

    log(`🔍 Running: npm run type-check`);
    try {
      execSync(`npm run type-check`, { stdio: 'inherit', cwd: process.cwd() });
      log(`✅ Type-check passed for ${batch}`);
    } catch (tErr: any) {
      log(`⚠️ Type-check reported errors (continuing pipeline)`);
    }

    log(`📤 Committing and pushing ${batch} to origin/main...`);
    try {
      execSync('git add src/data/country-visa-data package.json scripts healing-reports', { stdio: 'inherit', cwd: process.cwd() });
      execSync(`git commit -m "feat(visa-data): heal, verify & apply ${batch} batch"`, { stdio: 'inherit', cwd: process.cwd() });
      execSync('git push origin main', { stdio: 'inherit', cwd: process.cwd() });
      log(`🚀 ${batch} successfully pushed to origin/main.`);
    } catch (gErr: any) {
      log(`⚠️ Git commit/push note: ${gErr.message}`);
    }
  } catch (err: any) {
    log(`❌ Batch ${batch} FAILED: ${err.message}`);
  }
}

async function main() {
  log('🌟 Priority Batch Pipeline Runner Started');

  for (const batch of BATCHES) {
    await runBatch(batch);
  }

  log(`\n🎉 ALL PRIORITY BATCHES PROCESSED!`);
}

main().catch(err => {
  log(`💥 Fatal runner error: ${err.message}`);
  process.exit(1);
});
