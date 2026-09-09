import fs from 'fs';
import path from 'path';
import readline from 'readline';
import chalk from 'chalk';
import cliProgress from 'cli-progress';
import { GoogleGenAI } from '@google/genai';

const ORIGINAL_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data');
const TEST_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data-test');
const REPORTS_DIR = path.join(process.cwd(), 'healing-reports');
const CHECKPOINT_FILE = path.join(REPORTS_DIR, 'checkpoint.json');

// ================================================================
// ALL 193 COUNTRIES - DUPLICATES REMOVED
// ================================================================

const COUNTRIES_RAW = [
  // ── EUROPE ──
  'albania', 'andorra', 'austria', 'belarus', 'belgium',
  'bosnia-herzegovina', 'bulgaria', 'croatia', 'cyprus',
  'czech-republic', 'denmark', 'estonia', 'finland',
  'france', 'germany', 'greece', 'hungary',
  'iceland', 'ireland', 'italy', 'kosovo', 'latvia',
  'liechtenstein', 'lithuania', 'luxembourg', 'malta', 'moldova',
  'monaco', 'montenegro', 'netherlands', 'north-macedonia', 'norway',
  'poland', 'portugal', 'romania', 'russia', 'san-marino',
  'serbia', 'slovakia', 'slovenia', 'spain', 'sweden',
  'switzerland', 'ukraine', 'united-kingdom', 'vatican-city',

  // ── ASIA ──
  'afghanistan', 'bahrain', 'bangladesh', 'bhutan', 'brunei',
  'cambodia', 'china', 'india', 'indonesia', 'iran',
  'iraq', 'israel', 'japan', 'jordan', 'kazakhstan',
  'kuwait', 'kyrgyzstan', 'laos', 'lebanon', 'malaysia',
  'maldives', 'mongolia', 'myanmar', 'nepal', 'north-korea',
  'oman', 'pakistan', 'palestine', 'philippines', 'qatar',
  'saudi-arabia', 'singapore', 'south-korea', 'sri-lanka', 'syria',
  'taiwan', 'tajikistan', 'thailand', 'timor-leste', 'turkey',
  'turkmenistan', 'uae', 'uzbekistan', 'vietnam',

  // ── AFRICA ──
  'algeria', 'angola', 'benin', 'botswana', 'burkina-faso',
  'burundi', 'cabo-verde', 'cameroon', 'central-african-republic',
  'chad', 'comoros', 'congo', 'congo-dr', 'djibouti',
  'egypt', 'equatorial-guinea', 'eritrea', 'eswatini', 'ethiopia',
  'gabon', 'gambia', 'ghana', 'guinea', 'guinea-bissau',
  'ivory-coast', 'kenya', 'lesotho', 'liberia', 'libya',
  'madagascar', 'malawi', 'mali', 'mauritania', 'mauritius',
  'morocco', 'mozambique', 'namibia', 'niger', 'nigeria',
  'rwanda', 'sao-tome', 'senegal', 'seychelles', 'sierra-leone',
  'somalia', 'south-africa', 'south-sudan', 'sudan', 'tanzania',
  'togo', 'tunisia', 'uganda', 'zambia', 'zimbabwe',

  // ── AMERICAS ──
  'antigua-barbuda', 'argentina', 'bahamas', 'barbados', 'belize',
  'bolivia', 'brazil', 'canada', 'chile', 'colombia',
  'costa-rica', 'cuba', 'dominica', 'dominican-republic', 'ecuador',
  'el-salvador', 'grenada', 'guatemala', 'guyana', 'haiti',
  'honduras', 'jamaica', 'mexico', 'nicaragua', 'panama',
  'paraguay', 'peru', 'saint-kitts-nevis', 'saint-lucia', 'saint-vincent',
  'suriname', 'trinidad-tobago', 'uruguay', 'usa', 'venezuela',

  // ── OCEANIA ──
  'australia', 'fiji', 'kiribati', 'marshall-islands', 'micronesia',
  'nauru', 'new-zealand', 'palau', 'papua-new-guinea', 'samoa',
  'solomon-islands', 'tonga', 'tuvalu', 'vanuatu'
];

const COUNTRIES = [...new Set(COUNTRIES_RAW)];
const PURPOSES = ['tourism', 'student', 'work', 'business', 'family_visit'];

// ================================================================
// ENV LOADER
// ================================================================

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx > 0) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}
loadEnv();

// ================================================================
// MULTI-KEY ROUND-ROBIN SYSTEM
// ================================================================

function getApiKeys(): string[] {
  const keys: string[] = [];
  const seen = new Set<string>();

  const addKey = (k: string | undefined) => {
    if (k && k.trim().length > 10 && !seen.has(k.trim())) {
      seen.add(k.trim());
      keys.push(k.trim());
    }
  };

  addKey(process.env.GEMINI_API_KEY);
  addKey(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  for (let i = 1; i <= 10; i++) {
    addKey(process.env[`NEXT_PUBLIC_GEMINI_API_KEY_${i}`]);
  }
  for (let i = 1; i <= 10; i++) {
    addKey(process.env[`GEMINI_API_KEY_${i}`]);
  }

  return keys;
}

const API_KEYS = getApiKeys();

if (API_KEYS.length === 0) {
  console.error(chalk.red('No Gemini API keys found! Set GEMINI_API_KEY in .env'));
  process.exit(1);
}

console.log(chalk.green(`🔑 Loaded ${API_KEYS.length} API key(s)`));

// Per-key cached AI instances
const _aiInstances = new Map<string, GoogleGenAI>();
function getAIForKey(apiKey: string): GoogleGenAI {
  if (!_aiInstances.has(apiKey)) {
    _aiInstances.set(apiKey, new GoogleGenAI({ apiKey }));
  }
  return _aiInstances.get(apiKey)!;
}

// All keys now use gemini-3.6-flash
// NOTE: gemini-2.0-flash is 404 deprecated as of Sept 2026
// gemini-3.6-flash works for all key types (AIzaSy standard + AQ. OAuth)
// Free tier: 20 req/day per key (OAuth keys), ~1500/day (standard key)
function getModelForKey(_apiKey: string): string {
  return 'gemini-3.6-flash';
}

// ================================================================
// PARALLEL WORKERS CONFIG
// ================================================================

const PARALLEL_WORKERS = 2;
const BATCH_DELAY_MS = 2000;

console.log(chalk.blue(`⚡ Parallel workers: ${PARALLEL_WORKERS}`));
console.log(chalk.gray(`📈 Speed: ~${PARALLEL_WORKERS * 60} routes/hour`));
console.log(chalk.gray(`⏱️  ETA: ~${Math.ceil(965 / (PARALLEL_WORKERS * 60))} hours for 965 routes`));

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ================================================================
// CHECKPOINT SYSTEM
// ================================================================

function loadCheckpoint(): Set<string> {
  if (!fs.existsSync(CHECKPOINT_FILE)) return new Set();
  try {
    const data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'));
    const valid = new Set<string>();
    for (const key of (data.completed || [])) {
      const lastDash = key.lastIndexOf('-');
      if (lastDash > 0) {
        const country = key.slice(0, lastDash);
        const purpose = key.slice(lastDash + 1);
        const testFile = path.join(TEST_DIR, country, `${purpose}.ts`);
        if (fs.existsSync(testFile)) {
          valid.add(key);
        }
      }
    }
    return valid;
  } catch {
    return new Set();
  }
}

let _savingCheckpoint = false;
let _latestPendingSet: Set<string> | null = null;

async function saveCheckpoint(completed: Set<string>) {
  _latestPendingSet = completed;
  if (_savingCheckpoint) return;
  _savingCheckpoint = true;
  try {
    while (_latestPendingSet) {
      const toSave = _latestPendingSet;
      _latestPendingSet = null;
      fs.mkdirSync(REPORTS_DIR, { recursive: true });
      fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify({
        completed: Array.from(toSave),
        total: COUNTRIES.length * PURPOSES.length,
        timestamp: new Date().toISOString()
      }, null, 2));
    }
  } finally {
    _savingCheckpoint = false;
  }
}

// ================================================================
// GET ALL FILES
// ================================================================

function getAllFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      results.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.ts') && !item.endsWith('.backup')) {
      results.push(fullPath);
    }
  }
  return results;
}

// ================================================================
// DUPLICATE ALL FILES
// ================================================================

export async function duplicateAllFiles() {
  console.log(chalk.blue('Creating sandbox duplicates of visa data files...'));

  if (!fs.existsSync(ORIGINAL_DIR)) {
    fs.mkdirSync(ORIGINAL_DIR, { recursive: true });
  }

  if (fs.existsSync(TEST_DIR)) {
    fs.rmSync(TEST_DIR, { recursive: true, force: true });
    console.log(chalk.gray('Removed old test directory'));
  }

  fs.cpSync(ORIGINAL_DIR, TEST_DIR, { recursive: true });
  const files = getAllFiles(TEST_DIR);
  console.log(chalk.green(`✅ ${files.length} files duplicated to sandbox`));
}

// ================================================================
// COUNTRY-SPECIFIC RULES
// ================================================================

function getCountrySpecificRules(country: string): string {
  const rules: Record<string, string> = {
    'nepal': `
NEPAL-SPECIFIC RULES:
- Visa-Free for Indian citizens (Indo-Nepal Treaty 1950)
- Entry: Valid Indian Passport OR Election Voter ID Card
- Stay: Up to 150 days per year
- No visa fee, no application required (Gratis / Visa-Free)
`,
    'bhutan': `
BHUTAN-SPECIFIC RULES:
- Visa-Free for Indian citizens (India-Bhutan Friendship Treaty)
- Entry: Valid Indian Passport OR Election Voter ID Card
- Sustainable Development Fee (SDF): 1200 INR/day (concessional)
- Entry Permit required at border/airport, no visa required
`,
    'russia': `
RUSSIA-SPECIFIC RULES:
- eVisa: Unified All-Russia eVisa (Nationwide, NOT regional)
- Portal: electronic-visa.kdmid.ru
- Processing: 4 calendar days max
- Fee: ~52 USD (~4300-4500 INR)
- Unified eVisa does NOT require tourist voucher
`,
    'south-africa': `
SOUTH AFRICA-SPECIFIC RULES:
- Visa fee: 0 INR (Gratis for Indian citizens)
- Channels: eVisa (DHA Portal) + VFS Global (Sticker)
- Required: Yellow Fever certificate (if arriving from endemic countries)
- Required: Unabridged Birth Certificate for traveling minors
`,
    'france': `
FRANCE-SPECIFIC RULES:
- Schengen Type C visa
- Insurance: Minimum 30,000 EUR medical coverage
- Processing: 15 calendar days standard
- Statutory Fee: 90 EUR consular fee + VFS service fee
- Portal: France-Visas
`,
    'greece': `
GREECE-SPECIFIC RULES:
- Schengen Type C visa
- Insurance: Minimum 30,000 EUR medical coverage
- Processing: 15 calendar days standard
- Statutory Fee: 90 EUR consular fee + GVCW service fee
- External Service Provider: GVCW (in-gr.gvcworld.eu), NOT VFS Global
`,
    'uk': `
UK-SPECIFIC RULES:
- Standard Visitor Visa (6 Months)
- Processing: 15 working days
- Statutory Fee: 127 GBP
- Portal: GOV.UK (Access UK)
`,
    'united-kingdom': `
UK-SPECIFIC RULES:
- Standard Visitor Visa (6 Months)
- Processing: 15 working days
- Statutory Fee: 127 GBP
- Portal: GOV.UK
`,
    'usa': `
USA-SPECIFIC RULES:
- B1/B2 Visitor Visa
- Application: DS-160 Form via CEAC portal
- Fee: 185 USD (MRV Fee)
- Appointment: VAC (Biometrics) + US Embassy (In-person Interview)
`,
    'canada': `
CANADA-SPECIFIC RULES:
- Visitor Visa (Temporary Resident Visa - TRV)
- Application: IRCC Portal
- Fee: 100 CAD application fee + 85 CAD biometrics fee
`,
    'uae': `
UAE-SPECIFIC RULES:
- Tourist eVisa (30 Days / 60 Days)
- Processing: 24 to 72 hours
- Channels: ICP (Federal) or GDRFA (Dubai)
`,
    'australia': `
AUSTRALIA-SPECIFIC RULES:
- Visitor Visa: Subclass 600 (Base fee: 195 AUD)
- Student Visa: Subclass 500 (requires eCoE + OSHC)
- Portal: ImmiAccount (online.immi.gov.au)
`,
    'thailand': `
THAILAND-SPECIFIC RULES:
- Visa exemption for Indian passport holders for tourism
- Stay: Up to 30 days per entry
`,
    'singapore': `
SINGAPORE-SPECIFIC RULES:
- SG Arrival Card (SGAC): Mandatory digital pre-entry declaration
- Submit via ICA portal within 3 days prior to arrival
`,
    'jamaica': `
JAMAICA-SPECIFIC RULES:
- Visa-free for Indian citizens up to 30 days for tourism
- Mandatory: Online C5 Immigration form at enterjamaica.com before boarding
`
  };

  return rules[country] || `
${country.toUpperCase()}-SPECIFIC RULES:
- Use official government (.gov, .mfa, embassy) sources only.
- Strict isolation: Do not bleed US/Schengen statutes into this jurisdiction.
`;
}

// ================================================================
// UNIVERSAL RULES
// ================================================================

function getUniversalRules(): string {
  return `
UNIVERSAL IMMIGRATION RULES (Apply to ALL countries):

1. DESTINATION ISOLATION:
   - Schengen 90/180 rules ONLY for Schengen countries
   - US statutes (DS-160, 214(b)) ONLY for USA
   - Do NOT mix rules across regions

2. FINANCIAL PRECISION:
   - Education loans ONLY for Student visas
   - Tourism visas: Bank statements + ITR + NOC only

3. HEALTH MANDATES:
   - Yellow Fever ONLY for endemic African/South American countries
   - HIV Test ONLY for stays >90 days (Student/Work)

4. PASSPORT PHOTO:
   - Should be: 35x45mm, white background, 6 months recent

5. FEES (Verified):
   - Schengen countries: 90 EUR consular fee
   - UK: 127 GBP
   - Australia: 195 AUD
   - Canada: 100 CAD + 85 CAD biometrics
   - USA: 185 USD
`;
}

// ================================================================
// HEAL SINGLE ROUTE (worker-index based key assignment)
// ================================================================

async function healSingleRoute(country: string, purpose: string, workerIndex: number): Promise<any> {
  const originalFilePath = path.join(ORIGINAL_DIR, country, `${purpose}.ts`);
  const testFilePath = path.join(TEST_DIR, country, `${purpose}.ts`);

  let rawCode = '';
  if (fs.existsSync(testFilePath)) {
    rawCode = fs.readFileSync(testFilePath, 'utf-8');
  } else if (fs.existsSync(originalFilePath)) {
    rawCode = fs.readFileSync(originalFilePath, 'utf-8');
  }

  const apiKey = API_KEYS[workerIndex % API_KEYS.length];
  const ai = getAIForKey(apiKey);

  try {
    const prompt = rawCode.trim().length > 50 ? `
You are the Consular Audit Engine for TravlTik.

CURRENT DATA (India to ${country} for ${purpose}):
${rawCode}

${getUniversalRules()}

${getCountrySpecificRules(country)}

OUTPUT RULES:
1. Return COMPLETE TypeScript file with export default { ... }
2. Keep ALL existing fields, only update incorrect ones
3. Do NOT add any new fields unless mandatory
4. Preserve ALL existing comments and formatting
5. Ensure ALL fields are accurate according to official sources

Return ONLY the TypeScript code, no markdown fences, no extra text.
` : `
You are the Consular Audit Engine for TravlTik.
Generate a complete, production-ready visa data TypeScript file for Indian passport holders traveling from India to ${country} for ${purpose}.

${getUniversalRules()}

${getCountrySpecificRules(country)}

SCHEMA FORMAT:
export default {
  country: '${country}',
  fromCountry: 'India',
  visaCategory: '${purpose === 'tourism' ? 'Tourist Visa' : purpose === 'student' ? 'Student Visa' : purpose === 'work' ? 'Employment / Work Visa' : purpose === 'business' ? 'Business Visa' : 'Family Visit Visa'}',
  authority: 'Official Consular / Immigration Authority Name',
  channels: ['Official Portal', 'VFS / BLS / TLS / GVCW', 'Embassy / Consulate'],
  processingTime: { eVisa: 'X days', standardSticker: 'X working days', expressSticker: 'X working days' },
  fees: { eVisaTotal: 'Total fee', stickerConsularStandard: 'Consular fee', vfsServiceFee: 'Service fee' },
  eVisa: { available: true, portal: 'official URL', territorialScope: 'Nationwide', validity: 'Duration', maxStay: 'Max days', invitationRequired: false, processing: 'X days' },
  stayDuration: { eVisa: 'Duration', stickerSingleDouble: 'Duration', stickerMultiple: 'Duration' },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months with 2 blank pages', icon: 'passport', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Recent white background photo', icon: 'photo', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Online or printed consular form', icon: 'form', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking', icon: 'flight', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel or invitation', icon: 'hotel', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Medical coverage as required', icon: 'insurance', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements showing sufficient funds', icon: 'bank', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility', description: 'Determine eVisa vs Sticker submission' },
    { step: 2, title: 'Prepare Documentation', description: 'Assemble mandatory verified documents' },
    { step: 3, title: 'Submit and Pay Fee', description: 'Pay statutory consular fees' },
    { step: 4, title: 'Receive Clearance', description: 'Track dossier and download approval' }
  ],
  specialRequirements: { entry_rules: 'Specific mandates or N/A' }
};

Return ONLY valid TypeScript code, no markdown commentary.
`;

    const response = await ai.models.generateContent({
      model: getModelForKey(apiKey),
      contents: prompt,
      config: { temperature: 0.1 },
    });

    const responseText = response.text || '';
    // Strip markdown fences if present
    const codeMatch = responseText.match(/```(?:typescript|ts)?\n([\s\S]*?)\n```/);
    const cleanedCode = codeMatch ? codeMatch[1] : responseText;

    if (!cleanedCode || cleanedCode.trim().length < 50) {
      throw new Error('AI response too short');
    }

    const testDir = path.dirname(testFilePath);
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }

    if (fs.existsSync(testFilePath)) {
      fs.copyFileSync(testFilePath, testFilePath + '.backup');
    }

    fs.writeFileSync(testFilePath, cleanedCode);

    return { country, purpose, status: 'healed', testFilePath, message: 'Successfully healed' };

  } catch (error: any) {
    return { country, purpose, status: 'failed', error: error.message };
  }
}

// ================================================================
// BATCH HEAL ALL — PARALLEL WORKERS
// ================================================================

export async function batchHealAll() {
  if (!fs.existsSync(TEST_DIR)) {
    console.log(chalk.red('Sandbox directory missing. Run duplicate first!'));
    return;
  }

  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const completed = loadCheckpoint();
  const totalRoutes = COUNTRIES.length * PURPOSES.length;

  // Build queue
  const queue: { country: string; purpose: string }[] = [];
  for (const country of COUNTRIES) {
    for (const purpose of PURPOSES) {
      const key = `${country}-${purpose}`;
      const testFilePath = path.join(TEST_DIR, country, `${purpose}.ts`);
      if (!fs.existsSync(testFilePath) || !completed.has(key)) {
        queue.push({ country, purpose });
      }
    }
  }

  if (queue.length === 0) {
    console.log(chalk.green('All routes already healed!'));
    return;
  }

  console.log(chalk.bold.blue(`\n🚀 Processing ${COUNTRIES.length} countries x ${PURPOSES.length} purposes...`));
  console.log(chalk.gray(`📊 Total routes: ${totalRoutes}`));
  console.log(chalk.green(`✅ Already completed: ${completed.size}`));
  console.log(chalk.yellow(`📝 ${queue.length} routes remaining`));
  console.log(chalk.blue(`⚡ Using ${PARALLEL_WORKERS} parallel workers (${API_KEYS.length} API keys)`));
  console.log(chalk.gray(`⏱️  Estimated: ~${Math.ceil(queue.length / (PARALLEL_WORKERS * 60))} hours`));

  const bar = new cliProgress.SingleBar({
    format: 'Progress |{bar}| {percentage}% | {value}/{total} Routes | ETA: {eta_formatted}',
    hideCursor: true,
  });
  bar.start(queue.length, 0);

  const results: any[] = [];
  let processedCount = 0;

  // Process in parallel chunks
  for (let i = 0; i < queue.length; i += PARALLEL_WORKERS) {
    const chunk = queue.slice(i, i + PARALLEL_WORKERS);

    const chunkResults = await Promise.allSettled(
      chunk.map(({ country, purpose }, idx) => healSingleRoute(country, purpose, idx))
    );

    for (const result of chunkResults) {
      if (result.status === 'fulfilled') {
        const r = result.value;
        results.push(r);
        if (r.status === 'healed') {
          completed.add(`${r.country}-${r.purpose}`);
        } else {
          process.stderr.write(chalk.red(`\n⚠️ Failed: ${r.country}-${r.purpose} (${r.error || r.message})\n`));
        }
      } else {
        process.stderr.write(chalk.red(`\n❌ Worker crashed: ${result.reason}\n`));
      }
    }

    processedCount += chunk.length;
    bar.update(processedCount);

    // Save checkpoint after each batch
    await saveCheckpoint(completed);

    // Small delay between batches
    if (i + PARALLEL_WORKERS < queue.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  bar.update(queue.length);
  bar.stop();

  fs.writeFileSync(
    path.join(REPORTS_DIR, 'batch-summary.json'),
    JSON.stringify(results, null, 2)
  );

  generateBatchReport(results, completed);
}

// ================================================================
// GENERATE BATCH REPORT
// ================================================================

function generateBatchReport(results: any[], completed: Set<string>) {
  const healed = results.filter(r => r.status === 'healed');
  const skipped = results.filter(r => r.status === 'skipped');
  const failed = results.filter(r => r.status === 'failed');

  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Visa Data Batch Healing Report</title>
  <style>
    body { font-family: Arial; padding: 20px; background: #f8fafc; }
    .card { background: white; border-radius: 12px; padding: 20px; margin: 10px 0; }
    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .stat { padding: 16px; border-radius: 8px; text-align: center; font-weight: bold; }
    .stat-healed { background: #bbf7d0; color: #166534; }
    .stat-skipped { background: #fef08a; color: #854d0e; }
    .stat-failed { background: #fecaca; color: #991b1b; }
    .stat-total { background: #e0e7ff; color: #3730a3; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    th, td { padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { background: #f1f5f9; }
    .healed { color: #166534; }
    .failed { color: #991b1b; }
  </style>
</head>
<body>
  <h1>Visa Data Batch Healing Report</h1>
  <p>Generated: ${new Date().toLocaleString()}</p>
  <p>API Keys: ${API_KEYS.length} | Workers: ${PARALLEL_WORKERS}</p>
  <div class="card">
    <div class="stats">
      <div class="stat stat-healed">Healed: ${healed.length}</div>
      <div class="stat stat-skipped">Skipped: ${skipped.length}</div>
      <div class="stat stat-failed">Failed: ${failed.length}</div>
      <div class="stat stat-total">Total: ${completed.size}</div>
    </div>
  </div>
  <div class="card">
    <h2>All Results</h2>
    <table>
      <tr><th>Country</th><th>Purpose</th><th>Status</th><th>Message</th></tr>
      ${results.map(r => `
        <tr>
          <td>${r.country}</td>
          <td>${r.purpose}</td>
          <td class="${r.status}">${r.status}</td>
          <td>${r.message || r.error || '-'}</td>
        </tr>
      `).join('')}
    </table>
  </div>
</body>
</html>`;

  const htmlPath = path.join(REPORTS_DIR, 'batch-report.html');
  fs.writeFileSync(htmlPath, html);
  console.log(chalk.green(`\n✅ Report generated: ${htmlPath}`));
}

// ================================================================
// APPLY ALL TO ORIGINAL
// ================================================================

export async function applyAllToOriginal() {
  console.log(chalk.bold.yellow('\nWARNING: This will apply ALL test changes to original files!'));

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise(resolve => rl.question(chalk.red('\nType "yes" to confirm: '), resolve));
  rl.close();

  if (answer !== 'yes') {
    console.log(chalk.gray('Cancelled. Original files untouched.'));
    return;
  }

  const allFiles = getAllFiles(TEST_DIR);
  let applied = 0;

  for (const testFile of allFiles) {
    const relativePath = path.relative(TEST_DIR, testFile);
    const originalFile = path.join(ORIGINAL_DIR, relativePath);
    const originalDir = path.dirname(originalFile);

    if (!fs.existsSync(originalDir)) fs.mkdirSync(originalDir, { recursive: true });

    if (fs.existsSync(originalFile)) {
      fs.copyFileSync(originalFile, originalFile + '.backup');
    }
    fs.copyFileSync(testFile, originalFile);
    applied++;
  }

  console.log(chalk.green(`\n✅ Applied ${applied} files to original directory.`));
  console.log(chalk.gray('Backups created with .backup extension'));
}

// ================================================================
// RESUME
// ================================================================

export async function resumeHealing() {
  console.log(chalk.blue('🔄 Resuming from last checkpoint...'));
  await batchHealAll();
}

// ================================================================
// CLI ENTRY POINT
// ================================================================

const args = process.argv.slice(2);
const command = args[0];

async function main() {
  switch (command) {
    case 'duplicate':
      await duplicateAllFiles();
      break;
    case 'heal':
      await batchHealAll();
      break;
    case 'resume':
      await resumeHealing();
      break;
    case 'apply':
      await applyAllToOriginal();
      break;
    default:
      console.log(`
Visa Data Batch Healing System - PARALLEL MODE

Commands:
  npm run visa:batch:duplicate    # Create test copies
  npm run visa:batch:heal         # Heal ALL (${PARALLEL_WORKERS} workers x ${API_KEYS.length} keys)
  npm run visa:batch:resume       # Resume from checkpoint
  npm run visa:batch:apply        # Apply to original

Configuration:
  API Keys: ${API_KEYS.length} loaded
  Workers:  ${PARALLEL_WORKERS} parallel
  Speed:    ~${PARALLEL_WORKERS * 60} routes/hour
  ETA:      ~${Math.ceil(965 / (PARALLEL_WORKERS * 60))} hours for 965 routes
      `);
  }
}

main().catch(console.error);
