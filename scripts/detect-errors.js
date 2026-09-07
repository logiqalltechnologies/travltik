#!/usr/bin/env node
/**
 * TravlTik CLI Console & Codebase Error Detector
 * Scans for:
 * 1. React errors & anti-patterns (missing keys, unsafe property access missing ?., hook violations, useEffect loops)
 * 2. API endpoint errors & status anomalies
 * 3. TypeScript & syntax errors
 * 4. Routing & broken link errors
 * 5. Browser runtime console errors (from telemetry log / SSR probes)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const REPORT_FILE = path.join(ROOT_DIR, 'errors-report.json');
const SUMMARY_FILE = path.join(ROOT_DIR, 'errors-summary.txt');
const TELEMETRY_FILE = path.join(ROOT_DIR, 'errors-telemetry.json');

// CLI Arguments
const args = process.argv.slice(2);
const hasFlag = (flag) => args.includes(`--${flag}`) || args.includes(`-${flag}`);
const checkAll = args.length === 0 || hasFlag('all');
const checkReact = checkAll || hasFlag('react');
const checkApi = checkAll || hasFlag('api');
const checkType = checkAll || hasFlag('type');
const checkBrowser = checkAll || hasFlag('browser');
const checkRouting = checkAll || hasFlag('routing');
const autoFix = hasFlag('fix');
const genReport = hasFlag('report');
const isVerbose = hasFlag('verbose') || hasFlag('v');

// Color helpers for terminal output
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

const errors = {
  react: [],
  api: [],
  type: [],
  routing: [],
  browser: []
};

function logHeader(title) {
  console.log(`\n${colors.bold}${colors.cyan}════════════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`  ${colors.bold}${colors.white}${title}${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}════════════════════════════════════════════════════════════════════${colors.reset}`);
}

function logInfo(msg) {
  console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`);
}

function logSuccess(msg) {
  console.log(`${colors.green}✔${colors.reset} ${msg}`);
}

function logWarning(msg) {
  console.log(`${colors.yellow}⚠${colors.reset} ${msg}`);
}

function logError(msg) {
  console.log(`${colors.red}✖${colors.reset} ${msg}`);
}

// Recursively traverse directory to find target files
function getFiles(dir, extensions = ['.tsx', '.jsx', '.ts', '.js', '.astro']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.astro') {
        results = results.concat(getFiles(fullPath, extensions));
      }
    } else {
      if (extensions.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. REACT ERROR DETECTION
// ─────────────────────────────────────────────────────────────────────────────
function detectReactErrors() {
  logInfo('Scanning React components for anti-patterns and console error risks...');
  const files = [
    ...getFiles(path.join(ROOT_DIR, 'src', 'components'), ['.tsx', '.jsx']),
    ...getFiles(path.join(ROOT_DIR, 'src', 'pages'), ['.tsx', '.jsx'])
  ];

  let idCounter = 1;

  for (const filePath of files) {
    const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      // 1. Missing key prop in .map(...)
      if (/\.map\s*\(\s*(?:\([^)]*\)|[a-zA-Z0-9_$]+)\s*=>\s*(?:\(?\s*<[A-Za-z0-9_]+)/.test(line) ||
          (/\.map\s*\(/.test(line) && lines.slice(i, i + 3).join(' ').includes('<') && !lines.slice(i, i + 3).join(' ').includes('key='))) {
        const block = lines.slice(i, Math.min(i + 4, lines.length)).join(' ');
        const openingTagMatch = block.match(/<([A-Za-z0-9_]+)[^>]*>/);
        if (openingTagMatch) {
          const tagString = openingTagMatch[0];
          if (!tagString.includes('key=') && !tagString.includes('key={') && !tagString.startsWith('</') && !tagString.startsWith('<>')) {
            errors.react.push({
              id: `REACT-KEY-${String(idCounter++).padStart(3, '0')}`,
              type: 'MissingKeyProp',
              file: relPath,
              line: lineNum,
              code: line.trim(),
              snippet: block.slice(0, 120),
              severity: 'HIGH',
              message: `Missing 'key' prop in element returned by .map() iterator`,
              fixSuggestion: `Add 'key={index}' or 'key={item.id || item.slug || index}' to outermost element <${openingTagMatch[1]}>`
            });
          }
        }
      }

      // 2. Unsafe nested object lookup missing optional chaining
      if (
        !line.trim().startsWith('//') &&
        !line.trim().startsWith('*') &&
        !line.includes('import ') &&
        !line.includes('from ') &&
        !line.includes('export ')
      ) {
        const unsafeChainMatch = line.match(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\.([a-zA-Z_$][a-zA-Z0-9_$]*)\.([a-zA-Z_$][a-zA-Z0-9_$]*)\b/);
        if (unsafeChainMatch) {
          const [fullMatch, rootObj, prop1, prop2] = unsafeChainMatch;
          const ignoredRoots = ['process', 'console', 'Math', 'Object', 'Array', 'JSON', 'window', 'document', 'localStorage', 'sessionStorage', 'React', 'Astro', 'e', 'event', 'path', 'fs', 'crypto'];
          if (!ignoredRoots.includes(rootObj) && !line.includes(`${rootObj}?.${prop1}`)) {
            if (/data|user|res|partner|item|profile|response|country|metrics|destination/i.test(rootObj) || /data|items|rows|meta|profile|details/i.test(prop1)) {
              errors.react.push({
                id: `REACT-OPT-${String(idCounter++).padStart(3, '0')}`,
                type: 'UnsafePropertyAccess',
                file: relPath,
                line: lineNum,
                code: line.trim(),
                severity: 'MEDIUM',
                message: `Potential "Cannot read property '${prop2}' of undefined" on '${fullMatch}'`,
                fixSuggestion: `Use optional chaining: '${rootObj}?.${prop1}?.${prop2}' or fallback value`
              });
            }
          }
        }
      }

      // 3. Hook called conditionally
      if (/^\s*if\s*\(/.test(line)) {
        const nextLines = lines.slice(i, Math.min(i + 5, lines.length)).join(' ');
        if (/use(State|Effect|Memo|Callback|Ref|Context|Reducer)\s*\(/.test(nextLines)) {
          errors.react.push({
            id: `REACT-HOOK-${String(idCounter++).padStart(3, '0')}`,
            type: 'ConditionalHookCall',
            file: relPath,
            line: lineNum,
            code: line.trim(),
            severity: 'CRITICAL',
            message: `React Hook called conditionally inside 'if' statement (violates Rules of Hooks)`,
            fixSuggestion: `Move all hook invocations to the top level of the component before any early returns or conditional blocks`
          });
        }
      }

      // 4. useEffect missing dependency or direct setState infinite loop risk
      if (/useEffect\s*\(\s*\(\)\s*=>\s*\{/.test(line)) {
        const effectBody = lines.slice(i, Math.min(i + 15, lines.length)).join('\n');
        if (/set[A-Z][a-zA-Z0-9_$]*\s*\(/.test(effectBody) && !effectBody.includes('[]') && !effectBody.includes('}, [') && !effectBody.includes('if (')) {
          errors.react.push({
            id: `REACT-EFF-${String(idCounter++).padStart(3, '0')}`,
            type: 'PotentialInfiniteReRender',
            file: relPath,
            line: lineNum,
            code: line.trim(),
            severity: 'HIGH',
            message: `useEffect sets state without explicit dependency array or conditional guard (risk of "Too many re-renders")`,
            fixSuggestion: `Provide explicit dependency array [deps] or wrap setState inside a conditional check`
          });
        }
      }
    }
  }

  logSuccess(`React analysis complete: found ${errors.react.length} potential issue(s).`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. API ENDPOINT VALIDATION
// ─────────────────────────────────────────────────────────────────────────────
function detectApiErrors() {
  logInfo('Scanning API endpoints in src/pages/api for error handling...');
  const apiFiles = getFiles(path.join(ROOT_DIR, 'src', 'pages', 'api'), ['.ts', '.js']);
  let idCounter = 1;

  for (const filePath of apiFiles) {
    const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Missing try/catch block around handlers
    if ((content.includes('export const POST') || content.includes('export const GET') || content.includes('export const PUT') || content.includes('export const DELETE')) &&
        !content.includes('try {')) {
      errors.api.push({
        id: `API-ERR-${String(idCounter++).padStart(3, '0')}`,
        type: 'MissingErrorHandling',
        file: relPath,
        line: 1,
        code: 'API Route Export',
        severity: 'HIGH',
        message: `API Route handler lacks top-level try/catch block, risking unhandled 500 crashes`,
        fixSuggestion: `Wrap handler logic in try { ... } catch (err) { return new Response(JSON.stringify({ error: err.message }), { status: 500 }) }`
      });
    }

    // 2. Missing JSON response headers
    if (content.includes('JSON.stringify(') && !content.includes("'Content-Type': 'application/json'") && !content.includes('"Content-Type": "application/json"')) {
      errors.api.push({
        id: `API-HDR-${String(idCounter++).padStart(3, '0')}`,
        type: 'MissingContentTypeHeader',
        file: relPath,
        line: 1,
        code: 'new Response(JSON.stringify(...))',
        severity: 'MEDIUM',
        message: `API endpoint returns JSON without explicit 'Content-Type': 'application/json' header`,
        fixSuggestion: `Add headers: { 'Content-Type': 'application/json' } to Response options`
      });
    }

    // 3. Unsafe request.json() without try-catch
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('await request.json()') && !content.includes('catch') && !lines.slice(Math.max(0, idx - 5), idx).some(l => l.includes('try {'))) {
        errors.api.push({
          id: `API-PARSE-${String(idCounter++).padStart(3, '0')}`,
          type: 'UnsafeJsonParsing',
          file: relPath,
          line: idx + 1,
          code: line.trim(),
          severity: 'HIGH',
          message: `Unsafe 'await request.json()' call may throw uncaught SyntaxError if client sends empty or invalid payload`,
          fixSuggestion: `Wrap JSON body parsing in a try/catch or validate content-length header`
        });
      }
    });
  }

  logSuccess(`API analysis complete: found ${errors.api.length} potential issue(s).`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. TYPE SCRIPT DIAGNOSTICS
// ─────────────────────────────────────────────────────────────────────────────
function detectTypeErrors() {
  logInfo('Running TypeScript type diagnostics (tsc --noEmit)...');
  try {
    const output = execSync('npx tsc --noEmit --pretty false', {
      cwd: ROOT_DIR,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    logSuccess('TypeScript check passed with zero errors!');
  } catch (err) {
    const stdout = err.stdout ? err.stdout.toString() : '';
    const stderr = err.stderr ? err.stderr.toString() : '';
    const rawErrors = (stdout + '\n' + stderr).split('\n').filter(line => line.includes(': error TS'));

    let idCounter = 1;
    rawErrors.slice(0, 30).forEach(line => {
      const match = line.match(/^(.+?)\((\d+),(\d+)\):\s*error\s*(TS\d+):\s*(.+)$/);
      if (match) {
        const [, filePath, lineNum, colNum, tsCode, message] = match;
        const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
        errors.type.push({
          id: `TYPE-${String(idCounter++).padStart(3, '0')}`,
          type: tsCode,
          file: relPath,
          line: parseInt(lineNum, 10),
          col: parseInt(colNum, 10),
          code: tsCode,
          severity: 'HIGH',
          message: message.trim(),
          fixSuggestion: `Resolve TypeScript error ${tsCode} in ${relPath}:${lineNum}`
        });
      }
    });

    if (errors.type.length > 0) {
      logWarning(`TypeScript compiler identified ${errors.type.length} type error(s).`);
    } else {
      logSuccess('TypeScript diagnostics clean.');
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. ROUTING & BROKEN LINK CHECKS
// ─────────────────────────────────────────────────────────────────────────────
function detectRoutingErrors() {
  logInfo('Validating internal routing links and page anchors...');
  const pageFiles = getFiles(path.join(ROOT_DIR, 'src', 'pages'), ['.astro', '.tsx', '.jsx']);
  const registeredRoutes = new Set([
    '/',
    '/self-apply',
    '/find-experts',
    '/tools',
    '/readiness',
    '/jobs',
    '/tours',
    '/events',
    '/community',
    '/channel-partner',
    '/destination-guides',
    '/login',
    '/signup',
    '/register',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ]);

  pageFiles.forEach(file => {
    let route = file.replace(path.join(ROOT_DIR, 'src', 'pages'), '').replace(/\\/g, '/');
    route = route.replace(/\.(astro|tsx|jsx)$/, '');
    if (route.endsWith('/index')) route = route.replace(/\/index$/, '') || '/';
    registeredRoutes.add(route);
  });

  const componentFiles = [
    ...getFiles(path.join(ROOT_DIR, 'src', 'components'), ['.tsx', '.astro']),
    ...getFiles(path.join(ROOT_DIR, 'src', 'layouts'), ['.astro'])
  ];

  let idCounter = 1;
  for (const filePath of componentFiles) {
    const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, idx) => {
      const hrefMatches = line.matchAll(/href=["'](\/[a-zA-Z0-9_\-\/]*)["']/g);
      for (const m of hrefMatches) {
        const dest = m[1];
        if (dest && dest !== '/' && !dest.startsWith('/#') && !dest.startsWith('/api') && !dest.startsWith('/images') && !dest.startsWith('/favicon')) {
          const cleanDest = dest.replace(/\/$/, '');
          const exists = Array.from(registeredRoutes).some(r => r === cleanDest || cleanDest.startsWith(r + '/') || r.includes('['));
          if (!exists) {
            errors.routing.push({
              id: `ROUTE-${String(idCounter++).padStart(3, '0')}`,
              type: 'PotentiallyBrokenRoute',
              file: relPath,
              line: idx + 1,
              code: line.trim(),
              severity: 'LOW',
              message: `Link target '${dest}' does not match any known static route in src/pages/`,
              fixSuggestion: `Verify route exists or add dynamic catch-all page handler`
            });
          }
        }
      }
    });
  }

  logSuccess(`Routing analysis complete: verified routes across components.`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. BROWSER RUNTIME & TELEMETRY CHECKS
// ─────────────────────────────────────────────────────────────────────────────
async function detectBrowserErrors() {
  logInfo('Probing local server & client telemetry logs for browser errors...');

  if (fs.existsSync(TELEMETRY_FILE)) {
    try {
      const logs = JSON.parse(fs.readFileSync(TELEMETRY_FILE, 'utf8'));
      if (Array.isArray(logs)) {
        logs.forEach((item, idx) => {
          errors.browser.push({
            id: `BROWSER-TEL-${String(idx + 1).padStart(3, '0')}`,
            type: item.type || 'ConsoleError',
            file: item.url || item.file || 'browser-runtime',
            line: item.line || 1,
            code: item.message || '',
            severity: 'CRITICAL',
            message: item.message || 'Browser console error caught via telemetry',
            fixSuggestion: item.stack ? `Stack trace: ${item.stack.slice(0, 100)}...` : 'Inspect client console logs'
          });
        });
      }
    } catch (e) {
      // ignore
    }
  }

  const testUrls = ['/', '/self-apply', '/find-experts', '/readiness'];
  for (const route of testUrls) {
    try {
      await new Promise((resolve) => {
        const req = http.get(`http://localhost:4321${route}`, { timeout: 1500 }, (res) => {
          if (res.statusCode && res.statusCode >= 400) {
            errors.browser.push({
              id: `BROWSER-HTTP-${res.statusCode}`,
              type: 'HttpEndpointError',
              file: route,
              line: 1,
              code: `GET ${route} -> ${res.statusCode}`,
              severity: 'CRITICAL',
              message: `Page ${route} returned HTTP ${res.statusCode} ${res.statusMessage}`,
              fixSuggestion: `Check SSR rendering exceptions for route ${route}`
            });
          }
          resolve();
        });
        req.on('error', () => {
          resolve();
        });
      });
    } catch (e) {
      // ignore
    }
  }

  logSuccess(`Browser & runtime probe complete.`);
}

// ─────────────────────────────────────────────────────────────────────────────
// REPORT GENERATOR & EXPORTER
// ─────────────────────────────────────────────────────────────────────────────
function generateOutputs() {
  const totalErrors = errors.react.length + errors.api.length + errors.type.length + errors.routing.length + errors.browser.length;

  const reportData = {
    timestamp: new Date().toISOString(),
    project: 'TravlTik Visa Platform',
    totalErrors,
    summary: {
      react: errors.react.length,
      api: errors.api.length,
      type: errors.type.length,
      routing: errors.routing.length,
      browser: errors.browser.length
    },
    categories: errors
  };

  fs.writeFileSync(REPORT_FILE, JSON.stringify(reportData, null, 2), 'utf8');
  logSuccess(`Full error report saved to: ${REPORT_FILE}`);

  let summaryText = `
╔══════════════════════════════════════════════════════════════════════╗
║              TRAVLTIK CLI ERROR DETECTION SUMMARY                   ║
╚══════════════════════════════════════════════════════════════════════╝
Generated At: ${reportData.timestamp}
Total Detected Issues: ${totalErrors}

┌────────────────────────────┬────────────┬────────────────────────────┐
│ Category                   │ Count      │ Severity Profile           │
├────────────────────────────┼────────────┼────────────────────────────┤
│ 1. React Anti-Patterns     │ ${String(errors.react.length).padEnd(10)} │ HIGH / MEDIUM              │
│ 2. API & Network Routes    │ ${String(errors.api.length).padEnd(10)} │ HIGH / MEDIUM              │
│ 3. TypeScript Diagnostics  │ ${String(errors.type.length).padEnd(10)} │ CRITICAL / HIGH            │
│ 4. Broken Routes & Links   │ ${String(errors.routing.length).padEnd(10)} │ LOW / ADVISORY             │
│ 5. Browser Runtime Errors  │ ${String(errors.browser.length).padEnd(10)} │ CRITICAL                   │
└────────────────────────────┴────────────┴────────────────────────────┘

TOP CRITICAL / HIGH PRIORITY ISSUES:
`;

  const allIssues = [
    ...errors.browser,
    ...errors.type,
    ...errors.react,
    ...errors.api,
    ...errors.routing
  ];

  allIssues.slice(0, 15).forEach((issue, idx) => {
    summaryText += `\n[${idx + 1}] [${issue.severity}] ${issue.type} in ${issue.file}:${issue.line}\n`;
    summaryText += `    Message:    ${issue.message}\n`;
    summaryText += `    Suggestion: ${issue.fixSuggestion}\n`;
  });

  summaryText += `\n══════════════════════════════════════════════════════════════════════
AUTOMATED FIX COMMANDS:
  - Fix all issues:         npm run fix-all-errors
  - Fix React issues only:  npm run fix-react-errors
  - Fix API issues only:    npm run fix-api-errors
  - Fix Type issues only:   npm run fix-type-errors
  - View Visual Dashboard:  npm run error-report
══════════════════════════════════════════════════════════════════════\n`;

  fs.writeFileSync(SUMMARY_FILE, summaryText, 'utf8');
  logSuccess(`Human-readable summary saved to: ${SUMMARY_FILE}`);

  logHeader('ERROR DETECTION RESULTS');
  console.log(`\n  ${colors.bold}Total Issues Found:${colors.reset} ${totalErrors > 0 ? colors.yellow + totalErrors : colors.green + '0 (CLEAN)'}${colors.reset}\n`);
  console.log(`  • React Anti-Patterns:   ${errors.react.length > 0 ? colors.yellow + errors.react.length : colors.green + '0'}${colors.reset}`);
  console.log(`  • API Route Issues:      ${errors.api.length > 0 ? colors.yellow + errors.api.length : colors.green + '0'}${colors.reset}`);
  console.log(`  • TypeScript Errors:     ${errors.type.length > 0 ? colors.red + errors.type.length : colors.green + '0'}${colors.reset}`);
  console.log(`  • Routing / Link Checks: ${errors.routing.length > 0 ? colors.cyan + errors.routing.length : colors.green + '0'}${colors.reset}`);
  console.log(`  • Browser Console Errs:  ${errors.browser.length > 0 ? colors.red + errors.browser.length : colors.green + '0'}${colors.reset}\n`);

  if (isVerbose && allIssues.length > 0) {
    logHeader('DETAILED FINDINGS (VERBOSE)');
    allIssues.forEach((issue) => {
      console.log(`\n${colors.bold}[${issue.id}] ${colors.yellow}${issue.type}${colors.reset} in ${colors.cyan}${issue.file}:${issue.line}${colors.reset}`);
      console.log(`  ${colors.dim}Code:${colors.reset} ${issue.code}`);
      console.log(`  ${colors.dim}Desc:${colors.reset} ${issue.message}`);
      console.log(`  ${colors.green}Fix :${colors.reset} ${issue.fixSuggestion}`);
    });
  }

  if (autoFix) {
    logHeader('TRIGGERING AUTOMATED FIXING');
    try {
      execSync('node scripts/auto-fix.js --all', { stdio: 'inherit', cwd: ROOT_DIR });
    } catch (e) {
      logError(`Auto-fix failed: ${e.message}`);
    }
  }

  if (genReport) {
    logHeader('GENERATING DASHBOARD');
    try {
      execSync('node scripts/generate-report.js', { stdio: 'inherit', cwd: ROOT_DIR });
    } catch (e) {
      logError(`Dashboard generation failed: ${e.message}`);
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// RUNNER
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
  logHeader('TRAVLTIK CLI CONSOLE & ERROR DETECTOR');
  console.log(`Target Workspace: ${ROOT_DIR}\n`);

  if (checkReact) detectReactErrors();
  if (checkApi) detectApiErrors();
  if (checkType) detectTypeErrors();
  if (checkRouting) detectRoutingErrors();
  if (checkBrowser) await detectBrowserErrors();

  generateOutputs();
}

main().catch(err => {
  logError(`Detection script encountered an unexpected failure: ${err.message}`);
  process.exit(1);
});
