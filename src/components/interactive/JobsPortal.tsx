import { useState, useEffect } from "react";
import {
  Briefcase, MapPin, Clock, Search, Filter, CheckCircle, Globe,
  ArrowRight, Shield, Plane, Star, BadgeCheck, DollarSign,
  Building2, Users, Zap, Code2, Stethoscope, HardHat,
  ChefHat, GraduationCap, Bookmark, BookmarkPlus,
  AlertCircle, AlertTriangle, CheckCircle2, Lock, X, Mail, Phone, User, Loader2,
} from "lucide-react";

const initialJobs = [
  {
    id: "const-1",
    title: "Construction Crew Recruitment",
    company: "Maldives Agency Channel",
    location: "Greece 🇬🇷",
    country: "Greece",
    countryCode: "gr",
    category: "Engineering",
    salary: "EUR €2,200–€2,800",
    salaryNote: "per month",
    posted: "Urgent",
    type: "Contract (30 slots)",
    sponsorship: true,
    relocation: true,
    featured: true,
    urgent: true,
    logo: "/images/construction_worker.jpg",
    heroImg: "/images/job_construction_greece.png",
    tags: ["Verified Contract", "Accommodations Provided", "Maldives Channel"],
    desc: "Urgent hiring of 30 construction crew workers for multiple major sites in Athens & Corfu, Greece. Verified employment contracts with accommodation fully provided.",
    icon: HardHat,
    iconColor: "from-amber-500 to-orange-600",
  },
  {
    id: "1",
    title: "Senior Full Stack Engineer",
    company: "Tech Innovations Inc.",
    location: "Toronto, Canada",
    country: "Canada",
    countryCode: "ca",
    category: "IT & Tech",
    salary: "CAD $95K–$120K",
    salaryNote: "per year",
    posted: "2h ago",
    type: "Full-Time",
    sponsorship: true,
    relocation: false,
    featured: true,
    urgent: true,
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=120&h=120&fit=crop",
    heroImg: "/images/job_tech_engineer.png",
    tags: ["React", "Node.js", "AWS", "LMIA"],
    desc: "Looking for an experienced Full Stack Engineer. LMIA sponsorship available for the right candidate.",
    icon: Code2,
    iconColor: "from-violet-500 to-indigo-600",
  },
  {
    id: "2",
    title: "Registered Nurse — ICU Specialist",
    company: "Royal Dubai Hospital",
    location: "Dubai, UAE",
    country: "UAE",
    countryCode: "ae",
    category: "Healthcare",
    salary: "AED 12K–18K",
    salaryNote: "per month",
    posted: "5h ago",
    type: "Full-Time",
    sponsorship: true,
    relocation: true,
    featured: false,
    urgent: false,
    logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=120&h=120&fit=crop",
    heroImg: "/images/job_nurse_dubai.png",
    tags: ["ICU", "DHA License", "Tax-Free", "Relocation"],
    desc: "Hiring ICU nurses for luxury hospital in Dubai. UAE employment visa provided. Tax-free salary with premium accommodation.",
    icon: Stethoscope,
    iconColor: "from-rose-500 to-pink-600",
  },

  {
    id: "4",
    title: "Executive Chef — Fine Dining",
    company: "The Ritz London",
    location: "London, UK",
    country: "UK",
    countryCode: "gb",
    category: "Hospitality",
    salary: "GBP £55K–£75K",
    salaryNote: "per year",
    posted: "3h ago",
    type: "Full-Time",
    sponsorship: true,
    relocation: false,
    featured: true,
    urgent: false,
    logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=120&h=120&fit=crop",
    heroImg: "/images/job_chef_london.png",
    tags: ["Fine Dining", "Skilled Worker Visa", "Tier 2"],
    desc: "Prestigious fine-dining establishment seeks experienced executive chef. Full UK Skilled Worker visa sponsorship.",
    icon: ChefHat,
    iconColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "5",
    title: "Data Scientist — AI Division",
    company: "DataViz GmbH",
    location: "Berlin, Germany",
    country: "Germany",
    countryCode: "de",
    category: "IT & Tech",
    salary: "€70K–€95K",
    salaryNote: "per year",
    posted: "6h ago",
    type: "Full-Time",
    sponsorship: true,
    relocation: true,
    featured: false,
    urgent: true,
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=120&fit=crop",
    heroImg: "/images/job_data_scientist_berlin.png",
    tags: ["Python", "ML/AI", "EU Blue Card", "Relocation"],
    desc: "Join our AI research division in Berlin. EU Blue Card sponsorship, flexible hours, and relocation package included.",
    icon: Code2,
    iconColor: "from-amber-500 to-blue-600",
  },
  {
    id: "6",
    title: "University Lecturer — Business",
    company: "Auckland University",
    location: "Auckland, New Zealand",
    country: "New Zealand",
    countryCode: "nz",
    category: "Education",
    salary: "NZD $80K–$110K",
    salaryNote: "per year",
    posted: "2d ago",
    type: "Full-Time",
    sponsorship: true,
    relocation: true,
    featured: false,
    urgent: false,
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=120&fit=crop",
    heroImg: "/images/job_university_lecturer_auckland.png",
    tags: ["MBA", "PhD", "Work Visa NZ", "Relocation"],
    desc: "Auckland University seeks Business faculty. Employer-sponsored work visa, family visa included, accommodation support.",
    icon: GraduationCap,
    iconColor: "from-purple-500 to-violet-600",
  },
];

const countryCards = [
  { name: "Canada",       code: "ca", jobs: "1,240 jobs", img: "/images/dest_canada_cold.png" },
  { name: "Dubai, UAE",   code: "ae", jobs: "980 jobs",   img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=300&fit=crop&q=90" },
  { name: "UK",           code: "gb", jobs: "720 jobs",   img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=300&fit=crop&q=90" },
  { name: "Australia",    code: "au", jobs: "640 jobs",   img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&h=300&fit=crop&q=90" },
  { name: "Germany",      code: "de", jobs: "380 jobs",   img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=300&fit=crop&q=90" },
];

const categoriesList = ["All Categories", "IT & Tech", "Healthcare", "Engineering", "Hospitality", "Education"];
const countriesList   = ["All Countries", "Canada", "UAE", "UK", "Australia", "Germany", "New Zealand", "Greece", "USA", "Ireland", "Singapore"];

function JobCompanyLogo({
  src,
  alt,
  companyName,
  className = "w-12 h-12 rounded-xl object-contain p-1 border border-slate-100 shrink-0 shadow-sm bg-white",
  fallbackSize = "w-12 h-12",
  icon: FallbackIcon,
  iconColor,
}: {
  src?: string;
  alt?: string;
  companyName?: string;
  className?: string;
  fallbackSize?: string;
  icon?: any;
  iconColor?: string;
}) {
  const [hasError, setHasError] = useState(false);

  // If there's an image src and it hasn't failed to load
  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={alt || companyName || "logo"}
        className={className}
        onError={() => setHasError(true)}
      />
    );
  }

  // Fallback: If custom icon was defined
  if (FallbackIcon) {
    return (
      <div className={`${fallbackSize} rounded-xl bg-gradient-to-br ${iconColor || 'from-emerald-500 to-teal-600'} flex items-center justify-center shrink-0 shadow-md`}>
        <FallbackIcon className="w-5 h-5 text-white" />
      </div>
    );
  }

  // Fallback: Elegant initials avatar
  const initials = (companyName || "SP")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() || "SP";

  return (
    <div
      className={`${fallbackSize} rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md border border-emerald-500/30 uppercase tracking-tight`}
      title={companyName}
    >
      {initials}
    </div>
  );
}

export function JobsPortal() {
  const [jobs, setJobs]                   = useState(initialJobs);
  const [allLoadedJobs, setAllLoadedJobs] = useState(initialJobs);
  const [saved, setSaved]                 = useState<string[]>([]);
  const [searchQuery, setSearchQuery]     = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeChip, setActiveChip]       = useState("All Jobs");
  const [activeJob, setActiveJob]         = useState<any>(null);
  const [sponsorOnly, setSponsorOnly]     = useState(false);
  const [relocationOnly, setRelocationOnly] = useState(false);
  const [toastMsg, setToastMsg]           = useState("");
  const [toastOn, setToastOn]             = useState(false);

  // Application Modal States
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyStep, setApplyStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authErrorModal, setAuthErrorModal] = useState<"none" | "expert" | "unauthenticated">("none");

  // Traveller Details Form State
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantLocation, setApplicantLocation] = useState("");
  const [applicantMessage, setApplicantMessage] = useState("");
  const [formErrors, setFormErrors] = useState<{ email?: string; phone?: string; location?: string }>({});

  const showToast = (msg: string) => {
    setToastMsg(msg); setToastOn(true);
    setTimeout(() => setToastOn(false), 2500);
  };

  const handleInitiateApplication = (jobToApply?: any) => {
    const targetJob = jobToApply || activeJob;
    if (!targetJob) return;

    if (jobToApply && !activeJob) {
      setActiveJob(jobToApply);
    }

    // Check if expert/service provider
    const isExpert =
      localStorage.getItem('expert_isLoggedIn') === 'true' ||
      Boolean(localStorage.getItem('expert_businessName')) ||
      Boolean(localStorage.getItem('expert_email')) ||
      localStorage.getItem('user_role') === 'expert';

    if (isExpert) {
      setAuthErrorModal("expert");
      return;
    }

    // Check if logged in as traveller
    const seekerEmail = localStorage.getItem('seeker_email') || localStorage.getItem('user_email');
    let travltikUser: any = null;
    try {
      const raw = localStorage.getItem('travltik_user') || localStorage.getItem('auth_user');
      if (raw) travltikUser = JSON.parse(raw);
    } catch (e) {}

    const hasTravellerAuth =
      Boolean(seekerEmail) ||
      Boolean(localStorage.getItem('seeker_name')) ||
      Boolean(localStorage.getItem('user_token')) ||
      Boolean(localStorage.getItem('auth_token')) ||
      Boolean(travltikUser?.email) ||
      localStorage.getItem('user_role') === 'seeker' ||
      localStorage.getItem('user_role') === 'traveller';

    if (!hasTravellerAuth) {
      setAuthErrorModal("unauthenticated");
      return;
    }

    // Prefill details if known
    const prefillEmail = seekerEmail || travltikUser?.email || applicantEmail || "";
    const prefillName = localStorage.getItem('seeker_name') || localStorage.getItem('seeker_firstName') || travltikUser?.name || applicantName || "";
    const prefillPhone = localStorage.getItem('seeker_phone') || travltikUser?.phone || applicantPhone || "";
    const prefillLocation = localStorage.getItem('seeker_location') || localStorage.getItem('seeker_city') || travltikUser?.location || applicantLocation || "";

    setApplicantEmail(prefillEmail);
    setApplicantName(prefillName);
    setApplicantPhone(prefillPhone);
    setApplicantLocation(prefillLocation);
    setFormErrors({});
    setApplyStep("form");
    setIsApplyModalOpen(true);
  };

  const handleConfirmApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; phone?: string; location?: string } = {};

    if (!applicantEmail.trim() || !applicantEmail.includes("@")) {
      errors.email = "Please enter a valid email address";
    }
    if (!applicantPhone.trim() || applicantPhone.trim().length < 6) {
      errors.phone = "Please enter a valid phone number with country code";
    }
    if (!applicantLocation.trim() || applicantLocation.trim().length < 2) {
      errors.location = "Please enter your current city and country";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save details to localStorage for future use
      localStorage.setItem('seeker_email', applicantEmail.trim());
      localStorage.setItem('seeker_phone', applicantPhone.trim());
      localStorage.setItem('seeker_location', applicantLocation.trim());
      if (applicantName.trim()) {
        localStorage.setItem('seeker_name', applicantName.trim());
      }

      // Record job application in travltik_job_applications
      const currentJob = activeJob;
      const newApp = {
        id: `app_${Date.now()}`,
        jobId: currentJob?.id || 'job_generic',
        jobTitle: currentJob?.title || 'Work Permit Position',
        company: currentJob?.company || 'Immigration Partner',
        location: currentJob?.location || '',
        country: currentJob?.country || '',
        salary: currentJob?.salary || '',
        applicant: {
          name: applicantName.trim() || 'Traveller Candidate',
          email: applicantEmail.trim(),
          phone: applicantPhone.trim(),
          location: applicantLocation.trim(),
          message: applicantMessage.trim(),
        },
        appliedAt: new Date().toISOString(),
        status: 'Submitted',
      };

      let prevApps: any[] = [];
      try {
        prevApps = JSON.parse(localStorage.getItem('travltik_job_applications') || '[]');
      } catch (e) {}
      localStorage.setItem('travltik_job_applications', JSON.stringify([newApp, ...prevApps]));

      // Also record in active_visa_cases for Traveller Dashboard integration
      const newCase = {
        id: `visa_case_${Date.now()}`,
        customName: `${currentJob?.title || 'Job'} (${currentJob?.country || 'Work Permit'})`,
        title: `${currentJob?.title || 'Job'} (${currentJob?.country || 'Work Permit'})`,
        trackingId: `TRK-JOB-${Math.floor(100000 + Math.random() * 900000)}`,
        destination: currentJob?.country || 'International',
        destinationFlag: currentJob?.countryCode || '🌐',
        visaType: 'Work Permit & Employment',
        purpose: 'work',
        passport: 'Standard Passport',
        status: 'Application Under Review',
        stage: 'Work Permit Verification & Review',
        progress: 25,
        documentsCount: 1,
        addonsCount: 0,
        submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        targetDate: 'Employer Interview & Sponsorship',
        createdAt: new Date().toISOString(),
      };

      let prevCases: any[] = [];
      try {
        prevCases = JSON.parse(localStorage.getItem('active_visa_cases') || '[]');
      } catch (e) {}
      localStorage.setItem('active_visa_cases', JSON.stringify([newCase, ...prevCases]));

      setApplyStep("success");
      showToast("🎉 Application submitted successfully!");

      setTimeout(() => {
        window.location.href = '/traveller/dashboard';
      }, 1600);
    } catch (err) {
      console.error("Error submitting job application:", err);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    let combined = [...initialJobs];
    try {
      const raw = localStorage.getItem("travltik_published_jobs") || localStorage.getItem("travltik_published_offers");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const currentExpertPhoto =
            localStorage.getItem("expert_profilePhoto") ||
            localStorage.getItem("expert_profilePhotoUrl") ||
            localStorage.getItem("expert_logo") ||
            localStorage.getItem("expert_avatar") ||
            (() => {
              try {
                const u = JSON.parse(localStorage.getItem("travltik_user") || "{}");
                return u.photoURL || u.profile_photo || "";
              } catch(e) { return ""; }
            })();

          const currentExpertName = localStorage.getItem("expert_businessName") || localStorage.getItem("expert_name") || "";

          const formatted = parsed.map((p: any) => {
            const resolvedLogo =
              (currentExpertPhoto && (!p.logo || p.logo === "/images/construction_worker.jpg" || (currentExpertName && p.company === currentExpertName)))
                ? currentExpertPhoto
                : (p.logo || currentExpertPhoto || "");

            return {
              ...p,
              logo: resolvedLogo,
              icon: HardHat,
              iconColor: "from-blue-600 to-indigo-600",
              sponsorship: true,
              featured: true,
              urgent: p.urgent !== undefined ? p.urgent : true,
            };
          });
          combined = [...formatted, ...initialJobs];
        }
      }
    } catch (e) {
      console.warn("Could not load published jobs:", e);
    }
    setAllLoadedJobs(combined);
    setJobs(combined);

    const params = new URLSearchParams(window.location.search);
    const qParam = params.get("q") || params.get("query") || params.get("role") || "";
    const countryParam = params.get("country") || "";
    const categoryParam = params.get("category") || "";

    let qVal = qParam;
    let countryVal = "All Countries";
    let categoryVal = "All Categories";

    if (countryParam && countryParam !== "All Countries" && countryParam !== "Select Country") {
      const cLower = countryParam.toLowerCase();
      const match = countriesList.find(c => {
        const cl = c.toLowerCase();
        return cl === cLower ||
          (cLower.includes("uk") && cl === "UK") ||
          (cLower.includes("united kingdom") && cl === "UK") ||
          (cLower.includes("uae") && cl === "UAE") ||
          (cLower.includes("dubai") && cl === "UAE") ||
          (cLower.includes("united states") && cl === "USA") ||
          (cLower.includes("usa") && cl === "USA") ||
          (cLower.includes("canada") && cl === "Canada") ||
          (cLower.includes("germany") && cl === "Germany") ||
          (cLower.includes("australia") && cl === "Australia") ||
          (cLower.includes("new zealand") && cl === "New Zealand") ||
          (cLower.includes("greece") && cl === "Greece");
      });
      countryVal = match || countryParam;
    }

    if (categoryParam && categoryParam !== "All Categories" && categoryParam !== "Select Category" && categoryParam !== "Select Sector / Field") {
      const catLower = categoryParam.toLowerCase();
      const match = categoriesList.find(c => {
        const cl = c.toLowerCase();
        return cl === catLower ||
          (cl.includes("tech") && catLower.includes("tech")) ||
          (cl.includes("health") && catLower.includes("health")) ||
          (cl.includes("engineering") && catLower.includes("engineering")) ||
          (cl.includes("hospitality") && catLower.includes("hospitality")) ||
          (cl.includes("education") && catLower.includes("education"));
      });
      categoryVal = match || categoryParam;
    }

    if (qVal) setSearchQuery(qVal);
    if (countryVal !== "All Countries") setSelectedCountry(countryVal);
    if (categoryVal !== "All Categories") setSelectedCategory(categoryVal);

    // Filter jobs immediately
    let f = combined;
    if (qVal) {
      const qLower = qVal.toLowerCase();
      f = f.filter(j =>
        j.title.toLowerCase().includes(qLower) ||
        j.company.toLowerCase().includes(qLower) ||
        j.location.toLowerCase().includes(qLower) ||
        (j.tags && j.tags.some((t: string) => t.toLowerCase().includes(qLower)))
      );
    }
    if (countryVal !== "All Countries") {
      const cLower = countryVal.toLowerCase();
      f = f.filter(j => j.country.toLowerCase().includes(cLower) || j.location.toLowerCase().includes(cLower));
    }
    if (categoryVal !== "All Categories") {
      const catLower = categoryVal.toLowerCase();
      f = f.filter(j => j.category.toLowerCase().includes(catLower));
    }
    setJobs(f);
    if (qVal || countryVal !== "All Countries" || categoryVal !== "All Categories") {
      showToast(`${f.length} jobs found`);
    }
  }, []);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    showToast(saved.includes(id) ? "Removed from saved" : "Saved to bookmarks!");
  };

  const applyFilters = () => {
    let f = allLoadedJobs;
    if (searchQuery) f = f.filter(j =>
      j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (j.tags && j.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
    );
    if (selectedCountry !== "All Countries") {
      const cLower = selectedCountry.toLowerCase();
      f = f.filter(j => j.country.toLowerCase().includes(cLower) || j.location.toLowerCase().includes(cLower));
    }
    if (selectedCategory !== "All Categories") {
      const catLower = selectedCategory.toLowerCase();
      f = f.filter(j => j.category.toLowerCase().includes(catLower));
    }
    if (sponsorOnly) f = f.filter(j => j.sponsorship);
    if (relocationOnly) f = f.filter(j => j.relocation);
    setJobs(f);
    showToast(`${f.length} jobs found`);
  };

  const clearFilters = () => {
    setSearchQuery(""); setSelectedCountry("All Countries");
    setSelectedCategory("All Categories"); setActiveChip("All Jobs");
    setSponsorOnly(false); setRelocationOnly(false);
    setJobs(allLoadedJobs); showToast("Filters cleared");
  };

  const filterByChip = (chip: string) => {
    setActiveChip(chip);
    if (chip === "All Jobs") { setJobs(allLoadedJobs); return; }
    const map: Record<string,string> = {
      "IT & Tech": "IT & Tech", "Healthcare": "Healthcare",
      "Engineering": "Engineering", "Hospitality": "Hospitality",
      "Education": "Education",
    };
    const cat = map[chip];
    setJobs(cat ? allLoadedJobs.filter(j => j.category === cat) : allLoadedJobs.filter(j => j.posted.includes("h") || j.posted.includes("Just now")));
  };

  const filterByCountry = (displayName: string) => {
    const countryMap: Record<string,string> = { "Dubai, UAE": "UAE" };
    const mapped = countryMap[displayName] || displayName;
    setJobs(allLoadedJobs.filter(j => j.country === mapped || j.location.includes(mapped)));
    showToast(`Jobs in ${displayName}`);
  };

  return (
    <div className="bg-white min-h-screen text-[#1a3347] font-sans relative pb-16">
      {/* TOAST */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0c1a2e] text-white px-6 py-3 rounded-full text-xs font-bold z-[999] shadow-xl transition-all duration-300 ${toastOn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        {toastMsg}
      </div>

      {/* JOB DETAIL VIEW */}
      {activeJob ? (
        <div className="max-w-4xl mx-auto px-6 py-10">
          <button
            onClick={() => { setActiveJob(null); window.scrollTo(0, 0); }}
            className="text-xs font-bold text-black hover:underline mb-6 flex items-center gap-1.5 outline-none"
          >
            ← Back to Jobs
          </button>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden h-52 mb-6 border border-red-100 shadow-sm">
            <img src={activeJob.heroImg} alt={activeJob.location} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/70 to-transparent"></div>
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <img src={`https://flagcdn.com/w40/${activeJob.countryCode}.png`} alt="flag" className="h-5 rounded shadow" />
              <span className="text-white font-bold text-sm flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-200" /> {activeJob.location}
              </span>
            </div>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <JobCompanyLogo
                src={activeJob.logo}
                alt={activeJob.company}
                companyName={activeJob.company}
                className="w-16 h-16 rounded-2xl object-cover border border-red-100 bg-white shrink-0 shadow-sm"
                fallbackSize="w-16 h-16"
                icon={activeJob.icon}
                iconColor={activeJob.iconColor}
              />
              <div>
                <h2 className="font-sans text-2xl font-extrabold text-[#0c1a2e] mb-1.5">{activeJob.title}</h2>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[#475569]">
                  <span className="font-bold text-[#0c1a2e]">{activeJob.company}</span>
                  <BadgeCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 font-bold text-xs">Verified</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#ef4444]" />{activeJob.type}</span>
                </div>
              </div>
            </div>

            {/* Key info pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Salary", value: activeJob.salary, sub: activeJob.salaryNote },
                { label: "Posted", value: activeJob.posted, sub: "ago" },
                { label: "Visa", value: "Sponsored", sub: "Work permit" },
                { label: "Relocation", value: activeJob.relocation ? "Included" : "Not offered", sub: "" },
              ].map(item => (
                <div key={item.label} className="bg-red-50/30 border border-red-100 rounded-2xl p-3.5 text-center">
                  <div className="text-[10px] text-[#94b0c4] font-medium tracking-normal mb-1">{item.label}</div>
                  <div className="font-sans font-extrabold text-sm text-[#0c1a2e]">{item.value}</div>
                  {item.sub && <div className="text-[10px] text-gray-400 font-semibold">{item.sub}</div>}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {activeJob.tags.map((t: string) => (
                <span key={t} className="bg-red-50 text-red-600 border border-red-100 px-3 py-1 rounded-lg text-[10px] font-medium tracking-normal">{t}</span>
              ))}
              {activeJob.sponsorship && <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-lg text-[10px] font-medium tracking-normal flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" />Visa Sponsored</span>}
              {activeJob.relocation && <span className="bg-violet-50 text-violet-700 border border-violet-200 px-3 py-1 rounded-lg text-[10px] font-medium tracking-normal flex items-center gap-1"><Plane className="w-3.5 h-3.5" />Relocation</span>}
            </div>

            {/* Description */}
            <div className="border-t border-red-100 py-5">
              <h3 className="text-xs font-extrabold text-navy tracking-wider mb-2">Job Description</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {activeJob.desc} We are hiring premium international candidates for this role. Direct visa filing, relocation credits, and official employer sponsorships will be arranged by our expert immigration panel.
              </p>
            </div>

            {/* Custom Process Steps & Payment Milestones */}
            {activeJob.processSteps && activeJob.processSteps.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
                <h4 className="text-xs font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-blue-600" /> Work Permit Process Steps & Payment Milestones
                </h4>
                <div className="space-y-2.5">
                  {activeJob.processSteps.map((step: any) => (
                    <div key={step.id || step.number} className="bg-white border border-slate-200/90 rounded-xl p-3.5 flex items-start justify-between gap-3 text-xs shadow-2xs">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          {step.number}
                        </span>
                        <div>
                          <p className="font-bold text-slate-800">{step.title}</p>
                          {step.description && <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{step.description}</p>}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-extrabold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md inline-block">
                          ⏱ {step.estimatedTime}
                        </span>
                        {step.milestone && step.milestone !== 'None' && (
                          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md block mt-1">
                            💰 {step.milestone}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visa Package */}
            <div className="bg-red-50/30 border border-red-100 rounded-2xl p-5 mb-6">
              <h4 className="text-xs font-bold text-navy flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-black" /> Visa & Relocation Package Included
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                This employer provides full support — LMIA (Canada), DHA (UAE), TSS 482 (Australia), or EU Blue Card (Germany). Consult our experts to fast-track your onboarding.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-red-100">
              <button
                onClick={() => handleInitiateApplication(activeJob)}
                className="bg-black hover:bg-neutral-900 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-2 outline-none"
              >
                Submit Application <ArrowRight className="w-4 h-4" />
              </button>
              <a href="/find-experts?category=work" className="block">
                <button className="bg-white border-2 border-gray-200 text-black font-bold text-sm px-5 py-3.5 rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2 outline-none">
                  <Shield className="w-4 h-4" /> Consult Immigration Expert
                </button>
              </a>
            </div>
          </div>
        </div>

      ) : (
        /* MAIN LISTING VIEW */
        <div>
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-10">
          {/* Main Twilight Jobs Banner Container */}
          <div 
              className="relative w-full rounded-[40px] overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 min-h-[540px] md:min-h-[600px] shadow-2xl border border-white/10"
              style={{ background: '#0C1A2E' }}
          >
              {/* Background Image with Crisp Contrast & Clean Shading */}
              <div className="absolute inset-0 z-0">
                  <img 
                      src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&auto=format&fit=crop&q=95" 
                      alt="City skyline" 
                      className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
                  />
                  {/* A soft transparent overlay for text readability without extra shading */}
                  <div 
                      className="absolute inset-0 bg-black/35"
                  />
              </div>

              {/* Banner Content */}
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                  
                  {/* Active listings pill */}
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-xs font-bold text-white/80 mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    4,200+ Active Listings · Work Visa Included · 40+ Countries
                  </div>

                  {/* Main Serif Header */}
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight tracking-wide mb-2 drop-shadow-md">
                      Find Your Dream Overseas Job.
                  </h1>



                  {/* 3-Column Metadata Row */}
                  <div className="grid grid-cols-3 gap-8 md:gap-16 text-center mb-10 w-full max-w-lg">
                      <div>
                          <span className="text-[9px] text-gray-300 font-bold uppercase tracking-wider block mb-1">LISTINGS</span>
                          <span className="text-[11px] text-white font-extrabold tracking-wide uppercase block">4,200+ ACTIVE</span>
                      </div>
                      <div>
                          <span className="text-[9px] text-gray-300 font-bold uppercase tracking-wider block mb-1">WORK PERMIT</span>
                          <span className="text-[11px] text-white font-extrabold tracking-wide uppercase block">SPONSORED</span>
                      </div>
                      <div>
                          <span className="text-[9px] text-gray-300 font-bold uppercase tracking-wider block mb-1">COUNTRIES</span>
                          <span className="text-[11px] text-white font-extrabold tracking-wide uppercase block">40+ SPACES</span>
                      </div>
                  </div>

                  {/* Pill CTA Button */}
                  <button 
                      onClick={() => {
                          const el = document.getElementById("jobs-search-bar");
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-xl tracking-wider active:scale-[0.98] select-none"
                  >
                      Browse Sponsorship Jobs
                  </button>
              </div>
          </div>

          {/* Search bar below the banner */}
          <div id="jobs-search-bar" className="mt-8 bg-white rounded-2xl p-4 shadow-xl border border-red-100 text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              <div className="md:col-span-5">
                <label className="text-[10px] font-medium tracking-normal text-[#94b0c4] block mb-1.5">Job Title / Skill / Company</label>
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer, Nurse…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-[#fff5f5] border border-red-100 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-navy outline-none focus:border-[#ef4444] transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="text-[10px] font-medium tracking-normal text-[#94b0c4] block mb-1.5">Country</label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                  <select
                    value={selectedCountry}
                    onChange={e => setSelectedCountry(e.target.value)}
                    className="w-full bg-[#fff5f5] border border-red-100 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-black outline-none focus:border-[#ef4444] transition-all appearance-none cursor-pointer"
                  >
                    {countriesList.map(c => <option key={c} className="text-black bg-white">{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="text-[10px] font-medium tracking-normal text-[#94b0c4] block mb-1.5">Category</label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="w-full bg-[#fff5f5] border border-red-100 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-black outline-none focus:border-[#ef4444] transition-all appearance-none cursor-pointer"
                  >
                    {categoriesList.map(c => <option key={c} className="text-black bg-white">{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="md:col-span-1">
                <button
                  onClick={applyFilters}
                  className="w-full h-[42px] bg-black hover:bg-neutral-900 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center outline-none"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-6 mt-3 pt-3 border-t border-red-50">
              <label className="flex items-center gap-2 cursor-pointer" onClick={() => setSponsorOnly(!sponsorOnly)}>
                <div className={`w-9 h-5 rounded-full transition-all relative ${sponsorOnly ? "bg-black" : "bg-gray-200"}`}>
                  <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${sponsorOnly ? "left-4" : "left-0.5"}`} />
                </div>
                <span className="text-xs font-semibold text-[#475569]">Visa Sponsored Only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer" onClick={() => setRelocationOnly(!relocationOnly)}>
                <div className={`w-9 h-5 rounded-full transition-all relative ${relocationOnly ? "bg-black" : "bg-gray-200"}`}>
                  <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${relocationOnly ? "left-4" : "left-0.5"}`} />
                </div>
                <span className="text-xs font-semibold text-[#475569]">Relocation Package</span>
              </label>
            </div>
          </div>

          {/* Chips */}
          <div className="flex gap-2 flex-wrap mt-5 justify-center">
            {["All Jobs","IT & Tech","Healthcare","Engineering","Hospitality","Education","New Today"].map(chip => (
              <button
                key={chip}
                onClick={() => filterByChip(chip)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border shrink-0 transition-all outline-none ${
                  activeChip === chip
                    ? "bg-black text-white border-black shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

          {/* STATS BAR */}
          <div className="bg-white border-b border-red-100">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex items-center gap-8 flex-wrap">
                {[
                  { icon: Briefcase, value: "4,200+", label: "Active Jobs" },
                  { icon: Globe, value: "40+", label: "Countries" },
                  { icon: BadgeCheck, value: "320+", label: "Verified Recruiters" },
                  { icon: Users, value: "50K+", label: "Placements Done" },
                ].map(s => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-black" />
                      <span className="font-sans font-extrabold text-black text-base">{s.value}</span>
                      <span className="text-[11px] font-bold text-[#475569]">{s.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-extrabold text-emerald-600">142 jobs added today</span>
              </div>
            </div>
          </div>

          {/* DESTINATION CARDS */}
          <div className="max-w-6xl mx-auto px-6 pt-12 pb-2 text-left">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-[11px] font-semibold text-[#ef4444] tracking-wider block mb-1">Browse by Destination</span>
                <h2 className="font-sans font-extrabold text-[#0c1a2e] text-2xl">Where Do You Want to Work?</h2>
              </div>
              <button onClick={clearFilters} className="text-xs font-bold text-[#ef4444] hover:underline outline-none">View All →</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {countryCards.map(c => (
                <div
                  key={c.name}
                  onClick={() => filterByCountry(c.name)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer h-40 border border-red-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/75 via-[#0c1a2e]/20 to-transparent"></div>
                  <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow border border-white/50">
                    <img src={`https://flagcdn.com/w40/${c.code}.png`} alt="flag" className="h-3 rounded" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-white font-sans font-extrabold text-sm leading-snug">{c.name}</div>
                    <div className="text-red-100 text-xs font-bold mt-0.5">{c.jobs}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MAIN LISTINGS GRID */}
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {/* SIDEBAR */}
            <aside className="lg:col-span-3">
              <div className="bg-white border border-red-100 rounded-2xl p-5 shadow-sm sticky top-28 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans font-bold text-sm text-navy flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-[#ef4444]" /> Filters
                  </h3>
                  <button onClick={clearFilters} className="text-xs font-bold text-[#ef4444] hover:underline outline-none">Clear all</button>
                </div>

                <div className="h-px bg-red-50 animate-fade-in"></div>

                {/* Country checkboxes */}
                <div className="space-y-2">
                  <span className="text-xs font-light text-[#359FC2] tracking-normal block">Country</span>
                  {[
                    { flag: "🇨🇦", label: "Canada",          count: "1,240" },
                    { flag: "🇦🇪", label: "UAE / Dubai",     count: "980"   },
                    { flag: "🇬🇧", label: "United Kingdom",  count: "720"   },
                    { flag: "🇦🇺", label: "Australia",       count: "640"   },
                    { flag: "🇩🇪", label: "Germany",         count: "380"   },
                  ].map(item => (
                    <label key={item.label} className="flex items-center gap-2 cursor-pointer text-xs text-[#475569] font-medium group">
                      <input type="checkbox" className="rounded text-[#ef4444] border-red-200 w-4 h-4 accent-[#ef4444]" />
                      <span className="flex-1 group-hover:text-navy transition-colors">{item.flag} {item.label}</span>
                      <span className="text-[10px] text-[#94b0c4] font-bold">{item.count}</span>
                    </label>
                  ))}
                </div>

                <div className="h-px bg-red-50"></div>

                {/* Job Category checkboxes */}
                <div className="space-y-2">
                  <span className="text-xs font-light text-[#359FC2] tracking-normal block">Job Category</span>
                  {[
                    { icon: Code2,        label: "IT & Tech",    count: "920" },
                    { icon: Stethoscope,  label: "Healthcare",   count: "680" },
                    { icon: HardHat,      label: "Engineering",  count: "540" },
                    { icon: ChefHat,      label: "Hospitality",  count: "310" },
                    { icon: GraduationCap,label: "Education",    count: "220" },
                  ].map(item => {
                    const CategoryIcon = item.icon;
                    return (
                      <label key={item.label} className="flex items-center gap-2 cursor-pointer text-xs text-[#475569] font-medium group">
                        <input type="checkbox" className="rounded text-[#ef4444] border-red-200 w-4 h-4 accent-[#ef4444]" />
                        <CategoryIcon className="w-3.5 h-3.5 text-[#94b0c4] group-hover:text-[#ef4444] transition-colors" />
                        <span className="flex-1 group-hover:text-navy transition-colors">{item.label}</span>
                        <span className="text-[10px] text-[#94b0c4] font-bold">{item.count}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="h-px bg-red-50"></div>

                {/* Perks toggles */}
                <div className="space-y-2">
                  <span className="text-xs font-light text-[#359FC2] tracking-normal block">Special Perks</span>
                  <label className="flex items-center gap-2 cursor-pointer" onClick={() => setSponsorOnly(!sponsorOnly)}>
                    <div className={`w-9 h-5 rounded-full transition-all relative ${sponsorOnly ? "bg-black" : "bg-gray-200"}`}>
                      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${sponsorOnly ? "left-4" : "left-0.5"}`} />
                    </div>
                    <span className="text-xs text-[#475569] font-semibold">Visa Sponsored</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer" onClick={() => setRelocationOnly(!relocationOnly)}>
                    <div className={`w-9 h-5 rounded-full transition-all relative ${relocationOnly ? "bg-black" : "bg-gray-200"}`}>
                      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${relocationOnly ? "left-4" : "left-0.5"}`} />
                    </div>
                    <span className="text-xs text-[#475569] font-semibold">Relocation Package</span>
                  </label>
                </div>

                <button
                  onClick={applyFilters}
                  className="w-full bg-black hover:bg-neutral-900 text-white font-bold py-2.5 rounded-xl text-xs shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all outline-none"
                >
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* JOBS GRID */}
            <div className="lg:col-span-9 space-y-4">
              <div className="bg-gradient-to-r from-red-50/50 to-white border border-red-100 border-l-4 border-l-black rounded-2xl p-4 flex gap-3">
                <Zap className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-red-700 mb-0.5">Work Visa Help on Every Job</h4>
                  <p className="text-[11px] text-[#475569] font-semibold leading-normal">Every listing includes free work permit guidance. Apply and book a visa expert in one seamless flow.</p>
                </div>
              </div>

              <div className="flex items-center justify-between py-1">
                <div className="text-xs font-semibold text-gray-400">
                  <span className="text-[#0c1a2e] font-extrabold">{jobs.length} jobs</span> matching your preference
                </div>
                <select className="bg-white border border-red-100 rounded-xl px-3 py-1.5 text-xs font-bold text-[#475569] outline-none">
                  <option>Most Relevant</option>
                  <option>Newest Added</option>
                  <option>Highest Salary</option>
                </select>
              </div>

              {jobs.length === 0 ? (
                <div className="bg-white border border-red-100 rounded-2xl p-16 text-center shadow-sm">
                  <Briefcase className="w-10 h-10 text-red-100 mx-auto mb-3" />
                  <h3 className="font-sans font-extrabold text-[#0c1a2e] text-sm mb-1">No Jobs Found</h3>
                  <p className="text-xs text-[#94b0c4] font-semibold mb-4">Try clearing filters to broaden your search.</p>
                  <button onClick={clearFilters} className="text-xs font-bold text-[#ef4444] hover:underline outline-none">Clear All Filters</button>
                </div>
              ) : jobs.map(job => {
                const JobIcon = job.icon;
                return (
                  <div
                    key={job.id}
                    onClick={() => { setActiveJob(job); window.scrollTo(0, 0); }}
                    className={`group bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${job.featured ? "ring-1 ring-[#ef4444]/20" : ""}`}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={job.heroImg} alt={job.location} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/60 via-[#0c1a2e]/10 to-transparent"></div>

                      <div className="absolute top-2.5 right-2.5 flex gap-1.5">
                        {job.isProviderOffer && <span className="bg-blue-600 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow">⚡ Work Permit Offer</span>}
                        {job.featured && <span className="bg-[#0c1a2e] text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow">⭐ Featured</span>}
                        {job.urgent && <span className="bg-red-50 text-red-700 border border-red-200 text-[9px] font-extrabold px-2.5 py-1 rounded-md">🔴 Urgent</span>}
                      </div>

                      <button
                        onClick={e => toggleSave(job.id, e)}
                        className="absolute top-2.5 left-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/50 hover:bg-white shadow-sm transition-all outline-none"
                      >
                        {saved.includes(job.id)
                          ? <Bookmark className="w-4 h-4 text-[#ef4444] fill-[#ef4444]" />
                          : <BookmarkPlus className="w-4 h-4 text-gray-400" />}
                      </button>

                      <div className="absolute bottom-2.5 left-4 flex items-center gap-2">
                        <img src={`https://flagcdn.com/w40/${job.countryCode}.png`} alt="flag" className="h-4 rounded shadow" />
                        <span className="text-white text-xs font-bold flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-red-200" />{job.location}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex gap-4 items-start mb-3 pr-4">
                        <JobCompanyLogo
                          src={job.logo}
                          alt={job.company}
                          companyName={job.company}
                          className="w-12 h-12 rounded-xl object-contain p-1 border border-slate-100 shrink-0 shadow-sm bg-white"
                          fallbackSize="w-12 h-12"
                          icon={job.icon}
                          iconColor={job.iconColor}
                        />

                        <div className="flex-1 min-w-0">
                          <h3 className="font-sans font-semibold text-base text-[#0c1a2e] leading-snug group-hover:text-[#ef4444] transition-colors mb-1">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-[#475569] font-semibold">
                            <Building2 className="w-3 h-3 text-gray-300" />
                            {job.company}
                            <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600 font-bold">Verified</span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="font-sans font-semibold text-sm text-[#0c1a2e]">{job.salary}</div>
                          <div className="text-[10px] text-[#94b0c4] font-semibold">{job.salaryNote}</div>
                        </div>
                      </div>

                      <div className="flex gap-1.5 flex-wrap mb-3.5">
                        {job.tags.slice(0, 2).map(t => (
                          <span key={t} className="bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-lg text-[9.5px] font-bold tracking-wider">{t}</span>
                        ))}
                        {job.sponsorship && <span className="bg-emerald-50/60 text-emerald-700 border border-emerald-100/60 px-2.5 py-1 rounded-lg text-[9.5px] font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-500" />Visa Sponsored</span>}
                        {job.relocation  && <span className="bg-indigo-50/60 text-indigo-700 border border-indigo-100/60 px-2.5 py-1 rounded-lg text-[9.5px] font-bold flex items-center gap-1"><Plane className="w-3 h-3 text-indigo-500" />Relocation</span>}
                      </div>


                      <div className="flex items-center justify-between pt-4 border-t border-red-50">
                        <div className="flex items-center gap-4 text-[11px] text-[#94b0c4] font-bold">
                          <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.type}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.posted}</span>
                        </div>
                        <button
                          onClick={e => { e.stopPropagation(); setActiveJob(job); window.scrollTo(0, 0); }}
                          className="bg-black hover:bg-neutral-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.97] transition-all flex items-center gap-1.5 group/btn outline-none"
                        >
                          Apply Now <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="text-center pt-4">
                <button
                  onClick={() => showToast("📄 Loading more jobs...")}
                  className="bg-white border border-gray-200 text-black font-bold text-xs px-7 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm active:scale-[0.98] transition-all shadow-sm outline-none"
                >
                  Load More Jobs →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TRAVELLER APPLICATION MODAL */}
      {isApplyModalOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget && !isSubmitting && applyStep !== "success") {
              setIsApplyModalOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
            {applyStep === "form" ? (
              <div>
                {/* Modal Header */}
                <div className="bg-slate-900 text-white px-6 py-5 flex items-start justify-between">
                  <div className="pr-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border border-emerald-500/30">
                        Traveller Application
                      </span>
                      {activeJob?.country && (
                        <span className="text-slate-300 text-xs font-semibold">
                          📍 {activeJob.country}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {activeJob?.title || "Work Permit Application"}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {activeJob?.company} · {activeJob?.salary || "Competitive Salary"}
                    </p>
                  </div>
                  <button
                    onClick={() => !isSubmitting && setIsApplyModalOpen(false)}
                    className="text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form Content */}
                <form onSubmit={handleConfirmApplication} className="p-6 space-y-4">
                  <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3 text-xs text-blue-900 leading-relaxed">
                    💡 <strong>Direct Hiring & Sponsorship:</strong> Please verify your details below. The verified immigration sponsor will contact you regarding required documents and interviews.
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:border-black focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span>Email Address <span className="text-red-500">*</span></span>
                      {formErrors.email && (
                        <span className="text-red-600 text-[11px] font-medium">{formErrors.email}</span>
                      )}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => {
                          setApplicantEmail(e.target.value);
                          if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                        }}
                        placeholder="e.g. john@example.com"
                        className={`w-full bg-slate-50 border rounded-xl pl-10 pr-3 py-2.5 text-sm font-medium focus:outline-none focus:bg-white transition-all ${
                          formErrors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-black"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span>Phone Number (with country code) <span className="text-red-500">*</span></span>
                      {formErrors.phone && (
                        <span className="text-red-600 text-[11px] font-medium">{formErrors.phone}</span>
                      )}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => {
                          setApplicantPhone(e.target.value);
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                        }}
                        placeholder="e.g. +1 (555) 234-5678"
                        className={`w-full bg-slate-50 border rounded-xl pl-10 pr-3 py-2.5 text-sm font-medium focus:outline-none focus:bg-white transition-all ${
                          formErrors.phone ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-black"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span>Current Location (City, Country) <span className="text-red-500">*</span></span>
                      {formErrors.location && (
                        <span className="text-red-600 text-[11px] font-medium">{formErrors.location}</span>
                      )}
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={applicantLocation}
                        onChange={(e) => {
                          setApplicantLocation(e.target.value);
                          if (formErrors.location) setFormErrors({ ...formErrors, location: undefined });
                        }}
                        placeholder="e.g. Toronto, Canada or New Delhi, India"
                        className={`w-full bg-slate-50 border rounded-xl pl-10 pr-3 py-2.5 text-sm font-medium focus:outline-none focus:bg-white transition-all ${
                          formErrors.location ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-black"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Note / Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Note / Message to Employer (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={applicantMessage}
                      onChange={(e) => setApplicantMessage(e.target.value)}
                      placeholder="Brief note regarding your experience or relocation preference..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-800 font-medium focus:outline-none focus:border-black focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setIsApplyModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black hover:bg-neutral-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success confirmation state */
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    Application Submitted!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your details have been registered for <strong>{activeJob?.title}</strong>. Redirecting you to your Traveller Dashboard...
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 pt-2">
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Loading dashboard...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SERVICE PROVIDER BLOCK MODAL */}
      {authErrorModal === "expert" && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setAuthErrorModal("none")}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 border border-amber-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-1">
                Service Provider Account Detected
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Service providers and immigration agents cannot submit job applications. Only Traveller accounts can apply for work permit vacancies.
              </p>
            </div>
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-[11px] text-amber-900 text-left">
              💡 If you wish to apply as a job seeker, please log in or register with a <strong>Traveller Account</strong>.
            </div>
            <div className="flex gap-2.5 pt-2">
              <button
                onClick={() => setAuthErrorModal("none")}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  window.location.href = "/login?role=seeker&redirect=/jobs";
                }}
                className="flex-1 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
              >
                Login as Traveller
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UNAUTHENTICATED PROMPT MODAL */}
      {authErrorModal === "unauthenticated" && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setAuthErrorModal("none")}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 border border-slate-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-1">
                Traveller Sign In Required
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You must be logged in with a Traveller account to submit an application and track your visa milestones.
              </p>
            </div>
            <div className="flex gap-2.5 pt-2">
              <button
                onClick={() => setAuthErrorModal("none")}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  window.location.href = "/login?role=seeker&redirect=/jobs";
                }}
                className="flex-1 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
              >
                Sign In as Traveller
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


