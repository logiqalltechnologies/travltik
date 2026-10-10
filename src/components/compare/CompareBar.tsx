import React, { useState, useEffect } from "react";
import { Scale, X, ArrowRight, ShieldCheck } from "lucide-react";

export function CompareBar() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const updateFromStorage = () => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("compare_experts");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSelectedIds(parsed);
          setIsVisible(parsed.length > 0);
          return;
        }
      }
      setSelectedIds([]);
      setIsVisible(false);
    } catch (e) {
      setSelectedIds([]);
      setIsVisible(false);
    }
  };

  useEffect(() => {
    updateFromStorage();

    const handleStorageChange = () => {
      updateFromStorage();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("compare_updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("compare_updated", handleStorageChange);
    };
  }, []);

  const handleClear = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("compare_experts");
    setSelectedIds([]);
    setIsVisible(false);
    window.dispatchEvent(new Event("compare_updated"));
  };

  if (!isVisible || selectedIds.length === 0) {
    return null;
  }

  const cleanIds = selectedIds.map(id => String(id).replace(/^db_/i, "")).join(",");
  const compareUrl = `/compare/experts?ids=${cleanIds}`;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      <div className="bg-[#0B0F17]/95 backdrop-blur-md text-white border border-teal-500/30 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-3 sm:gap-4 ring-1 ring-white/10">
        {/* Left: Icon & Count */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 text-teal-300">
            <Scale className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                {selectedIds.length} {selectedIds.length === 1 ? "Expert" : "Experts"} Selected
              </span>
              <span className="text-[10px] font-bold text-teal-400 bg-teal-950/80 border border-teal-500/40 px-2 py-0.5 rounded-full">
                Max 4
              </span>
            </div>
            <p className="text-xs text-slate-400 truncate hidden sm:block">
              Side-by-side comparison with real database credentials
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleClear}
            className="text-xs text-slate-400 hover:text-rose-400 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            title="Clear comparison list"
          >
            Clear
          </button>

          <a
            href={compareUrl}
            className="bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-teal-500/25 flex items-center gap-1.5 active:scale-95 whitespace-nowrap"
          >
            <span>Compare Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
