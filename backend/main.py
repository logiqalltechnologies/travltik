from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(
    title="TravlTik Python Microservice",
    description="Handles heavy CPU-bound tasks like OCR, Biometrics, and AI Background Jobs.",
    version="1.0.0"
)

class OCRRequest(BaseModel):
    document_url: str
    document_type: str

class OCRResponse(BaseModel):
    status: str
    extracted_text: Optional[str] = None
    confidence: Optional[float] = None

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "TravlTik Python AI Engine",
        "supported_tasks": ["Passport OCR", "SOP Generation", "Embassy Scraping"]
    }

@app.post("/api/ocr/process", response_model=OCRResponse)
def process_ocr(request: OCRRequest):
    # Future implementation: OpenCV + Tesseract / PyMuPDF
    if not request.document_url:
        raise HTTPException(status_code=400, detail="Document URL is required")
    
    return OCRResponse(
        status="processing_started",
        extracted_text="Sample MRZ line for demo purposes",
        confidence=0.98
    )
