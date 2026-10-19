// src/pages/api/whatsapp/connect.ts
import type { APIRoute } from 'astro';
import { getPool } from '../../../backend/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { company_id } = body;

    if (!company_id) {
      return new Response(JSON.stringify({ error: "company_id required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const evolutionUrl = process.env.EVOLUTION_API_URL;
    const evolutionKey = process.env.EVOLUTION_API_KEY;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.PUBLIC_APP_URL || "https://www.travltik.com";
    const webhookHost = process.env.WEBHOOK_APP_URL || appUrl;

    if (!evolutionUrl || !evolutionKey) {
      // Mock response for testing if Evolution API is not yet provisioned
      const mockInstance = `co_${String(company_id).replace(/[^a-zA-Z0-9]/g, "").slice(0, 12)}`;
      return new Response(JSON.stringify({
        instance: mockInstance,
        qrcode: {
          base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        },
        notice: "Configure EVOLUTION_API_URL and EVOLUTION_API_KEY for live QR code"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const instance = `co_${String(company_id).replace(/[^a-zA-Z0-9]/g, "").slice(0, 12)}`;

    // Create Evolution API instance
    const createRes = await fetch(`${evolutionUrl}/instance/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: evolutionKey
      },
      body: JSON.stringify({
        instanceName: instance,
        qrcode: true,
        integration: "WHATSAPP-BAILEYS"
      })
    });
    const createData = await createRes.json().catch(() => null);

    // Set webhook
    await fetch(`${evolutionUrl}/webhook/set/${instance}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: evolutionKey
      },
      body: JSON.stringify({
        webhook: {
          enabled: true,
          url: `${webhookHost}/api/whatsapp/webhook`,
          byEvents: false,
          events: ["MESSAGES_UPSERT", "CONNECTION_UPDATE"]
        }
      })
    });

    // Fetch initial QR Code
    const qrRes = await fetch(`${evolutionUrl}/instance/connect/${instance}`, {
      method: "GET",
      headers: { apikey: evolutionKey }
    });
    const qrData = await qrRes.json().catch(() => null);

    // Sync to Neon DB
    try {
      const pool = getPool();
      await pool.query(
        `INSERT INTO whatsapp_companies (id, name, whatsapp_session_id, status)
         VALUES ($1, $2, $3, 'connecting')
         ON CONFLICT (id) DO UPDATE SET whatsapp_session_id = $3, status = 'connecting', updated_at = NOW()`,
        [String(company_id), `Consultant_${instance}`, instance]
      );
    } catch (e) {
      console.warn('[WhatsApp Connect DB sync notice]:', e);
    }

    return new Response(JSON.stringify({
      instance,
      qrcode: qrData?.qrcode || createData?.qrcode || null
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Failed to initiate WhatsApp connection" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
