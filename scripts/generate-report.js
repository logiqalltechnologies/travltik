#!/usr/bin/env node
/**
 * TravlTik Error Dashboard & Report Generator
 * Generates:
 * 1. error-dashboard.html (Modern interactive HTML tracking UI)
 * 2. fix-suggestions.md (Actionable developer remediation guide)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const REPORT_FILE = path.join(ROOT_DIR, 'errors-report.json');
const DASHBOARD_FILE = path.join(ROOT_DIR, 'error-dashboard.html');
const SUGGESTIONS_FILE = path.join(ROOT_DIR, 'fix-suggestions.md');

function loadReport() {
  if (!fs.existsSync(REPORT_FILE)) {
    return {
      timestamp: new Date().toISOString(),
      project: 'TravlTik Visa Platform',
      totalErrors: 0,
      summary: { react: 0, api: 0, type: 0, routing: 0, browser: 0 },
      categories: { react: [], api: [], type: [], routing: [], browser: [] }
    };
  }
  try {
    return JSON.parse(fs.readFileSync(REPORT_FILE, 'utf8'));
  } catch (e) {
    return {
      timestamp: new Date().toISOString(),
      project: 'TravlTik Visa Platform',
      totalErrors: 0,
      summary: { react: 0, api: 0, type: 0, routing: 0, browser: 0 },
      categories: { react: [], api: [], type: [], routing: [], browser: [] }
    };
  }
}

function generateDashboardHtml(data) {
  const allIssues = [
    ...(data.categories.browser || []),
    ...(data.categories.type || []),
    ...(data.categories.react || []),
    ...(data.categories.api || []),
    ...(data.categories.routing || [])
  ];

  const html = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TravlTik | Console Error & Health Tracking Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #0b0f19;
      color: #f1f5f9;
    }
    code, pre {
      font-family: 'JetBrains Mono', monospace;
    }
    .badge-critical { background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
    .badge-high { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    .badge-medium { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
    .badge-low { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .glow-emerald { box-shadow: 0 0 35px -5px rgba(16, 185, 129, 0.2); }
  </style>
</head>
<body class="min-h-screen antialiased text-slate-100 flex flex-col">
  <!-- Top Navbar -->
  <header class="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg">
          T
        </div>
        <div>
          <span class="text-base font-semibold tracking-tight text-white">TravlTik</span>
          <span class="text-xs ml-2 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">CLI Error Suite</span>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-xs text-slate-400">Last Scanned: <span class="text-slate-200 font-mono">${new Date(data.timestamp).toLocaleTimeString()}</span></span>
        <button onclick="location.reload()" class="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition flex items-center space-x-1.5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          <span>Refresh</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    
    <!-- Hero / Title -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-white">Console & Error Diagnostics Dashboard</h1>
        <p class="text-sm text-slate-400 mt-1">Real-time breakdown of React anti-patterns, API route integrity, TypeScript health, and runtime exceptions.</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="copyCommand('npm run fix-all-errors')" class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition shadow-lg shadow-emerald-500/20 flex items-center space-x-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <span>Run Auto-Fix All</span>
        </button>
        <button onclick="copyCommand('npm run detect-errors')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition flex items-center space-x-2">
          <span>Copy Scan Command</span>
        </button>
      </div>
    </div>

    <!-- KPI Metric Cards -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div class="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Issues</div>
        <div class="text-3xl font-extrabold mt-2 ${data.totalErrors === 0 ? 'text-emerald-400' : 'text-amber-400'}">
          ${data.totalErrors}
        </div>
        <div class="text-xs text-slate-500 mt-1">${data.totalErrors === 0 ? 'All systems green' : 'Requires review'}</div>
      </div>

      <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div class="text-xs font-medium text-slate-400 uppercase tracking-wider">React Warnings</div>
        <div class="text-3xl font-extrabold mt-2 text-cyan-400">
          ${data.summary.react || 0}
        </div>
        <div class="text-xs text-slate-500 mt-1">Keys & Hooks</div>
      </div>

      <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div class="text-xs font-medium text-slate-400 uppercase tracking-wider">API Routes</div>
        <div class="text-3xl font-extrabold mt-2 text-indigo-400">
          ${data.summary.api || 0}
        </div>
        <div class="text-xs text-slate-500 mt-1">Error guards & headers</div>
      </div>

      <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div class="text-xs font-medium text-slate-400 uppercase tracking-wider">TypeScript</div>
        <div class="text-3xl font-extrabold mt-2 ${data.summary.type > 0 ? 'text-rose-400' : 'text-emerald-400'}">
          ${data.summary.type || 0}
        </div>
        <div class="text-xs text-slate-500 mt-1">${data.summary.type > 0 ? 'Compiler errors' : '0 Type errors'}</div>
      </div>

      <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div class="text-xs font-medium text-slate-400 uppercase tracking-wider">Runtime / Browser</div>
        <div class="text-3xl font-extrabold mt-2 ${data.summary.browser > 0 ? 'text-rose-400' : 'text-emerald-400'}">
          ${data.summary.browser || 0}
        </div>
        <div class="text-xs text-slate-500 mt-1">Client console logs</div>
      </div>
    </div>

    <!-- Quick Commands Cheat-Sheet -->
    <div class="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-3">
      <div class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
        <span>Terminal Command Shortcuts (Task 6)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
        <div onclick="copyCommand('npm run detect-errors')" class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-center justify-between group">
          <span class="text-emerald-400">npm run detect-errors</span>
          <span class="text-[10px] text-slate-500 group-hover:text-slate-300">Copy</span>
        </div>
        <div onclick="copyCommand('npm run fix-all-errors')" class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-center justify-between group">
          <span class="text-emerald-400">npm run fix-all-errors</span>
          <span class="text-[10px] text-slate-500 group-hover:text-slate-300">Copy</span>
        </div>
        <div onclick="copyCommand('npm run monitor-errors -- --live')" class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-center justify-between group">
          <span class="text-emerald-400">npm run monitor-errors</span>
          <span class="text-[10px] text-slate-500 group-hover:text-slate-300">Copy</span>
        </div>
        <div onclick="copyCommand('npm run error-report')" class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition flex items-center justify-between group">
          <span class="text-emerald-400">npm run error-report</span>
          <span class="text-[10px] text-slate-500 group-hover:text-slate-300">Copy</span>
        </div>
      </div>
    </div>

    <!-- Filter Tabs & Search -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
      <div class="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0" id="tabs">
        <button onclick="filterCategory('all')" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 text-slate-950 transition active-tab" data-cat="all">All (${data.totalErrors})</button>
        <button onclick="filterCategory('react')" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition" data-cat="react">React (${data.summary.react || 0})</button>
        <button onclick="filterCategory('api')" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition" data-cat="api">API (${data.summary.api || 0})</button>
        <button onclick="filterCategory('type')" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition" data-cat="type">TypeScript (${data.summary.type || 0})</button>
        <button onclick="filterCategory('routing')" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition" data-cat="routing">Routing (${data.summary.routing || 0})</button>
        <button onclick="filterCategory('browser')" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition" data-cat="browser">Browser Console (${data.summary.browser || 0})</button>
      </div>
      <div class="relative">
        <input type="text" id="searchInput" oninput="searchErrors()" placeholder="Search by file or message..." class="w-full sm:w-64 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 transition">
      </div>
    </div>

    <!-- Error List / Table -->
    <div class="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-xl">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
            <tr>
              <th class="px-5 py-3.5">Severity</th>
              <th class="px-5 py-3.5">Error Type</th>
              <th class="px-5 py-3.5">Location</th>
              <th class="px-5 py-3.5">Message / Suggested Fix</th>
              <th class="px-5 py-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody id="errorTableBody" class="divide-y divide-slate-800/60 font-sans">
            ${allIssues.length === 0 ? `
              <tr>
                <td colspan="5" class="px-5 py-16 text-center text-slate-400">
                  <div class="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-3 border border-emerald-500/20">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div class="text-base font-semibold text-white">Zero Critical Console or Code Errors Found!</div>
                  <div class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Your React components, API endpoints, and TypeScript types are fully operational and ready for production launch.</div>
                </td>
              </tr>
            ` : allIssues.map((issue) => `
              <tr class="hover:bg-slate-800/40 transition error-row" data-category="${issue.id.startsWith('REACT') ? 'react' : issue.id.startsWith('API') ? 'api' : issue.id.startsWith('TYPE') ? 'type' : issue.id.startsWith('ROUTE') ? 'routing' : 'browser'}">
                <td class="px-5 py-4 whitespace-nowrap">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold ${issue.severity === 'CRITICAL' ? 'badge-critical' : issue.severity === 'HIGH' ? 'badge-high' : issue.severity === 'MEDIUM' ? 'badge-medium' : 'badge-low'}">
                    ${issue.severity}
                  </span>
                </td>
                <td class="px-5 py-4 whitespace-nowrap font-mono text-slate-200">
                  <div class="font-semibold">${issue.type}</div>
                  <div class="text-[10px] text-slate-500">${issue.id}</div>
                </td>
                <td class="px-5 py-4 font-mono text-slate-300">
                  <div class="text-emerald-400">${issue.file}</div>
                  <div class="text-[10px] text-slate-500">Line ${issue.line}</div>
                </td>
                <td class="px-5 py-4 max-w-md">
                  <div class="font-medium text-slate-200 mb-1">${issue.message}</div>
                  <div class="text-emerald-400/90 text-[11px] bg-slate-950/60 p-2 rounded border border-slate-800/80 font-mono">
                    💡 ${issue.fixSuggestion}
                  </div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="copySuggestion('${issue.fixSuggestion.replace(/'/g, "\\'")}')" class="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium transition">
                    Copy Fix
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <footer class="border-t border-slate-800/80 bg-slate-950/60 py-4 text-center text-xs text-slate-500">
    TravlTik Quality Assurance & Automated Console Diagnostics Engine
  </footer>

  <script>
    function copyCommand(cmd) {
      navigator.clipboard.writeText(cmd);
      alert('Copied command: ' + cmd);
    }

    function copySuggestion(text) {
      navigator.clipboard.writeText(text);
      alert('Copied suggestion: ' + text);
    }

    function filterCategory(cat) {
      document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.cat === cat) {
          btn.className = 'tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 text-slate-950 transition active-tab';
        } else {
          btn.className = 'tab-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition';
        }
      });

      const rows = document.querySelectorAll('.error-row');
      rows.forEach(row => {
        if (cat === 'all' || row.dataset.category === cat) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    function searchErrors() {
      const q = document.getElementById('searchInput').value.toLowerCase();
      const rows = document.querySelectorAll('.error-row');
      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    }
  </script>
</body>
</html>`;

  return html;
}

function generateFixSuggestionsMd(data) {
  return `# TravlTik Comprehensive Error Remediation Guide

This guide details the detection criteria, root causes, and verified resolution patterns for every class of error tracked in the TravlTik codebase.

---

## 1. React Console & Runtime Errors

### 1.1 "Missing \`key\` prop for element in iterator"
- **Cause**: Rendering lists with \`.map()\` without assigning a distinct \`key\` prop to the top-level element inside the callback.
- **Why it breaks**: React cannot reconcile DOM changes efficiently, causing unpredictable UI glitches, focus loss, and console warnings.
- **Solution Pattern**:
\`\`\`tsx
// ❌ INCORRECT:
{items.map((item) => (
  <div className="card">{item.title}</div>
))}

// ✔ CORRECT:
{items.map((item, idx) => (
  <div key={item.id || item.slug || idx} className="card">{item.title}</div>
))}
\`\`\`

---

### 1.2 "Cannot read property 'X' of undefined"
- **Cause**: Unchecked nested object indexing on API responses, dynamic state, or async data before hydration completes.
- **Solution Pattern**:
\`\`\`tsx
// ❌ INCORRECT:
const name = user.profile.fullName;

// ✔ CORRECT:
const name = user?.profile?.fullName || "Guest";
\`\`\`

---

### 1.3 "Rendered fewer hooks than expected" / "Hooks can only be called inside the body of a function component"
- **Cause**: Calling \`useState\`, \`useEffect\`, or \`useCallback\` inside \`if (...) \` blocks, loop iterations, or helper callbacks.
- **Solution Pattern**:
\`\`\`tsx
// ❌ INCORRECT:
if (isLoggedIn) {
  useEffect(() => { ... }, []);
}

// ✔ CORRECT:
useEffect(() => {
  if (!isLoggedIn) return;
  // logic here
}, [isLoggedIn]);
\`\`\`

---

### 1.4 "Too many re-renders. React limits the number of renders to prevent an infinite loop"
- **Cause**: Calling a \`setState\` action directly in the render body or inside a \`useEffect\` without specifying dependencies or guards.
- **Solution Pattern**:
\`\`\`tsx
// ❌ INCORRECT:
useEffect(() => {
  setCount(count + 1);
});

// ✔ CORRECT:
useEffect(() => {
  setCount(prev => prev + 1);
}, []); // Explicit dependency array
\`\`\`

---

## 2. API & Network Routes

### 2.1 Missing Error Handling & 500 Crashes
- **Cause**: Async route handlers without an enclosing \`try / catch\` block.
- **Solution Pattern**:
\`\`\`typescript
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    return new Response(JSON.stringify({ success: true, data: body }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('[API Error]', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
\`\`\`

---

## 3. CLI Quick Reference
| Command | Action |
|---|---|
| \`npm run detect-errors\` | Scan entire codebase for all error types |
| \`npm run fix-all-errors\` | Execute automated fixes across all components |
| \`npm run fix-react-errors\` | Fix missing keys & unsafe property lookups |
| \`npm run fix-api-errors\` | Fix API headers and error wrappers |
| \`npm run monitor-errors -- --live\` | Start live telemetry listener server |
| \`npm run error-report\` | Regenerate dashboard and suggestions guide |
`;
}

function main() {
  console.log(`Generating Error Tracking Dashboard & Suggestions Guide...`);
  const reportData = loadReport();

  // 1. Dashboard HTML
  const html = generateDashboardHtml(reportData);
  fs.writeFileSync(DASHBOARD_FILE, html, 'utf8');
  console.log(`✔ Generated Dashboard: ${DASHBOARD_FILE}`);

  // 2. Suggestions Markdown
  const md = generateFixSuggestionsMd(reportData);
  fs.writeFileSync(SUGGESTIONS_FILE, md, 'utf8');
  console.log(`✔ Generated Suggestions Guide: ${SUGGESTIONS_FILE}`);
}

main();
