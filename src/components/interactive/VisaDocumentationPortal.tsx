import { useState } from "react";
import { CheckCircle, AlertTriangle, Upload, ArrowRight, ShieldCheck, FileText, Sparkles, Check, Globe, Lock, Clock } from "lucide-react";

type VisaCountry = "canada" | "uk" | "uae" | "aus" | "sch";

type DocumentItem = {
  name: string;
  desc: string;
  icon: string;
  status: "ready" | "missing";
};

const checklists: Record<VisaCountry, { title: string; docs: DocumentItem[] }> = {
  canada: {
    title: "🇨🇦 Canada Student Visa",
    docs: [
      { name: "Valid Passport", desc: "Min 6 months validity · All pages scanned", icon: "🛂", status: "missing" },
      { name: "Passport-Size Photos", desc: "2 photos · White background · 35mm × 45mm", icon: "📸", status: "missing" },
      { name: "Proof of Funds", desc: "Bank statements showing CAD $10,000+ · Notarised", icon: "🏦", status: "missing" },
      { name: "Statement of Purpose (SOP)", desc: "500–1000 words · Why Canada, career goals", icon: "✍️", status: "missing" },
    ],
  },
  uk: {
    title: "🇬🇧 UK Student Visa",
    docs: [
      { name: "Valid Passport", desc: "Min 6 months validity · Scan of bio page", icon: "🛂", status: "missing" },
      { name: "CAS Letter", desc: "Confirmation of Acceptance for Studies from UK university", icon: "📋", status: "missing" },
      { name: "Tuberculosis Test Certificate", desc: "From UKVI approved clinic", icon: "🩺", status: "missing" },
    ],
  },
  uae: {
    title: "🇦🇪 UAE Tourist Visa",
    docs: [
      { name: "Passport Copy", desc: "Clear colour scan of first & last page", icon: "🛂", status: "missing" },
      { name: "Passport Photo", desc: "White background, no glasses", icon: "📸", status: "missing" },
      { name: "Hotel Booking", desc: "Confirmed stay booking in UAE", icon: "🏨", status: "missing" },
    ],
  },
  aus: {
    title: "🇦🇺 Australia Work Visa",
    docs: [
      { name: "Passport", desc: "Scan of valid passport bio page", icon: "🛂", status: "missing" },
      { name: "Skill Assessment", desc: "Approved assessment result by relevant body", icon: "📜", status: "missing" },
      { name: "English Score", desc: "IELTS / PTE scorecard", icon: "🗣️", status: "missing" },
    ],
  },
  sch: {
    title: "🇪🇺 Schengen Tourist Visa",
    docs: [
      { name: "Passport", desc: "Min 2 blank pages, 3 months validity beyond return", icon: "🛂", status: "missing" },
      { name: "Travel Insurance", desc: "Minimum €30,000 coverage for medical emergencies", icon: "🩺", status: "missing" },
      { name: "Flight Reservation", desc: "Round trip flight details", icon: "✈️", status: "missing" },
    ],
  },
};

export function VisaDocumentationPortal() {
  const [activeTab, setActiveTab] = useState<VisaCountry>("canada");
  const [docList, setDocList] = useState(checklists);
  const [toast, setToast] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [dest, setDest] = useState("Canada");
  const [visaType, setVisaType] = useState("Student Visa");
  const [orderDone, setOrderDone] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2600);
  };

  const scrollToOrder = () => {
    document.getElementById("doc-order")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDocStatus = (country: VisaCountry, index: number) => {
    setDocList((prev) => {
      const copy = { ...prev };
      const currentDocs = [...copy[country].docs];
      const doc = { ...currentDocs[index] };
      doc.status = doc.status === "ready" ? "missing" : "ready";
      currentDocs[index] = doc;
      copy[country] = { ...copy[country], docs: currentDocs };
      return copy;
    });
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !whatsapp.trim()) {
      showToast("❌ Please fill all required fields");
      return;
    }
    setOrderDone(true);
    showToast("✅ Order placed! Verified specialist assigned.");
  };

  const currentChecklist = docList[activeTab];
  const readyCount = currentChecklist.docs.filter((d) => d.status === "ready").length;
  const totalCount = currentChecklist.docs.length;
  const progressPct = Math.round((readyCount / totalCount) * 100);

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
                <span>VERIFIED LEGAL AUDIT · 100% ESCROW PROTECTED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] mb-5 font-sora">
                We Prepare Your <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-700 bg-clip-text text-transparent">
                  Visa Documents Flawlessly.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
                Submit accurate, consular-compliant documents with zero formatting errors. Our verified immigration paralegals audit and assemble your complete application dossier before submission.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToOrder}
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-8 py-4 rounded-2xl text-sm shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center gap-2.5"
                >
                  <span>Start Documentation Filing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#checklist"
                  className="px-6 py-4 rounded-2xl bg-white border border-slate-200/90 text-slate-700 font-bold text-sm hover:border-emerald-500 hover:text-emerald-700 transition-all shadow-xs"
                >
                  View Required Checklist ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-8 shadow-xl shadow-slate-200/50 relative">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4 border border-emerald-100">
                  🛡️
                </div>
                <h3 className="font-sora font-extrabold text-slate-900 text-lg mb-2">
                  TravlTik Free Redo Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  If your visa receives a documentation query or refusal due to any oversight by our filing team, we redo the entire dossier completely free of charge.
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" /> 100% Quality Inspected
                  </span>
                  <span className="text-slate-400">Escrow Held</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="bg-white/80 border-b border-slate-200/80 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
          {[
            { value: "120+", label: "Destinations Supported" },
            { value: "50+", label: "Visa Subclasses & Categories" },
            { value: "24 Hours", label: "Average Dossier Turnaround" },
            { value: "99.4%", label: "Consular First-Pass Rate" },
          ].map((stat, i) => (
            <div key={stat.label} className={i > 0 ? "pl-4" : ""}>
              <div className="font-sora font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 space-y-16">
        {/* Service Features Grid */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-2">
            <span>COMPREHENSIVE DOSSIER INCLUSIONS</span>
          </div>
          <h2 className="font-sora font-extrabold text-slate-950 text-2xl sm:text-3xl mb-8">
            What is Included in Your Documentation Filing?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Automated AI File Audit", desc: "We scan scans and statements for resolution, missing stamps, and expired credential dates." },
              { icon: "📋", title: "Consular Custom Checklist", desc: "Country-specific and subclass-specific inventories — tailored to your individual profile." },
              { icon: "🧑‍⚖️", title: "Human Legal Review", desc: "A verified immigration specialist inspects the dossier before submission to consulate." },
              { icon: "📄", title: "Tailored Cover Letter", desc: "Legally sound cover letter highlighting ties to home country and genuine temporary intent." },
              { icon: "✍️", title: "SOP & Financial Clarification", desc: "Personal statements refined by professional immigration writers to address refusal risks." },
              { icon: "📦", title: "Submission-Ready Package", desc: "Fully indexed, numbered, and bookmarked PDF ready for VFS or consular upload." },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-4">
                  {f.icon}
                </div>
                <div className="font-sora font-bold text-base text-slate-900 mb-2">{f.title}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Document Checklist Tool */}
        <div id="checklist">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-2">
            <span>INTERACTIVE PRE-FLIGHT CHECKLIST</span>
          </div>
          <h2 className="font-sora font-extrabold text-slate-950 text-2xl sm:text-3xl mb-2">
            What Documents Do You Need?
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Select your target country to explore official consular document requirements. Click any item to check off your ready files.
          </p>

          {/* Country Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
            {(Object.keys(checklists) as VisaCountry[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-emerald-500 hover:text-emerald-700"
                }`}
              >
                {checklists[tab].title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              {currentChecklist.docs.map((doc, idx) => (
                <div
                  key={doc.name}
                  onClick={() => toggleDocStatus(activeTab, idx)}
                  className={`flex items-center gap-4 p-4 sm:p-5 border rounded-2xl cursor-pointer hover:shadow-md transition-all ${
                    doc.status === "ready"
                      ? "border-emerald-300 bg-emerald-50/40"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="w-11 h-11 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-xl shrink-0">
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm sm:text-base text-slate-900 font-sora">{doc.name}</div>
                    <div className="text-xs text-slate-500 truncate mt-0.5">{doc.desc}</div>
                  </div>
                  <div className="shrink-0 text-xs font-bold">
                    {doc.status === "ready" ? (
                      <span className="text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Ready
                      </span>
                    ) : (
                      <span className="text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> Missing
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
              <h3 className="font-sora font-bold text-base text-slate-900 mb-3">Checklist Progress</h3>
              <div className="flex justify-between text-xs text-slate-500 font-bold mb-2">
                <span>Documents Ready</span>
                <span className="text-slate-900">{readyCount} of {totalCount}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden mb-4">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                Missing required consular proofs? Order our verified preparation package below to have an immigration paralegal assemble every document.
              </p>
              <button
                onClick={scrollToOrder}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition shadow-sm"
              >
                Assemble Missing Files →
              </button>
            </div>
          </div>
        </div>

        {/* Order Form Section */}
        <div id="doc-order" className="pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-2">
            <span>ESCROW-PROTECTED SUBMISSION</span>
          </div>
          <h2 className="font-sora font-extrabold text-slate-950 text-2xl sm:text-3xl mb-8">
            Start Your Documentation Filing Service
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
                {orderDone ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-sora font-extrabold text-xl text-slate-950 mb-2">Order Confirmed!</h3>
                    <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                      A documentation specialist is reviewing your file and will contact you via WhatsApp / email within 2 hours.
                    </p>
                    <button
                      onClick={() => setOrderDone(false)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
                    >
                      Start Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleOrder} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Full Name *</label>
                        <input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                          placeholder="Your Full Legal Name"
                          required
                        />
                      </div>
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Destination</label>
                        <select
                          value={dest}
                          onChange={(e) => setDest(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition cursor-pointer"
                        >
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>Australia</option>
                          <option>Schengen (Europe)</option>
                          <option>UAE</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Visa Type</label>
                        <select
                          value={visaType}
                          onChange={(e) => setVisaType(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition cursor-pointer"
                        >
                          <option>Student Visa</option>
                          <option>Tourist / Visitor</option>
                          <option>Work Permit</option>
                          <option>PR / Settlement</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Upload Drafts or Documents (Optional)</label>
                      <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-6 text-center bg-slate-50/60 hover:bg-emerald-50/20 transition-all cursor-pointer">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-xs font-semibold text-slate-800 mb-0.5">Drop files here or click to browse</p>
                        <p className="text-[11px] text-slate-500">PDF, JPG, PNG · Max 10MB each</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold py-4 rounded-xl text-sm shadow-md shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Documentation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-xs text-slate-500 font-medium mt-2">
                      🔒 Protected by TravlTik Milestone Escrow Vault
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
                <h3 className="font-sora font-bold text-sm text-slate-900 mb-4">What Happens After You Order</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Order received & specialist assigned", time: "Within 2 hours" },
                    { step: "2", title: "AI & Human paralegal audit", time: "Discrepancies flagged" },
                    { step: "3", title: "Submission-ready PDF delivered", time: "Consular approved format" },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3.5 items-start">
                      <div className="w-8 h-8 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl flex items-center justify-center font-bold text-xs shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900 font-sora">{s.title}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{s.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-6 flex gap-3.5 items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-950 mb-1 font-sora">Free Redo Assurance</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    If any document prepared by our legal team is rejected by the embassy, we redo the entire filing service at zero cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
