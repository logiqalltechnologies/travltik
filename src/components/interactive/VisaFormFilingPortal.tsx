import { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, Upload, Globe, FileText, Info, ShieldCheck, Clock, Lock, Sparkles } from "lucide-react";

export function VisaFormFilingPortal() {
  const [step, setStep] = useState(1);
  const [toast, setToast] = useState("");
  
  // Step 1: Personal Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Step 2: Visa Details
  const [dest, setDest] = useState("🇺🇸 USA");
  const [visaType, setVisaType] = useState("Tourist");
  const [purpose, setPurpose] = useState("");

  // Submission State
  const [submitted, setSubmitted] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2600);
  };

  const scrollToForm = () => {
    document.getElementById("form-order")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextStep = (n: number) => {
    if (n === 2) {
      if (!firstName.trim() || !lastName.trim() || !dob || !passportNo.trim() || !email.trim() || !whatsapp.trim()) {
        showToast("❌ Please fill all required personal details");
        return;
      }
    }
    setStep(n);
    showToast(n < 4 ? `Step ${n} of 4` : "✅ Ready to confirm!");
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("✅ Order placed! Verified specialist assigned.");
  };

  return (
    <div className="relative min-h-screen bg-[#FBFBFE] font-plus-jakarta text-slate-900 pb-24 overflow-hidden selection:bg-emerald-500/20 selection:text-emerald-800">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100/60 to-teal-50/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-100/70 via-indigo-50/30 to-transparent rounded-full blur-3xl opacity-75"></div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-3 rounded-full text-xs font-bold z-50 shadow-2xl border border-slate-800 flex items-center gap-2">
          {toast}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/60 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Live Pulse Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>DS-160 · IMM 1294 · VAF · SCHENGEN FORM SPECIALISTS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] mb-5 font-sora">
                We Fill Your Official <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-700 bg-clip-text text-transparent">
                  Visa Application Forms.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
                Avoid costly consular delays and rejection triggers. Our registered immigration paralegals complete, verify, and format your country-specific official questionnaires.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-8 py-4 rounded-2xl text-sm shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Get Your Form Filled</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 px-3 py-2 bg-white rounded-xl border border-slate-200">
                  <Clock className="w-4 h-4 text-emerald-600" /> 12-Hour Turnaround
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-8 shadow-xl shadow-slate-200/50">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl mb-4 border border-purple-100">
                  ⏱️
                </div>
                <h3 className="font-sora font-extrabold text-slate-900 text-lg mb-2">
                  12-Hour Expedited Delivery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  Submit your details before 6 PM, and our registered filing team delivers a fully completed, error-checked visa application dossier by 6 AM the next morning.
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" /> Double Auditor Verified
                  </span>
                  <span className="text-slate-400">Fixed Transparent Fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 space-y-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🔍", title: "Profile Analysis First", desc: "Our specialist studies your background before filing to ensure every question is answered strategically." },
            { icon: "⚠️", title: "Flag Risky Questions", desc: "We identify questions prone to misinterpretation or consular scrutiny and advise compliant answers." },
            { icon: "✅", title: "Double Independent Audit", desc: "Every visa form is audited twice by two separate compliance paralegals before final delivery." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <div className="font-sora font-bold text-base text-slate-900 mb-2">{f.title}</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stepper Form Section */}
        <div id="form-order" className="pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-2">
            <span>SECURE FORM FILING WIZARD</span>
          </div>
          <h2 className="font-sora font-extrabold text-slate-950 text-2xl sm:text-3xl mb-2">
            Tell Us About Your Application
          </h2>
          <p className="text-sm text-slate-600 mb-8 font-normal">
            Follow our 4-step secure workflow to have your official embassy questionnaire completed.
          </p>

          {/* Step Indicator */}
          <div className="flex items-center max-w-2xl mb-10">
            {[
              { num: 1, label: "Your Details" },
              { num: 2, label: "Visa Pathway" },
              { num: 3, label: "Upload Drafts" },
              { num: 4, label: "Confirm Order" },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => step > s.num && setStep(s.num)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                      step > s.num
                        ? "bg-emerald-600 text-white shadow-sm"
                        : step === s.num
                        ? "bg-white border-2 border-emerald-500 text-emerald-700 shadow-md ring-4 ring-emerald-100"
                        : "bg-slate-100 text-slate-400 border border-slate-200"
                    }`}
                  >
                    {step > s.num ? "✓" : s.num}
                  </div>
                  <span className="text-[11px] font-bold mt-1.5 text-center text-slate-600 hidden sm:block">
                    {s.label}
                  </span>
                </div>
                {idx < 3 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 mt-[-14px] transition-all ${
                      step > s.num ? "bg-emerald-500" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-sora font-extrabold text-xl text-slate-950 mb-2">Form Order Received!</h3>
                    <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                      Our form filing team is preparing your draft. You will receive the preliminary verification file via email within 12 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                        setFirstName("");
                        setLastName("");
                        setDob("");
                        setPassportNo("");
                        setEmail("");
                        setWhatsapp("");
                        setPurpose("");
                      }}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
                    >
                      Fill Another Form
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Step 1 */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <h3 className="font-sora font-bold text-base text-slate-900 mb-4">Step 1 — Applicant Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">First Name *</label>
                            <input
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                              placeholder="As on passport"
                              required
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Last Name *</label>
                            <input
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                              placeholder="As on passport"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Date of Birth *</label>
                            <input
                              type="date"
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                              required
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Passport Number *</label>
                            <input
                              value={passportNo}
                              onChange={(e) => setPassportNo(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                              placeholder="e.g. Z9876543"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Email Address *</label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                              placeholder="you@domain.com"
                              required
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">WhatsApp Phone *</label>
                            <input
                              value={whatsapp}
                              onChange={(e) => setWhatsapp(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex justify-end pt-4">
                          <button
                            type="button"
                            onClick={() => nextStep(2)}
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <span>Next: Visa Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <h3 className="font-sora font-bold text-base text-slate-900 mb-4">Step 2 — Visa Pathway & Purpose</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Destination</label>
                            <select
                              value={dest}
                              onChange={(e) => setDest(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition cursor-pointer"
                            >
                              <option>🇺🇸 United States (DS-160)</option>
                              <option>🇨🇦 Canada (IMM 1294 / 5257)</option>
                              <option>🇬🇧 United Kingdom (VAF)</option>
                              <option>🇪🇺 Schengen (Uniform Visa Form)</option>
                              <option>🇦🇺 Australia (ImmiAccount Form)</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Visa Category</label>
                            <select
                              value={visaType}
                              onChange={(e) => setVisaType(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition cursor-pointer"
                            >
                              <option>Tourist / Visitor</option>
                              <option>Student Visa</option>
                              <option>Work Permit / Employment</option>
                              <option>Business / Conference</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Brief Travel Purpose</label>
                          <textarea
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            rows={3}
                            placeholder="e.g. Attending 2-year Master's degree at University of Toronto starting Fall 2026..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition resize-none"
                          />
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
                          >
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <span>Next: Upload Documents</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <h3 className="font-sora font-bold text-base text-slate-900 mb-4">Step 3 — Upload Passport & Supporting Proofs</h3>
                        <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-8 text-center bg-slate-50/60 hover:bg-emerald-50/20 transition-all cursor-pointer">
                          <Upload className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                          <p className="text-xs sm:text-sm font-bold text-slate-800 mb-1">Click to upload passport copy & offer letter / invitation</p>
                          <p className="text-xs text-slate-500">PDF, JPG, PNG up to 15MB</p>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
                          >
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(4)}
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <span>Next: Review & Confirm</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4 */}
                    {step === 4 && (
                      <form onSubmit={handleOrder} className="space-y-4">
                        <h3 className="font-sora font-bold text-base text-slate-900 mb-4">Step 4 — Review & Escrow Vault Order</h3>
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 text-xs sm:text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Applicant:</span>
                            <span className="font-bold text-slate-900">{firstName} {lastName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Target Visa:</span>
                            <span className="font-bold text-slate-900">{dest} · {visaType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Contact:</span>
                            <span className="font-bold text-slate-900">{email} | {whatsapp}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-slate-200 font-bold text-emerald-800">
                            <span>Form Filing Facilitation:</span>
                            <span>₹1,499 (Fixed)</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
                          >
                            ← Back
                          </button>
                          <button
                            type="submit"
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm shadow-md shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <span>Confirm Order & Start Filing →</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
                <h3 className="font-sora font-bold text-sm text-slate-900 mb-4">100% Peace of Mind</h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Direct WhatsApp coordination with dedicated paralegal</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>You review and approve every answer before consular submission</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Protected by TravlTik Milestone Escrow Vault</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
