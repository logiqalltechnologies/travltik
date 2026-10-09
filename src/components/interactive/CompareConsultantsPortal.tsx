// src/components/interactive/CompareConsultantsPortal.tsx
'use client';

import React, { useState, useMemo } from 'react';
import {
  Scale,
  CheckCircle2,
  Shield,
  Star,
  ChevronDown,
  Edit2,
  Heart,
  Send,
  FileText,
  Calendar,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  ExternalLink,
  Award,
  Check,
  Building,
  User,
  Zap,
  Clock,
  Globe,
  MapPin,
  MessageSquare
} from 'lucide-react';

export interface ConsultantCompareItem {
  id: string;
  name: string;
  agencyName: string;
  image: string;
  isVerified: boolean;
  isRecommended?: boolean;
  recommendedTag?: string;
  rating: number;
  reviewCount: number;
  approxFee: number; // in INR
  feeLabel?: string;
  yearsExperience: number;
  responseTime: string;
  countriesHandled: number;
  visaSuccessRate: number; // e.g. 92%
  languages: string[];
  consultationMode: string; // e.g. "Online / In-person"
  officeLocation: string;
  taglineBenefit: string;
  benefitIcon?: 'shield' | 'wallet' | 'star' | 'zap';
  keyHighlights: string[];
  badgeColor?: string;
}

export const defaultComparisonConsultants: ConsultantCompareItem[] = [
  {
    id: 'c1',
    name: 'Ananya Deshmukh',
    agencyName: 'GlobalPath Immigration Services',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces&q=80',
    isVerified: true,
    isRecommended: true,
    recommendedTag: 'Recommended',
    rating: 4.8,
    reviewCount: 126,
    approxFee: 25000,
    yearsExperience: 8,
    responseTime: 'Within 2 hours',
    countriesHandled: 15,
    visaSuccessRate: 92,
    languages: ['English', 'Hindi', 'Telugu'],
    consultationMode: 'Online / In-person',
    officeLocation: 'Hyderabad, India',
    taglineBenefit: 'Highest visa success rate and excellent client support.',
    benefitIcon: 'shield',
    keyHighlights: ['8+ years of immigration experience', 'High visa success rate (92%)', 'Personalized guidance', 'Transparent pricing', 'Dedicated relationship manager']
  },
  {
    id: 'c2',
    name: 'Rohit Verma',
    agencyName: 'VisaPro Consultants',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&q=80',
    isVerified: true,
    rating: 4.5,
    reviewCount: 98,
    approxFee: 22000,
    yearsExperience: 6,
    responseTime: 'Within 4 hours',
    countriesHandled: 12,
    visaSuccessRate: 87,
    languages: ['English', 'Hindi'],
    consultationMode: 'Online',
    officeLocation: 'New Delhi, India',
    taglineBenefit: 'Best value for money with quick response.',
    benefitIcon: 'wallet',
    keyHighlights: ['Cost-effective pricing', 'Fast initial assessment', 'End-to-end documentation', 'No hidden fees']
  },
  {
    id: 'c3',
    name: 'Kavita Sundaram',
    agencyName: 'Pathway Overseas',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces&q=80',
    isVerified: true,
    rating: 4.6,
    reviewCount: 114,
    approxFee: 28000,
    yearsExperience: 10,
    responseTime: 'Within 1 hour',
    countriesHandled: 20,
    visaSuccessRate: 90,
    languages: ['English', 'Tamil', 'Hindi'],
    consultationMode: 'Online / In-person',
    officeLocation: 'Chennai, India',
    taglineBenefit: 'Most experience across multiple countries.',
    benefitIcon: 'star',
    keyHighlights: ['10+ years industry veterans', 'Schengen & UK specialization', 'Apostille & Translation support', 'Dedicated legal counsel']
  },
  {
    id: 'c4',
    name: 'Manish Rawat',
    agencyName: 'SkySteps Immigration',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces&q=80',
    isVerified: true,
    rating: 4.3,
    reviewCount: 76,
    approxFee: 20000,
    yearsExperience: 5,
    responseTime: 'Within 3 hours',
    countriesHandled: 10,
    visaSuccessRate: 82,
    languages: ['English', 'Kannada', 'Hindi'],
    consultationMode: 'Online',
    officeLocation: 'Bangalore, India',
    taglineBenefit: 'Fast response and flexible consultation.',
    benefitIcon: 'zap',
    keyHighlights: ['Flexible booking slots', 'Virtual file review', 'Student visa discounts', 'Fast turnarounds']
  }
];

export function CompareConsultantsPortal() {
  // Search Criteria Mock
  const [searchCriteria, setSearchCriteria] = useState({
    visaType: 'Tourist Visa',
    destinationCountry: 'Germany',
    currentLocation: 'Hyderabad, India',
    serviceType: 'End-to-End Support'
  });

  // Shortlist state
  const [shortlisted, setShortlisted] = useState<Record<string, boolean>>({});

  // Active comparison criteria checkboxes
  const [activeCriteria, setActiveCriteria] = useState({
    overallRating: true,
    yearsOfExperience: true,
    responseTime: true,
    countriesHandled: true,
    visaSuccessRate: true,
    languages: true,
    serviceFee: true,
    consultationMode: true,
    officeLocation: true,
    clientReviews: true
  });

  // Sorting
  const [sortBy, setSortBy] = useState<'rating' | 'feeAsc' | 'feeDesc' | 'experience'>('rating');

  // Toggle Shortlist
  const toggleShortlist = (id: string) => {
    setShortlisted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Sorted Consultants
  const sortedConsultants = useMemo(() => {
    const list = [...defaultComparisonConsultants];
    if (sortBy === 'rating') {
      return list.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === 'feeAsc') {
      return list.sort((a, b) => a.approxFee - b.approxFee);
    }
    if (sortBy === 'feeDesc') {
      return list.sort((a, b) => b.approxFee - a.approxFee);
    }
    if (sortBy === 'experience') {
      return list.sort((a, b) => b.yearsExperience - a.yearsExperience);
    }
    return list;
  }, [sortBy]);

  // Selected featured consultant for the right sidebar (e.g. recommended one)
  const featuredConsultant = sortedConsultants.find(c => c.isRecommended) || sortedConsultants[0];

  const handleSelectConsultant = (consultant: ConsultantCompareItem) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/find-experts?id=${consultant.id}&autoSelect=${encodeURIComponent(consultant.agencyName)}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      
      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-3">
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>›</span>
          <a href="/find-experts" className="hover:text-slate-900 transition-colors">Visa &amp; Immigration</a>
          <span>›</span>
          <span className="text-[#0052cc] font-bold">Compare Consultants</span>
        </nav>
      </div>

      {/* ── HERO BANNER (Side-by-side header with Trust Badges) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-50 via-teal-50/70 to-blue-50 border border-slate-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          
          {/* Left Title & Value Propositions */}
          <div className="flex items-start gap-4 sm:gap-5 max-w-2xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-teal-100/80 text-[#00a896] flex items-center justify-center shrink-0 shadow-2xs border border-teal-200/60">
              <Scale className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Compare Immigration Consultants
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600">
                Find the best consultant for your visa journey. Compare services, experience, ratings, fees and more — side by side.
              </p>

              {/* 4 Trust Badges Strip */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-slate-700">
                <span className="inline-flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  Verified consultants
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  Real client reviews
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  Transparent pricing
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  Secure &amp; trusted
                </span>
              </div>
            </div>
          </div>

          {/* Right Travel Illustration Asset */}
          <div className="hidden lg:flex items-center gap-3 relative shrink-0">
            <div className="relative text-right">
              <span className="block text-xl font-black tracking-tight text-slate-900 italic font-serif leading-none">
                Your Global
              </span>
              <span className="block text-2xl font-black tracking-tight text-[#0052cc] italic font-serif leading-none mt-1">
                Journey Starts Here
              </span>
            </div>
            <div className="w-24 h-24 rounded-2xl bg-white shadow-md border border-slate-100 p-2 flex items-center justify-center rotate-3">
              <Globe className="w-16 h-16 text-[#0052cc]/80 stroke-[1.5]" />
            </div>
          </div>
        </div>
      </div>

      {/* ── 3-COLUMN MAIN LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDEBAR (Search Criteria & Comparison Checkboxes)
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 space-y-6">

            {/* Card 1: Your Search Criteria */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Your Search Criteria</h3>
                <a href="/find-experts" className="text-slate-400 hover:text-[#0052cc] transition-colors p-1" title="Edit Search">
                  <Edit2 className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block text-[11px] mb-0.5">Visa Type</span>
                  <span className="font-bold text-slate-900">{searchCriteria.visaType}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block text-[11px] mb-0.5">Destination Country</span>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <span className="text-base">🇩🇪</span>
                    <span>{searchCriteria.destinationCountry}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block text-[11px] mb-0.5">Current Location</span>
                  <span className="font-bold text-slate-900">{searchCriteria.currentLocation}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block text-[11px] mb-0.5">Service Type</span>
                  <span className="font-bold text-slate-900">{searchCriteria.serviceType}</span>
                </div>
              </div>

              <a
                href="/find-experts"
                className="mt-5 w-full block text-center py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/70 hover:bg-slate-100 font-bold text-xs text-slate-800 transition-all shadow-2xs"
              >
                Edit Search
              </a>
            </div>

            {/* Card 2: Comparison Criteria Filter Checkboxes */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Comparison Criteria</h3>
              </div>
              <p className="text-[11px] text-slate-500 mb-4 font-normal">
                We compared 10+ consultants based on your preferences. You can adjust the criteria below.
              </p>

              <div className="space-y-2.5">
                {[
                  { key: 'overallRating', label: 'Overall Rating' },
                  { key: 'yearsOfExperience', label: 'Years of Experience' },
                  { key: 'responseTime', label: 'Response Time' },
                  { key: 'countriesHandled', label: 'Countries Handled' },
                  { key: 'visaSuccessRate', label: 'Visa Success Rate' },
                  { key: 'languages', label: 'Languages' },
                  { key: 'serviceFee', label: 'Service Fee (approx.)' },
                  { key: 'consultationMode', label: 'Consultation Mode' },
                  { key: 'officeLocation', label: 'Office Location' },
                  { key: 'clientReviews', label: 'Client Reviews' },
                ].map(({ key, label }) => {
                  const isChecked = (activeCriteria as any)[key];
                  return (
                    <label
                      key={key}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer select-none hover:text-slate-900 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {
                          setActiveCriteria(prev => ({ ...prev, [key]: !isChecked }));
                        }}
                        className="w-4 h-4 rounded text-[#0052cc] focus:ring-0 cursor-pointer accent-[#0052cc]"
                      />
                      <span>{label}</span>
                    </label>
                  );
                })}
              </div>

              {/* Bottom Assurance Badge */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3 bg-slate-50/60 p-3 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 stroke-[2.2]" />
                </div>
                <p className="text-[11px] font-medium text-slate-600 leading-snug">
                  All consultants are verified and background checked for your safety.
                </p>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              CENTER: 4-COLUMN SIDE-BY-SIDE COMPARISON TABLE
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Header: Count & Sort Dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="text-sm font-black text-slate-900 tracking-tight">
                {sortedConsultants.length} Consultants
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 outline-none cursor-pointer focus:border-[#0052cc]"
                >
                  <option value="rating">Overall Rating (High to Low)</option>
                  <option value="feeAsc">Service Fee (Lowest First)</option>
                  <option value="feeDesc">Service Fee (Highest First)</option>
                  <option value="experience">Experience (Highest First)</option>
                </select>
              </div>
            </div>

            {/* ── COMPARISON MATRIX (Scrollable on small tablets) ── */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-x-auto">
              <div className="min-w-[720px]">
                
                {/* ROW 1: CONSULTANT HERO CARDS */}
                <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100">
                  {sortedConsultants.map((c) => {
                    const isFav = !!shortlisted[c.id];
                    return (
                      <div key={c.id} className="p-4 flex flex-col justify-between relative bg-white hover:bg-slate-50/50 transition-colors">
                        
                        {/* Recommended Ribbon */}
                        {c.isRecommended ? (
                          <div className="absolute -top-px left-0 right-0 bg-[#00a896] text-white text-[10px] font-black uppercase tracking-wider py-1 text-center rounded-t-3xl shadow-xs">
                            Recommended
                          </div>
                        ) : null}

                        {/* Top: Favorite icon & Avatar */}
                        <div className={`flex flex-col items-center text-center ${c.isRecommended ? 'pt-5' : 'pt-2'}`}>
                          <button
                            type="button"
                            onClick={() => toggleShortlist(c.id)}
                            className="absolute top-3 right-3 text-slate-300 hover:text-rose-500 p-1 transition-colors"
                            title="Shortlist Consultant"
                          >
                            <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
                          </button>

                          <div className="relative mb-2">
                            <img
                              src={c.image}
                              alt={c.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-slate-100"
                            />
                            {c.isVerified && (
                              <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#0052cc] text-white flex items-center justify-center text-[10px] ring-2 ring-white">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </span>
                            )}
                          </div>

                          <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug line-clamp-2">
                            {c.agencyName}
                          </h4>

                          <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                            <CheckCircle2 className="w-3 h-3 fill-emerald-100 text-emerald-600" />
                            <span>Verified Consultant</span>
                          </div>

                          {/* Rating & Reviews */}
                          <div className="mt-2 flex items-center gap-1 text-xs font-black text-slate-900">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{c.rating.toFixed(1)}</span>
                            <span className="text-slate-400 font-medium text-[11px]">({c.reviewCount} reviews)</span>
                          </div>

                          {/* Fee */}
                          <div className="mt-2.5">
                            <span className="text-sm font-extrabold text-slate-950">
                              ₹ {c.approxFee.toLocaleString('en-IN')}
                            </span>
                            <span className="block text-[10px] font-semibold text-slate-400">
                              (Service fee, approx.)
                            </span>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-4 space-y-1.5 w-full">
                          <button
                            type="button"
                            onClick={() => handleSelectConsultant(c)}
                            className="w-full py-2 px-2.5 rounded-xl bg-[#5025d1] hover:bg-[#431db3] text-white text-[11px] font-bold shadow-xs hover:shadow transition-all active:scale-95"
                          >
                            Select This Consultant
                          </button>
                          <a
                            href={`/find-experts?id=${c.id}`}
                            className="w-full block text-center py-1.5 px-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition-all"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ROW 2: OVERALL RATING */}
                {activeCriteria.overallRating && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/40 text-xs py-2.5 px-4 font-bold text-slate-900">
                    {sortedConsultants.map((c) => (
                      <div key={c.id} className="flex items-center gap-1 text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{c.rating.toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* ROW 3: YEARS OF EXPERIENCE */}
                {activeCriteria.yearsOfExperience && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 text-xs py-2.5 px-4 font-semibold text-slate-700">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>{c.yearsExperience}+ years</div>
                    ))}
                  </div>
                )}

                {/* ROW 4: RESPONSE TIME */}
                {activeCriteria.responseTime && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/40 text-xs py-2.5 px-4 font-semibold text-slate-700">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>{c.responseTime}</div>
                    ))}
                  </div>
                )}

                {/* ROW 5: COUNTRIES HANDLED */}
                {activeCriteria.countriesHandled && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 text-xs py-2.5 px-4 font-semibold text-slate-700">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>{c.countriesHandled}+ countries</div>
                    ))}
                  </div>
                )}

                {/* ROW 6: VISA SUCCESS RATE */}
                {activeCriteria.visaSuccessRate && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/40 text-xs py-2.5 px-4 font-bold text-slate-900">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>{c.visaSuccessRate}%</div>
                    ))}
                  </div>
                )}

                {/* ROW 7: LANGUAGES */}
                {activeCriteria.languages && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 text-xs py-2.5 px-4 font-medium text-slate-600">
                    {sortedConsultants.map((c) => (
                      <div key={c.id} className="truncate" title={c.languages.join(', ')}>
                        {c.languages.join(', ')}
                      </div>
                    ))}
                  </div>
                )}

                {/* ROW 8: SERVICE FEE */}
                {activeCriteria.serviceFee && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/40 text-xs py-2.5 px-4 font-bold text-slate-900">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>₹ {c.approxFee.toLocaleString('en-IN')}</div>
                    ))}
                  </div>
                )}

                {/* ROW 9: CONSULTATION MODE */}
                {activeCriteria.consultationMode && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 text-xs py-2.5 px-4 font-medium text-slate-700">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>{c.consultationMode}</div>
                    ))}
                  </div>
                )}

                {/* ROW 10: OFFICE LOCATION */}
                {activeCriteria.officeLocation && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/40 text-xs py-2.5 px-4 font-semibold text-slate-700">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>{c.officeLocation}</div>
                    ))}
                  </div>
                )}

                {/* ROW 11: VIEW REVIEWS LINK */}
                {activeCriteria.clientReviews && (
                  <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 text-xs py-2.5 px-4 font-bold text-[#0052cc]">
                    {sortedConsultants.map((c) => (
                      <div key={c.id}>
                        <a href={`/find-experts?id=${c.id}#reviews`} className="hover:underline flex items-center gap-1">
                          View reviews →
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {/* ROW 12: BOTTOM BENEFIT PILLS */}
                <div className="grid grid-cols-4 divide-x divide-slate-100 p-3 bg-slate-50/30">
                  {sortedConsultants.map((c) => (
                    <div key={c.id} className="p-2">
                      <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs h-full">
                        <div className="w-6 h-6 rounded-lg bg-teal-50 text-[#00a896] flex items-center justify-center shrink-0">
                          {c.benefitIcon === 'shield' && <Shield className="w-3.5 h-3.5" />}
                          {c.benefitIcon === 'wallet' && <FileText className="w-3.5 h-3.5" />}
                          {c.benefitIcon === 'star' && <Star className="w-3.5 h-3.5" />}
                          {c.benefitIcon === 'zap' && <Zap className="w-3.5 h-3.5" />}
                        </div>
                        <p className="text-[10px] font-semibold text-slate-700 leading-tight">
                          {c.taglineBenefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT SIDEBAR: FEATURED HIGHLIGHTS & QUICK ACTIONS
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 space-y-6">

            {/* Card 1: Why Choose Featured Consultant */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
              <h3 className="text-sm font-black text-slate-900 tracking-tight mb-4">
                Why Choose {featuredConsultant.agencyName.split(' ')[0]}?
              </h3>

              <div className="space-y-3">
                {featuredConsultant.keyHighlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 fill-emerald-100 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <a
                href={`/find-experts?id=${featuredConsultant.id}`}
                className="mt-6 w-full block text-center py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 font-bold text-xs text-[#0052cc] hover:bg-slate-50 transition-all shadow-2xs"
              >
                View Full Profile →
              </a>
            </div>

            {/* Card 2: Quick Actions */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
              <h3 className="text-sm font-black text-slate-900 tracking-tight mb-4">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <a
                  href="/find-experts?action=broadcast"
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs font-bold text-slate-800 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052cc] flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div>Send a query to all 4 consultants</div>
                    <div className="text-[10px] text-slate-400 font-medium">Receive direct proposals</div>
                  </div>
                </a>

                <a
                  href="#comparison"
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs font-bold text-slate-800 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div>Compare detailed profiles</div>
                    <div className="text-[10px] text-slate-400 font-medium">Side-by-side attributes</div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => alert('Shortlisted consultants saved to your TravlTik profile!')}
                  className="w-full flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs font-bold text-slate-800 text-left group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div>Shortlist &amp; save</div>
                    <div className="text-[10px] text-slate-400 font-medium">Keep for quick review later</div>
                  </div>
                </button>

                <a
                  href={`/find-experts?id=${featuredConsultant.id}&book=true`}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs font-bold text-slate-800 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div>Book consultation</div>
                    <div className="text-[10px] text-slate-400 font-medium">Instant 1-on-1 slot</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── BOTTOM RECOMMENDATION CALLOUT BAR (As shown in screenshot) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                Our Recommendation
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 font-medium mt-0.5">
                Based on your requirements, <strong className="text-slate-900">{featuredConsultant.agencyName}</strong> offers the best overall value with the highest visa success rate, experienced consultants and excellent client reviews.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleSelectConsultant(featuredConsultant)}
              className="flex-1 md:flex-none py-3 px-6 rounded-2xl bg-[#5025d1] hover:bg-[#431db3] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Select {featuredConsultant.agencyName}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/find-experts"
              className="py-3 px-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-all text-center"
            >
              View All Consultants
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CompareConsultantsPortal;
