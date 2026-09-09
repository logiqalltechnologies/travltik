import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import readline from 'readline';
import { execSync } from 'child_process';

const ORIGINAL_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data');
const TEST_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data-test');
const REPORTS_DIR = path.join(process.cwd(), 'healing-reports');

// ================================================================
// PRIORITY COUNTRIES (Already Healed, Need Verification)
// ================================================================

const PRIORITY_COUNTRIES = [
  'france', 'greece', 'uk', 'australia', 'south-africa',
  'usa', 'canada', 'uae', 'thailand', 'singapore',
  'germany', 'italy', 'spain', 'netherlands', 'switzerland'
];

// ================================================================
// 1. VERIFY PRIORITY COUNTRIES
// ================================================================

export async function verifyPriorityCountries() {
  console.log(chalk.bold.blue('\n🔍 Verifying Priority Countries...'));
  
  const results: any[] = [];
  
  for (const country of PRIORITY_COUNTRIES) {
    const originalFile = path.join(ORIGINAL_DIR, country, 'tourism.ts');
    const testFile = path.join(TEST_DIR, country, 'tourism.ts');
    
    if (!fs.existsSync(testFile)) {
      console.log(chalk.yellow(`⚠️ Test file not found: ${country}`));
      results.push({ country, status: 'missing' });
      continue;
    }
    
    if (!fs.existsSync(originalFile)) {
      console.log(chalk.yellow(`📝 New country: ${country} (no original file)`));
      results.push({ country, status: 'new' });
      continue;
    }
    
    // Show diff
    console.log(chalk.cyan(`\n📊 ${country.toUpperCase()}:`));
    try {
      const diff = execSync(
        `git diff --no-index "${originalFile}" "${testFile}"`,
        { encoding: 'utf8', stdio: 'pipe' }
      );
      if (diff.length > 0) {
        console.log(chalk.green('✅ Changes found:'));
        console.log(diff.slice(0, 500));
        results.push({ country, status: 'changed', diff: diff.slice(0, 500) });
      } else {
        console.log(chalk.gray('ℹ️ No changes'));
        results.push({ country, status: 'same' });
      }
    } catch (err: any) {
      // git diff exits with code 1 if differences are found
      const diff = err.stdout?.toString() || '';
      if (diff.length > 0) {
        console.log(chalk.green('✅ Changes found:'));
        console.log(diff.slice(0, 500));
        results.push({ country, status: 'changed', diff: diff.slice(0, 500) });
      } else {
        results.push({ country, status: 'error' });
      }
    }
  }
  
  return results;
}

// ================================================================
// 2. APPLY RUSSIA TO ORIGINAL
// ================================================================

export async function applyRussia() {
  console.log(chalk.bold.blue('\n🇷🇺 Applying Russia to original...'));
  
  const testFile = path.join(TEST_DIR, 'russia', 'tourism.ts');
  const originalFile = path.join(ORIGINAL_DIR, 'russia', 'tourism.ts');
  
  if (!fs.existsSync(testFile)) {
    console.log(chalk.red('❌ Russia test file not found'));
    return false;
  }
  
  // Backup original
  if (fs.existsSync(originalFile)) {
    const backup = originalFile + '.backup';
    fs.copyFileSync(originalFile, backup);
    console.log(chalk.green(`✅ Backup created: ${backup}`));
  }
  
  // Copy test to original
  fs.copyFileSync(testFile, originalFile);
  console.log(chalk.green('✅ Russia applied to original!'));
  
  return true;
}

// ================================================================
// 3. HEAL ALL COUNTRIES
// ================================================================

export async function healAllCountries() {
  console.log(chalk.bold.blue('\n🚀 Healing all countries...'));
  
  // Run the batch heal
  execSync('npm run visa:batch:heal', { stdio: 'inherit' });
  
  console.log(chalk.green('✅ All countries healed!'));
}

// ================================================================
// 4. VERIFY ALL CHANGES
// ================================================================

export async function verifyAllChanges() {
  console.log(chalk.bold.blue('\n🔍 Verifying all changes...'));
  
  if (!fs.existsSync(TEST_DIR)) {
    console.log(chalk.red('❌ Test directory not found: ' + TEST_DIR));
    return { changed: 0, newFiles: 0, same: 0 };
  }

  const countries = fs.readdirSync(TEST_DIR).filter(f => 
    fs.statSync(path.join(TEST_DIR, f)).isDirectory()
  );
  
  let changed = 0;
  let newFiles = 0;
  let same = 0;
  
  for (const country of countries) {
    const testFile = path.join(TEST_DIR, country, 'tourism.ts');
    const originalFile = path.join(ORIGINAL_DIR, country, 'tourism.ts');
    
    if (!fs.existsSync(testFile)) continue;
    
    if (!fs.existsSync(originalFile)) {
      newFiles++;
      console.log(chalk.yellow(`📝 New: ${country}`));
      continue;
    }
    
    try {
      const diff = execSync(
        `git diff --no-index "${originalFile}" "${testFile}"`,
        { encoding: 'utf8', stdio: 'pipe' }
      );
      if (diff.length > 0) {
        changed++;
        console.log(chalk.green(`✅ Changed: ${country}`));
      } else {
        same++;
      }
    } catch (err: any) {
      const diff = err.stdout?.toString() || '';
      if (diff.length > 0) {
        changed++;
        console.log(chalk.green(`✅ Changed: ${country}`));
      } else {
        same++;
      }
    }
  }
  
  console.log(chalk.bold.blue('\n📊 Summary:'));
  console.log(`  ✅ Changed: ${changed}`);
  console.log(`  📝 New: ${newFiles}`);
  console.log(`  ℹ️ Same: ${same}`);
  
  return { changed, newFiles, same };
}

// ================================================================
// 5. APPLY ALL TO ORIGINAL
// ================================================================

export async function applyAllToOriginal() {
  console.log(chalk.bold.yellow('\n⚠️ WARNING: This will apply ALL test changes to original files!'));
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const answer = await new Promise<string>(resolve => {
    rl.question(chalk.red('\nType "yes" to confirm: '), resolve);
  });
  rl.close();
  
  if (answer.trim().toLowerCase() !== 'yes') {
    console.log(chalk.gray('❌ Cancelled. Original files untouched.'));
    return;
  }
  
  if (!fs.existsSync(TEST_DIR)) {
    console.log(chalk.red('❌ Test directory not found: ' + TEST_DIR));
    return;
  }

  const countries = fs.readdirSync(TEST_DIR).filter(f => 
    fs.statSync(path.join(TEST_DIR, f)).isDirectory()
  );
  
  let applied = 0;
  
  for (const country of countries) {
    const testFile = path.join(TEST_DIR, country, 'tourism.ts');
    const originalFile = path.join(ORIGINAL_DIR, country, 'tourism.ts');
    
    if (!fs.existsSync(testFile)) continue;
    
    // Create directory if not exists
    const dir = path.dirname(originalFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Backup original
    if (fs.existsSync(originalFile)) {
      const backup = originalFile + '.backup';
      fs.copyFileSync(originalFile, backup);
    }
    
    // Copy test to original
    fs.copyFileSync(testFile, originalFile);
    applied++;
  }
  
  console.log(chalk.green(`\n✅ Applied ${applied} files to original directory.`));
}

// ================================================================
// 6. GENERATE FINAL REPORT
// ================================================================

export async function generateFinalReport() {
  console.log(chalk.bold.blue('\n📊 Generating final report...'));
  
  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const countries = fs.existsSync(TEST_DIR) ? fs.readdirSync(TEST_DIR).filter(f => 
    fs.statSync(path.join(TEST_DIR, f)).isDirectory()
  ) : [];
  
  let html = `
<!DOCTYPE html>
<html>
<head>
  <title>Visa Data Healing - Final Report</title>
  <style>
    body { font-family: Arial; padding: 20px; background: #f8fafc; }
    .card { background: white; border-radius: 12px; padding: 20px; margin: 10px 0; }
    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .stat { padding: 16px; border-radius: 8px; text-align: center; font-weight: bold; }
    .stat-applied { background: #bbf7d0; color: #166534; }
    .stat-total { background: #e0e7ff; color: #3730a3; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    th, td { padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { background: #f1f5f9; }
  </style>
</head>
<body>
  <h1>📊 Visa Data Healing - Final Report</h1>
  <p>Generated: ${new Date().toLocaleString()}</p>
  
  <div class="card">
    <div class="stats">
      <div class="stat stat-applied">✅ Applied: ${countries.length}</div>
      <div class="stat stat-total">📊 Total Countries: ${countries.length}</div>
    </div>
  </div>
  
  <div class="card">
    <h2>📋 Countries Applied</h2>
    <table>
      <tr><th>#</th><th>Country</th><th>Status</th></tr>
      ${countries.map((c, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${c}</td>
          <td class="applied">✅ Applied</td>
        </tr>
      `).join('')}
    </table>
  </div>
</body>
</html>
  `;
  
  const reportPath = path.join(REPORTS_DIR, 'final-report.html');
  fs.writeFileSync(reportPath, html);
  console.log(chalk.green(`✅ Final report: ${reportPath}`));
}

// ================================================================
// CLI ENTRY POINT
// ================================================================

const args = process.argv.slice(2);
const command = args[0];

async function main() {
  switch (command) {
    case 'verify':
      await verifyPriorityCountries();
      break;
    case 'russia':
      await applyRussia();
      break;
    case 'heal':
      await healAllCountries();
      break;
    case 'verify-all':
      await verifyAllChanges();
      break;
    case 'apply':
      await applyAllToOriginal();
      break;
    case 'report':
      await generateFinalReport();
      break;
    case 'full':
      console.log(chalk.bold.blue('🚀 Running full pipeline...'));
      await applyRussia();
      await healAllCountries();
      await verifyAllChanges();
      await generateFinalReport();
      console.log(chalk.green('\n✅ Full pipeline complete!'));
      break;
    default:
      console.log(`
📋 Visa Data Apply & Verify System

Commands:
  npm run visa:apply:russia     # Apply Russia to original
  npm run visa:apply:verify     # Verify priority countries
  npm run visa:apply:heal       # Heal all countries
  npm run visa:apply:verify-all # Verify all changes
  npm run visa:apply:all        # Apply all to original (⚠️ confirmation)
  npm run visa:apply:report     # Generate final report
  npm run visa:apply:full       # Full pipeline (Russia + Heal + Verify + Report)

Priority Countries: ${PRIORITY_COUNTRIES.join(', ')}
      `);
  }
}

main().catch(console.error);
