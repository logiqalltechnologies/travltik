import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const env = fs.readFileSync('.env', 'utf-8');
const keys: string[] = [];
env.split('\n').forEach(l => {
  const m = l.match(/GEMINI.*?=\s*(.+)/);
  if (m) {
    const k = m[1].trim().replace(/^['"]|['"]$/g, '');
    if (k && !keys.includes(k)) keys.push(k);
  }
});

const ai = new GoogleGenAI({ apiKey: keys[0] });

async function test() {
  console.log(`Testing all ${keys.length} keys for Phase 2 readiness:`);
  for (let i = 0; i < keys.length; i++) {
    const aiInstance = new GoogleGenAI({ apiKey: keys[i] });
    for (const m of ['gemini-2.5-flash', 'gemini-3.5-flash']) {
      try {
        const res = await aiInstance.models.generateContent({ model: m, contents: 'ping' });
        console.log(`Key ${i + 1} (${m}): ✅ WORKING -> ${res.text?.trim().slice(0, 15)}`);
      } catch (e: any) {
        console.log(`Key ${i + 1} (${m}): ❌ ${e.message?.slice(0, 150)}`);
      }
    }
  }
}
test();
