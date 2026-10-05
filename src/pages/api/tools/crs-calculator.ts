// src/pages/api/tools/crs-calculator.ts
import type { APIRoute } from 'astro';
import { checkRateLimit, getClientIp } from '@/middleware/rateLimiter';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Too many requests. Please try again in a minute.',
      }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await request.json();
    const {
      age = 28,
      education = "bachelor",
      firstLanguageScore = 8,
      secondLanguageScore = 0,
      workExperience = 3,
      hasSpouse = false,
      hasJobOffer = false,
      hasProvincialNomination = false,
      hasCanadianEducation = false,
    } = body;

    // Standard Express Entry CRS calculation logic
    let agePoints = 0;
    const ageNum = Number(age);
    if (!hasSpouse) {
      if (ageNum >= 20 && ageNum <= 29) agePoints = 110;
      else if (ageNum === 18) agePoints = 99;
      else if (ageNum === 19) agePoints = 105;
      else if (ageNum === 30) agePoints = 105;
      else if (ageNum === 31) agePoints = 99;
      else if (ageNum === 32) agePoints = 94;
      else if (ageNum === 33) agePoints = 88;
      else if (ageNum === 34) agePoints = 83;
      else if (ageNum === 35) agePoints = 77;
      else if (ageNum >= 45) agePoints = 0;
      else agePoints = Math.max(0, 110 - (ageNum - 29) * 6);
    } else {
      if (ageNum >= 20 && ageNum <= 29) agePoints = 100;
      else if (ageNum >= 45) agePoints = 0;
      else agePoints = Math.max(0, 100 - (ageNum - 29) * 5);
    }

    let educationPoints = 120; // default Bachelor's
    if (typeof education === 'string') {
      const edu = education.toLowerCase();
      if (edu.includes('phd') || edu.includes('doctoral')) educationPoints = hasSpouse ? 140 : 150;
      else if (edu.includes('master')) educationPoints = hasSpouse ? 126 : 135;
      else if (edu.includes('two') || edu.includes('double')) educationPoints = hasSpouse ? 119 : 128;
      else if (edu.includes('bachelor')) educationPoints = hasSpouse ? 112 : 120;
      else educationPoints = hasSpouse ? 90 : 98;
    }

    const langClb = Number(firstLanguageScore) || 7;
    const langPoints = Math.min(136, langClb * 16);

    const expYears = Number(workExperience) || 1;
    const skillPoints = Math.min(50, expYears >= 3 ? 50 : expYears * 15);

    let additionalPoints = 0;
    if (hasProvincialNomination) additionalPoints += 600;
    if (hasJobOffer) additionalPoints += 50;
    if (hasCanadianEducation) additionalPoints += 30;

    const coreTotal = agePoints + educationPoints + langPoints;
    const totalCrs = coreTotal + skillPoints + additionalPoints;

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          totalScore: totalCrs,
          breakdown: {
            agePoints,
            educationPoints,
            languagePoints: langPoints,
            skillTransferability: skillPoints,
            additionalPoints,
            coreHumanCapital: coreTotal,
          },
          competitiveness: totalCrs >= 480 ? 'Exceptional / Direct ITA likely' : totalCrs >= 430 ? 'Competitive with PNP' : 'Moderate / Language improvement recommended',
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error?.message || 'Calculation error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
