// src/lib/visa/orizn-client.ts
// Orizn API client — fetches visa data from https://visa.orizn.app/api/v1/visa
// 8-second timeout, 2 retries with exponential backoff
// Returns raw Orizn response or null on any error

export interface OrignRawResponse {
  data: {
    passport: string;
    destination: string;
    requirement: string;           // "visa_required" | "visa_free" | "visa_on_arrival" | "e_visa" | "eta"
    visa_free_days?: number;
    visa_required: boolean;
    description?: string;
    documents_required?: string[];
    process?: string[];
    tips?: string[];
    cost?: string;
    processing_days?: string | number;
    country_info?: {
      currency?: string;
      language?: string;
      timezone?: string;
      capital?: string;
    };
    verified?: boolean;
  };
  meta?: {
    lang?: string;
    api_version?: string;
    coverage?: string;
    languages?: number;
  };
}

// Country name → ISO 3166-1 alpha-3 map (common travel routes)
const COUNTRY_TO_ISO3: Record<string, string> = {
  'india': 'IND', 'united states': 'USA', 'usa': 'USA', 'us': 'USA',
  'united kingdom': 'GBR', 'uk': 'GBR', 'great britain': 'GBR',
  'france': 'FRA', 'germany': 'DEU', 'italy': 'ITA', 'spain': 'ESP',
  'portugal': 'PRT', 'netherlands': 'NLD', 'belgium': 'BEL',
  'switzerland': 'CHE', 'austria': 'AUT', 'sweden': 'SWE',
  'norway': 'NOR', 'denmark': 'DNK', 'finland': 'FIN',
  'poland': 'POL', 'czechia': 'CZE', 'czech republic': 'CZE',
  'hungary': 'HUN', 'slovakia': 'SVK', 'slovenia': 'SVN',
  'estonia': 'EST', 'latvia': 'LVA', 'lithuania': 'LTU',
  'luxembourg': 'LUX', 'malta': 'MLT', 'iceland': 'ISL',
  'liechtenstein': 'LIE', 'greece': 'GRC', 'romania': 'ROU',
  'bulgaria': 'BGR', 'croatia': 'HRV',
  'canada': 'CAN', 'australia': 'AUS', 'new zealand': 'NZL',
  'japan': 'JPN', 'south korea': 'KOR', 'korea': 'KOR',
  'china': 'CHN', 'hong kong': 'HKG', 'singapore': 'SGP',
  'thailand': 'THA', 'malaysia': 'MYS', 'indonesia': 'IDN',
  'philippines': 'PHL', 'vietnam': 'VNM', 'cambodia': 'KHM',
  'sri lanka': 'LKA', 'nepal': 'NPL', 'bhutan': 'BTN',
  'maldives': 'MDV', 'pakistan': 'PAK', 'bangladesh': 'BGD',
  'united arab emirates': 'ARE', 'uae': 'ARE', 'dubai': 'ARE',
  'saudi arabia': 'SAU', 'qatar': 'QAT', 'bahrain': 'BHR',
  'oman': 'OMN', 'kuwait': 'KWT', 'jordan': 'JOR',
  'turkey': 'TUR', 'turkiye': 'TUR', 'egypt': 'EGY',
  'kenya': 'KEN', 'tanzania': 'TZA', 'south africa': 'ZAF',
  'seychelles': 'SYC', 'mauritius': 'MUS',
  'russia': 'RUS', 'ukraine': 'UKR',
  'mexico': 'MEX', 'brazil': 'BRA', 'argentina': 'ARG',
  'colombia': 'COL', 'peru': 'PER', 'chile': 'CHL',
  'kazakhstan': 'KAZ', 'azerbaijan': 'AZE', 'georgia': 'GEO',
  'armenia': 'ARM', 'uzbekistan': 'UZB',
  'morocco': 'MAR', 'ethiopia': 'ETH', 'nigeria': 'NGA',
  'ghana': 'GHA', 'uganda': 'UGA', 'rwanda': 'RWA',
};

export function countryToIso3(country: string): string {
  const lower = country.toLowerCase().trim();
  return COUNTRY_TO_ISO3[lower] || country.toUpperCase().slice(0, 3);
}

// Metrics (in-memory, reset on server restart)
let _quotaRemaining: number | null = null;
let _lastError: string | null = null;
let _cacheHits = 0;
let _cacheMisses = 0;

export function getOrignMetrics() {
  return {
    quota_remaining: _quotaRemaining,
    last_error: _lastError,
    cache_hits: _cacheHits,
    cache_misses: _cacheMisses,
  };
}
export function recordCacheHit() { _cacheHits++; }
export function recordCacheMiss() { _cacheMisses++; }

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

import fs from 'fs';
import path from 'path';

export function getOriznApiKey(): string {
  let key = (
    (import.meta?.env?.ORIZN_API_KEY as string | undefined) ||
    process.env.ORIZN_API_KEY ||
    ''
  )?.trim();
  if (key) return key;

  try {
    const envFiles = ['.env', '.env.local'];
    for (const f of envFiles) {
      const envPath = path.resolve(process.cwd(), f);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const match = content.match(/^ORIZN_API_KEY\s*=\s*(.*)$/m);
        if (match) {
          key = match[1].trim().replace(/^["']|["']$/g, '');
          if (key) return key;
        }
      }
    }
  } catch (err) {}
  return '';
}

export function isOriznEnabled(): boolean {
  if (process.env.ORIZN_ENABLED === 'false') return false;
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/^ORIZN_ENABLED\s*=\s*(.*)$/m);
      if (match && match[1].trim().toLowerCase() === 'false') return false;
    }
  } catch {}
  return true;
}

export async function fetchVisaFromOrizn(
  fromCountry: string,
  toCountry: string,
  lang = 'en'
): Promise<OrignRawResponse | null> {
  const apiKey = getOriznApiKey();
  const enabled = isOriznEnabled();

  if (!apiKey || !enabled) {
    console.warn('[ORIZN] API key not set or ORIZN_ENABLED=false — skipping');
    return null;
  }

  const passport = countryToIso3(fromCountry);
  const destination = countryToIso3(toCountry);
  const timeoutMs = parseInt(process.env.ORIZN_TIMEOUT_SECONDS || '8', 10) * 1000;
  const url = `https://visa.orizn.app/api/v1/visa?passport=${passport}&destination=${destination}&lang=${lang}`;

  let lastErr: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) {
      const delay = 500 * Math.pow(2, attempt - 1); // 500ms, 1000ms
      await sleep(delay);
      console.log(`[ORIZN] Retry ${attempt} for ${fromCountry}-${toCountry}`);
    }

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': apiKey,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!res.ok) {
        const body = await res.text();
        _lastError = `HTTP ${res.status}: ${body.slice(0, 200)}`;
        console.warn(`[ORIZN] HTTP error ${res.status} for ${fromCountry}-${toCountry}: ${body.slice(0, 200)}`);
        if (res.status === 429 || res.status === 401 || res.status === 403) {
          // Don't retry quota/auth errors
          return null;
        }
        lastErr = new Error(_lastError);
        continue;
      }

      const json = await res.json();
      console.log(`[ORIZN] Success ${fromCountry}-${toCountry} attempt=${attempt}`);
      _lastError = null;
      if (json?.meta?.quota?.remaining !== undefined) {
        _quotaRemaining = json.meta.quota.remaining;
      }
      return json as OrignRawResponse;

    } catch (err: any) {
      lastErr = err;
      _lastError = err?.message || String(err);
      console.warn(`[ORIZN] Fetch error ${fromCountry}-${toCountry} attempt=${attempt}: ${_lastError}`);
    }
  }

  console.error(`[ORIZN] All retries exhausted for ${fromCountry}-${toCountry}: ${_lastError}`);
  return null;
}
