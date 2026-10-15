import { useState, useEffect } from 'react';

const BUSINESS_TYPES = [
  { value: 'university', label: 'University', icon: '🎓' },
  { value: 'consultant', label: 'Immigration Consultant', icon: '⚖️' },
  { value: 'agency', label: 'Visa Agency', icon: '🏢' },
  { value: 'lawyer', label: 'Lawyer', icon: '👔' },
  { value: 'recruiter', label: 'Recruiter', icon: '💼' },
];

interface AddBusinessFormProps {
  initialUser?: any;
}

export function AddBusinessForm({ initialUser }: AddBusinessFormProps = {}) {
  const [currentUser, setCurrentUser] = useState<any>(initialUser || null);
  const [authChecking, setAuthChecking] = useState(!initialUser);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    businessName: '',
    website: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<any>(null);

  useEffect(() => {
    if (initialUser) {
      setCurrentUser(initialUser);
      setAuthChecking(false);
      return;
    }

    if (typeof window !== 'undefined') {
      fetch('/api/auth/me')
        .then((r) => r.json())
        .then((data) => {
          if (data?.user) {
            setCurrentUser(data.user);
          } else {
            setCurrentUser(null);
            try { localStorage.removeItem('travltik_user'); } catch (e) {}
            window.location.href = '/login?redirect=/add-business';
          }
        })
        .catch(() => {
          setCurrentUser(null);
          window.location.href = '/login?redirect=/add-business';
        })
        .finally(() => setAuthChecking(false));
    } else {
      setAuthChecking(false);
    }
  }, [initialUser]);

  async function handleSubmit() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/experts/add-business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userEmail: currentUser?.email || '',
        }),
      });
      const data = await res.json();
      if (res.status === 401) {
        window.location.href = '/login?redirect=/add-business';
        return;
      }
      if (data.success) {
        setSuccess(data.expert);
        setStep(3);
      } else {
        setError(data.error || 'Failed to add business.');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  if (authChecking) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm text-slate-500 font-medium">Verifying login status...</p>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm max-w-md mx-auto">
        <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
          🔒
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Sign In Required</h2>
        <p className="text-sm text-slate-500 mb-6">
          You must be logged in to add your business on TravlTik. Please sign in or create an account to proceed.
        </p>
        <a
          href="/login?redirect=/add-business"
          className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          Sign In to Continue →
        </a>
      </div>
    );
  }

  if (step === 3 && success) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Business Added!</h2>
        <p className="text-sm text-slate-500 mb-6">
          <strong>{success.name}</strong> is now live on TravlTik.
        </p>
        <div className="space-y-3">
          <a href={`/claim/${success.id}`} 
             className="block w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Are you the owner? Claim This Business →
          </a>
          <a href={`/expert/${success.id}`} 
             className="block w-full py-3 border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
            View Business Page
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
      {step === 1 && (
        <>
          <h2 className="text-lg font-bold text-slate-900 mb-4">What type of business?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {BUSINESS_TYPES.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => {
                  setFormData({ ...formData, businessType: type.value });
                  setStep(2);
                }}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer text-left ${
                  formData.businessType === type.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-2xl mb-1">{type.icon}</div>
                <div className="text-xs font-semibold text-slate-700">{type.label}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <button 
            type="button" 
            onClick={() => setStep(1)} 
            className="text-xs text-slate-500 mb-4 hover:text-slate-700 cursor-pointer flex items-center gap-1 font-medium"
          >
            ← Back
          </button>
          <h2 className="text-lg font-bold text-slate-900 mb-4">Business Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Business Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="Global Horizons University"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Website</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://globalhorizons.edu"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="info@globalhorizons.edu"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 555 123 4567"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Country <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="Canada"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  City <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Toronto"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Description</label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="A leading university in Canada..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || !formData.businessName || !formData.email || !formData.country || !formData.city}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold disabled:opacity-50 hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {loading ? 'Submitting...' : 'Submit Business →'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
