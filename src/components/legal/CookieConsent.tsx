// src/components/legal/CookieConsent.tsx
import React, { useState, useEffect } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [performanceCookies, setPerformanceCookies] = useState(true);
  const [personalizedCookies, setPersonalizedCookies] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        // Small delay for natural entrance after page loads
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie_consent', 'accepted_all');
      localStorage.setItem(
        'cookie_preferences',
        JSON.stringify({
          essential: true,
          performance: true,
          personalized: true,
          date: new Date().toISOString(),
        })
      );
    }
    setVisible(false);
  };

  const handleRejectNonEssential = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie_consent', 'essential_only');
      localStorage.setItem(
        'cookie_preferences',
        JSON.stringify({
          essential: true,
          performance: false,
          personalized: false,
          date: new Date().toISOString(),
        })
      );
    }
    setVisible(false);
  };

  const handleSaveCustom = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie_consent', 'custom');
      localStorage.setItem(
        'cookie_preferences',
        JSON.stringify({
          essential: true,
          performance: performanceCookies,
          personalized: personalizedCookies,
          date: new Date().toISOString(),
        })
      );
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie & Privacy Consent"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 left-4 sm:left-auto z-[999999] max-w-[430px] w-auto bg-white/98 backdrop-blur-xl text-slate-900 p-5 rounded-2xl border border-slate-200/90 shadow-[0_24px_55px_-12px_rgba(27,18,51,0.22),0_0_1px_1px_rgba(27,18,51,0.06)] transition-all animate-in fade-in slide-in-from-bottom-5 duration-300 font-sans"
    >
      {/* Top Row: Icon + Title + DPDP/GDPR Badge + Close Button */}
      <div className="flex items-start gap-3.5">
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#370c63]/10 via-[#370c63]/5 to-[#00b070]/10 border border-[#370c63]/15 flex items-center justify-center shrink-0 shadow-xs">
          <svg className="w-5 h-5 text-[#370c63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          {/* Active status ping */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </div>

        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-[13px] font-extrabold uppercase tracking-wide text-slate-900 flex items-center gap-1.5">
              <span>Privacy &amp; Security</span>
            </h3>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              DPDP / GDPR
            </span>
          </div>
          <p className="text-[12px] text-slate-600 mt-1.5 leading-relaxed">
            TravlTik uses essential technical cookies for authenticated logins, bank-grade escrow milestone verification, and fraud prevention under India&apos;s DPDP Act &amp; EU GDPR.
          </p>
        </div>

        {/* Quick Close Button */}
        <button
          onClick={handleRejectNonEssential}
          aria-label="Dismiss cookie notice"
          className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1 rounded-lg transition-colors shrink-0 -mr-1 -mt-1 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Expandable Preferences Section */}
      {showPreferences && (
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col gap-2.5 bg-slate-50/80 p-3 rounded-xl border">
          {/* 1. Essential */}
          <div className="flex items-center justify-between gap-3 text-xs">
            <div className="flex-1">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <span>Essential &amp; Escrow Security</span>
                <span className="text-[9px] uppercase px-1.5 py-0.2 rounded font-extrabold bg-slate-200 text-slate-700">Always Active</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Required for user sessions, CSRF safety, and Razorpay/Stripe escrow holds.</p>
            </div>
            <div className="w-9 h-5 bg-emerald-500 rounded-full flex items-center justify-end px-1 opacity-90 cursor-not-allowed">
              <div className="w-3.5 h-3.5 bg-white rounded-full shadow-xs"></div>
            </div>
          </div>

          {/* 2. Performance & Speed */}
          <div className="flex items-center justify-between gap-3 text-xs pt-2 border-t border-slate-200/60">
            <div className="flex-1">
              <div className="font-bold text-slate-800">Performance &amp; Fast Search</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Remembers your destination filters and speeds up route caching.</p>
            </div>
            <button
              type="button"
              onClick={() => setPerformanceCookies(!performanceCookies)}
              className={`w-9 h-5 rounded-full transition-colors flex items-center px-1 cursor-pointer ${
                performanceCookies ? 'bg-[#370c63] justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-3.5 h-3.5 bg-white rounded-full shadow-xs"></div>
            </button>
          </div>

          {/* 3. Personalized Guidance */}
          <div className="flex items-center justify-between gap-3 text-xs pt-2 border-t border-slate-200/60">
            <div className="flex-1">
              <div className="font-bold text-slate-800">Personalized Visa Recommendations</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Tailors suggested consultants and tour alerts for your citizenship.</p>
            </div>
            <button
              type="button"
              onClick={() => setPersonalizedCookies(!personalizedCookies)}
              className={`w-9 h-5 rounded-full transition-colors flex items-center px-1 cursor-pointer ${
                personalizedCookies ? 'bg-[#370c63] justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-3.5 h-3.5 bg-white rounded-full shadow-xs"></div>
            </button>
          </div>
        </div>
      )}

      {/* Trust & Policy link row */}
      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
        <button
          type="button"
          onClick={() => setShowPreferences(!showPreferences)}
          className="text-slate-600 hover:text-[#370c63] font-semibold underline underline-offset-2 flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>{showPreferences ? 'Hide Preferences' : 'Manage Preferences'}</span>
          <svg className={`w-3 h-3 transition-transform ${showPreferences ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <span className="flex items-center gap-1.5 text-slate-400">
          <a href="/privacy" className="hover:text-slate-700 underline underline-offset-2">Privacy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-slate-700 underline underline-offset-2">Terms</a>
        </span>
      </div>

      {/* Action Buttons Row */}
      <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
        {showPreferences ? (
          <>
            <button
              type="button"
              onClick={handleSaveCustom}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200/80 cursor-pointer"
            >
              Save Preferences
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#370c63] to-[#130c3a] hover:opacity-95 rounded-xl transition-all shadow-md shadow-[#370c63]/20 cursor-pointer"
            >
              Accept All
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all border border-slate-200/80 cursor-pointer"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#370c63] via-[#2d0950] to-[#130c3a] hover:opacity-95 rounded-xl transition-all shadow-md shadow-[#370c63]/20 cursor-pointer flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              <span>Accept All</span>
            </button>
          </>
        )}
      </div>

      {/* Micro-guarantee strip */}
      <div className="mt-2.5 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[10px] text-slate-600 font-medium tracking-tight">
        <span className="flex items-center gap-1 text-slate-600">
          <svg className="w-3 h-3 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          256-bit SSL &amp; Escrow Protection
        </span>
        <span className="text-slate-600">No ad-broker tracking</span>
      </div>
    </aside>
  );
}
