# Technical Architecture & Python Migration Roadmap: TravlTik

**Author:** TravlTik Engineering Team  
**Audience:** Y Combinator (YC) Partners & Technical Due Diligence Team  
**Current Tech Stack:** Node.js (Astro SSR v4, TypeScript, React 19, Neon PostgreSQL, Razorpay Escrow)  
**Future Compute Engine:** Python 3.12+ (FastAPI, Celery, Redis, OpenCV, PyMuPDF, Playwright)  

---

## Executive Summary (YC Pitch Context)

> *"Right now, TravlTik runs entirely on a lightweight, unified TypeScript + Node.js full-stack architecture. For our current volume (~1,500 active users, 150+ consultants), Node.js is optimal: sub-millisecond I/O, seamless type safety from database to UI, and zero operational overhead of running multiple microservices.*  
>  
> *However, as an immigration marketplace, our next phase of scale involves **heavy biometric document OCR, multi-page legal PDF audits, and autonomous embassy policy scrapers**. Node.js's single-threaded event loop is designed for high-concurrency I/O, not CPU-bound computer vision or multi-minute document parsing.  
>  
> Therefore, our long-term architectural roadmap decouples heavy compute into a dedicated **Python asynchronous worker cluster (FastAPI + Celery + Redis)** while retaining Node.js as our high-speed frontend and transactional edge gateway."*

---

## 1. Heavy CPU-Bound Tasks (Document OCR & Computer Vision)

### Current State (Node.js)
- **Files:**  
  - `src/pages/api/ocr-analyze-passport.ts` (532 lines)
  - `src/pages/api/ocr-analyze-document.ts` (248 lines)
  - `src/pages/api/ocr-analyze-visa.ts` (210 lines)
  - `src/utils/photoResizer.ts` & `src/components/tools/PhotoResizer.tsx`
- **Current Behavior:**  
  Raw base64 images and PDF strings are ingested directly in Astro API endpoints or rendered on client HTML5 canvas. When users upload 10MB–20MB bank statements or scanned passport books, base64 string decoding in Node.js consumes substantial V8 heap memory.
- **Why Python at Scale?**
  - **OpenCV & MediaPipe:** Sub-millisecond face biometrics detection, pupil alignment, eye-level validation, and background contrast checks (strict ICAO & US DS-160 standards).
  - **PyMuPDF / pdfplumber:** Multi-page PDF text and table extraction is **12x faster** in C-bound Python bindings compared to pure JavaScript PDF parsers.
  - **Memory Safety:** Processing 500 simultaneous 15MB passport scans in Node.js risks V8 `heap out of memory` crashes. Python worker processes isolate memory leaks and scale horizontally via container auto-scaling.

---

## 2. Long-Running Background AI Jobs

### Current State (Node.js)
- **Files:**  
  - `src/pages/api/tools/pdf-audit.ts` (Comprehensive immigration profile audit & risk scoring)
  - `src/pages/api/tools/sop-generator.ts` (Embassy Statement of Purpose drafting)
  - `src/pages/api/generate-trip.ts` (Personalized relocation & itinerary generation)
- **Current Behavior:**  
  These endpoints run synchronous Gemini 2.5 Flash / Pro model requests directly inside the HTTP request-response cycle. Latency ranges between **8 to 18 seconds**.
- **The Bottleneck at Scale:**  
  Cloud reverse proxies (Cloudflare, Nginx, Hostingial) enforce 30-to-60 second timeout limits. When multiple users submit detailed SOP generation or 30-page visa dossier audits, connections risk dropping mid-flight.
- **Python Migration Strategy:**
  1. User submits audit request via Node.js `/api/tools/pdf-audit`.
  2. Node.js writes job to **Redis Queue** and immediately returns `job_id` (HTTP 202 Accepted).
  3. **Python Celery Workers** pick up the payload, run deep reasoning with structured prompt pipelines, extract embeddings, and save the result to Neon PostgreSQL.
  4. Frontend streams status via WebSockets / Server-Sent Events (SSE).

---

## 3. Autonomous Embassy Data Scraping & Regulatory Ingestion

### Current State (Node.js & Prototype Python)
- **Files:**  
  - `scripts/run-world-runner.ts` (Batch pipeline for 193+ country visa rules)
  - `scripts/matrix-readiness-pipeline.py` *(Already implemented proof-of-concept in Python)*
  - `scripts/eval-readiness-pipeline.py`
  - `src/pages/api/visa/live-requirements.ts`
- **Why Python is Superior:**
  - Visa regulations across 193 embassies change without formal API notifications (e.g., Canadian LMIA updates, Schengen biometrics fees, UK salary thresholds).
  - Python has an unbeatable data-scraping ecosystem: **Playwright-Python**, **BeautifulSoup4**, and **Scrapy** handle headless anti-bot challenges and CAPTCHA bypasses significantly better than Node headless puppets.
  - Our data team can run scheduled cron pipelines using Python's mature data-science toolchain (`pandas`, `duckdb`) to sanitize and validate embassy diffs before deploying them into our production Postgres matrix.

---

## 4. Comprehensive Feature Migration Matrix

| Feature / Code File | Current Tech (Node.js) | Future Tech (Python) | Why Python? (Business & Engineering Rationale) | Priority Level |
| :--- | :--- | :--- | :--- | :--- |
| **Passport & Visa OCR**<br>`src/pages/api/ocr-analyze-passport.ts`<br>`src/pages/api/ocr-analyze-visa.ts` | Base64 decode + Node Gemini API call | Python + OpenCV + Tesseract / Amazon Textract | **10x faster image matrix operations.** Real-time ICAO 9303 MRZ checksum validation before sending to LLM. Prevents Node event-loop starvation. | **Phase 2 (Post-Seed)** |
| **Biometric Photo Resizer & Validator**<br>`src/utils/photoResizer.ts`<br>`src/components/tools/PhotoResizer.tsx` | Browser HTML5 Canvas | Python FastAPI + MediaPipe Face Mesh | Strict consular compliance (detecting head pitch, roll, chin-to-crown ratio, glasses glare) is impossible reliably in pure client canvas. | **Phase 2 (Post-Seed)** |
| **SOP Generator & Dossier Writer**<br>`src/pages/api/tools/sop-generator.ts` | Direct synchronous HTTP API route (~12s latency) | Python + Celery + Redis + LangChain / Instructor | Prevents gateway timeouts. Allows multi-agent refinement (Drafting -> Legal Audit -> Fact Checking) without blocking user requests. | **Phase 2 (Post-Seed)** |
| **Immigration Document Legal Audit**<br>`src/pages/api/tools/pdf-audit.ts` | Single Gemini call on incoming payload | Python + PyMuPDF + Vector Search (pgvector) | Enables parsing 50+ page bank statements and company incorporation papers with semantic chunking and automated fraud detection. | **Phase 3 (Series A)** |
| **Embassy Regulatory Scraper**<br>`scripts/run-world-runner.ts`<br>`scripts/matrix-readiness-pipeline.py` | Node.js TS script runner | Python Scrapy + Playwright Cluster | Robust handling of dynamic government portals (IRCC, VFS Global, AusImmi). Native scheduled ingestion into Neon DB. | **Phase 1 (In Progress)** |
| **Marketplace Core, Auth & Payments**<br>`src/pages/api/bookings/*`<br>`src/pages/api/auth/*`<br>`src/pages/api/webhooks/escrow.ts` | Node.js + TypeScript + Astro SSR | **Retain in Node.js** | **Sub-50ms SSR latency**, high I/O throughput for user sessions, native SDK support for Razorpay and Firebase Auth. Zero reason to rewrite. | **Permanent Stack** |

---

## 5. Technical Verdict: Is Immediate Migration Necessary Today?

### Straightforward Answer for YC Due Diligence:
**NO. An immediate migration to Python right now would be an anti-pattern.**

1. **Current Load is Handled Flawlessly:**  
   Our Node.js + Astro SSR engine handles 1,500+ users with zero degradation. P95 latency across directory pages, search queries, and escrow transactions is `< 120ms`.
2. **Lean Architecture Velocity:**  
   Keeping the entire codebase in unified TypeScript allows a small founding engineering team to ship frontend, API, database queries, and UI components in minutes without context switching.
3. **Prepared Hybrid Architecture:**  
   We have already prototyped Python pipelines in `scripts/matrix-readiness-pipeline.py`. When user load exceeds **10,000+ daily concurrent document audits**, we will spin up a lightweight Python FastAPI microservice on AWS ECS / Modal without touching our existing database or frontend logic.

---

## 6. YC Partner Pitch Pitch-Card (Elevator Summary)

> **"Our core marketplace—search, consultant matching, booking, and escrow payments—is built on Node.js and Astro for maximum speed, SEO dominance, and sub-100ms response times. However, legal document verification is a heavy compute problem. As we scale, our OCR validation, consular photo forensics, and embassy rule scrapers are designed to offload cleanly to an asynchronous Python microservice cluster. We aren't rebuilding our stack; we are orchestrating a high-performance hybrid engine that gives us the developer velocity of TypeScript with the AI compute horsepower of Python."**
