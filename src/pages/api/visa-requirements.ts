import type { APIRoute } from 'astro';
import { POST as aiPost } from './visa/ai-requirements';

export const prerender = false;

export const ALL: APIRoute = async (context) => {
  try {
    if (context.request.method === 'POST') {
      return await aiPost(context);
    }
    return new Response(JSON.stringify({ success: true, message: 'Visa requirements endpoint ready' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('[VisaRequirementsAPI]', err);
    return new Response(JSON.stringify({ success: false, error: err?.message || 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST = ALL;
export const GET = ALL;
