import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Briefcase, MapPin, Users, Clock, Check, Plus, Trash2,
  ChevronDown, ChevronUp, ChevronRight, Send, Sparkles,
  ShieldCheck, HeartPulse, Car, UtensilsCrossed, Home, Building2,
  FileCheck2, Package, Headphones, Info, Lightbulb, CheckCircle2,
  AlertCircle, Save, ImagePlus, UploadCloud, ArrowRight
} from 'lucide-react';

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: (string | { label: string; value: string })[];
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
}

function CustomDropdown({
  value,
  onChange,
  options,
  placeholder = "Select option",
  icon,
  className = "",
  buttonClassName = "",
  dropdownClassName = ""
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const normalizedOptions = options.map(opt =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  const selectedOption = normalizedOptions.find(o => o.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef} data-lenis-prevent="true">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border transition-all text-left text-xs sm:text-sm cursor-pointer ${
          isOpen
            ? "border-blue-600 bg-white ring-2 ring-blue-500/20 shadow-xs"
            : "border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300"
        } ${buttonClassName}`}
      >
        <div className="flex items-center gap-2 truncate min-w-0">
          {icon && <span className="text-slate-400 shrink-0">{icon}</span>}
          <span className={`truncate ${selectedOption ? "font-semibold text-slate-800" : "font-normal text-slate-400"}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          data-lenis-prevent="true"
          className={`absolute left-0 top-full mt-1.5 w-full min-w-[160px] bg-white border border-slate-200/90 rounded-2xl shadow-xl z-50 p-1.5 max-h-56 overflow-y-auto space-y-0.5 animate-fadeIn ${dropdownClassName}`}
        >
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface ProcessStep {
  id: string;
  number: number;
  badgeColor: string;
  title: string;
  description: string;
  estimatedTime: string;
  milestone: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    number: 1,
    badgeColor: 'bg-blue-600 text-white',
    title: 'Initial Documentation & Job Offer',
    description: 'Collect required documents from candidate (passport, CV, qualifications, experience, etc.) and issue job offer letter.',
    estimatedTime: '1-5 days',
    milestone: '10% (on offer)'
  },
  {
    id: 'step-2',
    number: 2,
    badgeColor: 'bg-emerald-600 text-white',
    title: 'Work Permit Application',
    description: 'Submit application directly with government authority with all documents and signed forms.',
    estimatedTime: '5-10 days',
    milestone: '30% (on submission)'
  },
  {
    id: 'step-3',
    number: 3,
    badgeColor: 'bg-purple-600 text-white',
    title: 'Government Approval',
    description: 'Receive work permit approval from the government.',
    estimatedTime: '7-15 days',
    milestone: '30% (on approval)'
  },
  {
    id: 'step-4',
    number: 4,
    badgeColor: 'bg-amber-600 text-white',
    title: 'Visa Processing (Embassy)',
    description: 'Submit visa forms to embassy/consulate and complete visa stamping.',
    estimatedTime: '5-10 days',
    milestone: '20% (on visa issue)'
  },
  {
    id: 'step-5',
    number: 5,
    badgeColor: 'bg-teal-600 text-white',
    title: 'Travel & Onboarding',
    description: 'Book flights, arrange accommodation (if required) and provide pre-departure briefing.',
    estimatedTime: '3-5 days',
    milestone: '10% (on travel)'
  }
];

const TIME_OPTIONS = [
  '1-3 days',
  '1-5 days',
  '3-5 days',
  '5-10 days',
  '7-15 days',
  '15-30 days',
  '30-60 days',
  '60-90 days'
];

const MILESTONE_OPTIONS = [
  'None',
  '10% (on offer)',
  '20% (on offer)',
  '25% (on application)',
  '30% (on submission)',
  '30% (on approval)',
  '20% (on visa issue)',
  '10% (on travel)',
  '50% (initial)',
  '50% (on completion)'
];

const COUNTRIES = [
  'Poland', 'Germany', 'Canada', 'United Arab Emirates', 'United Kingdom',
  'Malta', 'Croatia', 'Portugal', 'Romania', 'Saudi Arabia', 'Singapore',
  'Czech Republic', 'Lithuania', 'Hungary', 'Australia', 'New Zealand',
  'Qatar', 'Japan', 'Ireland', 'Netherlands'
];

const EMPLOYMENT_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Temporary',
  'Seasonal'
];

const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'AED', 'PLN', 'INR'];

export function WorkPermitOrderForm({ isEmbedded = false, onCancel }: { isEmbedded?: boolean; onCancel?: () => void } = {}) {
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  // Section 1: Job Details
  const [jobLocation, setJobLocation] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [totalPositions, setTotalPositions] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('');
  const [salaryCurrency, setSalaryCurrency] = useState<string>('USD');
  const [salaryAmount, setSalaryAmount] = useState<string>('');
  const [salaryPeriod, setSalaryPeriod] = useState<'hour' | 'month'>('hour');

  // Section 2: Benefits (Unchecked by default so service provider can freely choose)
  const [benefits, setBenefits] = useState({
    accommodation: false,
    meals: false,
    transport: false,
    healthInsurance: false,
    lifeInsurance: false,
    other: false
  });
  const [otherBenefitText, setOtherBenefitText] = useState<string>('');
  const [benefitNotes, setBenefitNotes] = useState<string>('');

  // Section 3: Total Cost (Empty by default so service provider enters custom pricing)
  const [govFee, setGovFee] = useState<string>('');
  const [embassyFee, setEmbassyFee] = useState<string>('');
  const [courierFee, setCourierFee] = useState<string>('');
  const [travltikFee, setTravltikFee] = useState<string>('');
  const [isCostCardExpanded, setIsCostCardExpanded] = useState<boolean>(true);

  // Section 4: Process Steps
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>(DEFAULT_STEPS);

  // Section 5: Additional Info
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  // Section 6: Ad Banner
  const [adBanner, setAdBanner] = useState<string>('');
  const [adBannerName, setAdBannerName] = useState<string>('');
  const [adBannerSize, setAdBannerSize] = useState<string>('');
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      showToast('Image file size must be less than 10MB', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      setAdBanner(result);
      setAdBannerName(file.name);
      setAdBannerSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
      showToast('Ad banner uploaded successfully!', 'success');
    };
    reader.readAsDataURL(file);
  };

  const BANNER_TEMPLATES = [
    { label: "Construction & Labor", img: "/images/job_construction_greece.png", icon: "🏗️" },
    { label: "IT & Tech Engineer", img: "/images/job_tech_engineer.png", icon: "💻" },
    { label: "Hospitality & Chef", img: "/images/job_chef_london.png", icon: "🍳" },
    { label: "Healthcare & Nursing", img: "/images/job_nurse_dubai.png", icon: "🩺" },
  ];

  // UI state
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'info' | 'error'; text: string } | null>(null);
  const [isPublishedModalOpen, setIsPublishedModalOpen] = useState<boolean>(false);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);

  const totalCost = useMemo(() => {
    return (Number(govFee) || 0) + (Number(embassyFee) || 0) + (Number(courierFee) || 0) + (Number(travltikFee) || 0);
  }, [govFee, embassyFee, courierFee, travltikFee]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ type, text });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const toggleBenefit = (key: keyof typeof benefits) => {
    setBenefits(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddStep = () => {
    const nextNum = processSteps.length + 1;
    const colors = [
      'bg-blue-600 text-white',
      'bg-emerald-600 text-white',
      'bg-purple-600 text-white',
      'bg-amber-600 text-white',
      'bg-teal-600 text-white',
      'bg-indigo-600 text-white',
      'bg-rose-600 text-white'
    ];
    const newStep: ProcessStep = {
      id: 'step-' + Date.now(),
      number: nextNum,
      badgeColor: colors[(nextNum - 1) % colors.length],
      title: 'New Process Milestone',
      description: 'Describe the milestone requirements and required actions.',
      estimatedTime: '5-10 days',
      milestone: 'None'
    };
    setProcessSteps(prev => [...prev, newStep]);
    showToast('New process step added.', 'info');
  };

  const handleUpdateStep = (index: number, field: keyof ProcessStep, value: string) => {
    setProcessSteps(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleDeleteStep = (index: number) => {
    if (processSteps.length <= 1) {
      showToast('Offer must have at least one process step.', 'error');
      return;
    }
    setProcessSteps(prev => {
      const updated = prev.filter((_, i) => i !== index);
      return updated.map((step, i) => ({
        ...step,
        number: i + 1
      }));
    });
  };

  const handleSaveDraft = () => {
    const draftData = {
      jobLocation,
      jobTitle,
      totalPositions,
      employmentType,
      salaryCurrency,
      salaryAmount,
      salaryPeriod,
      benefits,
      otherBenefitText,
      benefitNotes,
      govFee,
      embassyFee,
      courierFee,
      travltikFee,
      totalCost,
      processSteps,
      additionalNotes,
      adBanner,
      adBannerName,
      adBannerSize,
      savedAt: new Date().toISOString()
    };
    try {
      localStorage.setItem('travltik_work_permit_draft', JSON.stringify(draftData));
      showToast('Work permit offer saved as draft successfully!', 'success');
    } catch (e) {
      showToast('Draft saved to session.', 'success');
    }
  };

  const handlePublish = () => {
    if (!jobTitle.trim()) {
      showToast('Please enter a Job Title before publishing.', 'error');
      const el = document.getElementById('section-job-details');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setIsPublishedModalOpen(true);
      try {
        const expertName = localStorage.getItem("expert_businessName") || localStorage.getItem("expert_name") || "Verified Immigration Agency";
        const expertPhoto =
          localStorage.getItem("expert_profilePhoto") ||
          localStorage.getItem("expert_profilePhotoUrl") ||
          localStorage.getItem("expert_logo") ||
          localStorage.getItem("expert_avatar") ||
          (() => {
            try {
              const u = JSON.parse(localStorage.getItem("travltik_user") || "{}");
              return u.photoURL || u.profile_photo || "";
            } catch(e) { return ""; }
          })() ||
          "";
        const expertEmail = localStorage.getItem("expert_email") || "";

        const locLower = (jobLocation || '').toLowerCase();
        let code = 'eu';
        if (locLower.includes('canada')) code = 'ca';
        else if (locLower.includes('uk') || locLower.includes('united kingdom')) code = 'gb';
        else if (locLower.includes('germany')) code = 'de';
        else if (locLower.includes('poland')) code = 'pl';
        else if (locLower.includes('uae') || locLower.includes('dubai')) code = 'ae';
        else if (locLower.includes('australia')) code = 'au';
        else if (locLower.includes('new zealand')) code = 'nz';
        else if (locLower.includes('greece')) code = 'gr';
        else if (locLower.includes('usa')) code = 'us';

        const bannerImage = adBanner || '/images/job_construction_greece.png';

        const publishedJob = {
          id: 'wp-' + Date.now(),
          title: jobTitle,
          company: expertName,
          location: jobLocation ? `${jobLocation} 🌍` : 'Europe 🌍',
          country: jobLocation || 'Europe',
          countryCode: code,
          category: 'Engineering',
          salary: salaryAmount ? `${salaryCurrency} ${Number(salaryAmount).toLocaleString()}` : `${salaryCurrency} Competitive`,
          salaryNote: `per ${salaryPeriod}`,
          posted: 'Just now',
          type: `${employmentType || 'Contract'} (${totalPositions || 1} slots)`,
          sponsorship: true,
          relocation: Boolean(benefits.accommodation || benefits.transport),
          featured: true,
          urgent: true,
          logo: expertPhoto,
          heroImg: bannerImage,
          tags: [
            'Verified Contract',
            'Work Permit Sponsored',
            benefits.accommodation ? 'Accommodation Provided' : null,
            benefits.meals ? 'Meals Included' : null,
            benefits.healthInsurance ? 'Health Insurance' : null,
            employmentType || 'Full-Time'
          ].filter(Boolean),
          desc: additionalNotes || `Official work permit recruitment for ${jobTitle} in ${jobLocation || 'Europe'}. Verified employment contract, official work permit sponsorship, and full visa guidance included. Candidate processing cost: USD ${totalCost.toLocaleString()}.`,
          processSteps: processSteps,
          benefits: benefits,
          totalCost: `${salaryCurrency} ${totalCost.toLocaleString()}`,
          govFee: govFee || '0',
          embassyFee: embassyFee || '0',
          courierFee: courierFee || '0',
          travltikFee: travltikFee || '0',
          expertEmail: expertEmail,
          isProviderOffer: true,
          createdAt: new Date().toISOString()
        };

        // Save to published jobs & offers in localStorage so /jobs renders it instantly
        const existingJobs = JSON.parse(localStorage.getItem('travltik_published_jobs') || '[]');
        localStorage.setItem('travltik_published_jobs', JSON.stringify([publishedJob, ...existingJobs]));

        const existingOffers = JSON.parse(localStorage.getItem('travltik_published_offers') || '[]');
        localStorage.setItem('travltik_published_offers', JSON.stringify([publishedJob, ...existingOffers]));

        // Sync with backend jobs API so it is visible to everyone across the platform
        fetch('/api/jobs/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...publishedJob,
            salaryAmount,
            salaryCurrency,
            salaryPeriod,
            slots: totalPositions || 1,
            costs: {
              totalCost: `${salaryCurrency} ${totalCost.toLocaleString()}`,
              govFee,
              embassyFee,
              courierFee,
              travltikFee,
            }
          })
        }).catch(err => console.warn('Could not sync job offer to backend DB:', err));

        // Also sync with backend ads API
        fetch('/api/ads/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: jobTitle,
            company: expertName,
            category: 'Work Permit',
            cover_photo: bannerImage,
            description: publishedJob.desc,
            expert_email: expertEmail
          })
        }).catch(err => console.warn('Ad sync notice:', err));

      } catch (e) {
        console.error('Error publishing work permit offer:', e);
      }
    }, 800);
  };

  const scrollToSection = (stepNum: number, elementId: string) => {
    setActiveStepTab(stepNum);
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`${isEmbedded ? "w-full" : "min-h-screen bg-[#F8FAFC]"} text-slate-800 pb-20 font-sans antialiased`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium ${
            toastMessage.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200 shadow-emerald-500/10'
              : toastMessage.type === 'error'
              ? 'bg-rose-50 text-rose-800 border-rose-200 shadow-rose-500/10'
              : 'bg-blue-50 text-blue-800 border-blue-200 shadow-blue-500/10'
          }`}>
            {toastMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
            {toastMessage.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />}
            {toastMessage.type === 'info' && <Info className="w-5 h-5 text-blue-600 shrink-0" />}
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className={`${isEmbedded ? "w-full" : "max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6"}`}>

        {/* Top Breadcrumb & Actions Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5">
              <button 
                type="button" 
                onClick={() => onCancel ? onCancel() : (window.location.href = "/service-provider/dashboard")} 
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Work Permits
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-600">Create Work Permit Offer</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Create Work Permit Offer
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Share job opportunities and help candidates get work permits to work abroad.
                </p>
              </div>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveDraft}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold shadow-sm transition-all active:scale-[0.98]"
            >
              <Save className="w-4 h-4 text-slate-500" />
              <span>Save as Draft</span>
            </button>
            <button
              onClick={handlePublish}
              disabled={isPublishing}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm shadow-blue-500/20 transition-all active:scale-[0.98] disabled:opacity-75"
            >
              <Send className="w-4 h-4" />
              <span>{isPublishing ? 'Publishing...' : 'Publish Offer'}</span>
            </button>
          </div>
        </div>

        {/* 6-Step Stepper Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 mb-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[760px] px-2 sm:px-4">
            {[
              { num: 1, label: 'Basic Details', id: 'section-job-details' },
              { num: 2, label: 'Benefits & Costs', id: 'section-benefits' },
              { num: 3, label: 'Process & Steps', id: 'section-steps' },
              { num: 4, label: 'Additional Info', id: 'section-additional' },
              { num: 5, label: 'Upload Ad Banner', id: 'section-banner' },
              { num: 6, label: 'Review & Publish', id: 'section-bottom' },
            ].map((step, idx, arr) => {
              const isActive = activeStepTab === step.num;
              return (
                <React.Fragment key={step.num}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(step.num, step.id)}
                    className="flex items-center gap-2.5 py-1 px-2 rounded-lg group transition-all"
                  >
                    <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white ring-4 ring-blue-50 shadow-sm' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {step.num}
                    </span>
                    <span className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                      isActive ? 'text-blue-700 font-bold' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {step.label}
                    </span>
                  </button>
                  {idx < arr.length - 1 && (
                    <div className="h-0.5 flex-1 mx-3 bg-slate-200/80 rounded-full min-w-[20px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Form Sections (Left 68%) + Side Cards (Right 32%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT COLUMN: 5 Section Cards */}
          <div className="lg:col-span-8 space-y-6">

            {/* SECTION 1: Job Details */}
            <div id="section-job-details" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-blue-500/30">
                  1
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Job Details
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Provide the core information about the job and employment.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Job Location <span className="text-rose-500">*</span>
                  </label>
                  <CustomDropdown
                    value={jobLocation}
                    onChange={setJobLocation}
                    options={COUNTRIES}
                    placeholder="Select Country"
                    icon={<MapPin className="w-4 h-4" />}
                  />
                  <p className="text-[11px] text-slate-400 mt-1.5 font-normal">
                    Country where the job is located
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Job Title <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="Enter job title"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 font-normal">
                    e.g. Software Engineer, Nurse, Construction Worker etc.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Total Positions <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      min="1"
                      value={totalPositions}
                      onChange={(e) => setTotalPositions(e.target.value)}
                      placeholder="Enter number of positions"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 font-normal">
                    e.g. 5
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Employment Type <span className="text-rose-500">*</span>
                  </label>
                  <CustomDropdown
                    value={employmentType}
                    onChange={setEmploymentType}
                    options={EMPLOYMENT_TYPES}
                    placeholder="Select Employment Type"
                    icon={<Briefcase className="w-4 h-4" />}
                  />
                  <p className="text-[11px] text-slate-400 mt-1.5 font-normal">
                    e.g. Full-time, Part-time, Contract, Temporary etc.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Salary <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex flex-1 rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:bg-white transition-all">
                      <select
                        value={salaryCurrency}
                        onChange={(e) => setSalaryCurrency(e.target.value)}
                        className="bg-slate-100/80 px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 border-r border-slate-200 focus:outline-none cursor-pointer"
                      >
                        {CURRENCIES.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        value={salaryAmount}
                        onChange={(e) => setSalaryAmount(e.target.value)}
                        placeholder="Enter salary amount"
                        className="w-full px-3.5 py-2.5 bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-5 px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 select-none">
                        <input
                          type="radio"
                          name="salaryPeriod"
                          checked={salaryPeriod === 'hour'}
                          onChange={() => setSalaryPeriod('hour')}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span>Per Hour</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 select-none">
                        <input
                          type="radio"
                          name="salaryPeriod"
                          checked={salaryPeriod === 'month'}
                          onChange={() => setSalaryPeriod('month')}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span>Per Month</span>
                      </label>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 font-normal">
                    Enter the salary offered to the employee (before deductions)
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 2: Benefits Provided by Employer */}
            <div id="section-benefits" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-blue-500/30">
                  2
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Benefits Provided by Employer
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Select all benefits included in the offer (optional)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-5">
                <button
                  type="button"
                  onClick={() => toggleBenefit('accommodation')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    benefits.accommodation
                      ? 'border-blue-500/80 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    benefits.accommodation ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white'
                  }`}>
                    {benefits.accommodation && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                  <Home className={`w-4 h-4 ${benefits.accommodation ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className={`text-xs font-semibold ${benefits.accommodation ? 'text-blue-900' : 'text-slate-700'}`}>
                    Accommodation
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleBenefit('meals')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    benefits.meals
                      ? 'border-blue-500/80 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    benefits.meals ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white'
                  }`}>
                    {benefits.meals && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                  <UtensilsCrossed className={`w-4 h-4 ${benefits.meals ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className={`text-xs font-semibold ${benefits.meals ? 'text-blue-900' : 'text-slate-700'}`}>
                    Meals
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleBenefit('transport')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    benefits.transport
                      ? 'border-blue-500/80 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    benefits.transport ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white'
                  }`}>
                    {benefits.transport && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                  <Car className={`w-4 h-4 ${benefits.transport ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className={`text-xs font-semibold ${benefits.transport ? 'text-blue-900' : 'text-slate-700'}`}>
                    Transport
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleBenefit('healthInsurance')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    benefits.healthInsurance
                      ? 'border-blue-500/80 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    benefits.healthInsurance ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white'
                  }`}>
                    {benefits.healthInsurance && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                  <HeartPulse className={`w-4 h-4 ${benefits.healthInsurance ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className={`text-xs font-semibold ${benefits.healthInsurance ? 'text-blue-900' : 'text-slate-700'}`}>
                    Health Insurance
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleBenefit('lifeInsurance')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    benefits.lifeInsurance
                      ? 'border-blue-500/80 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    benefits.lifeInsurance ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white'
                  }`}>
                    {benefits.lifeInsurance && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                  <ShieldCheck className={`w-4 h-4 ${benefits.lifeInsurance ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className={`text-xs font-semibold ${benefits.lifeInsurance ? 'text-blue-900' : 'text-slate-700'}`}>
                    Life Insurance
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleBenefit('other')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    benefits.other
                      ? 'border-blue-500/80 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    benefits.other ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white'
                  }`}>
                    {benefits.other && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                  <Sparkles className={`w-4 h-4 ${benefits.other ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className={`text-xs font-semibold ${benefits.other ? 'text-blue-900' : 'text-slate-700'}`}>
                    Other Benefits
                  </span>
                </button>
              </div>

              {benefits.other && (
                <div className="mb-4">
                  <input
                    type="text"
                    value={otherBenefitText}
                    onChange={(e) => setOtherBenefitText(e.target.value)}
                    placeholder="Enter other benefits (e.g. Annual flight tickets, gym membership, visa sponsorship for family)"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Additional Notes on Benefits <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    maxLength={500}
                    value={benefitNotes}
                    onChange={(e) => setBenefitNotes(e.target.value)}
                    placeholder="Any additional benefits or special arrangements..."
                    className="w-full px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all resize-none"
                  />
                  <span className="absolute bottom-2.5 right-3 text-[11px] text-slate-400">
                    {benefitNotes.length}/500
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 3: Total Cost per Client */}
            <div id="section-benefits-cost" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-blue-500/30">
                  3
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Total Cost per Client
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Enter the complete cost breakdown per candidate, including all fees.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Government Fees <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="flex rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20">
                        <span className="pl-3 pr-2 py-2 text-xs font-semibold text-slate-600 self-center">
                          USD
                        </span>
                        <input
                          type="number"
                          value={govFee}
                          onChange={(e) => setGovFee(e.target.value)}
                          placeholder="400"
                          className="w-full pr-3 py-2 bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 font-normal">
                      e.g. Work permit application, local government fees
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Embassy Fees <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="flex rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20">
                        <span className="pl-3 pr-2 py-2 text-xs font-semibold text-slate-600 self-center">
                          USD
                        </span>
                        <input
                          type="number"
                          value={embassyFee}
                          onChange={(e) => setEmbassyFee(e.target.value)}
                          placeholder="350"
                          className="w-full pr-3 py-2 bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 font-normal">
                      e.g. Visa fee charged by embassy
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Courier Fee <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="flex rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20">
                        <span className="pl-3 pr-2 py-2 text-xs font-semibold text-slate-600 self-center">
                          USD
                        </span>
                        <input
                          type="number"
                          value={courierFee}
                          onChange={(e) => setCourierFee(e.target.value)}
                          placeholder="50"
                          className="w-full pr-3 py-2 bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 font-normal">
                      e.g. Document courier / shipping fee
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      TravlTik Service Fee <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="flex rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden focus-within:border-blue-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20">
                        <span className="pl-3 pr-2 py-2 text-xs font-semibold text-slate-600 self-center">
                          USD
                        </span>
                        <input
                          type="number"
                          value={travltikFee}
                          onChange={(e) => setTravltikFee(e.target.value)}
                          placeholder="200"
                          className="w-full pr-3 py-2 bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 font-normal">
                      Our service fee per client (fixed)
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-emerald-900">
                        Total Cost per Client
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsCostCardExpanded(!isCostCardExpanded)}
                      className="text-emerald-700 hover:text-emerald-900 p-0.5"
                    >
                      {isCostCardExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="mb-3">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      USD {totalCost > 0 ? totalCost.toLocaleString() : '0'}
                    </div>
                    <div className="text-[11px] font-medium text-emerald-700">
                      (approx.)
                    </div>
                  </div>

                  {isCostCardExpanded && (
                    <div className="pt-3 border-t border-emerald-200/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Government Fees</span>
                        <span className="font-semibold text-slate-900">USD {govFee ? Number(govFee).toLocaleString() : '0'}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Embassy Fees</span>
                        <span className="font-semibold text-slate-900">USD {embassyFee ? Number(embassyFee).toLocaleString() : '0'}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Courier Fee</span>
                        <span className="font-semibold text-slate-900">USD {courierFee ? Number(courierFee).toLocaleString() : '0'}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>TravlTik Fee</span>
                        <span className="font-semibold text-slate-900">USD {travltikFee ? Number(travltikFee).toLocaleString() : '0'}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 4: Custom Process Steps */}
            <div id="section-steps" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-blue-500/30">
                  4
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Custom Process Steps
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Define the steps you will follow for this work permit process. You can add payment milestones at specific stages (optional).
                  </p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl bg-white mb-4">
                <div className="hidden sm:grid sm:grid-cols-12 gap-3 px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider rounded-t-xl">
                  <div className="sm:col-span-6">Step / Description</div>
                  <div className="sm:col-span-3">Estimated Time</div>
                  <div className="sm:col-span-3">Payment Milestone (Optional)</div>
                </div>

                <div className="divide-y divide-slate-100">
                  {processSteps.map((step, idx) => (
                    <div
                      key={step.id}
                      className="p-3.5 sm:p-4 hover:bg-slate-50/50 transition-colors relative"
                      style={{ zIndex: processSteps.length - idx + 10 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                        <div className="sm:col-span-6 flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full ${step.badgeColor} font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                            {step.number}
                          </div>
                          <div className="flex-1 min-w-0">
                            <input
                              type="text"
                              value={step.title}
                              onChange={(e) => handleUpdateStep(idx, 'title', e.target.value)}
                              className="w-full text-xs sm:text-sm font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
                            />
                            <textarea
                              rows={2}
                              value={step.description}
                              onChange={(e) => handleUpdateStep(idx, 'description', e.target.value)}
                              className="w-full text-[11px] text-slate-500 bg-transparent border-b border-transparent hover:border-slate-200 focus:border-blue-600 focus:outline-none transition-colors resize-none mt-0.5 leading-relaxed"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <CustomDropdown
                            value={step.estimatedTime}
                            onChange={(val) => handleUpdateStep(idx, 'estimatedTime', val)}
                            options={TIME_OPTIONS}
                            placeholder="Select time"
                            icon={<Clock className="w-3.5 h-3.5" />}
                            buttonClassName="py-1.5 text-xs bg-slate-50/80 border-slate-200"
                          />
                        </div>

                        <div className="sm:col-span-3 flex items-center gap-2">
                          <div className="flex-1 min-w-0">
                            <CustomDropdown
                              value={step.milestone}
                              onChange={(val) => handleUpdateStep(idx, 'milestone', val)}
                              options={MILESTONE_OPTIONS}
                              placeholder="Select milestone"
                              buttonClassName="py-1.5 text-xs bg-slate-50/80 border-slate-200"
                            />
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteStep(idx)}
                            title="Delete step"
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddStep}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-100/60 text-blue-700 text-xs font-bold transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Another Step</span>
              </button>
            </div>

            {/* SECTION 5: Additional Information */}
            <div id="section-additional" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-blue-500/30">
                  5
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Additional Information
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Include any extra details, terms and conditions, or special instructions.
                  </p>
                </div>
              </div>

              <div className="relative">
                <textarea
                  rows={4}
                  maxLength={500}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Enter additional notes / terms and conditions..."
                  className="w-full px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all resize-none"
                />
                <span className="absolute bottom-2.5 right-3 text-[11px] text-slate-400">
                  {additionalNotes.length}/500
                </span>
              </div>
            </div>

            {/* SECTION 6: Upload Ad Banner / Promotional Poster */}
            <div id="section-banner" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-blue-500/30">
                  6
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Upload Ad Banner
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Upload a high-resolution promotional banner or flyer. This will be shown on the TravlTik /jobs portal and client search results.
                  </p>
                </div>
              </div>

              {adBanner ? (
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group max-h-72 bg-slate-950">
                    <img
                      src={adBanner}
                      alt="Ad Banner Preview"
                      className="w-full h-56 sm:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="text-white">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-white px-2.5 py-1 rounded-md shadow-xs">
                            ✓ Banner Ready
                          </span>
                          <p className="text-xs sm:text-sm text-white font-bold mt-1.5 truncate max-w-sm">
                            {adBannerName || 'Uploaded Ad Banner'}
                          </p>
                          {adBannerSize && (
                            <p className="text-[11px] text-white/70 font-medium">
                              File Size: {adBannerSize}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => bannerInputRef.current?.click()}
                            className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                          >
                            Replace Banner
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setAdBanner('');
                              setAdBannerName('');
                              setAdBannerSize('');
                            }}
                            className="px-3.5 py-2 rounded-xl bg-rose-600/90 hover:bg-rose-600 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div
                    onClick={() => bannerInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const file = e.dataTransfer.files?.[0];
                      if (file) {
                        if (file.size > 10 * 1024 * 1024) {
                          showToast('Image file size must be less than 10MB', 'error');
                          return;
                        }
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          setAdBanner(ev.target?.result as string);
                          setAdBannerName(file.name);
                          setAdBannerSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
                          showToast('Ad banner uploaded successfully!', 'success');
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50/70 hover:bg-blue-50/20 rounded-2xl p-8 sm:p-10 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-3 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-all shadow-xs group-hover:scale-105">
                      <ImagePlus className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        Drag & Drop your Ad Banner here, or <span className="text-blue-600 underline">Browse Files</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 font-normal">
                        Supports PNG, JPG, WEBP, SVG (Landscape banner, Recommended: 1200 × 630 px, Max 10MB)
                      </p>
                    </div>
                  </div>

                  <input
                    ref={bannerInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleBannerUpload}
                    className="hidden"
                  />

                  {/* Preset Industry Banner Templates */}
                  <div className="pt-2">
                    <p className="text-xs font-bold text-slate-600 mb-2">
                      Or select a pre-made industry banner template:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {BANNER_TEMPLATES.map((tmpl) => (
                        <button
                          key={tmpl.label}
                          type="button"
                          onClick={() => {
                            setAdBanner(tmpl.img);
                            setAdBannerName(tmpl.label + ' Template');
                            setAdBannerSize('Pre-designed');
                            showToast(`Selected ${tmpl.label} banner`, 'info');
                          }}
                          className="group relative rounded-xl overflow-hidden border border-slate-200 hover:border-blue-600 transition-all text-left p-1.5 hover:shadow-md cursor-pointer bg-slate-50"
                        >
                          <div className="h-16 rounded-lg overflow-hidden relative mb-1.5">
                            <img src={tmpl.img} alt={tmpl.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            <div className="absolute inset-0 bg-black/20" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-700 block truncate">
                            {tmpl.icon} {tmpl.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div id="section-bottom" className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => onCancel ? onCancel() : (window.location.href = "/service-provider/dashboard")}
                className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold shadow-sm transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handlePublish}
                disabled={isPublishing}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-500/25 transition-all active:scale-[0.98] disabled:opacity-75"
              >
                <Send className="w-4 h-4" />
                <span>{isPublishing ? 'Publishing...' : 'Publish Work Permit Offer'}</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: 4 Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-6">

            {/* WIDGET 1: Hero Banner Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full scale-110 opacity-70" />
                <div className="relative w-16 h-12 bg-white rounded-lg border-2 border-blue-500 shadow-sm p-1.5 flex flex-col justify-between -translate-x-2 -translate-y-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white font-bold">
                      👤
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <div className="h-1 bg-blue-400 rounded-full w-full" />
                      <div className="h-1 bg-blue-200 rounded-full w-2/3" />
                    </div>
                  </div>
                  <div className="h-0.5 bg-slate-100 rounded-full w-full" />
                </div>
                <div className="absolute right-0 bottom-0 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow-md border-2 border-white">
                  <span className="text-sm">🌐</span>
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                Create a Work Permit Offer
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fill in the details below to post your work permit opportunity and reach qualified candidates worldwide.
              </p>
            </div>

            {/* WIDGET 2: Reach Global Talent */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Info className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Reach global talent
                </h4>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
                  <span>Access qualified professionals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
                  <span>Manage applications easily</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
                  <span>Track leads and responses</span>
                </div>
              </div>
            </div>

            {/* WIDGET 3: Quick Tips */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Lightbulb className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Quick Tips
                </h4>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5] mt-0.5" />
                  <span>Be specific about the job role, skills required and benefits.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5] mt-0.5" />
                  <span>Include accurate costs and payment milestones.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5] mt-0.5" />
                  <span>Add clear and realistic process steps with timelines.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5] mt-0.5" />
                  <span>You can edit this offer anytime before publishing.</span>
                </div>
              </div>
            </div>

            {/* WIDGET 4: Need Help? */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Need Help?
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Our support team is here to assist you.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => showToast('Connecting you with TravlTik Support representative...', 'info')}
                className="w-full mt-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-blue-600 text-xs font-bold transition-colors shadow-sm"
              >
                Chat with Support
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Published Success Modal */}
      {isPublishedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Work Permit Offer Published!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              Your work permit offer for <strong className="text-slate-800">{jobTitle || 'General Worker'}</strong> in <strong className="text-slate-800">{jobLocation || 'Europe'}</strong> has been published and is now visible to candidates worldwide.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left mb-6 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Total Positions:</span>
                <span className="font-semibold text-slate-800">{totalPositions || '1'} positions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Salary:</span>
                <span className="font-semibold text-slate-800">{salaryCurrency} {salaryAmount || 'Negotiable'} / {salaryPeriod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Cost per Client:</span>
                <span className="font-bold text-emerald-700">USD {totalCost.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => window.location.href = "/jobs"}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View on /jobs Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onCancel ? onCancel() : (window.location.href = "/service-provider/dashboard")}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Go to Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkPermitOrderForm;
