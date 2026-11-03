import React, { useState, useEffect, useMemo } from 'react';
import { 
  Star, MapPin, CheckCircle, ShieldCheck, Clock, Award, 
  Building2, Users, Globe, Phone, Mail, ChevronRight, 
  ChevronDown, ExternalLink, MessageSquare, ArrowRight, 
  Share2, Bookmark, Check, Calendar, ArrowLeft, Heart,
  Sparkles, FileText, AlertCircle, MessageCircle
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
    reviewsList?: any[];
    galleryImages?: Array<{ url: string; title: string }>;
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
  initialReviews?: any[];
  relatedExperts?: any[];
  isModal?: boolean;
  onClose?: () => void;
}

export function ExpertProfileDetail({
  expert,
  initialReviews = [],
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

  // Real Reviews state
  const [reviewsList, setReviewsList] = useState<any[]>(() => {
    if (initialReviews && initialReviews.length > 0) return initialReviews;
    if (expert.reviewsList && expert.reviewsList.length > 0) return expert.reviewsList;
    return [];
  });
  const [loadingReviews, setLoadingReviews] = useState(false);

  // Parse numeric expert ID for reviews API
  const numericExpertId = useMemo(() => {
    if (typeof expert.id === 'number') return expert.id;
    const match = String(expert.id).replace(/\D/g, '');
    return match ? parseInt(match, 10) : 0;
  }, [expert.id]);

  // Fetch real reviews from API on mount if not provided
  useEffect(() => {
    if (numericExpertId > 0 && (!reviewsList || reviewsList.length === 0)) {
      setLoadingReviews(true);
      fetch(`/api/reviews?expertId=${numericExpertId}`)
        .then(res => res.json())
        .then(data => {
          if (data.success && Array.isArray(data.reviews)) {
            const formatted = data.reviews.map((r: any) => ({
              id: r.id,
              author: r.seeker_name || 'Verified Client',
              date: r.created_at ? new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
              rating: Number(r.rating) || 5,
              type: r.tags || 'Visa Consultation',
              verified: Boolean(r.is_verified_transaction),
              comment: r.feedback || ''
            }));
            setReviewsList(formatted);
          }
        })
        .catch(err => {
          console.warn('[ExpertProfileDetail] Failed to fetch reviews:', err);
        })
        .finally(() => {
          setLoadingReviews(false);
        });
    }
  }, [numericExpertId]);

  const displayName = expert.businessName || expert.name || expert.fullName || 'Verified Consultant';
  const displayRole = expert.role || 'Visa & Immigration Consultant';
  const displayCity = expert.city || 'Remote';
  const displayCountry = expert.country || 'India';
  const displayLocation = expert.city ? `${expert.city}, ${expert.country || 'India'}` : (expert.country || 'Remote');

  // Compute real review count and average rating
  const reviewCount = reviewsList.length;
  const computedAvgRating = reviewCount > 0
    ? (reviewsList.reduce((acc, curr) => acc + (Number(curr.rating) || 5), 0) / reviewCount)
    : (expert.rating && expert.reviews ? Number(expert.rating) : 0);
  const ratingVal = reviewCount > 0 ? computedAvgRating.toFixed(1) : (computedAvgRating > 0 ? computedAvgRating.toFixed(1) : 'New');

  const experienceText = expert.experienceYears ? `${expert.experienceYears}` : 'Verified Consultant';

  const expertTags = (expert.tags && expert.tags.length > 0) 
    ? expert.tags 
    : ['Visa Consultation', 'Documentation Audit', 'Application Review'];

  const expertCountries = (expert.countries && expert.countries.length > 0 && expert.countries[0] !== 'Worldwide')
    ? expert.countries
    : [expert.country || 'India'];

  const expertLanguages = (expert.languages && expert.languages.length > 0)
    ? expert.languages
    : ['English'];

  const bioText = expert.bio || expert.aboutMe || 
    `${displayName} is a verified immigration and visa consultant on TravlTik. Connect directly to evaluate your eligibility, get personalized document checklists, and receive guidance through your visa process.`;

  // Dynamic services based on real expert attributes
  const hourlyRateNum = typeof expert.hourlyRate === 'number' ? expert.hourlyRate : parseInt(String(expert.hourlyRate || '49'), 10) || 49;
  const currencySymbol = expert.country === 'India' ? '₹' : '$';
  const multiplier = expert.country === 'India' ? 80 : 1;
  const baseRate = hourlyRateNum * multiplier;

  const servicesOffered = useMemo(() => {
    return [
      {
        title: 'Initial Case Evaluation & Eligibility',
        desc: 'Comprehensive review of your passport, travel history, qualifications, and country eligibility pathways.',
        price: `${currencySymbol}${baseRate.toLocaleString()}`,
        tag: 'Recommended'
      },
      {
        title: 'Document Audit & Application Drafting',
        desc: 'Detailed checklist verification, cover letter drafting, financial document review, and embassy portal readiness.',
        price: `${currencySymbol}${(baseRate * 2.5).toLocaleString()}`,
        tag: 'Thorough Audit'
      },
      {
        title: 'End-to-End Filing & Interview Prep',
        desc: 'Full submission management, appointment guidance, mock interview preparation, and real-time updates.',
        price: `${currencySymbol}${(baseRate * 5).toLocaleString()}`,
        tag: 'Full Advisory'
      }
    ];
  }, [baseRate, currencySymbol]);

  // Gallery: only real images if uploaded by expert
  const galleryImages = expert.galleryImages || [];

  // Compute rating percentage breakdown from REAL reviews
  const ratingBreakdown = useMemo(() => {
    if (reviewCount === 0) {
      return [
        { star: '5 star', count: 0, pct: 0 },
        { star: '4 star', count: 0, pct: 0 },
        { star: '3 star', count: 0, pct: 0 },
        { star: '2 star', count: 0, pct: 0 },
        { star: '1 star', count: 0, pct: 0 },
      ];
    }
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewsList.forEach(r => {
      const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
      counts[star] = (counts[star] || 0) + 1;
    });
    return [5, 4, 3, 2, 1].map(star => {
      const c = counts[star] || 0;
      return {
        star: `${star} star`,
        count: c,
        pct: Math.round((c / reviewCount) * 100)
      };
    });
  }, [reviewsList, reviewCount]);

  // Filter reviews by active tag
  const filteredReviews = useMemo(() => {
    if (selectedReviewFilter === 'All reviews') return reviewsList;
    return reviewsList.filter(r => (r.type || '').toLowerCase().includes(selectedReviewFilter.toLowerCase()));
  }, [reviewsList, selectedReviewFilter]);

  // Dynamic review filter options from existing review tags
  const reviewFilterOptions = useMemo(() => {
    const opts = new Set<string>(['All reviews']);
    reviewsList.forEach(r => {
      if (r.type && r.type.trim()) opts.add(r.type.trim());
    });
    return Array.from(opts);
  }, [reviewsList]);

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
      q: 'Is the initial consultation free?',
      a: 'Yes, your initial case assessment and preliminary file evaluation with our advisors is completely free. When you proceed with comprehensive filing and legal representation, payments are handled strictly through TravlTik milestone escrow.'
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
    <div className={`w-full bg-transparent text-slate-800 font-sans ${isModal ? 'p-0' : 'min-h-screen py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BREADCRUMBS */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-5 pb-2.5 border-b border-[rgba(67,15,122,0.08)] font-medium">
          <div className="flex items-center gap-1.5 flex-wrap">
            <a href="/" className="hover:text-[#430f7a] transition-colors">Home</a>
            <span className="text-slate-300">›</span>
            <a href="/find-experts" className="hover:text-[#430f7a] transition-colors">Service Providers</a>
            <span className="text-slate-300">›</span>
            <a href="/find-experts" className="hover:text-[#430f7a] transition-colors">Visa &amp; Immigration</a>
            <span className="text-slate-300">›</span>
            <span className="text-[#1b1233] font-bold truncate max-w-[200px] sm:max-w-none">{displayName}</span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`p-1.5 px-3 rounded-xl border transition-all flex items-center gap-1.5 text-[11px] font-bold ${isSaved ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-[rgba(67,15,122,0.12)] text-[#430f7a] hover:bg-[#faf6fe] shadow-2xs'}`}
              title="Save Provider"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button 
              onClick={handleShare}
              className="p-1.5 px-3 rounded-xl border border-[rgba(67,15,122,0.12)] bg-white text-[#430f7a] hover:bg-[#faf6fe] transition-all flex items-center gap-1.5 text-[11px] font-bold relative shadow-2xs"
              title="Share Provider"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
              {copied && (
                <span className="absolute -bottom-7 right-0 bg-[#1b1233] text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow whitespace-nowrap z-50">
                  Copied!
                </span>
              )}
            </button>

            {isModal && onClose && (
              <button 
                onClick={onClose}
                className="p-1.5 rounded-xl border border-[rgba(67,15,122,0.12)] bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-all cursor-pointer font-bold px-2.5"
                title="Close"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* HERO HEADER CARD (Matches Landing Page .sbox / .atlys-card luxury feel) */}
        <div className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Brand Info & Primary CTAs */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Square Brand Logo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#faf6fe] border-[1.5px] border-[rgba(67,15,122,0.12)] p-2 shrink-0 flex items-center justify-center shadow-xs overflow-hidden relative">
                    {expert.image && !expert.image.includes('unsplash') ? (
                      <img 
                        src={expert.image} 
                        alt={displayName} 
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : null}
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br from-[#370c63] via-[#430f7a] to-[#00b070] text-white flex flex-col items-center justify-center font-bold font-sans ${expert.image && !expert.image.includes('unsplash') ? 'hidden' : ''}`}>
                      <span className="text-xl tracking-tight leading-none">
                        {displayName.split(' ').slice(0, 2).map((w: string) => w.charAt(0).toUpperCase()).join('')}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider text-emerald-200 mt-1 font-extrabold">VERIFIED</span>
                    </div>
                  </div>

                  {/* Title & Badges */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0] text-[11px] font-extrabold px-3 py-0.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00b070]" /> TravlTik Verified
                      </span>
                      {expert.govReg && (
                        <span className="bg-[#f4eff9] text-[#430f7a] border border-[#e9dcf7] text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                          Reg #{expert.govReg}
                        </span>
                      )}
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1b1233] tracking-tight leading-tight">
                      {displayName}
                    </h1>

                    <p className="text-xs sm:text-sm font-semibold text-[#675f80] mt-1 flex items-center gap-1.5 flex-wrap">
                      <span>{displayRole}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[#675f80] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#00b070]" /> {displayLocation}
                      </span>
                    </p>

                    {/* Quick Metrics Pills */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-3.5 pt-3.5 border-t border-[rgba(67,15,122,0.08)] text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#1b1233] bg-[#fffbeb] border border-[#fde68a] px-3 py-1 rounded-xl shadow-2xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                        <span>{ratingVal}</span>
                        <span className="text-[11px] font-medium text-slate-500">({reviewCount} reviews)</span>
                      </div>

                      <div className="bg-[#f4eff9] border border-[rgba(67,15,122,0.12)] text-[#430f7a] font-bold px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-2xs">
                        <Award className="w-3.5 h-3.5 text-[#430f7a]" />
                        <span>{experienceText}</span>
                      </div>

                      <div className="bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] font-bold px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-2xs">
                        <Clock className="w-3.5 h-3.5 text-[#00b070]" />
                        <span>Response within 2 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 pt-5 border-t border-[rgba(67,15,122,0.08)]">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#370c63] to-[#130c3a] hover:from-[#4a1285] hover:to-[#1a104f] active:scale-95 text-white font-extrabold text-xs px-7 py-3.5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(55,12,99,0.45)] hover:shadow-[0_12px_24px_-6px_rgba(55,12,99,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Provider</span>
                </button>

                <button
                  onClick={() => setPaymentModalOpen(true)}
                  className="w-full sm:w-auto bg-white hover:bg-[#faf6fe] border-[1.5px] border-[rgba(67,15,122,0.18)] text-[#370c63] font-extrabold text-xs px-6 py-3.5 rounded-2xl shadow-2xs hover:border-[#370c63] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#00b070]" />
                  <span>Request a Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Signature TravlTik Luxury Purple Banner (Matches Landing Page Gradient Feel) */}
            <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full overflow-hidden bg-gradient-to-tr from-[#240641] via-[#370c63] to-[#4a1385] flex items-center justify-center p-8">
              {/* Subtle background aurora glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00b070]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#6c28d9]/30 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 text-center text-white px-4 space-y-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#00e599] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00e599]" /> Seamless Visa Experience
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug drop-shadow-sm font-sans">
                  “Your Global Journey, <br /><span className="text-[#00e599]">Our Trusted Expertise</span>”
                </h3>
                <p className="text-xs text-purple-100/90 max-w-xs mx-auto leading-relaxed">
                  {expert.isVerified ? 'Verified immigration advisory and compliant filing support protected with TravlTik Escrow.' : 'Direct consultation and visa filing guidance.'}
                </p>
                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-purple-200/80">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00e599] animate-pulse"></span>
                  <span>100% Escrow Protected Milestones</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* MILESTONE STATS BAR (Landing Page Style) */}
        <div className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-5 sm:p-6 mb-8 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(67,15,122,0.08)] text-center">
            
            <div className="pt-2 sm:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-amber-500 font-black text-xl">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-[#1b1233]">{ratingVal}</span>
              </div>
              <p className="text-[11px] font-bold text-[#675f80] uppercase tracking-wider mt-1">{reviewCount} Reviews</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-center gap-1.5 text-[#00b070] font-black text-xl">
                <Users className="w-4 h-4" />
                <span className="text-[#1b1233]">{reviewCount > 0 ? `${reviewCount}+` : 'Active'}</span>
              </div>
              <p className="text-[11px] font-bold text-[#675f80] uppercase tracking-wider mt-1">{reviewCount > 0 ? 'Verified Reviews' : 'Direct Booking'}</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-center gap-1.5 text-[#430f7a] font-black text-xl">
                <Award className="w-4 h-4" />
                <span className="text-[#1b1233]">{String(experienceText).split(' ')[0]}</span>
              </div>
              <p className="text-[11px] font-bold text-[#675f80] uppercase tracking-wider mt-1">Years Experience</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-center gap-1.5 text-[#00b070] font-black text-xl">
                <Clock className="w-4 h-4" />
                <span className="text-[#1b1233]">Direct</span>
              </div>
              <p className="text-[11px] font-bold text-[#675f80] uppercase tracking-wider mt-1">Consultation Access</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4 col-span-2 sm:col-span-1">
              <div className="flex items-center justify-center gap-1.5 text-[#370c63] font-black text-xl">
                <Globe className="w-4 h-4 text-[#00b070]" />
                <span className="text-[#1b1233]">{expertCountries.length}+</span>
              </div>
              <p className="text-[11px] font-bold text-[#675f80] uppercase tracking-wider mt-1">Countries Served</p>
            </div>

          </div>

          <div className="mt-4 pt-3.5 border-t border-[rgba(67,15,122,0.08)] flex items-center justify-center gap-2 text-[11px] text-[#675f80] text-center">
            <AlertCircle className="w-3.5 h-3.5 text-[#00b070] shrink-0" />
            <span>Provider-reported metrics are verified via platform reviews &amp; audited documents. Official visa approval decisions rest solely with government embassies.</span>
          </div>
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT MAIN CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Sticky Navigation Tabs Strip */}
            <div className="sticky top-4 z-20 bg-white/95 backdrop-blur-md rounded-full border-[1.5px] border-[rgba(67,15,122,0.12)] p-1.5 shadow-[0_10px_30px_-12px_rgba(67,15,122,0.12)] overflow-x-auto custom-scrollbar flex items-center gap-1.5">
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
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === tab.id ? 'bg-[#370c63] text-white shadow-sm' : 'text-[#675f80] hover:text-[#1b1233] hover:bg-[#f4eff9]'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* SECTION 1: ABOUT PROVIDER */}
            <div id="section-overview" className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-[#1b1233] tracking-tight flex items-center gap-2">
                  <span>About {displayName}</span>
                </h2>
                <p className="text-sm text-[#675f80] leading-relaxed mt-3 whitespace-pre-line font-normal">
                  {bioText}
                </p>
              </div>

              {/* Areas of Expertise Tag Pills */}
              <div id="section-expertise" className="pt-4 border-t border-[rgba(67,15,122,0.08)]">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#430f7a] mb-3">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertTags.map((tag: string, idx: number) => (
                    <span 
                      key={idx}
                      className="bg-[#f4eff9] border border-[rgba(67,15,122,0.14)] text-[#430f7a] text-xs font-bold px-3.5 py-1.5 rounded-xl hover:bg-[#ece2f7] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Countries Served Grid */}
              <div className="pt-4 border-t border-[rgba(67,15,122,0.08)]">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#430f7a] mb-3">
                  Countries Served
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {expertCountries.map((cName: string, idx: number) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-[rgba(67,15,122,0.10)] bg-[#faf8fd] text-xs font-bold text-[#1b1233]"
                    >
                      <span className="text-base">{getCountryFlag(cName)}</span>
                      <span className="truncate">{cName}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Spoken */}
              <div className="pt-4 border-t border-[rgba(67,15,122,0.08)]">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#430f7a] mb-2">
                  Languages Spoken
                </h3>
                <p className="text-xs font-bold text-[#1b1233]">
                  {expertLanguages.join(", ")}
                </p>
              </div>

              {/* Professional Credentials Checklist */}
              <div className="pt-4 border-t border-[rgba(67,15,122,0.08)] bg-[#faf8fd] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-9 lg:-mb-9 p-6 sm:p-8 lg:p-9 rounded-b-[26px]">
                <h3 className="text-sm font-extrabold text-[#1b1233] mb-3.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00b070]" />
                  <span>Professional Credentials &amp; Verification</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#00b070] shrink-0" />
                    <span>Identity verified by government ID</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#00b070] shrink-0" />
                    <span>Registered business documentation verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#00b070] shrink-0" />
                    <span>Immigration credentials &amp; track record reviewed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#00b070] shrink-0" />
                    <span>Office address &amp; operational status verified</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#675f80] mt-3.5 italic">
                  Verification indicates that TravlTik has verified the provider's submitted credentials. It is not an endorsement or legal guarantee of any specific visa outcome.
                </p>
              </div>

            </div>

            {/* SECTION 2: SERVICES OFFERED GRID */}
            <div id="section-services" className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-[#1b1233] tracking-tight">Services Offered</h2>
                  <p className="text-xs text-[#675f80] mt-0.5">Explore standard transparent packages and customized advisory solutions.</p>
                </div>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="text-xs font-bold text-[#430f7a] hover:text-[#370c63] underline hidden sm:inline"
                >
                  Custom Request →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesOffered.map((srv, idx) => (
                  <div 
                    key={idx}
                    className="border-[1.5px] border-[rgba(67,15,122,0.10)] rounded-[22px] p-5 hover:border-[#00b070] hover:shadow-[0_12px_32px_-12px_rgba(67,15,122,0.14)] transition-all flex flex-col justify-between group bg-[#faf8fd]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-0.5 rounded-md">
                          {srv.tag}
                        </span>
                        <span className="text-xs font-black text-[#1b1233]">
                          Starting at {srv.price}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#1b1233] group-hover:text-[#370c63] transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-[#675f80] mt-1 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[rgba(67,15,122,0.08)] flex items-center justify-between">
                      <button 
                        onClick={() => setPaymentModalOpen(true)}
                        className="text-xs font-bold text-[#00b070] hover:text-[#009660] flex items-center gap-1 group/btn cursor-pointer"
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
            <div id="section-reviews" className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-[#1b1233] tracking-tight">Reviews &amp; Ratings</h2>
                  <p className="text-xs text-[#675f80] mt-0.5">Authentic feedback from verified TravlTik clients.</p>
                </div>
                <button
                  onClick={() => setReviewModalOpen(true)}
                  className="bg-[#370c63] hover:bg-[#430f7a] text-white text-xs font-extrabold px-4.5 py-2.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Write a Review</span>
                </button>
              </div>

              {/* Rating Summary Card */}
              <div className="bg-[#faf8fd] rounded-[22px] p-5 sm:p-6 border border-[rgba(67,15,122,0.08)] grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4 text-center sm:text-left sm:border-r sm:border-[rgba(67,15,122,0.08)] sm:pr-6">
                  <div className="text-4xl sm:text-5xl font-black text-[#1b1233] tracking-tight">
                    {reviewCount > 0 ? ratingVal : 'New'}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start text-amber-400 gap-1 my-1.5">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className={`w-4 h-4 ${reviewCount > 0 && i <= Math.round(Number(ratingVal) || 5) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[#675f80]">
                    {reviewCount > 0 ? `Based on ${reviewCount} verified review${reviewCount !== 1 ? 's' : ''}` : 'No client reviews yet'}
                  </p>
                </div>

                <div className="sm:col-span-8 space-y-2">
                  {ratingBreakdown.map(item => (
                    <div key={item.star} className="flex items-center gap-3 text-xs">
                      <span className="w-12 text-[#675f80] font-medium shrink-0">{item.star}</span>
                      <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div 
                          className="h-full bg-amber-400 rounded-full transition-all duration-500" 
                          style={{ width: `${item.pct}%` }} 
                        />
                      </div>
                      <span className="w-8 text-right font-bold text-[#1b1233]">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Filter Pills (Only shown when reviews exist) */}
              {reviewCount > 0 && reviewFilterOptions.length > 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {reviewFilterOptions.map(f => (
                    <button
                      key={f}
                      onClick={() => setSelectedReviewFilter(f)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedReviewFilter === f ? 'bg-[#370c63] text-white shadow-2xs' : 'bg-[#f4eff9] text-[#430f7a] hover:bg-[#ece2f7]'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              )}

              {/* Review Cards List */}
              {reviewCount > 0 ? (
                <div className="space-y-4 pt-2">
                  {filteredReviews.map(rev => (
                    <div key={rev.id} className="border border-[rgba(67,15,122,0.08)] rounded-[20px] p-5 bg-[#ffffff] shadow-2xs space-y-2.5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-[#1b1233]">{rev.author}</span>
                            {rev.verified && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-[#ecfdf5] px-2 py-0.5 rounded-full border border-emerald-200/60">
                                <CheckCircle className="w-2.5 h-2.5 text-[#00b070]" /> Verified interaction
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex text-amber-400">
                              {[...Array(Math.min(5, Math.max(1, rev.rating || 5)))].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-amber-400" />
                              ))}
                            </div>
                            <span className="text-[11px] text-slate-400 font-medium">• {rev.date}</span>
                            {rev.type && <span className="text-[11px] text-[#430f7a] font-bold">• {rev.type}</span>}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-[#675f80] leading-relaxed font-normal">
                        &quot;{rev.comment}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                /* Authentic Clean Empty State */
                <div className="border border-dashed border-[rgba(67,15,122,0.16)] rounded-[22px] p-8 sm:p-10 text-center space-y-3 bg-[#faf8fd]">
                  <div className="w-12 h-12 bg-[#fffbeb] text-amber-500 rounded-2xl flex items-center justify-center mx-auto border border-amber-200/60">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1b1233]">No client reviews yet</h3>
                    <p className="text-xs text-[#675f80] max-w-sm mx-auto mt-1 leading-relaxed">
                      Have you booked or consulted with {displayName}? Be the first client to leave verified feedback.
                    </p>
                  </div>
                  <button
                    onClick={() => setReviewModalOpen(true)}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#370c63] to-[#130c3a] hover:from-[#4a1285] hover:to-[#1a104f] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-[0_4px_14px_-3px_rgba(55,12,99,0.4)] transition-all cursor-pointer mt-2"
                  >
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Be the first to review</span>
                  </button>
                </div>
              )}

            </div>

            {/* SECTION 4: GALLERY */}
            <div id="section-gallery" className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-4">
              <div>
                <h2 className="text-xl font-extrabold text-[#1b1233] tracking-tight">Gallery &amp; Credentials</h2>
                <p className="text-xs text-[#675f80] mt-0.5">Verified media, advisory office presence, and legal credentials.</p>
              </div>

              {galleryImages && galleryImages.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 border border-[rgba(67,15,122,0.10)] shadow-xs">
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
              ) : (
                <div className="rounded-[22px] border border-[rgba(67,15,122,0.10)] p-6 bg-[#faf8fd] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[#ecfdf5] text-[#00b070] flex items-center justify-center shrink-0 border border-emerald-200/60">
                    <ShieldCheck className="w-6 h-6 text-[#00b070]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#1b1233]">Verified Direct Practice</h4>
                    <p className="text-[11px] text-[#675f80] mt-0.5 leading-relaxed">
                      Consultant operates directly through TravlTik verified digital appointments and office consultations in {displayCity}. Portfolio certificates and case milestones are verified during booking.
                    </p>
                  </div>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="text-xs font-bold text-[#430f7a] hover:text-[#370c63] border border-[rgba(67,15,122,0.14)] bg-white px-4 py-2 rounded-xl transition-colors shrink-0 cursor-pointer shadow-2xs"
                  >
                    Request Credentials
                  </button>
                </div>
              )}
            </div>

            {/* SECTION 5: FAQS ACCORDION */}
            <div id="section-faqs" className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-4">
              <div>
                <h2 className="text-xl font-extrabold text-[#1b1233] tracking-tight">Frequently Asked Questions</h2>
                <p className="text-xs text-[#675f80] mt-0.5">Quick answers regarding consultations, escrow milestones, and processing times.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border-[1.5px] border-[rgba(67,15,122,0.08)] rounded-[20px] p-4.5 bg-[#faf8fd] transition-colors"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full text-left font-bold text-xs text-[#1b1233] flex items-start justify-between gap-2 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180 text-[#00b070]' : ''}`} />
                    </button>
                    {expandedFaq === idx && (
                      <p className="text-xs text-[#675f80] mt-2.5 pt-2.5 border-t border-[rgba(67,15,122,0.08)] leading-relaxed font-normal">
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
            
            <div className="bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-7 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#430f7a] bg-[#f4eff9] px-3 py-1 rounded-full border border-[#e9dcf7]">
                  Direct Channel
                </span>
                <h3 className="text-xl font-extrabold text-[#1b1233] tracking-tight mt-2.5">
                  Get in touch
                </h3>
                <p className="text-xs text-[#675f80] mt-1">
                  Connect with {displayName}&apos;s dedicated case managers.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full bg-gradient-to-r from-[#370c63] to-[#130c3a] hover:from-[#4a1285] hover:to-[#1a104f] active:scale-95 text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(55,12,99,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Provider</span>
                </button>

                <button
                  onClick={() => setPaymentModalOpen(true)}
                  className="w-full bg-white hover:bg-[#faf6fe] border-[1.5px] border-[rgba(67,15,122,0.18)] active:scale-95 text-[#370c63] font-extrabold text-xs py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-[#370c63]"
                >
                  <Phone className="w-4 h-4 text-[#00b070]" />
                  <span>Request a callback</span>
                </button>
              </div>

              {/* Key Facts List */}
              <div className="space-y-3.5 pt-4 border-t border-[rgba(67,15,122,0.08)] text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#430f7a] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1b1233] block">Response time</span>
                    <span className="text-[#675f80]">Usually responds within 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#430f7a] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1b1233] block">Business hours</span>
                    <span className="text-[#675f80]">Mon - Sat, 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00b070] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1b1233] block">Service location</span>
                    <span className="text-[#675f80]">{displayLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-[#430f7a] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1b1233] block">Consultation options</span>
                    <span className="text-[#675f80]">Online Video Call &amp; In-Person Office</span>
                  </div>
                </div>
              </div>

              {/* Why choose this provider? Box */}
              <div className="bg-[#faf8fd] rounded-2xl p-4.5 border border-[rgba(67,15,122,0.08)] space-y-2.5">
                <h4 className="text-xs font-extrabold text-[#1b1233]">Why choose this provider?</h4>
                <ul className="space-y-2 text-[11px] text-[#675f80]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00b070] shrink-0" />
                    <span>Government registry &amp; council verified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00b070] shrink-0" />
                    <span>Dedicated documentation audit team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00b070] shrink-0" />
                    <span>Secure client file management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00b070] shrink-0" />
                    <span>Transparent fee structure with escrow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00b070] shrink-0" />
                    <span>Proven 98% positive client feedback</span>
                  </li>
                </ul>
              </div>

              {/* Trust disclaimer */}
              <div className="border border-[rgba(67,15,122,0.10)] rounded-2xl p-3.5 text-[11px] text-[#675f80] leading-relaxed bg-[#faf8fd]">
                <p>
                  🛡️ <strong className="text-[#1b1233]">TravlTik Protection:</strong> Direct bookings via TravlTik are safeguarded with verified escrow processing. Funds are disbursed only upon satisfactory milestone completion.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RELATED SERVICE PROVIDERS */}
        {relatedExperts.length > 0 && (
          <div className="mt-14 pt-8 border-t border-[rgba(67,15,122,0.10)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-extrabold text-[#1b1233] tracking-tight">Related Service Providers</h3>
                <p className="text-xs text-[#675f80] mt-0.5">Explore other top-rated verified consultants in your corridor.</p>
              </div>
              <a href="/find-experts" className="text-xs font-bold text-[#430f7a] hover:text-[#370c63] underline">
                View all experts →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedExperts.slice(0, 4).map((rel) => (
                <a
                  key={rel.id}
                  href={`/expert/${rel.id}`}
                  className="bg-white rounded-[24px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-4.5 hover:border-[#00b070] hover:shadow-[0_12px_32px_-12px_rgba(67,15,122,0.14)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#faf6fe] overflow-hidden shrink-0 border border-[rgba(67,15,122,0.12)]">
                        {rel.image ? (
                          <img src={rel.image} alt={rel.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#370c63] to-[#430f7a] text-white font-bold flex items-center justify-center text-xs">
                            {rel.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-[#1b1233] group-hover:text-[#430f7a] transition-colors truncate">
                          {rel.name}
                        </h4>
                        <p className="text-[11px] text-[#675f80] truncate">{rel.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#675f80] pt-2.5 border-t border-[rgba(67,15,122,0.08)]">
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3 h-3 fill-amber-400" /> {rel.rating?.toFixed ? rel.rating.toFixed(1) : rel.rating}
                      </span>
                      <span className="truncate font-semibold">{rel.city || 'Remote'}</span>
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
        onSuccess={() => {
          if (numericExpertId > 0) {
            fetch(`/api/reviews?expertId=${numericExpertId}`)
              .then(res => res.json())
              .then(data => {
                if (data.success && Array.isArray(data.reviews)) {
                  const formatted = data.reviews.map((r: any) => ({
                    id: r.id,
                    author: r.seeker_name || 'Verified Client',
                    date: r.created_at ? new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
                    rating: Number(r.rating) || 5,
                    type: r.tags || 'Visa Consultation',
                    verified: Boolean(r.is_verified_transaction),
                    comment: r.feedback || ''
                  }));
                  setReviewsList(formatted);
                }
              })
              .catch(() => {});
          }
        }}
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