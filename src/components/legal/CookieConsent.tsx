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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 left-4 sm:left-auto z-50 max-w-sm w-auto bg-white text-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#00a896] flex items-center justify-center shrink-0 text-lg">
          🍪
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">Cookie &amp; Privacy Notice</h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            We use essential cookies to guarantee identity protection, biometric upload integrity, and legal escrow security. Learn more in our{' '}
            <a href="/privacy" className="text-[#00a896] hover:underline font-semibold">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
        <button
          onClick={() => {
            localStorage.setItem('cookie_consent', 'rejected');
            setVisible(false);
          }}
          className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
        >
          Decline
        </button>
        <button
          onClick={() => {
            localStorage.setItem('cookie_consent', 'accepted');
            setVisible(false);
          }}
          className="px-4 py-2 text-xs font-bold bg-[#00a896] hover:bg-[#028090] text-white rounded-xl shadow-sm transition-all"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
