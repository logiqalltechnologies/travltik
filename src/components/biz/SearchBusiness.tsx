import { useState } from 'react';

interface Business {
  id: string;
  name: string;
  city: string;
  country: string;
  isClaimed: boolean;
}

export function SearchBusiness() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function handleSearch(e?: React.FormEvent) {
    if (e) e.preventDefault();
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
      {/* Yelp-style: Big Search Bar */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your business name"
          className="flex-1 px-5 py-4 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm disabled:opacity-50 hover:bg-blue-700 transition-colors cursor-pointer"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Yelp-style: Results Header */}
      {searched && !loading && results.length > 0 && (
        <p className="text-xs text-slate-500 mt-6 mb-3 font-semibold uppercase tracking-wider">
          {results.length} business{results.length > 1 ? 'es' : ''} found
        </p>
      )}

      {/* Yelp-style: Clean List */}
      {results.length > 0 && (
        <div className="space-y-2 mt-4">
          {results.map((business) => {
            const cleanId = String(business.id).replace(/^db_/i, '');
            return (
              <div 
                key={business.id} 
                className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50/50 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-500 shrink-0">
                    {business.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{business.name}</p>
                    <p className="text-xs text-slate-400">{business.city}, {business.country}</p>
                  </div>
                </div>
                
                {business.isClaimed ? (
                  <span className="text-xs font-semibold text-slate-400 shrink-0 ml-2">Claimed</span>
                ) : (
                  <a
                    href={`/claim/${cleanId}`}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold hover:bg-emerald-100 transition-colors shrink-0 ml-2"
                  >
                    Claim
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Yelp-style: Empty State */}
      {searched && !loading && results.length === 0 && (
        <div className="mt-8 p-8 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-sm font-bold text-slate-900">No business found</p>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Try a different name or add your business.
          </p>
          <a 
            href="/add-business" 
            className="inline-block px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Add Your Business
          </a>
        </div>
      )}
    </div>
  );
}

