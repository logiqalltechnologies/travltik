import { ArrowRight } from "lucide-react";

const getCodeByName = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("bali")) return "id";
    if (n.includes("dubai")) return "ae";
    if (n.includes("europe")) return "fr";
    if (n.includes("vietnam")) return "vn";
    if (n.includes("malaysia")) return "my";
    if (n.includes("thailand")) return "th";
    if (n.includes("sri lanka")) return "lk";
    if (n.includes("singapore")) return "sg";
    if (n.includes("greece")) return "gr";
    if (n.includes("maldives")) return "mv";
    return "us";
};

export function TourCard({ tour }: { tour: any }) {
    return (
        <a href="/tours" className="block w-full cursor-pointer group">
            <div className="relative bg-white rounded-[28px] overflow-hidden text-left shadow-[0_16px_36px_-16px_rgba(67,15,122,0.18)] hover:shadow-[0_28px_54px_-18px_rgba(67,15,122,0.35)] transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/90 flex flex-col">
                {/* Top Image Banner */}
                <div className="h-56 relative overflow-hidden bg-slate-900 shrink-0">
                    <img 
                        src={tour.image} 
                        alt={tour.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    
                    {/* Badge */}
                    {tour.badges && tour.badges[0] && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                            <span className="text-[11px] font-extrabold text-slate-900 tracking-wide uppercase">
                                {tour.badges[0]}
                            </span>
                        </div>
                    )}

                    {/* Flag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/70 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full">
                        <img 
                            src={`https://flagcdn.com/w40/${getCodeByName(tour.name)}.png`} 
                            alt="" 
                            className="w-4 h-3 rounded-xs object-cover" 
                        />
                        <span className="text-[11px] font-bold text-white tracking-wide uppercase">Tour</span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-xl font-extrabold text-white leading-snug drop-shadow-md tracking-[-0.02em]">
                            {tour.name}
                        </h3>
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5 bg-white">
                    <div className="flex flex-wrap gap-1.5">
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-light text-brand border border-brand/20">Visa Included</span>
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">4-5★ Hotel</span>
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{tour.duration}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-dashed border-slate-200 text-center">
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">DURATION</span>
                            <span className="text-xs font-extrabold text-slate-900 block">{tour.duration}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">RATING</span>
                            <span className="text-xs font-extrabold text-slate-900 flex items-center justify-center gap-1">
                                <span className="text-brand">★</span> {tour.rating}
                            </span>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">PRICE</span>
                            <span className="text-sm font-extrabold text-brand block">{tour.price}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-purple-900 group-hover:text-brand transition-colors">
                            Explore Tour Package
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-purple-950 group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 shadow-2xs">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
