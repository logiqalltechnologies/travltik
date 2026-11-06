import React, { useState, useEffect } from "react";
import {
  X, CheckCircle, Shield, Briefcase, User, Calendar, MessageSquare,
  MapPin, DollarSign, FileText, ArrowRight, Sparkles, Building2,
  Clock, AlertCircle, Phone
} from "lucide-react";
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
        whatsapp: whatsapp.trim(),
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
        {/* Top Header Banner with Canadian Maple Leaf theme */}
        <div className="relative bg-gradient-to-r from-[#8b0000] via-[#c4151c] to-[#370c63] text-white p-5 sm:p-6 overflow-hidden">
          {/* Subtle watermark silhouettes */}
          <div className="absolute top-2 right-4 text-6xl opacity-15 select-none pointer-events-none">🍁</div>
          <div className="absolute -bottom-6 -left-6 text-7xl opacity-10 select-none pointer-events-none">🍁</div>

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-[11px] font-black uppercase px-3 py-1 rounded-full mb-2 tracking-wider border border-white/30">
                <span>🍁 CANADA JOB VACANCY 2026</span>
                <span className="text-amber-300">• 980+ OPENINGS</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight font-sora">
                Application for {activeJob.title}
              </h2>
              <p className="text-xs text-white/90 mt-1 max-w-lg leading-relaxed">
                Direct employer sponsorship under Canadian LMIA regulations. Complete your applicant profile below to secure verification priority.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-white/80 hover:text-white bg-black/20 hover:bg-black/35 p-2 rounded-full transition-all cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="relative z-10 grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/20 text-center">
            <div className="bg-white/10 rounded-xl p-2 backdrop-blur-xs">
              <div className="text-[10px] text-white/80 font-bold uppercase">Monthly Salary</div>
              <div className="text-sm sm:text-base font-black text-amber-300">{activeJob.salaryMonthly}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-2 backdrop-blur-xs">
              <div className="text-[10px] text-white/80 font-bold uppercase">Available Openings</div>
              <div className="text-sm sm:text-base font-black text-white">{activeJob.vacancies} Seats</div>
            </div>
            <div className="bg-white/10 rounded-xl p-2 backdrop-blur-xs">
              <div className="text-[10px] text-white/80 font-bold uppercase">Status</div>
              <div className="text-xs sm:text-sm font-extrabold text-white">LMIA Approved</div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto custom-scrollbar">
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
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
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

              {/* Trust Box */}
              <div className="p-3.5 rounded-2xl bg-[#faf8fd] border border-[#dccaf7] flex items-start gap-2.5 text-[11px] text-[#430f7a] leading-relaxed">
                <Shield className="w-4 h-4 text-[#370c63] shrink-0 mt-0.5" />
                <div>
                  <strong>TravlTik Milestone Protection:</strong> All Canada Job Vacancy positions are mapped to registered Canadian employers. Zero recruitment fees deducted from salary; documentation processed under Canadian IRCC compliance.
                </div>
              </div>

              {/* Form Action Buttons (NO GREENISH BUTTONS) */}
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
                  className="w-full sm:w-auto bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#4f118c] hover:via-[#6c22c3] hover:to-[#892dd8] text-white text-xs sm:text-sm font-black px-7 py-3 rounded-xl shadow-md shadow-[rgba(88,29,181,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
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
