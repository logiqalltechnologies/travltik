import { useState, useEffect } from "react";
import { Star, MapPin } from "lucide-react";

export function ExpertCard({ expert }: { expert: any }) {
    const cleanId = String(expert.id || '').replace(/^db_/i, '');
    const [isCompared, setIsCompared] = useState(false);

    useEffect(() => {
        const checkCompared = () => {
            try {
                const stored = localStorage.getItem('compare_experts');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        setIsCompared(parsed.map(x => String(x).replace(/^db_/i, '')).includes(cleanId));
                        return;
                    }
                }
                setIsCompared(false);
            } catch (e) {
                setIsCompared(false);
            }
        };

        checkCompared();
        window.addEventListener('compare_updated', checkCompared);
        window.addEventListener('storage', checkCompared);
        return () => {
            window.removeEventListener('compare_updated', checkCompared);
            window.removeEventListener('storage', checkCompared);
        };
    }, [cleanId]);

    const handleCompareToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        let current: string[] = [];
        try {
            const stored = localStorage.getItem('compare_experts');
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) current = parsed.map(x => String(x).replace(/^db_/i, ''));
            }
        } catch (err) {}

        let updated: string[];
        if (current.includes(cleanId)) {
            updated = current.filter(id => id !== cleanId);
        } else {
            if (current.length >= 4) {
                alert('You can compare up to 4 experts at a time.');
                return;
            }
            updated = [...current, cleanId];
        }

        localStorage.setItem('compare_experts', JSON.stringify(updated));
        setIsCompared(updated.includes(cleanId));
        window.dispatchEvent(new Event('compare_updated'));
    };

    return (
        <a href={`/expert/${expert.id}`} className="block h-full cursor-pointer">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 h-full group">
                <div className="flex gap-4">
                    <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden ring-2 ring-gray-100 group-hover:ring-red-200 transition-all">
                        <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="text-base font-bold text-[#1a1a2e] leading-tight truncate group-hover:text-red-500 transition-colors">{expert.name}</h3>
                            {expert.badges?.includes("Open now") && (
                                <span className="text-[9px] font-bold tracking-wider text-green-700 bg-green-100 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Open
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-1 mt-1.5">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star 
                                        key={i} 
                                        className="w-3.5 h-3.5" 
                                        fill={i <= expert.rating ? "currentColor" : "none"} 
                                        strokeWidth={i <= expert.rating ? 0 : 1.5} 
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-bold ml-1">{expert.rating}</span>
                            <span className="text-xs text-gray-400">({expert.reviews})</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{expert.role}</p>
                        {(expert.licenseNo || expert.govReg) && (() => {
                            const reg = String(expert.licenseNo || expert.govReg).trim();
                            let registryUrl = "";
                            if (/ICCRC|CICC|RCIC/i.test(reg)) {
                              registryUrl = `https://college-ic.ca/protecting-the-public/find-an-immigration-consultant?q=${encodeURIComponent(reg)}`;
                            } else if (/MARA/i.test(reg)) {
                              registryUrl = `https://portal.mara.gov.au/search?q=${encodeURIComponent(reg)}`;
                            } else if (/OISC/i.test(reg)) {
                              registryUrl = `https://www.gov.uk/find-an-immigration-adviser?q=${encodeURIComponent(reg)}`;
                            } else if (/BAR/i.test(reg)) {
                              registryUrl = `https://www.barcouncilofindia.org/search?q=${encodeURIComponent(reg)}`;
                            } else {
                              registryUrl = `https://www.google.com/search?q=${encodeURIComponent(reg + " official registry verification")}`;
                            }

                            return (
                              <a
                                href={registryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-blue-600 hover:text-blue-800"
                              >
                                <span>Verify #{reg}</span>
                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            );
                        })()}
                    </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{expert.location}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {expert.tags?.map((tag: string) => (
                        <span key={tag} className="text-[11px] bg-red-50 text-red-700 font-semibold px-2.5 py-1 rounded-full border border-red-100">{tag}</span>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="font-extrabold text-lg text-[#1a1a2e]">{expert.price}</div>
                        <button
                            type="button"
                            onClick={handleCompareToggle}
                            className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                                isCompared 
                                    ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold' 
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-teal-400'
                            }`}
                        >
                            {isCompared ? '✓ Compare' : '+ Compare'}
                        </button>
                    </div>
                    <button className="bg-black text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-900 transition-all text-sm shadow-sm hover:shadow-md">
                        View Profile
                    </button>
                </div>
            </div>
        </a>
    );
}

