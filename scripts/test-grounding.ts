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

async function run() {
  for (let i = 0; i < keys.length; i++) {
    const ai = new GoogleGenAI({ apiKey: keys[i] });
    console.log(`Testing Key #${i + 1}...`);
    // Test WITH search
    try {
      await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: 'What is the capital of France?',
        config: { tools: [{ googleSearch: {} }] }
      });
      console.log(`  Key #${i + 1} WITH SEARCH: SUCCESS`);
    } catch (e: any) {
      console.log(`  Key #${i + 1} WITH SEARCH FAILED:`, (e.message || '').slice(0, 100));
    }
    // Test WITHOUT search
    try {
      const res = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: 'What is the capital of France?'
      });
      console.log(`  Key #${i + 1} WITHOUT SEARCH: SUCCESS (${res.text?.trim()?.slice(0, 30)})`);
    } catch (e: any) {
      console.log(`  Key #${i + 1} WITHOUT SEARCH FAILED:`, (e.message || '').slice(0, 100));
    }
  }
}
run();
