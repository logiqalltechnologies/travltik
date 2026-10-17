import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AuthModalPortalContent } from "./AuthModalPortal";
import { AuthProvider } from "../providers/auth-provider";

interface SignupFlowPortalProps {
    initialMode?: "selection" | "seeker" | "expert";
}

function SignupFlowPortalInner({ initialMode = "seeker" }: SignupFlowPortalProps) {
    const [mode, setMode] = useState<"selection" | "seeker" | "expert">(initialMode);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const roleParam = urlParams.get("role");
            if (roleParam === "seeker" || roleParam === "traveller") {
                setMode("seeker");
            } else if (roleParam === "expert" || roleParam === "service-provider") {
                window.location.href = "/signup/service-provider";
            } else if (roleParam === "selection") {
                setMode("selection");
            } else if (initialMode) {
                setMode(initialMode);
            }
        }
    }, [initialMode]);

    return (
        <div 
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    window.location.href = "/";
                }
            }}
            className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-md flex flex-col items-center justify-start sm:justify-center p-3 sm:p-6 font-sans overflow-y-auto selection:bg-[#00a896] selection:text-white"
        >
            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center my-auto py-4 font-sans">
                
                {/* Top Navigation Header */}
                <div className="w-full max-w-4xl flex items-center justify-between mb-4 px-1 shrink-0 gap-2 font-sans">
                    <a 
                        href="/" 
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 transition-all px-4 py-2 rounded-full border border-slate-200 shadow-sm shrink-0 hover:-translate-x-0.5"
                    >
                        <ArrowLeft className="w-4 h-4 text-emerald-600" /> 
                        <span><span className="hidden sm:inline">Back to </span>Home</span>
                    </a>

                    <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#430f7a] text-xs font-bold border border-slate-200 shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-[#00b070]"></span> Escrow Secured
                        </span>
                        <a href="/" className="shrink-0 flex items-center">
                            <img src="/logo.png?v=8" alt="TravlTik" className="h-7 sm:h-8 w-auto object-contain" />
                        </a>
                    </div>
                </div>

                {/* ========================================================================= */}
                {/* VIEW 1: ROLE SELECTION MODAL ("I want to join as") */}
                {/* ========================================================================= */}
                {mode === "selection" ? (
                    <div 
                        style={{ backgroundColor: '#ffffff' }}
                        className="text-slate-900 max-w-4xl w-[94vw] sm:w-full p-6 sm:p-9 text-center space-y-6 sm:space-y-7 relative my-auto bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[36px] shadow-2xl font-sans max-h-[88vh] overflow-y-auto ring-1 ring-slate-900/5"
                    >
                        
                        {/* Top-Right X Close Button */}
                        <button 
                            type="button"
                            onClick={() => window.location.href = "/"}
                            title="Close and return to homepage"
                            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer shadow-2xs border border-slate-200 z-30"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Site Logo */}
                        <div className="flex items-center justify-center pt-2 pb-1">
                            <img 
                                src="/logo.png?v=8" 
                                alt="TravlTik Logo" 
                                className="h-12 sm:h-14 md:h-16 max-h-[64px] w-auto object-contain transition-all duration-200" 
                            />
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1.5">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sora">
                                I want to join as
                            </h1>
                            <p className="text-xs sm:text-sm font-medium text-slate-500">
                                Select your role to get started with TravlTik
                            </p>
                        </div>

                        {/* Three Role Choice Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 py-2 items-stretch justify-center">
                            
                            {/* 1. Traveller Option (Green Theme: #00A86B) */}
                            <a 
                                href="/signup/traveller"
                                className="group flex flex-col items-center justify-between text-center cursor-pointer w-full bg-emerald-50/40 hover:bg-emerald-50/80 p-6 sm:p-7 rounded-3xl border-2 border-[#00A86B]/30 hover:border-[#00A86B] hover:shadow-xl hover:shadow-[#00A86B]/15 transition-all duration-200 hover:-translate-y-1 font-sans"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-2">
                                        <div className="absolute inset-[-6px] rounded-full border-2 border-[#00A86B]/30 animate-pulse" />
                                        <div className="w-20 h-20 rounded-full bg-[#00A86B] flex items-center justify-center shadow-lg shadow-[#00A86B]/30 group-hover:scale-105 transition-all duration-300 relative z-10 mx-auto">
                                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
                                                <circle cx="12" cy="8" r="3.5" fill="#ffffff" opacity="0.3" />
                                                <circle cx="12" cy="8" r="3.5" stroke="#ffffff" strokeWidth="2" fill="none" />
                                                <path d="M5 20c0-3 3.1-5.5 7-5.5s7 2.5 7 5.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
                                                <path d="M16 4l1.5 1.5L16 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5 5.5H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 className="mt-3 text-lg font-bold tracking-tight text-[#00A86B] font-sora transition-colors">
                                        Traveller
                                    </h2>
                                    <span className="text-xs text-slate-500 max-w-[210px] mt-1 mb-5 font-medium leading-relaxed">
                                        Find visas, self apply &amp; book verified experts
                                    </span>
                                </div>

                                <span 
                                    className="w-full bg-[#00A86B] group-hover:bg-[#00925c] text-white py-2.5 px-6 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                                >
                                    <span>Register</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                            {/* 2. Service Provider Option (Navy Blue Theme: #0c1a2e) */}
                            <a 
                                href="/signup/service-provider"
                                className="group flex flex-col items-center justify-between text-center cursor-pointer w-full bg-slate-50 hover:bg-slate-100/90 p-6 sm:p-7 rounded-3xl border-2 border-slate-200 hover:border-slate-800 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 font-sans"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-2">
                                        <div className="absolute inset-[-6px] rounded-full border-2 border-slate-300" />
                                        <div className="w-20 h-20 rounded-full bg-[#0c1a2e] flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 relative z-10 mx-auto">
                                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
                                                <rect x="5" y="2" width="14" height="20" rx="3" fill="#ffffff" opacity="0.2" />
                                                <rect x="5" y="2" width="14" height="20" rx="3" stroke="#ffffff" strokeWidth="2" fill="none" />
                                                <circle cx="12" cy="10" r="2.5" stroke="#ffffff" strokeWidth="2" fill="none" />
                                                <path d="M8.5 16c0-1.5 1.6-2.8 3.5-2.8s3.5 1.3 3.5 2.8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
                                                <circle cx="16" cy="5" r="0.9" fill="#ffffff" />
                                                <circle cx="16" cy="7.5" r="0.9" fill="#ffffff" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 className="mt-3 text-lg font-bold tracking-tight text-slate-900 font-sora group-hover:text-[#0c1a2e] transition-colors">
                                        Service Provider
                                    </h2>
                                    <span className="text-xs text-slate-500 max-w-[210px] mt-1 mb-5 font-medium leading-relaxed">
                                        Grow your global client consulting practice
                                    </span>
                                </div>

                                <span className="w-full bg-[#0c1a2e] group-hover:bg-slate-800 text-white py-2.5 px-6 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer">
                                    <span>Register</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                            {/* 3. Channel Partner Option (Royal Purple Theme: #420f79) */}
                            <a 
                                href="/channel-partner/register"
                                className="group flex flex-col items-center justify-between text-center cursor-pointer w-full bg-purple-50/40 hover:bg-purple-50/80 p-6 sm:p-7 rounded-3xl border-2 border-[#420f79]/25 hover:border-[#420f79] hover:shadow-xl hover:shadow-[#420f79]/15 transition-all duration-200 hover:-translate-y-1 font-sans"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-2">
                                        <div className="absolute inset-[-6px] rounded-full border-2 border-[#420f79]/30" />
                                        <div className="w-20 h-20 rounded-full bg-[#420f79] flex items-center justify-center shadow-lg shadow-[#420f79]/25 group-hover:scale-105 transition-all duration-300 relative z-10 mx-auto">
                                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                                <circle cx="9" cy="7" r="4" stroke="#ffffff" strokeWidth="2" fill="#ffffff" fillOpacity="0.2" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 className="mt-3 text-lg font-bold tracking-tight text-[#420f79] font-sora transition-colors">
                                        Channel Partner
                                    </h2>
                                    <span className="text-xs text-slate-500 max-w-[210px] mt-1 mb-5 font-medium leading-relaxed">
                                        Manage regional network, agents &amp; earn commissions
                                    </span>
                                </div>

                                <span className="w-full bg-[#420f79] group-hover:bg-[#340b61] text-white py-2.5 px-6 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-900/20 active:scale-95 cursor-pointer">
                                    <span>Register</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                        </div>

                        {/* Bottom Auth Links */}
                        <div className="text-xs font-medium text-slate-500 pt-4 border-t border-slate-100 font-sans flex flex-wrap items-center justify-center gap-3">
                            <span>Already a member? <a href="/login" className="text-[#00A86B] font-bold hover:underline">Log in</a></span>
                            <span className="text-slate-300">•</span>
                            <span>Channel Partner? <a href="/channel-partner/login" className="text-[#420f79] font-bold hover:underline">Partner Login</a></span>
                        </div>
                    </div>
                ) : (
                    /* ========================================================================= */
                    /* VIEW 2: SEEKER REGISTRATION MODAL FORM */
                    /* ========================================================================= */
                    <div className="w-full flex flex-col items-center font-sans">
                        <button 
                            type="button"
                            onClick={() => {
                                if (typeof window !== 'undefined' && window.location.pathname.includes('/traveller')) {
                                    window.location.href = '/signup';
                                } else {
                                    setMode("selection");
                                }
                            }} 
                            className="mb-3 text-xs font-bold text-slate-800 hover:text-slate-950 flex items-center gap-2 bg-white hover:bg-slate-50 px-4 py-2 rounded-full cursor-pointer border border-slate-200 shadow-sm font-sans"
                        >
                            &larr; Change Account Role
                        </button>
                        <AuthModalPortalContent defaultTab="signup" />
                    </div>
                )}

                {/* Sub-Modal Trust Guarantees */}
                <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-semibold text-white/90 flex-wrap drop-shadow-sm">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 100% Milestone Escrow Protected
                    </span>
                    <span className="hidden sm:inline text-white/50">•</span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified RCIC &amp; MARA Consultants
                    </span>
                    <span className="hidden sm:inline text-white/50">•</span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 256-Bit SSL Encrypted
                    </span>
                </div>

            </div>
        </div>
    );
}

export function SignupFlowPortal(props: SignupFlowPortalProps) {
    return (
        <AuthProvider>
            <SignupFlowPortalInner {...props} />
        </AuthProvider>
    );
}
