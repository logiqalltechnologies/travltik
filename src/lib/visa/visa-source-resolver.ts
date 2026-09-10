// src/lib/visa/visa-source-resolver.ts
// Primary Orizn data source resolver.
// Flow: memory cache → file cache → Orizn API → map → cache both levels → return
// Returns null if Orizn fails (frontend will show "unavailable")

import type { StructuredVisaRequirements } from '../../pages/api/visa/ai-requirements';
import { fetchVisaFromOrizn, recordCacheHit, recordCacheMiss } from './orizn-client';
import { mapOrignToStructured } from './orizn-mapper';
import {
  buildCacheKey,
  getFromMemory,
  getFromFile,
  saveToMemory,
  saveToFile,
} from './orizn-cache';

export async function resolveVisaData(
  fromCountry: string,
  toCountry: string,
  purpose: string,
  lang = 'en'
): Promise<StructuredVisaRequirements | null> {
  const key = buildCacheKey(fromCountry, toCountry, purpose, lang);

  // Level 1: Memory cache (fastest)
  const memHit = getFromMemory(key);
  if (memHit) {
    recordCacheHit();
    console.log(`[ORIZN Resolver] Memory cache HIT: ${fromCountry}-${toCountry}-${purpose}`);
    return memHit;
  }

  // Level 2: File cache
  const fileHit = getFromFile(key);
  if (fileHit) {
    recordCacheHit();
    saveToMemory(key, fileHit); // Warm memory from file
    console.log(`[ORIZN Resolver] File cache HIT: ${fromCountry}-${toCountry}-${purpose}`);
    return fileHit;
  }

  recordCacheMiss();

  // Level 3: Fetch from Orizn API
  console.log(`[ORIZN Resolver] Cache MISS — fetching from Orizn: ${fromCountry}-${toCountry}-${purpose}`);
  const raw = await fetchVisaFromOrizn(fromCountry, toCountry, lang);

  if (!raw) {
    console.warn(`[ORIZN Resolver] Orizn returned null for ${fromCountry}-${toCountry}-${purpose}`);
    return null;
  }

  // Map to StructuredVisaRequirements
  let mapped: StructuredVisaRequirements;
  try {
    mapped = mapOrignToStructured(raw, fromCountry, toCountry, purpose);
  } catch (mapErr) {
    console.error(`[ORIZN Resolver] Mapper error for ${fromCountry}-${toCountry}:`, mapErr);
    return null;
  }

  // Persist to both cache levels (non-blocking for file)
  saveToMemory(key, mapped);
  try {
    saveToFile(key, mapped, fromCountry, toCountry, purpose);
  } catch (cacheErr) {
    console.warn('[ORIZN Resolver] File cache save failed (non-fatal):', cacheErr);
  }

  console.log(`[ORIZN Resolver] Resolved and cached: ${fromCountry}-${toCountry}-${purpose}`);
  return mapped;
}
