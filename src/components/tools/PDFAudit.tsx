import React, { useState } from 'react';
import { 
  FileCheck2, Sparkles, AlertCircle, ArrowRight, Printer, 
  CheckCircle2, Compass, ShieldAlert, BookOpen, Layers, Award
} from 'lucide-react';
import { CustomSelect, type SelectOption } from '../ui/CustomSelect';

const COUNTRY_OPTIONS: SelectOption[] = [
  { value: "Canada", label: "Canada", subtitle: "Express Entry / Provincial Nominee (PNP)", badge: "EE / PNP" },
  { value: "Australia", label: "Australia", subtitle: "SkillSelect Subclass 189 / 190 / 491", badge: "Points 65+" },
  { value: "United Kingdom", label: "United Kingdom", subtitle: "Skilled Worker Route / Global Talent", badge: "70 Pts" },
  { value: "Germany", label: "Germany", subtitle: "Opportunity Card / EU Blue Card", badge: "Chancenkarte" },
  { value: "New Zealand", label: "New Zealand", subtitle: "Skilled Migrant Category (SMC)", badge: "SMC 6 Pts" },
];

const EDUCATION_OPTIONS: SelectOption[] = [
  { value: "Doctoral / Ph.D.", label: "Doctoral Degree (Ph.D.)", subtitle: "Highest academic credential tier" },
  { value: "Master's Degree", label: "Master's Degree / Professional Degree", subtitle: "High CRS tier (126-135 human capital pts)" },
  { value: "Two or more Post-Secondary Degrees", label: "Two or More Post-Secondary Degrees", subtitle: "One program must be 3+ years in duration" },
  { value: "Bachelor's Degree", label: "Bachelor's Degree (3-4 Years)", subtitle: "Standard university degree level" },
  { value: "Post-Secondary Diploma", label: "1-2 Year College Diploma / Certificate", subtitle: "Technical or vocational diploma" },
];

const LANGUAGE_OPTIONS: SelectOption[] = [
  { value: "CLB 10 (IELTS 8.5+)", label: "CLB 10 (IELTS 8.5+ / Fluent)", subtitle: "Maximum available language points (32-34 pts/band)" },
  { value: "CLB 9 (IELTS 8777)", label: "CLB 9 (IELTS 8777 - Optimal CRS)", subtitle: "Unlocks maximum skill transferability bonus" },
  { value: "CLB 8 (IELTS 7.5)", label: "CLB 8 (IELTS 7.5)", subtitle: "Competitive score for skilled migration" },
  { value: "CLB 7 (IELTS 6.0)", label: "CLB 7 (IELTS 6.0 - Minimum Threshold)", subtitle: "Minimum threshold for Express Entry FSW" },
  { value: "Below CLB 7", label: "Below CLB 7", subtitle: "May require retake before profile submission" },
];

interface AuditReport {
  profileSummary: string;
  crsBreakdown: {
    coreHumanCapital: number;
    spouseFactors: number;
    skillTransferability: number;
    additionalPoints: number;
    totalEstimatedScore: number;
  };
  scoreAssessment: string;
  documentGaps: Array<{
    document: string;
    reason: string;
    urgency: 'Critical' | 'Medium' | 'Low';
  }>;
  recommendedPathways: Array<{
    title: string;
    probability: string;
    description: string;
    keyRequirement: string;
  }>;
  nextSteps: string[];
  sources: string[];
  disclaimer: string;
}

export function PDFAudit() {
  const [formData, setFormData] = useState({
    age: '28',
    education: "Master's Degree",
    language: 'IELTS 7.5 (CLB 9)',
    experience: '4',
    targetCountry: 'Canada',
    jobTitle: 'Software Engineer / Tech Professional'
  });
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AuditReport | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/tools/pdf-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setReport(data);
      } else {
        setErrorMsg(data.error || 'Failed to complete immigration audit.');
      }
    } catch (err: any) {
      setErrorMsg('Network error connecting to audit engine. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 print:hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-200">
          <Sparkles className="w-3.5 h-3.5 text-[#00a896]" />
          <span>Consular Regulatory Feasibility AI</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          AI Immigration Profile &amp; PDF Audit
        </h1>
        <p className="text-slate-600 text-sm lg:text-base mt-2">
          Evaluate your CRS score, identify critical document gaps, and generate a consular-grade feasibility report with official regulatory sources.
        </p>
      </div>

      {/* Input Form Card */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm mb-8 print:hidden">
        <form onSubmit={handleAudit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Target Country */}
            <CustomSelect
              label="Target Country"
              value={formData.targetCountry}
              onChange={(val) => setFormData({ ...formData, targetCountry: val })}
              options={COUNTRY_OPTIONS}
            />

            {/* Age */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Age
              </label>
              <input
                type="number"
                min="18"
                max="65"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-[#00a896] outline-none"
                required
              />
            </div>

            {/* Highest Education */}
            <CustomSelect
              label="Highest Education"
              value={formData.education}
              onChange={(val) => setFormData({ ...formData, education: val })}
              options={EDUCATION_OPTIONS}
            />

            {/* Language Test Score */}
            <CustomSelect
              label="Language Test Competency"
              value={formData.language}
              onChange={(val) => setFormData({ ...formData, language: val })}
              options={LANGUAGE_OPTIONS}
            />

            {/* Skilled Work Experience */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Work Experience (Years)
              </label>
              <input
                type="number"
                min="0"
                max="30"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-[#00a896] outline-none"
                required
              />
            </div>

            {/* Primary Profession */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Primary Job Title / Field
              </label>
              <input
                type="text"
                placeholder="e.g. Software Engineer, Nurse, Financial Analyst"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-[#00a896] outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Evaluated against 2026/2027 ministerial instructions &amp; draw data.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#00a896] hover:bg-[#009282] active:scale-95 text-white font-bold text-sm shadow-md transition-all duration-150 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Auditing Regulatory Profile...</span>
                </>
              ) : (
                <>
                  <FileCheck2 className="w-4 h-4" />
                  <span>Generate Feasibility Audit</span>
                </>
              )}
            </button>
          </div>
        </form>

        {errorMsg && (
          <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Generated Report Output */}
      {report && (
        <div className="bg-white rounded-2xl p-6 lg:p-10 border border-slate-200 shadow-md space-y-8 print:border-none print:shadow-none print:p-0">
          {/* Printable Report Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Official Immigration Audit Document
              </div>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                Feasibility Assessment — {formData.targetCountry}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Target Profile: {formData.jobTitle} • Status: {report.scoreAssessment}
              </p>
            </div>

            <button
              onClick={handlePrint}
              className="print:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>

          {/* Section 1: Executive Summary */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#00a896]" />
              Executive Profile Summary
            </h3>
            <p className="text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed">
              {report.profileSummary}
            </p>
          </div>

          {/* Section 2: CRS Score Breakdown */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              Points &amp; Human Capital Score Breakdown
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <div className="text-[11px] text-slate-500 font-semibold">Core / Human</div>
                <div className="text-lg font-extrabold text-slate-900 mt-1">{report.crsBreakdown.coreHumanCapital}</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <div className="text-[11px] text-slate-500 font-semibold">Spouse Factors</div>
                <div className="text-lg font-extrabold text-slate-900 mt-1">{report.crsBreakdown.spouseFactors}</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <div className="text-[11px] text-slate-500 font-semibold">Transferability</div>
                <div className="text-lg font-extrabold text-slate-900 mt-1">{report.crsBreakdown.skillTransferability}</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <div className="text-[11px] text-slate-500 font-semibold">Additional Points</div>
                <div className="text-lg font-extrabold text-slate-900 mt-1">{report.crsBreakdown.additionalPoints}</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3.5 bg-teal-50 rounded-xl border border-teal-200 text-center">
                <div className="text-[11px] text-teal-800 font-bold">Estimated Total</div>
                <div className="text-xl font-black text-[#00a896] mt-1">{report.crsBreakdown.totalEstimatedScore}</div>
              </div>
            </div>
          </div>

          {/* Section 3: Critical Document Gaps */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              Identified Document &amp; Regulatory Gaps
            </h3>
            <div className="space-y-2.5">
              {report.documentGaps.map((gap, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 flex items-start justify-between gap-4 bg-white">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{gap.document}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{gap.reason}</div>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                    gap.urgency === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {gap.urgency} Action
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Recommended Pathways */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600" />
              Recommended Consular Pathways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {report.recommendedPathways.map((path, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{path.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {path.probability} Feasibility
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{path.description}</p>
                  <div className="text-[11px] font-semibold text-slate-700 bg-white p-2 rounded-lg border border-slate-200/80">
                    <strong className="text-teal-700">Requirement:</strong> {path.keyRequirement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Actionable Next Steps */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Actionable Next Steps
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {report.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span className="mt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6: Official Grounded Sources */}
          {report.sources && report.sources.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                Verified Regulatory &amp; Ministerial Sources
              </h4>
              <ul className="list-disc list-inside text-[11px] text-slate-500 space-y-1">
                {report.sources.map((src, idx) => (
                  <li key={idx}>{src}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
            <strong className="text-slate-700">Regulatory Disclaimer:</strong> {report.disclaimer || 'This report is prepared for informational and feasibility assessment purposes. Official visa decisions are made solely by immigration officers under relevant sovereign immigration acts.'}
          </div>
        </div>
      )}
    </div>
  );
}
