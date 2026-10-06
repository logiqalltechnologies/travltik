// src/pages/api/tools/decision-matrix.ts
import type { APIRoute } from 'astro';
import { runMigrations, getPool } from '../../../backend/db';

export const prerender = false;

interface Answers {
  age: number;
  degree: string;
  experience: number;
  englishLevel: string;
  targetCountry: string;
}

function calculateScore(answers: Answers): number {
  let score = 0;

  // Age scoring
  if (answers.age >= 18 && answers.age <= 30) score += 30;
  else if (answers.age <= 35) score += 25;
  else if (answers.age <= 40) score += 20;
  else if (answers.age <= 45) score += 10;

  // Degree scoring
  const degreeScores: Record<string, number> = {
    phd: 30,
    masters: 25,
    bachelors: 20,
    diploma: 10,
    high_school: 5,
  };
  score += degreeScores[answers.degree] || 0;

  // Experience scoring
  score += Math.min(answers.experience * 5, 25);

  // English scoring
  const englishScores: Record<string, number> = {
    superior: 20,
    proficient: 15,
    competent: 10,
    basic: 5,
  };
  score += englishScores[answers.englishLevel] || 0;

  return Math.min(score, 100);
}

function getRecommendedPathways(score: number, country: string) {
  if (country === 'canada') {
    if (score >= 80) {
      return [
        { name: 'Express Entry (FSW)', probability: 'High', timeline: '6-8 months' },
        { name: 'Provincial Nominee Program', probability: 'High', timeline: '8-12 months' },
      ];
    } else if (score >= 60) {
      return [
        { name: 'Provincial Nominee Program', probability: 'Medium', timeline: '12-18 months' },
        { name: 'Study Permit → PR', probability: 'High', timeline: '2-3 years' },
      ];
    } else {
      return [
        { name: 'Study Permit → PR', probability: 'Medium', timeline: '2-3 years' },
        { name: 'Work Permit → PR', probability: 'Low', timeline: '3-5 years' },
      ];
    }
  }

  if (country === 'australia') {
    if (score >= 80) {
      return [
        { name: 'Subclass 189 (Skilled Independent)', probability: 'High', timeline: '8-12 months' },
        { name: 'Subclass 190 (Skilled Nominated)', probability: 'High', timeline: '10-14 months' },
      ];
    } else if (score >= 60) {
      return [
        { name: 'Subclass 190 (Skilled Nominated)', probability: 'Medium', timeline: '14-18 months' },
        { name: 'Subclass 491 (Regional)', probability: 'High', timeline: '12-16 months' },
      ];
    } else {
      return [
        { name: 'Subclass 491 (Regional)', probability: 'Medium', timeline: '16-20 months' },
        { name: 'Study Visa → PR', probability: 'High', timeline: '3-4 years' },
      ];
    }
  }

  return [
    { name: 'Consult with Expert', probability: 'Medium', timeline: 'Varies' },
  ];
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    await runMigrations();
    const pool = getPool();
    const answers: Answers = await request.json();

    if (!answers.age || !answers.degree || !answers.targetCountry) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const score = calculateScore(answers);
    const recommendedPathways = getRecommendedPathways(score, answers.targetCountry);
    const userId = (locals as any)?.user?.id || (locals as any)?.userId || null;

    const insertRes = await pool.query(
      `INSERT INTO decision_matrix_results (
        user_id, age, degree, experience, english_level, target_country, score, recommended_pathways
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, created_at`,
      [
        userId,
        answers.age,
        answers.degree,
        answers.experience,
        answers.englishLevel,
        answers.targetCountry,
        score,
        JSON.stringify(recommendedPathways),
      ]
    );

    const result = insertRes.rows[0];

    return new Response(
      JSON.stringify({
        success: true,
        resultId: result?.id,
        score,
        recommendedPathways,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
