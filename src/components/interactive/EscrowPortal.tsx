import { useState } from "react";
import { Shield, CheckCircle, Lock, ArrowRight, AlertTriangle, CreditCard, User, Clock } from "lucide-react";

interface EscrowBooking {
    id: string;
    expert: string;
    service: string;
    amount: string;
    status: string;
    date: string;
}

const steps = [
    { num: 1, label: "You Pay", desc: "Pay securely via Razorpay. Funds are held safely.", icon: CreditCard },
    { num: 2, label: "Session Delivered", desc: "Expert provides the consultation or service.", icon: User },
    { num: 3, label: "You Confirm", desc: "Confirm that the session was satisfactory.", icon: CheckCircle },
    { num: 4, label: "Expert Gets Paid", desc: "Funds are released to the expert's account.", icon: ArrowRight },
];

const protections = [
    { title: "No-Show Protection", desc: "If the expert doesn't show up, you get a full refund automatically.", icon: Clock, color: "bg-amber-50 text-amber-700 border-amber-100" },
    { title: "Quality Assurance", desc: "If the service doesn't meet promised standards, raise a dispute.", icon: Shield, color: "bg-blue-50 text-blue-700 border-blue-100" },
    { title: "Fraud Prevention", desc: "Funds are never directly accessible to the expert until you confirm.", icon: Lock, color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    { title: "Dispute Resolution", desc: "Our team reviews disputes within 48 hours with fair mediation.", icon: AlertTriangle, color: "bg-purple-50 text-purple-700 border-purple-100" },
];

export function EscrowPortal() {
    const [activeStep, setActiveStep] = useState(2);
    const [toast, setToast] = useState({ show: false, msg: "" });
    const [bookings, setBookings] = useState<EscrowBooking[]>(() => {
        if (typeof window === "undefined") return [];
        try {
            const raw = localStorage.getItem("escrow_bookings") || localStorage.getItem("booked_consultations") || localStorage.getItem("travltik_consultations");
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed.map((item: any, idx: number) => ({
                        id: item.id || `ESC-${1000 + idx}`,
                        expert: item.expertName || item.consultantName || item.expert || "Verified Consultant",
                        service: item.service || item.serviceName || "Visa Consultation",
                        amount: item.amount ? (String(item.amount).startsWith("₹") || String(item.amount).startsWith("$") ? item.amount : `₹${item.amount}`) : "₹4,999",
                        status: item.status || "held",
                        date: item.date || item.slotDate || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                    }));
                }
            }
        } catch (_) {}
        return [];
    });

    const triggerToast = (msg: string) => {
        setToast({ show: true, msg });
        setTimeout(() => setToast({ show: false, msg: "" }), 2500);
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            {/* Toast */}
            {toast.show && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0c1a2e] text-white px-6 py-3 rounded-full text-xs font-bold z-50 shadow-2xl transition-all">
                    {toast.msg}
                </div>
            )}

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white py-16 md:py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Shield className="w-4 h-4" /> Escrow Protected Payments
                    </div>
                    <h1 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Pay Safe, Get Service</h1>
                    <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto">Your money is held securely until you confirm the service is complete. Zero extra charge.</p>
                </div>
            </section>

            {/* 4-Step Visual Flow */}
            <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-14">
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60 p-8 transition-all duration-300">
                    <h2 className="font-sans text-xl font-extrabold text-slate-900 tracking-tight mb-8 text-center">How TravlTik Escrow Works</h2>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-2">
                        {steps.map((step, i) => (
                            <div key={step.num} className="flex-1 flex flex-col items-center text-center relative">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all ${i < activeStep ? "bg-emerald-500 text-white shadow-md" :
                                        i === activeStep ? "bg-[#f59e0b] text-white shadow-lg shadow-yellow-200 scale-110" :
                                            "bg-gray-100 text-gray-400"
                                    }`}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className={`font-bold text-sm mb-1 ${i <= activeStep ? "text-slate-900" : "text-gray-400"}`}>{step.label}</h3>
                                <p className="text-xs text-gray-500 max-w-[150px]">{step.desc}</p>
                                {i < steps.length - 1 && (
                                    <div className={`hidden md:block absolute top-7 left-[calc(50%+35px)] w-[calc(100%-70px)] h-[3px] rounded-full ${i < activeStep ? "bg-emerald-400" : "bg-gray-200"
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Protections */}
            <section className="max-w-5xl mx-auto px-4 mb-14">
                <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8 text-center">What Escrow Protects You From</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {protections.map(p => (
                        <div key={p.title} className={`rounded-2xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 p-6 flex items-start gap-4 ${p.color}`}>
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                                <p.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
                                <p className="text-sm text-slate-600">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Active Bookings */}
            <section className="max-w-5xl mx-auto px-4 mb-14">
                <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Your Active Escrow Bookings</h2>
                {bookings.length > 0 ? (
                    <div className="space-y-4">
                        {bookings.map(b => (
                            <div key={b.id} className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Lock className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">{b.expert}</h3>
                                        <p className="text-xs text-slate-500">{b.service} • {b.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                                        🔒 {b.amount} Held
                                    </span>
                                    <button 
                                        onClick={() => triggerToast(`Delivery confirmed for ${b.expert}. Funds released!`)} 
                                        className="bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-all cursor-pointer shadow-xs"
                                    >
                                        Confirm Delivery
                                    </button>
                                    <button 
                                        onClick={() => triggerToast(`Dispute raised for booking ${b.id}. Our team is reviewing.`)} 
                                        className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
                                    >
                                        Dispute
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-slate-200/70 p-8 sm:p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                        <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">No Active Escrow Bookings</h3>
                        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
                            You don't have any funds currently held in escrow. When you book a verified immigration lawyer or consultant, your payments are protected here until service delivery.
                        </p>
                        <a 
                            href="/find-experts" 
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm"
                        >
                            Find Verified Experts
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </section>

            {/* Legal */}
            <section className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-xs text-gray-400">0% extra charge for escrow protection. Funds held in Razorpay nodal account. DPDP compliant. All transactions are SSL encrypted.</p>
                </div>
            </section>
        </div>
    );
}
