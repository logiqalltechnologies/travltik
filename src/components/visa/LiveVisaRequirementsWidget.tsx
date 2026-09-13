import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Clock,
  ShieldCheck,
  DollarSign,
  FileText,
  ChevronDown,
  ChevronUp,
  Globe,
  ListOrdered,
  ShieldAlert,
  Fingerprint,
  Landmark,
  AlertTriangle,
  RefreshCw,
} from 'lucide-react';

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

interface FeeItem {
  amount: string;
  currency: string;
  sourceName?: string;
  sourceUrl?: string;
  provider?: string;
}

interface BiometricsInfo {
  required: boolean;
  exempt: boolean;
  exemptionCondition?: string;
  location?: string;
  sourceName?: string;
  sourceUrl?: string;
}

interface FinancialRequirement {
  documentName: string;
  minimumBalance?: string;
  period?: string;
  bankSealRequired?: boolean;
  sourceName?: string;
  sourceUrl?: string;
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
    consularFee?: FeeItem;
    serviceFee?: FeeItem;
    total?: {
      amount: string;
      currency: string;
    };
  };
  biometrics?: BiometricsInfo;
  financialRequirements?: FinancialRequirement[];
  warnings?: string[];
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
  autoLoad?: boolean;
}

export function LiveVisaRequirementsWidget({
  countryName,
  countrySlug,
  passportCountry = 'India',
  purpose = 'tourism',
  autoLoad = true,
}: Props) {
  const [liveData, setLiveData] = useState<LiveVisaResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-load live requirements on mount or parameter changes
  useEffect(() => {
    if (autoLoad) {
      checkLiveRequirements();
    }
  }, [countrySlug, passportCountry, purpose]);

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
            Gemini 3.6 + Official Embassy Grounding
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            Live Requirements Engine
          </h3>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Real-time embassy cross-checks for consular fees, CVASC/VFS service fees, biometrics rules, and validity requirements for {countryName}.
          </p>
        </div>

        <button
          type="button"
          onClick={checkLiveRequirements}
          disabled={loading}
          className="shrink-0 bg-white hover:bg-slate-100 disabled:opacity-60 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer select-none"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-indigo-600 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? 'Cross-checking official sources...' : '↻ Re-check Live Requirements'}</span>
        </button>
      </div>

      {/* Loading Skeleton */}
      {loading && !liveData && (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3 animate-pulse">
          <div className="animate-spin w-8 h-8 border-3 border-indigo-400 border-t-transparent rounded-full mx-auto" />
          <p className="text-sm font-bold text-indigo-200">🔎 Cross-checking official embassy circulars and visa centers...</p>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Verifying separate consular fees, visa center service charges, fingerprint exemptions, and bank statement rules.
          </p>
        </div>
      )}

      {/* Error Notice */}
      {error && (
        <div className="p-4 bg-rose-500/15 border border-rose-500/30 rounded-2xl text-rose-200 text-xs flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <strong className="font-bold">Live Check Error:</strong> {error}
              <div className="mt-1 text-[11px] text-slate-400">Showing verified consular data below.</div>
            </div>
          </div>
          <button
            type="button"
            onClick={checkLiveRequirements}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white text-[11px] font-bold cursor-pointer"
          >
            Retry
          </button>
        </div>
      )}

      {/* Live Data Results */}
      {liveData && (
        <div className="space-y-5 pt-2 border-t border-white/10 animate-in fade-in duration-300">
          {/* Top Verified Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>✓ LIVE VERIFIED — {new Date(liveData.checkedAt).toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-300">
              <span>
                Category: <strong className="text-white">{liveData.visaCategory || 'Tourist Visa'}</strong>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-indigo-200 font-bold uppercase text-[9px]">
                {liveData.confidence || 'HIGH'} Confidence
              </span>
            </div>
          </div>

          {/* Warnings & Source Conflict Alert */}
          {liveData.warnings && liveData.warnings.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 space-y-1.5 text-xs text-amber-200">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Official Source Verification Advisory</span>
              </div>
              <ul className="space-y-1 pl-6 list-disc text-slate-200">
                {liveData.warnings.map((w, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Issuing Authority & Channels */}
          {liveData.authority && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>Issuing Authority &amp; Official Submission Channels</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">{liveData.authority}</div>
              {liveData.channels && liveData.channels.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {liveData.channels.map((ch, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/25 text-[11px] text-indigo-200"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Separate Official Fee Schedule (Consular vs Service vs Total) */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Official Fee Schedule (Separate Consular vs Service)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Consular Fee */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Consular Government Fee
                </span>
                <div className="text-sm sm:text-base font-extrabold text-amber-300">
                  {liveData.fees?.consularFee?.amount
                    ? `${liveData.fees.consularFee.currency} ${liveData.fees.consularFee.amount}`
                    : liveData.fees?.stickerConsularStandard || 'Standard Embassy Fee'}
                </div>
                {liveData.fees?.consularFee?.sourceUrl && (
                  <a
                    href={liveData.fees.consularFee.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1 pt-1"
                  >
                    <span>{liveData.fees.consularFee.sourceName || 'Embassy Circular'}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>

              {/* Service Fee (CVASC / VFS / BLS) */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Center Service Fee ({liveData.fees?.serviceFee?.provider || 'Visa Center'})
                </span>
                <div className="text-sm sm:text-base font-extrabold text-amber-300">
                  {liveData.fees?.serviceFee?.amount
                    ? `${liveData.fees.serviceFee.currency} ${liveData.fees.serviceFee.amount}`
                    : liveData.fees?.vfsServiceFee || 'Center Service Fee'}
                </div>
                {liveData.fees?.serviceFee?.sourceUrl && (
                  <a
                    href={liveData.fees.serviceFee.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1 pt-1"
                  >
                    <span>{liveData.fees.serviceFee.sourceName || 'Visa Center Portal'}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>

              {/* Total Estimated Fee */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Total Payable Fee
                </span>
                <div className="text-sm sm:text-base font-extrabold text-emerald-300">
                  {liveData.fees?.total?.amount
                    ? `${liveData.fees.total.currency} ${liveData.fees.total.amount}`
                    : liveData.fees?.eVisaTotal || 'Calculated at Submission'}
                </div>
                <span className="text-[10px] text-slate-400 block pt-1">
                  Excludes optional express / courier fees
                </span>
              </div>
            </div>
          </div>

          {/* Biometrics Directives & Exemption Rules */}
          {liveData.biometrics && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-indigo-300">
                  <Fingerprint className="w-4 h-4 text-indigo-400" />
                  <span>Biometrics &amp; Fingerprint Collection Rules</span>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                    liveData.biometrics.exempt
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : liveData.biometrics.required
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                  }`}
                >
                  {liveData.biometrics.exempt
                    ? 'EXEMPT / WAIVED'
                    : liveData.biometrics.required
                    ? 'REQUIRED'
                    : 'NOT REQUIRED'}
                </span>
              </div>
              {liveData.biometrics.exemptionCondition && (
                <div className="pl-6 space-y-1 text-slate-200">
                  <span className="font-bold text-white">Exemption Condition: </span>
                  <span className="leading-relaxed">{liveData.biometrics.exemptionCondition}</span>
                </div>
              )}
              {liveData.biometrics.location && (
                <div className="pl-6 text-[11px] text-slate-300">
                  <span className="font-bold text-white">Center Location: </span>
                  <span>{liveData.biometrics.location}</span>
                </div>
              )}
              {liveData.biometrics.sourceUrl && (
                <div className="pl-6 pt-1">
                  <a
                    href={liveData.biometrics.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-indigo-300 hover:text-indigo-200"
                  >
                    <span>Source: {liveData.biometrics.sourceName || 'Embassy Biometrics Directive'}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Financial Requirements & Bank Balance Specifications */}
          {liveData.financialRequirements && liveData.financialRequirements.length > 0 && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-emerald-300">
                <Landmark className="w-4 h-4 text-emerald-400" />
                <span>Financial Requirements &amp; Bank Balance Specifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6">
                {liveData.financialRequirements.map((fin, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <span className="font-bold text-white block text-sm">{fin.documentName}</span>
                    {fin.minimumBalance && (
                      <div className="text-slate-300">
                        <span className="text-slate-400">Minimum Balance: </span>
                        <strong className="text-amber-300">{fin.minimumBalance}</strong>
                      </div>
                    )}
                    {fin.period && (
                      <div className="text-slate-300">
                        <span className="text-slate-400">Statement Period: </span>
                        <strong className="text-white">{fin.period}</strong>
                      </div>
                    )}
                    {typeof fin.bankSealRequired === 'boolean' && (
                      <div className="text-[11px] text-slate-300">
                        <span className="text-slate-400">Bank Seal &amp; Sign: </span>
                        <strong className={fin.bankSealRequired ? 'text-amber-300' : 'text-slate-200'}>
                          {fin.bankSealRequired ? 'Mandatory (Original Branch Stamp)' : 'Not strictly required'}
                        </strong>
                      </div>
                    )}
                    {fin.sourceUrl && (
                      <div className="pt-1">
                        <a
                          href={fin.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-indigo-300 hover:text-indigo-200"
                        >
                          <span>Source: {fin.sourceName || 'Official Embassy Checklist'}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Processing Schedule & Working Days */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Processing Schedule (Working Days)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              {liveData.processingTime?.standardSticker && liveData.processingTime.standardSticker !== 'N/A' && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold block">Standard Processing</span>
                  <strong className="text-emerald-300 text-sm block">{liveData.processingTime.standardSticker}</strong>
                </div>
              )}
              {liveData.processingTime?.expressSticker && liveData.processingTime.expressSticker !== 'N/A' && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold block">Express Processing</span>
                  <strong className="text-emerald-300 text-sm block">{liveData.processingTime.expressSticker}</strong>
                </div>
              )}
              {liveData.processingTime?.eVisa && liveData.processingTime.eVisa !== 'N/A' && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold block">eVisa Processing</span>
                  <strong className="text-emerald-300 text-sm block">{liveData.processingTime.eVisa}</strong>
                </div>
              )}
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
