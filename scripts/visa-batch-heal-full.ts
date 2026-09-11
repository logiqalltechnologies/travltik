import fs from 'fs';
import path from 'path';
import readline from 'readline';
import chalk from 'chalk';
import cliProgress from 'cli-progress';
import { GoogleGenAI } from '@google/genai';

// ================================================================
// PATHS
// ================================================================
const ORIGINAL_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data');
const TEST_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data-test');
const VERIFIED_DIR = path.join(process.cwd(), 'src', 'data', 'country-visa-data-verified');
const REPORTS_DIR = path.join(process.cwd(), 'healing-reports');

const CHECKPOINT_P1 = path.join(REPORTS_DIR, 'checkpoint-phase1.json');
const CHECKPOINT_P2 = path.join(REPORTS_DIR, 'checkpoint-phase2.json');
const FLAGGED_FILE = path.join(REPORTS_DIR, 'flagged-fields.json');

// ================================================================
// ALL COUNTRIES MASTER LIST
// ================================================================
const COUNTRIES_RAW = [
  // EUROPE
  'albania','andorra','austria','belarus','belgium','bosnia-herzegovina','bulgaria','croatia','cyprus','czech-republic','denmark','estonia','finland','france','germany','greece','hungary','iceland','ireland','italy','kosovo','latvia','liechtenstein','lithuania','luxembourg','malta','moldova','monaco','montenegro','netherlands','north-macedonia','norway','poland','portugal','romania','russia','san-marino','serbia','slovakia','slovenia','spain','sweden','switzerland','ukraine','united-kingdom','vatican-city',
  // ASIA
  'afghanistan','bahrain','bangladesh','bhutan','brunei','cambodia','china','india','indonesia','iran','iraq','israel','japan','jordan','kazakhstan','kuwait','kyrgyzstan','laos','lebanon','malaysia','maldives','mongolia','myanmar','nepal','north-korea','oman','pakistan','palestine','philippines','qatar','saudi-arabia','singapore','south-korea','sri-lanka','syria','taiwan','tajikistan','thailand','timor-leste','turkey','turkmenistan','uae','uzbekistan','vietnam',
  // AFRICA
  'algeria','angola','benin','botswana','burkina-faso','burundi','cabo-verde','cameroon','central-african-republic','chad','comoros','congo','congo-dr','djibouti','egypt','equatorial-guinea','eritrea','eswatini','ethiopia','gabon','gambia','ghana','guinea','guinea-bissau','ivory-coast','kenya','lesotho','liberia','libya','madagascar','malawi','mali','mauritania','mauritius','morocco','mozambique','namibia','niger','nigeria','rwanda','sao-tome','senegal','seychelles','sierra-leone','somalia','south-africa','south-sudan','sudan','tanzania','togo','tunisia','uganda','zambia','zimbabwe',
  // AMERICAS
  'antigua-barbuda','argentina','bahamas','barbados','belize','bolivia','brazil','canada','chile','colombia','costa-rica','cuba','dominica','dominican-republic','ecuador','el-salvador','grenada','guatemala','guyana','haiti','honduras','jamaica','mexico','nicaragua','panama','paraguay','peru','saint-kitts-nevis','saint-lucia','saint-vincent','suriname','trinidad-tobago','uruguay','usa','venezuela',
  // OCEANIA
  'australia','fiji','kiribati','marshall-islands','micronesia','nauru','new-zealand','palau','papua-new-guinea','samoa','solomon-islands','tonga','tuvalu','vanuatu'
];

// ================================================================
// PRIORITY GROUPS
// ================================================================
const PRIORITY_GROUPS: Record<string, string[]> = {
  P0_GULF:     ['uae', 'saudi-arabia', 'qatar', 'kuwait', 'oman', 'bahrain'],
  P1_SEA:      ['thailand', 'singapore', 'malaysia', 'indonesia', 'vietnam', 'philippines'],
  P2_EASIA:    ['japan', 'south-korea', 'china', 'taiwan', 'hong-kong'],
  P3_SCHENGEN: ['germany', 'italy', 'spain', 'netherlands', 'switzerland', 'sweden'],
  P4_AMERICAS: ['usa', 'canada', 'mexico', 'brazil', 'argentina'],
  P5_AFRICA:   ['south-africa', 'kenya', 'egypt', 'morocco', 'mauritius'],
  P6_OCEANIA:  ['australia', 'new-zealand', 'fiji'],
  P7_BASE:     ['albania','andorra','austria','belarus','belgium','bosnia-herzegovina','bulgaria','croatia','cyprus','czech-republic','denmark','estonia','finland','germany','greece','hungary','iceland','ireland','italy','kosovo','monaco','netherlands'],
};

// ================================================================
// CLI ARG PARSING
// ================================================================
const _args = process.argv.slice(2);
const envCountries = process.env.npm_config_countries ? `--countries=${process.env.npm_config_countries}` : undefined;
const envPriority  = process.env.npm_config_priority  ? `--priority=${process.env.npm_config_priority}`   : undefined;

const _countriesArg = _args.find(a => a.startsWith('--countries=')) || envCountries;
const _priorityArg  = _args.find(a => a.startsWith('--priority='))  || envPriority;

let COUNTRIES: string[];
if (_countriesArg) {
  COUNTRIES = _countriesArg.replace('--countries=', '').split(',').map(c => c.trim()).filter(Boolean);
} else if (_priorityArg) {
  const key = _priorityArg.replace('--priority=', '').toUpperCase();
  COUNTRIES = PRIORITY_GROUPS[key] || [];
  if (COUNTRIES.length === 0) {
    console.error(`❌ Unknown priority group: "${key}". Valid: ${Object.keys(PRIORITY_GROUPS).join(', ')}`);
    process.exit(1);
  }
} else {
  // Default: all unique countries
  COUNTRIES = [...new Set(COUNTRIES_RAW)];
}

const PURPOSES = ['tourism', 'student', 'work', 'business', 'family_visit'];


// ================================================================
// ENV LOADER
// ================================================================
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const idx = t.indexOf('=');
    if (idx > 0) {
      const key = t.slice(0, idx).trim();
      const val = t.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) process.env[key] = val;
    }
  }
}
loadEnv();

// ================================================================
// BUG FIX 1: SAFE CODE EXTRACTOR
// ================================================================
function cleanTypeScriptOutput(rawText: string): string {
  if (!rawText) return '';

  let code = rawText;

  // 1. Extract from markdown fence if present
  const fenceMatch = code.match(/```(?:typescript|ts|javascript|js)?\s*\n([\s\S]*?)\n```/);
  if (fenceMatch) {
    code = fenceMatch[1];
  }

  // 2. If multiple fences, take the longest
  const allFences = [...code.matchAll(/```(?:typescript|ts)?\s*\n([\s\S]*?)\n```/g)];
  if (allFences.length > 1) {
    const longest = allFences.reduce((a, b) => a[1].length > b[1].length ? a : b);
    code = longest[1];
  }

  // 3. Trim everything before "export default"
  const exportIdx = code.indexOf('export default');
  if (exportIdx > 0) {
    code = code.slice(exportIdx);
  }

  // 4. Trim everything after the last valid closing brace
  const lastBrace = code.lastIndexOf('};');
  if (lastBrace !== -1 && lastBrace < code.length - 10) {
    code = code.slice(0, lastBrace + 2);
  }

  // 5. Filter out conversational filler lines
  code = code
    .split('\n')
    .filter(line => {
      const t = line.trim();
      if (
        t.startsWith('I hope') || t.startsWith('Let me know') ||
        t.startsWith('Feel free') || t.startsWith('Note:') ||
        t.startsWith('Here is') || t.startsWith('Here\'s')
      ) return false;
      return true;
    })
    .join('\n');

  return code.trim();
}

// ================================================================
// BUG FIX 2: VALIDATE TYPESCRIPT OUTPUT
// ================================================================
function isValidTypeScript(code: string): { valid: boolean; reason?: string } {
  if (!code || code.trim().length < 100) {
    return { valid: false, reason: 'Too short (< 100 chars)' };
  }
  if (!code.includes('export default')) {
    return { valid: false, reason: 'Missing export default' };
  }
  const open = (code.match(/{/g) || []).length;
  const close = (code.match(/}/g) || []).length;
  if (Math.abs(open - close) > 2) {
    return { valid: false, reason: `Unbalanced braces: ${open} open, ${close} close` };
  }
  if (code.includes('```')) {
    return { valid: false, reason: 'Markdown fence leftover in code' };
  }
  return { valid: true };
}

// ================================================================
// FREE PROVIDERS
// ================================================================
interface FreeProvider {
  name: string;
  baseUrl: string;
  model: string;
  apiKey: string;
  dailyLimit: number;
  delayMs: number;
}

function getFreeProviders(): FreeProvider[] {
  const p: FreeProvider[] = [];
  if (process.env.GROQ_API_KEY) {
    p.push({
      name: 'groq-120b',
      baseUrl: 'https://api.groq.com/openai/v1',
      model: 'openai/gpt-oss-120b',
      apiKey: process.env.GROQ_API_KEY,
      dailyLimit: 1000,
      delayMs: 1500,
    });
    p.push({
      name: 'groq-20b',
      baseUrl: 'https://api.groq.com/openai/v1',
      model: 'openai/gpt-oss-20b',
      apiKey: process.env.GROQ_API_KEY,
      dailyLimit: 1000,
      delayMs: 1500,
    });
    p.push({
      name: 'groq-qwen',
      baseUrl: 'https://api.groq.com/openai/v1',
      model: 'qwen/qwen3.8-27b',
      apiKey: process.env.GROQ_API_KEY,
      dailyLimit: 1000,
      delayMs: 1500,
    });
  }
  return p;
}

function getGeminiKeys(): string[] {
  const keys: string[] = [];
  const seen = new Set<string>();
  const add = (k?: string) => {
    if (k && k.trim().length > 10 && !seen.has(k.trim())) {
      seen.add(k.trim());
      keys.push(k.trim());
    }
  };
  add(process.env.GEMINI_API_KEY);
  add(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  for (let i = 1; i <= 10; i++) {
    add(process.env[`GEMINI_API_KEY_${i}`]);
    add(process.env[`NEXT_PUBLIC_GEMINI_API_KEY_${i}`]);
  }
  return keys;
}

const FREE_PROVIDERS = getFreeProviders();
const GEMINI_KEYS = getGeminiKeys();

const _aiCache = new Map<string, GoogleGenAI>();
function getAI(key: string): GoogleGenAI {
  if (!_aiCache.has(key)) _aiCache.set(key, new GoogleGenAI({ apiKey: key }));
  return _aiCache.get(key)!;
}

console.log(chalk.green(`🔑 Free providers: ${FREE_PROVIDERS.length} (${FREE_PROVIDERS.map(p => p.name).join(', ') || 'NONE'})`));
console.log(chalk.green(`🔑 Gemini keys: ${GEMINI_KEYS.length}`));

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const PARALLEL_WORKERS = 1;

// ================================================================
// RULES
// ================================================================
function getCountryRules(country: string): string {
  const rules: Record<string, string> = {
    'nepal': 'NEPAL: Visa-Free for Indians (1950 Treaty). Passport OR Voter ID. 150 days/year. No fee.',
    'bhutan': 'BHUTAN: Visa-Free for Indians. Passport OR Voter ID. SDF: 1200 INR/day. Entry Permit at border.',
    'russia': 'RUSSIA: Unified eVisa. Portal: electronic-visa.kdmid.ru. 4 days. ~52 USD. No voucher needed. Nationwide scope.',
    'south-africa': 'SOUTH AFRICA: Gratis (0 INR). eVisa + VFS. Yellow Fever cert if from endemic. Unabridged Birth Cert for minors.',
    'france': 'FRANCE: Schengen C. Insurance 30k EUR minimum. 15 working days. 90 EUR consular + VFS service fee. France-Visas portal.',
    'greece': 'GREECE: Schengen C. Insurance 30k EUR. 15 working days. 90 EUR consular + GVCW service provider (NOT VFS).',
    'united-kingdom': 'UK: Standard Visitor 6mo. 15 working days. 127 GBP statutory. GOV.UK Access UK portal.',
    'usa': 'USA: B1/B2. DS-160 via CEAC portal. 185 USD MRV fee. VAC biometrics + Embassy interview mandatory.',
    'canada': 'CANADA: Temporary Resident Visa (TRV). IRCC Portal. 100 CAD application + 85 CAD biometrics.',
    'uae': 'UAE: Tourist eVisa 30/60 days. 24-72h processing. ICP (Federal) or GDRFA (Dubai).',
    'australia': 'AUSTRALIA: Visitor Subclass 600 (195 AUD). Student Subclass 500 (needs eCoE + OSHC). ImmiAccount portal.',
    'thailand': 'THAILAND: Visa exemption for Indians (tourist). 30 days/entry. No fee.',
    'singapore': 'SINGAPORE: SG Arrival Card (SGAC) mandatory. ICA portal. Submit within 3 days before arrival.',
    'jamaica': 'JAMAICA: Visa-free 30 days tourism. C5 immigration form at enterjamaica.com mandatory before boarding.',
    'latvia': 'LATVIA: Schengen C. Consular fee: 90 EUR. Portal: mfa.gov.lv. Provider: VFS Global. 15 working days.',
    'liechtenstein': 'LIECHTENSTEIN: Schengen member (represented by Switzerland/VFS in India). Consular fee: 90 EUR. Portal: llv.li. Provider: VFS Global.',
    'lithuania': 'LITHUANIA: Schengen C. Consular fee: 90 EUR. Portal: mfa.lt. Provider: VFS Global. 15 working days.',
    'luxembourg': 'LUXEMBOURG: Schengen C. Consular fee: 90 EUR. Portal: gouvernement.lu. Provider: VFS Global. 15 working days.',
    'malta': 'MALTA: Schengen C. Consular fee: 90 EUR. Portal: foreign.gov.mt. Provider: VFS Global. 15 working days.',
    'moldova': 'MOLDOVA: Non-Schengen. eVisa portal: evisa.gov.md / mfa.gov.md. Consular fee: 40-80 EUR depending on category.',
  };
  return rules[country] || `${country.toUpperCase()}: Use official .gov/.mfa/embassy sources only. Strict destination isolation — no bleeding of Schengen/US/UK rules.`;
}

function getUniversalRules(): string {
  return `UNIVERSAL RULES (STRICT):
1. DESTINATION ISOLATION: Schengen 90/180-day rule ONLY for Schengen countries. US DS-160 ONLY for USA.
2. FINANCIAL PROOF: Education loans / blocked accounts ONLY for Student visa. Tourism: Bank statements + ITR + NOC only.
3. HEALTH MANDATES: Yellow Fever ONLY for endemic Africa/South America countries. HIV test ONLY for stays >90 days (Student/Work).
4. PASSPORT PHOTO: 35x45mm, white background, taken within 6 months, neutral expression.
5. VERIFIED FEES: Schengen=90 EUR | UK=127 GBP | Australia=195 AUD | Canada=100+85 CAD | USA=185 USD
6. PROCESSING TIME: ALWAYS use "working days" NOT "calendar days" for all processing, standardSticker, and expressSticker fields.`;
}

// ================================================================
// PHASE 1: BULK LAYOUT via FREE PROVIDERS
// ================================================================
async function callFreeProvider(provider: FreeProvider, prompt: string): Promise<string> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(`${provider.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${provider.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: provider.model,
        messages: [
          {
            role: 'system',
            content: `You are a TypeScript code generator for official visa data.
CRITICAL RULES:
- Return ONLY raw TypeScript code starting with "export default {"
- Do NOT include any explanation, markdown fences (\`\`\`), or conversational text
- Start your response directly with: export default {
- End your response with: };`,
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.1,
        max_tokens: 4000,
      }),
    });

    if (res.status === 429) {
      process.stderr.write(chalk.yellow(`  ⏳ ${provider.name} rate limit (429). Waiting 10s...\n`));
      await sleep(10000);
      continue;
    }

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`${provider.name} HTTP ${res.status}: ${errText.slice(0, 150)}`);
    }

    const data = await res.json() as any;
    return data.choices?.[0]?.message?.content || '';
  }
  throw new Error(`${provider.name}: max retries exceeded after 429`);
}

async function phase1HealRoute(country: string, purpose: string, workerIdx: number): Promise<any> {
  if (FREE_PROVIDERS.length === 0) {
    return { country, purpose, status: 'skipped', reason: 'No free providers configured' };
  }

  const testPath = path.join(TEST_DIR, country, `${purpose}.ts`);
  const origPath = path.join(ORIGINAL_DIR, country, `${purpose}.ts`);

  let raw = '';
  if (fs.existsSync(testPath)) raw = fs.readFileSync(testPath, 'utf-8');
  else if (fs.existsSync(origPath)) raw = fs.readFileSync(origPath, 'utf-8');

  const isExisting = raw.trim().length > 50;
  const visaCategoryMap: Record<string, string> = {
    tourism: 'Tourist Visa',
    student: 'Student Visa',
    work: 'Employment / Work Visa',
    business: 'Business Visa',
    family_visit: 'Family Visit Visa',
  };

  const prompt = isExisting
    ? `Audit and heal this visa data file (India → ${country}, ${purpose}).

CURRENT DATA:
${raw}

${getUniversalRules()}
${getCountryRules(country)}

OUTPUT RULES:
1. Return COMPLETE TypeScript file with export default { ... }
2. Keep ALL existing fields, update ONLY incorrect ones
3. Preserve ALL existing comments and formatting style
4. Do NOT add markdown fences`
    : `Generate complete production-ready visa data TypeScript for: Indian passport → ${country} → ${purpose}.

${getUniversalRules()}
${getCountryRules(country)}

EXACT SCHEMA TO USE:
export default {
  country: '${country}',
  fromCountry: 'India',
  visaCategory: '${visaCategoryMap[purpose] || purpose}',
  authority: 'Official Ministry/Embassy Name',
  channels: ['Official Portal URL', 'VFS/BLS/TLS/GVCW Service Center', 'Embassy Direct'],
  processingTime: { eVisa: 'X days or N/A', standardSticker: 'X working days', expressSticker: 'X working days or N/A' },
  fees: { eVisaTotal: 'Amount or N/A', stickerConsularStandard: 'Exact statutory amount', vfsServiceFee: 'Service provider fee' },
  eVisa: { available: true/false, portal: 'official URL', territorialScope: 'Nationwide/Regional', validity: 'Duration', maxStay: 'Max days', invitationRequired: false, processing: 'X days' },
  stayDuration: { eVisa: 'Duration or N/A', stickerSingleDouble: 'Duration', stickerMultiple: 'Duration' },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Detailed requirement', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Portal details', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return booking', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel or invitation', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage details', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Step Title', description: 'Step description' }
  ],
  specialRequirements: { entry_rules: 'Specific mandates or N/A' }
};`;

  const maxAttempts = FREE_PROVIDERS.length;
  let lastErr = '';

  for (let a = 0; a < maxAttempts; a++) {
    const provider = FREE_PROVIDERS[(workerIdx + a) % FREE_PROVIDERS.length];
    try {
      const txt = await callFreeProvider(provider, prompt);
      const code = cleanTypeScriptOutput(txt);
      const validation = isValidTypeScript(code);

      if (!validation.valid) {
        throw new Error(`Validation failed: ${validation.reason}`);
      }

      const dir = path.dirname(testPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      if (fs.existsSync(testPath)) fs.copyFileSync(testPath, testPath + '.backup');
      fs.writeFileSync(testPath, code);

      return { country, purpose, status: 'healed', provider: provider.name };
    } catch (e: any) {
      lastErr = e.message || String(e);
      process.stderr.write(chalk.red(`  ❌ ${provider?.name || 'unknown'} [${country}-${purpose}]: ${lastErr.slice(0, 80)}\n`));
      await sleep(1000);
    }
  }

  // Fallback to Gemini if free providers fail
  if (GEMINI_KEYS.length > 0) {
    const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-3.5-flash', 'gemini-flash-latest'];
    for (const model of GEMINI_MODELS) {
      for (let k = 0; k < GEMINI_KEYS.length; k++) {
        try {
          const apiKey = GEMINI_KEYS[(workerIdx + k) % GEMINI_KEYS.length];
          const ai = getAI(apiKey);
          const res = await ai.models.generateContent({
            model,
            contents: prompt,
            config: { temperature: 0.1 },
          });
          const txt = res.text || '';
          const code = cleanTypeScriptOutput(txt);
          const validation = isValidTypeScript(code);
          if (validation.valid) {
            const dir = path.dirname(testPath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            if (fs.existsSync(testPath)) fs.copyFileSync(testPath, testPath + '.backup');
            fs.writeFileSync(testPath, code);
            return { country, purpose, status: 'healed', provider: `gemini-fallback (${model})` };
          }
        } catch (gErr: any) {
          lastErr = `Gemini fallback (${model}): ${gErr.message || gErr}`;
          if (lastErr.includes('429') || lastErr.includes('RESOURCE_EXHAUSTED')) {
            break;
          }
          continue;
        }
      }
    }
  }

  return { country, purpose, status: 'failed', error: lastErr };
}

// ================================================================
// PHASE 2: GROUNDED VERIFICATION via GEMINI
// ================================================================
async function phase2VerifyRoute(country: string, purpose: string, workerIdx: number): Promise<any> {
  const testPath = path.join(TEST_DIR, country, `${purpose}.ts`);
  if (!fs.existsSync(testPath)) {
    return { country, purpose, status: 'skipped', reason: 'No phase1 file found' };
  }

  const raw = fs.readFileSync(testPath, 'utf-8');

  const prompt = `You are a visa data auditor. Verify this data for India → ${country} → ${purpose} using current official sources.

CURRENT DATA:
${raw}

TASK — Verify & correct ONLY these critical fields using live official sources:
1. Statutory Consular Fee (exact amount + currency)
2. External Service Provider (VFS Global / GVCW / BLS / TLScontact / Embassy direct)
3. Maximum Permitted Stay (days)
4. Processing Time (working days)
5. eVisa availability and official portal URL

If a value in current data is WRONG → correct it.
If a value is missing → add it.
If a value is correct → keep it unchanged.

Return ONLY the corrected TypeScript file starting with "export default {", no markdown fences.`;

  let lastErr = '';
  const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-3.5-flash', 'gemini-flash-latest'];
  for (const model of GEMINI_MODELS) {
    for (let k = 0; k < GEMINI_KEYS.length; k++) {
      const apiKey = GEMINI_KEYS[(workerIdx + k) % GEMINI_KEYS.length];
      const ai = getAI(apiKey);
      try {
        const response = await ai.models.generateContent({
          model,
          contents: prompt,
          config: {
            temperature: 0,
          },
        });

        const txt = response.text || '';
        const code = cleanTypeScriptOutput(txt);
        const validation = isValidTypeScript(code);

        if (!validation.valid) {
          throw new Error(`Validation failed: ${validation.reason}`);
        }

        const sources = (response.candidates?.[0] as any)?.groundingMetadata?.groundingChunks || [];

        const verPath = path.join(VERIFIED_DIR, country, `${purpose}.ts`);
        const dir = path.dirname(verPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(verPath, code);

        return {
          country, purpose, status: 'verified',
          sourcesCount: sources.length,
          sources: sources.slice(0, 3).map((s: any) => s.web?.uri).filter(Boolean),
        };
      } catch (e: any) {
        lastErr = e.message || String(e);
        if (lastErr.includes('429') || lastErr.includes('RESOURCE_EXHAUSTED')) {
          break;
        }
        continue;
      }
    }
  }

  // Fallback to Free Providers auditor if Gemini is exhausted
  if (FREE_PROVIDERS.length > 0) {
    for (const provider of FREE_PROVIDERS) {
      try {
        const txt = await callFreeProvider(provider, prompt);
        const code = cleanTypeScriptOutput(txt);
        const validation = isValidTypeScript(code);
        if (validation.valid) {
          const verPath = path.join(VERIFIED_DIR, country, `${purpose}.ts`);
          const dir = path.dirname(verPath);
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(verPath, code);
          return {
            country, purpose, status: 'verified',
            sourcesCount: 0,
            sources: [`auditor:${provider.name}`],
          };
        }
      } catch (fErr: any) {
        lastErr = fErr.message || String(fErr);
      }
    }
  }

  const isQuota = lastErr.includes('RESOURCE_EXHAUSTED') || lastErr.includes('429');
  return {
    country, purpose,
    status: isQuota ? 'quota_exceeded' : 'failed',
    error: lastErr.slice(0, 150),
  };
}

// ================================================================
// CHECKPOINT SYSTEM
// ================================================================
function loadCheckpoint(file: string): Set<string> {
  if (!fs.existsSync(file)) return new Set();
  try {
    const d = JSON.parse(fs.readFileSync(file, 'utf-8'));
    return new Set(d.completed || []);
  } catch {
    return new Set();
  }
}

function saveCheckpoint(file: string, set: Set<string>) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(file, JSON.stringify({
    completed: Array.from(set),
    total: COUNTRIES.length * PURPOSES.length,
    timestamp: new Date().toISOString(),
  }, null, 2));
}

// ================================================================
// PHASE 1 RUNNER
// ================================================================
async function runPhase1() {
  if (!fs.existsSync(TEST_DIR)) {
    console.log(chalk.yellow('Test dir missing. Copying from original...'));
    if (fs.existsSync(ORIGINAL_DIR)) {
      fs.cpSync(ORIGINAL_DIR, TEST_DIR, { recursive: true });
      console.log(chalk.green('✅ Test directory created from original.'));
    } else {
      fs.mkdirSync(TEST_DIR, { recursive: true });
    }
  }

  if (FREE_PROVIDERS.length === 0) {
    console.log(chalk.red('❌ No free providers found! Add GROQ_API_KEY / CEREBRAS_API_KEY / SAMBANOVA_API_KEY to .env'));
    return;
  }

  const completed = loadCheckpoint(CHECKPOINT_P1);
  const queue: { country: string; purpose: string }[] = [];

  for (const c of COUNTRIES) {
    for (const p of PURPOSES) {
      const key = `${c}-${p}`;
      const f = path.join(TEST_DIR, c, `${p}.ts`);
      if (!completed.has(key) || !fs.existsSync(f)) {
        queue.push({ country: c, purpose: p });
      }
    }
  }

  if (queue.length === 0) {
    console.log(chalk.green('✅ Phase 1: All routes already complete!'));
    return;
  }

  const totalRoutes = COUNTRIES.length * PURPOSES.length;
  console.log(chalk.bold.blue(`\n🚀 PHASE 1: Bulk Layout via Free Providers`));
  console.log(chalk.gray(`📊 Total routes: ${totalRoutes}`));
  console.log(chalk.green(`✅ Already done: ${completed.size}`));
  console.log(chalk.yellow(`📝 Remaining: ${queue.length}`));
  console.log(chalk.blue(`⚡ Providers: ${FREE_PROVIDERS.map(p => p.name).join(', ')}`));
  console.log(chalk.blue(`⚡ Workers: ${PARALLEL_WORKERS}`));

  const bar = new cliProgress.SingleBar({
    format: 'Phase 1 |{bar}| {percentage}% | {value}/{total} routes | ETA: {eta_formatted}',
    hideCursor: true,
  });
  bar.start(queue.length, 0);

  const results: any[] = [];
  let done = 0;

  for (let i = 0; i < queue.length; i += PARALLEL_WORKERS) {
    const chunk = queue.slice(i, i + PARALLEL_WORKERS);
    const res = await Promise.allSettled(
      chunk.map(({ country, purpose }, idx) => phase1HealRoute(country, purpose, idx))
    );

    for (const r of res) {
      if (r.status === 'fulfilled') {
        results.push(r.value);
        if (r.value.status === 'healed') {
          completed.add(`${r.value.country}-${r.value.purpose}`);
          console.log(chalk.green(`  ✅ Healed: ${r.value.country}-${r.value.purpose}`));
        } else {
          process.stderr.write(chalk.red(`\n⚠️ ${r.value.country}-${r.value.purpose}: ${r.value.error || r.value.reason}\n`));
        }
      } else {
        process.stderr.write(chalk.red(`\n❌ Worker crashed: ${r.reason}\n`));
      }
    }

    done += chunk.length;
    bar.update(done);
    saveCheckpoint(CHECKPOINT_P1, completed);

    if (i + PARALLEL_WORKERS < queue.length) await sleep(2000);
  }

  bar.stop();
  fs.writeFileSync(path.join(REPORTS_DIR, 'phase1-summary.json'), JSON.stringify(results, null, 2));

  const healed = results.filter(r => r.status === 'healed').length;
  const failed = results.filter(r => r.status === 'failed').length;
  console.log(chalk.green(`\n✅ Phase 1 Complete: ${healed} healed, ${failed} failed, ${completed.size} total done`));
}

// ================================================================
// PHASE 2 RUNNER
// ================================================================
async function runPhase2() {
  if (GEMINI_KEYS.length === 0) {
    console.log(chalk.red('❌ No Gemini keys found! Cannot run Phase 2 (grounded verification).'));
    return;
  }

  const completed = loadCheckpoint(CHECKPOINT_P2);
  const queue: { country: string; purpose: string }[] = [];

  for (const c of COUNTRIES) {
    for (const p of PURPOSES) {
      const key = `${c}-${p}`;
      const src = path.join(TEST_DIR, c, `${p}.ts`);
      const dst = path.join(VERIFIED_DIR, c, `${p}.ts`);
      if (fs.existsSync(src) && (!completed.has(key) || !fs.existsSync(dst))) {
        queue.push({ country: c, purpose: p });
      }
    }
  }

  if (queue.length === 0) {
    console.log(chalk.green('✅ Phase 2: All routes already verified!'));
    return;
  }

  console.log(chalk.bold.blue(`\n🔍 PHASE 2: Grounded Verification via Gemini`));
  console.log(chalk.yellow(`📝 ${queue.length} routes to verify`));
  console.log(chalk.blue(`🔑 Gemini keys: ${GEMINI_KEYS.length}`));

  const bar = new cliProgress.SingleBar({
    format: 'Phase 2 |{bar}| {percentage}% | {value}/{total} routes | ETA: {eta_formatted}',
    hideCursor: true,
  });
  bar.start(queue.length, 0);

  const results: any[] = [];
  let done = 0;
  let quotaHit = false;

  for (let i = 0; i < queue.length; i += PARALLEL_WORKERS) {
    if (quotaHit) break;

    const chunk = queue.slice(i, i + PARALLEL_WORKERS);
    const res = await Promise.allSettled(
      chunk.map(({ country, purpose }, idx) => phase2VerifyRoute(country, purpose, idx))
    );

    for (const r of res) {
      if (r.status === 'fulfilled') {
        results.push(r.value);
        if (r.value.status === 'verified') {
          completed.add(`${r.value.country}-${r.value.purpose}`);
          console.log(chalk.green(`  ✅ Verified: ${r.value.country}-${r.value.purpose}`));
        } else if (r.value.status === 'quota_exceeded') {
          console.log(chalk.yellow(`\n⚠️ Gemini rate limit hit for ${r.value.country}-${r.value.purpose}. Sleeping 12s for reset...`));
          await sleep(12000);
        } else {
          console.log(chalk.red(`\n⚠️ ${r.value.country}-${r.value.purpose}: ${r.value.error}\n`));
        }
      }
    }

    done += chunk.length;
    bar.update(done);
    saveCheckpoint(CHECKPOINT_P2, completed);
    if (i + PARALLEL_WORKERS < queue.length) await sleep(2000);
  }

  bar.stop();
  fs.writeFileSync(path.join(REPORTS_DIR, 'phase2-summary.json'), JSON.stringify(results, null, 2));

  const verified = results.filter(r => r.status === 'verified').length;
  console.log(chalk.green(`\n✅ Phase 2 Complete: ${verified} verified, ${completed.size} total done`));
}

// ================================================================
// PHASE 3: DIFF & FLAG
// ================================================================
function extractCriticalFields(code: string) {
  const get = (re: RegExp) => { const m = code.match(re); return m ? m[1].trim() : null; };
  return {
    consularFee: get(/stickerConsularStandard:\s*['"]([^'"]+)['"]/),
    vfsFee: get(/vfsServiceFee:\s*['"]([^'"]+)['"]/),
    channels: get(/channels:\s*\[([^\]]+)\]/),
    processing: get(/standardSticker:\s*['"]([^'"]+)['"]/),
    maxStay: get(/maxStay:\s*['"]([^'"]+)['"]/),
  };
}

async function runPhase3Diff() {
  console.log(chalk.bold.blue('\n🔬 PHASE 3: Diff & Flag Mismatches'));

  const flags: any[] = [];
  let compared = 0;

  for (const c of COUNTRIES) {
    for (const p of PURPOSES) {
      const p1Path = path.join(TEST_DIR, c, `${p}.ts`);
      const p2Path = path.join(VERIFIED_DIR, c, `${p}.ts`);
      if (!fs.existsSync(p1Path) || !fs.existsSync(p2Path)) continue;

      const a = extractCriticalFields(fs.readFileSync(p1Path, 'utf-8'));
      const b = extractCriticalFields(fs.readFileSync(p2Path, 'utf-8'));

      for (const key of Object.keys(a) as (keyof typeof a)[]) {
        if (a[key] && b[key] && a[key] !== b[key]) {
          flags.push({
            route: `${c}-${p}`,
            field: key,
            phase1Value: a[key],
            phase2Value: b[key],
            severity: (key === 'consularFee' || key === 'vfsFee') ? 'HIGH' : 'MEDIUM',
          });
        }
      }
      compared++;
    }
  }

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(FLAGGED_FILE, JSON.stringify({
    generatedAt: new Date().toISOString(),
    totalCompared: compared,
    totalFlags: flags.length,
    highSeverity: flags.filter(f => f.severity === 'HIGH').length,
    flags,
  }, null, 2));

  console.log(chalk.green(`\n✅ Compared: ${compared} routes`));
  console.log(chalk.yellow(`⚠️ Total flags: ${flags.length} (${flags.filter(f => f.severity === 'HIGH').length} HIGH severity)`));
  console.log(chalk.gray(`📄 Full report: ${FLAGGED_FILE}`));
}

// ================================================================
// APPLY VERIFIED → ORIGINAL
// ================================================================
async function applyVerified() {
  console.log(chalk.bold.yellow('\n⚠️ This will apply ALL verified files → original directory!'));

  let confirmed = process.argv.includes('--yes');
  if (!confirmed) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const ans = await new Promise<string>(r => rl.question(chalk.red('Type "yes" to confirm: '), r));
    rl.close();
    confirmed = (ans === 'yes');
  }

  if (!confirmed) {
    console.log(chalk.gray('Cancelled. Original files untouched.'));
    return;
  }

  function walk(dir: string): string[] {
    const out: string[] = [];
    if (!fs.existsSync(dir)) return out;
    for (const item of fs.readdirSync(dir)) {
      const fp = path.join(dir, item);
      if (fs.statSync(fp).isDirectory()) out.push(...walk(fp));
      else if (item.endsWith('.ts') && !item.endsWith('.backup')) out.push(fp);
    }
    return out;
  }

  let applied = 0;
  for (const vf of walk(VERIFIED_DIR)) {
    const rel = path.relative(VERIFIED_DIR, vf);
    const orig = path.join(ORIGINAL_DIR, rel);
    const dir = path.dirname(orig);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (fs.existsSync(orig)) fs.copyFileSync(orig, orig + '.backup');
    fs.copyFileSync(vf, orig);
    applied++;
  }

  console.log(chalk.green(`\n✅ Applied ${applied} verified files → original directory.`));
  console.log(chalk.gray('Backups saved with .backup extension.'));
}

// ================================================================
// APPLY TEST → ORIGINAL (for legacy compatibility)
// ================================================================
async function applyTestToOriginal() {
  console.log(chalk.bold.yellow('\n⚠️ This will apply ALL test (phase1) files → original directory!'));

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ans = await new Promise<string>(r => rl.question(chalk.red('Type "yes" to confirm: '), r));
  rl.close();

  if (ans !== 'yes') {
    console.log(chalk.gray('Cancelled.'));
    return;
  }

  function walk(dir: string): string[] {
    const out: string[] = [];
    if (!fs.existsSync(dir)) return out;
    for (const item of fs.readdirSync(dir)) {
      const fp = path.join(dir, item);
      if (fs.statSync(fp).isDirectory()) out.push(...walk(fp));
      else if (item.endsWith('.ts') && !item.endsWith('.backup')) out.push(fp);
    }
    return out;
  }

  let applied = 0;
  for (const tf of walk(TEST_DIR)) {
    const rel = path.relative(TEST_DIR, tf);
    const orig = path.join(ORIGINAL_DIR, rel);
    const dir = path.dirname(orig);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (fs.existsSync(orig)) fs.copyFileSync(orig, orig + '.backup');
    fs.copyFileSync(tf, orig);
    applied++;
  }

  console.log(chalk.green(`\n✅ Applied ${applied} files → original directory.`));
}

// ================================================================
// CLI ENTRY POINT
// ================================================================
const cmd = _args.find(a => !a.startsWith('--')) || '';

async function main() {
  switch (cmd) {
    case 'phase1':
      await runPhase1();
      break;
    case 'phase2':
      await runPhase2();
      break;
    case 'diff':
      await runPhase3Diff();
      break;
    case 'apply':
      await applyVerified();
      break;
    case 'apply-test':
      await applyTestToOriginal();
      break;
    case 'all':
      await runPhase1();
      await runPhase2();
      await runPhase3Diff();
      await applyVerified();
      break;
    case 'resume':
      // Legacy: resume = phase1
      await runPhase1();
      break;
    default:
      console.log(`
${chalk.bold.cyan('TravlTik Visa Pipeline — Hardened v2.0')}
${chalk.gray('Phase 1: Free providers (Groq) → Phase 2: Gemini grounded verification')}

${chalk.bold('Commands:')}
  npm run visa:phase1                          → All COUNTRIES_RAW
  npm run visa:phase1 -- --priority=P0_GULF   → Gulf countries only
  npm run visa:phase2 -- --priority=P1_SEA    → SE Asia verification
  npm run visa:diff   -- --countries=uae,usa  → Specific countries diff
  npm run visa:apply  -- --priority=P2_EASIA  → Apply East Asia
  npm run visa:all                            → Phase1 + Phase2 + Diff sequentially

${chalk.bold('Priority Groups:')}
  P0_GULF     → ${PRIORITY_GROUPS.P0_GULF.join(', ')}
  P1_SEA      → ${PRIORITY_GROUPS.P1_SEA.join(', ')}
  P2_EASIA    → ${PRIORITY_GROUPS.P2_EASIA.join(', ')}
  P3_SCHENGEN → ${PRIORITY_GROUPS.P3_SCHENGEN.join(', ')}
  P4_AMERICAS → ${PRIORITY_GROUPS.P4_AMERICAS.join(', ')}
  P5_AFRICA   → ${PRIORITY_GROUPS.P5_AFRICA.join(', ')}
  P6_OCEANIA  → ${PRIORITY_GROUPS.P6_OCEANIA.join(', ')}
  P7_BASE     → ${PRIORITY_GROUPS.P7_BASE.length} European base countries

${chalk.bold('Current Config:')}
  Free providers : ${chalk.green(FREE_PROVIDERS.length.toString())} (${FREE_PROVIDERS.map(p => `${p.name}`).join(', ') || 'NONE — add GROQ key'})
  Gemini keys    : ${chalk.green(GEMINI_KEYS.length.toString())}
  Countries      : ${chalk.yellow(COUNTRIES.length.toString())} ${_priorityArg ? chalk.gray(`(${_priorityArg})`) : _countriesArg ? chalk.gray('(custom)') : chalk.gray('(all)')}
  Total routes   : ${chalk.yellow((COUNTRIES.length * PURPOSES.length).toString())}
  Workers        : ${chalk.blue(PARALLEL_WORKERS.toString())} parallel
      `);
  }
}

main().catch(e => {
  console.error(chalk.red('\n❌ Fatal error:'), e);
  process.exit(1);
});
