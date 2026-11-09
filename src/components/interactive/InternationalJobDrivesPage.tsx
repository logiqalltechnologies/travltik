import React, { useState } from "react";
import {
  Briefcase, MapPin, DollarSign, Users, Shield, ArrowRight,
  Sparkles, CheckCircle2, Search, Filter, AlertCircle, Building2,
  Calendar, Check, ExternalLink, Globe, Star, Award, ShieldCheck,
  ChevronRight, Lock, Clock, FileCheck, LayoutGrid, List
} from "lucide-react";
import { CANADA_VACANCIES_2026, TOTAL_CANADA_2026_VACANCIES, type CanadaJobVacancy } from "../../data/canadaJobs2026";
import { LUXEMBOURG_VACANCIES_2026, TOTAL_LUXEMBOURG_2026_VACANCIES, type LuxembourgJobVacancy } from "../../data/luxembourgJobs2026";
import { JobDriveApplicationModal, type DriveJobItem } from "./JobDriveApplicationModal";

// Thematic high-quality photography mapping for roles
const canadaRoleImages: Record<string, string> = {
  "can-2026-01": "/images/job_tech_engineer.png",
  "can-2026-02": "/images/construction_site.png",
  "can-2026-03": "/images/dest_canada_cold.png",
  "can-2026-04": "/images/construction_worker.png",
  "can-2026-05": "/images/luggage_hero_hd.png",
  "can-2026-06": "/images/job_chef_london.png",
  "can-2026-07": "/images/boardroom_team.png",
  "can-2026-08": "/images/construction_worker.jpg",
  "can-2026-09": "/images/construction_site.png",
  "can-2026-10": "/images/construction_worker.png",
  "can-2026-11": "/images/hero_lounge.png",
  "can-2026-12": "/images/luggage_hero_hd.png",
  "can-2026-13": "/images/construction_site.png",
  "can-2026-14": "/images/hero-traveler-bg.jpg",
  "can-2026-15": "/images/job_chef_london.png",
  "can-2026-16": "/images/sea_background_one.png",
  "can-2026-17": "/images/hero_lounge.png",
  "can-2026-18": "/images/construction_worker.png",
  "can-2026-19": "/images/boardroom_team.png",
};

const luxembourgRoleImages: Record<string, string> = {
  "lux-2026-01": "/images/construction_worker.png",
  "lux-2026-02": "/images/boardroom_team.png",
  "lux-2026-03": "/images/construction_site.png",
  "lux-2026-04": "/images/sea_background_two.png",
  "lux-2026-05": "/images/construction_worker.png",
  "lux-2026-06": "/images/luggage_hero_hd.png",
  "lux-2026-07": "/images/construction_site.png",
  "lux-2026-08": "/images/construction_site.png",
  "lux-2026-09": "/images/construction_worker.jpg",
  "lux-2026-10": "/images/job_chef_london.png",
  "lux-2026-11": "/images/hero_lounge.png",
  "lux-2026-12": "/images/job_chef_london.png",
  "lux-2026-13": "/images/luggage_hero_hd.png",
  "lux-2026-14": "/images/luggage_hero_hd.png",
  "lux-2026-15": "/images/job_data_scientist_berlin.png",
  "lux-2026-16": "/images/job_tech_engineer.png",
  "lux-2026-17": "/images/job_tech_engineer.png",
  "lux-2026-18": "/images/job_chef_london.png",
  "lux-2026-19": "/images/construction_site.png",
  "lux-2026-20": "/images/luggage_hero_hd.png",
  "lux-2026-21": "/images/boardroom_team.png",
  "lux-2026-22": "/images/hero-traveler-bg.jpg",
};

export function InternationalJobDrivesPage() {
  const [selectedCountry, setSelectedCountry] = useState<"Canada" | "Luxembourg">("Canada");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

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

  const activeCategories = selectedCountry === "Canada" ? canadaCategories : luxembourgCategories;

  // Filtered Canada vacancies
  const filteredCanada = CANADA_VACANCIES_2026.filter(job => {
    const matchesCat = selectedCategory === "All" || job.category === selectedCategory;
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
    const matchesCat = selectedCategory === "All" || job.sector === selectedCategory;
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

  return (
    <div className="w-full bg-[#fbf9fe] text-slate-800 font-sans min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

        {/* TOP BREADCRUMBS & BADGE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(67,15,122,0.08)]">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>›</span>
            <a href="/jobs" className="hover:text-black transition-colors">Overseas Jobs</a>
            <span>›</span>
            <span className="text-[#1b1233] font-bold">2026 International Recruitment Drives</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#f4eff9] border border-[rgba(55,12,99,0.14)] text-[#1b1233] px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider self-start sm:self-auto shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1b1233]" />
            <span>OFFICIAL 2026 RECRUITMENT DRIVES</span>
          </div>
        </div>

        {/* HERO TITLE & INTRO */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b1233] tracking-tight leading-tight">
            Direct International <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#1b1233] via-[#370c63] to-[#581db5] bg-clip-text text-transparent">
              Recruitment Drives 2026
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            100% verified employer quotas with direct work permits, LMIA approvals, and EU Blue Card sponsorship queues. Browse official openings with transparent monthly salaries and TravlTik Escrow protection.
          </p>
        </div>

        {/* 2 FLAGSHIP COUNTRY DRIVE CARDS (Arranged matching Image 2 aesthetic with imagery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CANADA 2026 DRIVE CARD */}
          <div 
            onClick={() => { setSelectedCountry("Canada"); setSelectedCategory("All"); }}
            className={`group relative rounded-[32px] overflow-hidden min-h-[440px] sm:min-h-[460px] p-7 sm:p-9 flex flex-col justify-end text-white cursor-pointer transition-all duration-300 border-[2px] ${selectedCountry === "Canada" ? "border-black shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] ring-2 ring-black/40 scale-[1.01]" : "border-white/30 shadow-[0_16px_40px_-15px_rgba(67,15,122,0.2)] hover:border-white/60 opacity-90 hover:opacity-100"}`}
          >
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
              alt="Canada 2026 Recruitment Drive" 
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 pointer-events-none"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070312] via-[#070312]/80 via-52% to-black/35 pointer-events-none" />

            {/* Top Row: Official Tag & Country Flag Circle */}
            <div className="absolute top-6 inset-x-6 sm:inset-x-8 flex items-center justify-between z-10">
              <span className="bg-black/75 backdrop-blur-md text-white border border-white/25 text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                🍁 OFFICIAL DRIVE 2026
              </span>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg">
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-black tracking-wide text-white uppercase drop-shadow-md">
                CANADA 2026 DRIVE
              </h3>
              <p className="text-xs sm:text-sm text-purple-100/90 font-medium mt-1 drop-shadow-sm">
                19 Job Roles · 987 Total Seats · LMIA Approved
              </p>

              {/* 3-Column Meta Row */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3 mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center text-white">
                <div className="flex flex-col items-center">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-purple-200">ROLES</span>
                  <span className="text-xs sm:text-sm font-black text-white mt-0.5">19 POSITIONS</span>
                </div>
                <div className="flex flex-col items-center border-x border-white/20 px-1">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-purple-200">VACANCIES</span>
                  <span className="text-xs sm:text-sm font-black text-white mt-0.5">{TOTAL_CANADA_2026_VACANCIES} SEATS</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-purple-200">SALARY</span>
                  <span className="text-xs sm:text-sm font-black text-amber-300 mt-0.5">$3.2K-$5.4K/M</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button 
                  type="button"
                  className={`w-full py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${selectedCountry === "Canada" ? "bg-white text-black shadow-lg" : "bg-white/20 hover:bg-white hover:text-black text-white border border-white/30"}`}
                >
                  <span>{selectedCountry === "Canada" ? "✓ Viewing Canada Vacancies (19 Roles)" : "Explore Canada Drive (19 Roles) →"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* LUXEMBOURG 2026 DRIVE CARD */}
          <div 
            onClick={() => { setSelectedCountry("Luxembourg"); setSelectedCategory("All"); }}
            className={`group relative rounded-[32px] overflow-hidden min-h-[440px] sm:min-h-[460px] p-7 sm:p-9 flex flex-col justify-end text-white cursor-pointer transition-all duration-300 border-[2px] ${selectedCountry === "Luxembourg" ? "border-black shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] ring-2 ring-black/40 scale-[1.01]" : "border-white/30 shadow-[0_16px_40px_-15px_rgba(67,15,122,0.2)] hover:border-white/60 opacity-90 hover:opacity-100"}`}
          >
            {/* Background Image */}
            <img 
              src="/images/sea_background_two.png" 
              alt="Luxembourg 2026 Recruitment Drive" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 pointer-events-none"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070312] via-[#070312]/80 via-52% to-black/35 pointer-events-none" />

            {/* Top Row: Official Tag & Country Flag Circle */}
            <div className="absolute top-6 inset-x-6 sm:inset-x-8 flex items-center justify-between z-10">
              <span className="bg-black/75 backdrop-blur-md text-white border border-white/25 text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                🇱🇺 OFFICIAL DRIVE 2026
              </span>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg">
                <img src="https://flagcdn.com/w40/lu.png" alt="Luxembourg" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-black tracking-wide text-white uppercase drop-shadow-md">
                LUXEMBOURG 2026
              </h3>
              <p className="text-xs sm:text-sm text-purple-100/90 font-medium mt-1 drop-shadow-sm">
                22 Job Roles · 538 Total Seats · EU Work Permit
              </p>

              {/* 3-Column Meta Row */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3 mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center text-white">
                <div className="flex flex-col items-center">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-purple-200">ROLES</span>
                  <span className="text-xs sm:text-sm font-black text-white mt-0.5">22 POSITIONS</span>
                </div>
                <div className="flex flex-col items-center border-x border-white/20 px-1">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-purple-200">VACANCIES</span>
                  <span className="text-xs sm:text-sm font-black text-white mt-0.5">{TOTAL_LUXEMBOURG_2026_VACANCIES} SEATS</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-purple-200">SALARY</span>
                  <span className="text-xs sm:text-sm font-black text-amber-300 mt-0.5">€3.2K-€5.8K/M</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button 
                  type="button"
                  className={`w-full py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${selectedCountry === "Luxembourg" ? "bg-white text-black shadow-lg" : "bg-white/20 hover:bg-white hover:text-black text-white border border-white/30"}`}
                >
                  <span>{selectedCountry === "Luxembourg" ? "✓ Viewing Luxembourg Vacancies (22 Roles)" : "Explore Luxembourg Drive (22 Roles) →"}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ACTIVE DRIVE CONTROL & SEARCH SECTION */}
        <div id="vacancies-explorer" className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 shadow-[0_12px_32px_-14px_rgba(67,15,122,0.08)] space-y-6 scroll-mt-24">
          
          {/* Header of Active Batch */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[rgba(67,15,122,0.08)]">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#faf6fe] border border-[rgba(67,15,122,0.14)] flex items-center justify-center p-2 shrink-0 shadow-2xs">
                <img 
                  src={`https://flagcdn.com/w40/${selectedCountry === "Canada" ? "ca" : "lu"}.png`} 
                  alt={selectedCountry} 
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-[#430f7a] bg-[#f4eff9] border border-[rgba(55,12,99,0.12)] px-2.5 py-0.5 rounded-full">
                  {selectedCountry === "Canada" ? "CANADA WORK PERMIT DRIVE" : "LUXEMBOURG EU BLUE CARD DRIVE"}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#1b1233] mt-1">
                  {selectedCountry === "Canada" ? "Official Canadian LMIA Batch" : "Grand Duchy of Luxembourg Quota Batch"}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
              <div className="bg-[#faf8fd] border border-[rgba(67,15,122,0.1)] px-4 py-2 rounded-xl">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">TOTAL SEATS</span>
                <span className="text-sm font-black text-[#1b1233]">
                  {selectedCountry === "Canada" ? `${TOTAL_CANADA_2026_VACANCIES} Vacancies` : `${TOTAL_LUXEMBOURG_2026_VACANCIES} Vacancies`}
                </span>
              </div>
              <div className="bg-[#faf8fd] border border-[rgba(67,15,122,0.1)] px-4 py-2 rounded-xl">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">MONTHLY SALARY</span>
                <span className="text-sm font-black text-[#1b1233]">
                  {selectedCountry === "Canada" ? "$3,220 – $5,480" : "€3,200 – €5,800"}
                </span>
              </div>
            </div>
          </div>

          {/* Filtering Pills & Live Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {activeCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${selectedCategory === cat ? "bg-black text-white shadow-sm" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Controls: Search + View Toggle */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Search Input */}
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${selectedCountry} roles, s.no, category...`}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-[#faf8fd] text-xs font-semibold text-slate-800 focus:outline-none focus:border-black focus:bg-white transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black text-xs font-bold">
                    ✕
                  </button>
                )}
              </div>

              {/* View Toggle (Cards vs Table) */}
              <div className="flex items-center gap-1 bg-[#f4eff9] p-1 rounded-xl border border-[rgba(55,12,99,0.12)] shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("cards")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${viewMode === "cards" ? "bg-black text-white shadow-xs" : "text-slate-600 hover:text-black"}`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${viewMode === "table" ? "bg-black text-white shadow-xs" : "text-slate-600 hover:text-black"}`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span>Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* CONTENT: VIEW MODE SWITCH (CARDS VS TABLE) */}
          <div className="pt-2">
            {viewMode === "cards" ? (
              /* GRID OF HIGH QUALITY PHOTOGRAPHIC JOB CARDS */
              selectedCountry === "Canada" ? (
                filteredCanada.length === 0 ? (
                  <div className="text-center py-16 bg-[#faf8fd] rounded-2xl border border-dashed border-slate-300">
                    <Briefcase className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm font-bold text-slate-600">No Canada roles match your filter.</p>
                    <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="mt-3 text-xs font-bold text-[#430f7a] hover:underline">
                      Clear all filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCanada.map((job) => (
                      <div
                        key={job.id}
                        className="group bg-white rounded-[26px] border-[1.5px] border-[rgba(67,15,122,0.12)] hover:border-black shadow-[0_10px_30px_-15px_rgba(67,15,122,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                      >
                        {/* Photographic Card Header */}
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                          <img 
                            src={canadaRoleImages[job.id] || "/images/job_tech_engineer.png"} 
                            alt={job.title}
                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 pointer-events-none"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent pointer-events-none" />

                          {/* Top Badges */}
                          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                            <span className="bg-black/75 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                              #{String(job.sNo).padStart(2, '0')} · {job.category}
                            </span>
                            <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-[11px] font-bold">
                              <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-4 h-3 object-cover rounded-xs" />
                              <span>Canada</span>
                            </div>
                          </div>

                          {/* Job Title on bottom of image */}
                          <div className="absolute bottom-3 inset-x-3.5 z-10">
                            <h4 className="text-lg font-black text-white uppercase tracking-wide drop-shadow-md line-clamp-1">
                              {job.title}
                            </h4>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-3">
                            {/* Metrics Bar */}
                            <div className="grid grid-cols-2 gap-2 bg-[#faf8fd] p-3 rounded-xl border border-[rgba(67,15,122,0.08)] text-center">
                              <div>
                                <span className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold block">MONTHLY SALARY</span>
                                <span className="text-sm font-black text-[#1b1233]">{job.salaryMonthly}</span>
                              </div>
                              <div className="border-l border-[rgba(67,15,122,0.1)]">
                                <span className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold block">OPEN VACANCIES</span>
                                <span className="text-sm font-black text-[#430f7a]">{job.vacancies} Seats</span>
                              </div>
                            </div>

                            {/* Info Pills */}
                            <div className="flex items-center gap-1.5 flex-wrap text-[10.5px] font-bold">
                              <span className="bg-[#f4eff9] text-[#1b1233] border border-[rgba(55,12,99,0.12)] px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#1b1233]" /> {job.lmiaStatus}
                              </span>
                              <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-400" /> {job.location}
                              </span>
                              <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" /> {job.experienceRequired}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {job.description}
                            </p>
                          </div>

                          {/* Apply Button */}
                          <div className="pt-3 border-t border-[rgba(67,15,122,0.08)]">
                            <button
                              onClick={() => handleApplyCanada(job)}
                              className="w-full bg-black hover:bg-[#1b1233] text-white text-xs font-black uppercase tracking-wider py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                            >
                              <span>Apply for Canada Role</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                filteredLuxembourg.length === 0 ? (
                  <div className="text-center py-16 bg-[#faf8fd] rounded-2xl border border-dashed border-slate-300">
                    <Briefcase className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm font-bold text-slate-600">No Luxembourg roles match your filter.</p>
                    <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="mt-3 text-xs font-bold text-[#430f7a] hover:underline">
                      Clear all filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLuxembourg.map((job) => (
                      <div
                        key={job.id}
                        className="group bg-white rounded-[26px] border-[1.5px] border-[rgba(67,15,122,0.12)] hover:border-black shadow-[0_10px_30px_-15px_rgba(67,15,122,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                      >
                        {/* Photographic Card Header */}
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                          <img 
                            src={luxembourgRoleImages[job.id] || "/images/construction_worker.png"} 
                            alt={job.category}
                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 pointer-events-none"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent pointer-events-none" />

                          {/* Top Badges */}
                          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                            <span className="bg-black/75 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                              #{String(job.sNo).padStart(2, '0')} · {job.sector}
                            </span>
                            <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-[11px] font-bold">
                              <img src="https://flagcdn.com/w40/lu.png" alt="Luxembourg" className="w-4 h-3 object-cover rounded-xs" />
                              <span>Luxembourg</span>
                            </div>
                          </div>

                          {/* Job Title on bottom of image */}
                          <div className="absolute bottom-3 inset-x-3.5 z-10">
                            <h4 className="text-lg font-black text-white uppercase tracking-wide drop-shadow-md line-clamp-1">
                              {job.category}
                            </h4>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-3">
                            {/* Metrics Bar */}
                            <div className="grid grid-cols-2 gap-2 bg-[#faf8fd] p-3 rounded-xl border border-[rgba(67,15,122,0.08)] text-center">
                              <div>
                                <span className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold block">MONTHLY SALARY</span>
                                <span className="text-sm font-black text-[#1b1233]">{job.salaryMonthly}</span>
                              </div>
                              <div className="border-l border-[rgba(67,15,122,0.1)]">
                                <span className="text-[9.5px] uppercase tracking-wider text-slate-400 font-bold block">OPEN VACANCIES</span>
                                <span className="text-sm font-black text-[#430f7a]">{job.vacancies} Seats</span>
                              </div>
                            </div>

                            {/* Info Pills */}
                            <div className="flex items-center gap-1.5 flex-wrap text-[10.5px] font-bold">
                              <span className="bg-[#f4eff9] text-[#1b1233] border border-[rgba(55,12,99,0.12)] px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#1b1233]" /> {job.permitType}
                              </span>
                              <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-400" /> {job.location}
                              </span>
                              <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" /> {job.experienceRequired}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {job.description}
                            </p>
                          </div>

                          {/* Apply Button */}
                          <div className="pt-3 border-t border-[rgba(67,15,122,0.08)]">
                            <button
                              onClick={() => handleApplyLuxembourg(job)}
                              className="w-full bg-black hover:bg-[#1b1233] text-white text-xs font-black uppercase tracking-wider py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                            >
                              <span>Apply for Luxembourg Role</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )
            ) : (
              /* RESPONSIVE STRUCTURED TABLE VIEW */
              <div className="overflow-x-auto rounded-2xl border border-[rgba(67,15,122,0.12)] bg-white shadow-xs">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-[#faf8fd] text-[10.5px] font-black uppercase tracking-wider text-slate-500 border-b border-[rgba(67,15,122,0.08)]">
                    <tr>
                      <th className="py-3.5 px-4">S.No</th>
                      <th className="py-3.5 px-4">Job Title / Position</th>
                      <th className="py-3.5 px-4">Vacancies</th>
                      <th className="py-3.5 px-4">Monthly Salary</th>
                      <th className="py-3.5 px-4">Location</th>
                      <th className="py-3.5 px-4">Work Permit Status</th>
                      <th className="py-3.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(67,15,122,0.06)] font-semibold text-slate-700">
                    {selectedCountry === "Canada" ? (
                      filteredCanada.map((job) => (
                        <tr key={job.id} className="hover:bg-[#fbf9fe] transition-colors">
                          <td className="py-3.5 px-4 font-black text-slate-400">#{job.sNo}</td>
                          <td className="py-3.5 px-4">
                            <div className="font-black text-[#1b1233] text-[13px]">{job.title}</div>
                            <div className="text-[10px] text-slate-400 font-medium">{job.category} · {job.experienceRequired}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="bg-[#f4eff9] text-[#1b1233] px-2 py-0.5 rounded-md font-black text-[11px]">
                              {job.vacancies} Seats
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-black text-[#1b1233] text-[13px]">{job.salaryMonthly}</td>
                          <td className="py-3.5 px-4 text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>{job.location}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1b1233] bg-[#f4eff9] px-2 py-0.5 rounded-md border border-[rgba(55,12,99,0.12)]">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
                              <span>{job.lmiaStatus}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleApplyCanada(job)}
                              className="bg-black hover:bg-[#1b1233] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-3.5 rounded-lg transition-all shadow-xs cursor-pointer"
                            >
                              Apply Now
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      filteredLuxembourg.map((job) => (
                        <tr key={job.id} className="hover:bg-[#fbf9fe] transition-colors">
                          <td className="py-3.5 px-4 font-black text-slate-400">#{job.sNo}</td>
                          <td className="py-3.5 px-4">
                            <div className="font-black text-[#1b1233] text-[13px]">{job.category}</div>
                            <div className="text-[10px] text-slate-400 font-medium">{job.sector} · {job.experienceRequired}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="bg-[#f4eff9] text-[#1b1233] px-2 py-0.5 rounded-md font-black text-[11px]">
                              {job.vacancies} Seats
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-black text-[#1b1233] text-[13px]">{job.salaryMonthly}</td>
                          <td className="py-3.5 px-4 text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>{job.location}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1b1233] bg-[#f4eff9] px-2 py-0.5 rounded-md border border-[rgba(55,12,99,0.12)]">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
                              <span>{job.permitType}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleApplyLuxembourg(job)}
                              className="bg-black hover:bg-[#1b1233] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-3.5 rounded-lg transition-all shadow-xs cursor-pointer"
                            >
                              Apply Now
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>

        {/* TRUST & ESCROW COMPLIANCE FOOTER */}
        <div className="bg-white rounded-3xl border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f4eff9] text-[#1b1233] flex items-center justify-center shrink-0 border border-purple-200/60 shadow-2xs">
              <Shield className="w-6 h-6 text-[#1b1233]" />
            </div>
            <div>
              <h4 className="text-sm font-black text-[#1b1233] uppercase tracking-wide">TravlTik Escrow &amp; Quota Compliance Guarantee</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                All candidates are protected by 100% milestone escrow. No advance recruiter fees are disbursed until your official work permit and visa approval are delivered.
              </p>
            </div>
          </div>
          <a
            href="/jobs"
            className="text-xs font-extrabold text-[#1b1233] hover:text-[#430f7a] border border-[rgba(67,15,122,0.18)] bg-white hover:bg-[#faf8fd] px-5 py-2.5 rounded-xl transition-all shadow-2xs shrink-0 whitespace-nowrap"
          >
            Explore General Jobs →
          </a>
        </div>

      </div>

      {/* APPLICATION MODAL */}
      <JobDriveApplicationModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedJobForModal(null);
        }}
        initialJob={selectedJobForModal}
        initialCountry={selectedCountry}
      />
    </div>
  );
}
