import { useState } from "react";
import { CheckCircle, Calendar, MapPin, Clock, Search, ShieldCheck, Check, Globe, ArrowRight, Sparkles, Building2 } from "lucide-react";

type City = "Mumbai" | "Delhi" | "Bangalore" | "Chennai" | "Kolkata" | "Pune";

const centresData: Record<City, { title: string; count: string; type: string; icon: string }> = {
  Mumbai: { title: "Mumbai", count: "3 centres", type: "🏙️", icon: "🏙️" },
  Delhi: { title: "Delhi / NCR", count: "4 centres", type: "🏛️", icon: "🏛️" },
  Bangalore: { title: "Bangalore", count: "2 centres", type: "🌆", icon: "🌆" },
  Chennai: { title: "Chennai", count: "2 centres", type: "🏖️", icon: "🏖️" },
  Kolkata: { title: "Kolkata", count: "2 centres", type: "🌉", icon: "🌉" },
  Pune: { title: "Pune", count: "1 centre", type: "🏞️", icon: "🏞️" },
};

const slotsData = [
  { time: "09:00 AM – 10:00 AM", status: "available" },
  { time: "10:00 AM – 11:00 AM", status: "available" },
  { time: "11:00 AM – 12:00 PM", status: "full" },
  { time: "01:00 PM – 02:00 PM", status: "available" },
  { time: "02:00 PM – 03:00 PM", status: "available" },
  { time: "03:00 PM – 04:00 PM", status: "full" },
];

export function VFSAppointmentPortal() {
  const [selectedCity, setSelectedCity] = useState<City>("Mumbai");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [toast, setToast] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2600);
  };

  const scrollToBooking = () => {
    document.getElementById("vfs-booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !selectedDate || !selectedSlot) {
      showToast("❌ Please fill all fields and select a slot");
      return;
    }
    setSubmitted(true);
    showToast(`✅ VFS Slot booked successfully at VFS ${selectedCity}!`);
  };

  return (
    <div className="relative min-h-screen bg-[#FBFBFE] font-plus-jakarta text-slate-900 pb-24 overflow-hidden selection:bg-emerald-500/20 selection:text-emerald-800">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100/60 to-teal-50/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-100/70 via-indigo-50/30 to-transparent rounded-full blur-3xl opacity-75"></div>
      </div>

      {/* Toast */}
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
                <span>CONSULAR &amp; VFS APPOINTMENT SCHEDULING CONCIERGE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] mb-5 font-sora">
                Schedule Your VFS <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-700 bg-clip-text text-transparent">
                  Biometric Appointment.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
                Receive dedicated concierge assistance to organize your document submission file and secure verified biometric slots at authorized visa application centres.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToBooking}
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-8 py-4 rounded-2xl text-sm shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Request Booking Support</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 px-3 py-2 bg-white rounded-xl border border-slate-200">
                  <Building2 className="w-4 h-4 text-emerald-600" /> 18+ Official Centres
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-8 shadow-xl shadow-slate-200/50">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xl mb-4 border border-teal-100">
                  🛡️
                </div>
                <h3 className="font-sora font-extrabold text-slate-900 text-lg mb-2">
                  Verified Concierge Assistance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  TravlTik coordinates with verified mobility agents to review your documents and ensure your biometric slot is booked accurately in compliance with official consular directives.
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4" /> 100% Compliant Review
                  </span>
                  <span className="text-slate-400">Escrow Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="bg-white/80 border-b border-slate-200/80 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-center divide-x divide-slate-100">
          {[
            { value: "18+ Centres", label: "VFS Global & TLScontact Network" },
            { value: "12,000+", label: "Appointments Monitored & Booked" },
            { value: "98.2%", label: "On-Time Biometric Slot Success" },
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 space-y-16">
        {/* Process Guide */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-2">
            <span>CONSULAR BIOMETRIC PROTOCOL</span>
          </div>
          <h2 className="font-sora font-extrabold text-slate-950 text-2xl sm:text-3xl mb-8">
            What Happens at VFS Global / Visa Centre?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🖐️", title: "Biometrics Capture", desc: "Digital 10-fingerprints and live biometric photo captured for immigration identity records." },
              { icon: "📁", title: "Document Lodgement", desc: "Physical supporting dossier and original passport inspected and submitted at counter." },
              { icon: "🛂", title: "Passport Dispatch", desc: "After consular decision, passport is returned via secured tracked courier or in-person collection." },
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
        </div>

        {/* Centre Selection */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-2">
            <span>LOCATION PICKER</span>
          </div>
          <h2 className="font-sora font-extrabold text-slate-950 text-2xl sm:text-3xl mb-6">
            Select Your Nearest Visa Application Centre
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {(Object.keys(centresData) as City[]).map((city) => {
              const centre = centresData[city];
              const isSelected = selectedCity === city;
              return (
                <div
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`border-2 rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all text-center ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-400/30"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="text-2xl mb-1.5">{centre.icon}</div>
                  <div className="font-sora font-bold text-xs text-slate-900 mb-0.5">{centre.title}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{centre.count}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slot Booking Form */}
        <div id="vfs-booking-form" className="pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-2">
            <span>REAL-TIME SLOT SCHEDULER</span>
          </div>
          <h2 className="font-sora font-extrabold text-slate-950 text-2xl sm:text-3xl mb-8">
            Schedule Your Biometric Slot
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-sora font-extrabold text-xl text-slate-950 mb-2">Appointment Tracking Engaged!</h3>
                    <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto font-medium">
                      Slot monitoring activated for {fullName} at VFS {selectedCity}. You will receive a direct notification the instant your slot is locked.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFullName("");
                        setEmail("");
                        setPhone("");
                        setPassportNo("");
                        setSelectedDate("");
                        setSelectedSlot("");
                      }}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBook} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Full Legal Name *</label>
                        <input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                          placeholder="As on passport"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Passport Number *</label>
                        <input
                          value={passportNo}
                          onChange={(e) => setPassportNo(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                          placeholder="P1234567"
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
                          placeholder="email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Phone / WhatsApp *</label>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Select Available Time Slot</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {slotsData.map((slot) => {
                          const isFull = slot.status === "full";
                          const isSelected = selectedSlot === slot.time;
                          return (
                            <button
                              key={slot.time}
                              type="button"
                              disabled={isFull}
                              onClick={() => setSelectedSlot(slot.time)}
                              className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                isFull
                                  ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                                  : isSelected
                                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-transparent shadow-sm"
                                  : "bg-white border-slate-200 text-slate-800 hover:border-emerald-500"
                              }`}
                            >
                              {slot.time} {isFull && "· Full"}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold py-4 rounded-xl text-sm shadow-md shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Confirm Biometric Slot Booking</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-xs text-slate-500 font-medium mt-2">
                      🔒 Escrow Protected · Instant SMS &amp; Email Slot Alerts
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
                <h3 className="font-sora font-bold text-sm text-slate-900 mb-3">Appointment Checklist</h3>
                <p className="text-xs text-slate-500 mb-4 font-normal">Ensure you bring these required files to your VFS centre appointment:</p>
                <div className="space-y-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-[11px]">✓</span>
                    Original Passport (current & previous)
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-[11px]">✓</span>
                    VFS Appointment Confirmation Letter Printout
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-[11px]">✓</span>
                    Completed & Signed Visa Application Form
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-[11px]">✓</span>
                    Two Consular Compliant Biometric Photographs
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-6 flex gap-3.5 items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-950 mb-1 font-sora">Dedicated Concierge Assistance</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed font-normal">
                    Our operations team tracks slot release patterns and guides you through the official consular submission steps with verified accuracy.
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
