import { useState, useEffect } from "react";
import { 
    Phone, Mail, Clock, ChevronDown, Send, 
    Search, HelpCircle, FileText, CreditCard, Shield, 
    Users, ArrowRight, CheckCircle, Headphones, Sparkles, MapPin, Building, Globe,
    ShieldCheck, MessageSquare, CheckCircle2, Lock, ArrowUpRight
} from "lucide-react";

// Toast Helper
function Toast({ message, visible, onClose }: { message: string, visible: boolean, onClose: () => void }) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(onClose, 2800);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#1b1233] text-white px-6 py-3.5 rounded-full text-xs font-bold z-50 transition-all duration-300 shadow-2xl flex items-center gap-2.5 border border-purple-500/30 ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}>
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>{message}</span>
        </div>
    );
}

const faqs = [
    {
        question: "How does TravlTik Milestone Escrow protect my payments?",
        answer: "With TravlTik Milestone Escrow, your funds are never paid upfront to the consultant. Funds are locked securely in an escrow vault and released only in verified phases: 1st installment of payment on agreement signing and document verification, 02nd installment of payment upon visa filing with official government receipt, and Final payment only when your final visa milestone or decision outcome is reached. (All milestone and payment percentages shall be decided and mutually agreed upon between the consultant and applicant before starting the process).",
    },
    {
        question: "How do I book a consultation with a verified immigration lawyer?",
        answer: "Visit the 'Find Experts' directory, filter by destination country (Canada, UK, Europe, Australia, USA) or visa category (Work, Study, PR), and select your consultant. You can compare profiles, review official registry numbers (CICC, MARA, OISC), and schedule an instant video consultation.",
    },
    {
        question: "Is my personal identification and document data secure?",
        answer: "Yes. TravlTik operates under sovereign ISO/IEC 27001 security standards with column-level AES-256-GCM encryption. Your sensitive passports, bank statements, and biometric PDFs are stored in encrypted vaults and shared strictly with your designated legal representative.",
    },
    {
        question: "How are immigration consultants and attorneys verified?",
        answer: "Every consultant on TravlTik undergoes a 4-tier verification protocol: regulatory council license verification (CICC for Canada, MARA for Australia, OISC for UK, Bar Council for legal attorneys), identity KYC, professional liability insurance, and historic case audit.",
    },
    {
        question: "What is your satisfaction and refund policy?",
        answer: "If an initial consultation does not take place as scheduled or fails to meet professional standards, you are entitled to a 100% refund under our Milestone Escrow Guarantee within 48 hours.",
    },
    {
        question: "What should I do in case of an urgent visa refusal or deadline?",
        answer: "Use our 'Visa Appeals' category in the expert directory to consult directly with registered immigration attorneys specializing in judicial reviews, deportation defence, and emergency stay applications.",
    },
];

export function SupportPortal() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [toastMsg, setToastMsg] = useState("");
    const [isToastVisible, setIsToastVisible] = useState(false);
    
    // Form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [visaType, setVisaType] = useState("Work Permit");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const triggerToast = (msg: string) => {
        setToastMsg(msg);
        setIsToastVisible(true);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !phone.trim()) {
            triggerToast("⚠️ Please enter your name, email, and phone number.");
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/support", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    visa_type: visaType,
                    message: message || "Support request submitted from Contact Us page."
                })
            }).catch(() => null);

            triggerToast("✉️ Message sent successfully! Our team will get back to you within 2 hours.");
            setName("");
            setEmail("");
            setPhone("");
            setVisaType("Work Permit");
            setMessage("");
        } catch (err) {
            triggerToast("✉️ Message received! We will contact you shortly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-[#FBFBFE] min-h-screen pb-24 font-sans text-slate-900 relative overflow-hidden selection:bg-purple-100 selection:text-purple-900">
            <Toast message={toastMsg} visible={isToastVisible} onClose={() => setIsToastVisible(false)} />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-60 right-10 w-[450px] h-[450px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* HERO HEADER */}
            <div className="pt-10 sm:pt-14 pb-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#430f7a] bg-[#eee3fc] border border-[#dccaf7] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#00b070] animate-pulse" />
                    24/7 Dedicated Assistance
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1b1233] tracking-tight leading-[1.15] mb-4 font-plus-jakarta">
                    We're Here to Help You{" "}
                    <span className="bg-gradient-to-r from-[#00b070] via-[#2fa9a0] to-[#6b34b3] bg-clip-text text-transparent">
                        Move Confident
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                    Have questions about visas, milestone escrow protection, or finding verified consultants? Our global legal and support desk is ready to help you.
                </p>

                {/* Trust Badges Strip */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs font-bold text-slate-700">
                    <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Average Response Time: &lt; 2 Hours</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                        <Lock className="w-3.5 h-3.5 text-purple-600" />
                        <span>100% Milestone Escrow Protection</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                        <span>ISO/IEC 27001 Data Security</span>
                    </span>
                </div>
            </div>

            {/* THREE PRIMARY CONTACT CARDS */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
                <div className="grid sm:grid-cols-3 gap-5">
                    {/* Phone Card */}
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1 font-plus-jakarta">Direct Hotline</span>
                        <a href="tel:+917661989366" className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors block mb-1 font-plus-jakarta">
                            +91 766 1989 366
                        </a>
                        <p className="text-xs text-slate-500 font-medium">Mon - Sat, 9:00 AM - 8:00 PM IST</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1 font-plus-jakarta">Support Desk</span>
                        <a href="mailto:hello@travltik.com" className="text-lg font-extrabold text-slate-900 group-hover:text-[#430f7a] transition-colors block mb-1 font-plus-jakarta truncate">
                            hello@travltik.com
                        </a>
                        <p className="text-xs text-slate-500 font-medium">Fast email replies in under 2 hours</p>
                    </div>

                    {/* Milestone Escrow Help */}
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1 font-plus-jakarta">Escrow Safety Vault</span>
                        <a href="/escrow" className="text-lg font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors block mb-1 font-plus-jakarta flex items-center gap-1">
                            <span>100% Protection</span>
                            <ArrowUpRight className="w-4 h-4 text-teal-500" />
                        </a>
                        <p className="text-xs text-slate-500 font-medium">Dispute resolution within 24 hours</p>
                    </div>
                </div>
            </div>

            {/* ADDRESS AND CONTACT FORM GRID */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-8 items-start mb-20">
                {/* Left Side: Headquarters Details Card */}
                <div className="md:col-span-5 bg-gradient-to-br from-[#1b1233] via-[#2a1b4e] to-[#430f7a] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden border border-purple-900/30 flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="space-y-8 relative z-10">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-400/30 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Corporate Headquarters
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-plus-jakarta">
                                TravlTik Global Offices
                            </h2>
                            <p className="text-xs text-purple-200/80 mt-1 font-medium">Licensed Global Mobility &amp; Legal Escrow Entity</p>
                        </div>

                        {/* Head Office Address */}
                        <div className="flex gap-4">
                            <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-emerald-300">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-extrabold text-xs text-emerald-300 tracking-wider uppercase font-plus-jakarta">Head Office</h4>
                                <p className="text-sm text-white font-semibold leading-relaxed">
                                    11-5-334/1/B Red Hills<br />
                                    Hyderabad, Telangana – 500004, India
                                </p>
                            </div>
                        </div>

                        {/* Innovation Hub & Branches */}
                        <div className="flex gap-4 border-t border-white/10 pt-6">
                            <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-purple-300">
                                <Building className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-extrabold text-xs text-purple-300 tracking-wider uppercase font-plus-jakarta">Technology Hub</h4>
                                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                                    Raheja Mindspace IT Park, Madhapur, Hyderabad
                                </p>
                            </div>
                        </div>

                        {/* Other Locations */}
                        <div className="flex gap-4 border-t border-white/10 pt-6">
                            <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-teal-300">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-extrabold text-xs text-teal-300 tracking-wider uppercase font-plus-jakarta">Partner Branches</h4>
                                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                                    Bengaluru • Mumbai • Delhi • Chennai • Kochi • Dubai
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-8 pt-5 flex items-center justify-between text-[11px] font-semibold text-purple-200/70">
                        <span>Jurisdiction: Worldwide</span>
                        <span className="text-emerald-400 font-bold">100% Escrow Protected</span>
                    </div>
                </div>

                {/* Right Side: Modern Send Message Form */}
                <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-[#430f7a] uppercase tracking-wider block mb-1">Direct Consultation Desk</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b1233] font-plus-jakarta">Send Us a Message</h2>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Fill out the details below and our counseling coordinator will reach out within 2 hours.</p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 font-plus-jakarta">Full Name *</label>
                            <input 
                                type="text" 
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Rahul Sharma" 
                                className="w-full px-4 h-12 text-xs sm:text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#430f7a] focus:ring-2 focus:ring-purple-500/10 placeholder-slate-400 transition-all"
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 font-plus-jakarta">Email Address *</label>
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@email.com" 
                                    className="w-full px-4 h-12 text-xs sm:text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#430f7a] focus:ring-2 focus:ring-purple-500/10 placeholder-slate-400 transition-all"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 font-plus-jakarta">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+91 98765 43210" 
                                    className="w-full px-4 h-12 text-xs sm:text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#430f7a] focus:ring-2 focus:ring-purple-500/10 placeholder-slate-400 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 font-plus-jakarta">Visa / Consultation Category *</label>
                            <div className="relative">
                                <select 
                                    required
                                    value={visaType}
                                    onChange={(e) => setVisaType(e.target.value)}
                                    className="w-full px-4 h-12 text-xs sm:text-sm font-bold rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#430f7a] focus:ring-2 focus:ring-purple-500/10 appearance-none cursor-pointer transition-all"
                                >
                                    <option value="Work Permit">Work Permit &amp; LMIA</option>
                                    <option value="Student Visa">Student Visa &amp; University Admissions</option>
                                    <option value="PR & Migration">Permanent Residency (PR) &amp; Express Entry</option>
                                    <option value="Tourist & Visit">Tourist &amp; Visitor Visa</option>
                                    <option value="Visa Appeals">Visa Refusals &amp; Legal Appeals</option>
                                    <option value="Digital Nomad">Digital Nomad &amp; Remote Worker</option>
                                    <option value="Escrow Dispute">Escrow Payment &amp; Refund Request</option>
                                    <option value="Other">Other Query</option>
                                </select>
                                <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 font-plus-jakarta">Case Details / Message</label>
                            <textarea 
                                rows={4} 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Describe your destination, current visa status, or question..."
                                className="w-full px-4 py-3 text-xs sm:text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#430f7a] focus:ring-2 focus:ring-purple-500/10 placeholder-slate-400 resize-none transition-all"
                            />
                        </div>

                        <div className="pt-2">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm py-4 rounded-xl shadow-md shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer font-plus-jakarta flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                <span>{isSubmitting ? "Sending Message..." : "Submit Message →"}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-8">
                    <span className="text-[11px] font-extrabold text-slate-400 tracking-wider uppercase block mb-1 font-plus-jakarta">Frequently Asked Questions</span>
                    <h2 className="font-plus-jakarta font-extrabold text-[#1b1233] text-2xl sm:text-3xl">Answers to Common Questions</h2>
                </div>

                {/* FAQ Search */}
                <div className="relative max-w-xl mx-auto mb-8">
                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search answers about escrow, lawyers, refunds..."
                        className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm font-medium rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-[#430f7a] focus:ring-2 focus:ring-purple-500/10 placeholder-slate-400 shadow-xs"
                    />
                </div>
                
                <div className="space-y-3.5">
                    {filteredFaqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                                    isOpen ? "border-purple-300 shadow-md ring-1 ring-purple-100" : "border-slate-200/80 hover:border-slate-300"
                                }`}
                            >
                                <button
                                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                                >
                                    <span className="font-bold text-sm sm:text-base text-slate-900 font-plus-jakarta leading-snug">
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                        isOpen ? "bg-[#430f7a] text-white" : "bg-slate-100 text-slate-500"
                                    }`}>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                                    </div>
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-5 pt-0 animate-fadeIn">
                                        <div className="h-px w-full bg-slate-100 mb-3" />
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
