import React from "react";
import {
    Plus,
    Briefcase,
    Edit2,
    Copy,
    ArrowRight,
    ExternalLink,
    Trash2,
    CheckCircle,
    Clock,
    Sparkles,
    Shield
} from "lucide-react";
import { VisaApplicationDetailsView } from "../../interactive/VisaApplicationDetailsView";
import { getCountryCode } from "../utils/countryHelpers";
import type { VisaApplicationCase, VaultDocItem } from "../types";

interface VisaApplicationsProps {
    visasProcessingState: VisaApplicationCase[];
    selectedApplicationId: string | null;
    setSelectedApplicationId: (id: string | null) => void;
    editingAppId: string | null;
    setEditingAppId: (id: string | null) => void;
    editingAppName: string;
    setEditingAppName: (name: string) => void;
    handleRenameApplication: (id: string, name: string) => Promise<void> | void;
    handleDeleteApplication: (id: string) => Promise<void> | void;
    handleCopyTrackingId: (trackingId: string) => void;
    copiedTrackingId: string | null;
    setShowNewAppModal: (show: boolean) => void;
    showToastMsg: (msg: string) => void;
    fullName: string;
    userDisplayName: string;
    setActiveTab: (tab: string) => void;
    readinessScore: number;
    documents: any[];
}

export const VisaApplications: React.FC<VisaApplicationsProps> = ({
    visasProcessingState,
    selectedApplicationId,
    setSelectedApplicationId,
    editingAppId,
    setEditingAppId,
    editingAppName,
    setEditingAppName,
    handleRenameApplication,
    handleDeleteApplication,
    handleCopyTrackingId,
    copiedTrackingId,
    setShowNewAppModal,
    showToastMsg,
    fullName,
    userDisplayName,
    setActiveTab,
    readinessScore,
    documents
}) => {
    if (selectedApplicationId) {
        return (
            <VisaApplicationDetailsView
                application={visasProcessingState.find(c => c.id === selectedApplicationId) || visasProcessingState[0] || ({} as any)}
                applicantName={fullName || userDisplayName || 'Applicant'}
                onBack={() => setSelectedApplicationId(null)}
                onOpenChat={() => setActiveTab('consultations')}
                onOpenVault={() => {
                    setSelectedApplicationId(null);
                    setActiveTab('scanned-documents');
                }}
                readinessScore={readinessScore}
                vaultDocuments={documents as any}
            />
        );
    }

    return (
        <div className="space-y-6 animate-fade-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-black text-slate-900">Visa Applications ({visasProcessingState.length})</h2>
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                        Real-time status, timeline milestones, and embassy filing tracker
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setShowNewAppModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-xs cursor-pointer bg-[#00a896] hover:bg-[#008f80] active:scale-95 text-white"
                >
                    <Plus className="w-4 h-4" />
                    <span>Start New Application</span>
                </button>
            </div>

            {visasProcessingState.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-200/80 p-10 text-center space-y-4 shadow-sm">
                    <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
                    <h3 className="text-base font-black text-slate-900">No Active Visa Applications Found</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                        You haven't submitted any visa dossiers yet. Explore official visa requirements or create a new visa case.
                    </p>
                    <button
                        type="button"
                        onClick={() => setShowNewAppModal(true)}
                        className="inline-block bg-[#00a896] hover:bg-[#009282] active:bg-[#007f71] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all"
                    >
                        + Create New Visa Application
                    </button>
                </div>
            ) : (
                <div className="space-y-5">
                    {visasProcessingState.map((cItem, idx) => {
                        const isEditingThis = editingAppId === cItem.id;
                        const appDisplayName = cItem.customName || `${cItem.destination || 'Destination'} • ${cItem.visaType || 'Standard Visa'}`;
                        const createdDateStr = cItem.createdAt 
                            ? (new Date(cItem.createdAt).toString() !== 'Invalid Date' 
                                ? new Date(cItem.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                                : cItem.createdAt)
                            : (cItem.submittedAt && cItem.submittedAt !== 'Active' && cItem.submittedAt !== 'Recently' 
                                ? cItem.submittedAt 
                                : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
                        const targetDecisionStr = (cItem.targetDate || '15 to 30 Working Days')
                            .replace(/calendar\s*days/gi, 'Working Days')
                            .replace(/calender\s*days/gi, 'Working Days');
                        const resumeUrl = cItem.destination 
                            ? `/visa/${encodeURIComponent(cItem.destination.toLowerCase().replace(/\s+/g, '-'))}?purpose=${encodeURIComponent(cItem.purpose || 'tourism')}&passport=${encodeURIComponent(cItem.passport || 'India')}` 
                            : '/';

                        return (
                            <div 
                                key={cItem.id || idx} 
                                onClick={() => setSelectedApplicationId(cItem.id)}
                                className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-6 lg:p-7 shadow-2xs space-y-4 hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group"
                            >
                                {/* Case Header: Flag, Title, Rename, Status, Delete */}
                                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                                    <div className="flex items-start gap-3 min-w-0 flex-1">
                                        <div className="w-10 h-7 rounded-md overflow-hidden border border-slate-200/80 shadow-2xs shrink-0 bg-slate-100 flex items-center justify-center mt-0.5">
                                            <img
                                                src={`https://flagcdn.com/w80/${getCountryCode(cItem.destination)}.png`}
                                                alt={cItem.destination}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.currentTarget as HTMLImageElement).src = 'https://flagcdn.com/w80/un.png';
                                                }}
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1 space-y-1">
                                            {isEditingThis ? (
                                                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                                    <input
                                                        type="text"
                                                        value={editingAppName}
                                                        onChange={(e) => setEditingAppName(e.target.value)}
                                                        placeholder="e.g. Dubai Summer Trip"
                                                        className="px-3 py-1 text-sm font-black text-slate-900 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-slate-900 w-full"
                                                        autoFocus
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRenameApplication(cItem.id, editingAppName)}
                                                        className="px-2.5 py-1 bg-[#00a896] text-white text-xs font-bold rounded-lg hover:bg-[#009282] cursor-pointer shrink-0"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditingAppId(null)}
                                                        className="px-2 py-1 text-slate-500 hover:text-slate-800 text-xs font-bold cursor-pointer shrink-0"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-teal-700 transition-colors leading-snug break-words">
                                                            {appDisplayName}
                                                        </h3>
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setEditingAppId(cItem.id);
                                                                setEditingAppName(appDisplayName);
                                                            }}
                                                            className="p-1 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                                                            title="Rename Application"
                                                        >
                                                            <Edit2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-wrap pt-0.5 text-xs text-slate-500">
                                                        <span className="bg-emerald-50 text-[#00A86B] text-[10px] font-black px-2 py-0.5 rounded-md border border-emerald-200">
                                                            {(cItem.status || 'Active').replace(/Dossier Ingested/gi, 'Required Documents')}
                                                        </span>
                                                        <span>•</span>
                                                        <span>Passport: <strong className="text-slate-700">{cItem.passport || 'Indian'}</strong></span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Top Right: Delete Button */}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteApplication(cItem.id);
                                        }}
                                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer shrink-0"
                                        title="Delete Application"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Tracking ID Strip with One-Click Copy */}
                                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/70 text-xs">
                                    <div className="flex items-center gap-2 min-w-0">
                                        <span className="text-slate-500 font-medium shrink-0">Tracking ID:</span>
                                        <strong className="text-slate-900 font-mono font-bold truncate">{cItem.trackingId || 'TT-APP-2026-9824'}</strong>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCopyTrackingId(cItem.trackingId || 'TT-APP-2026-9824');
                                        }}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-[11px] shadow-2xs transition-all cursor-pointer shrink-0 active:scale-95"
                                        title="Copy Tracking ID"
                                    >
                                        <Copy className="w-3 h-3 text-slate-500" />
                                        <span>{copiedTrackingId === cItem.trackingId ? 'Copied ✓' : 'Copy'}</span>
                                    </button>
                                </div>

                                {/* Action Buttons Row: View Details & Resume Application */}
                                <div className="flex items-center gap-2 sm:gap-3" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedApplicationId(cItem.id)}
                                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#00a896] hover:bg-[#009282] active:bg-[#007f71] text-white text-xs font-black transition-all inline-flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                                    >
                                        <span>View Details</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                    <a
                                        href={resumeUrl}
                                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black transition-all inline-flex items-center justify-center gap-1.5 shadow-xs"
                                        title="Resume Visa Application"
                                    >
                                        <span>Resume Application</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>

                                {/* 5-Step Visual Timeline Progress */}
                                <div className="space-y-2 pt-1">
                                    <div className="flex justify-between items-center text-xs font-bold text-slate-800 gap-2">
                                        <span>Application Pipeline Progress:</span>
                                        <span className="text-slate-900 font-black text-right truncate">{cItem.stage || 'Requirements & Document Collection'} ({cItem.progress || 10}%)</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-slate-900 rounded-full transition-all duration-500 shadow-2xs"
                                            style={{ width: `${cItem.progress || 10}%` }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 text-[10px] font-bold text-slate-500">
                                        <div className={`flex items-center gap-1 ${(cItem.progress || 10) >= 20 ? 'text-slate-950 font-black' : 'text-indigo-600 font-bold'}`}>
                                            {(cItem.progress || 10) >= 20 ? <CheckCircle className="w-3.5 h-3.5 text-slate-900 shrink-0" /> : <Clock className="w-3.5 h-3.5 text-indigo-600 shrink-0" />} 1. Required Documents
                                        </div>
                                        <div className={`flex items-center gap-1 ${(cItem.progress || 10) >= 40 ? 'text-slate-950 font-black' : (cItem.progress || 10) >= 20 ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}>
                                            {(cItem.progress || 10) >= 40 ? <Sparkles className="w-3.5 h-3.5 text-slate-900 shrink-0" /> : <Clock className="w-3.5 h-3.5 shrink-0" />} 2. AI Quality Audit
                                        </div>
                                        <div className={`flex items-center gap-1 ${(cItem.progress || 10) >= 60 ? 'text-slate-950 font-black' : 'text-slate-400'}`}>
                                            {(cItem.progress || 10) >= 60 ? <CheckCircle className="w-3.5 h-3.5 text-slate-900 shrink-0" /> : <Clock className="w-3.5 h-3.5 shrink-0" />} 3. Consular Form Filing
                                        </div>
                                        <div className={`flex items-center gap-1 ${(cItem.progress || 10) >= 80 ? 'text-slate-950 font-black' : 'text-slate-400'}`}>
                                            {(cItem.progress || 10) >= 80 ? <CheckCircle className="w-3.5 h-3.5 text-slate-900 shrink-0" /> : <Clock className="w-3.5 h-3.5 shrink-0" />} 4. Biometrics Slot
                                        </div>
                                        <div className={`flex items-center gap-1 col-span-2 sm:col-span-1 ${(cItem.progress || 10) >= 95 ? 'text-emerald-700 font-black' : 'text-slate-400'}`}>
                                            <Shield className="w-3.5 h-3.5 shrink-0" /> 5. Visa Stamped
                                        </div>
                                    </div>
                                </div>

                                {/* Key Case Specs: Vault Docs, Created On, Target Decision */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                                    <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-between sm:flex-col sm:items-start">
                                        <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Vault Documents</span>
                                        <strong className="text-xs sm:text-sm font-black text-slate-900 mt-0 sm:mt-1">{cItem.documentsCount ?? documents.filter(d => d.isUploaded || d.isRealUpload).length} Files OCR Verified</strong>
                                    </div>
                                    <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-between sm:flex-col sm:items-start">
                                        <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Created On</span>
                                        <strong className="text-xs sm:text-sm font-black text-slate-900 mt-0 sm:mt-1">{createdDateStr}</strong>
                                    </div>
                                    <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-between sm:flex-col sm:items-start">
                                        <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Target Decision</span>
                                        <strong className="text-xs sm:text-sm font-black text-slate-900 mt-0 sm:mt-1">{targetDecisionStr}</strong>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
export default VisaApplications;
