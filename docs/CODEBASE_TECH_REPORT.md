# TravlTik - Complete Tech Stack & Architecture Report
*Generated on: October 19, 2026*

## 1. Executive Summary
- **Product:** AI-powered Global Visa & Relocation Marketplace (travltik.com).
- **Core Model:** Escrow-backed licensed consultant matching (MARA & RCIC) + Self-serve automated AI compliance tools.
- **Architecture:** Hybrid Distributed Stack (Node.js/Astro SSR for high-speed I/O and SEO + Python FastAPI for CPU-bound AI & document computer vision).
- **Current Scale:** 1,500+ active applicants, 150+ verified consultants, 193+ country visa intelligence database.

## 2. Frontend Stack
- **Framework:** Astro v4 (Server-Side Rendered, Zero-JS by default for maximum Core Web Vitals and SEO rankings).
- **UI Library:** React 19 (Islands architecture — interactive widgets hydrate selectively only when needed).
- **Styling:** Tailwind CSS with unified brand design tokens (`#00b070` Brand Emerald, `#008f5a` Hover, `#e2f7ee` Light Mint, `#430f7a` Royal Purple).
- **Typography:** Plus Jakarta Sans & Sora (System fallbacks: Inter, -apple-system).
- **Performance:** Optimized WebP/AVIF asset pipelines, client-side smooth transitions, dynamic code-splitting.

## 3. Backend & API (Node.js Layer)
- **Runtime:** Node.js (Astro Server-Side API Routes deployed on Node adapter).
- **Database:** PostgreSQL on Neon Serverless with automatic SSL and read pooling.
- **Connection Pooling:** Configured with dedicated connection pooler (`-pooler.neon.tech`) and Read Replicas for scalable multi-region read traffic.
- **Payment Gateway:** Razorpay (RBI-compliant milestone-based escrow payouts with strict HMAC-SHA256 signature verification).
- **Auth & Session Management:** Session-based authentication with secure HTTP-only cookies and Firebase authentication tokens.

## 4. Python Microservice (Compute Layer)
- **Framework:** FastAPI (Python 3.12+ ASGI).
- **Scaffold Path:** `/backend` (`main.py`, `requirements.txt`, `README.md`).
- **Bridge Client:** `src/backend/pythonClient.ts` (Node.js <-> Python internal HTTP/REST interface).
- **Planned Workloads (Scale Phase):**
  - **Document OCR:** OpenCV, Tesseract & PyMuPDF for ICAO 9303 machine-readable travel documents (MRZ) validation.
  - **Biometric Photo Forensics:** MediaPipe Face Mesh for pitch/roll/pupil compliance (US DS-160 & Schengen criteria).
  - **Asynchronous Task Queue:** Celery workers backed by Redis for multi-minute dossier analysis without blocking Node event-loop.

## 5. AI & External Integrations
- **LLM Engine:** Google Gemini (Gemini 2.5 Flash & Gemini Pro via `@google/genai` SDK).
- **AI Tool Suite:**
  - Consular Photo Resizer & Spec Validator (`src/components/tools/PhotoResizer.tsx`).
  - Embassy Statement of Purpose (SOP) Drafting Engine (`src/pages/api/tools/sop-generator.ts`).
  - Immigration Dossier Audit & Gap Analysis (`src/pages/api/tools/pdf-audit.ts`).
  - Comprehensive Ranking System (CRS) Points Engine & Eligibility Evaluator.
- **Search & Ingestion:** Custom visa intelligence matrix covering 193+ jurisdictions with autonomous regulatory ingestion pipelines (`scripts/matrix-readiness-pipeline.py`).

## 6. Database Schema Highlights
- `users`: User authentication, profile information, and role-based permissions (applicant, consultant, channel partner, admin).
- `experts`: Registered service providers, MARA/CICC credential flags, specialties, consultation hourly pricing, and rating statistics.
- `escrow_milestones`: Step-based escrow releases (e.g., Initial filing 20% -> Submission 30% -> Outcome approval 50%).
- `expert_reviews`: Verified reviews tied to completed escrow transactions.
- `visa_rules`: Grounded visa requirements, fee matrices, biometrics protocols, and document checklists.

## 7. DevOps & Deployment
- **Version Control:** Git with dual remote synchronization (`origin` on GitHub + `logiqall` corporate mirror).
- **Hosting Environment:** Dedicated Node.js runtime on Hostingial with live systemd service management.
- **Build System:** Vite bundler under Astro SSR (`npm run build`), with deterministic type-checking and automated client chunking.
- **Environment Management:** Multi-tier environment configuration (`.env`, `.env.production`) for API credentials, Neon DB strings, and Razorpay secrets.

---
*This report is auto-generated from the TravlTik production codebase.*
