import { useState, useEffect } from 'react';

export function BizDashboard() {
  const [expert, setExpert] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();
        if (!data.user) {
          window.location.href = '/biz/login';
          return;
        }
        setExpert(data.user);
      } catch {
        window.location.href = '/biz/login';
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-32 bg-slate-100 rounded-2xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => <div key={i} className="h-40 bg-slate-100 rounded-2xl"></div>)}
        </div>
      </div>
    );
  }

  const cleanId = String(expert?.id || '').replace(/^db_/i, '');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">
              {expert?.name?.charAt(0) || expert?.businessName?.charAt(0) || 'B'}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {expert?.name || expert?.businessName || 'Business Name'}
              </h1>
              <p className="text-sm text-slate-500">
                {expert?.email || 'business@example.com'}
              </p>
            </div>
          </div>
          <a href={`/expert/${cleanId}`} className="text-xs text-blue-600 hover:underline font-semibold">
            View Public Profile →
          </a>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-slate-500">Profile Views</p>
          <p className="text-2xl font-black text-slate-900 mt-1">1,247</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-slate-500">Leads</p>
          <p className="text-2xl font-black text-slate-900 mt-1">38</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-slate-500">Reviews</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{expert?.reviews || 24}</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-slate-500">Rating</p>
          <p className="text-2xl font-black text-slate-900 mt-1">★ {expert?.rating || '4.8'}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/biz/settings" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all shadow-sm">
          <div className="text-3xl mb-3">⚙️</div>
          <h3 className="font-bold text-slate-900 mb-1">Edit Profile</h3>
          <p className="text-xs text-slate-500">Update your business details</p>
        </a>
        <a href="/biz/reviews" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all shadow-sm">
          <div className="text-3xl mb-3">⭐</div>
          <h3 className="font-bold text-slate-900 mb-1">Respond to Reviews</h3>
          <p className="text-xs text-slate-500">Engage with your customers</p>
        </a>
        <a href="/service-provider/dashboard" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all shadow-sm">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="font-bold text-slate-900 mb-1">View Full Dashboard</h3>
          <p className="text-xs text-slate-500">Full operations and bookings</p>
        </a>
      </div>
    </div>
  );
}
