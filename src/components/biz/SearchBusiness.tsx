import { useState } from 'react';

interface Business {
  id: string;
  name: string;
  city: string;
  country: string;
  isClaimed: boolean;
  avatar?: string;
}

export function SearchBusiness() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(`/api/experts?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.experts || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <label className="block text-xs font-semibold text-slate-700 mb-2">
        Search your business name
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="e.g., Global Horizons University"
          className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold disabled:opacity-50 hover:bg-blue-700 transition-colors cursor-pointer"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {searched && !loading && results.length === 0 && (
        <div className="mt-6 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
          <div className="text-3xl mb-2">🔍</div>
          <p className="text-sm font-semibold text-amber-900">Business not found</p>
          <p className="text-xs text-amber-700 mt-1 mb-4">
            Can't find your business? Add it first, then claim it.
          </p>
          <a href="/add-business" className="inline-block px-5 py-2.5 bg-amber-600 text-white rounded-lg text-xs font-bold hover:bg-amber-700 transition-colors">
            Add Your Business →
          </a>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-6 space-y-3">
          <p className="text-xs font-bold text-slate-500 uppercase">
            {results.length} result{results.length > 1 ? 's' : ''} found
          </p>
          {results.map((business) => {
            const cleanId = String(business.id).replace(/^db_/i, '');
            return (
              <div key={business.id} className="p-4 border border-slate-200 rounded-xl flex items-center gap-4 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600 shrink-0">
                  {business.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{business.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {business.city}, {business.country}
                  </p>
                </div>
                {business.isClaimed ? (
                  <span className="text-xs font-semibold text-slate-400 shrink-0">Already Claimed</span>
                ) : (
                  <a
                    href={`/claim/${cleanId}`}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors shrink-0"
                  >
                    Claim →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
