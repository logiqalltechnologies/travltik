// src/components/legal/CookieConsent.tsx
import React, { useState, useEffect } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 left-4 sm:left-auto z-50 max-w-sm w-auto bg-white text-slate-900 p-5 rounded-2xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200/60">
          <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="flex-1 pr-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Privacy &amp; Security</h4>
            <span className="text-[10px] font-semibold text-slate-400">DPDP / GDPR</span>
          </div>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            We use technical cookies for secure login authentication, payment verification, and fraud prevention. Read our{' '}
            <a href="/privacy" className="text-slate-900 font-semibold underline underline-offset-2 hover:text-[#00a896]">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
        <button
          onClick={() => {
            localStorage.setItem('cookie_consent', 'rejected');
            setVisible(false);
          }}
          className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          Reject Non-Essential
        </button>
        <button
          onClick={() => {
            localStorage.setItem('cookie_consent', 'accepted');
            setVisible(false);
          }}
          className="px-4 py-1.5 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-all shadow-xs cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
