// src/backend/pythonClient.ts
// This client is used to offload heavy CPU tasks to the Python microservice.

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || 'http://localhost:8000';

export async function processOCR(documentUrl: string, documentType: string) {
  try {
    const response = await fetch(`${PYTHON_SERVICE_URL}/api/ocr/process`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ document_url: documentUrl, document_type: documentType }),
    });

    if (!response.ok) {
      throw new Error(`Python service error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to connect to Python OCR service:', error);
    // Fallback logic: Mark for manual review or retry later
    return { status: 'failed', error: String(error) };
  }
}
