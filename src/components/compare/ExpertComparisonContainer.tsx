import React, { useState, useEffect } from "react";
import { ExpertComparison, type ComparedExpert } from "./ExpertComparison";
import { Loader2, AlertCircle } from "lucide-react";

export function ExpertComparisonContainer() {
  const [experts, setExperts] = useState<ComparedExpert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadComparisonData = async (idsList: string[]) => {
    if (!idsList || idsList.length === 0) {
      setExperts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/experts/compare?ids=${encodeURIComponent(idsList.join(","))}`);
      const data = await res.json();

      if (data.success && Array.isArray(data.experts)) {
        setExperts(data.experts);
      } else {
        setError(data.error || "Failed to load comparison data");
      }
    } catch (err: any) {
      console.error("Comparison fetch error:", err);
      setError("An error occurred while fetching expert details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ids: string[] = [];

    // 1. Check URL parameters first (?ids=1,2,3)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const urlIds = urlParams.get("ids");
      if (urlIds) {
        ids = urlIds.split(",").map(s => s.trim().replace(/^db_/i, "")).filter(Boolean);
      } else {
        // 2. Check localStorage
        try {
          const stored = localStorage.getItem("compare_experts");
          if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
              ids = parsed.map(s => String(s).replace(/^db_/i, "")).filter(Boolean);
            }
          }
        } catch (e) {
          console.error("Error reading localStorage:", e);
        }
      }
    }

    loadComparisonData(ids);
  }, []);

  const handleRemove = (removeId: string) => {
    const updated = experts.filter(e => e.id !== removeId);
    setExperts(updated);

    // Sync localStorage
    try {
      const stored = localStorage.getItem("compare_experts");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const newStored = parsed.filter(id => String(id).replace(/^db_/i, "") !== removeId);
          localStorage.setItem("compare_experts", JSON.stringify(newStored));
          window.dispatchEvent(new Event("compare_updated"));
        }
      }
    } catch (e) {}

    // Update URL without full reload
    if (typeof window !== "undefined") {
      const newIds = updated.map(e => e.id).join(",");
      const newUrl = newIds ? `/compare/experts?ids=${newIds}` : `/compare/experts`;
      window.history.replaceState({}, "", newUrl);
    }
  };

  const handleAdd = (newExpert: any) => {
    const cleanId = String(newExpert.id).replace(/^db_/i, "");
    if (experts.some(e => e.id === cleanId)) return;
    if (experts.length >= 4) {
      alert("You can compare up to 4 experts at a time.");
      return;
    }

    const currentIds = experts.map(e => e.id);
    const updatedIds = [...currentIds, cleanId];

    // Sync localStorage
    try {
      localStorage.setItem("compare_experts", JSON.stringify(updatedIds));
      window.dispatchEvent(new Event("compare_updated"));
    } catch (e) {}

    // Update URL
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", `/compare/experts?ids=${updatedIds.join(",")}`);
    }

    loadComparisonData(updatedIds);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/80 p-16 text-center shadow-sm">
        <Loader2 className="w-10 h-10 text-teal-600 animate-spin mx-auto mb-4" />
        <h3 className="text-base font-semibold text-slate-800">
          Loading comparison data from database...
        </h3>
        <p className="text-xs text-slate-400 mt-1">Comparing verified metrics in real time</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rose-50 border border-rose-200 rounded-3xl p-8 text-center text-rose-800">
        <AlertCircle className="w-8 h-8 mx-auto mb-2 text-rose-600" />
        <h3 className="font-bold">{error}</h3>
        <p className="text-xs text-rose-600 mt-1">Please try again or select different experts.</p>
      </div>
    );
  }

  return <ExpertComparison experts={experts} onRemove={handleRemove} onAdd={handleAdd} />;
}

