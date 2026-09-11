import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
let groqKey = '';
for (const line of env.split('\n')) {
  const t = line.trim();
  if (t.startsWith('GROQ_API_KEY=')) groqKey = t.slice('GROQ_API_KEY='.length).replace(/^['"]|['"]$/g, '');
}

async function test20b() {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai/gpt-oss-20b',
      messages: [
        { role: 'system', content: 'You are a TypeScript code generator. Return ONLY raw TypeScript code starting with "export default {".' },
        { role: 'user', content: 'Generate visa data for India to Nepal student visa.' }
      ],
      max_tokens: 1500
    })
  });
  if (res.ok) {
    const d: any = await res.json();
    console.log('✅ 20b SUCCESS, Length:', d.choices?.[0]?.message?.content?.length);
    console.log('First 200 chars:\n', d.choices?.[0]?.message?.content?.slice(0, 200));
  } else {
    console.log('❌ 20b error:', res.status, await res.text());
  }
}
test20b();
