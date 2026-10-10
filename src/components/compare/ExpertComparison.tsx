import React from "react";
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
  ArrowRight
} from "lucide-react";

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
}

export function ExpertComparison({ experts, onRemove }: Props) {
  if (!experts || experts.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center max-w-xl mx-auto shadow-sm">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">No Experts Selected for Comparison</h3>
        <p className="text-sm text-slate-600 mb-6">
          Select 2 to 4 verified experts from our directory to compare their licenses, fees, success rates, and qualifications side-by-side.
        </p>
        <a
          href="/experts"
          className="inline-flex items-center gap-2 bg-[#00a896] hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          <span>Browse Verified Experts</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  const columnsCount = experts.length;

  return (
    <div className="w-full">
      {/* Scrollable Container with sticky column effect on mobile */}
      <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="w-full border-collapse min-w-[700px] text-left">
          <thead>
            <tr>
              {/* Parameter Label Header */}
              <th className="p-4 sm:p-5 w-44 sm:w-56 bg-slate-50/80 rounded-tl-2xl border-b border-slate-200 font-semibold text-xs tracking-wider uppercase text-slate-500">
                Comparison Parameter
              </th>

              {/* Expert Cards Headers */}
              {experts.map((exp, idx) => (
                <th
                  key={exp.id}
                  className={`p-4 sm:p-5 border-b border-slate-200 bg-white min-w-[220px] max-w-[300px] align-top relative ${
                    idx === columnsCount - 1 ? "rounded-tr-2xl" : ""
                  }`}
                >
                  {/* Remove Button */}
                  {onRemove && (
                    <button
                      onClick={() => onRemove(exp.id)}
                      className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Remove from comparison"
                      aria-label={`Remove ${exp.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  {/* Expert Avatar & Name */}
                  <div className="flex flex-col items-center text-center pr-5 pt-1">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 shrink-0">
                      {exp.avatar ? (
                        <img
                          src={exp.avatar}
                          alt={exp.name}
                          className="w-full h-full object-cover rounded-2xl border border-slate-200 shadow-sm"
                        />
                      ) : (
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white font-bold text-lg flex items-center justify-center border border-slate-700 shadow-sm">
                          {exp.name.split(" ").slice(0, 2).map(w => w.charAt(0).toUpperCase()).join("")}
                        </div>
                      )}
                      {exp.escrowProtected && (
                        <span
                          className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 rounded-full shadow-sm"
                          title="TravlTik Escrow Protected"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
                      {exp.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">
                      {exp.role}
                    </p>

                    <a
                      href={exp.profileUrl || `/expert/${exp.id}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 hover:text-teal-900 px-3.5 py-1.5 rounded-xl transition-colors border border-teal-200/80"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-sm">
            {/* 1. License Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-600 shrink-0" />
                <span>License</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-200">
                        {exp.licenseType || "Registered"}
                      </span>
                    </span>
                    <span className="text-xs text-slate-600 break-all font-mono">
                      #{exp.license}
                    </span>
                  </div>
                </td>
              ))}
            </tr>

            {/* 2. Experience Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Experience</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <span className="font-bold text-slate-900 text-base">
                    {exp.experienceYears}
                  </span>
                </td>
              ))}
            </tr>

            {/* 3. Rating & Reviews Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span>Rating</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                    <span className="font-bold text-slate-900">
                      {Number(exp.rating || 0).toFixed(1)}
                    </span>
                    <span className="text-xs text-slate-400 font-normal">
                      ({exp.reviewCount} reviews)
                    </span>
                  </div>
                </td>
              ))}
            </tr>

            {/* 4. Hourly Rate Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hourly Rate</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <span className="font-extrabold text-slate-950 text-base text-emerald-700">
                    {exp.hourlyRate}
                  </span>
                </td>
              ))}
            </tr>

            {/* 5. Response Time Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Response Time</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {exp.responseTime}
                  </span>
                </td>
              ))}
            </tr>

            {/* 6. Success Rate Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Percent className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Success Rate</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                      <div
                        className="bg-teal-600 h-2 rounded-full"
                        style={{ width: exp.successRate }}
                      />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">
                      {exp.successRate}
                    </span>
                  </div>
                </td>
              ))}
            </tr>

            {/* 7. Specialization Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Specialization</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.specializations && exp.specializations.length > 0 ? (
                      exp.specializations.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-800 text-xs font-medium rounded-md border border-slate-200"
                        >
                          {spec}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">General Immigration</span>
                    )}
                  </div>
                </td>
              ))}
            </tr>

            {/* 8. Languages Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Languages</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <span className="text-xs font-medium text-slate-700">
                    {exp.languages && exp.languages.length > 0
                      ? exp.languages.join(", ")
                      : "English"}
                  </span>
                </td>
              ))}
            </tr>

            {/* 9. Location Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Location</span>
              </td>
              {experts.map(exp => (
                <td key={exp.id} className="p-4 sm:p-5 bg-white">
                  <span className="text-xs font-medium text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {exp.location}
                  </span>
                </td>
              ))}
            </tr>

            {/* 10. Escrow Protection Parameter */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 sm:p-5 bg-slate-50/50 font-semibold text-slate-800 flex items-center gap-2 rounded-bl-2xl">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Escrow Protection</span>
              </td>
              {experts.map((exp, idx) => (
                <td
                  key={exp.id}
                  className={`p-4 sm:p-5 bg-white ${
                    idx === columnsCount - 1 ? "rounded-br-2xl" : ""
                  }`}
                >
                  {exp.escrowProtected ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Yes (100% Protected)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-300">
                      <X className="w-3.5 h-3.5 text-slate-400" />
                      <span>No</span>
                    </span>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Footer Callout */}
      <div className="mt-8 bg-gradient-to-r from-[#0B0F17] via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> TravlTik Milestone Protection
          </span>
          <h4 className="text-lg sm:text-xl font-bold">
            All consultations booked through TravlTik are safeguarded
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Funds remain held in third-party Escrow until milestones or initial consultations are satisfactorily delivered.
          </p>
        </div>
        <a
          href="/experts"
          className="shrink-0 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95 whitespace-nowrap"
        >
          Add Another Expert +
        </a>
      </div>
    </div>
  );
}
