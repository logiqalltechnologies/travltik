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
// ALL 192 COUNTRIES - DUPLICATES REMOVED ✅
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
  
  // ── ASIA (No duplicates with Europe) ──
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

// ✅ FIX 1: Remove duplicates
const COUNTRIES = [...new Set(COUNTRIES_RAW)];

const PURPOSES = ['tourism', 'student', 'work', 'business', 'family_visit'];

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

let aiInstance: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY environment variable is not set. Please export GEMINI_API_KEY before running.');
    }
    aiInstance = new GoogleGenAI({ apiKey: key });
  }
  return aiInstance;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ================================================================
// 1. CHECKPOINT SYSTEM (Resume on interruption)
// ================================================================

function loadCheckpoint(): Set<string> {
  if (!fs.existsSync(CHECKPOINT_FILE)) return new Set();
  try {
    const data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'));
    return new Set(data.completed || []);
  } catch {
    return new Set();
  }
}

function saveCheckpoint(completed: Set<string>) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify({
    completed: Array.from(completed),
    total: COUNTRIES.length * PURPOSES.length,
    timestamp: new Date().toISOString()
  }, null, 2));
}

// ================================================================
// 2. GET ALL FILES
// ================================================================

function getAllFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      results.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.ts')) {
      results.push(fullPath);
    }
  }
  return results;
}

// ================================================================
// 3. DUPLICATE ALL FILES
// ================================================================

export async function duplicateAllFiles() {
  console.log(chalk.blue('📋 Creating sandbox duplicates of visa data files...'));

  if (!fs.existsSync(ORIGINAL_DIR)) {
    fs.mkdirSync(ORIGINAL_DIR, { recursive: true });
    console.log(chalk.gray(`📁 Created original directory: ${ORIGINAL_DIR}`));
  }

  if (fs.existsSync(TEST_DIR)) {
    fs.rmSync(TEST_DIR, { recursive: true, force: true });
    console.log(chalk.gray('🧹 Removed old test directory'));
  }

  fs.cpSync(ORIGINAL_DIR, TEST_DIR, { recursive: true });
  console.log(chalk.green(`✅ Sandbox ready at: ${TEST_DIR}`));

  const files = getAllFiles(TEST_DIR);
  console.log(chalk.green(`✅ ${files.length} files duplicated`));
}

// ================================================================
// 4. COUNTRY-SPECIFIC RULES (CORRECTED)
// ================================================================

function getCountrySpecificRules(country: string): string {
  const rules: Record<string, string> = {
    'nepal': `
NEPAL-SPECIFIC RULES:
- ✅ CORRECTED: Indian passport holders do NOT require any visa for Nepal
- Entry: Valid Indian Passport OR Election Voter ID Card
- Stay: Up to 150 days per year
- Treaty: Indo-Nepal Treaty of Peace and Friendship (1950)
- No visa fee, no application required (Gratis / Visa-Free)
`,
    'bhutan': `
BHUTAN-SPECIFIC RULES:
- ✅ CORRECTED: Indian passport holders do NOT require any visa for Bhutan
- Entry: Valid Indian Passport OR Election Voter ID Card
- Stay: As per tourism regulations (typically 15 days)
- Treaty: India-Bhutan Friendship Treaty
- Sustainable Development Fee (SDF): ₹1,200/day for Indian tourists (concessional)
- Entry Permit required (issued at border/airport or online), no visa required
`,
    'russia': `
RUSSIA-SPECIFIC RULES:
- eVisa: Unified All-Russia eVisa (Nationwide, NOT regional)
- Portal: electronic-visa.kdmid.ru
- Processing: 4 calendar days max (statutory)
- Fee: ~52 USD (~₹4,300 - ₹4,500)
- Unified eVisa does NOT require tourist voucher/invitation letter
- HIV Test: Mandatory for stays >90 days (Student/Work visas only)
`,
    'south-africa': `
SOUTH AFRICA-SPECIFIC RULES:
- Visa fee: ₹0 (Gratis for Indian citizens across both eVisa and VFS)
- Channels: eVisa (DHA Portal) + VFS Global (Sticker)
- Passport: Valid at least 30 days beyond intended departure
- Required: Yellow Fever certificate (if arriving from or transiting endemic countries)
- Required: Unabridged Birth Certificate for traveling minors
`,
    'france': `
FRANCE-SPECIFIC RULES:
- Schengen Type C visa
- Insurance: Minimum 30,000 EUR medical coverage
- Processing: 15 calendar days standard
- Statutory Fee: 90 EUR consular fee + VFS service fee
- Portal: France-Visas (official portal)
- External Service Provider: VFS Global
`,
    'greece': `
GREECE-SPECIFIC RULES:
- Schengen Type C visa
- Insurance: Minimum 30,000 EUR medical coverage
- Processing: 15 calendar days standard
- Statutory Fee: 90 EUR consular fee + GVCW service fee
- External Service Provider: GVCW (in-gr.gvcworld.eu), NOT VFS Global
- Portal: Greece-Visas (official portal)
`,
    'uk': `
UK-SPECIFIC RULES:
- Standard Visitor Visa (6 Months)
- Processing: 15 working days standard
- Statutory Fee: £127
- Portal: GOV.UK (Access UK)
- Submission: VFS Global / TLScontact for biometrics
`,
    'united-kingdom': `
UK-SPECIFIC RULES:
- Standard Visitor Visa (6 Months)
- Processing: 15 working days standard
- Statutory Fee: £127
- Portal: GOV.UK (Access UK)
- Submission: VFS Global / TLScontact for biometrics
`,
    'usa': `
USA-SPECIFIC RULES:
- B1/B2 Visitor Visa
- Application: DS-160 Form via CEAC portal
- Fee: 185 USD (MRV Fee)
- Appointment: VAC (Biometrics) + US Embassy/Consulate (In-person Interview)
`,
    'canada': `
CANADA-SPECIFIC RULES:
- Visitor Visa (Temporary Resident Visa - TRV)
- Application: IRCC Portal
- Fee: 100 CAD application fee + 85 CAD biometrics fee
- Submission: Biometrics capture at VFS Global Canada VAC
`,
    'uae': `
UAE-SPECIFIC RULES:
- Tourist eVisa (30 Days / 60 Days)
- Processing: 24 to 72 hours
- Channels: ICP (Federal) or GDRFA (Dubai)
- Single or Multiple Entry options
`,
    'australia': `
AUSTRALIA-SPECIFIC RULES:
- Visitor Visa: Subclass 600 (Base fee: 195 AUD)
- Student Visa: Subclass 500 (Base fee: AUD 1,600+, requires eCoE + OSHC + Genuine Student criteria)
- Portal: ImmiAccount (online.immi.gov.au)
- Biometrics: VFS Global Australian Biometric Collection Centre
`,
    'thailand': `
THAILAND-SPECIFIC RULES:
- Visa exemption / Visa-free for Indian passport holders for tourism
- Stay: Up to 30 days per entry
- Extension: Extendable locally at immigration offices
`,
    'singapore': `
SINGAPORE-SPECIFIC RULES:
- Entry Scheme: Pre-entry digital SG Arrival Card (SGAC) with health declaration
- Submission: Via ICA official portal or MyICA Mobile app within 3 days prior to arrival
- Transit: 96-hour Visa Free Transit Facility (VFTF) applicable only if holding valid forward ticket and qualifying visa for select third countries
`,
    'jamaica': `
JAMAICA-SPECIFIC RULES:
- Visa Exemption: Visa-free entry for Indian citizens up to 30 days for tourism (Commonwealth waiver)
- Mandatory: Online C5 Immigration & Customs form at enterjamaica.com before boarding
- Transit Warning: Enforce requirement of transit visa (US, UK, Canada, or Schengen) for flight connections
`
  };

  return rules[country] || `
${country.toUpperCase()}-SPECIFIC RULES:
- Ground output using official government (.gov, .mfa, embassy) sources only.
- Strict isolation: Do not bleed US/Schengen statutes into this jurisdiction.
- Use Google Search grounding to find official visa requirements for Indian passport holders.
`;
}

// ================================================================
// 5. UNIVERSAL RULES
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
   - Fix typographical spacing: "₹0 for" not "₹0for"

3. HEALTH MANDATES:
   - Yellow Fever ONLY for endemic African/South American countries
   - HIV Test ONLY for stays >90 days (Student/Work)

4. PASSPORT PHOTO:
   - Should be: 35×45mm, white background, 6 months recent
   - NOT: passport validity conditions

5. eVISA SCOPE:
   - Check latest official scope (not outdated regional programs)

6. FEES (Verified):
   - Schengen countries: 90 EUR consular fee
   - UK: £127
   - Australia: 195 AUD
   - Canada: 100 CAD + 85 CAD biometrics
   - USA: 185 USD
   - Always verify from official source
`;
}

// ================================================================
// 6. HEAL SINGLE ROUTE
// ================================================================
// 6. HEAL SINGLE ROUTE
// ================================================================

async function healSingleRoute(country: string, purpose: string): Promise<any> {
  const originalFilePath = path.join(ORIGINAL_DIR, country, `${purpose}.ts`);
  const testFilePath = path.join(TEST_DIR, country, `${purpose}.ts`);

  let rawCode = '';
  if (fs.existsSync(testFilePath)) {
    rawCode = fs.readFileSync(testFilePath, 'utf-8');
  } else if (fs.existsSync(originalFilePath)) {
    rawCode = fs.readFileSync(originalFilePath, 'utf-8');
  }

  try {
    const prompt = rawCode.trim().length > 50 ? `
You are the Consular Audit Engine for TravlTik.

CURRENT DATA (India → ${country} for ${purpose}):
${rawCode}

${getUniversalRules()}

${getCountrySpecificRules(country)}

OUTPUT RULES:
1. Return COMPLETE TypeScript file with export default { ... }
2. Keep ALL existing fields, only update incorrect ones
3. Do NOT add any new fields unless mandatory
4. Preserve ALL existing comments and formatting
5. Ensure ALL fields are accurate according to official sources
6. Use Google Search grounding to verify all information

Return ONLY the code, no additional text.
` : `
You are the Consular Audit Engine for TravlTik.
Generate a complete, production-ready, verified visa data TypeScript file for Indian passport holders traveling from India to ${country} for ${purpose}.

${getUniversalRules()}

${getCountrySpecificRules(country)}

SCHEMA FORMAT TO FOLLOW:
export default {
  country: '${country}',
  fromCountry: 'India',
  visaCategory: '${purpose === 'tourism' ? 'Tourist Visa' : purpose === 'student' ? 'Student Visa' : purpose === 'work' ? 'Employment / Work Visa' : purpose === 'business' ? 'Business Visa' : 'Family Visit Visa'}',
  authority: 'Official Consular / Immigration Authority Name',
  channels: [
    'Official Portal / Application Channel 1',
    'Application Centre / VFS / BLS / TLS / GVCW',
    'Embassy / Consulate'
  ],
  processingTime: {
    eVisa: 'X calendar/working days',
    standardSticker: 'X working days',
    expressSticker: 'X working days'
  },
  fees: {
    eVisaTotal: 'Total fee in USD/local currency (~₹ INR)',
    stickerConsularStandard: 'Official consular fee with currency and INR conversion',
    vfsServiceFee: 'Applicable outsourced service fee (~₹ INR)'
  },
  eVisa: {
    available: true, // or false if no eVisa
    portal: 'official URL',
    territorialScope: 'Nationwide or specify',
    validity: 'Duration from issue',
    maxStay: 'Max days per stay',
    invitationRequired: false,
    processing: 'X days'
  },
  stayDuration: {
    eVisa: 'Duration',
    stickerSingleDouble: 'Duration',
    stickerMultiple: 'Duration'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months with 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Recent white background photo', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Online or printed consular form', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel or invitation', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Medical coverage as required', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility', description: 'Determine eVisa vs Sticker submission' },
    { step: 2, title: 'Prepare Documentation', description: 'Assemble mandatory verified documents' },
    { step: 3, title: 'Submit & Pay Fee', description: 'Pay statutory consular fees' },
    { step: 4, title: 'Receive Clearance', description: 'Track dossier and download approval' }
  ],
  specialRequirements: {
    entry_rules: 'Specific mandates, quarantine, vaccine, or entry permits'
  }
};

OUTPUT RULES:
1. Return COMPLETE TypeScript file starting with export default { and ending with };
2. Ensure ALL fields (fees, channels, portals, processing times, stay durations) are 100% verified using official government / embassy sources via Google search.
3. Return ONLY valid TypeScript code without markdown commentary.
`;

    const response = await getAI().models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.0,
        tools: [{ googleSearch: {} }]
      },
    });

    const responseText = response.text || '';
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
      const backupPath = testFilePath + '.backup';
      fs.copyFileSync(testFilePath, backupPath);
    }

    fs.writeFileSync(testFilePath, cleanedCode);

    return {
      country,
      purpose,
      status: 'healed',
      testFilePath,
      message: 'Successfully healed'
    };

  } catch (error: any) {
    return {
      country,
      purpose,
      status: 'failed',
      error: error.message
    };
  }
}

// ================================================================
// 7. BATCH HEAL ALL (WITH CHECKPOINT)
// ================================================================

export async function batchHealAll() {
  if (!fs.existsSync(TEST_DIR)) {
    console.log(chalk.red('❌ Sandbox directory missing. Run duplicate first!'));
    return;
  }

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  
  // Load checkpoint
  const completed = loadCheckpoint();
  const totalRoutes = COUNTRIES.length * PURPOSES.length;
  
  console.log(chalk.bold.blue(`\n🚀 Processing ${COUNTRIES.length} countries × ${PURPOSES.length} purposes...`));
  console.log(chalk.gray(`📊 Total routes: ${totalRoutes}`));
  console.log(chalk.gray(`✅ Already completed: ${completed.size}`));
  console.log(chalk.gray(`⏱️ Estimated time: ~${Math.ceil((totalRoutes * 2) / 60)} minutes`));

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
    console.log(chalk.green('✅ All routes already healed!'));
    return;
  }

  console.log(chalk.yellow(`📝 ${queue.length} routes remaining to heal`));

  const bar = new cliProgress.SingleBar({
    format: 'Progress |{bar}| {percentage}% | {value}/{total} Routes | {route}',
    hideCursor: true,
  });

  bar.start(queue.length, 0, { route: 'Starting...' });

  const results: any[] = [];
  
  for (let i = 0; i < queue.length; i++) {
    const { country, purpose } = queue[i];
    const key = `${country}-${purpose}`;
    
    bar.update(i, { route: `${country}/${purpose}` });

    const result = await healSingleRoute(country, purpose);
    results.push(result);
    
    // ✅ Save checkpoint after each route
    completed.add(key);
    saveCheckpoint(completed);

    // Rate-limit safety: 2-second delay between API calls
    await sleep(2000);
  }

  bar.update(queue.length, { route: 'Completed' });
  bar.stop();

  // Save final results
  fs.writeFileSync(
    path.join(REPORTS_DIR, 'batch-summary.json'),
    JSON.stringify(results, null, 2)
  );

  generateBatchReport(results, completed);
}

// ================================================================
// 8. GENERATE BATCH REPORT
// ================================================================

function generateBatchReport(results: any[], completed: Set<string>) {
  const healed = results.filter(r => r.status === 'healed');
  const skipped = results.filter(r => r.status === 'skipped');
  const failed = results.filter(r => r.status === 'failed');

  const html = `
<!DOCTYPE html>
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
    .skipped { color: #854d0e; }
    .failed { color: #991b1b; }
  </style>
</head>
<body>
  <h1>📊 Visa Data Batch Healing Report</h1>
  <p>Generated: ${new Date().toLocaleString()}</p>
  <p>Total Routes Checked: ${results.length}</p>
  <p>Countries: ${COUNTRIES.length}</p>
  <p>Purposes: ${PURPOSES.length}</p>

  <div class="card">
    <div class="stats">
      <div class="stat stat-healed">✅ Healed: ${healed.length}</div>
      <div class="stat stat-skipped">⏭️ Skipped: ${skipped.length}</div>
      <div class="stat stat-failed">❌ Failed: ${failed.length}</div>
      <div class="stat stat-total">📊 Total Completed: ${completed.size}</div>
    </div>
  </div>

  <div class="card">
    <h2>📋 All Results</h2>
    <table>
      <tr><th>Country</th><th>Purpose</th><th>Status</th><th>Message</th></tr>
      ${results.map(r => `
        <tr>
          <td>${r.country}</td>
          <td>${r.purpose}</td>
          <td class="${r.status}">${r.status}</td>
          <td>${r.message || r.error || '—'}</td>
        </tr>
      `).join('')}
    </table>
  </div>
</body>
</html>
  `;

  const htmlPath = path.join(REPORTS_DIR, 'batch-report.html');
  fs.writeFileSync(htmlPath, html);
  console.log(chalk.green(`\n✅ Report generated: ${htmlPath}`));
}

// ================================================================
// 9. APPLY ALL TO ORIGINAL
// ================================================================

export async function applyAllToOriginal() {
  console.log(chalk.bold.yellow('\n⚠️ WARNING: This will apply ALL test changes to original files!'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer = await new Promise(resolve => {
    rl.question(chalk.red('\nType "yes" to confirm: '), resolve);
  });
  rl.close();

  if (answer !== 'yes') {
    console.log(chalk.gray('❌ Cancelled. Original files untouched.'));
    return;
  }

  const allFiles = getAllFiles(TEST_DIR);
  let applied = 0;

  for (const testFile of allFiles) {
    const relativePath = path.relative(TEST_DIR, testFile);
    const originalFile = path.join(ORIGINAL_DIR, relativePath);

    if (fs.existsSync(originalFile)) {
      const backupPath = originalFile + '.backup';
      fs.copyFileSync(originalFile, backupPath);
      fs.copyFileSync(testFile, originalFile);
      applied++;
    }
  }

  console.log(chalk.green(`\n✅ Applied ${applied} files to original directory.`));
  console.log(chalk.gray(`📂 Backups created with .backup extension`));
}

// ================================================================
// 10. RESUME COMMAND
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
📋 Visa Data Batch Healing System (Fixed - All Countries)

Commands:
  npm run visa:batch:duplicate    # Create test copies (ALL ${COUNTRIES.length} countries)
  npm run visa:batch:heal         # Heal ALL test files (original untouched)
  npm run visa:batch:resume       # Resume from last checkpoint (if interrupted)
  npm run visa:batch:apply        # Apply ALL test changes to original (⚠️ confirmation)

✅ FIXES APPLIED:
  1. Duplicate country keys removed (Set)
  2. Nepal/Bhutan: Visa-Free (not Visa on Arrival)
  3. Checkpoint/Resume system added (saves progress after each route)

✅ COVERAGE:
  Countries: ${COUNTRIES.length}
  Purposes: ${PURPOSES.length}
  Total Routes: ${COUNTRIES.length * PURPOSES.length}

✅ CORRECTED STATUTORY FEES:
  Schengen: 90 EUR
  UK: £127
  Australia: 195 AUD
  Canada: 100 CAD + 85 CAD biometrics
  USA: 185 USD

⚠️ Estimated Time: ~${Math.ceil((COUNTRIES.length * PURPOSES.length * 2) / 60)} minutes
      `);
  }
}

main().catch(console.error);
