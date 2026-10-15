import { useState, useEffect } from 'react';

interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  owner_response: string | null;
  created_at: string;
}

export function BizReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [respondingTo, setRespondingTo] = useState<string | null>(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch('/api/experts/reviews')
      .then(r => r.json())
      .then(data => setReviews(data.reviews || []))
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

  async function handleRespond(reviewId: string) {
    if (!response.trim()) return;
    try {
      const res = await fetch('/api/experts/reviews/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewId, response }),
      });
      const data = await res.json();
      if (data.success) {
        setReviews(reviews.map(r => r.id === reviewId ? { ...r, owner_response: response } : r));
        setRespondingTo(null);
        setResponse('');
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (loading) return <div className="animate-pulse h-64 bg-slate-100 rounded-2xl" />;

  if (reviews.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
        <div className="text-4xl mb-3">⭐</div>
        <p className="text-sm text-slate-500 font-medium">No reviews yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </span>
                <span className="text-xs text-slate-400">
                  {new Date(review.created_at).toLocaleDateString()}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mt-2">{review.title}</h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-4">{review.content}</p>
          
          {review.owner_response ? (
            <div className="ml-2 sm:ml-6 p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500">
              <p className="text-xs font-bold text-blue-600 mb-1">Your Response</p>
              <p className="text-sm text-slate-700">{review.owner_response}</p>
            </div>
          ) : respondingTo === review.id ? (
            <div className="ml-2 sm:ml-6 space-y-3">
              <textarea
                rows={3}
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Write your response..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleRespond(review.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 cursor-pointer"
                >
                  Post Response
                </button>
                <button
                  type="button"
                  onClick={() => { setRespondingTo(null); setResponse(''); }}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setRespondingTo(review.id)}
              className="ml-6 text-xs text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Respond to this review →
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
