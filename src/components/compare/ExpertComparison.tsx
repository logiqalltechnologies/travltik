import React, { useState } from "react";
import { 
  Award, 
  Briefcase, 
  Star, 
  Clock, 
  Percent, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  X, 
  ExternalLink, 
  Check, 
  AlertCircle,
  Sparkles,
  ArrowRight,
  Plus,
  Share2,
  Mail,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import { dummyExperts } from "../../data/dummyExperts";

export interface ComparedExpert {
  id: string;
  name: string;
  businessName?: string;
  avatar?: string;
  role: string;
  license: string;
  licenseType: string;
  experienceYears: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  responseTime: string;
  successRate: string;
  specializations: string[];
  languages: string[];
  location: string;
  escrowProtected: boolean;
  profileUrl: string;
}

interface Props {
  experts: ComparedExpert[];
  onRemove?: (id: string) => void;
  onAdd?: (expert: any) => void;
}

// Popular Comparisons data (similar to Shiksha popular college pairings)
const popularComparisons = [
  {
    category: "Canada PR & Express Entry",
    pair: [
      { id: "d1", name: "Arjun Mehta", role: "Canada Immigration Consultant", image: "/experts/arjun_mehta.jpg" },
      { id: "d6", name: "Deepa Nair", role: "Certified RCIC Consultant", image: "/experts/deepa_nair.jpg" }
    ]
  },
  {
    category: "UK & Australia Visas",
    pair: [
      { id: "d2", name: "Priya Sharma", role: "UK & Australia Specialist", image: "/experts/priya_sharma.jpg" },
      { id: "d8", name: "Sneha Joshi", role: "NZ & Australia Skilled Visa", image: "/experts/sneha_joshi.jpg" }
    ]
  },
  {
    category: "USA Law & Study Visas",
    pair: [
      { id: "d3", name: "Karthik Reddy", role: "US Immigration Attorney", image: "/experts/karthik_reddy.jpg" },
      { id: "d4", name: "Nisha Agarwal", role: "Student Visa Counsellor", image: "/experts/nisha_agarwal.jpg" }
    ]
  },
  {
    category: "Europe & Gulf Mobility",
    pair: [
      { id: "d5", name: "Rahul Kapoor", role: "Germany Blue Card Expert", image: "/experts/rahul_kapoor.jpg" },
      { id: "d7", name: "Vikram Singh", role: "UAE & Gulf Visa Specialist", image: "/experts/vikram_singh.jpg" }
    ]
  }
];

export function ExpertComparison({ experts, onRemove, onAdd }: Props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchAddQuery, setSearchAddQuery] = useState("");

  const maxSlots = 4;
  const emptySlotsCount = Math.max(0, maxSlots - (experts?.length || 0));

  // Filter available experts to add
  const availableToAdd = dummyExperts.filter(de => 
    !experts.some(exp => exp.id.toLowerCase() === de.id.toLowerCase()) &&
    (de.name.toLowerCase().includes(searchAddQuery.toLowerCase()) || 
     de.role.toLowerCase().includes(searchAddQuery.toLowerCase()) ||
     de.city.toLowerCase().includes(searchAddQuery.toLowerCase()))
  );

  const handleShare = (platform: string) => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const text = "Compare Verified Immigration Consultants on TravlTik";
    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "email") {
      window.open(`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`, "_blank");
    }
  };

  return (
    <div className="w-full space-y-8 font-sans">
      {/* 1. Header Banner (Shiksha style clean box) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Compare Immigration &amp; Visa Experts
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-4xl leading-relaxed">
          Compare verified consultants on the basis of their Regulatory Licenses, Success Rates, Hourly Fees, Verified Reviews, Response Time, and Escrow Protection.
        </p>
      </div>

      {/* 2. Top Slots Row (Shiksha style dashed "+ Add Expert" slots) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Active Experts in slots */}
          {experts.map((exp) => (
            <div 
              key={exp.id} 
              className="relative bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center group hover:border-teal-400/80 transition-all"
            >
              {onRemove && (
                <button
                  onClick={() => onRemove(exp.id)}
                  className="absolute top-2 right-2 p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Remove from comparison"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <div className="w-14 h-14 rounded-xl overflow-hidden mb-2.5 bg-slate-200 border border-slate-300">
                {exp.avatar ? (
                  <img src={exp.avatar} alt={exp.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center">
                    {exp.name.split(" ").slice(0, 2).map(w => w.charAt(0)).join("")}
                  </div>
                )}
              </div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">
                {exp.name}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                {exp.role}
              </p>
              <span className="mt-2 text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
                {exp.licenseType || "Verified"}
              </span>
            </div>
          ))}

          {/* Empty Add Slots with dashed borders */}
          {Array.from({ length: emptySlotsCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setShowAddModal(true)}
              className="border-2 border-dashed border-slate-300 hover:border-[#00a896] hover:bg-teal-50/30 rounded-xl p-6 flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-teal-700 transition-all cursor-pointer min-h-[140px] group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-teal-100/60 flex items-center justify-center text-slate-500 group-hover:text-teal-700 transition-colors">
                <Plus className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-600 group-hover:text-teal-800">
                + Add Expert
              </span>
            </button>
          ))}
        </div>

        {/* Share This Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-slate-500">Share this :</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleShare("facebook")}
              className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Share on Facebook"
            >
              <Facebook className="w-4 h-4 fill-white" />
            </button>
            <button 
              onClick={() => handleShare("twitter")}
              className="w-8 h-8 rounded-lg bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Share on Twitter"
            >
              <Twitter className="w-4 h-4 fill-white" />
            </button>
            <button 
              onClick={() => handleShare("linkedin")}
              className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4 fill-white" />
            </button>
            <button 
              onClick={() => handleShare("email")}
              className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Share via Email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Side-by-Side Detailed Parameter Table */}
      {experts.length > 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px] text-left">
              <thead>
                <tr className="bg-slate-50/90 border-b border-slate-200">
                  <th className="p-4 sm:p-5 w-48 sm:w-56 font-bold text-xs uppercase tracking-wider text-slate-500">
                    Parameter
                  </th>
                  {experts.map((exp) => (
                    <th key={exp.id} className="p-4 sm:p-5 min-w-[200px] align-top">
                      <div className="font-bold text-slate-900 text-sm">
                        {exp.name}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {exp.role}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {/* License */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-teal-600" />
                      <span>License &amp; Council</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-200 w-fit">
                          {exp.licenseType || "Registered"}
                        </span>
                        <span className="text-slate-600 font-mono text-[11px]">
                          #{exp.license}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Experience */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-teal-600" />
                      <span>Experience</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5 font-bold text-slate-900">
                      {exp.experienceYears}
                    </td>
                  ))}
                </tr>

                {/* Rating */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span>Rating &amp; Reviews</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                        <span className="font-bold text-slate-900">{Number(exp.rating || 0).toFixed(1)}</span>
                        <span className="text-slate-400 text-xs">({exp.reviewCount} reviews)</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Hourly Rate */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Hourly Fee</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5 font-extrabold text-emerald-700 text-base">
                      {exp.hourlyRate}
                    </td>
                  ))}
                </tr>

                {/* Response Time */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span>Response Time</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {exp.responseTime}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Success Rate */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Percent className="w-4 h-4 text-teal-600" />
                      <span>Success Rate</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                          <div className="bg-teal-600 h-2 rounded-full" style={{ width: exp.successRate }} />
                        </div>
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">{exp.successRate}</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Specialization */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-teal-600" />
                      <span>Specialization</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5">
                      <div className="flex flex-wrap gap-1">
                        {exp.specializations?.map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-800 text-[11px] font-medium rounded border border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Languages */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-teal-600" />
                      <span>Languages</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5 text-slate-700">
                      {exp.languages?.join(", ") || "English"}
                    </td>
                  ))}
                </tr>

                {/* Location */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      <span>Location</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5 text-slate-700">
                      {exp.location}
                    </td>
                  ))}
                </tr>

                {/* Escrow Protection */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      <span>Escrow Protection</span>
                    </div>
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5">
                      {exp.escrowProtected ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Yes (100% Protected)</span>
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400">Standard</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Action Links */}
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-slate-50/40">
                    Action
                  </td>
                  {experts.map(exp => (
                    <td key={exp.id} className="p-4 sm:p-5">
                      <a
                        href={exp.profileUrl || /expert/}
                        className="inline-flex items-center justify-center gap-1.5 bg-[#00a896] hover:bg-teal-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm hover:shadow"
                      >
                        <span>View Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center">
          <AlertCircle className="w-12 h-12 text-teal-600 mx-auto mb-3" />
          <h3 className="font-bold text-slate-900 text-lg">No Experts in Comparison</h3>
          <p className="text-sm text-slate-500 mt-1 mb-5">Click on any empty slot or pick from popular comparisons below.</p>
          <button 
            onClick={() => setShowAddModal(true)} 
            className="bg-[#00a896] text-white font-bold px-6 py-2.5 rounded-xl text-sm"
          >
            + Add Expert to Compare
          </button>
        </div>
      )}

      {/* 4. Popular Comparisons Section (Exact Shiksha visual style with VS badges) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
          Popular comparisons of Visa Experts
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Frequently compared immigration consultants and lawyers by applicants
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularComparisons.map((item, idx) => (
            <a
              key={idx}
              href={`/compare/experts?ids=${item.pair[0].id},${item.pair[1].id}`}
              className="border border-slate-200 rounded-xl p-4 hover:border-teal-500 hover:shadow-md transition-all group block bg-slate-50/50 hover:bg-white"
            >
              {/* Category label */}
              <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider mb-3">
                {item.category}
              </div>

              {/* Pair with VS circle */}
              <div className="flex items-center justify-between relative mb-4">
                {/* Expert 1 */}
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                  <img src={item.pair[0].image} alt={item.pair[0].name} className="w-full h-full object-cover" />
                </div>

                {/* VS Badge */}
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center shadow-md border-2 border-white z-10">
                  VS
                </div>

                {/* Expert 2 */}
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                  <img src={item.pair[1].image} alt={item.pair[1].name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Names row */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="font-bold text-slate-900 line-clamp-1 group-hover:text-teal-700">
                  {item.pair[0].name}
                </div>
                <div className="font-bold text-slate-900 line-clamp-1 group-hover:text-teal-700">
                  {item.pair[1].name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 5. Add Expert Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-slate-900">Select Expert to Compare</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Search by name, role, or city..."
              value={searchAddQuery}
              onChange={(e) => setSearchAddQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 outline-none mb-4"
              autoFocus
            />

            <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
              {availableToAdd.length > 0 ? (
                availableToAdd.map(exp => (
                  <div 
                    key={exp.id} 
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-teal-300 hover:bg-teal-50/20 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img src={exp.image} alt={exp.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{exp.name}</h4>
                        <p className="text-xs text-slate-500">{exp.role} • {exp.city}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (onAdd) {
                          onAdd(exp);
                        }
                        setShowAddModal(false);
                      }}
                      className="bg-[#00a896] hover:bg-teal-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                    >
                      + Add
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-xs text-slate-400 py-6">No matching experts found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
