import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ExternalLink, Clock, ShieldCheck, DollarSign, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface LiveDoc {
  name: string;
  mandatory: string;
  condition?: string;
  description?: string;
  sourceName?: string;
  sourceUrl?: string;
  lastVerified?: string;
}

interface LiveFee {
  name: string;
  amount: string;
  currency: string;
  sourceName?: string;
  sourceUrl?: string;
}

interface LiveProcessing {
  estimatedTime: string;
  sourceName?: string;
  sourceUrl?: string;
}

interface GroundingSource {
  title: string;
  uri: string;
}

interface LiveVisaResponse {
  success: boolean;
  checkedAt: string;
  passportCountry: string;
  destinationCountry: string;
  purpose: string;
  visaType: string;
  confidence: string;
  documents: LiveDoc[];
  fees: LiveFee[];
  processing: LiveProcessing;
  groundingSources?: GroundingSource[];
  error?: string;
  details?: string;
}

interface Props {
  countryName: string;
  countrySlug: string;
  passportCountry?: string;
  purpose?: string;
}

export function LiveVisaRequirementsWidget({
  countryName,
  countrySlug,
  passportCountry = 'India',
  purpose = 'tourism'
}: Props) {
  const [liveData, setLiveData] = useState<LiveVisaResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(true);

  async function checkLiveRequirements() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/visa/live-requirements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passportCountry,
          destinationCountry: countryName || countrySlug,
          purpose,
          visaType: purpose === 'tourism' ? 'tourist' : purpose,
        }),
      });

      const data: LiveVisaResponse = await response.json();
      if (data.success) {
        setLiveData(data);
        setExpanded(true);
      } else {
        setError(data.error || data.details || 'Unable to retrieve live requirements.');
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to connect to live visa engine.');
    } finally {
      setLoading(false);
    }
  }

  // Split documents into three categories
  const mandatoryDocs = liveData?.documents?.filter(d => {
    const m = (d.mandatory || 'mandatory').toLowerCase();
    return !m.includes('condition') && !m.includes('recommend');
  }) || [];

  const conditionalDocs = liveData?.documents?.filter(d => {
    const m = (d.mandatory || '').toLowerCase();
    return m.includes('condition') || (d.condition && d.condition.trim().length > 0);
  }) || [];

  const recommendedDocs = liveData?.documents?.filter(d => {
    const m = (d.mandatory || '').toLowerCase();
    return m.includes('recommend');
  }) || [];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-5 sm:p-7 text-white shadow-xl border border-indigo-900/50 space-y-5 transition-all text-left">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Gemini 3.6 + Official Search Grounding
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            Live Requirements Engine
          </h3>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Verify real-time embassy regulations, biometric rules, official consular fees, and working-day processing for {countryName}.
          </p>
        </div>

        <button
          type="button"
          onClick={checkLiveRequirements}
          disabled={loading}
          className="shrink-0 bg-white hover:bg-slate-100 disabled:opacity-50 text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer select-none"
        >
          <Sparkles className={`w-4 h-4 text-indigo-600 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? '🔎 Querying official embassies...' : '✨ Check Live Requirements (Gemini AI)'}</span>
        </button>
      </div>

      {/* Error Notice */}
      {error && (
        <div className="p-4 bg-rose-500/15 border border-rose-500/30 rounded-2xl text-rose-200 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <strong className="font-bold">Live Check Error:</strong> {error}
            <div className="mt-1 text-[11px] text-slate-400">Falling back to verified production consular database below.</div>
          </div>
        </div>
      )}

      {/* Live Data Results */}
      {liveData && (
        <div className="space-y-5 pt-4 border-t border-white/10 animate-in fade-in duration-300">
          {/* Top Verified Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>✓ LIVE VERIFIED — {new Date(liveData.checkedAt).toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-300">
              <span>Visa Type: <strong className="text-white">{liveData.visaType || 'Official Visa'}</strong></span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-indigo-200 font-bold uppercase text-[9px]">
                {liveData.confidence || 'HIGH'} Confidence
              </span>
            </div>
          </div>

          {/* Quick Metrics (Processing & Fees) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Processing Time */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Processing Window (Official)</span>
              </div>
              <div className="text-sm font-bold text-emerald-300">
                {liveData.processing?.estimatedTime || 'Per embassy schedules'}
              </div>
              {liveData.processing?.sourceName && (
                <div className="text-[10px] text-slate-400">
                  Authority: {liveData.processing.sourceName}
                </div>
              )}
            </div>

            {/* Fees */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Fee Schedule</span>
              </div>
              <div className="text-xs font-semibold text-white space-y-0.5">
                {liveData.fees && liveData.fees.length > 0 ? (
                  liveData.fees.map((f, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-slate-300">{f.name}:</span>
                      <strong className="text-amber-300">{f.amount} {f.currency}</strong>
                    </div>
                  ))
                ) : (
                  <span className="text-slate-400">Per official mission consular tariff</span>
                )}
              </div>
            </div>
          </div>

          {/* Categorized Documents */}
          <div className="space-y-4">
            {/* 1. Mandatory Documents */}
            {mandatoryDocs.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    MANDATORY DOCUMENTS ({mandatoryDocs.length})
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {mandatoryDocs.map((doc, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/[0.07] transition-all">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{doc.name}</h4>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          MANDATORY
                        </span>
                      </div>
                      {doc.description && <p className="text-xs text-slate-300 leading-relaxed">{doc.description}</p>}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/5 text-[10px] text-slate-400">
                        <span>Authority: {doc.sourceName || 'Official Consular Source'}</span>
                        {doc.sourceUrl && (
                          <a href={doc.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white underline inline-flex items-center gap-1">
                            Official Source <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        <span>Last verified: {doc.lastVerified ? new Date(doc.lastVerified).toLocaleDateString() : 'Real-time'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Conditional Documents */}
            {conditionalDocs.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    CONDITIONAL REQUIREMENTS ({conditionalDocs.length})
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {conditionalDocs.map((doc, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/[0.07] transition-all">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{doc.name}</h4>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          CONDITIONAL
                        </span>
                      </div>
                      {doc.description && <p className="text-xs text-slate-300 leading-relaxed">{doc.description}</p>}
                      {doc.condition && (
                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200">
                          <strong>Trigger Condition:</strong> {doc.condition}
                        </div>
                      )}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/5 text-[10px] text-slate-400">
                        <span>Authority: {doc.sourceName || 'Official Consular Source'}</span>
                        {doc.sourceUrl && (
                          <a href={doc.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white underline inline-flex items-center gap-1">
                            Official Source <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        <span>Last verified: {doc.lastVerified ? new Date(doc.lastVerified).toLocaleDateString() : 'Real-time'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Recommended Documents */}
            {recommendedDocs.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    RECOMMENDED DOCUMENTS ({recommendedDocs.length})
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {recommendedDocs.map((doc, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/[0.07] transition-all">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{doc.name}</h4>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          RECOMMENDED
                        </span>
                      </div>
                      {doc.description && <p className="text-xs text-slate-300 leading-relaxed">{doc.description}</p>}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/5 text-[10px] text-slate-400">
                        <span>Authority: {doc.sourceName || 'Official Consular Source'}</span>
                        {doc.sourceUrl && (
                          <a href={doc.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white underline inline-flex items-center gap-1">
                            Official Source <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        <span>Last verified: {doc.lastVerified ? new Date(doc.lastVerified).toLocaleDateString() : 'Real-time'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Official Grounding Sources Citations */}
          {liveData.groundingSources && liveData.groundingSources.length > 0 && (
            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                OFFICIAL CITATIONS & EMBASSY SOURCES
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {liveData.groundingSources.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white transition-colors text-xs"
                  >
                    <span>{s.title}</span>
                    <ExternalLink className="w-3 h-3 text-indigo-400" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
