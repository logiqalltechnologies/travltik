// src/pages/api/tools/sop-generator.ts
import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';
import { checkRateLimit, getClientIp } from '@/middleware/rateLimiter';
import fs from 'fs';
import path from 'path';

export const prerender = false;

// Resolve Gemini API key safely
const getGeminiApiKey = (): string => {
  let key = (
    process.env.GEMINI_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
    process.env.PUBLIC_GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ''
  )?.trim();
  if (key) return key;

  try {
    const envFiles = ['.env', '.env.local'];
    for (const f of envFiles) {
      const envPath = path.resolve(process.cwd(), f);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const match = content.match(/^(?:GEMINI_API_KEY|NEXT_PUBLIC_GEMINI_API_KEY|PUBLIC_GEMINI_API_KEY|GOOGLE_API_KEY)\s*=\s*(.*)$/m);
        if (match) {
          key = match[1].trim().replace(/^["']|["']$/g, '');
          if (key) return key;
        }
      }
    }
  } catch (err) {}

  return '';
};

export const POST: APIRoute = async ({ request }) => {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Too many requests. Please try again in a minute.' 
      }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await request.json();
    const {
      applicantName = 'Applicant',
      targetCountry = 'Canada',
      purpose = 'Student Visa / Study Permit',
      institution = 'Designated Learning Institution',
      duration = '2 Years',
      financial = 'Self-funded savings with confirmed bank statement + sponsorship',
      ties = 'Immediate family, permanent residential property, and career opportunities in home country'
    } = body;

    const apiKey = getGeminiApiKey();

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });

        const prompt = `You are TravlTik's official AI Statement of Purpose (SOP) & Consular Cover Letter Generator.

USER DETAILS:
- Applicant Name: ${applicantName}
- Destination Country: ${targetCountry}
- Visa Purpose: ${purpose}
- Target Institution / Organization: ${institution}
- Planned Duration: ${duration}
- Financial Capability & Funding: ${financial}
- Ties to Home Country (Dual Intent / Non-Immigrant Intent): ${ties}

TASK:
Write an authoritative, persuasive, and legally compliant Statement of Purpose / Cover Letter addressed to the Visa Officer of the Embassy/Consulate General of ${targetCountry}.

REQUIREMENTS:
1. Professional consular tone with formal greeting and structured sections:
   - Introduction & Purpose of Application
   - Academic / Professional Background & Choice of Program/Employer
   - Financial Preparedness & Proof of Funds
   - Strong Socio-Economic Ties to Home Country & Clear Intent to Return upon completion
   - Conclusion & Courteous Sign-off
2. Address standard refusal pitfalls (e.g. Canada IRPR 216 temporary resident intent, US INA 214(b) nonimmigrant intent, Australia GS Genuine Student criteria).
3. Keep length between 400 and 550 words.

Return JSON in this format ONLY:
{
  "sop": "Full text of letter here...",
  "keyHighlights": [
    "Clear demonstration of non-immigrant intent",
    "Verifiable liquid funding covering full duration",
    "Articulated career trajectory upon repatriation"
  ],
  "sources": [
    "Embassy Consular Visa Processing Directives",
    "Standard Immigration & Refugee Protection Regulations (IRPR)",
    "Foreign Affairs Consular Cover Letter Guidelines"
  ],
  "disclaimer": "Official Consular Notice: This SOP draft should be personalized with your exact dates, bank details, and personal milestones before official embassy submission."
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            temperature: 0.2
          }
        });

        const text = response.text || '';
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          return new Response(JSON.stringify({ success: true, ...parsed }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      } catch (geminiError) {
        console.warn('Gemini call failed in sop-generator, using fallback:', geminiError);
      }
    }

    // High quality template fallback
    const fallbackSop = `To,
The Visa Officer,
Immigration Section,
Consulate General / Embassy of ${targetCountry}

Subject: Application for ${purpose} — ${applicantName}

Dear Visa Officer,

I am writing to formally submit my application for a ${purpose} to ${targetCountry} for a duration of ${duration}. I have been duly accepted / invited by ${institution}, and I look forward to fulfilling my academic and professional objectives in full compliance with immigration regulations.

Academic & Professional Background:
Over the past several years, I have systematically developed my competencies in my chosen field. My decision to pursue this journey in ${targetCountry} is guided by the world-class curriculum, exposure to cutting-edge methodologies, and the international standard of excellence offered by ${institution}. This opportunity directly aligns with my career vision and provides the knowledge necessary to contribute significantly upon my return to my home country.

Financial Capability & Sponsorship:
I have secured comprehensive and verifiable financial backing for the entire span of my stay. As detailed in the attached financial dossier, my expenses—including tuition/program fees, living costs, accommodation, and contingency funds—are fully supported through ${financial}. All financial documents, including bank statements, tax returns, and asset summaries, have been verified and submitted for your review.

Strong Ties to Home Country & Clear Intent to Return:
I wish to emphasize my profound and permanent ties to my home country. My immediate family, dependent relatives, and ancestral roots remain firmly established at home (${ties}). Furthermore, the credentials and experience acquired during my time in ${targetCountry} will position me for significant career advancement and leadership roles locally. I have no intention to remain beyond the validity of my authorized stay, and I commit to repatriating immediately upon conclusion of my program.

Conclusion:
I trust that the attached documentation demonstrates my genuine intentions, financial self-sufficiency, and strict adherence to consular requirements. I remain at your disposal should any additional clarification or interview be required.

Thank you for your valuable time and consideration of my application.

Sincerely,
${applicantName}
Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;

    return new Response(
      JSON.stringify({
        success: true,
        sop: fallbackSop,
        keyHighlights: [
          'Explicit articulation of genuine non-immigrant intent',
          'Documented financial self-sufficiency without reliance on public funds',
          'Demonstrated familial and economic ties to home country'
        ],
        sources: [
          'Official Embassy Consular Guidance',
          'Sovereign Immigration Acts (Section 216 / 214b Compliance Framework)'
        ],
        disclaimer: 'Official Consular Notice: Carefully review and customize all placeholders (e.g. specific institution names, dates, financial figures) before formal filing.'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error?.message || 'Failed to generate SOP' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
