import React, { useState, useEffect, useMemo } from 'react';
import { 
  Star, MapPin, CheckCircle, ShieldCheck, Clock, Award, 
  Building2, Users, Globe, Phone, Mail, ChevronRight, 
  ChevronDown, ExternalLink, MessageSquare, ArrowRight, 
  Share2, Bookmark, Check, Calendar, ArrowLeft, Heart,
  Sparkles, FileText, AlertCircle, MessageCircle, Tag,
  Zap, Plane, Flame, Percent, FileCheck, RotateCcw, Video, HelpCircle
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

  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'classifieds' | 'expertise' | 'reviews' | 'gallery' | 'faqs'>('overview');
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

  // Verified Corridor Classified Deals & Special Offers
  const platformCorridorOffers = useMemo(() => {
    return [
      {
        id: 'cl-greece-cricket',
        title: 'Greece Cricket Tour — Official Europe T20',
        sub: 'Official Europe Series · Athens & Corfu · Risingat Sports Partner with Schengen Visa support.',
        badge: '🏏 FEATURED SPORT TOUR',
        badgeColor: 'bg-[#430f7a] text-white',
        price: '₹2,50,000',
        priceSub: 'All-inclusive · Visa + Flights + 4-Star Stay',
        tag1: 'Schengen Visa',
        tag2: '3x T20 Series',
        tag3: 'Match Kit Included',
        image: '/images/greece-cricket-card.png',
        href: '/tours?category=sports&country=greece',
        popular: true
      },
      {
        id: 'cl-canada-drive',
        title: 'Canada 2026 Official Job & PR Drive',
        sub: '19 In-Demand Job Roles across Healthcare, Tech & Skilled Trades with direct LMIA work permits.',
        badge: '🍁 OFFICIAL DRIVE 2026',
        badgeColor: 'bg-black text-white',
        price: 'CAD $3,200/mo',
        priceSub: 'Direct Employer Hiring · 100% Escrow Hold',
        tag1: 'LMIA Verified',
        tag2: '987 Seats',
        tag3: 'PR Fast-Track',
        image: 'https://images.unsplash.com/photo-1517935703635-271907604a25?w=800&h=1200&fit=crop&q=90',
        href: '/jobs#international-job-drives-2026',
        popular: true
      },
      {
        id: 'cl-forex-card',
        title: 'Multi-Currency International Forex Card',
        sub: 'Zero markup fees, instant digital activation, accepted in 193+ countries for students and travelers.',
        badge: 'ZERO CONVENIENCE FEE',
        badgeColor: 'bg-[#581db5] text-white',
        price: '₹0 Free Card',
        priceSub: 'Instant Issue · Zero Loading Fee',
        tag1: 'Forex Card',
        tag2: 'Save up to ₹3,000',
        tag3: 'Instant App',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=1200&fit=crop&q=90',
        href: '/#classifieds',
        popular: false
      },
      {
        id: 'cl-dubai-special',
        title: 'Dubai 5D/4N Luxury Tour & Visa Combo',
        sub: 'Desert Safari, Marina Dhow Cruise, 4-Star Hotel Stay & Guaranteed 60-day Express E-Visa.',
        badge: 'FLAT ₹34,500 DEAL',
        badgeColor: 'bg-black text-white',
        price: '₹34,500',
        priceSub: 'Complete Family Combo · 100% Escrow',
        tag1: 'Holiday Combo',
        tag2: 'Immediate Batch',
        tag3: '4-Star Stay',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=1200&fit=crop&q=90',
        href: '/tours?destination=Dubai',
        popular: false
      }
    ];
  }, []);

  // Dynamic Classified Ads: expert-specific ads if present, or verified corridor deals
  const [displayedClassifieds, setDisplayedClassifieds] = useState<any[]>(() => {
    if (expert.classifieds && Array.isArray(expert.classifieds) && expert.classifieds.length > 0) {
      return expert.classifieds;
    }
    return [
      {
        id: 'cl-greece-cricket',
        title: 'Greece Cricket Tour — Official Europe T20',
        sub: 'Official Europe Series · Athens & Corfu · Risingat Sports Partner with Schengen Visa support.',
        badge: '🏏 FEATURED SPORT TOUR',
        badgeColor: 'bg-[#430f7a] text-white',
        price: '₹2,50,000',
        priceSub: 'All-inclusive · Visa + Flights + 4-Star Stay',
        tag1: 'Schengen Visa',
        tag2: '3x T20 Series',
        tag3: 'Match Kit Included',
        image: '/images/greece-cricket-card.png',
        href: '/tours?category=sports&country=greece',
        popular: true
      },
      {
        id: 'cl-canada-drive',
        title: 'Canada 2026 Official Job & PR Drive',
        sub: '19 In-Demand Job Roles across Healthcare, Tech & Skilled Trades with direct LMIA work permits.',
        badge: '🍁 OFFICIAL DRIVE 2026',
        badgeColor: 'bg-black text-white',
        price: 'CAD $3,200/mo',
        priceSub: 'Direct Employer Hiring · 100% Escrow Hold',
        tag1: 'LMIA Verified',
        tag2: '987 Seats',
        tag3: 'PR Fast-Track',
        image: 'https://images.unsplash.com/photo-1517935703635-271907604a25?w=800&h=1200&fit=crop&q=90',
        href: '/jobs#international-job-drives-2026',
        popular: true
      },
      {
        id: 'cl-forex-card',
        title: 'Multi-Currency International Forex Card',
        sub: 'Zero markup fees, instant digital activation, accepted in 193+ countries for students and travelers.',
        badge: 'ZERO CONVENIENCE FEE',
        badgeColor: 'bg-[#581db5] text-white',
        price: '₹0 Free Card',
        priceSub: 'Instant Issue · Zero Loading Fee',
        tag1: 'Forex Card',
        tag2: 'Save up to ₹3,000',
        tag3: 'Instant App',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=1200&fit=crop&q=90',
        href: '/#classifieds',
        popular: false
      },
      {
        id: 'cl-dubai-special',
        title: 'Dubai 5D/4N Luxury Tour & Visa Combo',
        sub: 'Desert Safari, Marina Dhow Cruise, 4-Star Hotel Stay & Guaranteed 60-day Express E-Visa.',
        badge: 'FLAT ₹34,500 DEAL',
        badgeColor: 'bg-black text-white',
        price: '₹34,500',
        priceSub: 'Complete Family Combo · 100% Escrow',
        tag1: 'Holiday Combo',
        tag2: 'Immediate Batch',
        tag3: '4-Star Stay',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=1200&fit=crop&q=90',
        href: '/tours?destination=Dubai',
        popular: false
      }
    ];
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("active_classified_ads");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const expName = displayName.toLowerCase().trim();
          const expEmail = (expert.email || '').toLowerCase().trim();
          const expId = String(expert.id || '').toLowerCase().trim();
          const matched = parsed.filter((ad: any) => {
            const comp = (ad.company || '').toLowerCase().trim();
            const em = (ad.expert_email || '').toLowerCase().trim();
            const aid = String(ad.expert_id || '').toLowerCase().trim();
            return (aid && aid === expId) || (comp && (expName.includes(comp) || comp.includes(expName))) || (em && em === expEmail);
          });

          if (matched.length > 0) {
            const mapped = matched.map((ad: any) => ({
              id: ad.id || `ad-${Date.now()}`,
              title: ad.title,
              sub: ad.description || `Special verified ad listing published directly by ${displayName}.`,
              badge: ad.type === 'premium' ? '⚡ PREMIUM VERIFIED' : `✓ POSTED BY ${displayName.toUpperCase()}`,
              badgeColor: ad.type === 'premium' ? 'bg-[#581db5] text-white' : 'bg-black text-white',
              price: ad.price || 'Free Consultation',
              priceSub: ad.validTo ? `Valid until ${ad.validTo}` : 'Direct Verification',
              tag1: ad.category || 'Classified Ad',
              tag2: ad.country || 'Global Mobility',
              tag3: 'Direct Expert Deal',
              image: ad.cover_photo || (ad.images && ad.images[0]) || '/images/greece-cricket-card.png',
              href: `/classifieds/${ad.id}`,
              whatsapp: ad.contactPhone,
              isDirectByExpert: true,
              popular: true
            }));
            const baseClassifieds = (expert.classifieds && Array.isArray(expert.classifieds) && expert.classifieds.length > 0) ? expert.classifieds : platformCorridorOffers;
            setDisplayedClassifieds([...mapped, ...baseClassifieds.filter((c: any) => !mapped.some(m => m.title === c.title))]);
            return;
          }
        }
      }
    } catch(err) {
      console.error(err);
    }
    const fallback = (expert.classifieds && Array.isArray(expert.classifieds) && expert.classifieds.length > 0) ? expert.classifieds : platformCorridorOffers;
    setDisplayedClassifieds(fallback);
  }, [displayName, expert.email, expert.id, expert.classifieds, platformCorridorOffers]);

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
      category: 'DOCUMENTATION AUDIT',
      badge: 'Checklist',
      q: 'What documents do I need to prepare for our initial consultation?',
      a: `To make your preliminary case evaluation maximally effective, please keep the following ready:
• Valid Passport (clear digital copy of bio-data pages and current travel stamps)
• Updated Resume / CV highlighting your work history and education (for work & PR routes)
• Academic transcripts and degree certificates
• Language proficiency scores (IELTS / PTE / TOEFL / CELPIP) if already completed
• Prior Refusal Letters (if applicable), so ${displayName} can dissect the exact consular refusal codes and formulate counter-arguments.`
    },
    {
      category: 'ESCROW & MILESTONE HOLD',
      badge: '100% Protected',
      q: 'How does TravlTik Milestone Escrow protect my consultation & filing fees?',
      a: 'Your payments are deposited securely into TravlTik Milestone Escrow and never released upfront. Funds remain safeguarded in the platform escrow vault and are disbursed to the consultant only after you verify and approve each completed milestone deliverable (such as document audit sign-off, application draft review, or final embassy portal submission proof).'
    },
    {
      category: 'PROCESSING TIMELINES',
      badge: 'Fast Turnaround',
      q: 'What is the expected timeline from initial file audit to embassy submission?',
      a: 'Preliminary document eligibility and deficiency audits take 24 to 48 hours. Comprehensive dossier preparation—including statement of purpose (SOP) drafting, sponsor verification, and embassy portal draft readiness—is typically completed within 7 to 14 business days, aligned precisely with upcoming intake cycles.'
    },
    {
      category: 'REFUSAL APPEALS',
      badge: 'GCMS Audit',
      q: 'Can you assist if my visa application was previously rejected?',
      a: `Yes, ${displayName} has deep experience in handling refusal remedies and judicial reconsideration. We retrieve your official GCMS / CAIPS case notes from immigration authorities to pinpoint the officer's exact refusal grounds (e.g., Section 214(b) immigrant intent, ties to home country, or financial ambiguity) and re-file with ironclad counter-evidence.`
    },
    {
      category: 'REMOTE CONSULTATION',
      badge: 'HD Video Call',
      q: 'Can I consult remotely if I live in another city or outside India?',
      a: `Absolutely! Over 75% of our clients consult via secure Google Meet or Zoom video sessions. You can securely upload all documentation to our encrypted portal, receive real-time screen-share walkthroughs of government application forms, and track every stage in your client dashboard.`
    },
    {
      category: 'TRANSPARENCY & CODE OF ETHICS',
      badge: 'Code of Ethics',
      q: 'Do you guarantee 100% visa approval?',
      a: 'Under official regulatory codes of ethics, no registered immigration consultant or attorney can legally guarantee a visa grant, as final statutory discretion rests exclusively with sovereign consular officers. What we guarantee is a 100% error-free legal dossier strictly compliant with ministerial regulations, giving your application the highest statistical probability of approval.'
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
    const targetId = `section-${tabKey}`;
    const el = document.getElementById(targetId) || document.getElementById(tabKey);
    if (el) {
      // Check if inside modal container (overflow-y-auto)
      const modalContainer = el.closest('.overflow-y-auto') as HTMLElement | null;
      if (modalContainer) {
        const containerRect = modalContainer.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const relativeTop = elRect.top - containerRect.top + modalContainer.scrollTop;
        modalContainer.scrollTo({
          top: Math.max(0, relativeTop - 85),
          behavior: 'smooth'
        });
      } else {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    } else if (tabKey === 'classifieds') {
      const alt = document.getElementById('section-classifieds') || document.getElementById('classifieds');
      if (alt) {
        alt.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = '/tours';
      }
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
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br from-[#1b1233] via-[#370c63] to-[#430f7a] text-white flex flex-col items-center justify-center font-bold font-sans ${expert.image && !expert.image.includes('unsplash') ? 'hidden' : ''}`}>
                      <span className="text-xl tracking-tight leading-none">
                        {displayName.split(' ').slice(0, 2).map((w: string) => w.charAt(0).toUpperCase()).join('')}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider text-purple-200 mt-1 font-extrabold">VERIFIED</span>
                    </div>
                  </div>

                  {/* Title & Badges */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="bg-[#f4eff9] text-[#1b1233] border border-[rgba(55,12,99,0.14)] text-[11px] font-extrabold px-3 py-0.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1b1233]" /> TravlTik Verified
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
                        <MapPin className="w-3.5 h-3.5 text-[#1b1233]" /> {displayLocation}
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

                      <div className="bg-[#f4eff9] border border-[rgba(55,12,99,0.14)] text-[#1b1233] font-bold px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-2xs">
                        <Clock className="w-3.5 h-3.5 text-[#1b1233]" />
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
                  className="w-full sm:w-auto bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#4f118c] hover:via-[#6c22c3] hover:to-[#892dd8] active:scale-95 text-white font-extrabold text-xs px-7 py-3.5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(88,29,181,0.5)] hover:shadow-[0_12px_24px_-6px_rgba(88,29,181,0.65)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Provider</span>
                </button>

                <button
                  onClick={() => setPaymentModalOpen(true)}
                  className="w-full sm:w-auto bg-white hover:bg-[#faf6fe] border-[1.5px] border-[rgba(88,29,181,0.22)] text-[#581db5] hover:text-[#430f7a] font-extrabold text-xs px-6 py-3.5 rounded-2xl shadow-2xs hover:border-[#581db5] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#581db5]" />
                  <span>Request a Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Signature TravlTik Luxury Violet & Emerald Banner */}
            <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full overflow-hidden bg-gradient-to-br from-[#2a084e] via-[#430f7a] to-[#581db5] flex items-center justify-center p-8">
              {/* Aerodynamic flight trail & emerald glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#7525ca]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#7525ca]/45 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#6c22c3]/25 rounded-full blur-3xl pointer-events-none" />
              
              {/* Subtle supersonic trail SVG motif */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 400 300" fill="none">
                <path d="M-50,280 Q150,150 420,40" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeDasharray="6 6" />
                <path d="M-20,290 Q170,170 450,60" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 8" />
              </svg>

              <div className="relative z-10 text-center text-white px-4 space-y-3.5">
                <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>TRAVLTIK VERIFIED · ESCROW BACKED</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug drop-shadow-sm font-sans">
                  “Your Global Journey, <br />
                  <span className="bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
                    Supercharged by Real Experts
                  </span>”
                </h3>

                <p className="text-xs text-purple-100/90 max-w-xs mx-auto leading-relaxed font-medium">
                  {expert.isVerified ? 'Government-registered immigration advisory & audit filing with 100% milestone escrow hold.' : 'Verified direct immigration counsel and visa filing guidance.'}
                </p>

                <div className="pt-2 flex items-center justify-center gap-3 text-[11px] text-purple-200/90 font-bold">
                  <span className="flex items-center gap-1 text-white">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Escrow Protection
                  </span>
                  <span>•</span>
                  <span>Direct Milestone Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TOP STICKY NAVIGATION TABS STRIP (Full Width, Floating Glassmorphism - Moved UP as Requested) */}
        <div className="sticky top-2 sm:top-4 z-30 mb-8 bg-white/95 backdrop-blur-xl rounded-full border-[1.5px] border-[rgba(55,12,99,0.12)] p-1.5 shadow-[0_12px_36px_-10px_rgba(55,12,99,0.14),0_2px_6px_rgba(0,0,0,0.02)] overflow-x-auto custom-scrollbar flex items-center justify-start sm:justify-center gap-1.5 transition-all">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'services', label: 'Services' },
            { id: 'classifieds', label: 'Classifieds', badge: 'NEW' },
            { id: 'expertise', label: 'Areas of Expertise' },
            { id: 'reviews', label: `Reviews (${reviewCount})` },
            { id: 'gallery', label: 'Gallery' },
            { id: 'faqs', label: 'FAQs' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection(tab.id);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 select-none ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] text-white shadow-[0_4px_14px_rgba(88,29,181,0.35)] scale-[1.02]'
                  : 'text-[#675f80] hover:text-[#1b1233] hover:bg-[#f4eff9]'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded-full font-black ${
                  activeTab === tab.id ? 'bg-black text-white' : 'bg-[#f4eff9] text-[#1b1233] border border-[rgba(55,12,99,0.14)]'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
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
              <div className="flex items-center justify-center gap-1.5 text-[#1b1233] font-black text-xl">
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
              <div className="flex items-center justify-center gap-1.5 text-[#1b1233] font-black text-xl">
                <Clock className="w-4 h-4" />
                <span className="text-[#1b1233]">Direct</span>
              </div>
              <p className="text-[11px] font-bold text-[#675f80] uppercase tracking-wider mt-1">Consultation Access</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4 col-span-2 sm:col-span-1">
              <div className="flex items-center justify-center gap-1.5 text-[#370c63] font-black text-xl">
                <Globe className="w-4 h-4 text-[#1b1233]" />
                <span className="text-[#1b1233]">{expertCountries.length}+</span>
              </div>
              <p className="text-[11px] font-bold text-[#675f80] uppercase tracking-wider mt-1">Countries Served</p>
            </div>

          </div>

          <div className="mt-4 pt-3.5 border-t border-[rgba(67,15,122,0.08)] flex items-center justify-center gap-2 text-[11px] text-[#675f80] text-center">
            <AlertCircle className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
            <span>Provider-reported metrics are verified via platform reviews &amp; audited documents. Official visa approval decisions rest solely with government embassies.</span>
          </div>
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT MAIN CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SECTION 1: ABOUT PROVIDER */}
            <div id="section-overview" className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-[#1b1233] tracking-tight flex items-center gap-2">
                  <span>About {displayName}</span>
                </h2>
                <p className="text-sm text-[#675f80] leading-relaxed mt-3 whitespace-pre-line font-normal">
                  {bioText}
                </p>
              </div>

              {/* Areas of Expertise Tag Pills */}
              <div id="section-expertise" className="scroll-mt-24 sm:scroll-mt-28 pt-4 border-t border-[rgba(67,15,122,0.08)]">
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
                  <ShieldCheck className="w-4 h-4 text-[#1b1233]" />
                  <span>Professional Credentials &amp; Verification</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#1b1233] shrink-0" />
                    <span>Identity verified by government ID</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#1b1233] shrink-0" />
                    <span>Registered business documentation verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#1b1233] shrink-0" />
                    <span>Immigration credentials &amp; track record reviewed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1b1233]">
                    <CheckCircle className="w-4 h-4 text-[#1b1233] shrink-0" />
                    <span>Office address &amp; operational status verified</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#675f80] mt-3.5 italic">
                  Verification indicates that TravlTik has verified the provider's submitted credentials. It is not an endorsement or legal guarantee of any specific visa outcome.
                </p>
              </div>

            </div>

            {/* SECTION 2: SERVICES OFFERED GRID */}
            <div id="section-services" className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
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
                    className="border-[1.5px] border-[rgba(67,15,122,0.10)] rounded-[22px] p-5 hover:border-[#1b1233] hover:shadow-[0_12px_32px_-12px_rgba(67,15,122,0.14)] transition-all flex flex-col justify-between group bg-[#faf8fd]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold text-[#1b1233] bg-[#f4eff9] border border-[rgba(55,12,99,0.12)] px-2.5 py-0.5 rounded-md">
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
                        className="text-xs font-bold text-[#370c63] hover:text-[#4a1285] flex items-center gap-1 group/btn cursor-pointer"
                      >
                        <span>Book this package</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: CLASSIFIEDS & SPECIAL DEALS (PERMANENTLY RENDERED IN DOM) */}
            <div id="section-classifieds" className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-[28px] border-[1.5px] border-[rgba(55,12,99,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(55,12,99,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6 relative overflow-hidden">
              {/* Subtle brand glow accent */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-black/10 via-[#370c63]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#1b1233] bg-[#f4eff9] border border-[rgba(55,12,99,0.14)] px-3 py-0.5 rounded-full shadow-2xs">
                      <Zap className="w-3 h-3 text-[#1b1233]" /> Verified Classified Deals
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">• Direct Partner Batches</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1b1233] tracking-tight flex items-center gap-2">
                    <span>Classifieds &amp; Special Offers</span>
                  </h2>
                  <p className="text-xs text-[#675f80] mt-0.5 leading-relaxed">
                    Exclusive group tours, fast-track work routes, and verified relocation packages handled directly with {displayName}.
                  </p>
                </div>
                
                <a 
                  href="/tours" 
                  className="text-xs font-bold text-[#370c63] hover:text-[#1b1233] flex items-center gap-1 transition-colors self-start sm:self-auto shrink-0 bg-[#f4eff9] hover:bg-[#ece2f7] px-3.5 py-1.5 rounded-xl border border-[rgba(55,12,99,0.12)]"
                >
                  <span>Explore all classifieds</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Classifieds Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {displayedClassifieds.map((item) => (
                  <div 
                    key={item.id}
                    className="group border-[1.5px] border-[rgba(55,12,99,0.10)] rounded-[24px] overflow-hidden bg-[#ffffff] hover:border-[#1b1233] hover:shadow-[0_16px_36px_-12px_rgba(55,12,99,0.16)] transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Media Header */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/cricket_ad.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1233]/90 via-[#1b1233]/30 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm ${item.badgeColor || 'bg-black text-white'}`}>
                          {item.badge}
                        </span>
                        {item.popular && (
                          <span className="text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#370c63] shadow-sm flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-500" /> Spotlight
                          </span>
                        )}
                      </div>

                      {/* Price Bottom Pill */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                        <div>
                          <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Starting from</div>
                          <div className="text-xl font-black text-white tracking-tight">{item.price}</div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-200 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/25">
                          100% Escrow
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {item.isDirectByExpert && (
                          <div className="mb-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#1b1233] bg-[#f4eff9] border border-[rgba(55,12,99,0.14)] px-2 py-0.5 rounded-full">
                              ✓ Posted by {displayName}
                            </span>
                          </div>
                        )}
                        <h3 className="text-base font-extrabold text-[#1b1233] group-hover:text-[#370c63] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#675f80] mt-1.5 leading-relaxed line-clamp-2">
                          {item.sub}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[rgba(55,12,99,0.06)]">
                          <span className="text-[10px] font-bold text-[#370c63] bg-[#f4eff9] border border-[rgba(55,12,99,0.12)] px-2.5 py-0.5 rounded-md">
                            {item.tag1}
                          </span>
                          <span className="text-[10px] font-bold text-[#1b1233] bg-[#f4eff9] border border-[rgba(55,12,99,0.12)] px-2.5 py-0.5 rounded-md">
                            {item.tag2}
                          </span>
                          <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                            {item.tag3}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 border-t border-[rgba(55,12,99,0.08)] flex items-center justify-between gap-2">
                        <a 
                          href={item.href}
                          className="flex-1 bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#4f118c] hover:via-[#6c22c3] hover:to-[#892dd8] text-white font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-[0_4px_12px_rgba(88,29,181,0.25)] flex items-center justify-center gap-1.5 transition-all text-center"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                        {item.whatsapp ? (
                          <a
                            href={`https://wa.me/${String(item.whatsapp).replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${displayName}! I am inquiring about your classified ad: ${item.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-[#faf6fe] border-[1.5px] border-[rgba(88,29,181,0.2)] hover:border-[#581db5] text-[#581db5] font-bold text-xs py-2.5 px-3.5 rounded-xl transition-all flex items-center gap-1 shadow-2xs shrink-0"
                            title="Chat on WhatsApp"
                          >
                            <span>WhatsApp</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setQuoteModalOpen(true)}
                            className="bg-white hover:bg-[#faf6fe] border-[1.5px] border-[rgba(88,29,181,0.18)] hover:border-[#581db5] text-[#581db5] font-bold text-xs py-2.5 px-3.5 rounded-xl transition-all cursor-pointer shrink-0"
                            title={`Inquire about ${item.title}`}
                          >
                            Inquire
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: REVIEWS & RATINGS SCORECARD */}
            <div id="section-reviews" className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-[#1b1233] tracking-tight">Reviews &amp; Ratings</h2>
                  <p className="text-xs text-[#675f80] mt-0.5">Authentic feedback from verified TravlTik clients.</p>
                </div>
                <button
                  onClick={() => setReviewModalOpen(true)}
                  className="bg-black hover:bg-[#1b1233] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 self-start sm:self-auto cursor-pointer border border-white/20 whitespace-nowrap shrink-0 active:scale-95"
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                  <span className="whitespace-nowrap">Write a Review</span>
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
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1b1233] bg-[#f4eff9] px-2 py-0.5 rounded-full border border-[rgba(55,12,99,0.14)]">
                                <CheckCircle className="w-2.5 h-2.5 text-[#1b1233]" /> Verified interaction
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
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#4f118c] hover:via-[#6c22c3] hover:to-[#892dd8] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-[0_4px_14px_-3px_rgba(88,29,181,0.4)] transition-all cursor-pointer mt-2"
                  >
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Be the first to review</span>
                  </button>
                </div>
              )}

            </div>

            {/* SECTION 4: GALLERY & CREDENTIALS */}
            <div id="section-gallery" className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(67,15,122,0.08)] pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#1b1233] bg-[#f4eff9] border border-[rgba(55,12,99,0.14)] px-3 py-0.5 rounded-full mb-1 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1b1233]" /> VERIFIED PRACTICE &amp; ACCREDITATION
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1b1233] tracking-tight">Gallery &amp; Official Credentials</h2>
                  <p className="text-xs text-[#675f80] mt-0.5">Government-registered legal standing, TravlTik escrow protection seal, and verified chambers.</p>
                </div>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="text-xs font-bold text-[#430f7a] hover:text-black border border-[rgba(67,15,122,0.14)] bg-white hover:bg-[#faf8fd] px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer shadow-2xs self-start sm:self-auto"
                >
                  Request Full Portfolio
                </button>
              </div>

              {galleryImages && galleryImages.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 border border-[rgba(67,15,122,0.12)] shadow-xs">
                      <img 
                        src={img.url} 
                        alt={img.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-xs font-bold text-white drop-shadow-sm">{img.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Authentic 3-Card Verified Credential Showcase */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-[22px] border-[1.5px] border-[rgba(67,15,122,0.10)] p-5 bg-[#faf8fd] hover:border-[#1b1233] transition-colors flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#f4eff9] text-[#1b1233] flex items-center justify-center border border-purple-200/60 shadow-2xs">
                        <ShieldCheck className="w-5 h-5 text-[#1b1233]" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#1b1233] bg-white border border-[rgba(55,12,99,0.14)] px-2 py-0.5 rounded-full">
                        ACTIVE ID
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#1b1233] uppercase tracking-wide">Government Regulatory Registration</h4>
                      <p className="text-[11px] font-bold text-[#430f7a] mt-1">
                        {expert.govReg ? `Council Reg: ${expert.govReg}` : 'Verified Immigration Registry'}
                      </p>
                      <p className="text-[11px] text-[#675f80] mt-1 leading-relaxed">
                        Authorized practitioner with active standing for verified consular representation.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[22px] border-[1.5px] border-[rgba(67,15,122,0.10)] p-5 bg-[#faf8fd] hover:border-[#1b1233] transition-colors flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#f4eff9] text-[#430f7a] flex items-center justify-center border border-purple-200/60 shadow-2xs">
                        <Award className="w-5 h-5 text-[#430f7a]" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#430f7a] bg-[#f4eff9] border border-[#e9ddf6] px-2 py-0.5 rounded-full">
                        ESCROW VAULT
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#1b1233] uppercase tracking-wide">100% Milestone Escrow Guarantee</h4>
                      <p className="text-[11px] font-bold text-[#1b1233] mt-1">
                        Zero Upfront Disbursement
                      </p>
                      <p className="text-[11px] text-[#675f80] mt-1 leading-relaxed">
                        Funds are released strictly upon your sign-off for completed visa deliverables.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[22px] border-[1.5px] border-[rgba(67,15,122,0.10)] p-5 bg-[#faf8fd] hover:border-[#1b1233] transition-colors flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center border border-sky-200/60 shadow-2xs">
                        <Building2 className="w-5 h-5 text-[#0284c7]" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#0369a1] bg-[#f0f9ff] border border-sky-200 px-2 py-0.5 rounded-full">
                        VERIFIED OFFICE
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#1b1233] uppercase tracking-wide">Chambers &amp; Remote Portal</h4>
                      <p className="text-[11px] font-bold text-[#1b1233] mt-1">
                        {displayLocation}
                      </p>
                      <p className="text-[11px] text-[#675f80] mt-1 leading-relaxed">
                        Available for both in-person consultations and encrypted HD virtual meetings.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SECTION 5: FAQS ACCORDION (SINGLE-COLUMN LUXURY ACCORDION - NO SIBLING STRETCHING) */}
            <div id="section-faqs" className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-[28px] border-[1.5px] border-[rgba(67,15,122,0.12)] p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_-18px_rgba(67,15,122,0.12),0_2px_6px_rgba(0,0,0,0.02)] space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(67,15,122,0.08)] pb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#1b1233] bg-[#f4eff9] border border-[rgba(55,12,99,0.12)] px-3 py-0.5 rounded-full mb-1.5 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1b1233]" /> VERIFIED CONSULTATION STANDARDS
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1b1233] tracking-tight">Frequently Asked Questions</h2>
                  <p className="text-xs text-[#675f80] mt-0.5">Everything you need to know about working with {displayName} and TravlTik Escrow.</p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="text-[11px] font-bold text-[#430f7a] bg-[#f4eff9] border border-[rgba(67,15,122,0.12)] px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs">
                    <Clock className="w-3.5 h-3.5 text-[#1b1233]" /> 2-Hour Response SLA
                  </span>
                </div>
              </div>

              {/* Stacked Single-Column Accordion */}
              <div className="space-y-3.5 pt-1">
                {faqs.map((faq, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className={`border-[1.5px] rounded-[22px] transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? 'border-[#1b1233] bg-gradient-to-r from-white via-[#faf9fc] to-[#f5f2fb] shadow-[0_8px_24px_-8px_rgba(27,18,51,0.15)]' 
                          : 'border-[rgba(67,15,122,0.10)] bg-[#ffffff] hover:border-[rgba(67,15,122,0.25)] hover:bg-[#faf8fd]'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                        className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer select-none group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                              isOpen 
                                ? 'bg-[#1b1233] text-white shadow-xs' 
                                : 'bg-[#f4eff9] text-[#430f7a] border border-[rgba(67,15,122,0.10)] group-hover:bg-[#ebe0f8]'
                            }`}>
                              {faq.category}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">
                              • {faq.badge}
                            </span>
                          </div>
                          <h3 className={`text-sm sm:text-[15px] font-extrabold tracking-tight transition-colors ${
                            isOpen ? 'text-[#1b1233]' : 'text-[#1b1233] group-hover:text-[#430f7a]'
                          }`}>
                            {faq.q}
                          </h3>
                        </div>

                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-1 ${
                          isOpen 
                            ? 'bg-[#1b1233] text-white rotate-180 shadow-[0_4px_12px_rgba(27,18,51,0.35)]' 
                            : 'bg-[#f4eff9] text-[#430f7a] group-hover:bg-[#ebe0f8]'
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs text-[#524b6e] leading-relaxed font-medium border-t border-[rgba(27,18,51,0.10)] bg-white/70">
                          <p className="whitespace-pre-line mt-2 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Direct Help / Consultation Callout Card (Black Accent Like Logo) */}
              <div className="rounded-[24px] bg-gradient-to-br from-[#0c0517] via-[#1a0831] to-[#2b0c50] p-6 text-white relative overflow-hidden mt-6 shadow-[0_16px_40px_-10px_rgba(12,5,23,0.6)] border border-white/10">
                <div className="absolute -top-12 -right-12 w-56 h-56 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-white bg-white/15 px-3 py-1 rounded-full border border-white/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-white" /> 1-ON-1 CONFIDENTIAL ASSESSMENT
                    </div>
                    <h4 className="text-base sm:text-lg font-black tracking-tight text-white">
                      Still have questions about your specific profile?
                    </h4>
                    <p className="text-xs text-purple-100/90 max-w-md leading-relaxed">
                      Consult directly with {displayName}. Review eligible pathways, discuss consular requirements, and get an escrow-protected roadmap.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full sm:w-auto bg-black hover:bg-[#1b1233] active:scale-95 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl border border-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-white" />
                      <span>Contact {displayName.split(' ')[0]}</span>
                    </button>
                  </div>
                </div>
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
                  className="w-full bg-gradient-to-r from-[#430f7a] via-[#581db5] to-[#6c22c3] hover:from-[#4f118c] hover:via-[#6c22c3] hover:to-[#892dd8] active:scale-95 text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(88,29,181,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Provider</span>
                </button>

                <button
                  onClick={() => setPaymentModalOpen(true)}
                  className="w-full bg-white hover:bg-[#faf6fe] border-[1.5px] border-[rgba(88,29,181,0.22)] active:scale-95 text-[#581db5] hover:text-[#430f7a] font-extrabold text-xs py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-[#581db5]"
                >
                  <Phone className="w-4 h-4 text-[#581db5]" />
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
                  <MapPin className="w-4 h-4 text-[#1b1233] shrink-0 mt-0.5" />
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
              <div className="bg-[#faf8fd] rounded-2xl p-5 border border-[rgba(67,15,122,0.08)] space-y-2.5">
                <h4 className="text-xs font-extrabold text-[#1b1233]">Why choose this provider?</h4>
                <ul className="space-y-2 text-[11px] text-[#675f80]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
                    <span>Government registry &amp; council verified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
                    <span>Dedicated documentation audit team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
                    <span>Secure client file management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
                    <span>Transparent fee structure with escrow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1b1233] shrink-0" />
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

        {/* RELATED SERVICE PROVIDERS (SHOWCASE STYLE MATCHING LANDING PAGE) */}
        {relatedExperts.length > 0 && (
          <div className="mt-14 pt-8 border-t border-[rgba(67,15,122,0.10)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#430f7a] bg-[#f4eff9] border border-[#e9ddf6] px-3 py-1 rounded-full mb-1.5 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-[#1b1233]" /> VERIFIED IMMIGRATION COUNCIL
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#1b1233] tracking-tight">Top-Rated Related Consultants</h3>
                <p className="text-xs text-[#675f80] mt-0.5">Explore licensed advisors in the same corridors with 100% milestone escrow hold.</p>
              </div>
              <a 
                href="/find-experts" 
                className="text-xs font-bold text-[#430f7a] hover:text-black flex items-center gap-1.5 transition-colors self-start sm:self-auto bg-white hover:bg-[#faf8fd] border border-[rgba(67,15,122,0.14)] px-4 py-2 rounded-xl shadow-2xs"
              >
                <span>Explore all verified experts (500+)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedExperts.slice(0, 4).map((rel) => (
                <a
                  key={rel.id}
                  href={`/expert/${rel.id}`}
                  className="group relative rounded-[28px] overflow-hidden flex flex-col justify-end min-h-[440px] h-[440px] p-6 pb-6 text-white shadow-[0_16px_40px_-15px_rgba(67,15,122,0.25)] border-[1.5px] border-[rgba(255,255,255,0.22)] hover:border-white/50 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 bg-[#090d16] text-left no-underline cursor-pointer box-border"
                >
                  {/* Photo with zoom on hover */}
                  <img
                    src={rel.image || '/experts/expert1.png'}
                    alt={rel.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-107 transition-transform duration-700 pointer-events-none"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/experts/expert1.png';
                    }}
                  />

                  {/* Multi-stage luxury gradient matching landing page atlys-card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070312] via-[#070312]/80 via-48% to-transparent pointer-events-none group-hover:via-[#070312]/88 transition-colors" />
                  <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />

                  {/* Top Pill: Registration or Verified status */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 text-[10.5px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#430f7a]/95 to-[#581db5]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 shadow-md">
                    <ShieldCheck className="w-3 h-3 text-white" />
                    <span>{rel.govReg || 'VERIFIED ADVISOR'}</span>
                  </div>

                  {/* Top Right Flag */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-sm shadow-md">
                    {getCountryFlag(rel.countries?.[0] || 'Canada')}
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 w-full flex flex-col pointer-events-none">
                    {/* Name */}
                    <h4 className="text-[19px] font-black text-white uppercase tracking-wide group-hover:text-purple-200 transition-colors leading-snug drop-shadow-md font-sans line-clamp-1">
                      {rel.name}
                    </h4>

                    {/* Role */}
                    <p className="text-xs text-purple-100/90 font-medium truncate mt-0.5 drop-shadow-sm">
                      {rel.role}
                    </p>

                    {/* 3-Column Metadata Row (atlys-meta-row style) */}
                    <div className="grid grid-cols-3 gap-2 pt-3 mt-3.5 border-t border-white/20 text-center text-white/90">
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-purple-200/90">EXP</span>
                        <span className="text-xs font-black text-white mt-0.5">{rel.experienceYears || '7+ YRS'}</span>
                      </div>
                      <div className="flex flex-col items-center border-x border-white/15 px-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-purple-200/90">RATING</span>
                        <span className="text-xs font-black text-amber-300 flex items-center gap-0.5 mt-0.5">
                          <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                          <span>{rel.rating ? (rel.rating.toFixed ? rel.rating.toFixed(1) : rel.rating) : '4.9'}</span>
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-purple-200/90">CITY</span>
                        <span className="text-xs font-black text-white truncate max-w-[70px] mt-0.5">{rel.city || 'Remote'}</span>
                      </div>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="mt-3 w-full">
                      <span className="w-full text-center text-xs font-extrabold uppercase tracking-wider text-white bg-white/20 group-hover:bg-black group-hover:border-black group-hover:text-white backdrop-blur-md py-2.5 px-4 rounded-xl border border-white/30 transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
                        <span>View Profile &amp; Consult</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
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