#!/usr/bin/env node
/**
 * TravlTik Real-Time Error Monitor & Telemetry Server
 * Listens for client-side uncaught exceptions, window.onerror, and console.error calls
 * sent from the browser runtime.
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const TELEMETRY_FILE = path.join(ROOT_DIR, 'errors-telemetry.json');
const PORT = 9999;

const args = process.argv.slice(2);
const isLive = args.includes('--live') || args.includes('-l') || args.length === 0;

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function readTelemetry() {
  if (!fs.existsSync(TELEMETRY_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(TELEMETRY_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveTelemetry(data) {
  fs.writeFileSync(TELEMETRY_FILE, JSON.stringify(data, null, 2), 'utf8');
}

if (!isLive) {
  const data = readTelemetry();
  console.log(`\n${colors.bold}${colors.cyan}════════════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`  ${colors.bold}TRAVLTIK TELEMETRY LOG SUMMARY${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}════════════════════════════════════════════════════════════════════${colors.reset}\n`);
  console.log(`Total Logged Runtime Exceptions: ${data.length}\n`);
  data.slice(-10).forEach((item, idx) => {
    console.log(`[${idx + 1}] ${colors.red}${item.type || 'Error'}${colors.reset} @ ${item.url || 'unknown'}:${item.line || '?'}`);
    console.log(`    ${item.message}`);
  });
  process.exit(0);
}

// Start live server
const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/telemetry') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const record = {
          ...payload,
          receivedAt: new Date().toISOString()
        };

        const existing = readTelemetry();
        existing.push(record);
        saveTelemetry(existing);

        // Terminal Live Alert
        const timestamp = new Date().toLocaleTimeString();
        console.log(`\n${colors.bold}${colors.red}🚨 [CLIENT ERROR DETECTED @ ${timestamp}]${colors.reset}`);
        console.log(`  ${colors.bold}Type:${colors.reset} ${colors.yellow}${record.type || 'RuntimeError'}${colors.reset}`);
        console.log(`  ${colors.bold}Message:${colors.reset} ${record.message}`);
        console.log(`  ${colors.bold}Page:${colors.reset} ${colors.cyan}${record.url || 'Unknown'}${colors.reset}`);
        if (record.line) console.log(`  ${colors.bold}Line:${colors.reset} ${record.line}:${record.col || 0}`);
        if (record.stack) {
          console.log(`  ${colors.dim}Stack:${colors.reset}\n  ${record.stack.split('\n').slice(0, 3).join('\n  ')}`);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ received: true }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  // Health check endpoint
  if (req.url === '/health' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'active', port: PORT, uptime: process.uptime() }));
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log(`\n${colors.bold}${colors.green}════════════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`  ${colors.bold}TRAVLTIK LIVE ERROR MONITORING SERVER ACTIVE${colors.reset}`);
  console.log(`${colors.bold}${colors.green}════════════════════════════════════════════════════════════════════${colors.reset}\n`);
  console.log(`  ${colors.cyan}●${colors.reset} Listening on:           ${colors.bold}http://localhost:${PORT}/api/telemetry${colors.reset}`);
  console.log(`  ${colors.cyan}●${colors.reset} Log storage:           ${colors.dim}${TELEMETRY_FILE}${colors.reset}`);
  console.log(`  ${colors.cyan}●${colors.reset} Status:                ${colors.green}Monitoring live browser sessions...${colors.reset}`);
  console.log(`  ${colors.dim}(Press Ctrl+C to stop monitoring)${colors.reset}\n`);
});

process.on('SIGINT', () => {
  console.log(`\n${colors.yellow}Shutting down error monitor...${colors.reset}`);
  server.close(() => process.exit(0));
});
