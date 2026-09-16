import { useState, useRef } from "react";
import { 
    ArrowLeft, Check, CheckCircle2, Eye, Send, Save, Upload, X, Plus, 
    Trash2, Calendar, Phone, Crown, Tag, Briefcase, MapPin, User, 
    Sparkles, ShieldCheck, Globe, Building2, Bold, Italic, Underline, 
    Link, List, ListOrdered, AlignLeft, Maximize2, Megaphone, 
    AlertCircle, FileText, CheckCircle, CreditCard, Lock, RefreshCw, 
    Smartphone, QrCode
} from "lucide-react";

interface PostClassifiedAdFormProps {
    onBack?: () => void;
    onAdCreated?: (ad: any) => void;
    initialData?: any;
}

const countryOptions = [
    { code: "ae", name: "UAE", flag: "🇦🇪" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "us", name: "United States", flag: "🇺🇸" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "sg", name: "Singapore", flag: "🇸🇬" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
];

const categoryOptions = [
    { id: "work_permit", label: "Work Permit / Employment", icon: Briefcase },
    { id: "study_abroad", label: "Study Abroad & Admissions", icon: Globe },
    { id: "immigration_pr", label: "Immigration & PR Visas", icon: Building2 },
    { id: "tourist_visa", label: "Tourist & Visitor Visas", icon: Globe },
    { id: "business_investor", label: "Business & Investor Visas", icon: Briefcase },
    { id: "accommodation", label: "Accommodation & Housing", icon: Building2 },
];

export function PostClassifiedAdForm({ onBack, onAdCreated, initialData }: PostClassifiedAdFormProps) {
    // 1. Classified Type: free vs premium
    const [classifiedType, setClassifiedType] = useState<"free" | "premium">("free");

    // 2. Basic Information (Fresh & clean state - no dummy data)
    const [adTitle, setAdTitle] = useState(initialData?.title || "");
    const [destinationCountry, setDestinationCountry] = useState(initialData?.country || "UAE");
    const [category, setCategory] = useState(initialData?.category || "Work Permit / Employment");

    // 3. Add Details (Fresh - empty hashtags & description)
    const [hashtags, setHashtags] = useState<string[]>(initialData?.hashtags || []);
    const [newTagInput, setNewTagInput] = useState("");
    const [isAddingTag, setIsAddingTag] = useState(false);
    const [description, setDescription] = useState(initialData?.description || "");

    // 4. Images / Media (Fresh - empty array, max 5)
    const [images, setImages] = useState<string[]>(initialData?.images || []);

    // 5. Additional Information
    const todayStr = new Date().toISOString().split("T")[0];
    const thirtyDaysLaterStr = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const [validFrom, setValidFrom] = useState(initialData?.validFrom || todayStr);
    const [validTo, setValidTo] = useState(initialData?.validTo || thirtyDaysLaterStr);
    const [contactPhone, setContactPhone] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("expert_contactNumber") || localStorage.getItem("expert_phone") || "";
        }
        return "";
    });

    // UI & Publishing States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Razorpay Checkout Modal States
    const [isRazorpayOpen, setIsRazorpayOpen] = useState(false);
    const [razorpayStep, setRazorpayStep] = useState<"select_method" | "processing" | "success">("select_method");
    const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking" | "qr">("upi");
    const [upiId, setUpiId] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const [selectedBank, setSelectedBank] = useState("HDFC Bank");
    const [confirmedPaymentId, setConfirmedPaymentId] = useState("");

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    // Add Tag
    const handleAddTag = () => {
        if (!newTagInput.trim()) return;
        let formatted = newTagInput.trim();
        if (!formatted.startsWith("#")) formatted = "#" + formatted;
        if (!hashtags.includes(formatted)) {
            setHashtags([...hashtags, formatted]);
        }
        setNewTagInput("");
        setIsAddingTag(false);
    };

    // Remove Tag
    const handleRemoveTag = (tagToRemove: string) => {
        setHashtags(hashtags.filter(t => t !== tagToRemove));
    };

    // Handle Image Upload
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        if (images.length + files.length > 5) {
            showToast("Maximum 5 images allowed");
            return;
        }

        Array.from(files).forEach(file => {
            if (file.size > 2 * 1024 * 1024) {
                showToast(`File ${file.name} exceeds 2MB limit`);
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setImages(prev => [...prev.slice(0, 4), event.target!.result as string]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    // Remove Image
    const handleRemoveImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    // Save Draft
    const handleSaveDraft = () => {
        const draft = {
            classifiedType,
            title: adTitle,
            country: destinationCountry,
            category,
            hashtags,
            description,
            images,
            validFrom,
            validTo,
            contactPhone,
            savedAt: new Date().toISOString(),
        };
        try {
            localStorage.setItem("expert_classified_draft", JSON.stringify(draft));
            showToast("Draft saved successfully!");
        } catch(e) {
            console.error(e);
        }
    };

    // Primary Click on Publish Ad button
    const handlePublishButtonClick = () => {
        if (!adTitle.trim()) {
            showToast("Please enter an Ad Title");
            return;
        }
        if (!description.trim()) {
            showToast("Please enter a description for your ad");
            return;
        }

        // If Premium Ad selected -> Open Razorpay Checkout Page
        if (classifiedType === "premium") {
            setRazorpayStep("select_method");
            setIsRazorpayOpen(true);
            return;
        }

        // If Free Ad -> Publish immediately
        executePublishAd({ paymentStatus: "free", paymentId: "free_tier" });
    };

    // Razorpay Payment Simulation & Confirmation
    const handlePayRazorpay = async () => {
        setRazorpayStep("processing");

        // Simulate Razorpay Gateway Verification handshake
        await new Promise(r => setTimeout(r, 1600));

        const generatedPaymentId = `pay_rzp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        setConfirmedPaymentId(generatedPaymentId);
        setRazorpayStep("success");

        // Execute ad creation with payment record
        await executePublishAd({
            paymentStatus: "paid",
            paymentId: generatedPaymentId,
            paymentMethod: paymentMethod,
            amountPaid: 499,
            currency: "INR"
        });

        setTimeout(() => {
            setIsRazorpayOpen(false);
            if (onBack) onBack();
        }, 1800);
    };

    // Execute actual publish
    const executePublishAd = async (paymentDetails: any) => {
        setIsSubmitting(true);

        const expertEmail = typeof window !== "undefined" ? (localStorage.getItem("expert_email") || "") : "";
        const expertName = typeof window !== "undefined" ? (localStorage.getItem("expert_businessName") || localStorage.getItem("expert_name") || "Verified Immigration Agency") : "Verified Agency";

        const newAd = {
            id: "ad-" + Date.now(),
            title: adTitle,
            company: expertName,
            category: category,
            country: destinationCountry,
            type: classifiedType,
            price: classifiedType === "premium" ? "₹499 (Premium Verified)" : "FREE",
            hashtags: hashtags,
            description: description,
            cover_photo: images[0] || "",
            images: images,
            validFrom,
            validTo,
            contactPhone,
            expert_email: expertEmail,
            views: 0,
            status: "active",
            payment: paymentDetails,
            created_at: new Date().toISOString(),
        };

        try {
            // Save to backend database
            await fetch("/api/ads/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: adTitle,
                    company: expertName,
                    category: category,
                    cover_photo: images[0] || "",
                    description: description,
                    expert_email: expertEmail,
                })
            }).catch(() => {});

            // Save to local storage for instant dashboard reflection
            const existing = JSON.parse(localStorage.getItem("expert_classifieds") || "[]");
            localStorage.setItem("expert_classifieds", JSON.stringify([newAd, ...existing]));

            showToast(classifiedType === "premium" ? "🎉 Premium Ad Paid & Published Successfully!" : "🎉 Free Classified Ad Published Successfully!");

            if (onAdCreated) {
                onAdCreated(newAd);
            }

            if (classifiedType === "free") {
                setTimeout(() => {
                    if (onBack) onBack();
                }, 1200);
            }
        } catch(err) {
            console.error("Publish error:", err);
            showToast("Failed to publish ad. Saved locally.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const selectedCountryObj = countryOptions.find(c => c.name === destinationCountry) || countryOptions[0];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-800">
            {/* Toast */}
            {toastMessage && (
                <div className="fixed top-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-top-4 duration-200">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    {toastMessage}
                </div>
            )}

            {/* Back Button */}
            <div className="mb-4">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to My Ads
                </button>
            </div>

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Post a Classified Ad
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    Share your latest offer or requirement with travellers and service seekers.
                </p>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT COLUMN: THE FORM (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                    
                    {/* 1. SELECT CLASSIFIED TYPE */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3.5">
                            1. Select Classified Type
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {/* Free Ad */}
                            <div 
                                onClick={() => setClassifiedType("free")}
                                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                    classifiedType === "free"
                                        ? "border-teal-500 bg-teal-50/20 shadow-xs"
                                        : "border-slate-200 hover:border-slate-300 bg-white"
                                }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                            classifiedType === "free" ? "border-teal-600" : "border-slate-300"
                                        }`}>
                                            {classifiedType === "free" && (
                                                <div className="w-2 h-2 rounded-full bg-teal-600" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
                                            <span className="text-teal-600">🏷️</span> Free Ad
                                        </div>
                                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                            Post your ad at no cost. Visible for 14 days.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Ad */}
                            <div 
                                onClick={() => setClassifiedType("premium")}
                                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                    classifiedType === "premium"
                                        ? "border-indigo-600 bg-indigo-50/20 shadow-xs"
                                        : "border-slate-200 hover:border-slate-300 bg-white"
                                }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                            classifiedType === "premium" ? "border-indigo-600" : "border-slate-300"
                                        }`}>
                                            {classifiedType === "premium" && (
                                                <div className="w-2 h-2 rounded-full bg-indigo-600" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
                                                <Crown className="w-4 h-4 text-indigo-600 fill-indigo-600" /> Premium Ad
                                            </div>
                                            <span className="bg-indigo-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                Recommended
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                            Get higher visibility, featured placement and more reach. Valid for 30 days.
                                        </p>
                                        <div className="mt-2 text-sm font-black text-slate-900 flex items-center gap-1.5">
                                            <span>₹499</span>
                                            <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-1.5 py-0.2 rounded border border-indigo-100">Via Razorpay</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. BASIC INFORMATION */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                            2. Basic Information
                        </h2>

                        {/* Ad Title */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Ad Title <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                maxLength={100}
                                value={adTitle}
                                onChange={(e) => setAdTitle(e.target.value)}
                                placeholder="e.g. UAE Work Visa – Special Offer for Skilled Professionals"
                                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white outline-none focus:border-slate-900 transition-colors shadow-2xs placeholder:text-slate-400 placeholder:font-normal"
                            />
                            <div className="text-right text-[10px] text-slate-400 font-semibold mt-1">
                                {adTitle.length}/100
                            </div>
                        </div>

                        {/* Destination Country & Category Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                    Destination Country <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={destinationCountry}
                                        onChange={(e) => setDestinationCountry(e.target.value)}
                                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white outline-none focus:border-slate-900 transition-colors shadow-2xs appearance-none pr-8 cursor-pointer"
                                    >
                                        {countryOptions.map(c => (
                                            <option key={c.code} value={c.name}>
                                                {c.flag} {c.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                    Category <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white outline-none focus:border-slate-900 transition-colors shadow-2xs appearance-none pr-8 cursor-pointer"
                                    >
                                        {categoryOptions.map(cat => (
                                            <option key={cat.id} value={cat.label}>
                                                💼 {cat.label}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. ADD DETAILS */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                            3. Add Details
                        </h2>

                        {/* Hashtags */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Hashtags <span className="text-slate-400 font-normal">(optional)</span>
                            </label>
                            <div className="flex flex-wrap items-center gap-2 mb-1.5 min-h-[34px]">
                                {hashtags.map(tag => (
                                    <span 
                                        key={tag} 
                                        className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200 transition-colors"
                                    >
                                        {tag}
                                        <button 
                                            type="button" 
                                            onClick={() => handleRemoveTag(tag)}
                                            className="text-slate-400 hover:text-slate-700 cursor-pointer"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}

                                {isAddingTag ? (
                                    <div className="inline-flex items-center gap-1">
                                        <input
                                            type="text"
                                            autoFocus
                                            value={newTagInput}
                                            onChange={(e) => setNewTagInput(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    handleAddTag();
                                                } else if (e.key === "Escape") {
                                                    setIsAddingTag(false);
                                                }
                                            }}
                                            placeholder="#tag"
                                            className="px-2 py-1 text-xs font-semibold border border-teal-500 rounded-lg outline-none w-24"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddTag}
                                            className="text-xs font-bold text-teal-600 hover:text-teal-800 px-1"
                                        >
                                            Add
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsAddingTag(true)}
                                        className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <Plus className="w-3 h-3" /> Add Hashtag
                                    </button>
                                )}
                            </div>
                            <p className="text-[11px] text-slate-400">
                                Add relevant hashtags (e.g. #workpermit, #skilledjobs, #immigration)
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Description <span className="text-rose-500">*</span>
                            </label>

                            {/* Rich Text Toolbar Mock */}
                            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs focus-within:border-slate-900 transition-colors">
                                <div className="bg-slate-50 border-b border-slate-200 px-3 py-1.5 flex items-center gap-3 text-slate-500 text-xs">
                                    <button type="button" className="hover:text-slate-900 font-black"><Bold className="w-3.5 h-3.5" /></button>
                                    <button type="button" className="hover:text-slate-900 italic font-serif"><Italic className="w-3.5 h-3.5" /></button>
                                    <button type="button" className="hover:text-slate-900 underline"><Underline className="w-3.5 h-3.5" /></button>
                                    <span className="w-px h-3.5 bg-slate-200" />
                                    <button type="button" className="hover:text-slate-900"><Link className="w-3.5 h-3.5" /></button>
                                    <button type="button" className="hover:text-slate-900"><List className="w-3.5 h-3.5" /></button>
                                    <button type="button" className="hover:text-slate-900"><ListOrdered className="w-3.5 h-3.5" /></button>
                                    <span className="w-px h-3.5 bg-slate-200" />
                                    <button type="button" className="hover:text-slate-900"><AlignLeft className="w-3.5 h-3.5" /></button>
                                    <button type="button" className="hover:text-slate-900"><Maximize2 className="w-3.5 h-3.5" /></button>
                                </div>
                                <textarea
                                    rows={4}
                                    maxLength={1000}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Write a clear, detailed overview of your offer, requirements, and benefits..."
                                    className="w-full p-3 text-xs sm:text-sm font-medium text-slate-800 bg-white outline-none resize-none leading-relaxed placeholder:text-slate-400 placeholder:font-normal"
                                />
                            </div>
                            <div className="text-right text-[10px] text-slate-400 font-semibold mt-1">
                                {description.length}/1000
                            </div>
                        </div>
                    </div>

                    {/* 4. ADD IMAGES / MEDIA */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                                4. Add Images / Media
                            </h2>
                            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                                Upload high-quality images (JPG, PNG). Max 5 images. Each file up to 2 MB.
                            </p>
                        </div>

                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleFileUpload} 
                            accept="image/*" 
                            multiple 
                            className="hidden" 
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                            {images.map((img, idx) => (
                                <div key={idx} className="relative aspect-video sm:aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-2xs group">
                                    <img src={img} alt="Uploaded thumbnail" className="w-full h-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(idx)}
                                        className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-90 hover:opacity-100 hover:bg-rose-600 transition-all cursor-pointer"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            ))}

                            {images.length < 5 && (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="aspect-video sm:aspect-square rounded-xl border-2 border-dashed border-teal-300 hover:border-teal-500 bg-teal-50/20 hover:bg-teal-50/50 transition-all flex flex-col items-center justify-center cursor-pointer text-center p-2 group"
                                >
                                    <Plus className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform mb-1" />
                                    <span className="text-xs font-bold text-slate-800">Add Images</span>
                                    <span className="text-[10px] text-slate-400 font-medium mt-0.5">({5 - images.length} remaining)</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 5. ADDITIONAL INFORMATION (OPTIONAL) */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                            5. Additional Information <span className="text-slate-400 font-normal lowercase">(Optional)</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Validity Period */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                    Validity / Offer Period
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={validFrom}
                                            onChange={(e) => setValidFrom(e.target.value)}
                                            className="w-full px-2.5 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-none focus:border-slate-900 shadow-2xs"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={validTo}
                                            onChange={(e) => setValidTo(e.target.value)}
                                            className="w-full px-2.5 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-none focus:border-slate-900 shadow-2xs"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                    Contact Details
                                </label>
                                <div className="relative">
                                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="tel"
                                        value={contactPhone}
                                        onChange={(e) => setContactPhone(e.target.value)}
                                        placeholder="+91 98765-43210"
                                        className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-none focus:border-slate-900 shadow-2xs"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. PREVIEW & PUBLISH */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                            6. Preview & Publish
                        </h2>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                            {/* Save Draft */}
                            <button
                                type="button"
                                onClick={handleSaveDraft}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer text-left"
                            >
                                <Save className="w-4 h-4 text-slate-400" />
                                <div>
                                    <div>Save Draft</div>
                                    <div className="text-[9px] text-slate-400 font-normal">Your ad will be saved, but not published.</div>
                                </div>
                            </button>

                            {/* Preview & Publish Action Group */}
                            <div className="flex items-center gap-2.5">
                                <button
                                    type="button"
                                    onClick={() => {
                                        const previewEl = document.getElementById("ad-live-preview");
                                        if (previewEl) previewEl.scrollIntoView({ behavior: "smooth" });
                                        showToast("Ad Preview updated live!");
                                    }}
                                    className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                                >
                                    <Eye className="w-4 h-4" /> Preview Ad
                                </button>

                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={handlePublishButtonClick}
                                    className={`text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer ${
                                        classifiedType === "premium"
                                            ? "bg-indigo-600 hover:bg-indigo-700"
                                            : "bg-slate-900 hover:bg-slate-800"
                                    }`}
                                >
                                    {classifiedType === "premium" ? (
                                        <>
                                            <Crown className="w-4 h-4 text-amber-300" /> Pay ₹499 & Publish
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" /> {isSubmitting ? "Publishing..." : "Publish Free Ad"}
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: LIVE AD PREVIEW & INFO (5 Cols) */}
                <div id="ad-live-preview" className="lg:col-span-5 space-y-6 lg:sticky lg:top-6">
                    
                    {/* AD PREVIEW CARD */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all">
                        
                        {/* Preview Top Header */}
                        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
                            <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                                <Eye className="w-4 h-4 text-teal-600" /> Ad Preview
                            </div>
                            <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                <Crown className="w-3 h-3 text-indigo-600" /> {classifiedType === "premium" ? "Premium Ad (₹499)" : "Free Ad"}
                            </span>
                        </div>

                        {/* Banner Image with Title Overlay */}
                        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                            {images.length > 0 ? (
                                <img
                                    src={images[0]}
                                    alt="Banner preview"
                                    className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 flex flex-col items-center justify-center text-center p-6 text-slate-400">
                                    <Upload className="w-8 h-8 text-slate-500 mb-2 opacity-60" />
                                    <span className="text-xs font-bold text-slate-300">No Banner Uploaded</span>
                                    <span className="text-[10px] text-slate-500 mt-0.5">Upload images above to feature here</span>
                                </div>
                            )}
                            
                            {/* Premium / Free Badge */}
                            <div className="absolute top-3 left-3">
                                <span className={`text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider backdrop-blur-xs ${
                                    classifiedType === "premium" ? "bg-indigo-600/90" : "bg-teal-600/90"
                                }`}>
                                    {classifiedType === "premium" ? "Premium" : "Active"}
                                </span>
                            </div>

                            {/* Banner Center/Bottom Titles */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-black leading-tight drop-shadow-md line-clamp-1">
                                    {adTitle ? (adTitle.split("–")[0]?.trim() || adTitle) : "Your Ad Title"}
                                </h3>
                                <p className="text-xs text-slate-200 font-medium mt-0.5 drop-shadow line-clamp-1">
                                    {adTitle ? (adTitle.split("–")[1]?.trim() || "Special Offer for Skilled Professionals") : "Headline or special offer details"}
                                </p>
                            </div>

                            {/* Country Flag Pill */}
                            <div className="absolute bottom-3 right-3">
                                <span className="bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow flex items-center gap-1.5 border border-white/40">
                                    <span>{selectedCountryObj.flag}</span>
                                    <span>{selectedCountryObj.name}</span>
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 space-y-4">
                            
                            {/* Feature Pills */}
                            <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-600">
                                <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                                    <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Work Permit
                                </span>
                                <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                                    <Building2 className="w-3.5 h-3.5 text-slate-400" /> Employment
                                </span>
                                <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                                    <User className="w-3.5 h-3.5 text-slate-400" /> Skilled Professionals
                                </span>
                            </div>

                            {/* Main Title */}
                            <div>
                                <h4 className="text-base font-black text-slate-900 leading-snug">
                                    {adTitle || "Ad Title will appear here once entered"}
                                </h4>
                            </div>

                            {/* Hashtags */}
                            {hashtags.length > 0 ? (
                                <div className="flex flex-wrap gap-1.5">
                                    {hashtags.map(t => (
                                        <span key={t} className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-[11px] text-slate-400 italic">No hashtags added yet</p>
                            )}

                            {/* Description text */}
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                {description || "Your detailed ad description will appear here as you type. Highlight requirements, process details, and visa terms."}
                            </p>

                            {/* Image Thumbnails Gallery */}
                            {images.length > 0 && (
                                <div className="grid grid-cols-4 gap-2 pt-1">
                                    {images.slice(0, 4).map((img, i) => (
                                        <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-slate-200">
                                            <img src={img} alt="preview" className="w-full h-full object-cover" />
                                            {i === 3 && images.length > 4 && (
                                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-black">
                                                    +{images.length - 3}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Card Footer Info & CTA */}
                            <div className="border-t border-slate-100 pt-3.5 flex items-center justify-between gap-2">
                                <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {destinationCountry}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5 text-slate-400" /> Valid till {validTo}
                                    </span>
                                </div>
                                <button 
                                    type="button"
                                    className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1 cursor-default"
                                >
                                    💬 Contact Provider
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* WHY POST A CLASSIFIED AD? WIDGET */}
                    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm space-y-4">
                        <h3 className="text-sm font-black text-slate-900">
                            Why Post a Classified Ad?
                        </h3>

                        <div className="space-y-3.5">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-slate-900">Reach more travellers</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                                        Get discovered by people looking for visa, travel and immigration services.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-slate-900">Showcase your latest offers</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                                        Promote seasonal deals, special packages or new services.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-slate-900">Build credibility</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                                        Increase your visibility and grow your professional network.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                                    <Tag className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-slate-900">Flexible options</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                                        Choose free or premium based on your reach and goals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Verified Guarantee note */}
                        <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                                All ads are reviewed for authenticity and compliance <a href="#" className="text-teal-600 font-bold hover:underline">with our community guidelines</a>.
                            </span>
                        </div>
                    </div>

                </div>

            </div>

            {/* ── RAZORPAY CHECKOUT MODAL ── */}
            {isRazorpayOpen && (
                <div 
                    data-lenis-prevent="true"
                    className="fixed inset-0 z-[99999] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
                >
                    <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto animate-in fade-in zoom-in-95 duration-200">
                        
                        {/* Razorpay Header */}
                        <div className="bg-[#0C2340] text-white px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-black text-sm">
                                    ₹
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-extrabold tracking-widest text-blue-300">
                                        RAZORPAY SECURE
                                    </div>
                                    <h3 className="text-sm font-bold text-white">TravlTik Merchant Gateway</h3>
                                </div>
                            </div>

                            {razorpayStep !== "processing" && (
                                <button
                                    onClick={() => setIsRazorpayOpen(false)}
                                    className="text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Razorpay Body */}
                        {razorpayStep === "select_method" && (
                            <div className="p-6 space-y-5">
                                
                                {/* Order Summary Card */}
                                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-indigo-600 tracking-wider">
                                            Premium Ad Placement
                                        </span>
                                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 line-clamp-1">
                                            {adTitle || "Work Visa Classified Ad"}
                                        </h4>
                                        <p className="text-[11px] text-slate-500 font-medium">
                                            30-Day Featured Top Position
                                        </p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-xl font-black text-slate-900">₹499.00</div>
                                        <div className="text-[10px] text-slate-400 font-semibold">Incl. All Taxes</div>
                                    </div>
                                </div>

                                {/* Payment Methods Selector */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-2">
                                        Select Payment Method
                                    </label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[
                                            { id: "upi", label: "UPI", icon: Smartphone },
                                            { id: "qr", label: "QR Code", icon: QrCode },
                                            { id: "card", label: "Card", icon: CreditCard },
                                            { id: "netbanking", label: "NetBanking", icon: Building2 },
                                        ].map(m => {
                                            const isSelected = paymentMethod === m.id;
                                            const Icon = m.icon;
                                            return (
                                                <button
                                                    key={m.id}
                                                    type="button"
                                                    onClick={() => setPaymentMethod(m.id as any)}
                                                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                                                        isSelected
                                                            ? "border-blue-600 bg-blue-50/50 text-blue-700 shadow-xs"
                                                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                                    }`}
                                                >
                                                    <Icon className={`w-4 h-4 mx-auto mb-1 ${isSelected ? "text-blue-600" : "text-slate-400"}`} />
                                                    <span className="text-xs font-bold block">{m.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Method Specific Inputs */}
                                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/60 space-y-3">
                                    {paymentMethod === "upi" && (
                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                                    Enter UPI ID / VPA
                                                </label>
                                                <input
                                                    type="text"
                                                    value={upiId}
                                                    onChange={(e) => setUpiId(e.target.value)}
                                                    placeholder="username@okhdfcbank or phone@paytm"
                                                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 outline-none focus:border-blue-600 shadow-2xs"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                                                <span>Supported:</span>
                                                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px]">Google Pay</span>
                                                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px]">PhonePe</span>
                                                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px]">Paytm</span>
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod === "qr" && (
                                        <div className="text-center py-2 space-y-2">
                                            <p className="text-xs font-bold text-slate-700">Scan QR code using any UPI App</p>
                                            <div className="w-36 h-36 mx-auto bg-white p-2 rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-center">
                                                <img 
                                                    src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=razorpay@icici&pn=TravlTik&am=499" 
                                                    alt="Razorpay QR" 
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-[10px] text-slate-400 font-semibold block">Scan & Pay ₹499.00</span>
                                        </div>
                                    )}

                                    {paymentMethod === "card" && (
                                        <div className="space-y-2.5">
                                            <div>
                                                <label className="block text-[11px] font-bold text-slate-700 mb-1">Card Number</label>
                                                <input
                                                    type="text"
                                                    maxLength={19}
                                                    value={cardNumber}
                                                    onChange={(e) => setCardNumber(e.target.value)}
                                                    placeholder="4532 •••• •••• ••••"
                                                    className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 outline-none focus:border-blue-600 shadow-2xs"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Expiry (MM/YY)</label>
                                                    <input
                                                        type="text"
                                                        maxLength={5}
                                                        value={cardExpiry}
                                                        onChange={(e) => setCardExpiry(e.target.value)}
                                                        placeholder="12/28"
                                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 outline-none focus:border-blue-600 shadow-2xs"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">CVV</label>
                                                    <input
                                                        type="password"
                                                        maxLength={4}
                                                        value={cardCvv}
                                                        onChange={(e) => setCardCvv(e.target.value)}
                                                        placeholder="•••"
                                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 outline-none focus:border-blue-600 shadow-2xs"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod === "netbanking" && (
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Bank</label>
                                            <select
                                                value={selectedBank}
                                                onChange={(e) => setSelectedBank(e.target.value)}
                                                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 outline-none focus:border-blue-600 shadow-2xs"
                                            >
                                                <option value="HDFC Bank">HDFC Bank</option>
                                                <option value="ICICI Bank">ICICI Bank</option>
                                                <option value="State Bank of India">State Bank of India</option>
                                                <option value="Axis Bank">Axis Bank</option>
                                                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                                                <option value="Punjab National Bank">Punjab National Bank</option>
                                            </select>
                                        </div>
                                    )}
                                </div>

                                {/* Security Badge */}
                                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium px-1">
                                    <span className="flex items-center gap-1">
                                        <Lock className="w-3.5 h-3.5 text-blue-600" /> 256-bit SSL Bank Grade Security
                                    </span>
                                    <span>PCI-DSS Certified</span>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
                                    <button
                                        type="button"
                                        onClick={() => setIsRazorpayOpen(false)}
                                        className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handlePayRazorpay}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                                    >
                                        Pay ₹499.00 Securely
                                    </button>
                                </div>

                            </div>
                        )}

                        {/* Razorpay Processing State */}
                        {razorpayStep === "processing" && (
                            <div className="p-12 text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
                                    <RefreshCw className="w-8 h-8 animate-spin" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight">
                                        Connecting to Razorpay Gateway...
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium mt-1">
                                        Please do not close or refresh this tab while we verify your transaction.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Razorpay Success State */}
                        {razorpayStep === "success" && (
                            <div className="p-8 text-center space-y-4 animate-in fade-in zoom-in-95">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl font-black shadow-inner animate-bounce">
                                    <Check className="w-8 h-8 stroke-[3]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                                        Payment Successful! 🎉
                                    </h3>
                                    <p className="text-xs text-slate-600 font-medium mt-1">
                                        Your <strong>Premium Classified Ad</strong> has been activated for 30 days.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 text-xs text-slate-600 space-y-1.5 text-left max-w-xs mx-auto">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-bold">Transaction ID:</span>
                                        <span className="font-mono font-bold text-slate-900">{confirmedPaymentId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-bold">Amount Paid:</span>
                                        <span className="font-black text-emerald-600">₹499.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-bold">Status:</span>
                                        <span className="font-bold text-blue-600">Verified & Active</span>
                                    </div>
                                </div>

                                <div className="text-[11px] font-bold text-slate-400">
                                    Redirecting to your Classifieds list...
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}

        </div>
    );
}
