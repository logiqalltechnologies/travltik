// src/backend/redis.ts
// Standalone Redis Client for Caching Tier (Step 22)
// Not linked to active search data queries per safe migration policy.
import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedis(): Redis | null {
  const redisUrl = process.env.UPSTASH_REDIS_URL || process.env.REDIS_URL;
  if (!redisUrl) return null;
  if (!redis) {
    redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });
    redis.on('error', (err) => {
      console.warn('[Redis Cache Silent Error]:', err.message);
    });
  }
  return redis;
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  const client = getRedis();
  if (!client) return null;
  try {
    const value = await client.get(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null; // Silent fail — DB query fallback
  }
}

export async function cacheSet(key: string, value: any, ttlSeconds = 300): Promise<void> {
  const client = getRedis();
  if (!client) return;
  try {
    await client.setex(key, ttlSeconds, JSON.stringify(value));
  } catch {
    // Silent fail
  }
}
