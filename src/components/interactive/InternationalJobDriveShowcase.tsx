import React, { useState } from "react";
import {
  Briefcase, MapPin, DollarSign, Users, Shield, ArrowRight,
  Sparkles, CheckCircle2, Search, Filter, AlertCircle, Building2,
  Calendar, Check, ExternalLink, Globe
} from "lucide-react";
import { CANADA_VACANCIES_2026, TOTAL_CANADA_2026_VACANCIES, type CanadaJobVacancy } from "../../data/canadaJobs2026";
import { LUXEMBOURG_VACANCIES_2026, TOTAL_LUXEMBOURG_2026_VACANCIES, type LuxembourgJobVacancy } from "../../data/luxembourgJobs2026";
import { JobDriveApplicationModal, type DriveJobItem } from "./JobDriveApplicationModal";

export function InternationalJobDriveShowcase() {
  const [selectedCountry, setSelectedCountry] = useState<"Canada" | "Luxembourg">("Canada");
  const [selectedCanadaCategory, setSelectedCanadaCategory] = useState<string>("All");
  const [selectedLuxCategory, setSelectedLuxCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJobForModal, setSelectedJobForModal] = useState<DriveJobItem | null>(null);

  const canadaCategories = [
    "All",
    "IT & Admin",
    "Engineering & Skilled Trades",
    "Hospitality & Food",
    "General & Operations"
  ];

  const luxembourgCategories = [
    "All",
    "Skilled Trades & Technical",
    "Hospitality & Food",
    "Logistics & Operations",
    "Management & Corporate"
  ];

  // Filtered Canada vacancies
  const filteredCanada = CANADA_VACANCIES_2026.filter(job => {
    const matchesCat = selectedCanadaCategory === "All" || job.category === selectedCanadaCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      job.title.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q) ||
      String(job.sNo) === q ||
      job.lmiaStatus.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  // Filtered Luxembourg vacancies
  const filteredLuxembourg = LUXEMBOURG_VACANCIES_2026.filter(job => {
    const matchesCat = selectedLuxCategory === "All" || job.sector === selectedLuxCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      job.category.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q) ||
      String(job.sNo) === q ||
      job.permitType.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const handleApplyCanada = (job: CanadaJobVacancy) => {
    const driveItem: DriveJobItem = {
      sNo: job.sNo,
      id: job.id,
      title: job.title,
      vacancies: job.vacancies,
      salaryMonthly: job.salaryMonthly,
      location: job.location,
      permitType: job.lmiaStatus,
      country: "Canada"
    };
    setSelectedJobForModal(driveItem);
    setModalOpen(true);
  };

  const handleApplyLuxembourg = (job: LuxembourgJobVacancy) => {
    const driveItem: DriveJobItem = {
      sNo: job.sNo,
      id: job.id,
      title: job.category,
      vacancies: job.vacancies,
      salaryMonthly: job.salaryMonthly,
      location: job.location,
      permitType: job.permitType,
      country: "Luxembourg"
    };
    setSelectedJobForModal(driveItem);
    setModalOpen(true);
  };

  const handleApplyGeneric = () => {
    if (selectedCountry === "Canada") {
      handleApplyCanada(CANADA_VACANCIES_2026[0]);
    } else {
      handleApplyLuxembourg(LUXEMBOURG_VACANCIES_2026[0]);
    }
  };

  return (
    <section id="international-job-drives-2026" className="relative w-full my-10 sm:my-14 scroll-mt-24">
      {/* Outer Card with Royal Violet Border & Luxury Backdrop */}
      <div className="relative bg-gradient-to-b from-[#ffffff] via-[#fbf8fe] to-[#f5effb] rounded-3xl sm:rounded-[36px] border-[1.5px] border-[rgba(55,12,99,0.18)] shadow-[0_20px_60px_-20px_rgba(55,12,99,0.16)] p-5 sm:p-8 lg:p-10 overflow-hidden">
        
        {/* Ambient decorative glowing spots */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 via-[#370c63]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 via-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Top Badges & Country Switcher */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(55,12,99,0.12)]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#370c63]/10 border border-[#370c63]/25 text-[#370c63] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#370c63]" />
              <span>OFFICIAL 2026 RECRUITMENT DRIVES</span>
              <span>• VERIFIED SPONSORSHIPS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#150a2e] tracking-tight font-sora">
              Direct International Vacancies 2026
            </h2>
            
            <p className="text-xs sm:text-sm text-[#5d5276] mt-1.5 leading-relaxed max-w-2xl">
              100% verified employer quotas with direct work permits, LMIA approvals, and EU Blue Card sponsorship queues. Select your destination country to browse official vacancies.
            </p>
          </div>

          {/* Destination Selector Tabs */}
          <div className="bg-white/95 p-1.5 rounded-2xl border border-[rgba(55,12,99,0.15)] shadow-xs flex items-center gap-1.5 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => { setSelectedCountry("Canada"); setSearchQuery(""); }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedCountry === "Canada"
                  ? "bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] text-white shadow-md shadow-[rgba(55,12,99,0.3)]"
                  : "text-[#4b3d69] hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span className="text-base">🍁</span>
              <span>Canada 2026</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                selectedCountry === "Canada" ? "bg-white/20 text-white" : "bg-purple-100 text-[#370c63]"
              }`}>
                19 Roles
              </span>
            </button>

            <button
              type="button"
              onClick={() => { setSelectedCountry("Luxembourg"); setSearchQuery(""); }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedCountry === "Luxembourg"
                  ? "bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] text-white shadow-md shadow-[rgba(55,12,99,0.3)]"
                  : "text-[#4b3d69] hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span className="text-base">🇱🇺</span>
              <span>Luxembourg 2026</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                selectedCountry === "Luxembourg" ? "bg-white/20 text-white" : "bg-purple-100 text-[#370c63]"
              }`}>
                22 Roles
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Drive Header Metrics Banner */}
        <div className="relative z-10 pt-6 pb-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[rgba(55,12,99,0.12)] p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#370c63]/10 border border-[#370c63]/20 flex items-center justify-center text-2xl shrink-0">
                  {selectedCountry === "Canada" ? "🍁" : "🇱🇺"}
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#6b5f88]">
                    {selectedCountry === "Canada" ? "CANADA WORK PERMIT DRIVE" : "LUXEMBOURG EU WORK PERMIT DRIVE"}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#1b1035]">
                    {selectedCountry === "Canada" ? "Official Canadian LMIA Batch" : "Grand Duchy of Luxembourg Quota"}
                  </div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-6">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Seats</div>
                  <div className="text-xl sm:text-2xl font-black text-[#370c63]">
                    {selectedCountry === "Canada" ? `${TOTAL_CANADA_2026_VACANCIES} Vacancies` : `${TOTAL_LUXEMBOURG_2026_VACANCIES} Vacancies`}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Monthly Salary</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-800">
                    {selectedCountry === "Canada" ? "$3,220 - $5,480" : "3,280 € - 5,280 €"}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleApplyGeneric}
              className="bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#481180] hover:to-[#1a104c] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-md shadow-[rgba(55,12,99,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 self-start lg:self-auto shrink-0"
            >
              <span>Apply for {selectedCountry} Roles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1">
            {(selectedCountry === "Canada" ? canadaCategories : luxembourgCategories).map((cat) => {
              const isSelected = selectedCountry === "Canada" ? selectedCanadaCategory === cat : selectedLuxCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    if (selectedCountry === "Canada") setSelectedCanadaCategory(cat);
                    else setSelectedLuxCategory(cat);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#370c63] text-white shadow-xs"
                      : "bg-white text-[#52446f] hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${selectedCountry} roles, s.no, location...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#370c63] transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Vacancies Display Section */}
        {selectedCountry === "Canada" ? (
          /* ================= CANADA TABLE / CARDS ================= */
          <div className="relative z-10">
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-2xl border border-[rgba(55,12,99,0.12)] overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-[#4d406a]">
                    <th className="py-3.5 px-4 text-center w-14">S.No</th>
                    <th className="py-3.5 px-4">Job Title / Position</th>
                    <th className="py-3.5 px-4 text-center">Vacancies</th>
                    <th className="py-3.5 px-4">Monthly Salary</th>
                    <th className="py-3.5 px-4">Location</th>
                    <th className="py-3.5 px-4">Work Permit Status</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {filteredCanada.map((job) => (
                    <tr key={job.id} className="hover:bg-purple-50/40 transition-colors group">
                      <td className="py-3.5 px-4 text-center font-black text-slate-400 group-hover:text-[#370c63]">
                        #{job.sNo}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-extrabold text-slate-900 group-hover:text-[#370c63] transition-colors flex items-center gap-1.5">
                          <span>{job.title}</span>
                          {job.vacancies >= 50 && (
                            <span className="text-[9px] bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.2 rounded font-black uppercase">
                              High Demand
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{job.experienceRequired}</div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 bg-[#370c63]/10 text-[#370c63] font-black px-2.5 py-1 rounded-full text-xs">
                          <Users className="w-3 h-3" />
                          <span>{job.vacancies}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-extrabold text-emerald-800 text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                          {job.salaryMonthly}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1 text-slate-600 font-medium">
                          <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                          <span className="line-clamp-1">{job.location}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{job.lmiaStatus}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleApplyCanada(job)}
                          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#481180] hover:to-[#1a104c] text-white font-black text-xs px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
              {filteredCanada.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl border border-[rgba(55,12,99,0.12)] p-4 shadow-2xs space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-[#370c63] bg-[#370c63]/10 px-2 py-0.5 rounded-md">
                          #{job.sNo}
                        </span>
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase">{job.category}</span>
                      </div>
                      <h4 className="font-black text-slate-900 text-sm mt-1">{job.title}</h4>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-[#370c63]/10 text-[#370c63] font-black px-2.5 py-1 rounded-full text-xs shrink-0">
                      <Users className="w-3 h-3" />
                      <span>{job.vacancies} Seats</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Monthly Salary</span>
                      <span className="font-extrabold text-emerald-800">{job.salaryMonthly}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Location</span>
                      <span className="font-bold text-slate-700 line-clamp-1">{job.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-bold text-slate-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      LMIA Sponsorship
                    </span>
                    <button
                      type="button"
                      onClick={() => handleApplyCanada(job)}
                      className="bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] text-white font-black text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ================= LUXEMBOURG TABLE / CARDS ================= */
          <div className="relative z-10">
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-2xl border border-[rgba(55,12,99,0.12)] overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-[#4d406a]">
                    <th className="py-3.5 px-4 text-center w-14">S.No</th>
                    <th className="py-3.5 px-4">Trade / Category</th>
                    <th className="py-3.5 px-4 text-center">Vacancies</th>
                    <th className="py-3.5 px-4">Monthly Salary (EUR)</th>
                    <th className="py-3.5 px-4">Location</th>
                    <th className="py-3.5 px-4">Permit Type</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {filteredLuxembourg.map((job) => (
                    <tr key={job.id} className="hover:bg-purple-50/40 transition-colors group">
                      <td className="py-3.5 px-4 text-center font-black text-slate-400 group-hover:text-[#370c63]">
                        #{job.sNo}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-extrabold text-slate-900 group-hover:text-[#370c63] transition-colors flex items-center gap-1.5">
                          <span>{job.category}</span>
                          {job.vacancies >= 30 && (
                            <span className="text-[9px] bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.2 rounded font-black uppercase">
                              Hot Quota
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{job.experienceRequired}</div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 bg-[#370c63]/10 text-[#370c63] font-black px-2.5 py-1 rounded-full text-xs">
                          <Users className="w-3 h-3" />
                          <span>{job.vacancies}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-extrabold text-emerald-800 text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                          {job.salaryMonthly}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1 text-slate-600 font-medium">
                          <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                          <span className="line-clamp-1">{job.location}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{job.permitType}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleApplyLuxembourg(job)}
                          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#481180] hover:to-[#1a104c] text-white font-black text-xs px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
              {filteredLuxembourg.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl border border-[rgba(55,12,99,0.12)] p-4 shadow-2xs space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-[#370c63] bg-[#370c63]/10 px-2 py-0.5 rounded-md">
                          #{job.sNo}
                        </span>
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase">{job.sector}</span>
                      </div>
                      <h4 className="font-black text-slate-900 text-sm mt-1">{job.category}</h4>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-[#370c63]/10 text-[#370c63] font-black px-2.5 py-1 rounded-full text-xs shrink-0">
                      <Users className="w-3 h-3" />
                      <span>{job.vacancies} Seats</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Monthly Salary</span>
                      <span className="font-extrabold text-emerald-800">{job.salaryMonthly}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Location</span>
                      <span className="font-bold text-slate-700 line-clamp-1">{job.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-bold text-slate-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {job.permitType.split("/")[0]}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleApplyLuxembourg(job)}
                      className="bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] text-white font-black text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Trust & Compliance Guarantee */}
        <div className="relative z-10 mt-6 pt-5 border-t border-[rgba(55,12,99,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#52446f]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Zero Advance Fee Policy:</strong> Employer quotas backed by TravlTik Escrow. Direct embassy submission support.
            </span>
          </div>
          <div className="text-[11px] font-bold text-slate-500">
            Drive Valid for 2026 Batch · Real-time Quota Allocation
          </div>
        </div>

      </div>

      {/* Unified Application Modal (collects Full Name, Age, WhatsApp, Why you want this job) */}
      <JobDriveApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialJob={selectedJobForModal}
        initialCountry={selectedCountry}
      />
    </section>
  );
}
