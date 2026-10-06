import React, { useState } from 'react';
import { CustomSelect } from '../ui/CustomSelect';

interface Pathway {
  name: string;
  probability: string;
  timeline: string;
}

const countryOptions = [
  { value: 'canada', label: 'Canada', subtitle: 'Express Entry & PNP Pathways' },
  { value: 'australia', label: 'Australia', subtitle: 'Subclass 189, 190 & 491' },
];

const degreeOptions = [
  { value: 'phd', label: 'PhD / Doctoral', subtitle: 'Level 10 Qualification' },
  { value: 'masters', label: "Master's Degree", subtitle: 'Post-graduate Level' },
  { value: 'bachelors', label: "Bachelor's Degree", subtitle: '3-4 Year Degree' },
  { value: 'diploma', label: 'Diploma / Associate', subtitle: 'Post-secondary Trade/Diploma' },
  { value: 'high_school', label: 'Secondary / High School', subtitle: 'Standard 12th Grade' },
];

const englishOptions = [
  { value: 'superior', label: 'Superior (IELTS 8+ / CLB 9+)', subtitle: 'Maximum points bracket' },
  { value: 'proficient', label: 'Proficient (IELTS 7 / CLB 8)', subtitle: 'High competitiveness' },
  { value: 'competent', label: 'Competent (IELTS 6 / CLB 7)', subtitle: 'Standard eligibility' },
  { value: 'basic', label: 'Basic (IELTS 5 / CLB 5)', subtitle: 'Minimum baseline' },
];

export function DecisionMatrix() {
  const [answers, setAnswers] = useState({
    age: '',
    degree: '',
    experience: '',
    englishLevel: '',
    targetCountry: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ score: number; recommendedPathways: Pathway[] } | null>(null);
  const [error, setError] = useState('');

  async function handleSubmit() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/tools/decision-matrix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age: parseInt(answers.age),
          degree: answers.degree,
          experience: parseInt(answers.experience || '0'),
          englishLevel: answers.englishLevel,
          targetCountry: answers.targetCountry,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResult({ score: data.score, recommendedPathways: data.recommendedPathways });
      } else {
        setError(data.error);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 shadow-sm">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Your Eligibility Score
            </div>
            <div className="text-6xl font-black text-slate-900 mt-2">
              {result.score}<span className="text-2xl text-slate-400">/100</span>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <h3 className="font-bold text-slate-900">Recommended Pathways</h3>
            {result.recommendedPathways.map((p, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-slate-900">{p.name}</div>
                    <div className="text-xs text-slate-500 mt-1">Timeline: {p.timeline}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    p.probability === 'High' ? 'bg-emerald-100 text-emerald-700' :
                    p.probability === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {p.probability}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setResult(null);
            }}
            className="w-full mt-6 py-3 border border-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Recalculate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 my-8 shadow-sm">
      <h1 className="text-2xl font-bold mb-2 text-slate-900">Visa Decision Matrix</h1>
      <p className="text-sm text-slate-600 mb-6">
        Answer 5 quick questions to see your best visa pathways backed by official consular benchmarks.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">Target Country</label>
          <CustomSelect
            value={answers.targetCountry}
            onChange={(val) => setAnswers({ ...answers, targetCountry: val })}
            options={countryOptions}
            placeholder="Select Target Country"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">Age</label>
          <input
            type="number"
            value={answers.age}
            onChange={(e) => setAnswers({ ...answers, age: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00a896]"
            placeholder="e.g., 28"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">Highest Degree</label>
          <CustomSelect
            value={answers.degree}
            onChange={(val) => setAnswers({ ...answers, degree: val })}
            options={degreeOptions}
            placeholder="Select Degree"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">Work Experience (years)</label>
          <input
            type="number"
            value={answers.experience}
            onChange={(e) => setAnswers({ ...answers, experience: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00a896]"
            placeholder="e.g., 5"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">English Level</label>
          <CustomSelect
            value={answers.englishLevel}
            onChange={(val) => setAnswers({ ...answers, englishLevel: val })}
            options={englishOptions}
            placeholder="Select English Proficiency"
          />
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading || !answers.age || !answers.degree || !answers.targetCountry}
          className="w-full py-3 bg-[#00a896] hover:bg-[#028090] text-white rounded-xl font-semibold disabled:opacity-50 transition-colors shadow-sm"
        >
          {loading ? 'Calculating...' : 'Calculate My Score'}
        </button>
      </div>
    </div>
  );
}
