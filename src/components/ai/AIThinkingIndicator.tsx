import React from 'react';

export function AIThinkingIndicator({ label = 'AI is analyzing...' }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div className="flex gap-1">
        <span className="typing-dot w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="typing-dot w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="typing-dot w-2 h-2 rounded-full bg-blue-500"></span>
      </div>
      <span className="text-sm text-slate-600 animate-pulse">{label}</span>
    </div>
  );
}

export default AIThinkingIndicator;
