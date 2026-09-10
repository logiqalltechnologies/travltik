// src/pages/api/visa/health.ts
// GET /api/visa/health — Orizn integration health check

export const prerender = false;

import type { APIRoute } from 'astro';
import { getOrignMetrics } from '../../../lib/visa/orizn-client';

export const GET: APIRoute = async () => {
  try {
    const metrics = getOrignMetrics();
    const isEnabled = process.env.ORIZN_ENABLED !== 'false';
    const hasKey = Boolean(process.env.ORIZN_API_KEY);

    const status = isEnabled && hasKey ? 'operational' : 'disabled';

    return new Response(JSON.stringify({
      orizn_status: status,
      orizn_enabled: isEnabled,
      api_key_configured: hasKey,
      quota_remaining: metrics.quota_remaining,
      cache_hits: metrics.cache_hits,
      cache_misses: metrics.cache_misses,
      last_error: metrics.last_error,
      timestamp: new Date().toISOString(),
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({
      orizn_status: 'error',
      message: err?.message || 'Unknown error',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
