import React, { useState, useEffect } from "react";
import {
  X, CheckCircle, Shield, Briefcase, User, Calendar, MessageSquare,
  MapPin, DollarSign, FileText, ArrowRight, Sparkles, Building2,
  Clock, AlertCircle, Phone, Globe
} from "lucide-react";
import { CountryCodeSelect } from "../common/CountryCodeSelect";
import { CANADA_VACANCIES_2026, type CanadaJobVacancy } from "../../data/canadaJobs2026";
import { LUXEMBOURG_VACANCIES_2026, type LuxembourgJobVacancy } from "../../data/luxembourgJobs2026";

export type DriveJobItem = {
  sNo: number;
  id: string;
  title: string;
  vacancies: number;
  salaryMonthly: string;
  location: string;
  permitType?: string;
  country: "Canada" | "Luxembourg";
};

interface JobDriveApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialJob?: DriveJobItem | null;
  initialCountry?: "Canada" | "Luxembourg";
}

export function JobDriveApplicationModal({
  isOpen,
  onClose,
  initialJob,
  initialCountry = "Canada"
}: JobDriveApplicationModalProps) {
  const [selectedCountry, setSelectedCountry] = useState<"Canada" | "Luxembourg">(
    initialJob ? initialJob.country : initialCountry
  );

  const [activeJob, setActiveJob] = useState<DriveJobItem>(() => {
    if (initialJob) return initialJob;
    if (initialCountry === "Luxembourg") {
      const first = LUXEMBOURG_VACANCIES_2026[0];
      return {
        sNo: first.sNo,
        id: first.id,
        title: first.category,
        vacancies: first.vacancies,
        salaryMonthly: first.salaryMonthly,
        location: first.location,
        permitType: first.permitType,
        country: "Luxembourg"
      };
    }
    const firstCan = CANADA_VACANCIES_2026[0];
    return {
      sNo: firstCan.sNo,
      id: firstCan.id,
      title: firstCan.title,
      vacancies: firstCan.vacancies,
      salaryMonthly: firstCan.salaryMonthly,
      location: firstCan.location,
      permitType: firstCan.lmiaStatus,
      country: "Canada"
    };
  });

  // Explicit user requirements:
  // "collect their some details , full name . age , whatsapp number - , why you want this job ? - collect this details in type of form ."
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappCode, setWhatsappCode] = useState("+91");
  const [whyWantJob, setWhyWantJob] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [passportStatus, setPassportStatus] = useState("Yes, Valid Passport");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  useEffect(() => {
    if (initialJob) {
      setSelectedCountry(initialJob.country);
      setActiveJob(initialJob);
    }
  }, [initialJob]);

  // Prefill known profile details if available in localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedName = localStorage.getItem("seeker_name") || localStorage.getItem("user_name") || "";
      const storedPhone = localStorage.getItem("seeker_phone") || localStorage.getItem("user_phone") || "";
      const storedCity = localStorage.getItem("seeker_location") || localStorage.getItem("seeker_city") || "";
      if (storedName && !fullName) setFullName(storedName);
      if (storedPhone && !whatsapp) setWhatsapp(storedPhone);
      if (storedCity && !currentCity) setCurrentCity(storedCity);
    } catch (e) {}
  }, []);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name as per passport";
    }
    const ageNum = parseInt(age, 10);
    if (!age || isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
      errs.age = "Applicant age must be between 18 and 65 years";
    }
    const cleanedPhone = whatsapp.replace(/[^0-9]/g, "");
    if (!whatsapp.trim() || cleanedPhone.length < 8) {
      errs.whatsapp = "Please provide a valid WhatsApp number with country code";
    }
    if (!whyWantJob.trim() || whyWantJob.trim().length < 15) {
      errs.whyWantJob = "Please write at least 15-20 characters explaining why you want this job";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const prefix = selectedCountry === "Canada" ? "CAN-2026" : "LUX-2026";
    const refId = `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

    const newApplication = {
      id: `app_${Date.now()}`,
      refNumber: refId,
      campaign: `${selectedCountry} Job Vacancy 2026`,
      country: selectedCountry,
      jobTitle: activeJob.title,
      jobSNo: activeJob.sNo,
      salary: activeJob.salaryMonthly,
      location: activeJob.location,
      vacancies: activeJob.vacancies,
      applicant: {
        fullName: fullName.trim(),
        age: parseInt(age, 10),
        whatsapp: whatsapp.startsWith("+") ? whatsapp.trim() : `${whatsappCode} ${whatsapp}`.trim(),
        whyWantJob: whyWantJob.trim(),
        currentCity: currentCity.trim() || "India / Global",
        passportStatus
      },
      submittedAt: new Date().toISOString(),
      status: "Application Vaulted & Queued for Verification"
    };

    try {
      // 1. Save to dedicated campaign store
      const storageKey = selectedCountry === "Canada" ? "canada_job_applications" : "luxembourg_job_applications";
      const prevList = JSON.parse(localStorage.getItem(storageKey) || "[]");
      localStorage.setItem(storageKey, JSON.stringify([newApplication, ...prevList]));

      // 2. Also register in global job applications
      const prevAll = JSON.parse(localStorage.getItem("travltik_job_applications") || "[]");
      localStorage.setItem("travltik_job_applications", JSON.stringify([newApplication, ...prevAll]));

      // 3. Cache seeker details for quick future forms
      localStorage.setItem("seeker_name", fullName.trim());
      localStorage.setItem("seeker_phone", whatsapp.trim());
      if (currentCity.trim()) localStorage.setItem("seeker_location", currentCity.trim());
    } catch (err) {
      console.error("Storage error:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(refId);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setWhyWantJob("");
    onClose();
  };

  const isCanada = selectedCountry === "Canada";
  const flagEmoji = isCanada ? "🍁" : "🇱🇺";
  const currencySymbol = isCanada ? "$" : "€";
  const permitLabel = isCanada ? "LMIA Approved" : "EU Blue Card / Work Permit";

  const whatsappMessage = encodeURIComponent(
    `Hello TravlTik Team! I have submitted my official application for *${activeJob.title}* under *${selectedCountry} Job Vacancy 2026*.\n\n` +
    `• Reference No: ${submittedRef}\n` +
    `• Applicant Name: ${fullName}\n` +
    `• Age: ${age}\n` +
    `• Salary Offered: ${activeJob.salaryMonthly}\n` +
    `• Why I Want This Job: ${whyWantJob}\n\n` +
    `Please assist me with document verification & visa filing!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto transform transition-all font-sans text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner with Deep Obsidian Black & Royal Purple - Sleek & Compact */}
        <div className={`relative text-white px-5 py-4 sm:px-6 sm:py-5 overflow-hidden ${
          isCanada 
            ? "bg-gradient-to-br from-[#060205] via-[#14050e] via-35% to-[#2c0919]" 
            : "bg-gradient-to-br from-[#05020c] via-[#0f061c] via-35% to-[#20083a]"
        }`}>
          {/* Subtle ambient lighting */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#370c63]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-black/60 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider border border-white/15 shadow-inner">
                <span>{flagEmoji} {selectedCountry.toUpperCase()} INTAKE 2026</span>
                <span className="text-amber-300">• DIRECT EMPLOYER</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight font-sora text-white drop-shadow-md">
                Application for {activeJob.title}
              </h2>
              {/* Sleek inline metrics row */}
              <div className="flex items-center gap-2 flex-wrap pt-0.5 text-xs">
                <span className="inline-flex items-center gap-1.5 bg-black/45 px-2.5 py-0.5 rounded-lg border border-white/10 font-bold">
                  <span className="text-[9.5px] text-slate-400 uppercase font-extrabold">Comp:</span>
                  <span className="text-amber-300 font-black">{activeJob.salaryMonthly}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-black/45 px-2.5 py-0.5 rounded-lg border border-white/10 font-bold">
                  <span className="text-[9.5px] text-slate-400 uppercase font-extrabold">Openings:</span>
                  <span className="text-white font-black">{activeJob.vacancies} Seats</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-black/45 px-2.5 py-0.5 rounded-lg border border-white/10 font-bold">
                  <span className="text-[9.5px] text-slate-400 uppercase font-extrabold">Visa:</span>
                  <span className="text-emerald-300 font-black">{permitLabel}</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-white/80 hover:text-white bg-black/40 hover:bg-black/70 border border-white/15 p-2 rounded-full transition-all cursor-pointer shrink-0 shadow-md"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {!submittedRef ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Sleek Position Summary with Quick Switcher */}
              <div className="rounded-xl border border-slate-200/90 bg-[#faf8fd] p-2.5 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider shrink-0">Applying for:</span>
                    <span className="text-xs font-black text-[#1b1233] truncate">
                      {flagEmoji} {selectedCountry} · {activeJob.title}
                    </span>
                    <span className="hidden sm:inline text-[11px] text-slate-400 font-semibold shrink-0">
                      ({activeJob.vacancies} open)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowRoleSelector(!showRoleSelector)}
                    className="text-[11px] font-black text-[#430f7a] hover:underline cursor-pointer shrink-0"
                  >
                    {showRoleSelector ? "Done" : "Change Role"}
                  </button>
                </div>

                {showRoleSelector && (
                  <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-2.5 animate-fadeIn">
                    <div className="sm:col-span-5">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1">
                        Country
                      </label>
                      <div className="flex rounded-lg p-0.5 bg-slate-200/70 border border-slate-300">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCountry("Canada");
                            const firstCan = CANADA_VACANCIES_2026[0];
                            setActiveJob({
                              sNo: firstCan.sNo,
                              id: firstCan.id,
                              title: firstCan.title,
                              vacancies: firstCan.vacancies,
                              salaryMonthly: firstCan.salaryMonthly,
                              location: firstCan.location,
                              country: "Canada"
                            });
                          }}
                          className={`flex-1 py-1 text-xs font-black rounded-md transition-all ${
                            isCanada ? "bg-white text-black shadow-xs" : "text-slate-600 hover:text-black"
                          }`}
                        >
                          🍁 Canada
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCountry("Luxembourg");
                            const firstLux = LUXEMBOURG_VACANCIES_2026[0];
                            setActiveJob({
                              sNo: firstLux.sNo,
                              id: firstLux.id,
                              title: firstLux.category,
                              vacancies: firstLux.vacancies,
                              salaryMonthly: firstLux.salaryMonthly,
                              location: firstLux.location,
                              country: "Luxembourg"
                            });
                          }}
                          className={`flex-1 py-1 text-xs font-black rounded-md transition-all ${
                            !isCanada ? "bg-white text-black shadow-xs" : "text-slate-600 hover:text-black"
                          }`}
                        >
                          🇱🇺 Luxembourg
                        </button>
                      </div>
                    </div>

                    <div className="sm:col-span-7">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1">
                        Position
                      </label>
                      <select
                        value={activeJob.id}
                        onChange={(e) => {
                          if (isCanada) {
                            const found = CANADA_VACANCIES_2026.find(j => j.id === e.target.value);
                            if (found) {
                              setActiveJob({
                                sNo: found.sNo,
                                id: found.id,
                                title: found.title,
                                vacancies: found.vacancies,
                                salaryMonthly: found.salaryMonthly,
                                location: found.location,
                                country: "Canada"
                              });
                            }
                          } else {
                            const found = LUXEMBOURG_VACANCIES_2026.find(j => j.id === e.target.value);
                            if (found) {
                              setActiveJob({
                                sNo: found.sNo,
                                id: found.id,
                                title: found.category,
                                vacancies: found.vacancies,
                                salaryMonthly: found.salaryMonthly,
                                location: found.location,
                                country: "Luxembourg"
                              });
                            }
                          }
                        }}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-900 focus:outline-none focus:border-black"
                      >
                        {isCanada
                          ? CANADA_VACANCIES_2026.map(j => (
                              <option key={j.id} value={j.id}>
                                #{j.sNo}. {j.title} ({j.salaryMonthly})
                              </option>
                            ))
                          : LUXEMBOURG_VACANCIES_2026.map(j => (
                              <option key={j.id} value={j.id}>
                                #{j.sNo}. {j.category} ({j.salaryMonthly})
                              </option>
                            ))
                        }
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Form Input 1: Full Name & Age (USER EXPLICIT REQUIREMENT) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma (as on Passport)"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                        errors.fullName ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#370c63] focus:bg-white bg-slate-50/50"
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.fullName}</p>}
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      required
                      min={18}
                      max={65}
                      placeholder="e.g. 26"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                        errors.age ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#370c63] focus:bg-white bg-slate-50/50"
                      }`}
                    />
                  </div>
                  {errors.age && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.age}</p>}
                </div>
              </div>

              {/* Form Input 2: WhatsApp Number & Current City (USER EXPLICIT REQUIREMENT) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="w-32 shrink-0">
                      <CountryCodeSelect
                        value={whatsappCode}
                        onChange={(code) => setWhatsappCode(code)}
                      />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className={`flex-1 px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                        errors.whatsapp ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#370c63] focus:bg-white bg-slate-50/50"
                      }`}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Appointment &amp; document status will be sent here</p>
                  {errors.whatsapp && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.whatsapp}</p>}
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                    Current Location / City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Hyderabad, India"
                      value={currentCity}
                      onChange={(e) => setCurrentCity(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-black focus:bg-white bg-slate-50/50 text-xs sm:text-sm font-semibold transition-all"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Your home city or current country</p>
                </div>
              </div>

              {/* Form Input 3: Passport Status */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                  Passport Status
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {["Yes, Valid Passport", "In Process / Applied"].map((status) => (
                    <label
                      key={status}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        passportStatus === status
                          ? "bg-slate-900 border-black text-white shadow-xs"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="passportStatus"
                        value={status}
                        checked={passportStatus === status}
                        onChange={() => setPassportStatus(status)}
                        className="text-black focus:ring-black accent-black"
                      />
                      <span>{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Form Input 4: Why you want this job? (USER EXPLICIT REQUIREMENT) */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Why you want this job? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    required
                    placeholder={`Tell us why you are interested in this position in ${selectedCountry}, your background, or personal motivation...`}
                    value={whyWantJob}
                    onChange={(e) => setWhyWantJob(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      errors.whyWantJob ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-black focus:bg-white bg-slate-50/50"
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-0.5">
                  <span>Crucial for employer interview matching</span>
                  <span className={whyWantJob.length >= 15 ? "text-emerald-700 font-bold" : ""}>
                    {whyWantJob.length}/15 min chars
                  </span>
                </div>
                {errors.whyWantJob && <p className="text-[11px] text-red-500 mt-0.5 font-bold">{errors.whyWantJob}</p>}
              </div>

              {/* Escrow Trust Box with Black & Obsidian accent */}
              <div className="p-3 rounded-xl bg-[#faf8fd] border border-slate-200/90 flex items-center gap-2.5 text-[11px] text-slate-700 leading-snug shadow-2xs">
                <div className="w-5 h-5 rounded-md bg-[#1b1233] flex items-center justify-center shrink-0 shadow-xs">
                  <Shield className="w-3 h-3 text-amber-300" />
                </div>
                <div>
                  <strong className="text-[#1b1233]">TravlTik Escrow Protected:</strong> Direct employer filing with zero upfront deductions & milestone escrow release.
                </div>
              </div>

              {/* Buttons with Black & Royal Purple gradient */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#0a0515] via-[#1b1233] to-[#370c63] hover:from-[#1b1233] hover:to-[#430f7a] text-white text-xs sm:text-sm font-black px-7 py-3 rounded-xl shadow-md shadow-[rgba(10,5,20,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application for {activeJob.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Application Success View */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#ecfdf5] text-[#00b070] border border-emerald-200/80 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Application Successfully Registered
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-sora">
                  {selectedCountry} Job Vacancy Application Vaulted!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                  Your profile for <strong>{activeJob.title}</strong> has been assigned to our licensed immigration panel for visa eligibility audit.
                </p>
              </div>

              {/* Reference Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Tracking Reference:</span>
                  <span className="font-black text-[#370c63] text-sm tracking-wide">{submittedRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-bold text-slate-900">{fullName} (Age: {age})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-bold text-slate-900">{flagEmoji} {selectedCountry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Role:</span>
                  <span className="font-bold text-slate-900">{activeJob.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Monthly Compensation:</span>
                  <span className="font-black text-slate-900">{activeJob.salaryMonthly}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">WhatsApp Alert:</span>
                  <span className="font-bold text-slate-900">{whatsapp}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/9176611989366?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#1b1233] hover:bg-[#370c63] text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Verify on WhatsApp Now</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                >
                  Close &amp; View More Vacancies
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
