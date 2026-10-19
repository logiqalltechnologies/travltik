# TravlTik Python Microservice

This is the compute-heavy microservice layer for TravlTik. 
It handles tasks that would block the Node.js event loop, such as:
1. **Document OCR & MRZ Parsing** (using OpenCV & PyMuPDF)
2. **AI Background Jobs** (using Celery & Redis)
3. **Embassy Data Scraping** (using Scrapy & Playwright)

## How to run locally
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Connection to Node.js
The Node.js Astro API (on Hostingial) communicates with this service via internal REST calls or Redis Queue for asynchronous tasks.
