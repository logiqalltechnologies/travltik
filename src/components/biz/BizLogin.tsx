import { useState } from 'react';

export function BizLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: 'expert' }),
      });
      const data = await res.json();
      if (res.ok && (data.status === 'success' || data.success)) {
        // Save to localStorage for client-side persistence
        if (data.user) {
          try {
            localStorage.setItem('travltik_user', JSON.stringify(data.user));
          } catch (e) {}
        }
        window.location.href = '/biz/dashboard';
      } else {
        setError(data.message || data.error || 'Invalid email or password.');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Business Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold disabled:opacity-50 hover:bg-blue-700 transition-colors cursor-pointer"
      >
        {loading ? 'Signing in...' : 'Sign In →'}
      </button>

      <div className="pt-4 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          Don't have a business account?
        </p>
        <a href="/signup/service-provider" className="text-xs text-blue-600 hover:underline font-semibold mt-1 inline-block">
          Register as Service Provider →
        </a>
      </div>
    </form>
  );
}
