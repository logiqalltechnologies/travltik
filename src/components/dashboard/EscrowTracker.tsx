import React, { useEffect, useState } from 'react';

interface Milestone {
  id: string;
  order: number;
  title: string;
  percentage: number;
  status: 'pending' | 'in_progress' | 'completed';
  amount: string;
  releasedAt: string | null;
}

export function EscrowTracker({ bookingId }: { bookingId: string }) {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMilestones() {
      try {
        const res = await fetch(`/api/bookings/${bookingId}/escrow`);
        if (!res.ok) throw new Error('Failed to fetch milestones');
        const data = await res.json();
        setMilestones(data.milestones || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMilestones();
  }, [bookingId]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-slate-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-slate-100 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rose-50 rounded-2xl border border-rose-200 p-6 text-center shadow-sm">
        <p className="text-sm text-rose-700">{error}</p>
      </div>
    );
  }

  if (milestones.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
        <p className="text-sm text-slate-500">No escrow milestones found for this booking.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-slate-900 text-lg">Escrow Milestone Tracker</h3>
          <p className="text-xs text-slate-500">Funds released progressively upon verified completion</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
          Milestone Escrow Protection
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {milestones.map((m) => (
          <div
            key={m.id}
            className={`p-4 rounded-xl border-2 transition-all ${
              m.status === 'completed'
                ? 'bg-emerald-50/70 border-emerald-300'
                : m.status === 'in_progress'
                ? 'bg-blue-50/70 border-blue-300'
                : 'bg-slate-50/70 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Milestone {m.order}
              </span>
              <span className="text-xs font-bold text-slate-700">
                {m.percentage}%
              </span>
            </div>
            <div className="text-sm font-bold mt-2 text-slate-900">{m.title}</div>
            <div className="text-xs text-slate-500 mt-2 flex items-center justify-between">
              <span>${m.amount}</span>
              <span className={`capitalize px-2 py-0.5 rounded text-[10px] font-bold ${
                m.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                m.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                'bg-slate-200 text-slate-700'
              }`}>
                {m.status.replace('_', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
