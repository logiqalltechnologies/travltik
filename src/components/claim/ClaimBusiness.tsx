import { useState, useEffect } from 'react';

export function ClaimBusiness({ expertId }: { expertId: string }) {
  const [expert, setExpert] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'loading' | 'info' | 'sent' | 'already-claimed'>('loading');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchExpert() {
      try {
        const cleanId = String(expertId || '').replace(/^db_/i, '');
        const res = await fetch(`/api/experts?id=${cleanId}`);
        const data = await res.json();
        const found = data.experts && data.experts.length > 0 ? data.experts[0] : null;
        setExpert(found);
        if (found?.isClaimed || found?.is_claimed) {
          setStep('already-claimed');
        } else {
          setStep('info');
        }
      } catch (e) {
        setStep('info');
      }
    }
    if (expertId) fetchExpert();
  }, [expertId]);

  async function handleClaim() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/experts/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expertId, email }),
      });
      const data = await res.json();
      if (data.success) {
        setStep('sent');
      } else {
        setError(data.error);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (step === 'loading') {
    return <div className="animate-pulse h-64 bg-slate-100 rounded-2xl" />;
  }

  if (step === 'already-claimed') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-3xl mx-auto mb-4">
          🔒
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Already Claimed</h2>
        <p className="text-sm text-slate-500">
          This business has already been claimed by its owner.
        </p>
      </div>
    );
  }

  if (step === 'sent') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4">
          ✉️
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Check your email</h2>
        <p className="text-sm text-slate-500 mb-4">
          We've sent a verification link to <strong>{email}</strong>.
          Click the link to verify ownership.
        </p>
        <p className="text-xs text-slate-400">
          Link expires in 24 hours. Check spam folder if not received.
        </p>
      </div>
    );
  }

  if (!expert) return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-2">Business Not Found</h2>
      <p className="text-sm text-slate-500">Could not find a business listing for ID: {expertId}</p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Is this your business?</h1>
      <p className="text-sm text-slate-500 mb-6">
        Claim <strong>{expert.name}</strong> to manage your profile.
      </p>

      <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
        <p className="text-xs font-bold text-slate-500 uppercase">Business Details</p>
        <p className="text-sm font-bold text-slate-900 mt-1">{expert.name}</p>
        {expert.city && <p className="text-xs text-slate-500 mt-0.5">{expert.city}, {expert.country}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Enter your business email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-[11px] text-slate-400 mt-1.5">
          Use the email associated with your business domain
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs mb-4 font-medium">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleClaim}
        disabled={loading || !email}
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold disabled:opacity-50 hover:bg-blue-700 transition-colors cursor-pointer"
      >
        {loading ? 'Sending...' : 'Claim This Business →'}
      </button>

      <p className="text-[11px] text-slate-400 text-center mt-4">
        By claiming, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
