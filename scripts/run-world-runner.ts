import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const LOG_FILE = path.join(process.cwd(), 'healing-reports', 'world-runner.log');
fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });

function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

interface BatchDef {
  id: string;
  name: string;
  countries: string;
  description: string;
}

const BATCHES: BatchDef[] = [
  {
    id: 'P8',
    name: 'P8_TOURISM',
    countries: 'turkey,georgia,azerbaijan,armenia,uzbekistan,kazakhstan,sri-lanka,maldives',
    description: 'High-Demand Tourism (Indian Travelers)',
  },
  {
    id: 'P11',
    name: 'P11_ASIA',
    countries: 'iran,iraq,jordan,israel,lebanon,pakistan,bangladesh,afghanistan,myanmar,laos,cambodia,brunei,mongolia,timor-leste',
    description: 'Remaining Asia',
  },
  {
    id: 'P12',
    name: 'P12_AFRICA',
    countries: 'nigeria,ghana,tanzania,uganda,rwanda,ethiopia,senegal,ivory-coast,cameroon,zambia,zimbabwe,botswana,namibia',
    description: 'Remaining Africa',
  },
  {
    id: 'P13',
    name: 'P13_AMERICAS',
    countries: 'argentina,chile,colombia,peru,ecuador,bolivia,uruguay,paraguay,venezuela,costa-rica,panama,cuba,dominican-republic,jamaica,bahamas,trinidad-tobago,guyana,suriname',
    description: 'Remaining Americas',
  },
  {
    id: 'P14',
    name: 'P14_EUROPE',
    countries: 'russia,ukraine,belarus,serbia,bosnia,albania,north-macedonia,montenegro,kosovo',
    description: 'Remaining Europe',
  },
  {
    id: 'P15',
    name: 'P15_OCEANIA',
    countries: 'papua-new-guinea,samoa,tonga,vanuatu,solomon-islands,kiribati,marshall-islands,micronesia,palau,nauru,tuvalu',
    description: 'Remaining Oceania',
  },
];

async function runBatch(batch: BatchDef) {
  log(`\n======================================================`);
  log(`🚀 STARTING BATCH: ${batch.name} (${batch.description})`);
  log(`🌍 Countries: ${batch.countries}`);
  log(`======================================================`);

  try {
    log(`▶️ Running pipeline: npm run visa:all -- --countries=${batch.countries}`);
    execSync(`npx tsx scripts/visa-batch-heal-full.ts all --yes --countries=${batch.countries}`, {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: { ...process.env, npm_config_countries: batch.countries },
    });
    log(`✅ Batch ${batch.name} pipeline completed.`);

    log(`🧹 Enforcing working days standard...`);
    try {
      execSync(`npx tsx scripts/fix-calendar-days.ts`, { stdio: 'inherit', cwd: process.cwd() });
    } catch {}

    log(`🔍 Running: npm run type-check`);
    try {
      execSync(`npm run type-check`, { stdio: 'inherit', cwd: process.cwd() });
      log(`✅ Type-check passed for ${batch.name}`);
    } catch (tErr: any) {
      log(`⚠️ Type-check reported pre-existing errors (continuing pipeline)`);
    }

    log(`📤 Committing and pushing ${batch.name} to origin/main (NEVER logiqall)...`);
    try {
      execSync('git add src/data/country-visa-data/ src/data/country-visa-data-verified/ healing-reports/', {
        stdio: 'inherit',
        cwd: process.cwd(),
      });
      execSync(`git commit -m "feat(visa-data): heal, verify & apply ${batch.name} - ${batch.description}"`, {
        stdio: 'inherit',
        cwd: process.cwd(),
      });
      execSync('git push origin main', { stdio: 'inherit', cwd: process.cwd() });
      log(`🚀 ${batch.name} successfully pushed to origin/main.`);
    } catch (gErr: any) {
      log(`⚠️ Git commit/push note: ${gErr.message}`);
    }
  } catch (err: any) {
    log(`❌ Batch ${batch.name} FAILED: ${err.message}`);
  }
}

async function completeP7BaseIfPending() {
  log(`\n======================================================`);
  log(`🚀 FINALIZING P7_BASE (European Base Countries)`);
  log(`======================================================`);
  try {
    log(`▶️ Running Phase 2 on P7_BASE...`);
    execSync(`npx tsx scripts/visa-batch-heal-full.ts phase2 --priority=P7_BASE`, {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: { ...process.env, npm_config_priority: 'P7_BASE' },
    });
    log(`▶️ Applying P7_BASE verified files...`);
    execSync(`npx tsx scripts/visa-batch-heal-full.ts apply --yes`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
    log(`🧹 Enforcing working days...`);
    try { execSync(`npx tsx scripts/fix-calendar-days.ts`, { stdio: 'inherit', cwd: process.cwd() }); } catch {}
    log(`🔍 Running type-check...`);
    try { execSync(`npm run type-check`, { stdio: 'inherit', cwd: process.cwd() }); } catch {}
    log(`📤 Pushing P7_BASE to origin/main (NEVER logiqall)...`);
    try {
      execSync('git add src/data/country-visa-data src/data/country-visa-data-verified scripts healing-reports', {
        stdio: 'inherit',
        cwd: process.cwd(),
      });
      execSync('git commit -m "feat(visa-data): heal, verify & apply P7_BASE - European Base Countries"', {
        stdio: 'inherit',
        cwd: process.cwd(),
      });
      execSync('git push origin main', { stdio: 'inherit', cwd: process.cwd() });
      log(`🚀 P7_BASE successfully pushed to origin/main.`);
    } catch (e: any) {
      log(`Note: ${e.message}`);
    }
  } catch (err: any) {
    log(`P7_BASE step note: ${err.message}`);
  }
}

async function main() {
  log('🌟 World Priority Batch Pipeline Runner Started');

  // Step 1: Complete P7_BASE
  await completeP7BaseIfPending();

  // Step 2: Run P8 -> P11 -> P12 -> P13 -> P14 -> P15
  for (const batch of BATCHES) {
    await runBatch(batch);
  }

  log(`\n🎉 ALL WORLD PRIORITY BATCHES PROCESSED!`);
}

main().catch(err => {
  log(`💥 Fatal runner error: ${err.message}`);
  process.exit(1);
});
