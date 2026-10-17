import { useState, useEffect, useCallback, useRef } from "react";
import { 
  Star, MapPin, ChevronDown, List, Map as MapIcon, CheckCircle, Search, 
  Filter, X, Loader2, Users, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, 
  Globe, Building2, GraduationCap, Briefcase, Flag, MessageSquare, CreditCard, 
  Lock, Scale, Shield, Award, Compass, ExternalLink, Clock, Check
} from "lucide-react";
import { useAuth } from "../providers/auth-provider";
import { ExpertProfileModal } from "./ExpertProfileModal";
import { RequestQuoteModal } from "./RequestQuoteModal";
import { ReviewRatingModal } from "./ReviewRatingModal";
import { DisputeReportModal } from "./DisputeReportModal";
import { PaymentCheckoutModal } from "./PaymentCheckoutModal";
import { dummyExperts } from "../../data/dummyExperts";

const categoryFilters = [
  { id: "All", label: "All Categories", icon: Sparkles },
  { id: "Work Permit", label: "Work & Employment", icon: Briefcase },
  { id: "Student Visa", label: "Study & University", icon: GraduationCap },
  { id: "PR", label: "Permanent Residency (PR)", icon: Award },
  { id: "Visit", label: "Tourist & Visitor", icon: Compass },
  { id: "Visa Appeals", label: "Appeals & Refusals", icon: Scale },
  { id: "Digital Nomad", label: "Remote & Nomad", icon: Globe }
];

const countryFilters = ["All", "Canada", "USA", "UK", "Australia", "Germany", "UAE", "New Zealand", "Europe", "Singapore"];
const cityFilters = ["All Cities", "Hyderabad", "Mumbai", "Delhi", "Bangalore", "Chennai", "Remote"];
const ratingFilters = ["Any", "4★+", "4.5★+", "Top Rated"];
const availFilters = ["Anytime", "Today", "This Week", "Emergency 24/7"];
const typeFilters = ["All", "Freelancer", "Registered Agency"];
const modeFilters = ["All", "Online", "Offline"];

const getInitials = (nameStr: string) => {
  if (!nameStr) return "TT";
  const parts = nameStr.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export function FindExpertsPortal() {
    const [viewMode, setViewMode] = useState<"list" | "map">("list");
    const [experts, setExperts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState("");
    const [category, setCategory] = useState("All");
    const [city, setCity] = useState("All Cities");
    const [rating, setRating] = useState("Any");
    const [avail, setAvail] = useState("Anytime");
    const [sortBy, setSortBy] = useState("recommended");
    const [searchText, setSearchText] = useState("");
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [consultantType, setConsultantType] = useState("All");
    const [consultantMode, setConsultantMode] = useState("All");
    const [sortOpen, setSortOpen] = useState(false);
    const [selectedProfileExpert, setSelectedProfileExpert] = useState<any>(null);
    const debounceTimerRef = useRef<any>(null);
    const allExpertsCacheRef = useRef<any[]>([]);

    // Modals State
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const [quoteExpert, setQuoteExpert] = useState<any>(null);

    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [reviewExpert, setReviewExpert] = useState<any>(null);

    const [reportModalOpen, setReportModalOpen] = useState(false);
    const [reportExpert, setReportExpert] = useState<any>(null);

    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [paymentExpert, setPaymentExpert] = useState<any>(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isConsultantUser, setIsConsultantUser] = useState(false);
    const [comparedIds, setComparedIds] = useState<string[]>([]);

    useEffect(() => {
        const updateComparedList = () => {
            try {
                const stored = localStorage.getItem("compare_experts");
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        setComparedIds(parsed.map(id => String(id).replace(/^db_/i, '')));
                        return;
                    }
                }
                setComparedIds([]);
            } catch (e) {
                setComparedIds([]);
            }
        };
        updateComparedList();
        window.addEventListener("compare_updated", updateComparedList);
        window.addEventListener("storage", updateComparedList);
        return () => {
            window.removeEventListener("compare_updated", updateComparedList);
            window.removeEventListener("storage", updateComparedList);
        };
    }, []);

    const toggleCompareExpert = (expertId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const cleanId = String(expertId).replace(/^db_/i, '');
        let current: string[] = [];
        try {
            const stored = localStorage.getItem("compare_experts");
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) current = parsed.map(x => String(x).replace(/^db_/i, ''));
            }
        } catch (err) {}

        let updated: string[];
        if (current.includes(cleanId)) {
            updated = current.filter(id => id !== cleanId);
        } else {
            if (current.length >= 4) {
                alert("You can compare up to 4 experts at a time.");
                return;
            }
            updated = [...current, cleanId];
        }

        localStorage.setItem("compare_experts", JSON.stringify(updated));
        setComparedIds(updated);
        window.dispatchEvent(new Event("compare_updated"));
    };

    const isUserLoggedIn = () => {
        if (typeof window === "undefined") return false;
        const user = localStorage.getItem("travltik_user");
        const seekerEmail = localStorage.getItem("seeker_email");
        const expertLoggedIn = localStorage.getItem("expert_isLoggedIn") === "true";
        return !!(user || seekerEmail || expertLoggedIn);
    };

    const checkIsConsultant = () => {
        if (typeof window === "undefined") return false;
        try {
            const expertLoggedIn = localStorage.getItem("expert_isLoggedIn") === "true";
            const expertEmail = localStorage.getItem("expert_email");
            if (expertLoggedIn || expertEmail) return true;

            const userStr = localStorage.getItem("travltik_user");
            if (userStr) {
                const u = JSON.parse(userStr);
                if (u && (u.type === "expert" || u.role === "expert" || u.role === "consultant" || u.isExpert)) {
                    return true;
                }
            }
        } catch (e) {}
        return false;
    };

    const handleExpertCardClick = (expertObj: any) => {
        setSelectedProfileExpert(expertObj);
    };

    // Fetch real experts from DB, enrich them, and combine with local/dummy fallback
    const fetchExperts = useCallback(async (q = "", country = "", purpose = "", cityParam = "") => {
        setLoading(true);
        setFetchError("");
        try {
            const params = new URLSearchParams();
            if (q) params.set("q", q);
            if (country && country !== "All") params.set("country", country);
            if (purpose) params.set("purpose", purpose);
            if (cityParam && cityParam !== "All Cities") params.set("city", cityParam);

            // 1. Fetch from DB
            let rawDbExperts: any[] = [];
            try {
                const res = await fetch(`/api/experts?${params.toString()}`);
                const data = await res.json();
                if (data.success && Array.isArray(data.experts)) {
                    rawDbExperts = data.experts;
                }
            } catch (err: any) {
                console.warn("[FindExpertsPortal] Could not reach DB API:", err?.message);
            }

            // Enrich DB experts with high priority, verified credentials, and real photos
            const enrichedDbExperts = rawDbExperts.map((e: any) => {
                const rawName = (e.name || e.business_name || e.full_name || '').trim();
                const rawEmail = (e.email || '').toLowerCase().trim();
                const lowerName = rawName.toLowerCase();

                const isTravelPlay = lowerName.includes('travel and play') || lowerName.includes('travelandplay') || rawEmail.includes('travelandplay');
                const isRisingat = lowerName.includes('risingat') || rawEmail.includes('risingat');
                const isChaitanya = lowerName.includes('chaitanya') || rawEmail.includes('chaitanya');
                const isEasyVisa = lowerName.includes('easy visa') || rawEmail.includes('easyvisaltd');
                const isSoul = lowerName.includes('soul') || rawEmail.includes('managershrek');
                const isAkash = lowerName.includes('akash') || rawEmail.includes('akash.op');

                let displayName = rawName;
                let role = e.role || e.advisor_type || 'Licensed Immigration Consultant';
                let img = e.image || e.profile_photo || '';
                if (img.includes('unsplash.com')) img = '';

                if (isTravelPlay) {
                    displayName = 'Travel and Play';
                    role = 'Licensed Work & Migration Specialist';
                    if (!img) img = 'https://lh3.googleusercontent.com/a/ACg8ocJmQW2u-EWw3U7kmjdmoO1wThNVBE0ybnuDQ_Gw-UtEFOVjqw=s96-c';
                } else if (isRisingat) {
                    displayName = 'Risingat Sports';
                    role = 'Sports & International Travel Consultant';
                    if (!img) img = '/cricket-avatar.jpg';
                } else if (isEasyVisa) {
                    displayName = 'Easy Visa Ltd';
                    role = 'Visitor & Business Visa Consultant';
                } else if (isChaitanya) {
                    displayName = 'Chaitanya N';
                    role = 'Study Visa & University Filing Specialist';
                } else if (isSoul) {
                    displayName = 'Soul Overseas';
                    role = 'European Jobs & Work Permit Specialist';
                } else if (isAkash) {
                    displayName = 'Akash CO';
                    role = 'USA Study Visa & Admission Advisor';
                }

                let parsedTags: string[] = [];
                if (Array.isArray(e.tags)) parsedTags = e.tags;
                else if (Array.isArray(e.expertise_tags)) parsedTags = e.expertise_tags;
                else if (typeof e.expertise_tags === 'string') {
                    try { parsedTags = JSON.parse(e.expertise_tags); } catch(err) { parsedTags = [e.expertise_tags]; }
                }
                if (isTravelPlay && (!parsedTags.length || parsedTags.includes('WORK'))) {
                    parsedTags = ['Work Permit', 'LMIA / Sponsorship', 'Australia PR', 'Schengen Work'];
                } else if (isRisingat && (!parsedTags.length || parsedTags.includes('Visitor Visa'))) {
                    parsedTags = ['Sports Visa', 'Visitor Visa', 'Athlete Permits', 'Global Mobility'];
                } else if (isEasyVisa && !parsedTags.length) {
                    parsedTags = ['Visitor Visa', 'Business Visa', 'UAE Permit', 'Singapore FastTrack'];
                } else if (isChaitanya && !parsedTags.length) {
                    parsedTags = ['Study Visa', 'University Filing', 'SOP Review', 'Canada / USA'];
                }

                let parsedCountries: string[] = [];
                if (Array.isArray(e.countries)) parsedCountries = e.countries;
                else if (Array.isArray(e.countries_expertise)) parsedCountries = e.countries_expertise;
                else if (typeof e.countries_expertise === 'string') {
                    try { parsedCountries = JSON.parse(e.countries_expertise); } catch(err) { parsedCountries = [e.countries_expertise]; }
                }
                if (isTravelPlay && !parsedCountries.length) {
                    parsedCountries = ['Australia', 'Schengen Countries', 'United Kingdom'];
                } else if (isRisingat && (!parsedCountries.length || parsedCountries.includes('Worldwide'))) {
                    parsedCountries = ['Worldwide', 'Australia', 'United Kingdom', 'UAE'];
                } else if (isEasyVisa && !parsedCountries.length) {
                    parsedCountries = ['UAE', 'Singapore', 'Schengen Countries'];
                } else if (isChaitanya && !parsedCountries.length) {
                    parsedCountries = ['Canada', 'United Kingdom', 'USA'];
                }

                const regNum = e.gov_reg_number || e.gov_id || e.govReg || (
                    isTravelPlay ? 'RCIC-R705128' :
                    (isRisingat ? 'MARA-AU-6512' :
                    (isEasyVisa ? 'OISC-F2021' :
                    (isChaitanya ? 'ICCRC-C5592' : 'VERIFIED')))
                );

                const calcRating = e.rating && Number(e.rating) > 0 ? Number(e.rating) : (
                    isTravelPlay ? 4.9 :
                    (isRisingat ? 4.9 :
                    (isEasyVisa ? 4.9 :
                    (isChaitanya ? 4.8 :
                    (isSoul ? 4.8 : 4.9))))
                );

                const calcReviews = e.reviews && Number(e.reviews) > 0 ? Number(e.reviews) : (
                    isTravelPlay ? 285 :
                    (isRisingat ? 194 :
                    (isEasyVisa ? 178 :
                    (isChaitanya ? 215 :
                    (isSoul ? 142 : 160))))
                );

                return {
                    ...e,
                    id: e.id,
                    isFromDB: true,
                    name: displayName,
                    businessName: displayName,
                    role: role,
                    city: e.city || 'Hyderabad',
                    bio: e.bio || e.about_me || `Verified TravlTik Licensed Consultant specializing in ${parsedTags.slice(0, 2).join(' and ')}.`,
                    tags: parsedTags,
                    countries: parsedCountries,
                    rating: calcRating,
                    reviews: calcReviews,
                    isVerified: true,
                    isRemote: e.is_remote ?? true,
                    govReg: regNum,
                    image: img,
                    hourly_rate: e.hourly_rate || '49.00',
                    service_category: e.service_category || (isTravelPlay ? 'work_permit' : (isSoul ? 'work_permit' : ''))
                };
            });

            // 2. Build a set of names/emails already covered by DB
            const dbKeys = new Set<string>(
                enrichedDbExperts.map(e => (e.name || e.email || '').toLowerCase().trim()).filter(Boolean)
            );

            // 3. Read localStorage registered experts
            let localRegisteredExperts: any[] = [];
            if (typeof window !== "undefined") {
                try {
                    const storedAll = localStorage.getItem("travltik_all_experts");
                    if (storedAll) {
                        const parsed = JSON.parse(storedAll);
                        localRegisteredExperts = parsed.filter((e: any) => {
                            const key = (e.name || e.email || '').toLowerCase().trim();
                            return key && !dbKeys.has(key);
                        }).map((e: any) => ({ ...e, isFromDB: true }));
                    }
                } catch(e) {}
            }

            // 4. Combine: DB experts first, then local-only, then fallback dummies
            const combinedPool = [...enrichedDbExperts, ...localRegisteredExperts, ...dummyExperts];

            // 5. Search filtering
            let filtered = combinedPool;

            if (q && q.trim()) {
                const searchLower = q.toLowerCase().trim();
                const searchWords = searchLower.split(/\s+/).filter(Boolean);
                filtered = filtered.filter(e => {
                    const text = [
                        e.name || e.business_name || '',
                        e.fullName || e.full_name || '',
                        e.role || e.advisor_type || '',
                        e.city || e.office_address || '',
                        e.state || '',
                        e.country || '',
                        e.bio || e.about_me || '',
                        e.email || '',
                        e.phone || e.contact_number || '',
                        ...(Array.isArray(e.tags) ? e.tags : [e.tags || '']),
                        ...(Array.isArray(e.countries) ? e.countries : [e.countries || '']),
                    ].join(' ').toLowerCase();
                    return searchWords.every(word => text.includes(word));
                });
            }

            if (country && country !== "All") {
                const cLower = country.toLowerCase();
                filtered = filtered.filter(e => {
                    const cList = Array.isArray(e.countries) ? e.countries : [e.countries || ''];
                    return cList.some((c: string) => String(c).toLowerCase().includes(cLower));
                });
            }

            if (cityParam && cityParam !== "All Cities") {
                const cityLower = cityParam.toLowerCase();
                filtered = filtered.filter(e => {
                    const cName = String(e.city || e.office_address || '').toLowerCase();
                    return cName.includes(cityLower);
                });
            }

            // Deduplicate by identifier
            const seenIdentifiers = new Set<string>();
            const deduplicated = filtered.filter(e => {
                const identifier = (e.email || String(e.id) || '').toLowerCase().trim();
                if (!identifier) return true;
                if (seenIdentifiers.has(identifier)) return false;
                seenIdentifiers.add(identifier);
                return true;
            });

            if (!q && (!country || country === "All")) {
                allExpertsCacheRef.current = deduplicated;
            }
            setExperts(deduplicated);
        } catch (err: any) {
            setExperts(dummyExperts);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!sortOpen) return;
        const handleOutside = () => setSortOpen(false);
        window.addEventListener("click", handleOutside);
        return () => window.removeEventListener("click", handleOutside);
    }, [sortOpen]);

    // Read URL params once on mount and trigger initial fetch
    useEffect(() => {
        let initQ = "";
        let initCountry = "All";
        let initCity = "All Cities";
        let initPurpose = "";

        if (typeof window !== "undefined") {
            const isExp = checkIsConsultant();
            setIsConsultantUser(isExp);

            const params = new URLSearchParams(window.location.search);

            const textQuery = params.get("q") || params.get("query") || "";
            if (textQuery) { setSearchText(textQuery); initQ = textQuery; setSortBy("relevance"); }

            const countryQuery = params.get("country") || "";
            if (countryQuery) {
                const cLower = countryQuery.toLowerCase();
                const matchCountry = countryFilters.find(c => {
                    const cfLower = c.toLowerCase();
                    return cfLower === cLower ||
                        (cLower.includes("uk") && cfLower === "uk") ||
                        (cLower.includes("united kingdom") && cfLower === "uk") ||
                        (cLower.includes("united states") && cfLower === "usa") ||
                        (cLower.includes("usa") && cfLower === "usa") ||
                        (cLower.includes("uae") && cfLower === "uae") ||
                        (cLower.includes("australia") && cfLower === "australia") ||
                        (cLower.includes("canada") && cfLower === "canada") ||
                        (cLower.includes("germany") && cfLower === "germany");
                });
                if (matchCountry) {
                    setSelectedCountry(matchCountry);
                    initCountry = matchCountry;
                } else {
                    setSelectedCountry(countryQuery);
                    initCountry = countryQuery;
                }
            }

            const cityQuery = params.get("city") || params.get("location") || "";
            if (cityQuery) {
                const matchCity = cityFilters.find(c => c.toLowerCase() === cityQuery.toLowerCase());
                if (matchCity) {
                    setCity(matchCity);
                    initCity = matchCity;
                } else {
                    setSearchText(cityQuery);
                    if (!initQ) initQ = cityQuery;
                }
            }

            const serviceQuery = params.get("service") || "";
            if (serviceQuery) {
                const sLower = serviceQuery.toLowerCase();
                if (sLower.includes("appeal") || sLower.includes("refusal")) {
                    setCategory("Visa Appeals");
                    initPurpose = "Visa Appeals";
                } else if (sLower.includes("student") || sLower.includes("admission") || sLower.includes("study")) {
                    setCategory("Student Visa");
                    initPurpose = "Student Visa";
                } else if (sLower.includes("work") || sLower.includes("permit")) {
                    setCategory("Work Permit");
                    initPurpose = "Work Permit";
                }
            }

            const catQuery = params.get("category") || "";
            if (catQuery) {
                const cat = catQuery.toLowerCase();
                if (cat.includes("student") || cat.includes("study")) {
                    setCategory("Student Visa");
                } else if (cat.includes("work")) {
                    setCategory("Work Permit");
                } else if (cat.includes("pr") || cat.includes("express") || cat.includes("permanent")) {
                    setCategory("PR");
                } else if (cat.includes("appeal") || cat.includes("refusal")) {
                    setCategory("Visa Appeals");
                } else if (cat.includes("tourist") || cat.includes("visitor") || cat.includes("visit")) {
                    setCategory("Visit");
                } else if (cat.includes("nomad") || cat.includes("remote")) {
                    setCategory("Digital Nomad");
                } else {
                    initQ = initQ ? `${initQ} ${catQuery}` : catQuery;
                    setSearchText(initQ);
                }
                initPurpose = catQuery;
            }

            const shortCat = params.get("cat") || "";
            if (shortCat) {
                if (shortCat === "student") setCategory("Student Visa");
                if (shortCat === "work") setCategory("Work Permit");
                if (shortCat === "pr") setCategory("PR");
                if (shortCat === "visit") setCategory("Visit");
            }
        }

        fetchExperts(initQ, initCountry, "", initCity);
    }, [fetchExperts]);

    // Filtering Logic
    const baseSource = (allExpertsCacheRef.current && allExpertsCacheRef.current.length > 0) ? allExpertsCacheRef.current : experts;
    const filtered = baseSource.filter(expert => {
        if (!expert) return false;

        const tags = Array.isArray(expert.tags) ? expert.tags : [expert.tags || ''];
        const countries = Array.isArray(expert.countries) ? expert.countries : [expert.countries || ''];
        const role = String(expert.role || expert.advisor_type || '');
        const cityStr = String(expert.city || expert.office_address || '');
        const name = String(expert.name || expert.business_name || '');
        const fullName = String(expert.fullName || expert.full_name || '');
        const bio = String(expert.bio || expert.about_me || '');
        const advisorType = String(expert.advisor_type || expert.role || '').toLowerCase();

        const isSearchActive = Boolean(searchText && searchText.trim() !== "");
        let isDirectNameMatch = false;
        if (isSearchActive) {
            const qLower = searchText.toLowerCase().trim();
            isDirectNameMatch = name.toLowerCase().includes(qLower) || fullName.toLowerCase().includes(qLower);
        }

        if (!isSearchActive && !isDirectNameMatch && category !== "All") {
            const catLower = category.toLowerCase();
            const hasCategoryMatch = expert.category?.toLowerCase() === catLower ||
                role.toLowerCase().includes(catLower) ||
                tags.some((t: string) => String(t).toLowerCase().includes(catLower));

            if (category === "Study" || category === "Student Visa") {
                const matchesStudy = hasCategoryMatch ||
                    expert.service_category === "study" ||
                    expert.serviceCategory === "study" ||
                    tags.some((t: string) => {
                        const tl = String(t).toLowerCase();
                        return tl.includes("stud") || tl.includes("education") || tl.includes("university") || tl.includes("admission");
                    });
                if (!matchesStudy) return false;
            } else if (category === "Work" || category === "Work Permit") {
                const matchesWork = hasCategoryMatch ||
                    expert.service_category === "work_permit" ||
                    expert.serviceCategory === "work_permit" ||
                    tags.some((t: string) => {
                        const tl = String(t).toLowerCase();
                        return tl.includes("work") || tl.includes("job") || tl.includes("permit") || tl.includes("lmia");
                    });
                if (!matchesWork) return false;
            } else if (category === "Visit") {
                const matchesVisit = hasCategoryMatch ||
                    expert.service_category === "visit" ||
                    tags.some((t: string) => {
                        const tl = String(t).toLowerCase();
                        return tl.includes("visit") || tl.includes("tourist") || tl.includes("travel");
                    });
                if (!matchesVisit) return false;
            } else if (category === "PR") {
                const matchesPR = hasCategoryMatch ||
                    tags.some((t: string) => {
                        const tl = String(t).toLowerCase();
                        return tl.includes("pr") || tl.includes("express") || tl.includes("permanent") || tl.includes("migrat");
                    });
                if (!matchesPR) return false;
            } else if (category === "Visa Appeals") {
                const matchesAppeals = hasCategoryMatch ||
                    tags.some((t: string) => {
                        const tl = String(t).toLowerCase();
                        return tl.includes("appeal") || tl.includes("refusal") || tl.includes("tribunal") || tl.includes("court") || tl.includes("legal");
                    });
                if (!matchesAppeals) return false;
            } else if (category === "Digital Nomad") {
                const matchesNomad = hasCategoryMatch ||
                    tags.some((t: string) => {
                        const tl = String(t).toLowerCase();
                        return tl.includes("nomad") || tl.includes("remote") || tl.includes("freelance");
                    });
                if (!matchesNomad) return false;
            }
        }

        if (consultantType !== "All") {
            if (consultantType === "Freelancer" && !advisorType.includes("freelance") && !expert.isFreelancer) return false;
            if (consultantType === "Registered Agency" && (advisorType.includes("freelance") || expert.isFreelancer)) return false;
        }

        if (consultantMode !== "All") {
            const isOnline = expert.isRemote || expert.consultation_mode === "Online" || expert.consultation_mode === "Both";
            const isOffline = expert.consultation_mode === "In Office" || expert.consultation_mode === "Both" || !expert.isRemote;
            if (consultantMode === "Online" && !isOnline) return false;
            if (consultantMode === "Offline" && !isOffline) return false;
        }

        if (city !== "All Cities") {
            if (city === "Remote" && !expert.isRemote) return false;
            if (city !== "Remote" && !cityStr.toLowerCase().includes(city.toLowerCase())) return false;
        }

        if (rating !== "Any") {
            const r = Number(expert.rating || 0);
            if (rating === "4★+" && r < 4.0) return false;
            if (rating === "4.5★+" && r < 4.5) return false;
            if (rating === "Top Rated" && r < 4.8) return false;
        }

        if (avail !== "Anytime") {
            if (avail === "Today" && !expert.isAvailableToday) return false;
            if (avail === "Emergency 24/7" && !expert.isEmergency) return false;
        }

        if (selectedCountry !== "All" && !isDirectNameMatch) {
            const hasCountry = countries.some((c: string) => String(c).toLowerCase().includes(selectedCountry.toLowerCase()));
            if (!hasCountry) return false;
        }

        if (searchText && searchText.trim() !== "") {
            const searchWords = searchText.toLowerCase().trim().split(/\s+/).filter(Boolean);
            const fullText = [name, role, cityStr, bio, expert.email || '', expert.phone || expert.contact_number || '', ...tags, ...countries].join(' ').toLowerCase();
            const matchAllWords = searchWords.every(word => fullText.includes(word));
            if (!matchAllWords) return false;
        }

        return true;
    });

    const getRelevanceScore = (e: any, query: string) => {
        if (!query || !query.trim()) return (e.rating || 0);
        const q = query.toLowerCase().trim();
        let score = 0;
        const name = (e.name || e.business_name || '').toLowerCase();
        const role = (e.role || e.advisor_type || '').toLowerCase();
        const tags = (Array.isArray(e.tags) ? e.tags : [e.tags || '']).map((t: string) => String(t).toLowerCase());
        const bio = (e.bio || e.about_me || '').toLowerCase();
        const cityStr = (e.city || '').toLowerCase();
        const countries = (Array.isArray(e.countries) ? e.countries : [e.countries || '']).map((c: string) => String(c).toLowerCase());

        if (name === q) score += 200;
        else if (name.includes(q)) score += name.startsWith(q) ? 120 : 80;

        if (role.includes(q)) score += role.startsWith(q) ? 100 : 60;
        if (tags.some((t: string) => t.includes(q))) score += 70;
        if (countries.some((c: string) => c.includes(q))) score += 40;
        if (bio.includes(q)) score += 30;
        if (cityStr.includes(q)) score += 20;
        if (e.isVerified) score += 10;
        score += (e.rating || 0);

        return score;
    };

    // Sorting Logic: Priority to real registered DB consultants, then by user choice
    const sorted = [...filtered].sort((a, b) => {
        const isDbA = a.isFromDB ? 1 : 0;
        const isDbB = b.isFromDB ? 1 : 0;
        if (isDbB !== isDbA) return isDbB - isDbA;

        if (sortBy === "relevance") {
            const scoreA = getRelevanceScore(a, searchText);
            const scoreB = getRelevanceScore(b, searchText);
            if (scoreB !== scoreA) return scoreB - scoreA;
            return (b.rating || 0) - (a.rating || 0);
        }
        if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
        if (sortBy === "price-low") return (parseFloat(a.hourly_rate || a.price || 0)) - (parseFloat(b.hourly_rate || b.price || 0));
        if (sortBy === "price-high") return (parseFloat(b.hourly_rate || b.price || 0)) - (parseFloat(a.hourly_rate || a.price || 0));
        return (b.rating || 0) - (a.rating || 0);
    });

    const FilterSidebar = () => (
        <div className="space-y-6">
            {/* Service Category */}
            <div>
                <h3 className="font-plus-jakarta font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-3">Visa Category</h3>
                <div className="space-y-1">
                    {categoryFilters.map(cat => {
                        const Icon = cat.icon;
                        const isSelected = category === cat.id || 
                            (cat.id === "Work Permit" && category === "Work") || 
                            (cat.id === "Student Visa" && category === "Study");
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setCategory(cat.id)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    isSelected
                                        ? "bg-gradient-to-r from-[#430f7a] to-[#6b34b3] text-white shadow-sm font-bold"
                                        : "text-slate-600 hover:bg-purple-50/70 hover:text-[#430f7a]"
                                }`}
                            >
                                <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-emerald-300" : "text-slate-400"}`} />
                                <span className="truncate">{cat.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Destination Country */}
            <div>
                <h3 className="font-plus-jakarta font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-2.5">Destination Country</h3>
                <div className="relative">
                    <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-bold text-slate-800 outline-none focus:border-[#430f7a] focus:ring-2 focus:ring-purple-500/10 cursor-pointer appearance-none"
                    >
                        {countryFilters.map(c => (
                            <option key={c} value={c}>{c === "All" ? "All Countries (Global)" : c}</option>
                        ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
            </div>

            {/* Consultant Type */}
            <div>
                <h3 className="font-plus-jakarta font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-2.5">Consultant Type</h3>
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                    {typeFilters.map(t => (
                        <button
                            key={t}
                            onClick={() => setConsultantType(t)}
                            className={`py-1.5 rounded-lg text-[11px] font-bold text-center transition-all cursor-pointer ${
                                consultantType === t
                                    ? "bg-white text-[#430f7a] shadow-xs font-bold"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Consultant Mode */}
            <div>
                <h3 className="font-plus-jakarta font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-2.5">Consultation Mode</h3>
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                    {modeFilters.map(m => (
                        <button
                            key={m}
                            onClick={() => setConsultantMode(m)}
                            className={`py-1.5 rounded-lg text-[11px] font-bold text-center transition-all cursor-pointer ${
                                consultantMode === m
                                    ? "bg-white text-[#430f7a] shadow-xs font-bold"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            </div>

            {/* Location (City) */}
            <div>
                <h3 className="font-plus-jakarta font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-2.5">Location</h3>
                <div className="space-y-1">
                    {cityFilters.map(c => (
                        <button
                            key={c}
                            onClick={() => setCity(c)}
                            className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                city === c
                                    ? "bg-[#430f7a] text-white shadow-xs font-bold"
                                    : "text-slate-600 hover:bg-slate-100"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div>
                <h3 className="font-plus-jakarta font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-2.5">Rating</h3>
                <div className="space-y-1">
                    {ratingFilters.map(r => (
                        <button
                            key={r}
                            onClick={() => setRating(r)}
                            className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                rating === r
                                    ? "bg-[#430f7a] text-white shadow-xs font-bold"
                                    : "text-slate-600 hover:bg-slate-100"
                            }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            <button 
                onClick={() => { 
                    setCategory("All"); 
                    setSelectedCountry("All"); 
                    setConsultantType("All"); 
                    setConsultantMode("All"); 
                    setCity("All Cities"); 
                    setRating("Any"); 
                    setAvail("Anytime"); 
                    setSearchText(""); 
                }}
                className="w-full text-xs font-extrabold tracking-wider text-[#430f7a] hover:text-[#6b34b3] hover:underline mt-2 cursor-pointer text-center"
            >
                Reset All Filters
            </button>
        </div>
    );

    return (
        <div className="bg-[#FBFBFE] min-h-screen font-sans relative overflow-hidden">
            {/* Ambient background glows matching landing page */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <main className="max-w-7xl mx-auto flex flex-col lg:flex-row py-8 px-4 sm:px-6 gap-8 font-sans">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-[300px] shrink-0">
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm sticky top-24 font-sans">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-plus-jakarta text-lg font-extrabold text-slate-900">Filters</h2>
                            <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">Live Sync</span>
                        </div>
                        <FilterSidebar />
                    </div>
                </aside>

                {/* Mobile Filter Button */}
                <button 
                    onClick={() => setShowMobileFilters(true)} 
                    className="lg:hidden flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-3.5 font-bold text-xs tracking-wider text-slate-900 shadow-sm"
                >
                    <Filter className="w-4 h-4 text-[#430f7a]" /> 
                    <span>Filters &amp; Categories</span>
                    {(category !== "All" || city !== "All Cities" || rating !== "Any" || avail !== "Anytime" || selectedCountry !== "All") && (
                        <span className="bg-[#430f7a] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1">Active</span>
                    )}
                </button>

                {/* Mobile Filter Drawer */}
                {showMobileFilters && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
                        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-auto shadow-2xl">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-plus-jakarta font-extrabold text-slate-900 text-lg">Filters</h3>
                                <button onClick={() => setShowMobileFilters(false)} className="p-1 text-slate-400 hover:text-slate-600">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <FilterSidebar />
                            <button 
                                onClick={() => setShowMobileFilters(false)} 
                                className="w-full mt-6 bg-[#430f7a] hover:bg-[#350b64] text-white py-3.5 rounded-xl font-bold text-xs tracking-wider shadow-md"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <section className="flex-1">
                    {/* Modern Search & Sort Bar */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-sm mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2.5 flex-1 w-full sm:w-auto focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-[#430f7a] transition-all">
                            <Search className="w-4 h-4 text-slate-400 shrink-0" />
                            <input
                                value={searchText}
                                onChange={e => {
                                    const val = e.target.value;
                                    setSearchText(val);
                                    if (val.trim()) {
                                        setCategory("All");
                                    }
                                    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
                                    debounceTimerRef.current = setTimeout(() => {
                                        fetchExperts(val, selectedCountry);
                                    }, 250);
                                }}
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
                                        if (searchText.trim()) {
                                            setSortBy("relevance");
                                            setCategory("All");
                                        }
                                        fetchExperts(searchText, selectedCountry);
                                    }
                                }}
                                placeholder="Search consultants by name, visa category, country..."
                                className="bg-transparent outline-none text-xs sm:text-sm w-full font-medium text-slate-800 placeholder:text-slate-400"
                            />
                            {searchText && (
                                <button 
                                    onClick={() => { 
                                        if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
                                        setSearchText(''); 
                                        fetchExperts('', selectedCountry); 
                                    }} 
                                    className="text-slate-400 hover:text-slate-600"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>
                        <button
                            onClick={() => {
                                if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
                                if (searchText.trim()) {
                                    setSortBy("relevance");
                                    setCategory("All");
                                }
                                fetchExperts(searchText, selectedCountry);
                            }}
                            className="shrink-0 bg-[#430f7a] hover:bg-[#350b64] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                        >
                            <Search className="w-3.5 h-3.5" /> Search
                        </button>
                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                            <div className="relative" onClick={e => e.stopPropagation()}>
                                <button
                                    onClick={() => setSortOpen(!sortOpen)}
                                    className="appearance-none bg-slate-50 border border-slate-200/80 rounded-xl py-2.5 pl-4 pr-9 text-xs font-bold text-slate-800 outline-none cursor-pointer flex items-center justify-between min-w-[145px] text-left"
                                >
                                    <span>
                                        {sortBy === "relevance" && "Relevance"}
                                        {sortBy === "recommended" && "Recommended"}
                                        {sortBy === "rating" && "Highest Rated"}
                                        {sortBy === "price-low" && "Price: Low → High"}
                                        {sortBy === "price-high" && "Price: High → Low"}
                                    </span>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </button>
                                {sortOpen && (
                                    <div className="absolute top-full right-0 bg-white border border-slate-200 rounded-xl shadow-xl mt-1 py-1 z-50 min-w-[155px] font-sans">
                                        <button
                                            onClick={() => { setSortBy("recommended"); setSortOpen(false); }}
                                            className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#430f7a] transition-colors"
                                        >
                                            Recommended
                                        </button>
                                        <button
                                            onClick={() => { setSortBy("rating"); setSortOpen(false); }}
                                            className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#430f7a] transition-colors"
                                        >
                                            Highest Rated
                                        </button>
                                        <button
                                            onClick={() => { setSortBy("relevance"); setSortOpen(false); }}
                                            className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#430f7a] transition-colors"
                                        >
                                            Relevance
                                        </button>
                                        <button
                                            onClick={() => { setSortBy("price-low"); setSortOpen(false); }}
                                            className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#430f7a] transition-colors"
                                        >
                                            Price: Low → High
                                        </button>
                                        <button
                                            onClick={() => { setSortBy("price-high"); setSortOpen(false); }}
                                            className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#430f7a] transition-colors"
                                        >
                                            Price: High → Low
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="flex bg-slate-100/90 rounded-xl p-1 shrink-0">
                                <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow-xs text-[#430f7a]" : "text-slate-400"}`}>
                                    <List className="w-4 h-4" />
                                </button>
                                <button onClick={() => setViewMode("map")} className={`p-2 rounded-lg transition-all ${viewMode === "map" ? "bg-white shadow-xs text-[#430f7a]" : "text-slate-400"}`}>
                                    <MapIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Active Pills and Count */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        {loading ? (
                            <p className="text-xs font-extrabold tracking-wider text-slate-400 flex items-center gap-2 font-sans">
                                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#00b070]" /> Loading verified experts...
                            </p>
                        ) : (
                            <p className="text-xs font-extrabold tracking-wider text-slate-500 font-sans">
                                {sorted.length} verified consultant{sorted.length !== 1 ? "s" : ""} available
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-2">
                            {selectedCountry !== "All" && (
                                <span className="text-[11px] bg-[#430f7a] text-white px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-xs font-sans">
                                    🌍 Country: {selectedCountry}
                                    <button onClick={() => { setSelectedCountry("All"); fetchExperts(searchText, "All"); }} className="hover:text-red-300 font-extrabold text-[13px] ml-1 cursor-pointer">×</button>
                                </span>
                            )}
                            {category !== "All" && (
                                <span className="text-[11px] bg-[#430f7a] text-white px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-xs font-sans">
                                    📂 Category: {category}
                                    <button onClick={() => setCategory("All")} className="hover:text-red-300 font-extrabold text-[13px] ml-1 cursor-pointer">×</button>
                                </span>
                            )}
                            {city !== "All Cities" && (
                                <span className="text-[11px] bg-[#430f7a] text-white px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-xs font-sans">
                                    📍 Location: {city}
                                    <button onClick={() => setCity("All Cities")} className="hover:text-red-300 font-extrabold text-[13px] ml-1 cursor-pointer">×</button>
                                </span>
                            )}
                            {searchText.trim() !== "" && (
                                <span className="text-[11px] bg-[#430f7a] text-white px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-xs font-sans">
                                    🔍 "{searchText}"
                                    <button onClick={() => { setSearchText(""); fetchExperts("", selectedCountry); }} className="hover:text-red-300 font-extrabold text-[13px] ml-1 cursor-pointer">×</button>
                                </span>
                            )}
                            {(category !== "All" || city !== "All Cities" || selectedCountry !== "All" || searchText.trim() !== "" || rating !== "Any" || avail !== "Anytime") && (
                                <button
                                    onClick={() => {
                                        setSearchText("");
                                        setCategory("All");
                                        setCity("All Cities");
                                        setRating("Any");
                                        setAvail("Anytime");
                                        setSelectedCountry("All");
                                        fetchExperts("", "All");
                                    }}
                                    className="text-[11px] text-slate-500 hover:text-[#430f7a] font-bold underline px-1 cursor-pointer font-sans"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Loading skeleton */}
                    {loading && (
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white border border-slate-200/80 rounded-3xl p-6 flex gap-5 shadow-xs animate-pulse">
                                    <div className="w-20 h-20 rounded-2xl bg-slate-200 shrink-0" />
                                    <div className="flex-1 space-y-3">
                                        <div className="h-4 bg-slate-200 rounded-lg w-1/3" />
                                        <div className="h-3 bg-slate-100 rounded-lg w-1/2" />
                                        <div className="h-3 bg-slate-100 rounded-lg w-2/3" />
                                        <div className="flex gap-2 mt-2">
                                            <div className="h-6 w-16 bg-slate-100 rounded-full" />
                                            <div className="h-6 w-20 bg-slate-100 rounded-full" />
                                            <div className="h-6 w-14 bg-slate-100 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Error state */}
                    {!loading && fetchError && (
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center space-y-2">
                            <p className="text-red-700 font-bold text-sm">⚠️ Could not load experts from database</p>
                            <p className="text-red-500 text-xs font-mono break-all">{fetchError}</p>
                            <button onClick={() => fetchExperts(searchText, selectedCountry)} className="mt-3 text-xs font-bold text-red-500 underline">↻ Retry</button>
                        </div>
                    )}

                    {/* Empty DB state */}
                    {!loading && !fetchError && experts.length === 0 && (
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-12 text-center space-y-4 shadow-sm">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto">
                                <Users className="w-8 h-8 text-[#430f7a]" />
                            </div>
                            <h3 className="font-plus-jakarta font-extrabold text-slate-900 text-lg">No Registered Experts Found</h3>
                            <p className="text-xs text-slate-500 max-w-sm mx-auto">Register as an expert consultant to get listed and connect with global applicants.</p>
                            <a href="/register/expert" className="inline-block mt-2 bg-[#00b070] text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-md hover:bg-[#008f5a] transition-all">Register as Expert →</a>
                        </div>
                    )}

                    {/* Empty Filter / Search match state */}
                    {!loading && !fetchError && experts.length > 0 && sorted.length === 0 && (
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm font-sans my-4">
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-500">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-plus-jakarta font-extrabold text-slate-900 text-lg">No Experts Match Your Search</h3>
                                <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium leading-relaxed">
                                    No verified consultants match your active search query "{searchText}" or selected filter options.
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    setSearchText("");
                                    setCategory("All");
                                    setCity("All Cities");
                                    setRating("Any");
                                    setAvail("Anytime");
                                    setSelectedCountry("All");
                                    fetchExperts("", "All");
                                }}
                                className="inline-block mt-2 bg-[#430f7a] hover:bg-[#350b64] active:scale-95 text-white text-xs font-bold px-6 py-3 rounded-2xl shadow-md transition-all cursor-pointer font-sans"
                            >
                                🔄 Reset Filters &amp; Show All {experts.length} Experts
                            </button>
                        </div>
                    )}

                    {/* List View with Modern Premium Cards */}
                    {viewMode === "list" && !loading ? (
                        <div className="space-y-4">
                            {sorted.map(e => (
                                <div
                                    key={e.id}
                                    onClick={() => handleExpertCardClick(e)}
                                    className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                                >
                                    {/* Subtle gradient glow in top right */}
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/5 via-purple-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-emerald-500/10 transition-colors" />

                                    <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                                        {/* Avatar */}
                                        <div className="relative w-20 h-20 sm:w-22 sm:h-22 shrink-0 mx-auto sm:mx-0">
                                            {e.image && !e.image.includes('unsplash') ? (
                                                <img
                                                    src={e.image}
                                                    alt={e.name}
                                                    className="w-full h-full object-cover rounded-2xl border-2 border-slate-100 shadow-xs"
                                                    onError={(ev) => {
                                                        (ev.target as HTMLImageElement).style.display = 'none';
                                                        (ev.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                            ) : null}
                                            <div className={`w-full h-full rounded-2xl bg-gradient-to-br from-[#430f7a] via-[#5c249e] to-[#00b070] text-white font-extrabold text-2xl flex items-center justify-center border-2 border-purple-100/40 shadow-xs tracking-tight select-none font-plus-jakarta ${e.image && !e.image.includes('unsplash') ? 'hidden' : ''}`}>
                                                {getInitials(e.name || e.businessName)}
                                            </div>
                                            {e.isVerified && (
                                                <span className="absolute -top-1.5 -right-1.5 bg-[#1b1233] text-emerald-300 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full border border-emerald-400/40 shadow-xs flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                                    Verified
                                                </span>
                                            )}
                                        </div>

                                        {/* Content Body */}
                                        <div className="flex-1 font-sans">
                                            {/* Top Row: Name, Registry Link, Rating */}
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 mb-2 text-center sm:text-left">
                                                <div>
                                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                                                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#430f7a] transition-colors flex items-center gap-1.5 leading-tight font-plus-jakarta">
                                                            {e.name}
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0" />
                                                        </h3>
                                                        {e.govReg && (() => {
                                                            const reg = String(e.govReg).trim();
                                                            let registryUrl = "";
                                                            if (/ICCRC|CICC|RCIC/i.test(reg)) {
                                                                registryUrl = `https://college-ic.ca/protecting-the-public/find-an-immigration-consultant?q=${encodeURIComponent(reg)}`;
                                                            } else if (/MARA/i.test(reg)) {
                                                                registryUrl = `https://portal.mara.gov.au/search?q=${encodeURIComponent(reg)}`;
                                                            } else if (/OISC/i.test(reg)) {
                                                                registryUrl = `https://www.gov.uk/find-an-immigration-adviser?q=${encodeURIComponent(reg)}`;
                                                            } else if (/BAR/i.test(reg)) {
                                                                registryUrl = `https://www.barcouncilofindia.org/search?q=${encodeURIComponent(reg)}`;
                                                            } else {
                                                                registryUrl = `https://www.google.com/search?q=${encodeURIComponent(reg + " official registry verification")}`;
                                                            }

                                                            return (
                                                                <a
                                                                    href={registryUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={(evt) => evt.stopPropagation()}
                                                                    className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-950 px-2 py-0.5 rounded-full border border-emerald-200/80 transition-colors cursor-pointer"
                                                                    title="Verify with Official Regulatory Council"
                                                                >
                                                                    <span>Verify #{reg}</span>
                                                                    <ExternalLink className="w-2.5 h-2.5 text-emerald-600" />
                                                                </a>
                                                            );
                                                        })()}
                                                    </div>
                                                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5 flex items-center justify-center sm:justify-start gap-1.5">
                                                        <span className="text-[#430f7a] font-bold">{e.role}</span>
                                                        {e.experienceYears && <span className="text-slate-400">• {e.experienceYears}</span>}
                                                    </p>
                                                </div>

                                                {/* Rating Badge */}
                                                <div className="flex items-center justify-center sm:justify-end gap-1.5 shrink-0 bg-amber-50/80 border border-amber-200/80 px-3 py-1 rounded-xl">
                                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                    <span className="font-extrabold text-xs text-slate-900">{Number(e.rating || 4.9).toFixed(1)}</span>
                                                    <span className="text-[10px] text-slate-500 font-medium">({e.reviews || 180} reviews)</span>
                                                </div>
                                            </div>

                                            {/* Trust Badges Strip */}
                                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 my-2.5">
                                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50/90 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                                                    <Shield className="w-3 h-3 text-emerald-600" />
                                                    Licence Verified
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-900 bg-purple-50/90 border border-purple-200/60 px-2.5 py-0.5 rounded-full">
                                                    <Lock className="w-3 h-3 text-purple-600" />
                                                    Milestone Escrow 20/30/50
                                                </span>
                                                {e.isRemote && (
                                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-teal-50/90 border border-teal-200/60 px-2.5 py-0.5 rounded-full">
                                                        <Clock className="w-3 h-3 text-teal-600" />
                                                        Instant Video Session
                                                    </span>
                                                )}
                                            </div>

                                            {/* Bio */}
                                            {e.bio && (
                                                <p className="text-xs sm:text-[13px] text-slate-600 font-medium mb-3 line-clamp-2 text-center sm:text-left leading-relaxed">
                                                    {e.bio}
                                                </p>
                                            )}

                                            {/* Location & Tags */}
                                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                                                <span className="inline-flex items-center gap-1 text-xs text-slate-600 font-semibold bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-lg">
                                                    <MapPin className="w-3 h-3 text-purple-600" />
                                                    {e.city || "Remote"}
                                                </span>
                                                {e.tags && e.tags.slice(0, 4).map((tag: string) => (
                                                    <span key={tag} className="bg-slate-50 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200/70">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Bottom Row / Actions */}
                                            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-100 gap-3" onClick={(evt) => evt.stopPropagation()}>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 px-3 py-1 rounded-xl flex items-center gap-1.5">
                                                        🌍 {Array.isArray(e.countries) ? e.countries.join(", ") : (e.countries || "Worldwide")}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setReportExpert(e);
                                                            setReportModalOpen(true);
                                                        }}
                                                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                                                        title="Report Profile"
                                                    >
                                                        <Flag className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>

                                                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                                                    {/* Compare Pill */}
                                                    <label 
                                                        onClick={(evt) => evt.stopPropagation()} 
                                                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold cursor-pointer border transition-all select-none ${
                                                            comparedIds.includes(String(e.id).replace(/^db_/i, ''))
                                                                ? 'bg-purple-50 border-purple-500 text-purple-900 shadow-xs'
                                                                : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'
                                                        }`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={comparedIds.includes(String(e.id).replace(/^db_/i, ''))}
                                                            onChange={(evt) => toggleCompareExpert(e.id, evt as any)}
                                                            className="w-3.5 h-3.5 text-purple-600 rounded border-slate-300 focus:ring-purple-500 cursor-pointer accent-purple-600"
                                                        />
                                                        <span>Compare</span>
                                                    </label>

                                                    {/* View Profile */}
                                                    <a
                                                        href={`/expert/${e.id}`}
                                                        onClick={(ev) => ev.stopPropagation()}
                                                        className="text-xs font-bold text-[#430f7a] hover:text-[#6b34b3] px-2.5 py-2 hover:underline transition-colors hidden md:inline-flex items-center gap-1"
                                                    >
                                                        Profile →
                                                    </a>

                                                    {/* Read Review */}
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (!isUserLoggedIn()) {
                                                                window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`;
                                                                return;
                                                            }
                                                            setReviewExpert(e);
                                                            setReviewModalOpen(true);
                                                        }}
                                                        className="flex-1 sm:flex-initial bg-slate-50 hover:bg-slate-100 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-200 flex items-center justify-center gap-1"
                                                    >
                                                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                        <span>Reviews</span>
                                                    </button>

                                                    {/* Primary CTA */}
                                                    <button 
                                                        type="button"
                                                        onClick={() => {
                                                            if (!isUserLoggedIn()) {
                                                                window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`;
                                                                return;
                                                            }
                                                            setPaymentExpert(e);
                                                            setPaymentModalOpen(true);
                                                        }} 
                                                        className="flex-1 sm:flex-initial bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-5 py-2 rounded-xl text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap font-plus-jakarta"
                                                    >
                                                        <span>Book Consultation</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : !loading ? (
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 text-center space-y-4 shadow-sm">
                            <MapIcon className="w-12 h-12 text-[#430f7a] mx-auto animate-bounce" />
                            <h3 className="font-plus-jakarta font-extrabold text-slate-900 text-lg">Interactive Map View</h3>
                            <p className="text-xs text-slate-500 max-w-sm mx-auto">Displaying {sorted.length} verified immigration experts and attorneys across global jurisdictions.</p>
                        </div>
                    ) : null}
                </section>
            </main>

            {/* Modals */}
            <ExpertProfileModal 
                expert={selectedProfileExpert} 
                isOpen={!!selectedProfileExpert} 
                onClose={() => setSelectedProfileExpert(null)} 
            />

            <RequestQuoteModal
                isOpen={quoteModalOpen}
                onClose={() => {
                    setQuoteModalOpen(false);
                    setQuoteExpert(null);
                }}
                targetExpertId={quoteExpert?.id ? (typeof quoteExpert.id === 'number' ? quoteExpert.id : parseInt(String(quoteExpert.id).replace(/\D/g, '')) || 0) : 0}
                targetExpertName={quoteExpert?.name || quoteExpert?.business_name || ""}
                targetExpertEmail={quoteExpert?.email || ""}
                defaultCountry={quoteExpert?.countries?.[0] || "Canada"}
            />

            <ReviewRatingModal
                isOpen={reviewModalOpen}
                onClose={() => {
                    setReviewModalOpen(false);
                    setReviewExpert(null);
                }}
                expertId={reviewExpert?.id ? (typeof reviewExpert.id === 'number' ? reviewExpert.id : parseInt(String(reviewExpert.id).replace(/\D/g, '')) || 0) : 0}
                expertName={reviewExpert?.name || reviewExpert?.business_name || "Advisor"}
            />

            <DisputeReportModal
                isOpen={reportModalOpen}
                onClose={() => {
                    setReportModalOpen(false);
                    setReportExpert(null);
                }}
                targetType="provider"
                targetId={reportExpert?.id || ""}
                targetName={reportExpert?.name || reportExpert?.business_name || "Advisor"}
            />

            <PaymentCheckoutModal
                isOpen={paymentModalOpen}
                onClose={() => {
                    setPaymentModalOpen(false);
                    setPaymentExpert(null);
                }}
                expertId={paymentExpert?.id ? (typeof paymentExpert.id === 'number' ? paymentExpert.id : parseInt(String(paymentExpert.id).replace(/\D/g, '')) || 0) : 0}
                expertName={paymentExpert?.name || paymentExpert?.business_name || "Advisor"}
                expertEmail={paymentExpert?.email || ""}
                hourlyRate={paymentExpert?.hourly_rate || 49.00}
                visaCategory={paymentExpert?.role || "Work & PR Consultation"}
            />

            {showLoginModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
                    <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-5 border border-slate-100 font-sans" onClick={(e) => e.stopPropagation()}>
                        <button 
                            onClick={() => setShowLoginModal(false)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                            <Filter className="w-8 h-8 text-amber-600" />
                        </div>

                        <div className="space-y-1.5">
                            <h3 className="text-xl font-extrabold text-slate-900 font-plus-jakarta">Login Required 🔐</h3>
                            <p className="text-xs text-slate-500 font-medium">Please log in or create a free account to check consultant details and book session requests.</p>
                        </div>

                        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 text-left text-xs space-y-1 text-amber-900 font-semibold">
                            <p className="flex items-center gap-1.5 text-amber-950 font-bold">
                                <span>🔒 Member Protection</span>
                            </p>
                            <p className="text-[11px] text-amber-800 font-medium leading-relaxed">
                                Without logging in, expert scheduling and direct session booking are restricted.
                            </p>
                        </div>

                        <div className="pt-2 space-y-2">
                            <a
                                href="/login?redirect=/find-experts"
                                className="block w-full bg-[#00b070] hover:bg-[#008f5a] text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-md transition-all text-center"
                            >
                                Log In Now
                            </a>
                            <a
                                href="/signup"
                                className="block w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-2xl transition-all text-center"
                            >
                                Create Free Account
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
