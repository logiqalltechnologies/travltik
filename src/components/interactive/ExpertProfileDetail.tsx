import React, { useState } from 'react';
import { 
  Star, MapPin, CheckCircle, ShieldCheck, Clock, Award, 
  Building2, Users, Globe, Phone, Mail, ChevronRight, 
  ChevronDown, ExternalLink, MessageSquare, ArrowRight, 
  Share2, Bookmark, Check, Calendar, ArrowLeft, Heart,
  Sparkles, FileText, AlertCircle
} from 'lucide-react';
import { RequestQuoteModal } from './RequestQuoteModal';
import { ReviewRatingModal } from './ReviewRatingModal';
import { DisputeReportModal } from './DisputeReportModal';
import { PaymentCheckoutModal } from './PaymentCheckoutModal';

export interface ExpertProfileDetailProps {
  expert: {
    id: string | number;
    name: string;
    businessName?: string;
    fullName?: string;
    role: string;
    city: string;
    state?: string;
    country?: string;
    address?: string;
    bio?: string;
    aboutMe?: string;
    tags?: string[];
    countries?: string[];
    rating?: number;
    reviews?: number;
    isVerified?: boolean;
    isRemote?: boolean;
    govReg?: string;
    image?: string;
    email?: string;
    phone?: string;
    experienceYears?: string | number;
    hourlyRate?: number | string;
    serviceCategory?: string;
    languages?: string[];
  };
  relatedExperts?: any[];
  isModal?: boolean;
  onClose?: () => void;
}

export function ExpertProfileDetail({
  expert,
  relatedExperts = [],
  isModal = false,
  onClose
}: ExpertProfileDetailProps) {
  if (!expert) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'expertise' | 'reviews' | 'gallery' | 'faqs'>('overview');
  const [selectedReviewFilter, setSelectedReviewFilter] = useState<string>('All reviews');
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const displayName = expert.businessName || expert.name || expert.fullName || 'GlobalPath Immigration Services';
  const displayRole = expert.role || 'Visa & Immigration Consultancy';
  const displayCity = expert.city || 'Hyderabad';
  const displayCountry = expert.country || 'India';
  const displayLocation = expert.city ? `${expert.city}, ${expert.country || 'India'}` : 'Hyderabad, India';
  const ratingVal = expert.rating ? Number(expert.rating).toFixed(1) : '4.8';
  const reviewCount = expert.reviews || 126;
  const experienceText = expert.experienceYears ? `${expert.experienceYears}` : '8+ years experience';

  const expertTags = (expert.tags && expert.tags.length > 0) 
    ? expert.tags 
    : ['Tourist Visa', 'Student Visa', 'Work Visa', 'Business Visa', 'Family/Dependent Visa', 'Visa Appeals'];

  const expertCountries = (expert.countries && expert.countries.length > 0 && expert.countries[0] !== 'Worldwide')
    ? expert.countries
    : ['India', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'United States', 'Poland'];

  const expertLanguages = (expert.languages && expert.languages.length > 0)
    ? expert.languages
    : ['English', 'Hindi', 'Telugu'];

  const bioText = expert.bio || expert.aboutMe || 
    `${displayName} is a certified, results-driven immigration consultancy dedicated to facilitating seamless global mobility for individuals, students, and skilled professionals. Backed by extensive legal compliance experience and deep embassy procedural intelligence, we ensure complete accuracy in application drafting, document notarization, and interview readiness across tier-1 destinations.`;

  const defaultServices = [
    {
      title: 'Tourist Visa Assistance',
      desc: 'Complete documentation support, itinerary planning, cover letter drafting, and appointment scheduling.',
      price: '₹5,000',
      tag: 'Popular'
    },
    {
      title: 'Student Visa Support',
      desc: 'University offer letter evaluation, financial document audit, CAS/I-20 filing, and embassy mock interviews.',
      price: '₹15,000',
      tag: 'High Success'
    },
    {
      title: 'Work Visa & Skilled Permit',
      desc: 'Employer sponsorship verification, LMIA / CoS coordination, points matrix calculation, and fast-track submission.',
      price: '₹25,000',
      tag: 'Expertise'
    },
    {
      title: 'Family & Dependent Visa',
      desc: 'Spousal sponsorship, dependent child visa, relationship evidence dossiers, and fast approvals.',
      price: '₹18,000',
      tag: 'Guaranteed Care'
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80', title: 'Corporate Headquarters' },
    { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', title: 'Client Consultation Desk' },
    { url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80', title: 'Visa Stamping Briefing' },
    { url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80', title: 'Airport Departure Lounge' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', title: 'Immigration Advisory Team' },
    { url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80', title: 'Global Network Map' }
  ];

  const sampleReviews = [
    {
      id: 1,
      author: 'Vikram R.',
      date: '2 weeks ago',
      rating: 5,
      type: 'Tourist Visa',
      verified: true,
      comment: 'GlobalPath handled my UK standard visitor visa smoothly. All documents were checked thoroughly before submission and got the visa within 12 working days without any hassle. Highly recommended!'
    },
    {
      id: 2,
      author: 'Sneha M.',
      date: '1 month ago',
      rating: 5,
      type: 'Student Visa',
      verified: true,
      comment: 'Got my Canada study permit approved after an earlier refusal through another consultant. The team redrafted my SOP with exceptional precision and addressed every single tie to home country.'
    },
    {
      id: 3,
      author: 'Rohit Verma',
      date: '2 months ago',
      rating: 4,
      type: 'Work Visa',
      verified: true,
      comment: 'Very professional communication. Provided clear checklists for German EU Blue Card paperwork and guided me step-by-step through the VFS appointment.'
    }
  ];

  const faqs = [
    {
      q: 'What documents do I need for initial consultation?',
      a: 'For your preliminary case evaluation, please have a digital copy of your valid passport, your recent travel history, resume/CV (for work permits), and any previous visa rejection letters if applicable.'
    },
    {
      q: 'How long does the visa application process take?',
      a: 'Processing times vary significantly by country and visa stream. Visitor visas typically take 2-4 weeks, while student and work permits may take 4-8 weeks depending on embassy workload.'
    },
    {
      q: 'Do you guarantee visa approval?',
      a: 'No ethical or registered consultant can guarantee a visa outcome, as final decisions rest strictly with government consular officers. We maximize your approval probability through flawless documentation.'
    },
    {
      q: 'Are consultation fees refundable?',
      a: 'Introductory consultation fees cover one-on-one attorney time and file audit. If you subsequently retain our end-to-end filing services, the consultation fee is credited toward your total package.'
    },
    {
      q: 'Can you assist if I have a previous visa refusal?',
      a: 'Yes, our team specializes in refusal appeals and fresh filings. We request your CAIPS / GCMS case notes to uncover the officer\'s exact refusal grounds and rectify them comprehensively.'
    },
    {
      q: 'Do you offer remote / video consultations for clients outside the city?',
      a: 'Yes! Over 70% of our clients consult via secure Google Meet / Zoom sessions. All documents can be securely uploaded to our encrypted client portal.'
    }
  ];

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToSection = (tabKey: any) => {
    setActiveTab(tabKey);
    const el = document.getElementById(`section-${tabKey}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCountryFlag = (cName: string) => {
    const map: Record<string, string> = {
      'India': '🇮🇳', 'UK': '🇬🇧', 'United Kingdom': '🇬🇧',
      'Canada': '🇨🇦', 'Australia': '🇦🇺', 'Germany': '🇩🇪',
      'USA': '🇺🇸', 'United States': '🇺🇸', 'Poland': '🇵🇱',
      'New Zealand': '🇳🇿', 'UAE': '🇦🇪', 'Singapore': '🇸🇬',
      'France': '🇫🇷', 'Italy': '🇮🇹', 'Netherlands': '🇳🇱'
    };
    return map[cName] || '🌐';
  };

  return (
    <div className={`w-full bg-[#f8fafc] text-slate-800 font-sans ${isModal ? 'p-0' : 'min-h-screen py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BREADCRUMBS */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-2 border-b border-slate-200/60 font-medium">
          <div className="flex items-center gap-1.5 flex-wrap">
            <a href="/" className="hover:text-teal-700 transition-colors">Home</a>
            <span className="text-slate-400">›</span>
            <a href="/find-experts" className="hover:text-teal-700 transition-colors">Service Providers</a>
            <span className="text-slate-400">›</span>
            <a href="/find-experts" className="hover:text-teal-700 transition-colors">Visa &amp; Immigration</a>
            <span className="text-slate-400">›</span>
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">{displayName}</span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`p-1.5 rounded-lg border transition-all flex items-center gap-1 text-[11px] font-semibold ${isSaved ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              title="Save Provider"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button 
              onClick={handleShare}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-1 text-[11px] font-semibold relative"
              title="Share Provider"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
              {copied && (
                <span className="absolute -bottom-7 right-0 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap z-50">
                  Copied!
                </span>
              )}
            </button>

            {isModal && onClose && (
              <button 
                onClick={onClose}
                className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-all cursor-pointer font-bold px-2"
                title="Close"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* HERO HEADER CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Brand Info & Primary CTAs */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Square Brand Logo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-teal-50 border border-teal-100 p-2 shrink-0 flex items-center justify-center shadow-xs overflow-hidden relative">
                    {expert.image && !expert.image.includes('unsplash') ? (
                      <img 
                        src={expert.image} 
                        alt={displayName} 
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : null}
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br from-[#0c1a2e] to-teal-800 text-white flex flex-col items-center justify-center font-bold font-sans ${expert.image && !expert.image.includes('unsplash') ? 'hidden' : ''}`}>
                      <span className="text-xl tracking-tight leading-none">
                        {displayName.split(' ').slice(0, 2).map((w: string) => w.charAt(0).toUpperCase()).join('')}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider text-teal-300 mt-1">GLOBAL</span>
                    </div>
                  </div>

                  {/* Title & Badges */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="bg-teal-50 text-teal-800 border border-teal-200/80 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-teal-600" /> TravlTik Verified
                      </span>
                      {expert.govReg && (
                        <span className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                          Reg #{expert.govReg}
                        </span>
                      )}
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      {displayName}
                    </h1>

                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 flex items-center gap-1.5">
                      <span>{displayRole}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" /> {displayLocation}
                      </span>
                    </p>

                    {/* Quick Metrics Pills */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex items-center gap-1 font-bold text-slate-900 bg-amber-50/80 border border-amber-200/60 px-2.5 py-1 rounded-lg">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                        <span>{ratingVal}</span>
                        <span className="text-[11px] font-normal text-slate-500">({reviewCount} reviews)</span>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 text-slate-700 font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-teal-600" />
                        <span>{experienceText}</span>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Response within 2 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full sm:w-auto bg-[#00a896] hover:bg-[#008f80] active:scale-95 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Provider</span>
                </button>

                <button
                  onClick={() => setPaymentModalOpen(true)}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-600" />
                  <span>Request a Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Split Banner Photo */}
            <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full overflow-hidden bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" 
                alt="Airplane view sunset"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
              
              <div className="relative z-10 text-center text-white px-4 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Seamless Visa Experience
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug drop-shadow-md">
                  “Your Global Journey, <br /><span className="text-amber-300">Our Trusted Expertise</span>”
                </h3>
                <p className="text-xs text-slate-200/80 max-w-xs mx-auto">
                  Over 500+ successful applicant cases approved across top immigration corridors.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* MILESTONE STATS BAR */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 mb-8 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
            
            <div className="pt-2 sm:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-amber-500 font-black text-lg">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-slate-900">{ratingVal}</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">{reviewCount} Reviews</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-center gap-1.5 text-teal-600 font-black text-lg">
                <Users className="w-4 h-4" />
                <span className="text-slate-900">500+</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Applicants Assisted</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-center gap-1.5 text-indigo-600 font-black text-lg">
                <Award className="w-4 h-4" />
                <span className="text-slate-900">{experienceText.split(' ')[0]}</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Years Experience</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-black text-lg">
                <Clock className="w-4 h-4" />
                <span className="text-slate-900">2 hr</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Avg Response Time</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4 col-span-2 sm:col-span-1">
              <div className="flex items-center justify-center gap-1.5 text-sky-600 font-black text-lg">
                <Globe className="w-4 h-4" />
                <span className="text-slate-900">{expertCountries.length}+</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Countries Served</p>
            </div>

          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Provider-reported metrics are verified via platform reviews &amp; audited documents. Official visa approval decisions rest solely with government embassies.</span>
          </div>
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT MAIN CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Sticky Navigation Tabs Strip */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 p-1.5 shadow-sm overflow-x-auto custom-scrollbar flex items-center gap-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'services', label: 'Services' },
                { id: 'expertise', label: 'Areas of Expertise' },
                { id: 'reviews', label: `Reviews (${reviewCount})` },
                { id: 'gallery', label: 'Gallery' },
                { id: 'faqs', label: 'FAQs' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === tab.id ? 'bg-[#00a896] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* SECTION 1: ABOUT PROVIDER */}
            <div id="section-overview" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span>About {displayName}</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-3 whitespace-pre-line font-normal">
                  {bioText}
                </p>
              </div>

              {/* Areas of Expertise Tag Pills */}
              <div id="section-expertise" className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertTags.map((tag: string, idx: number) => (
                    <span 
                      key={idx}
                      className="bg-teal-50/70 border border-teal-100 text-teal-800 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-teal-100/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Countries Served Grid */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Countries Served
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {expertCountries.map((cName: string, idx: number) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 text-xs font-bold text-slate-800"
                    >
                      <span className="text-base">{getCountryFlag(cName)}</span>
                      <span className="truncate">{cName}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Spoken */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Languages Spoken
                </h3>
                <p className="text-xs font-semibold text-slate-700">
                  {expertLanguages.join(", ")}
                </p>
              </div>

              {/* Professional Credentials Checklist */}
              <div className="pt-4 border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Professional Credentials &amp; Verification</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Identity verified by government ID</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Registered business documentation verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Immigration credentials &amp; track record reviewed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Office address &amp; operational status verified</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-3 italic">
                  Verification indicates that TravlTik has verified the provider's submitted credentials. It is not an endorsement or legal guarantee of any specific visa outcome.
                </p>
              </div>

            </div>

            {/* SECTION 2: SERVICES OFFERED GRID */}
            <div id="section-services" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black text-slate-900 tracking-tight">Services Offered</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Explore standard transparent packages and customized advisory solutions.</p>
                </div>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 underline hidden sm:inline"
                >
                  Custom Request →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {defaultServices.map((srv, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-200/80 rounded-2xl p-5 hover:border-teal-400/50 hover:shadow-md transition-all flex flex-col justify-between group bg-slate-50/30"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md">
                          {srv.tag}
                        </span>
                        <span className="text-xs font-black text-slate-900">
                          Starting at {srv.price}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button 
                        onClick={() => setPaymentModalOpen(true)}
                        className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 group/btn cursor-pointer"
                      >
                        <span>Book this package</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: REVIEWS & RATINGS SCORECARD */}
            <div id="section-reviews" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 tracking-tight">Reviews &amp; Ratings</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Authentic feedback from verified TravlTik clients.</p>
                </div>
                <button
                  onClick={() => setReviewModalOpen(true)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Write a Review</span>
                </button>
              </div>

              {/* Rating Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4 text-center sm:text-left sm:border-r sm:border-slate-200/80 sm:pr-6">
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{ratingVal}</div>
                  <div className="flex items-center justify-center sm:justify-start text-amber-400 gap-1 my-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-slate-500">Based on {reviewCount} verified reviews</p>
                </div>

                <div className="sm:col-span-8 space-y-1.5">
                  {[
                    { star: '5 star', pct: 88 },
                    { star: '4 star', pct: 9 },
                    { star: '3 star', pct: 2 },
                    { star: '2 star', pct: 1 },
                    { star: '1 star', pct: 0 },
                  ].map(item => (
                    <div key={item.star} className="flex items-center gap-3 text-xs">
                      <span className="w-12 text-slate-600 font-medium shrink-0">{item.star}</span>
                      <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div 
                          className="h-full bg-amber-400 rounded-full" 
                          style={{ width: `${item.pct}%` }} 
                        />
                      </div>
                      <span className="w-8 text-right font-bold text-slate-600">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Filter Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["All reviews", "Tourist Visa", "Student Visa", "Work Visa"].map(f => (
                  <button
                    key={f}
                    onClick={() => setSelectedReviewFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedReviewFilter === f ? 'bg-[#00a896] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Review Cards List */}
              <div className="space-y-4 pt-2">
                {sampleReviews.map(rev => (
                  <div key={rev.id} className="border border-slate-100 rounded-2xl p-5 bg-slate-50/40 space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-900">{rev.author}</span>
                          {rev.verified && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                              <CheckCircle className="w-2.5 h-2.5 text-emerald-600" /> Verified interaction
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="flex text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-[11px] text-slate-400 font-medium">• {rev.date}</span>
                          <span className="text-[11px] text-teal-700 font-semibold">• {rev.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      &quot;{rev.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* SECTION 4: GALLERY */}
            <div id="section-gallery" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight">Gallery</h2>
                <p className="text-xs text-slate-500 mt-0.5">Inside look at our consultation facility, advisory sessions, and successful client departures.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 border border-slate-200/80 shadow-xs">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                      <span className="text-[11px] font-semibold text-white drop-shadow-sm">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: FAQS ACCORDION */}
            <div id="section-faqs" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-xs text-slate-500 mt-0.5">Quick answers regarding consultation bookings, fees, and processing times.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-200/80 rounded-2xl p-4 bg-slate-50/40 transition-colors"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full text-left font-bold text-xs text-slate-900 flex items-start justify-between gap-2 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180 text-teal-600' : ''}`} />
                    </button>
                    {expandedFaq === idx && (
                      <p className="text-xs text-slate-600 mt-2.5 pt-2.5 border-t border-slate-200/60 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT STICKY SIDEBAR */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-6">
              
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                  Direct Channel
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2">
                  Get in touch
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect with {displayName}&apos;s dedicated case managers.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full bg-[#420f79] hover:bg-[#340b61] active:scale-95 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Provider</span>
                </button>

                <button
                  onClick={() => setPaymentModalOpen(true)}
                  className="w-full bg-white hover:bg-slate-50 border border-slate-300 active:scale-95 text-slate-800 font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Request a callback</span>
                </button>
              </div>

              {/* Key Facts List */}
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Response time</span>
                    <span className="text-slate-500">Usually responds within 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Business hours</span>
                    <span className="text-slate-500">Mon - Sat, 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Service location</span>
                    <span className="text-slate-500">{displayLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Consultation options</span>
                    <span className="text-slate-500">Online Video Call &amp; In-Person Office</span>
                  </div>
                </div>
              </div>

              {/* Why choose this provider? Box */}
              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900">Why choose this provider?</h4>
                <ul className="space-y-2 text-[11px] text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Government registry &amp; council verified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Dedicated documentation audit team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Secure client file management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Transparent fee structure with escrow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Proven 98% positive client feedback</span>
                  </li>
                </ul>
              </div>

              {/* Trust disclaimer */}
              <div className="border border-slate-200/80 rounded-2xl p-3.5 text-[11px] text-slate-400 leading-relaxed bg-slate-50/40">
                <p>
                  🛡️ <strong>TravlTik Protection:</strong> Direct bookings via TravlTik are safeguarded with verified escrow processing. Funds are disbursed only upon satisfactory milestone completion.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RELATED SERVICE PROVIDERS */}
        {relatedExperts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Related Service Providers</h3>
                <p className="text-xs text-slate-500 mt-0.5">Explore other top-rated verified consultants in your corridor.</p>
              </div>
              <a href="/find-experts" className="text-xs font-bold text-teal-700 hover:text-teal-900 underline">
                View all experts →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedExperts.slice(0, 4).map((rel) => (
                <a
                  key={rel.id}
                  href={`/expert/${rel.id}`}
                  className="bg-white rounded-2xl border border-slate-200/80 p-4 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                        {rel.image ? (
                          <img src={rel.image} alt={rel.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs">
                            {rel.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                          {rel.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate">{rel.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3 h-3 fill-amber-400" /> {rel.rating?.toFixed ? rel.rating.toFixed(1) : rel.rating}
                      </span>
                      <span className="truncate">{rel.city || 'Remote'}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MODALS */}
      <RequestQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        targetExpertId={typeof expert.id === 'number' ? expert.id : parseInt(String(expert.id).replace(/\D/g, '')) || 0}
        targetExpertName={displayName}
        targetExpertEmail={expert.email || ''}
        defaultCountry={expertCountries[0] || 'Canada'}
      />

      <ReviewRatingModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        expertId={typeof expert.id === 'number' ? expert.id : parseInt(String(expert.id).replace(/\D/g, '')) || 0}
        expertName={displayName}
      />

      <DisputeReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        targetType="provider"
        targetId={String(expert.id)}
        targetName={displayName}
      />

      <PaymentCheckoutModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        expertId={typeof expert.id === 'number' ? expert.id : parseInt(String(expert.id).replace(/\D/g, '')) || 0}
        expertName={displayName}
        expertEmail={expert.email || ''}
        hourlyRate={typeof expert.hourlyRate === 'number' ? expert.hourlyRate : 49}
        visaCategory={displayRole}
      />

    </div>
  );
}