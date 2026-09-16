import { useState, useRef, useEffect } from "react";
import { 
    ArrowLeft, Check, CheckCircle2, Eye, Send, Save, Upload, X, Plus, 
    Trash2, Calendar, Phone, Crown, Tag, Briefcase, MapPin, User, 
    Sparkles, ShieldCheck, Globe, Building2, Bold, Italic, Underline, 
    Link, List, ListOrdered, AlignLeft, Maximize2, Megaphone, 
    AlertCircle, FileText, CheckCircle, CreditCard, Lock, RefreshCw, 
    Smartphone, QrCode, ChevronDown, Search
} from "lucide-react";

interface PostClassifiedAdFormProps {
    onBack?: () => void;
    onAdCreated?: (ad: any) => void;
    initialData?: any;
}

interface CountryOption {
    code: string;
    name: string;
    flag: string;
    region?: string;
}

const countryOptions: CountryOption[] = [
    { code: "ae", name: "UAE", flag: "🇦🇪", region: "Middle East" },
    { code: "ca", name: "Canada", flag: "🇨🇦", region: "North America" },
    { code: "gb", name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
    { code: "au", name: "Australia", flag: "🇦🇺", region: "Oceania" },
    { code: "de", name: "Germany", flag: "🇩🇪", region: "Europe" },
    { code: "us", name: "United States", flag: "🇺🇸", region: "North America" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿", region: "Oceania" },
    { code: "sg", name: "Singapore", flag: "🇸🇬", region: "Asia" },
    { code: "ie", name: "Ireland", flag: "🇮🇪", region: "Europe" },
    { code: "pl", name: "Poland", flag: "🇵🇱", region: "Europe" },
    { code: "gr", name: "Greece", flag: "🇬🇷", region: "Europe" },
    { code: "sa", name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
    { code: "qa", name: "Qatar", flag: "🇶🇦", region: "Middle East" },
    { code: "fr", name: "France", flag: "🇫🇷", region: "Europe" },
    { code: "it", name: "Italy", flag: "🇮🇹", region: "Europe" },
    { code: "es", name: "Spain", flag: "🇪🇸", region: "Europe" },
    { code: "pt", name: "Portugal", flag: "🇵🇹", region: "Europe" },
    { code: "mt", name: "Malta", flag: "🇲🇹", region: "Europe" },
    { code: "jp", name: "Japan", flag: "🇯🇵", region: "Asia" },
];

interface CategoryOption {
    id: string;
    label: string;
    icon: any;
    color: string;
    badgeBg: string;
}

const categoryOptions: CategoryOption[] = [
    { id: "work_permit", label: "Work Permit / Employment", icon: Briefcase, color: "text-amber-700", badgeBg: "bg-amber-50 border-amber-200" },
    { id: "study_abroad", label: "Study Abroad & Admissions", icon: Globe, color: "text-blue-700", badgeBg: "bg-blue-50 border-blue-200" },
    { id: "immigration_pr", label: "Immigration & PR Visas", icon: Building2, color: "text-purple-700", badgeBg: "bg-purple-50 border-purple-200" },
    { id: "tourist_visa", label: "Tourist & Visitor Visas", icon: Globe, color: "text-emerald-700", badgeBg: "bg-emerald-50 border-emerald-200" },
    { id: "business_investor", label: "Business & Investor Visas", icon: Briefcase, color: "text-indigo-700", badgeBg: "bg-indigo-50 border-indigo-200" },
    { id: "accommodation", label: "Accommodation & Housing", icon: Building2, color: "text-rose-700", badgeBg: "bg-rose-50 border-rose-200" },
];

export function PostClassifiedAdForm({ onBack, onAdCreated, initialData }: PostClassifiedAdFormProps) {
    // 1. Classified Type: free vs premium
    const [classifiedType, setClassifiedType] = useState<"free" | "premium">("free");

    // 2. Basic Information (Fresh & clean state - no dummy data)
    const [adTitle, setAdTitle] = useState(initialData?.title || "");
    const [destinationCountry, setDestinationCountry] = useState(initialData?.country || "UAE");
    const [category, setCategory] = useState(initialData?.category || "Work Permit / Employment");

    // Custom Dropdown Open & Search States
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const countryDropdownRef = useRef<HTMLDivElement>(null);
    const categoryDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
                setIsCountryOpen(false);
            }
            if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
                setIsCategoryOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 3. Add Details (Fresh - empty hashtags & description)
    const [hashtags, setHashtags] = useState<string[]>(initialData?.hashtags || []);
    const [newTagInput, setNewTagInput] = useState("");
    const [isAddingTag, setIsAddingTag] = useState(false);
    const [description, setDescription] = useState(initialData?.description || "");

    // 4. Images / Media (Fresh - empty array, max 5)
    const [images, setImages] = useState<string[]>(initialData?.images || []);

    // 5. Additional Information (Completely Fresh - NO dummy prefilled dates or phone)
    const [validFrom, setValidFrom] = useState(initialData?.validFrom || "");
    const [validTo, setValidTo] = useState(initialData?.validTo || "");
    const [contactPhone, setContactPhone] = useState(initialData?.contactPhone || "");

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

        const remainingSlots = 5 - images.length;
        if (remainingSlots <= 0) {
            showToast("Maximum 5 images allowed");
            return;
        }

        const filesToProcess = Array.from(files).slice(0, remainingSlots);
        filesToProcess.forEach(file => {
            if (file.size > 2 * 1024 * 1024) {
                showToast(`File ${file.name} exceeds 2MB limit`);
                return;
            }
            const reader = new FileReader();
            reader.onload = (uploadEvent) => {
                if (uploadEvent.target?.result) {
                    setImages(prev => {
                        if (prev.length >= 5) return prev;
                        return [...prev, uploadEvent.target!.result as string];
                    });
                }
            };
            reader.readAsDataURL(file);
        });

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // Remove Image
    const handleRemoveImage = (indexToRemove: number) => {
        setImages(images.filter((_, idx) => idx !== indexToRemove));
    };

    // Save as draft
    const handleSaveDraft = () => {
        const draft = {
            title: adTitle,
            country: destinationCountry,
            category,
            type: classifiedType,
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
            });

            // Save to localStorage for instant reactivity across portals
            const existingAds = JSON.parse(localStorage.getItem("active_classified_ads") || "[]");
            localStorage.setItem("active_classified_ads", JSON.stringify([newAd, ...existingAds]));

            showToast(classifiedType === "premium" ? "Premium Ad successfully activated & published!" : "Classified Ad published successfully!");
            if (onAdCreated) onAdCreated(newAd);

            if (classifiedType !== "premium") {
                setTimeout(() => {
                    if (onBack) onBack();
                }, 1200);
            }
        } catch (err) {
            console.error("Failed to publish ad:", err);
            showToast("Failed to publish ad. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Filtered countries for custom dropdown
    const filteredCountries = countryOptions.filter(c => 
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        c.code.toLowerCase().includes(countrySearch.toLowerCase()) ||
        (c.region && c.region.toLowerCase().includes(countrySearch.toLowerCase()))
    );

    const selectedCountryObj = countryOptions.find(c => c.name === destinationCountry) || countryOptions[0];
    const selectedCategoryObj = categoryOptions.find(cat => cat.label === category) || categoryOptions[0];
    const CategoryIcon = selectedCategoryObj.icon;

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 pb-24 relative">
            
            {/* TOAST NOTIFICATION */}
            {toastMessage && (
                <div className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-5">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                    <span className="text-sm font-semibold">{toastMessage}</span>
                </div>
            )}

            {/* TOP BREADCRUMB / HEADER */}
            <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
                    {onBack && (
                        <button 
                            type="button" 
                            onClick={onBack} 
                            className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" /> Back to Classifieds
                        </button>
                    )}
                    {onBack && <span>/</span>}
                    <span className="text-slate-900 font-bold">New Classified Ad</span>
                </div>
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
                                value={adTitle}
                                onChange={(e) => setAdTitle(e.target.value.slice(0, 100))}
                                placeholder="e.g. UAE Work Visa – Special Offer for Skilled Professionals"
                                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 transition-all shadow-2xs"
                            />
                            <div className="flex justify-end mt-1">
                                <span className="text-[11px] text-slate-400 font-medium">
                                    {adTitle.length}/100
                                </span>
                            </div>
                        </div>

                        {/* Destination Country & Category Row with CUSTOM MODERN DROPDOWNS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* CUSTOM DESTINATION COUNTRY DROPDOWN */}
                            <div className="relative" ref={countryDropdownRef}>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                    Destination Country <span className="text-rose-500">*</span>
                                </label>
                                
                                {/* Trigger Button */}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsCountryOpen(!isCountryOpen);
                                        setIsCategoryOpen(false);
                                    }}
                                    className={`w-full px-3.5 py-2.5 bg-white border rounded-xl flex items-center justify-between text-left transition-all shadow-2xs cursor-pointer ${
                                        isCountryOpen 
                                            ? "border-slate-900 ring-2 ring-slate-900/10" 
                                            : "border-slate-200 hover:border-slate-300"
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5 truncate">
                                        <img 
                                            src={`https://flagcdn.com/w40/${selectedCountryObj.code.toLowerCase()}.png`} 
                                            alt={selectedCountryObj.name}
                                            className="w-5 h-3.5 object-cover rounded-xs shadow-2xs border border-slate-200 shrink-0"
                                            onError={(e) => {
                                                (e.currentTarget as HTMLElement).style.display = 'none';
                                            }}
                                        />
                                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-sm shrink-0">
                                            {selectedCountryObj.code.toUpperCase()}
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                                            {selectedCountryObj.name}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${isCountryOpen ? "rotate-180 text-slate-900" : ""}`} />
                                </button>

                                {/* Dropdown Menu Popover */}
                                {isCountryOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200/95 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                                        {/* Search Filter Header */}
                                        <div className="p-2.5 border-b border-slate-100 bg-slate-50/80">
                                            <div className="relative">
                                                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                                                <input
                                                    type="text"
                                                    value={countrySearch}
                                                    onChange={(e) => setCountrySearch(e.target.value)}
                                                    placeholder="Search country or code..."
                                                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-900 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>

                                        {/* Options List */}
                                        <div className="max-h-60 overflow-y-auto py-1.5 divide-y divide-slate-50">
                                            {filteredCountries.length > 0 ? (
                                                filteredCountries.map(c => {
                                                    const isSelected = c.name === destinationCountry;
                                                    return (
                                                        <div
                                                            key={c.code}
                                                            onClick={() => {
                                                                setDestinationCountry(c.name);
                                                                setIsCountryOpen(false);
                                                                setCountrySearch("");
                                                            }}
                                                            className={`px-3.5 py-2.5 flex items-center justify-between transition-colors cursor-pointer ${
                                                                isSelected 
                                                                    ? "bg-teal-50/60 text-teal-900 font-bold" 
                                                                    : "hover:bg-slate-50 text-slate-800 font-medium"
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-2.5 truncate">
                                                                <img 
                                                                    src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} 
                                                                    alt={c.name}
                                                                    className="w-5 h-3.5 object-cover rounded-xs shadow-2xs border border-slate-200 shrink-0"
                                                                    onError={(e) => {
                                                                        (e.currentTarget as HTMLElement).style.display = 'none';
                                                                    }}
                                                                />
                                                                <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-sm">
                                                                    {c.code.toUpperCase()}
                                                                </span>
                                                                <span className="text-xs sm:text-sm truncate">
                                                                    {c.name}
                                                                </span>
                                                            </div>
                                                            {isSelected && (
                                                                <Check className="w-4 h-4 text-teal-600 shrink-0 ml-2" />
                                                            )}
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <div className="px-4 py-6 text-center text-xs text-slate-400">
                                                    No countries match "{countrySearch}"
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CUSTOM CATEGORY DROPDOWN */}
                            <div className="relative" ref={categoryDropdownRef}>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                    Category <span className="text-rose-500">*</span>
                                </label>
                                
                                {/* Trigger Button */}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsCategoryOpen(!isCategoryOpen);
                                        setIsCountryOpen(false);
                                    }}
                                    className={`w-full px-3.5 py-2.5 bg-white border rounded-xl flex items-center justify-between text-left transition-all shadow-2xs cursor-pointer ${
                                        isCategoryOpen 
                                            ? "border-slate-900 ring-2 ring-slate-900/10" 
                                            : "border-slate-200 hover:border-slate-300"
                                    }`}
                                >
                                    <div className="flex items-center gap-2 truncate">
                                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center border shrink-0 ${selectedCategoryObj.badgeBg}`}>
                                            <CategoryIcon className={`w-3.5 h-3.5 ${selectedCategoryObj.color}`} />
                                        </div>
                                        <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                                            {selectedCategoryObj.label}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${isCategoryOpen ? "rotate-180 text-slate-900" : ""}`} />
                                </button>

                                {/* Dropdown Menu Popover */}
                                {isCategoryOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200/95 overflow-hidden py-1.5 animate-in fade-in zoom-in-95 duration-150">
                                        <div className="max-h-60 overflow-y-auto divide-y divide-slate-50">
                                            {categoryOptions.map(cat => {
                                                const isSelected = cat.label === category;
                                                const IconComponent = cat.icon;
                                                return (
                                                    <div
                                                        key={cat.id}
                                                        onClick={() => {
                                                            setCategory(cat.label);
                                                            setIsCategoryOpen(false);
                                                        }}
                                                        className={`px-3.5 py-2.5 flex items-center justify-between transition-colors cursor-pointer ${
                                                            isSelected 
                                                                ? "bg-slate-50 text-slate-950 font-bold" 
                                                                : "hover:bg-slate-50 text-slate-700 font-medium"
                                                        }`}
                                                    >
                                                        <div className="flex items-center gap-2.5 truncate">
                                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 ${cat.badgeBg}`}>
                                                                <IconComponent className={`w-3.5 h-3.5 ${cat.color}`} />
                                                            </div>
                                                            <span className="text-xs sm:text-sm truncate">
                                                                {cat.label}
                                                            </span>
                                                        </div>
                                                        {isSelected && (
                                                            <Check className="w-4 h-4 text-teal-600 shrink-0 ml-2" />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
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
                                            className="px-2.5 py-1 text-xs border border-slate-300 rounded-lg outline-none focus:border-slate-900 w-24"
                                            autoFocus
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddTag}
                                            className="text-xs bg-slate-900 text-white px-2 py-1 rounded-lg font-bold hover:bg-slate-800"
                                        >
                                            Add
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsAddingTag(false)}
                                            className="text-slate-400 hover:text-slate-700 p-1"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsAddingTag(true)}
                                        className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <Plus className="w-3 h-3" /> Add Tag
                                    </button>
                                )}
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium">
                                Press Enter to add tags. Tags help travellers discover your ad faster.
                            </p>
                        </div>

                        {/* Rich Description */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Description <span className="text-rose-500">*</span>
                            </label>
                            
                            {/* Simple rich text toolbar styling */}
                            <div className="border border-slate-200 rounded-t-xl bg-slate-50/80 px-3 py-2 flex flex-wrap items-center gap-1 border-b-0">
                                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded transition-colors" title="Bold">
                                    <Bold className="w-3.5 h-3.5" />
                                </button>
                                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded transition-colors" title="Italic">
                                    <Italic className="w-3.5 h-3.5" />
                                </button>
                                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded transition-colors" title="Underline">
                                    <Underline className="w-3.5 h-3.5" />
                                </button>
                                <span className="w-px h-4 bg-slate-200 mx-1" />
                                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded transition-colors" title="Bullet List">
                                    <List className="w-3.5 h-3.5" />
                                </button>
                                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded transition-colors" title="Numbered List">
                                    <ListOrdered className="w-3.5 h-3.5" />
                                </button>
                                <span className="w-px h-4 bg-slate-200 mx-1" />
                                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded transition-colors" title="Insert Link">
                                    <Link className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            <textarea
                                rows={6}
                                value={description}
                                onChange={(e) => setDescription(e.target.value.slice(0, 1000))}
                                placeholder="Describe your offer, requirements, process details, and benefits..."
                                className="w-full px-3.5 py-3 border border-slate-200 rounded-b-xl text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 transition-all resize-y shadow-2xs"
                            />
                            <div className="flex justify-between items-center mt-1 text-[11px] text-slate-400">
                                <span>Be descriptive to improve conversion and inquiries.</span>
                                <span>{description.length}/1000</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. ADD IMAGES / MEDIA */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-4">
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

                    {/* 5. ADDITIONAL INFORMATION (OPTIONAL) - ALL DUMMY PRE-FILLED DETAILS REMOVED */}
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

                            {/* Contact Details (Clean empty state, no dummy number) */}
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
                                        placeholder="e.g. +91 98765 43210"
                                        className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-none focus:border-slate-900 shadow-2xs placeholder:text-slate-400"
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
                        
                        <p className="text-xs text-slate-500 font-medium">
                            Review your ad before publishing. You can edit or deactivate it anytime from your dashboard.
                        </p>

                        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                            {/* Save Draft */}
                            <button
                                type="button"
                                onClick={handleSaveDraft}
                                className="border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                            >
                                <Save className="w-4 h-4 text-slate-500" /> Save Draft
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
                                <span className="bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5 border border-white/60">
                                    <img 
                                        src={`https://flagcdn.com/w40/${selectedCountryObj.code.toLowerCase()}.png`} 
                                        alt={selectedCountryObj.name}
                                        className="w-4 h-3 object-cover rounded-xs border border-slate-200"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLElement).style.display = 'none';
                                        }}
                                    />
                                    <span>{selectedCountryObj.name}</span>
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 space-y-4">
                            
                            {/* Feature Pills */}
                            <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-600">
                                <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                                    <CategoryIcon className="w-3.5 h-3.5 text-slate-500" /> {category}
                                </span>
                                <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> {destinationCountry}
                                </span>
                                <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" /> Verified Agency
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
                                        <Calendar className="w-3.5 h-3.5 text-slate-400" /> {validTo ? `Valid till ${validTo}` : "Flexible validity"}
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
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-6 text-white shadow-xl space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="p-2 rounded-xl bg-white/10 text-amber-300">
                                <Sparkles className="w-5 h-5" />
                            </span>
                            <div>
                                <h4 className="text-sm font-black">Why Post a Classified Ad?</h4>
                                <p className="text-[11px] text-slate-300 font-medium">Maximize your lead conversion</p>
                            </div>
                        </div>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </div>
                                <p className="text-xs text-slate-200 leading-relaxed">
                                    <strong className="text-white">Direct Reach:</strong> Your ad appears on the public classified feed seen by over 25,000+ monthly travellers.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                                    <Crown className="w-3 h-3" />
                                </div>
                                <p className="text-xs text-slate-200 leading-relaxed">
                                    <strong className="text-white">Premium Tier Boost:</strong> Unlock top banner pinning, verified badges, and 3x more phone & WhatsApp inquiries.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                                    <ShieldCheck className="w-3 h-3" />
                                </div>
                                <p className="text-xs text-slate-200 leading-relaxed">
                                    <strong className="text-white">Fraud Protection:</strong> Leads are pre-verified with phone and passport checks for maximum serious intent.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* RAZORPAY CHECKOUT MODAL OVERLAY */}
            {isRazorpayOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
                        
                        {/* Razorpay Header Bar */}
                        <div className="bg-[#0C2340] px-6 py-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-lg tracking-wider shadow-inner">
                                    R
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-base font-black tracking-tight">Razorpay</span>
                                        <span className="text-[10px] bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                                            SECURE
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-300">Trusted by 10M+ businesses across India</p>
                                </div>
                            </div>
                            
                            {razorpayStep !== "processing" && (
                                <button
                                    type="button"
                                    onClick={() => setIsRazorpayOpen(false)}
                                    className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Order Summary Strip */}
                        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200/80 flex items-center justify-between">
                            <div>
                                <span className="text-xs font-bold text-slate-800">Classified Ad • Premium Slot</span>
                                <p className="text-[11px] text-slate-500">30-day top placement boost & verified lead badge</p>
                            </div>
                            <div className="text-right">
                                <span className="text-base font-black text-slate-900">₹499.00</span>
                                <span className="block text-[10px] text-emerald-600 font-bold">Inclusive of taxes</span>
                            </div>
                        </div>

                        {/* Modal Body Based on Step */}
                        <div className="p-6">
                            
                            {/* STEP 1: SELECT METHOD */}
                            {razorpayStep === "select_method" && (
                                <div className="space-y-4">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                                        Select Payment Method
                                    </label>

                                    {/* Tabs */}
                                    <div className="grid grid-cols-4 gap-2 border-b border-slate-100 pb-3">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("upi")}
                                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                                                paymentMethod === "upi"
                                                    ? "border-blue-600 bg-blue-50/40 text-blue-800 font-bold shadow-2xs"
                                                    : "border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
                                            }`}
                                        >
                                            <Smartphone className="w-4 h-4" />
                                            <span className="text-[11px]">UPI</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("qr")}
                                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                                                paymentMethod === "qr"
                                                    ? "border-blue-600 bg-blue-50/40 text-blue-800 font-bold shadow-2xs"
                                                    : "border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
                                            }`}
                                        >
                                            <QrCode className="w-4 h-4" />
                                            <span className="text-[11px]">QR Code</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("card")}
                                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                                                paymentMethod === "card"
                                                    ? "border-blue-600 bg-blue-50/40 text-blue-800 font-bold shadow-2xs"
                                                    : "border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
                                            }`}
                                        >
                                            <CreditCard className="w-4 h-4" />
                                            <span className="text-[11px]">Cards</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("netbanking")}
                                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                                                paymentMethod === "netbanking"
                                                    ? "border-blue-600 bg-blue-50/40 text-blue-800 font-bold shadow-2xs"
                                                    : "border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
                                            }`}
                                        >
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-[11px]">Netbanking</span>
                                        </button>
                                    </div>

                                    {/* Method Specific Inputs */}
                                    {paymentMethod === "upi" && (
                                        <div className="space-y-3 pt-1">
                                            <div className="flex items-center gap-2 pb-1">
                                                <span className="text-xs font-bold text-slate-700">Supported UPI Apps:</span>
                                                <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">GPay</span>
                                                <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">PhonePe</span>
                                                <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">Paytm</span>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-1">
                                                    Enter Virtual Payment Address (VPA / UPI ID)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={upiId}
                                                    onChange={(e) => setUpiId(e.target.value)}
                                                    placeholder="e.g. mobile@okhdfcbank or yourname@upi"
                                                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod === "qr" && (
                                        <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                                            <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200 mb-2">
                                                <img 
                                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=visahub@icici&pn=VisaHub%20Premium&am=499.00&cu=INR" 
                                                    alt="Razorpay UPI QR"
                                                    className="w-32 h-32 object-contain"
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-slate-800">Scan QR using any UPI app</span>
                                            <span className="text-[11px] text-slate-500">Google Pay, PhonePe, Paytm, BHIM</span>
                                        </div>
                                    )}

                                    {paymentMethod === "card" && (
                                        <div className="space-y-3 pt-1">
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-1">Card Number</label>
                                                <input
                                                    type="text"
                                                    value={cardNumber}
                                                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                                                    placeholder="4000 1234 5678 9010"
                                                    className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono font-semibold text-slate-900 outline-none focus:border-blue-600"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-600 mb-1">Valid Thru</label>
                                                    <input
                                                        type="text"
                                                        value={cardExpiry}
                                                        onChange={(e) => setCardExpiry(e.target.value)}
                                                        placeholder="MM/YY"
                                                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 outline-none focus:border-blue-600 text-center"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-600 mb-1">CVV</label>
                                                    <input
                                                        type="password"
                                                        value={cardCvv}
                                                        onChange={(e) => setCardCvv(e.target.value.slice(0, 4))}
                                                        placeholder="•••"
                                                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 outline-none focus:border-blue-600 text-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod === "netbanking" && (
                                        <div className="space-y-3 pt-1">
                                            <label className="block text-xs font-semibold text-slate-600">Select Bank</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {["HDFC Bank", "State Bank of India", "ICICI Bank", "Axis Bank"].map(b => (
                                                    <button
                                                        key={b}
                                                        type="button"
                                                        onClick={() => setSelectedBank(b)}
                                                        className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                                                            selectedBank === b
                                                                ? "border-blue-600 bg-blue-50/50 text-blue-900"
                                                                : "border-slate-200 hover:bg-slate-50 text-slate-700"
                                                        }`}
                                                    >
                                                        {b}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Pay CTA Button */}
                                    <div className="pt-2">
                                        <button
                                            type="button"
                                            onClick={handlePayRazorpay}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <Lock className="w-4 h-4" /> Pay ₹499.00 Securely
                                        </button>
                                        <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-slate-400 font-semibold">
                                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                            <span>256-Bit SSL Encryption • Razorpay Certified Partner</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: PROCESSING */}
                            {razorpayStep === "processing" && (
                                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-14 h-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
                                    <div>
                                        <h4 className="text-base font-black text-slate-900">Connecting to Razorpay Gateway...</h4>
                                        <p className="text-xs text-slate-500 mt-1">Please do not refresh or close this browser window.</p>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: SUCCESS */}
                            {razorpayStep === "success" && (
                                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                                        <Check className="w-8 h-8 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-slate-900">Payment Successful!</h4>
                                        <p className="text-xs text-slate-500 mt-1">Transaction ID: <span className="font-mono font-bold text-slate-700">{confirmedPaymentId}</span></p>
                                    </div>
                                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-2 rounded-xl">
                                        Premium Classified Ad Activated! Redirecting...
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}
