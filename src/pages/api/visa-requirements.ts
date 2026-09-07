import type { APIRoute } from 'astro';
import { POST as aiPost } from './visa/ai-requirements';

export const prerender = false;

export const ALL: APIRoute = async (context) => {
  if (context.request.method === 'POST') {
    return aiPost(context);
  }
  return new Response(JSON.stringify({ success: true, message: 'Visa requirements endpoint ready' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST = ALL;
export const GET = ALL;
