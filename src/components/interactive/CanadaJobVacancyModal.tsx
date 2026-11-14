import React, { useState, useEffect } from "react";
import {
  X, CheckCircle, Shield, Briefcase, User, Calendar, MessageSquare,
  MapPin, DollarSign, FileText, ArrowRight, Sparkles, Building2,
  Clock, AlertCircle, Phone
} from "lucide-react";
import { CountryCodeSelect } from "../common/CountryCodeSelect";
import { CANADA_VACANCIES_2026, type CanadaJobVacancy } from "../../data/canadaJobs2026";

interface CanadaJobVacancyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob?: CanadaJobVacancy | null;
  onJobSelect?: (job: CanadaJobVacancy) => void;
}

export function CanadaJobVacancyModal({
  isOpen,
  onClose,
  selectedJob,
  onJobSelect
}: CanadaJobVacancyModalProps) {
  const [activeJob, setActiveJob] = useState<CanadaJobVacancy>(
    selectedJob || CANADA_VACANCIES_2026[0]
  );

  // Form Fields as explicitly requested:
  // "full name . age , whatsapp number - , why you want this job ? - collect this details in type of form"
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

  useEffect(() => {
    if (selectedJob) {
      setActiveJob(selectedJob);
    }
  }, [selectedJob]);

  // Prefill if seeker already logged in or stored
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

    const refId = `CAN-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    const newApplication = {
      id: `app_${Date.now()}`,
      refNumber: refId,
      campaign: "Canada Job Vacancy 2026",
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
      status: "Application Vaulted & Queued for LMIA Audit"
    };

    try {
      // 1. Save to dedicated Canada applications store
      const prevCan = JSON.parse(localStorage.getItem("canada_job_applications") || "[]");
      localStorage.setItem("canada_job_applications", JSON.stringify([newApplication, ...prevCan]));

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

  const whatsappMessage = encodeURIComponent(
    `Hello TravlTik Team! I have submitted my official application for *${activeJob.title}* under *Canada Job Vacancy 2026*.\n\n` +
    `• Reference No: ${submittedRef}\n` +
    `• Applicant Name: ${fullName}\n` +
    `• Age: ${age}\n` +
    `• Salary Offered: ${activeJob.salaryMonthly}\n` +
    `• Why I Want This Job: ${whyWantJob}\n\n` +
    `Please assist me with LMIA document filing & work permit processing!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto transform transition-all font-sans text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner with Deep Obsidian Black & Royal Purple - Sleek & Compact */}
        <div className="relative bg-gradient-to-br from-[#060205] via-[#14050e] via-35% to-[#2c0919] text-white px-5 py-4 sm:px-6 sm:py-5 overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#370c63]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-black/60 blur-2xl pointer-events-none" />

          {/* Subtle watermark silhouettes */}
          <div className="absolute top-2 right-4 text-6xl opacity-10 select-none pointer-events-none">🍁</div>

          <div className="relative z-10 flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider border border-white/15 shadow-inner">
                <span>🍁 CANADA INTAKE 2026</span>
                <span className="text-amber-300">• LMIA VERIFIED</span>
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
                  <span className="text-[9.5px] text-slate-400 uppercase font-extrabold">Status:</span>
                  <span className="text-emerald-300 font-black">LMIA Approved</span>
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
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Job Selector Dropdown if user wants to switch position */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Canada Job Position (19 Vacancies)
                </label>
                <select
                  value={activeJob.id}
                  onChange={(e) => {
                    const found = CANADA_VACANCIES_2026.find(j => j.id === e.target.value);
                    if (found) {
                      setActiveJob(found);
                      if (onJobSelect) onJobSelect(found);
                    }
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-[#370c63] focus:bg-white transition-all shadow-2xs"
                >
                  {CANADA_VACANCIES_2026.map(j => (
                    <option key={j.id} value={j.id}>
                      #{j.sNo}. {j.title} — {j.vacancies} Vacancies ({j.salaryMonthly})
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 1: Full Name & Age */}
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
                      placeholder="e.g. 27"
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

              {/* Row 2: WhatsApp Number & Current City */}
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
                  <p className="text-[10px] text-slate-500 mt-0.5">We will send offer letters & appointment details to this WhatsApp</p>
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
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#370c63] focus:bg-white bg-slate-50/50 text-xs sm:text-sm font-semibold transition-all"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Your home city or current country of residence</p>
                </div>
              </div>

              {/* Field 3: Passport Status */}
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
                          ? "bg-[#370c63]/5 border-[#370c63] text-[#370c63]"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="passportStatus"
                        value={status}
                        checked={passportStatus === status}
                        onChange={() => setPassportStatus(status)}
                        className="text-[#370c63] focus:ring-[#370c63]"
                      />
                      <span>{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Field 4: Why do you want this job? (Explicit requirement) */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Why you want this job? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your previous experience, motivation, or skills that make you a great fit for this Canadian role..."
                    value={whyWantJob}
                    onChange={(e) => setWhyWantJob(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      errors.whyWantJob ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#370c63] focus:bg-white bg-slate-50/50"
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-0.5">
                  <span>Helpful for employer LMIA file matching</span>
                  <span className={whyWantJob.length >= 15 ? "text-emerald-700 font-bold" : ""}>
                    {whyWantJob.length}/15 min chars
                  </span>
                </div>
                {errors.whyWantJob && <p className="text-[11px] text-red-500 mt-0.5 font-bold">{errors.whyWantJob}</p>}
              </div>

              {/* Trust Box with Black & Obsidian accent */}
              <div className="p-3.5 rounded-2xl bg-[#faf8fd] border border-slate-200/90 flex items-start gap-3 text-[11px] text-slate-700 leading-relaxed shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#1b1233] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Shield className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <strong className="text-[#1b1233]">TravlTik Milestone Protection:</strong> All Canada Job Vacancy positions are mapped to registered Canadian employers. Zero recruitment fees deducted from salary; documentation processed under Canadian IRCC compliance.
                </div>
              </div>

              {/* Form Action Buttons with Black & Royal Purple gradient */}
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
            /* Application Success Step */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#ecfdf5] text-[#00b070] border border-emerald-200/80 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Application Successfully Registered
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-sora">
                  Canada Job Vacancy Application Vaulted!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                  Your details for <strong>{activeJob.title}</strong> have been logged. Our certified RCIC immigration team is verifying your profile for LMIA processing.
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

              {/* Direct WhatsApp Action for candidate */}
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
                  Close &amp; Explore More Openings
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
