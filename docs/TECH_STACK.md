# TravlTik Tech Stack Strategy

> **Purpose:** Canonical reference for architecture decisions.
> Answers the YC question: *"What is your tech stack and why?"*

---


## 🐍 Python Microservice Architecture (Proof of Concept)

We have initialized the Python compute layer in the `/backend` directory. 
- **Framework:** FastAPI
- **Purpose:** Handle CPU-bound tasks (OCR, AI document audits) without blocking the Node.js event loop.
- **Node.js Integration:** `src/backend/pythonClient.ts` acts as the bridge.

You can test the Python service locally:
```bash
cd backend && uvicorn main:app --reload
# Visit http://localhost:8000/docs
```

---
## Current Architecture (Speed, SEO & Rapid Iteration)

| Layer | Technology | Why |
|---|---|---|
| **Frontend** | Astro (Zero-JS by default) + React Islands | SSR-first = sub-2s FCP on all pages. React islands only hydrate where interactivity is needed. Maximum SEO without sacrificing UX. |
| **Backend API** | Node.js via Astro API Routes | I/O-bound workloads (DB queries, payment webhooks, search APIs) are exactly where Node.js shines. Single unified codebase. |
| **Database** | PostgreSQL on Neon (Serverless + Read Replicas) | Serverless cold-start <100ms, automatic read replica scaling, branching for preview deployments. Zero-ops. |
| **Payments** | Razorpay (Milestone Escrow) | RBI-compliant payment gateway. Webhook-driven milestone release maps 1:1 to our escrow logic. |
| **AI Tools** | Client-side (HTML5 Canvas, browser APIs) | Photo Resizer, CRS Calculator run entirely in the browser — zero server cost, instant response, works offline. |
| **Deployment** | Vercel (Edge Functions + CDN) | Global edge network, preview URLs per PR, zero-config CI/CD. |

### Why Node.js *now* (and not Python)?

Node.js is ideal for our **current traffic pattern**: every request is I/O-bound (read DB, call Razorpay, return JSON).
At our current scale, maintaining two runtimes would slow down iteration speed — the single most critical metric at pre-seed.

---

## Future Architecture: The Hybrid (Polyglot) Model

As we scale past **10,000+ concurrent users** and begin processing uploaded documents at volume, we will introduce
Python **only** for CPU-bound compute tasks that would block the Node.js event loop.

```
User/Browser → Astro/Node.js (Web Layer)
                  ├── PostgreSQL (Neon)
                  └── Redis Job Queue
                        └── Python Microservice (FastAPI + Celery)
                              ├── OCR / Biometrics (OpenCV + PyMuPDF)
                              ├── AI Background Jobs (SOP Gen, PDF Audit)
                              └── Embassy Policy Scraper (Scrapy + Playwright)
```

### Python Workload 1: Document OCR & Biometric Processing
- **Tech:** Python 3.11 + FastAPI + OpenCV + PyMuPDF
- **Why Python:** C-accelerated image processing. cv2 MRZ extraction is ~10x faster and uses 4x less RAM than Node Canvas/Sharp for multi-page PDFs.
- **Integration:** Node.js receives upload → S3 → Redis job → returns 202 Accepted → Python Celery worker processes → WebSocket notification.

### Python Workload 2: AI Background Job Workers (SOP & PDF Audit)
- **Tech:** Python + Celery + Redis + LangChain / OpenAI SDK
- **Why Python:** OpenAI, Anthropic, HuggingFace all publish Python SDKs first. Mature async task queue ecosystem.
- **Integration:** Non-blocking. Node.js returns job token immediately. Worker notifies user via WebSocket when done.

### Python Workload 3: Embassy Policy Scraper (Data Freshness)
- **Tech:** Python + Scrapy + Playwright (for JS-rendered government sites)
- **Why Python:** Industry standard for production web scraping. Scrapy middleware ecosystem, proxy rotation, anti-bot bypass libraries have no Node.js equivalent at same maturity.
- **Output:** Structured JSON → PostgreSQL embassy_rules table → CDN cache invalidation.

---

## YC Application Answer (Copy-Paste Ready)

> *"What is your tech stack?"*

**Answer:**
> We use an **Astro + Node.js** stack, optimised for fast I/O, zero-JS SEO-first rendering, and a unified
> codebase that lets us ship product features rapidly. Our database is PostgreSQL on Neon (serverless,
> auto-scaling read replicas). Payments go through Razorpay RBI-compliant gateway with webhook-driven
> milestone release.
>
> We are building a **hybrid polyglot architecture** for scale. Heavy CPU-bound operations — specifically
> Passport MRZ / biometric OCR (OpenCV), AI document processing (LangChain), and nightly embassy policy
> scraping (Scrapy + Playwright) — will be offloaded to a **Python + FastAPI + Celery** microservice layer.
> This prevents Node.js event-loop blocking and lets each runtime do what it does best: Node.js for I/O
> and routing, Python for compute-intensive AI pipelines.

---

*Last updated: October 2026 | Version 1.0*

