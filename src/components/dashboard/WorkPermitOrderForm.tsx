import React, { useState, useMemo } from 'react';
import {
  Briefcase, MapPin, Users, Clock, Check, Plus, Trash2,
  ChevronDown, ChevronUp, ChevronRight, Send, Sparkles,
  ShieldCheck, HeartPulse, Car, UtensilsCrossed, Home, Building2,
  FileCheck2, Package, Headphones, Info, Lightbulb, CheckCircle2,
  AlertCircle, Save
} from 'lucide-react';

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

export function WorkPermitOrderForm() {
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  // Section 1: Job Details
  const [jobLocation, setJobLocation] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [totalPositions, setTotalPositions] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('');
  const [salaryCurrency, setSalaryCurrency] = useState<string>('USD');
  const [salaryAmount, setSalaryAmount] = useState<string>('');
  const [salaryPeriod, setSalaryPeriod] = useState<'hour' | 'month'>('hour');

  // Section 2: Benefits
  const [benefits, setBenefits] = useState({
    accommodation: true,
    meals: true,
    transport: false,
    healthInsurance: true,
    lifeInsurance: false,
    other: false
  });
  const [otherBenefitText, setOtherBenefitText] = useState<string>('');
  const [benefitNotes, setBenefitNotes] = useState<string>('');

  // Section 3: Total Cost
  const [govFee, setGovFee] = useState<number>(400);
  const [embassyFee, setEmbassyFee] = useState<number>(350);
  const [courierFee, setCourierFee] = useState<number>(50);
  const [travltikFee, setTravltikFee] = useState<number>(200);
  const [isCostCardExpanded, setIsCostCardExpanded] = useState<boolean>(true);

  // Section 4: Process Steps
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>(DEFAULT_STEPS);

  // Section 5: Additional Info
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

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
        const publishedOffer = {
          id: 'wp_' + Date.now(),
          jobLocation: jobLocation || 'Poland',
          jobTitle: jobTitle || 'General Worker',
          totalPositions: totalPositions || '1',
          employmentType: employmentType || 'Full-time',
          salary: salaryCurrency + ' ' + (salaryAmount || '1,800') + ' / ' + salaryPeriod,
          totalCost: salaryCurrency + ' ' + totalCost,
          status: 'Active',
          createdAt: new Date().toISOString()
        };
        const existing = JSON.parse(localStorage.getItem('travltik_published_offers') || '[]');
        localStorage.setItem('travltik_published_offers', JSON.stringify([publishedOffer, ...existing]));
      } catch (e) {}
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 pb-24 font-sans antialiased">
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
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* Top Breadcrumb & Actions Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5">
              <a href="/service-provider/dashboard" className="hover:text-blue-600 transition-colors">
                Work Permits
              </a>
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

        {/* 5-Step Stepper Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 mb-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] px-2 sm:px-4">
            {[
              { num: 1, label: 'Basic Details', id: 'section-job-details' },
              { num: 2, label: 'Benefits & Costs', id: 'section-benefits' },
              { num: 3, label: 'Process & Steps', id: 'section-steps' },
              { num: 4, label: 'Additional Info', id: 'section-additional' },
              { num: 5, label: 'Review & Publish', id: 'section-bottom' },
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
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <select
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Country</option>
                      {COUNTRIES.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
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
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Employment Type</option>
                      {EMPLOYMENT_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
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
                          onChange={(e) => setGovFee(Number(e.target.value) || 0)}
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
                          onChange={(e) => setEmbassyFee(Number(e.target.value) || 0)}
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
                          onChange={(e) => setCourierFee(Number(e.target.value) || 0)}
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
                          onChange={(e) => setTravltikFee(Number(e.target.value) || 0)}
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
                      USD {totalCost.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-medium text-emerald-700">
                      (approx.)
                    </div>
                  </div>

                  {isCostCardExpanded && (
                    <div className="pt-3 border-t border-emerald-200/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Government Fees</span>
                        <span className="font-semibold text-slate-900">USD {govFee}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Embassy Fees</span>
                        <span className="font-semibold text-slate-900">USD {embassyFee}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Courier Fee</span>
                        <span className="font-semibold text-slate-900">USD {courierFee}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>TravlTik Fee</span>
                        <span className="font-semibold text-slate-900">USD {travltikFee}</span>
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

              <div className="border border-slate-200 rounded-xl overflow-hidden mb-4">
                <div className="hidden sm:grid sm:grid-cols-12 gap-3 px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <div className="sm:col-span-6">Step / Description</div>
                  <div className="sm:col-span-3">Estimated Time</div>
                  <div className="sm:col-span-3">Payment Milestone (Optional)</div>
                </div>

                <div className="divide-y divide-slate-100">
                  {processSteps.map((step, idx) => (
                    <div key={step.id} className="p-3.5 sm:p-4 hover:bg-slate-50/50 transition-colors">
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
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <Clock className="w-3.5 h-3.5" />
                            </div>
                            <select
                              value={step.estimatedTime}
                              onChange={(e) => handleUpdateStep(idx, 'estimatedTime', e.target.value)}
                              className="w-full pl-8 pr-7 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer"
                            >
                              {TIME_OPTIONS.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400">
                              <ChevronDown className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-3 flex items-center gap-2">
                          <div className="relative flex-1">
                            <select
                              value={step.milestone}
                              onChange={(e) => handleUpdateStep(idx, 'milestone', e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer"
                            >
                              {MILESTONE_OPTIONS.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400">
                              <ChevronDown className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteStep(idx)}
                            title="Delete step"
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
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

            {/* Bottom Actions Bar */}
            <div id="section-bottom" className="flex items-center justify-between pt-2">
              <a
                href="/service-provider/dashboard"
                className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold shadow-sm transition-all"
              >
                Cancel
              </a>
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
                onClick={() => setIsPublishedModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Create Another
              </button>
              <a
                href="/service-provider/dashboard"
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Go to Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkPermitOrderForm;
