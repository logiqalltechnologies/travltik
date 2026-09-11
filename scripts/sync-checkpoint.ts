import fs from 'fs';
import path from 'path';

// Sync checkpoint-phase1.json with actually existing files in test dir
const TEST_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data-test');
const REPORTS_DIR = path.join(process.cwd(), 'healing-reports');
const CHECKPOINT = path.join(REPORTS_DIR, 'checkpoint-phase1.json');

const allCountries = fs.readdirSync(TEST_DIR).filter(f => fs.statSync(path.join(TEST_DIR, f)).isDirectory());
const PURPOSES = ['tourism', 'student', 'work', 'business', 'family_visit'];

// Load existing checkpoint
let existing: Set<string> = new Set();
if (fs.existsSync(CHECKPOINT)) {
  try {
    const d = JSON.parse(fs.readFileSync(CHECKPOINT, 'utf-8'));
    existing = new Set(d.completed || []);
    console.log(`Loaded ${existing.size} existing checkpoint entries`);
  } catch { }
}

let added = 0;

for (const c of allCountries) {
  for (const p of PURPOSES) {
    const key = `${c}-${p}`;
    const filePath = path.join(TEST_DIR, c, `${p}.ts`);
    if (fs.existsSync(filePath)) {
      const size = fs.statSync(filePath).size;
      if (size > 100 && !existing.has(key)) {
        existing.add(key);
        added++;
        console.log(`  ✅ Marked as done: ${key} (${size} bytes)`);
      }
    }
  }
}

// Save updated checkpoint
fs.mkdirSync(REPORTS_DIR, { recursive: true });
fs.writeFileSync(CHECKPOINT, JSON.stringify({
  completed: Array.from(existing),
  total: existing.size,
  timestamp: new Date().toISOString(),
}, null, 2));

console.log(`\n✅ Checkpoint synced: ${existing.size} total done (+${added} new)`);
process.exit(0);
