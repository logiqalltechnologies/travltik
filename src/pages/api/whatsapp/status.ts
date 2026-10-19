// src/pages/api/whatsapp/status.ts
import type { APIRoute } from 'astro';
import { getPool, getReadPool } from '../../../backend/db';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    let instance = url.searchParams.get("instance") || "";
    const companyId = url.searchParams.get("company_id") || "";

    const pool = getReadPool();

    // If company_id is provided and instance is not, look up session from DB
    if (!instance && companyId) {
      try {
        const res = await pool.query(
          `SELECT whatsapp_session_id, status, whatsapp_number FROM whatsapp_companies WHERE id = $1`,
          [companyId]
        );
        if (res.rows.length > 0) {
          instance = res.rows[0].whatsapp_session_id || "";
        }
      } catch (e) {
        console.warn("[WhatsApp Status DB lookup error]:", e);
      }
    }

    if (!instance && companyId) {
      instance = `co_${String(companyId).replace(/[^a-zA-Z0-9]/g, "").slice(0, 12)}`;
    }

    const evolutionUrl = process.env.EVOLUTION_API_URL;
    const evolutionKey = process.env.EVOLUTION_API_KEY;

    // Fallback if Evolution API is not yet provisioned in environment
    if (!evolutionUrl || !evolutionKey) {
      let dbStatus = "connecting";
      let dbNumber = "";
      if (companyId) {
        try {
          const res = await pool.query(
            `SELECT status, whatsapp_number FROM whatsapp_companies WHERE id = $1`,
            [companyId]
          );
          if (res.rows.length > 0) {
            dbStatus = res.rows[0].status || "connecting";
            dbNumber = res.rows[0].whatsapp_number || "";
          }
        } catch {}
      }

      return new Response(JSON.stringify({
        state: dbStatus === "live" ? "open" : "connecting",
        rawState: dbStatus,
        number: dbNumber,
        qr_base64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        isDemo: true
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Call Evolution API connectionState
    const res = await fetch(
      `${evolutionUrl}/instance/connectionState/${instance}`,
      {
        method: "GET",
        headers: { apikey: evolutionKey },
        cache: "no-store",
      }
    );

    const data = await res.json().catch(() => ({}));

    let raw =
      data?.instance?.state ||
      data?.state ||
      data?.connectionState ||
      "close";

    const normalizedState = String(raw).toLowerCase();

    let state = "close";
    if (["open", "connected", "online"].includes(normalizedState)) {
      state = "open";
    } else if (["connecting", "qr", "syncing"].includes(normalizedState)) {
      state = "connecting";
    } else {
      state = "close";
    }

    let ownerJid = "";
    try {
      const listRes = await fetch(`${evolutionUrl}/instance/fetchInstances`, {
        method: "GET",
        headers: { apikey: evolutionKey },
        cache: "no-store",
      });
      const list = await listRes.json().catch(() => []);
      const inst = Array.isArray(list)
        ? list.find((i: any) => i.name === instance)
        : null;

      if (inst?.ownerJid) {
        ownerJid = inst.ownerJid;
      }
      if (inst?.connectionStatus === "open") {
        state = "open";
      }

      const phoneNumber = ownerJid ? ownerJid.split("@")[0] : "";
      if (phoneNumber || state === "open") {
        const writePool = getPool();
        await writePool.query(
          `UPDATE whatsapp_companies 
           SET status = $1, whatsapp_number = COALESCE(NULLIF($2, ''), whatsapp_number), updated_at = NOW()
           WHERE whatsapp_session_id = $3`,
          [state === "open" ? "live" : "connecting", phoneNumber, instance]
        ).catch(() => {});
      }
    } catch (e) {
      // ignore
    }

    // If still connecting, fetch latest QR base64
    let qr_base64 = "";
    if (state !== "open") {
      try {
        const qrRes = await fetch(`${evolutionUrl}/instance/connect/${instance}`, {
          method: "GET",
          headers: { apikey: evolutionKey },
          cache: "no-store",
        });
        const qrData = await qrRes.json().catch(() => null);
        const rawQr = qrData?.base64 || qrData?.qrcode?.base64 || "";
        qr_base64 = rawQr.replace(/^data:image\/png;base64,/, "");
      } catch {}
    }

    return new Response(JSON.stringify({
      state,
      rawState: raw,
      number: ownerJid.split("@")[0] || "",
      qr_base64,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ state: "unknown", number: "", qr_base64: "", error: err?.message }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};
