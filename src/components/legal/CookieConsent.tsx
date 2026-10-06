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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md text-white p-4 border-t border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs sm:text-sm text-slate-300">
          We use sovereign-compliant essential cookies to guarantee identity security, biometric integrity, and legal escrow handling. By continuing, you agree to our{' '}
          <a href="/privacy" className="underline text-[#00a896] hover:text-[#028090]">Privacy Policy</a>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              localStorage.setItem('cookie_consent', 'rejected');
              setVisible(false);
            }}
            className="px-4 py-2 text-xs font-semibold border border-white/20 hover:bg-white/10 rounded-lg transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => {
              localStorage.setItem('cookie_consent', 'accepted');
              setVisible(false);
            }}
            className="px-4 py-2 text-xs font-bold bg-[#00a896] hover:bg-[#028090] text-white rounded-lg transition-colors shadow-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
