import type { APIRoute } from 'astro';

export const prerender = false;

interface VisaRequest {
  passportCountry: string;
  destinationCountry: string;
  purpose: string;
  visaType?: string;
  travelDate?: string;
  duration?: number;
  residenceCountry?: string;
}

// All available Gemini keys (AQ.Ab format — use x-goog-api-key header)
function getGeminiKeys(): string[] {
  const keys: string[] = [];

  // 1. Explicit named candidates (including exact production name from dashboard)
  const explicit = [
    process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    process.env.GEMINI_API_KEY,
    process.env.PUBLIC_GEMINI_API_KEY,
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY_4,
    process.env.GEMINI_API_KEY_5,
    process.env.GEMINI_API_KEY_6,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_1,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_2,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_3,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_4,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_5,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_6,
    // Try import.meta.env (Vite/Astro inlined vars)
    (import.meta as any).env?.NEXT_PUBLIC_GEMINI_API_KEY,
    (import.meta as any).env?.GEMINI_API_KEY,
    (import.meta as any).env?.PUBLIC_GEMINI_API_KEY,
    (import.meta as any).env?.NEXT_PUBLIC_GEMINI_API_KEY_1,
    (import.meta as any).env?.NEXT_PUBLIC_GEMINI_API_KEY_2,
    (import.meta as any).env?.NEXT_PUBLIC_GEMINI_API_KEY_3,
    (import.meta as any).env?.NEXT_PUBLIC_GEMINI_API_KEY_4,
    (import.meta as any).env?.NEXT_PUBLIC_GEMINI_API_KEY_5,
    (import.meta as any).env?.NEXT_PUBLIC_GEMINI_API_KEY_6,
  ];

  for (const k of explicit) {
    if (k && typeof k === 'string' && k.trim().length > 10 && !keys.includes(k.trim())) {
      keys.push(k.trim());
    }
  }

  // 2. Dynamic scan of all process.env variables matching GEMINI
  if (typeof process !== 'undefined' && process.env) {
    for (const [k, v] of Object.entries(process.env)) {
      if (k.toUpperCase().includes('GEMINI') && typeof v === 'string' && v.trim().length > 10) {
        if (!keys.includes(v.trim())) keys.push(v.trim());
      }
    }
  }

  return keys;
}

// In-memory 24-hour cache
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

// Rate limiting: 10 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) return false;
  record.count++;
  return true;
}

// Call Gemini: attempts Google Search Grounding first, falls back to direct Gemini generation if search quota is exhausted
async function callGeminiWithGrounding(prompt: string, apiKey: string): Promise<any> {
  const model = 'gemini-3.6-flash';
  
  // 1. Attempt with Google Search Grounding (camelCase googleSearch is the official built-in grounding tool)
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          tools: [{ googleSearch: {} }],
          generationConfig: { temperature: 0.1 },
        }),
        signal: AbortSignal.timeout(10000),
      }
    );

    const data = await response.json() as any;
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!data.error && text && text.trim().length > 0) {
      return data;
    }
  } catch (err: any) {
    // Continue to direct generation
  }

  // 2. Direct Gemini 3.6 Flash generation (without tools so no function call ambiguity)
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1 },
        }),
        signal: AbortSignal.timeout(25000),
      }
    );

    const data = await response.json() as any;
    if (data.error) {
      throw new Error(`Gemini error ${data.error.code}: ${data.error.message}`);
    }
    return data;
  } catch (err: any) {
    if (err.name === 'TimeoutError') throw new Error('Gemini request timed out');
    throw err;
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const startTime = Date.now();
  
  try {
    const ip = clientAddress || request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Rate limit exceeded. Max 10 requests/minute.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const keys = getGeminiKeys();
    if (keys.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'No Gemini API keys configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const input: VisaRequest = await request.json();
    if (!input.passportCountry || !input.destinationCountry || !input.purpose) {
      return new Response(
        JSON.stringify({ success: false, error: 'passportCountry, destinationCountry, purpose are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Cache check
    const cacheKey = `${input.passportCountry}|${input.destinationCountry}|${input.purpose}|${input.visaType || ''}|${input.travelDate || ''}`.toLowerCase();
    const cached = cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
      return new Response(
        JSON.stringify({ ...cached.data, cached: true }),
        { status: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } }
      );
    }

    const today = new Date().toISOString();
    const prompt = `You are TravlTik's live visa-requirements verification engine.

CURRENT DATE/TIME: ${today}

USER INPUT:
Passport country: ${input.passportCountry}
Destination country: ${input.destinationCountry}
Purpose of travel: ${input.purpose}
Visa type: ${input.visaType || 'Determine applicable visa type'}
Travel date: ${input.travelDate || 'Not provided'}
Duration: ${input.duration || 'Not provided'} days
Country of residence: ${input.residenceCountry || input.passportCountry}

Provide the CURRENT official visa and entry requirements based on official government and embassy regulations. Use only official sources: embassy, immigration authority, VFS/BLS/TLS/CVASC.

DOCUMENT CONDITIONS RULES:
- For EACH document, research and provide ALL the specific conditions/validity requirements from official sources.
- Do NOT force a fixed number of conditions. Provide as many as actually exist.
- If a document has 2 conditions, provide 2. If it has 4, provide 4. If it has 5, provide 5. If it has only 1 condition, provide 1.
- Do NOT use generic descriptions. Each condition must be SPECIFIC to this country and document.
- Research the ACTUAL requirements from official embassy/government sources.
- Each condition should be a SEPARATE, DISTINCT requirement.
- Conditions should cover different aspects: validity, format, content, quantity, certification, etc.
- Do NOT invent conditions that don't exist in official sources.

GENERAL CRITICAL RULES:
1. Return ONLY valid JSON in the EXACT nested format below. Do NOT use flat structure. Use nested objects as shown.
2. Processing time must use "working days" format, NOT "calendar days".
3. Steps array must contain: step (number), title, description.
4. Sources array must contain: name, url, lastVerified.

REQUIRED FORMAT:
{
  "country": "${input.destinationCountry.toLowerCase()}",
  "fromCountry": "${input.passportCountry}",
  "visaCategory": "${input.purpose.charAt(0).toUpperCase() + input.purpose.slice(1)} Visa",
  "authority": "",
  "channels": [""],
  "processingTime": {
    "eVisa": "",
    "standardSticker": "",
    "expressSticker": ""
  },
  "fees": {
    "eVisaTotal": "",
    "stickerConsularStandard": "",
    "vfsServiceFee": ""
  },
  "eVisa": {
    "available": true,
    "portal": "",
    "territorialScope": "",
    "validity": "",
    "maxStay": "",
    "invitationRequired": false,
    "processing": ""
  },
  "stayDuration": {
    "eVisa": "",
    "stickerSingleDouble": "",
    "stickerMultiple": ""
  },
  "entryType": "",
  "documents": [
    {
      "key": "passport",
      "title": "Valid Passport",
      "icon": "📘",
      "mandatory": true,
      "conditions": [
        "Condition 1 (specific to this country)",
        "Condition 2 (specific to this country)"
      ],
      "sourceName": "Official Authority Name",
      "sourceUrl": "https://official-source-url",
      "lastVerified": "${today}"
    }
  ],
  "steps": [
    {
      "step": 1,
      "title": "",
      "description": ""
    }
  ],
  "specialRequirements": {
    "entry_rules": ""
  },
  "sources": [
    {
      "name": "",
      "url": "",
      "lastVerified": "${today}"
    }
  ],
  "confidence": "high"
}`;

    // Try each key with rotation
    let lastError: Error | null = null;
    for (const apiKey of keys) {
      try {
        const geminiResponse = await callGeminiWithGrounding(prompt, apiKey);
        
        const text = geminiResponse.candidates?.[0]?.content?.parts?.[0]?.text || '';
        console.log('[LiveVisa] Gemini raw text length:', text.length, 'candidate:', JSON.stringify(geminiResponse.candidates?.[0]));
        let cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
        const firstBrace = cleaned.indexOf('{');
        const lastBrace = cleaned.lastIndexOf('}');
        if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
          console.warn('[LiveVisa] No braces found in text:', text.slice(0, 200));
          throw new Error('Gemini returned no valid JSON');
        }
        const jsonStr = cleaned.slice(firstBrace, lastBrace + 1);
        const result = JSON.parse(jsonStr);

        // Rule #6: Enforce working days replacement
        if (result.processingTime) {
          if (result.processingTime.eVisa && typeof result.processingTime.eVisa === 'string') {
            result.processingTime.eVisa = result.processingTime.eVisa.replace(/calendar days/gi, 'working days');
          }
          if (result.processingTime.standardSticker && typeof result.processingTime.standardSticker === 'string') {
            result.processingTime.standardSticker = result.processingTime.standardSticker.replace(/calendar days/gi, 'working days');
          }
          if (result.processingTime.expressSticker && typeof result.processingTime.expressSticker === 'string') {
            result.processingTime.expressSticker = result.processingTime.expressSticker.replace(/calendar days/gi, 'working days');
          }
        }
        if (result.eVisa?.processing && typeof result.eVisa.processing === 'string') {
          result.eVisa.processing = result.eVisa.processing.replace(/calendar days/gi, 'working days');
        }

        const sources = geminiResponse.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        const groundingSources = sources.slice(0, 10).map((s: any) => ({
          name: s.web?.title || 'Official Source',
          url: s.web?.uri || '',
          lastVerified: today
        })).filter((s: any) => s.url);

        const payload = {
          success: true,
          checkedAt: today,
          ...result,
          sources: (result.sources && result.sources.length > 0) ? result.sources : groundingSources,
          groundingSources,
          responseTimeMs: Date.now() - startTime,
        };

        cache.set(cacheKey, { data: payload, timestamp: Date.now() });

        console.log(`[LiveVisa] ${input.passportCountry}→${input.destinationCountry} (${input.purpose}) in ${Date.now() - startTime}ms, sources: ${groundingSources.length}`);

        return new Response(
          JSON.stringify(payload),
          { status: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store, max-age=0' } }
        );
      } catch (err: any) {
        lastError = err;
        console.warn(`[LiveVisa] Key ${apiKey.slice(0, 10)}... failed: ${err.message}`);
        continue;
      }
    }

    throw lastError || new Error('All API keys failed');

  } catch (error: any) {
    console.error('[LiveVisa] Error:', error.message);
    return new Response(
      JSON.stringify({ success: false, error: 'Unable to retrieve live visa requirements', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
