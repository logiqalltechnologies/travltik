import React, { useState } from "react";
import {
  Briefcase, MapPin, DollarSign, Users, Shield, ArrowRight,
  Sparkles, CheckCircle2, Search, Filter, AlertCircle
} from "lucide-react";
import { CANADA_VACANCIES_2026, TOTAL_CANADA_2026_VACANCIES, type CanadaJobVacancy } from "../../data/canadaJobs2026";
import { CanadaJobVacancyModal } from "./CanadaJobVacancyModal";

export function CanadaJobVacancyShowcase() {
  const [selectedJobForModal, setSelectedJobForModal] = useState<CanadaJobVacancy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const categories = [
    "All",
    "IT & Admin",
    "Engineering & Skilled Trades",
    "Hospitality & Food",
    "General & Operations"
  ];

  const filtered = CANADA_VACANCIES_2026.filter(job => {
    const matchesCat = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch = !searchFilter.trim() ||
      job.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      job.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
      String(job.sNo) === searchFilter.trim();
    return matchesCat && matchesSearch;
  });

  const handleApply = (job: CanadaJobVacancy) => {
    setSelectedJobForModal(job);
    setIsModalOpen(true);
  };

  return (
    <section id="canada-2026-drive" className="relative w-full my-10 sm:my-14 scroll-mt-24">
      {/* Container with Royal Violet & Canadian Maple accents */}
      <div className="relative bg-gradient-to-b from-[#ffffff] via-[#faf7fd] to-[#f4eff9] rounded-3xl sm:rounded-[36px] border-[1.5px] border-[rgba(55,12,99,0.15)] shadow-[0_20px_50px_-20px_rgba(55,12,99,0.18)] p-5 sm:p-8 lg:p-10 overflow-hidden">
        
        {/* Subtle background ambient watermark */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/5 via-[#370c63]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 -right-6 text-9xl opacity-5 select-none pointer-events-none">🍁</div>
        <div className="absolute -bottom-10 -left-6 text-9xl opacity-5 select-none pointer-events-none">🍁</div>

        {/* Header Block */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[rgba(55,12,99,0.1)]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#8b0000]/10 border border-[#8b0000]/25 text-[#8b0000] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
              <span>🍁 OFFICIAL RECRUITMENT DRIVE</span>
              <span className="text-[#370c63]">• 2026 BATCH</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b1233] tracking-tight font-sora">
              CANADA JOB VACANCY 2026
            </h2>
            
            <p className="text-xs sm:text-sm text-[#675f80] mt-2 leading-relaxed">
              Verified LMIA employer opportunities across Canada with salaries from <strong className="text-slate-900">$3,220 to $5,480/month</strong>. Work permit guidance and direct employer interview queues available.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <div className="bg-white rounded-2xl border border-[rgba(55,12,99,0.12)] p-3.5 px-5 shadow-2xs text-center flex-1 sm:flex-auto">
              <div className="text-[10px] font-bold text-[#675f80] uppercase tracking-wider">Total Openings</div>
              <div className="text-2xl font-black text-[#370c63]">{TOTAL_CANADA_2026_VACANCIES} Seats</div>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(55,12,99,0.12)] p-3.5 px-5 shadow-2xs text-center flex-1 sm:flex-auto">
              <div className="text-[10px] font-bold text-[#675f80] uppercase tracking-wider">Positions</div>
              <div className="text-2xl font-black text-[#8b0000]">19 Categories</div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedJobForModal(CANADA_VACANCIES_2026[0]);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#4f118c] hover:via-[#6c22c3] hover:to-[#892dd8] text-white font-black text-xs sm:text-sm px-6 py-4 rounded-2xl shadow-md shadow-[rgba(55,12,99,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Apply for Any Role</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3 pt-6 pb-4">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#370c63] text-white shadow-2xs scale-[1.02]"
                    : "bg-white text-slate-700 hover:bg-[#f4eff9] border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search job title or city..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold focus:outline-none focus:border-[#370c63]"
            />
          </div>
        </div>

        {/* Vacancy Table / Grid */}
        <div className="relative z-10 mt-3 overflow-hidden rounded-2xl border border-[rgba(55,12,99,0.12)] bg-white shadow-xs">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#8b0000] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  <th className="py-3.5 px-4 w-16 text-center">S.No</th>
                  <th className="py-3.5 px-4">Job Title</th>
                  <th className="py-3.5 px-4 text-center">Openings</th>
                  <th className="py-3.5 px-4">Salary (Dollar)$</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Location</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">Permit Type</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(55,12,99,0.08)] text-xs sm:text-sm font-medium text-slate-800">
                {filtered.map((job, idx) => (
                  <tr 
                    key={job.id}
                    className={`hover:bg-[#faf7fd] transition-colors ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    {/* S.No */}
                    <td className="py-3 px-4 text-center font-bold text-slate-500">
                      {job.sNo}.
                    </td>

                    {/* Job Title */}
                    <td className="py-3 px-4">
                      <div className="font-extrabold text-[#1b1233] flex items-center gap-1.5">
                        <span>{job.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block sm:hidden">
                        {job.location}
                      </span>
                    </td>

                    {/* Openings Count */}
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center justify-center font-black px-2.5 py-0.5 rounded-full text-xs bg-red-50 text-[#8b0000] border border-red-200">
                        {job.vacancies}
                      </span>
                    </td>

                    {/* Salary */}
                    <td className="py-3 px-4">
                      <span className="font-extrabold text-[#065f46]">
                        {job.salaryMonthly}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-normal">per month</span>
                    </td>

                    {/* Location */}
                    <td className="py-3 px-4 hidden md:table-cell text-slate-600 text-xs">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate max-w-[140px]">{job.location}</span>
                      </div>
                    </td>

                    {/* Permit Type */}
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#370c63] bg-[#f4eff9] border border-[rgba(55,12,99,0.12)] px-2.5 py-0.5 rounded-md">
                        {job.lmiaStatus}
                      </span>
                    </td>

                    {/* Action Button (NO GREENISH BUTTON) */}
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleApply(job)}
                        className="inline-flex items-center gap-1 bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#4f118c] hover:via-[#6c22c3] hover:to-[#892dd8] text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-xs">
              No vacancies matching &ldquo;{searchFilter}&rdquo;. Try another keyword.
            </div>
          )}
        </div>

        {/* Footer Note with Escrow and IRCC compliance assurance */}
        <div className="relative z-10 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-[#675f80]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#370c63] shrink-0" />
            <span>Employer-sponsored openings comply with Canada Temporary Foreign Worker Program (TFWP) regulations.</span>
          </div>

          <div className="font-bold text-[#370c63]">
            Official Canada 2026 Batch · Intake Closes When Slots Fill
          </div>
        </div>

      </div>

      {/* Interactive Application Modal */}
      <CanadaJobVacancyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedJob={selectedJobForModal}
        onJobSelect={(j) => setSelectedJobForModal(j)}
      />
    </section>
  );
}
