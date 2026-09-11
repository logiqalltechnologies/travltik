import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const env = fs.readFileSync('.env', 'utf-8');
const keys: string[] = [];
env.split('\n').forEach(line => {
  const m = line.match(/GEMINI.*?=\s*(.+)/);
  if (m) {
    const k = m[1].trim().replace(/^['"]|['"]$/g, '');
    if (k && !keys.includes(k)) keys.push(k);
  }
});

console.log('Unique Gemini Keys in .env:', keys.length);

async function test() {
  for (let i = 0; i < keys.length; i++) {
    const ai = new GoogleGenAI({ apiKey: keys[i] });
    try {
      const res = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: 'hi'
      });
      console.log(`Key #${i + 1}: ACTIVE & WORKING (${res.text?.trim()})`);
    } catch (e: any) {
      const msg = e.message || '';
      if (msg.includes('RESOURCE_EXHAUSTED') || msg.includes('429')) {
        console.log(`Key #${i + 1}: EXHAUSTED (429 Daily Limit Hit)`);
      } else {
        console.log(`Key #${i + 1}: ERROR (${msg.slice(0, 70)})`);
      }
    }
  }
}
test();
