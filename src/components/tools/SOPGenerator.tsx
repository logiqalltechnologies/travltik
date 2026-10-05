import React, { useState } from 'react';
import { 
  FileText, Sparkles, Copy, Download, Check, AlertCircle, 
  BookOpen, ShieldCheck, RefreshCw, Send, CheckCircle2
} from 'lucide-react';
import { CustomSelect, type SelectOption } from '../ui/CustomSelect';

const SOP_COUNTRY_OPTIONS: SelectOption[] = [
  { value: "Canada", label: "Canada", subtitle: "IRCC / Section 216 IRPR Intent Standard", badge: "IRCC" },
  { value: "United States", label: "United States", subtitle: "USCIS & State Dept / Section 214(b) INA", badge: "DS-160" },
  { value: "United Kingdom", label: "United Kingdom", subtitle: "UKVI Points-Based Immigration", badge: "UKVI" },
  { value: "Australia", label: "Australia", subtitle: "Home Affairs / Genuine Student (GS) Standard", badge: "GS / GTE" },
  { value: "Germany", label: "Germany / Schengen", subtitle: "Federal Foreign Office Consular Standard", badge: "Schengen" },
  { value: "Ireland", label: "Ireland", subtitle: "Irish Immigration Service Delivery (ISD)", badge: "ISD" },
  { value: "New Zealand", label: "New Zealand", subtitle: "Immigration New Zealand (INZ)", badge: "INZ" }
];

const SOP_PURPOSE_OPTIONS: SelectOption[] = [
  { value: "Student Visa / Study Permit", label: "Student Visa / Study Permit", subtitle: "Academic justification & return career path" },
  { value: "Tourist / Visitor Visa", label: "Tourist / Visitor Visa", subtitle: "Temporary leisure & travel itinerary details" },
  { value: "Work Permit / Skilled Employment", label: "Work Permit / Skilled Employment", subtitle: "Employer sponsorship & specialized expertise" },
  { value: "Business Visitor Visa", label: "Business Visitor Visa", subtitle: "Corporate meetings, trade deals, and conferences" },
  { value: "Conference / Seminar Visa", label: "Conference / Event Visa", subtitle: "Academic presentation or corporate summit" }
];

function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML
    .replace(/[`*_{}[\]()#+\-.!]/g, '') // Remove markdown
    .slice(0, 500); // Max 500 chars
}

export function SOPGenerator() {
  const [formData, setFormData] = useState({
    applicantName: '',
    targetCountry: '',
    purpose: '',
    institution: '',
    duration: '',
    financial: '',
    ties: ''
  });

  const [loading, setLoading] = useState(false);
  const [generatedSop, setGeneratedSop] = useState<string>('');
  const [highlights, setHighlights] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [disclaimer, setDisclaimer] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.applicantName.trim()) {
      setErrorMsg('Please enter your full name as shown on your passport.');
      return;
    }
    if (!formData.targetCountry) {
      setErrorMsg('Please select your destination country.');
      return;
    }
    if (!formData.purpose) {
      setErrorMsg('Please select your visa category and purpose.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const sanitizedPayload = {
        applicantName: sanitizeInput(formData.applicantName),
        targetCountry: sanitizeInput(formData.targetCountry),
        purpose: sanitizeInput(formData.purpose),
        institution: sanitizeInput(formData.institution),
        duration: sanitizeInput(formData.duration),
        financial: sanitizeInput(formData.financial),
        ties: sanitizeInput(formData.ties),
      };

      const res = await fetch('/api/tools/sop-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedPayload)
      });
      const data = await res.json();
      if (data.success) {
        setGeneratedSop(data.sop);
        setHighlights(data.keyHighlights || []);
        setSources(data.sources || []);
        setDisclaimer(data.disclaimer || '');
      } else {
        setErrorMsg(data.error || 'Failed to generate Statement of Purpose.');
      }
    } catch (err: any) {
      setErrorMsg('Network error connecting to SOP engine. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!generatedSop) return;
    navigator.clipboard.writeText(generatedSop);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedSop) return;
    const blob = new Blob([generatedSop], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SOP_${formData.applicantName.replace(/\s+/g, '_')}_${formData.targetCountry}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const wordCount = generatedSop ? generatedSop.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-200">
          <Sparkles className="w-3.5 h-3.5 text-[#00a896]" />
          <span>Consular-Compliant AI Drafting Engine</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          AI Statement of Purpose (SOP) &amp; Cover Letter Generator
        </h1>
        <p className="text-slate-600 text-sm lg:text-base mt-2">
          Generate an embassy-grade cover letter or SOP structured to address consular scrutiny, funding clarity, and ties to your home country.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input Form */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#00a896]" />
            Application Parameters
          </h2>

          <form onSubmit={handleGenerate} className="space-y-4">
            {/* Applicant Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Full Name (As on Passport) *
              </label>
              <input
                type="text"
                placeholder="e.g. Johnathan Doe"
                value={formData.applicantName}
                onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-[#00a896] outline-none text-sm"
                required
              />
            </div>

            {/* Target Country */}
            <CustomSelect
              label="Destination Country *"
              value={formData.targetCountry}
              onChange={(val) => setFormData({ ...formData, targetCountry: val })}
              options={SOP_COUNTRY_OPTIONS}
              placeholder="Select destination country..."
            />

            {/* Visa Purpose */}
            <CustomSelect
              label="Visa Category & Purpose *"
              value={formData.purpose}
              onChange={(val) => setFormData({ ...formData, purpose: val })}
              options={SOP_PURPOSE_OPTIONS}
              placeholder="Select visa purpose..."
            />

            {/* Target Institution / Organization */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Target Institution, Employer or Itinerary
              </label>
              <input
                type="text"
                placeholder="e.g. University of British Columbia / Tech Corp / Tour itinerary"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-[#00a896] outline-none text-sm"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Planned Duration of Stay
              </label>
              <input
                type="text"
                placeholder="e.g. 2 Years, 14 Days, 1 Year"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-[#00a896] outline-none text-sm"
              />
            </div>

            {/* Financial Backing */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Financial Backing &amp; Sponsorship Details
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Self-funded savings, father sponsorship with bank statements & property valuation"
                value={formData.financial}
                onChange={(e) => setFormData({ ...formData, financial: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-normal focus:ring-2 focus:ring-[#00a896] outline-none text-xs"
              />
            </div>

            {/* Ties to Home Country */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Ties to Home Country (Non-Immigrant Intent)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Elderly parents, family business, ancestral land, job offer awaiting return"
                value={formData.ties}
                onChange={(e) => setFormData({ ...formData, ties: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-normal focus:ring-2 focus:ring-[#00a896] outline-none text-xs"
              />
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00a896] hover:bg-[#009282] active:scale-95 text-white font-bold text-sm shadow-md transition-all duration-150 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating Embassy SOP...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Statement of Purpose</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Generated SOP Preview & Editor */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900">Consular SOP Output</h2>
              <p className="text-xs text-slate-500">
                Word Count: <span className="font-bold text-slate-800">{wordCount}</span> words
              </p>
            </div>

            {generatedSop && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt</span>
                </button>
              </div>
            )}
          </div>

          {generatedSop ? (
            <div className="space-y-5">
              {/* Editable Textarea */}
              <div className="relative">
                <textarea
                  rows={16}
                  value={generatedSop}
                  onChange={(e) => setGeneratedSop(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs sm:text-sm font-sans leading-relaxed focus:bg-white focus:ring-2 focus:ring-[#00a896] outline-none transition-all resize-y"
                />
              </div>

              {/* Highlights */}
              {highlights.length > 0 && (
                <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-100 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00a896]" />
                    Key Consular Scrutiny Safeguards
                  </div>
                  <ul className="space-y-1 text-xs text-teal-950">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00a896] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sources */}
              {sources.length > 0 && (
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    Regulatory References
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {sources.join(' • ')}
                  </p>
                </div>
              )}

              {/* Disclaimer */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                <strong className="text-slate-700">Consular Disclaimer:</strong> {disclaimer || 'Verify and update specific university names, course module codes, and actual financial amounts prior to submission.'}
              </div>
            </div>
          ) : (
            <div className="py-24 text-center border-2 border-dashed border-slate-200 rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">No SOP Generated Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Fill in your destination, funding, and home ties on the left and click Generate to produce a consular-compliant cover letter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
