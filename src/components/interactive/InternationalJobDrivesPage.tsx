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

// Thematic high-quality photography mapping for roles (100% verified photorealistic)
const canadaRoleImages: Record<string, string> = {
  "can-2026-01": "/images/job_tech_engineer.png",
  "can-2026-02": "/images/construction_site.png",
  "can-2026-03": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Food packing / logistics hub
  "can-2026-04": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", // A/C Technician HVAC
  "can-2026-05": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop", // Driver (Light & Commercial)
  "can-2026-06": "/images/job_chef_london.png", // Chef
  "can-2026-07": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop", // Waiter / Hospitality
  "can-2026-08": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", // Supervisor
  "can-2026-09": "/images/job_data_scientist_berlin.png", // Computer Operator (IT & Systems)
  "can-2026-10": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop", // Security Guard
  "can-2026-11": "/images/hero_lounge.png", // Hotel Manager
  "can-2026-12": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop", // Plumber
  "can-2026-13": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop", // Carpenter
  "can-2026-14": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", // Tile Mason
  "can-2026-15": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", // Housekeeping Attendant
  "can-2026-16": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop", // Electrician
  "can-2026-17": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop", // Data Entry Specialist
  "can-2026-18": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop", // Accountant
  "can-2026-19": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Store Keeper / Inventory
};

const luxembourgRoleImages: Record<string, string> = {
  "lux-2026-01": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop", // Welder
  "lux-2026-02": "/images/boardroom_team.png", // Manager
  "lux-2026-03": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop", // Helper
  "lux-2026-04": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Food Packing
  "lux-2026-05": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", // A/C Technician
  "lux-2026-06": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop", // Driver
  "lux-2026-07": "/images/construction_site.png", // Construction Worker
  "lux-2026-08": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop", // Electrician
  "lux-2026-09": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop", // Plumber
  "lux-2026-10": "/images/job_chef_london.png", // Chef
  "lux-2026-11": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop", // Waiter
  "lux-2026-12": "/images/job_chef_london.png", // Kitchen Steward
  "lux-2026-13": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Forklift Operator
  "lux-2026-14": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Warehouse Worker
  "lux-2026-15": "/images/job_data_scientist_berlin.png", // Logistics Coordinator
  "lux-2026-16": "/images/job_tech_engineer.png", // Computer Operator
  "lux-2026-17": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop", // Accountant
  "lux-2026-18": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop", // Bartender
  "lux-2026-19": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop", // Carpenter
  "lux-2026-20": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", // Cleaner
  "lux-2026-21": "/images/boardroom_team.png", // HR Assistant
  "lux-2026-22": "/images/hero_lounge.png", // Hotel Receptionist
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
    <div className="w-full bg-[#fbf9fe] text-slate-800 font-sans min-h-screen py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* TOP BREADCRUMBS & BADGES */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(67,15,122,0.08)]">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>›</span>
            <a href="/jobs" className="hover:text-black transition-colors">Jobs</a>
            <span>›</span>
            <span className="text-[#1b1233] font-bold">Official 2026 Recruitment Drives</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#f4eff9] border border-[rgba(55,12,99,0.14)] text-[#1b1233] px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1b1233]" />
              <span>OFFICIAL 2026 RECRUITMENT DRIVES</span>
            </span>
          </div>
        </div>

        {/* HERO TITLE & INTRO */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#1b1233] tracking-tight leading-tight">
            Direct Overseas Recruitment Drives{" "}
            <span className="bg-gradient-to-r from-black via-[#1b1233] to-[#370c63] bg-clip-text text-transparent">
              2026
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            100% verified employer allocations with guaranteed visa sponsorship queues, LMIA approvals, and EU Blue Card work permits. Apply with TravlTik Escrow protection.
          </p>
        </div>

        {/* 2 FLAGSHIP COUNTRY DRIVE SELECTOR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          
          {/* CANADA 2026 DRIVE CARD */}
          <div 
            onClick={() => { setSelectedCountry("Canada"); setSelectedCategory("All"); }}
            className={`group relative rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[360px] p-6 sm:p-7 flex flex-col justify-end text-white cursor-pointer transition-all duration-300 border-[2px] ${selectedCountry === "Canada" ? "border-black shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)] ring-2 ring-black/40" : "border-white/30 shadow-[0_12px_30px_-12px_rgba(67,15,122,0.18)] hover:border-white/60 opacity-90 hover:opacity-100"}`}
          >
            {/* Background Image */}
            <img 
              src="/images/dest_canada_cold.png" 
              alt="Canada 2026 Recruitment Drive" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            {/* Multi-stage Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070312] via-[#070312]/75 via-50% to-black/35 pointer-events-none" />

            {/* Top Row: Official Tag & Country Flag Circle */}
            <div className="absolute top-5 inset-x-5 sm:inset-x-6 flex items-center justify-between z-10">
              <span className="bg-black/80 backdrop-blur-md text-white border border-white/20 text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                🍁 OFFICIAL DRIVE 2026
              </span>
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-black tracking-wide text-white uppercase drop-shadow-md">
                  CANADA 2026 DRIVE
                </h3>
                {selectedCountry === "Canada" && (
                  <span className="bg-white text-black text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    ● Selected
                  </span>
                )}
              </div>
              <p className="text-xs text-purple-100/90 font-medium mt-0.5 drop-shadow-sm">
                19 Job Roles · 987 Total Seats · LMIA Approved
              </p>

              {/* 3-Column Meta Row */}
              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 mt-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center text-white">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-purple-200">ROLES</span>
                  <span className="text-xs sm:text-[13px] font-black text-white mt-0.5">19 POSITIONS</span>
                </div>
                <div className="flex flex-col items-center border-x border-white/20 px-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-purple-200">VACANCIES</span>
                  <span className="text-xs sm:text-[13px] font-black text-white mt-0.5">{TOTAL_CANADA_2026_VACANCIES} SEATS</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-purple-200">SALARY</span>
                  <span className="text-xs sm:text-[13px] font-black text-amber-300 mt-0.5">$3.2K-$5.4K/M</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-3.5">
                <button 
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${selectedCountry === "Canada" ? "bg-white text-black shadow-lg" : "bg-white/20 hover:bg-white hover:text-black text-white border border-white/30"}`}
                >
                  <span>{selectedCountry === "Canada" ? "✓ Viewing Canada Vacancies (19 Roles)" : "Explore Canada Drive (19 Roles) →"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* LUXEMBOURG 2026 DRIVE CARD */}
          <div 
            onClick={() => { setSelectedCountry("Luxembourg"); setSelectedCategory("All"); }}
            className={`group relative rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[360px] p-6 sm:p-7 flex flex-col justify-end text-white cursor-pointer transition-all duration-300 border-[2px] ${selectedCountry === "Luxembourg" ? "border-black shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)] ring-2 ring-black/40" : "border-white/30 shadow-[0_12px_30px_-12px_rgba(67,15,122,0.18)] hover:border-white/60 opacity-90 hover:opacity-100"}`}
          >
            {/* Background Image */}
            <img 
              src="/images/sea_background_two.png" 
              alt="Luxembourg 2026 Recruitment Drive" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            {/* Multi-stage Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070312] via-[#070312]/75 via-50% to-black/35 pointer-events-none" />

            {/* Top Row: Official Tag & Country Flag Circle */}
            <div className="absolute top-5 inset-x-5 sm:inset-x-6 flex items-center justify-between z-10">
              <span className="bg-black/80 backdrop-blur-md text-white border border-white/20 text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                🇱🇺 OFFICIAL DRIVE 2026
              </span>
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
                <img src="https://flagcdn.com/w40/lu.png" alt="Luxembourg" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-black tracking-wide text-white uppercase drop-shadow-md">
                  LUXEMBOURG 2026
                </h3>
                {selectedCountry === "Luxembourg" && (
                  <span className="bg-white text-black text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    ● Selected
                  </span>
                )}
              </div>
              <p className="text-xs text-purple-100/90 font-medium mt-0.5 drop-shadow-sm">
                22 Job Roles · 538 Total Seats · EU Work Permit
              </p>

              {/* 3-Column Meta Row */}
              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 mt-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center text-white">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-purple-200">ROLES</span>
                  <span className="text-xs sm:text-[13px] font-black text-white mt-0.5">22 POSITIONS</span>
                </div>
                <div className="flex flex-col items-center border-x border-white/20 px-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-purple-200">VACANCIES</span>
                  <span className="text-xs sm:text-[13px] font-black text-white mt-0.5">{TOTAL_LUXEMBOURG_2026_VACANCIES} SEATS</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-purple-200">SALARY</span>
                  <span className="text-xs sm:text-[13px] font-black text-amber-300 mt-0.5">€3.2K-€5.8K/M</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-3.5">
                <button 
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${selectedCountry === "Luxembourg" ? "bg-white text-black shadow-lg" : "bg-white/20 hover:bg-white hover:text-black text-white border border-white/30"}`}
                >
                  <span>{selectedCountry === "Luxembourg" ? "✓ Viewing Luxembourg Vacancies (22 Roles)" : "Explore Luxembourg Drive (22 Roles) →"}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ACTIVE DRIVE CONTROL & SEARCH SECTION */}
        <div id="vacancies-explorer" className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-7 shadow-[0_12px_32px_-14px_rgba(67,15,122,0.08)] space-y-5 scroll-mt-24">
          
          {/* Header of Active Batch */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[rgba(67,15,122,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#faf6fe] border border-[rgba(67,15,122,0.14)] flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                <img 
                  src={`https://flagcdn.com/w40/${selectedCountry === "Canada" ? "ca" : "lu"}.png`} 
                  alt={selectedCountry} 
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#430f7a] bg-[#f4eff9] border border-[rgba(55,12,99,0.12)] px-2.5 py-0.5 rounded-full">
                  {selectedCountry === "Canada" ? "CANADA WORK PERMIT DRIVE" : "LUXEMBOURG EU BLUE CARD DRIVE"}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#1b1233] mt-0.5">
                  {selectedCountry === "Canada" ? "Official Canadian LMIA Batch" : "Grand Duchy of Luxembourg Quota Batch"}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
              <div className="bg-[#faf8fd] border border-[rgba(67,15,122,0.1)] px-3.5 py-1.5 rounded-xl">
                <span className="text-[9.5px] uppercase tracking-wider text-slate-400 block font-semibold">TOTAL SEATS</span>
                <span className="text-xs sm:text-sm font-black text-[#1b1233]">
                  {selectedCountry === "Canada" ? `${TOTAL_CANADA_2026_VACANCIES} Vacancies` : `${TOTAL_LUXEMBOURG_2026_VACANCIES} Vacancies`}
                </span>
              </div>
              <div className="bg-[#faf8fd] border border-[rgba(67,15,122,0.1)] px-3.5 py-1.5 rounded-xl">
                <span className="text-[9.5px] uppercase tracking-wider text-slate-400 block font-semibold">MONTHLY SALARY</span>
                <span className="text-xs sm:text-sm font-black text-[#1b1233]">
                  {selectedCountry === "Canada" ? "$3,220 – $5,480" : "€3,200 – €5,800"}
                </span>
              </div>
            </div>
          </div>

          {/* Filtering Pills & Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {activeCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${selectedCategory === cat ? "bg-black text-white shadow-xs" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Controls: Search + View Toggle */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {/* Search Input */}
              <div className="relative min-w-[220px] sm:min-w-[260px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${selectedCountry} roles...`}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-[#faf8fd] text-xs font-semibold text-slate-800 focus:outline-none focus:border-black focus:bg-white transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black text-xs font-bold">
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
                        onClick={() => handleApplyCanada(job)}
                        className="group relative rounded-[28px] overflow-hidden min-h-[440px] p-6 flex flex-col justify-end text-white cursor-pointer transition-all duration-350 ease-out border border-white/20 hover:border-white/50 bg-[#090d16] shadow-[0_16px_40px_-15px_rgba(67,15,122,0.22)] hover:shadow-[0_24px_50px_-12px_rgba(67,15,122,0.38)] hover:-translate-y-2 box-border"
                      >
                        {/* Full-bleed Luxury Background Photography */}
                        <img 
                          src={canadaRoleImages[job.id] || "/images/job_tech_engineer.png"} 
                          alt={job.title}
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 pointer-events-none"
                          loading="lazy"
                        />

                        {/* Multi-stage Luxury Gradient Overlay (Exact Landing Page Standard) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/75 via-50% to-transparent pointer-events-none" />

                        {/* Top Row: Landing-page style gradient pill + Round Flag Badge */}
                        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                          <span className="bg-gradient-to-r from-[rgba(107,52,179,0.92)] to-[rgba(67,15,122,0.96)] backdrop-blur-md border border-white/25 text-white text-[10.5px] font-black uppercase px-3 py-1 rounded-full shadow-[0_4px_14px_rgba(67,15,122,0.45)] tracking-wider flex items-center gap-1.5">
                            #{String(job.sNo).padStart(2, '0')} · {job.category}
                          </span>
                          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/90 shadow-md flex items-center justify-center bg-black/40 shrink-0">
                            <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-full h-full object-cover" />
                          </div>
                        </div>

                        {/* Bottom Content Container */}
                        <div className="relative z-10 w-full">
                          {/* Live Status Pill */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {job.vacancies} Seats Available · LMIA Approved
                            </span>
                          </div>

                          {/* Job Title (Landing Page Playfair Serif) */}
                          <h3 className="font-serif text-xl sm:text-[22px] font-bold text-white tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] line-clamp-1 leading-tight group-hover:text-amber-200 transition-colors">
                            {job.title}
                          </h3>

                          {/* Subtitle: Location & Experience */}
                          <p className="text-xs text-white/85 font-medium mt-1 line-clamp-1 drop-shadow-sm flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            <span className="truncate">{job.location}</span>
                            <span className="text-white/40">·</span>
                            <span className="shrink-0">{job.experienceRequired}</span>
                          </p>

                          {/* 3-Column Glass Meta Row (Exact Landing Page .atlys-meta-row) */}
                          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 mt-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center text-white">
                            <div className="flex flex-col items-start text-left">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">EST. COMP</span>
                              <span className="text-xs sm:text-[13px] font-black text-amber-300 mt-0.5">{job.salaryMonthly}</span>
                            </div>
                            <div className="flex flex-col items-center border-x border-white/20 px-1">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">VACANCIES</span>
                              <span className="text-xs sm:text-[13px] font-black text-white mt-0.5">{job.vacancies} SEATS</span>
                            </div>
                            <div className="flex flex-col items-end text-right">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">PERMIT</span>
                              <span className="text-xs sm:text-[13px] font-black text-emerald-400 mt-0.5">SPONSORED</span>
                            </div>
                          </div>

                          {/* Luxury Action Button */}
                          <div className="mt-3.5">
                            <button 
                              type="button"
                              onClick={(e) => { e.stopPropagation(); handleApplyCanada(job); }}
                              className="w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-between bg-white text-black hover:bg-amber-300 shadow-md group-hover:shadow-lg cursor-pointer"
                            >
                              <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#370c63]" />
                                <span>Apply for Canada Role</span>
                              </span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                        onClick={() => handleApplyLuxembourg(job)}
                        className="group relative rounded-[28px] overflow-hidden min-h-[440px] p-6 flex flex-col justify-end text-white cursor-pointer transition-all duration-350 ease-out border border-white/20 hover:border-white/50 bg-[#090d16] shadow-[0_16px_40px_-15px_rgba(67,15,122,0.22)] hover:shadow-[0_24px_50px_-12px_rgba(67,15,122,0.38)] hover:-translate-y-2 box-border"
                      >
                        {/* Full-bleed Luxury Background Photography */}
                        <img 
                          src={luxembourgRoleImages[job.id] || "/images/construction_site.png"} 
                          alt={job.category}
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 pointer-events-none"
                          loading="lazy"
                        />

                        {/* Multi-stage Luxury Gradient Overlay (Exact Landing Page Standard) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/75 via-50% to-transparent pointer-events-none" />

                        {/* Top Row: Landing-page style gradient pill + Round Flag Badge */}
                        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                          <span className="bg-gradient-to-r from-[rgba(107,52,179,0.92)] to-[rgba(67,15,122,0.96)] backdrop-blur-md border border-white/25 text-white text-[10.5px] font-black uppercase px-3 py-1 rounded-full shadow-[0_4px_14px_rgba(67,15,122,0.45)] tracking-wider flex items-center gap-1.5">
                            #{String(job.sNo).padStart(2, '0')} · {job.sector}
                          </span>
                          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/90 shadow-md flex items-center justify-center bg-black/40 shrink-0">
                            <img src="https://flagcdn.com/w40/lu.png" alt="Luxembourg" className="w-full h-full object-cover" />
                          </div>
                        </div>

                        {/* Bottom Content Container */}
                        <div className="relative z-10 w-full">
                          {/* Live Status Pill */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {job.vacancies} Seats Available · {job.permitType.includes("Blue Card") ? "EU Blue Card" : "EU Work Permit"}
                            </span>
                          </div>

                          {/* Job Title (Landing Page Playfair Serif) */}
                          <h3 className="font-serif text-xl sm:text-[22px] font-bold text-white tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] line-clamp-1 leading-tight group-hover:text-amber-200 transition-colors">
                            {job.category}
                          </h3>

                          {/* Subtitle: Location & Experience */}
                          <p className="text-xs text-white/85 font-medium mt-1 line-clamp-1 drop-shadow-sm flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            <span className="truncate">{job.location}</span>
                            <span className="text-white/40">·</span>
                            <span className="shrink-0">{job.experienceRequired}</span>
                          </p>

                          {/* 3-Column Glass Meta Row (Exact Landing Page .atlys-meta-row) */}
                          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 mt-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center text-white">
                            <div className="flex flex-col items-start text-left">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">EST. COMP</span>
                              <span className="text-xs sm:text-[13px] font-black text-amber-300 mt-0.5">{job.salaryMonthly}</span>
                            </div>
                            <div className="flex flex-col items-center border-x border-white/20 px-1">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">VACANCIES</span>
                              <span className="text-xs sm:text-[13px] font-black text-white mt-0.5">{job.vacancies} SEATS</span>
                            </div>
                            <div className="flex flex-col items-end text-right">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">PERMIT</span>
                              <span className="text-xs sm:text-[13px] font-black text-emerald-400 mt-0.5">SPONSORED</span>
                            </div>
                          </div>

                          {/* Luxury Action Button */}
                          <div className="mt-3.5">
                            <button 
                              type="button"
                              onClick={(e) => { e.stopPropagation(); handleApplyLuxembourg(job); }}
                              className="w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-between bg-white text-black hover:bg-amber-300 shadow-md group-hover:shadow-lg cursor-pointer"
                            >
                              <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#370c63]" />
                                <span>Apply for Luxembourg Role</span>
                              </span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                      <th className="py-3 px-4">S.No</th>
                      <th className="py-3 px-4">Job Title / Position</th>
                      <th className="py-3 px-4">Vacancies</th>
                      <th className="py-3 px-4">Monthly Salary</th>
                      <th className="py-3 px-4">Location</th>
                      <th className="py-3 px-4">Work Permit Status</th>
                      <th className="py-3 px-4 text-right">Action</th>
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

        {/* TRUST & COMPLIANCE FOOTER */}
        <div className="bg-white rounded-3xl border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#f4eff9] text-[#1b1233] flex items-center justify-center shrink-0 border border-purple-200/60 shadow-2xs">
              <Shield className="w-5 h-5 text-[#1b1233]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-[#1b1233] uppercase tracking-wide">TravlTik Escrow &amp; Quota Compliance Guarantee</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                All candidates are protected by 100% milestone escrow. No advance placement fees are disbursed until your official work permit is verified and released.
              </p>
            </div>
          </div>
          <a
            href="/jobs"
            className="text-xs font-black text-[#1b1233] hover:text-white hover:bg-black border border-[rgba(67,15,122,0.18)] bg-white px-5 py-2.5 rounded-xl transition-all shadow-2xs shrink-0 whitespace-nowrap"
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
