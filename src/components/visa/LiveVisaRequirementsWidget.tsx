import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ExternalLink, Clock, ShieldCheck, DollarSign, FileText, ChevronDown, ChevronUp, Globe, ListOrdered, ShieldAlert } from 'lucide-react';

interface LiveDoc {
  key?: string;
  title?: string;
  name?: string;
  description?: string;
  icon?: string;
  mandatory: boolean | string;
  condition?: string;
  conditions?: string[];
  sourceName?: string;
  sourceUrl?: string;
  lastVerified?: string;
}

interface LiveStep {
  step: number;
  title: string;
  description: string;
}

interface LiveSource {
  name: string;
  url: string;
  lastVerified?: string;
}

interface LiveVisaResponse {
  success: boolean;
  checkedAt: string;
  country?: string;
  fromCountry?: string;
  visaCategory?: string;
  authority?: string;
  channels?: string[];
  processingTime?: {
    eVisa?: string;
    standardSticker?: string;
    expressSticker?: string;
  };
  fees?: {
    eVisaTotal?: string;
    stickerConsularStandard?: string;
    vfsServiceFee?: string;
  };
  eVisa?: {
    available?: boolean;
    portal?: string;
    territorialScope?: string;
    validity?: string;
    maxStay?: string;
    invitationRequired?: boolean;
    processing?: string;
  };
  stayDuration?: {
    eVisa?: string;
    stickerSingleDouble?: string;
    stickerMultiple?: string;
  };
  entryType?: string;
  documents?: LiveDoc[];
  steps?: LiveStep[];
  specialRequirements?: {
    entry_rules?: string;
  };
  sources?: LiveSource[];
  confidence?: string;
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
      } else {
        setError(data.error || data.details || 'Unable to retrieve live requirements.');
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to connect to live visa engine.');
    } finally {
      setLoading(false);
    }
  }

  // Split documents into categories
  const mandatoryDocs = liveData?.documents?.filter(d => {
    if (typeof d.mandatory === 'boolean') return d.mandatory;
    const m = (d.mandatory || '').toLowerCase();
    return !m.includes('condition') && !m.includes('recommend') && !m.includes('false');
  }) || [];

  const conditionalDocs = liveData?.documents?.filter(d => {
    if (d.condition && d.condition.trim().length > 0) return true;
    if (typeof d.mandatory === 'string') {
      return d.mandatory.toLowerCase().includes('condition');
    }
    return false;
  }) || [];

  const recommendedDocs = liveData?.documents?.filter(d => {
    if (typeof d.mandatory === 'boolean') return !d.mandatory && !d.condition;
    const m = (d.mandatory || '').toLowerCase();
    return m.includes('recommend') || m.includes('false') || m.includes('optional');
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
        <div className="space-y-6 pt-4 border-t border-white/10 animate-in fade-in duration-300">
          {/* Top Verified Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>✓ LIVE VERIFIED — {new Date(liveData.checkedAt).toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-300">
              <span>Category: <strong className="text-white">{liveData.visaCategory || 'Tourist Visa'}</strong></span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-indigo-200 font-bold uppercase text-[9px]">
                {liveData.confidence || 'HIGH'} Confidence
              </span>
            </div>
          </div>

          {/* Authority & Channels */}
          {liveData.authority && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>Issuing Authority &amp; Channels</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                {liveData.authority}
              </div>
              {liveData.channels && liveData.channels.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {liveData.channels.map((ch, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/25 text-[11px] text-indigo-200">
                      {ch}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quick Metrics: Processing & Fees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Processing Time */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Processing Schedule</span>
              </div>
              <div className="space-y-1 text-xs">
                {liveData.processingTime?.eVisa && liveData.processingTime.eVisa !== 'N/A' && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">eVisa:</span>
                    <strong className="text-emerald-300 font-bold">{liveData.processingTime.eVisa}</strong>
                  </div>
                )}
                {liveData.processingTime?.standardSticker && liveData.processingTime.standardSticker !== 'N/A' && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Standard Sticker:</span>
                    <strong className="text-emerald-300 font-bold">{liveData.processingTime.standardSticker}</strong>
                  </div>
                )}
                {liveData.processingTime?.expressSticker && liveData.processingTime.expressSticker !== 'N/A' && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Express:</span>
                    <strong className="text-emerald-300 font-bold">{liveData.processingTime.expressSticker}</strong>
                  </div>
                )}
                {liveData.eVisa?.validity && (
                  <div className="flex justify-between items-center pt-1 border-t border-white/5 text-[11px]">
                    <span className="text-slate-400">Validity:</span>
                    <span className="text-slate-200">{liveData.eVisa.validity}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Official Fee Schedule */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Fee Schedule</span>
              </div>
              <div className="space-y-1 text-xs">
                {liveData.fees?.eVisaTotal && liveData.fees.eVisaTotal !== 'N/A' && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">eVisa Total:</span>
                    <strong className="text-amber-300 font-bold">{liveData.fees.eVisaTotal}</strong>
                  </div>
                )}
                {liveData.fees?.stickerConsularStandard && liveData.fees.stickerConsularStandard !== 'N/A' && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Consular Fee:</span>
                    <strong className="text-amber-300 font-bold">{liveData.fees.stickerConsularStandard}</strong>
                  </div>
                )}
                {liveData.fees?.vfsServiceFee && liveData.fees.vfsServiceFee !== 'N/A' && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Service Fee:</span>
                    <strong className="text-amber-300 font-bold">{liveData.fees.vfsServiceFee}</strong>
                  </div>
                )}
                {liveData.entryType && (
                  <div className="flex justify-between items-center pt-1 border-t border-white/5 text-[11px]">
                    <span className="text-slate-400">Entry Type:</span>
                    <span className="text-slate-200">{liveData.entryType}</span>
                  </div>
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
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug flex items-center gap-2">
                          <span>{doc.icon || '📘'}</span>
                          <span>{doc.title || doc.name}</span>
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          MANDATORY
                        </span>
                      </div>
                      {doc.description && <p className="text-xs text-slate-300 leading-relaxed pl-6">{doc.description}</p>}
                      {doc.conditions && doc.conditions.length > 0 && (
                        <div className="pl-6 space-y-1.5 pt-0.5">
                          <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
                            Validity &amp; Conditions ({doc.conditions.length}):
                          </div>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {doc.conditions.map((cond, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <span className="text-indigo-400 font-bold text-xs mt-0.5">•</span>
                                <span className="leading-relaxed">{cond}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {doc.sourceUrl && (
                        <div className="pl-6 pt-1">
                          <a
                            href={doc.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] text-indigo-300 hover:text-indigo-200"
                          >
                            <span>Source: {doc.sourceName || 'Official Source'}</span>
                            <ExternalLink className="w-3 h-3 text-indigo-400" />
                          </a>
                        </div>
                      )}
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
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug flex items-center gap-2">
                          <span>{doc.icon || '⚠️'}</span>
                          <span>{doc.title || doc.name}</span>
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          CONDITIONAL
                        </span>
                      </div>
                      {doc.description && <p className="text-xs text-slate-300 leading-relaxed pl-6">{doc.description}</p>}
                      {doc.condition && (
                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200">
                          <strong>Trigger Condition:</strong> {doc.condition}
                        </div>
                      )}
                      {doc.conditions && doc.conditions.length > 0 && (
                        <div className="pl-6 space-y-1.5 pt-0.5">
                          <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                            Conditions &amp; Rules ({doc.conditions.length}):
                          </div>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {doc.conditions.map((cond, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <span className="text-amber-400 font-bold text-xs mt-0.5">•</span>
                                <span className="leading-relaxed">{cond}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {doc.sourceUrl && (
                        <div className="pl-6 pt-1">
                          <a
                            href={doc.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] text-amber-300 hover:text-amber-200"
                          >
                            <span>Source: {doc.sourceName || 'Official Source'}</span>
                            <ExternalLink className="w-3 h-3 text-amber-400" />
                          </a>
                        </div>
                      )}
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
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug flex items-center gap-2">
                          <span>{doc.icon || '📄'}</span>
                          <span>{doc.title || doc.name}</span>
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          OPTIONAL
                        </span>
                      </div>
                      {doc.description && <p className="text-xs text-slate-300 leading-relaxed pl-6">{doc.description}</p>}
                      {doc.conditions && doc.conditions.length > 0 && (
                        <div className="pl-6 space-y-1.5 pt-0.5">
                          <div className="text-[10px] font-bold text-sky-300 uppercase tracking-wider">
                            Guidelines ({doc.conditions.length}):
                          </div>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {doc.conditions.map((cond, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <span className="text-sky-400 font-bold text-xs mt-0.5">•</span>
                                <span className="leading-relaxed">{cond}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {doc.sourceUrl && (
                        <div className="pl-6 pt-1">
                          <a
                            href={doc.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] text-sky-300 hover:text-sky-200"
                          >
                            <span>Source: {doc.sourceName || 'Official Source'}</span>
                            <ExternalLink className="w-3 h-3 text-sky-400" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Steps to Follow */}
          {liveData.steps && liveData.steps.length > 0 && (
            <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                <ListOrdered className="w-3.5 h-3.5 text-emerald-400" />
                <span>Application Steps</span>
              </div>
              <div className="space-y-2">
                {liveData.steps.map((st) => (
                  <div key={st.step} className="flex items-start gap-3 text-xs">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {st.step}
                    </span>
                    <div className="flex-1">
                      <span className="font-bold text-white">{st.title}: </span>
                      <span className="text-slate-300">{st.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Entry Rules / Biometrics */}
          {liveData.specialRequirements?.entry_rules && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                <span>Special Entry Directives</span>
              </div>
              <p className="text-slate-200 leading-relaxed">{liveData.specialRequirements.entry_rules}</p>
            </div>
          )}

          {/* Official Grounding Sources Citations */}
          {liveData.sources && liveData.sources.length > 0 && (
            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                OFFICIAL CITATIONS & EMBASSY SOURCES
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {liveData.sources.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white transition-colors text-xs"
                  >
                    <span>{s.name}</span>
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
