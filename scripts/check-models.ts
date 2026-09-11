import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
let groqKey = '', cerebrasKey = '', sambaKey = '';
for (const line of env.split('\n')) {
  const t = line.trim();
  if (t.startsWith('GROQ_API_KEY=')) groqKey = t.slice('GROQ_API_KEY='.length).replace(/^['"]|['"]$/g, '');
  if (t.startsWith('CEREBRAS_API_KEY=')) cerebrasKey = t.slice('CEREBRAS_API_KEY='.length).replace(/^['"]|['"]$/g, '');
  if (t.startsWith('SAMBANOVA_API_KEY=')) sambaKey = t.slice('SAMBANOVA_API_KEY='.length).replace(/^['"]|['"]$/g, '');
}

async function testProvider(name: string, url: string, model: string, key: string) {
  try {
    const res = await fetch(`${url}/chat/completions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, messages: [{ role: 'user', content: 'Say hello in 3 words' }], max_tokens: 20 })
    });
    if (!res.ok) console.log(`${name} failed:`, res.status, (await res.text()).slice(0, 100));
    else {
      const d: any = await res.json();
      console.log(`${name} SUCCESS:`, d.choices?.[0]?.message?.content?.trim());
    }
  } catch (e: any) { console.log(`${name} error:`, e.message); }
}

async function run() {
  await testProvider('Groq (openai/gpt-oss-120b)', 'https://api.groq.com/openai/v1', 'openai/gpt-oss-120b', groqKey);
  await testProvider('Cerebras (gpt-oss-120b)', 'https://api.cerebras.ai/v1', 'gpt-oss-120b', cerebrasKey);
  await testProvider('SambaNova (Meta-Llama-3.3-70B-Instruct)', 'https://api.sambanova.ai/v1', 'Meta-Llama-3.3-70B-Instruct', sambaKey);
}
run();
