// src/lib/visa/orizn-cache.ts
// Two-level cache:
//   Level 1: In-memory Map (1hr TTL) — fastest
//   Level 2: File cache at src/data/orizn-cache/{key}.json (24hr TTL)
// Cache key: {from}-{to}-{purpose}-{lang} (lowercased, slugified)

import fs from 'fs';
import path from 'path';
import type { StructuredVisaRequirements } from '../../pages/api/visa/ai-requirements';

const MEMORY_TTL_MS = 60 * 60 * 1000;         // 1 hour
const FILE_TTL_HOURS = parseInt(process.env.ORIZN_CACHE_TTL_HOURS || '24', 10);
const CACHE_DIR = path.resolve(process.cwd(), 'src/data/orizn-cache');

interface MemoryCacheEntry {
  data: StructuredVisaRequirements;
  expires_at: number;
}

interface FileCacheEntry {
  fetched_at: string;
  ttl_hours: number;
  from: string;
  to: string;
  purpose: string;
  data: StructuredVisaRequirements;
}

const memoryCache = new Map<string, MemoryCacheEntry>();

export function buildCacheKey(from: string, to: string, purpose: string, lang = 'en'): string {
  const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '_');
  return `${slug(from)}-${slug(to)}-${slug(purpose)}-${lang}`;
}

// ── Level 1: Memory ──────────────────────────────────────────────────────────
export function getFromMemory(key: string): StructuredVisaRequirements | null {
  const entry = memoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires_at) {
    memoryCache.delete(key);
    return null;
  }
  return entry.data;
}

export function saveToMemory(key: string, data: StructuredVisaRequirements): void {
  memoryCache.set(key, { data, expires_at: Date.now() + MEMORY_TTL_MS });
}

// ── Level 2: File ────────────────────────────────────────────────────────────
function ensureCacheDir(): void {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }
  } catch (err) {
    console.warn('[ORIZN Cache] Cannot create cache dir:', err);
  }
}

function filePath(key: string): string {
  // Sanitize key for filesystem
  const safe = key.replace(/[^a-z0-9_\-]/gi, '_').slice(0, 200);
  return path.join(CACHE_DIR, `${safe}.json`);
}

export function getFromFile(key: string): StructuredVisaRequirements | null {
  try {
    const fp = filePath(key);
    if (!fs.existsSync(fp)) return null;
    const raw = fs.readFileSync(fp, 'utf8');
    const entry: FileCacheEntry = JSON.parse(raw);
    const fetchedAt = new Date(entry.fetched_at).getTime();
    const ageHours = (Date.now() - fetchedAt) / (1000 * 60 * 60);
    if (ageHours > entry.ttl_hours) {
      fs.unlinkSync(fp); // Remove stale file
      return null;
    }
    return entry.data;
  } catch (err) {
    console.warn('[ORIZN Cache] File read error:', err);
    return null;
  }
}

export function saveToFile(
  key: string,
  data: StructuredVisaRequirements,
  from: string,
  to: string,
  purpose: string
): void {
  try {
    ensureCacheDir();
    const entry: FileCacheEntry = {
      fetched_at: new Date().toISOString(),
      ttl_hours: FILE_TTL_HOURS,
      from,
      to,
      purpose,
      data,
    };
    fs.writeFileSync(filePath(key), JSON.stringify(entry, null, 2), 'utf8');
  } catch (err) {
    console.warn('[ORIZN Cache] File write error (non-fatal):', err);
  }
}

export function invalidateCache(key: string): void {
  memoryCache.delete(key);
  try {
    const fp = filePath(key);
    if (fs.existsSync(fp)) fs.unlinkSync(fp);
  } catch {}
}
