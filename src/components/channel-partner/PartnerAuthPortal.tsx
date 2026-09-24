// src/components/channel-partner/PartnerAuthPortal.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  Star, Lock, Mail, Shield, ArrowRight, Eye, EyeOff,
  CheckCircle2, AlertCircle, Building2, UserCheck, ChevronDown,
  Globe, Phone, FileText, Check, Search, MapPin, Briefcase,
  KeyRound, RefreshCw, ArrowLeft, Layers, Network, Award,
  ChevronRight, Sparkles, HelpCircle
} from 'lucide-react';

interface Props {
  initialMode?: 'login' | 'register';
}

export const COUNTRIES = [
  'India',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'United Arab Emirates',
  'Germany',
  'Singapore',
  'New Zealand',
  'Ireland',
  'France',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'South Africa',
  'Malaysia',
  'Other Country'
];

export const STATES_BY_COUNTRY: Record<string, string[]> = {
  'India': [
    'Telangana (Hyderabad)',
    'Andhra Pradesh (Amaravati/Vizag)',
    'Maharashtra (Mumbai/Pune/Nagpur)',
    'Delhi NCR (New Delhi/Gurugram/Noida)',
    'Karnataka (Bengaluru/Mysuru)',
    'Gujarat (Ahmedabad/Surat/Vadodara)',
    'Punjab (Chandigarh/Amritsar/Ludhiana)',
    'Tamil Nadu (Chennai/Coimbatore)',
    'Haryana (Gurugram/Faridabad/Panipat)',
    'Uttar Pradesh (Lucknow/Noida/Kanpur)',
    'Kerala (Kochi/Thiruvananthapuram)',
    'Rajasthan (Jaipur/Udaipur/Jodhpur)',
    'West Bengal (Kolkata/Siliguri)',
    'Madhya Pradesh (Indore/Bhopal)',
    'Bihar (Patna)',
    'Odisha (Bhubaneswar/Cuttack)',
    'Assam (Guwahati)',
    'Goa (Panaji)',
    'Himachal Pradesh (Shimla)',
    'Jammu and Kashmir (Srinagar/Jammu)',
    'Jharkhand (Ranchi/Jamshedpur)',
    'Chhattisgarh (Raipur)',
    'Uttarakhand (Dehradun)',
    'Chandigarh (UT)',
    'Puducherry',
    'Tripura',
    'Meghalaya',
    'Manipur',
    'Nagaland',
    'Arunachal Pradesh',
    'Mizoram',
    'Sikkim',
    'Ladakh'
  ],
  'United States': [
    'California', 'Texas', 'Florida', 'New York', 'Illinois',
    'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan',
    'New Jersey', 'Virginia', 'Washington', 'Arizona', 'Massachusetts',
    'Tennessee', 'Indiana', 'Missouri', 'Maryland', 'Wisconsin',
    'Colorado', 'Minnesota', 'South Carolina', 'Alabama', 'Louisiana',
    'Kentucky', 'Oregon', 'Oklahoma', 'Connecticut', 'Utah',
    'Iowa', 'Nevada', 'Arkansas', 'Mississippi', 'Kansas',
    'New Mexico', 'Nebraska', 'Idaho', 'West Virginia', 'Hawaii',
    'New Hampshire', 'Maine', 'Rhode Island', 'Montana', 'Delaware',
    'South Dakota', 'North Dakota', 'Alaska', 'District of Columbia', 'Vermont', 'Wyoming'
  ],
  'Canada': [
    'Ontario (Toronto/Ottawa)', 'British Columbia (Vancouver/Victoria)', 'Alberta (Calgary/Edmonton)',
    'Quebec (Montreal/Quebec City)', 'Manitoba (Winnipeg)', 'Saskatchewan (Regina/Saskatoon)',
    'Nova Scotia (Halifax)', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island'
  ],
  'United Kingdom': [
    'Greater London', 'South East England', 'North West England (Manchester/Liverpool)',
    'West Midlands (Birmingham)', 'Scotland (Edinburgh/Glasgow)', 'Yorkshire & the Humber (Leeds)',
    'South West England (Bristol)', 'East of England (Cambridge)', 'East Midlands (Nottingham)',
    'Wales (Cardiff)', 'Northern Ireland (Belfast)', 'North East England (Newcastle)'
  ],
  'Australia': [
    'New South Wales (Sydney)', 'Victoria (Melbourne)', 'Queensland (Brisbane)',
    'Western Australia (Perth)', 'South Australia (Adelaide)', 'Australian Capital Territory (Canberra)',
    'Tasmania (Hobart)', 'Northern Territory (Darwin)'
  ],
  'United Arab Emirates': [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'
  ],
  'Germany': [
    'Bavaria (Munich)', 'North Rhine-Westphalia (Cologne/Düsseldorf)', 'Baden-Württemberg (Stuttgart)',
    'Berlin', 'Hesse (Frankfurt)', 'Lower Saxony (Hanover)', 'Hamburg', 'Saxony (Leipzig/Dresden)'
  ]
};

const ROLES_OPTIONS = [
  { value: 'country_partner', label: 'Country Partner', sub: 'Tier 1 - Master National Network', icon: Globe },
  { value: 'state_partner', label: 'State Partner', sub: 'Tier 2 - Regional Network (Under Country Partner)', icon: Building2 },
  { value: 'referral_consultant', label: 'Independent Referral Partner', sub: 'Tier 3 - Direct Advisory (Under State Partner)', icon: UserCheck },
];

const SPECIALIZATION_OPTIONS = [
  'Study Visa & Admissions',
  'Work Migration & Job Visas',
  'PR & Permanent Residency',
  'Tourist & Visitor Visa',
  'Business & Investor Visa',
  'Family & Spouse Sponsorship'
];

// ─── CUSTOM HOMEPAGE-INSPIRED DROPDOWN WITH FREE TYPING SEARCH FALLBACK ───
function CustomSelect({
  value,
  onChange,
  options,
  placeholder = 'Select option...',
  label,
  searchable = false,
  allowCustomInput = false,
  icon: Icon
}: {
  value: string;
  onChange: (val: string) => void;
  options: (string | { value: string; label: string; sub?: string; icon?: any })[];
  placeholder?: string;
  label?: string;
  searchable?: boolean;
  allowCustomInput?: boolean;
  icon?: any;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const normalizedOptions = options.map(opt =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOpt = normalizedOptions.find(o => o.value === value) || (value ? { value, label: value } : undefined);

  const filteredOptions = query
    ? normalizedOptions.filter(o =>
        o.label.toLowerCase().includes(query.toLowerCase()) ||
        (o.sub && o.sub.toLowerCase().includes(query.toLowerCase())) ||
        o.value.toLowerCase().includes(query.toLowerCase())
      )
    : normalizedOptions;

  const exactMatchExists = normalizedOptions.some(
    o => o.label.toLowerCase() === query.trim().toLowerCase() || o.value.toLowerCase() === query.trim().toLowerCase()
  );

  return (
    <div className="relative w-full" ref={ref}>
      {label && (
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <div
        onClick={() => setOpen(!open)}
        className={`w-full h-11 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-white border transition-all flex items-center justify-between cursor-pointer select-none ${
          open
            ? 'border-[#00A878] ring-2 ring-[#00A878]/15 bg-white shadow-xs'
            : 'border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/70'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          {Icon && <Icon className="w-4 h-4 text-slate-400 shrink-0" />}
          {selectedOpt && 'icon' in selectedOpt && selectedOpt.icon && (
            <selectedOpt.icon className="w-4 h-4 text-[#00A878] shrink-0" />
          )}
          <div className="min-w-0 truncate">
            <span className="text-xs sm:text-[13px] font-medium text-slate-900 truncate block">
              {selectedOpt ? selectedOpt.label : <span className="text-slate-400 font-normal">{placeholder}</span>}
            </span>
            {selectedOpt && 'sub' in selectedOpt && selectedOpt.sub && (
              <span className="text-[11px] text-slate-500 font-normal truncate block leading-none mt-0.5">
                {selectedOpt.sub}
              </span>
            )}
          </div>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180 text-[#00A878]' : ''
          }`}
        />
      </div>

      {/* Dropdown Floating Menu */}
      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 w-full z-[99999] bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2 animate-fadeIn ring-1 ring-black/5 max-h-[260px] overflow-hidden flex flex-col">
          {searchable && (
            <div className="relative mb-2 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type or search state/region (e.g. Hyderabad, Telangana)..."
                className="w-full h-9 pl-8 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#00A878]"
                autoFocus
              />
            </div>
          )}

          <div className="overflow-y-auto space-y-1 pr-1 scrollbar-thin">
            {/* Custom Input Option if typed query is not an exact match */}
            {allowCustomInput && query.trim() && !exactMatchExists && (
              <button
                type="button"
                onClick={() => {
                  onChange(query.trim());
                  setOpen(false);
                  setQuery('');
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left cursor-pointer bg-emerald-50/80 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200 transition-colors mb-1 font-semibold text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00A878] shrink-0" />
                <span className="truncate">Use &ldquo;{query.trim()}&rdquo; as custom State/Region</span>
              </button>
            )}

            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                const OptIcon = 'icon' in opt ? opt.icon : null;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                      setQuery('');
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200/60'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      {OptIcon && (
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#00A878] text-white' : 'bg-slate-100 text-slate-500'}`}>
                          <OptIcon className="w-3 h-3" />
                        </div>
                      )}
                      <div className="min-w-0 truncate">
                        <div className="text-xs sm:text-[13px] truncate">{opt.label}</div>
                        {'sub' in opt && opt.sub && (
                          <div className="text-[11px] text-slate-400 font-normal truncate mt-0.5">{opt.sub}</div>
                        )}
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#00A878] shrink-0" />}
                  </button>
                );
              })
            ) : !allowCustomInput ? (
              <div className="py-4 text-center text-xs text-slate-400">No results found</div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN AUTH PORTAL COMPONENT ─────────────────────────────────────────────
export default function PartnerAuthPortal({ initialMode = 'login' }: Props) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [role, setRole] = useState<'country_partner' | 'state_partner' | 'referral_consultant'>('country_partner');

  // Hierarchy Data from API
  const [hierarchyData, setHierarchyData] = useState<{
    countryPartners: Array<{ id: number; company_name: string; country: string; invite_code?: string }>;
    statePartners: Array<{ id: number; country_partner_id: number; partner_name: string; operating_state: string; parent_country?: string }>;
  }>({
    countryPartners: [],
    statePartners: []
  });

  // Sign In Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Common Registration States
  const [regCompany, setRegCompany] = useState('');
  const [regContactName, setRegContactName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regCountry, setRegCountry] = useState('India');
  const [regState, setRegState] = useState('Telangana (Hyderabad)');
  const [regTaxId, setRegTaxId] = useState('');
  const [regSpeciality, setRegSpeciality] = useState('Study Visa & Admissions');
  const [regPassword, setRegPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);

  // Hierarchy Linkage States
  const [selectedParentCountryPartnerId, setSelectedParentCountryPartnerId] = useState<string>('1');
  const [selectedParentStatePartnerId, setSelectedParentStatePartnerId] = useState<string>('');
  const [inviteCode, setInviteCode] = useState('');

  // OTP Verification States
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [cooldown, setCooldown] = useState(0);
  const [activeEmail, setActiveEmail] = useState('');
  const [debugOtpHint, setDebugOtpHint] = useState<string | null>(null);

  // State Management
  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<string | null>(null);

  // Focus ref for OTP boxes
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Fetch Hierarchy options on load
  useEffect(() => {
    fetch('/api/partner/network/hierarchy')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setHierarchyData({
            countryPartners: data.countryPartners || [],
            statePartners: data.statePartners || []
          });
          if (data.countryPartners?.length > 0) {
            setSelectedParentCountryPartnerId(String(data.countryPartners[0].id));
          }
        }
      })
      .catch(() => {});
  }, []);

  // Update default state when country changes
  useEffect(() => {
    const availableStates = STATES_BY_COUNTRY[regCountry] || [];
    if (availableStates.length > 0) {
      setRegState(availableStates[0]);
    } else {
      setRegState('Central Province');
    }
  }, [regCountry]);

  // Cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Handle Login Submit
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/partner/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword, role })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Login failed. Please check your credentials.');
      }

      setIsRedirecting(true);
      setTimeout(() => {
        window.location.href = '/channel-partner/dashboard';
      }, 600);
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign in.');
      setLoading(false);
    }
  };

  // Step 1: Send OTP to Email for Registration
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessInfo(null);
    setDebugOtpHint(null);

    if (!regEmail || !regEmail.includes('@')) {
      setError('Please provide a valid corporate email address.');
      return;
    }

    if (regPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/partner/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: regEmail.trim().toLowerCase() })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to dispatch verification code.');
      }

      setActiveEmail(regEmail.trim().toLowerCase());
      setStep('otp');
      setCooldown(15);
      setSuccessInfo(data.message || 'Verification code sent! Please check your email inbox and spam folder.');

      if (data.debugCode) {
        setDebugOtpHint(data.debugCode);
      }

      // Auto-focus first digit
      setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 100);

    } catch (err: any) {
      setError(err.message || 'Error sending verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (cooldown > 0) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/partner/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: activeEmail || regEmail.trim().toLowerCase() })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to resend code.');
      }

      setCooldown(15);
      setSuccessInfo('A fresh 6-digit verification code has been dispatched. Please check inbox/spam.');
      if (data.debugCode) {
        setDebugOtpHint(data.debugCode);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to resend code.');
    } finally {
      setLoading(false);
    }
  };

  // Handle individual OTP input digit change
  const handleOtpDigitChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const newDigits = [...otpDigits];
    
    // Handle pasting multi-digit code
    if (val.length > 1) {
      const pasted = val.slice(0, 6).split('');
      pasted.forEach((d, i) => {
        if (i < 6) newDigits[i] = d;
      });
      setOtpDigits(newDigits);
      const nextIdx = Math.min(pasted.length, 5);
      otpInputRefs.current[nextIdx]?.focus();
      if (pasted.length === 6) {
        handleVerifyAndRegister(newDigits.join(''));
      }
      return;
    }

    newDigits[index] = val;
    setOtpDigits(newDigits);

    if (val && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }

    // Auto submit when all 6 digits entered
    if (newDigits.every(d => d !== '')) {
      handleVerifyAndRegister(newDigits.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Step 2: Verify OTP and Register Account
  const handleVerifyAndRegister = async (fullCode?: string) => {
    const code = fullCode || otpDigits.join('');
    if (code.length < 6) {
      setError('Please enter all 6 digits of the verification code.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const payload: any = {
        role,
        email: activeEmail || regEmail.trim().toLowerCase(),
        password: regPassword,
        phone: regPhone,
        country: regCountry,
        otp: code,
        invite_code: inviteCode
      };

      if (role === 'country_partner') {
        payload.company_name = regCompany;
        payload.contact_person = regContactName;
        payload.country = regCountry;
        payload.tax_id = regTaxId;
      } else if (role === 'state_partner') {
        payload.agency_name = regCompany;
        payload.contact_person = regContactName;
        payload.operating_state = regState;
        payload.country = regCountry;
        payload.country_partner_id = selectedParentCountryPartnerId;
      } else if (role === 'referral_consultant') {
        payload.consultant_name = regContactName;
        payload.state = regState;
        payload.country = regCountry;
        payload.state_partner_id = selectedParentStatePartnerId;
        payload.specialization = regSpeciality;
      }

      const res = await fetch('/api/partner/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Verification failed. Please check the code.');
      }

      // Smooth loading transition directly to dashboard
      setIsRedirecting(true);
      setTimeout(() => {
        window.location.href = '/channel-partner/dashboard';
      }, 700);

    } catch (err: any) {
      setError(err.message || 'Verification failed. Please try again.');
      setLoading(false);
    }
  };

  // Get current country's state options
  const currentStateOptions = STATES_BY_COUNTRY[regCountry] || [
    'Central Region', 'Northern Region', 'Southern Region', 'Eastern Region', 'Western Region'
  ];

  // Filter state partners by selected country for Level 3 consultants
  const filteredStatePartners = hierarchyData.statePartners.filter(
    sp => !sp.parent_country || sp.parent_country.toLowerCase() === regCountry.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased relative flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none" style={{ fontFamily: '"Plus Jakarta Sans", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-emerald-100/50 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-teal-100/40 blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[20%] w-[380px] h-[380px] rounded-full bg-slate-200/50 blur-[100px] pointer-events-none" />

      {/* Main Container Card */}
      <div className={`w-full ${mode === 'register' && step === 'form' ? 'max-w-[580px]' : 'max-w-[460px]'} relative z-10 transition-all duration-300`}>
        <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-[28px] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] text-slate-900">

          {/* Header & Logo */}
          <div className="text-center mb-6">
            <div className="flex flex-col items-center justify-center gap-1.5 mb-2.5">
              <img
                src="/logo.png"
                alt="TravlTik Official Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <div className="text-[11px] font-semibold text-slate-500 tracking-[0.16em] uppercase mt-1">
                CHANNEL PARTNER NETWORK
              </div>
            </div>

            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/90 px-3.5 py-0.5 rounded-full shadow-2xs">
                <Star className="w-3 h-3 text-[#00A878] fill-current" /> B2B Partner Hierarchy Engine
              </span>
            </div>
          </div>

          {/* Mode Switcher Segmented Control (Only show in Form Step) */}
          {step === 'form' && (
            <div className="flex bg-slate-100 p-1 rounded-2xl mb-6 border border-slate-200/70">
              <button
                type="button"
                onClick={() => { setMode('login'); setError(null); }}
                className={`flex-1 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                  mode === 'login'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Partner Sign In
              </button>
              <button
                type="button"
                onClick={() => { setMode('register'); setError(null); }}
                className={`flex-1 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                  mode === 'register'
                    ? 'bg-[#00A878] text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Register as Partner
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs animate-fadeIn font-medium">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="flex-1">{error}</div>
            </div>
          )}

          {/* Success Info Message */}
          {successInfo && (
            <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-emerald-800 text-xs animate-fadeIn font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#00A878] shrink-0 mt-0.5" />
              <div className="flex-1">{successInfo}</div>
            </div>
          )}

          {/* ═══════════ STEP: OTP VERIFICATION SCREEN ═══════════ */}
          {step === 'otp' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="text-center">
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-3 text-[#00A878]">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h2 className="text-base font-bold text-slate-900">Enter Verification Code</h2>
                <p className="text-xs text-slate-500 mt-1">
                  We&apos;ve dispatched a 6-digit security OTP to <br />
                  <span className="font-semibold text-slate-800">{activeEmail || regEmail}</span>
                </p>
                <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-xl py-1.5 px-3 mt-2 inline-block">
                  💡 Tip: Please check your <strong>Inbox</strong> and <strong>Spam / Junk folder</strong>.
                </p>
              </div>

              {/* Quick Paste Code Hint (Assists users if email delivery experiences delay) */}
              {debugOtpHint && (
                <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center">
                  <span className="text-xs text-emerald-800 font-medium">Test Verification Code: </span>
                  <span className="font-mono font-bold text-sm text-[#00A878] bg-white px-2 py-0.5 rounded border border-emerald-200 mr-2">{debugOtpHint}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const digits = debugOtpHint.split('');
                      setOtpDigits(digits);
                      handleVerifyAndRegister(debugOtpHint);
                    }}
                    className="text-xs font-bold text-[#00A878] hover:underline cursor-pointer"
                  >
                    Auto-Fill & Verify →
                  </button>
                </div>
              )}

              {/* 6 Digit Input Boxes */}
              <div className="flex justify-center items-center gap-2 sm:gap-2.5 my-4">
                {otpDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (otpInputRefs.current[idx] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleOtpDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-bold bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A878]/30 focus:border-[#00A878] focus:bg-white transition-all shadow-xs"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                type="button"
                disabled={loading || otpDigits.some(d => d === '')}
                onClick={() => handleVerifyAndRegister()}
                className="w-full h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A878] hover:bg-[#008A62] text-white text-xs sm:text-sm font-semibold tracking-normal flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Code...</span>
                  </div>
                ) : (
                  <>
                    <span>Verify Code & Open Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Resend & Back Row */}
              <div className="flex items-center justify-between text-xs pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep('form');
                    setOtpDigits(['', '', '', '', '', '']);
                    setError(null);
                    setSuccessInfo(null);
                  }}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back / Edit Details
                </button>

                <button
                  type="button"
                  disabled={cooldown > 0 || loading}
                  onClick={handleResendOtp}
                  className={`inline-flex items-center gap-1 font-semibold ${
                    cooldown > 0
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-[#00A878] hover:underline cursor-pointer'
                  }`}
                >
                  <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
                  {cooldown > 0 ? `Resend code (${cooldown}s)` : 'Resend Code'}
                </button>
              </div>
            </div>
          )}

          {/* ═══════════ TAB 1: SIGN IN FORM ═══════════ */}
          {mode === 'login' && step === 'form' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <CustomSelect
                label="Partner Level"
                value={role}
                onChange={(val: any) => setRole(val)}
                options={ROLES_OPTIONS}
              />

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Official Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="partner@globalhorizons.com"
                    className="w-full h-11 pl-10 pr-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Account Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showLoginPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full h-11 pl-10 pr-11 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Security Banner */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#00A878] shrink-0" />
                <p className="text-xs text-emerald-900 font-medium leading-normal">
                  3-Tier Hierarchy Security Protected by TravlTik Network Engine.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A878] hover:bg-[#008A62] text-white text-xs sm:text-sm font-semibold tracking-normal flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Instant Demo Helper */}
              <div className="pt-4 border-t border-slate-100 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setLoginEmail('partner@globalhorizons.com');
                    setLoginPassword('TravlTik2026!');
                    setRole('country_partner');
                  }}
                  className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl cursor-pointer transition-colors"
                >
                  ⚡ Fill Demo Country Partner
                </button>
              </div>
            </form>
          )}

          {/* ═══════════ TAB 2: REGISTER FORM WITH 3-TIER HIERARCHY ═══════════ */}
          {mode === 'register' && step === 'form' && (
            <form onSubmit={handleRequestOtp} className="space-y-4">

              {/* ── 3-TIER HIERARCHICAL LEVEL SELECTOR ── */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Select Network Hierarchy Tier *
                  </label>
                  <span className="text-[11px] text-[#00A878] font-semibold flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Multi-Tier Model
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
                  {/* Tier 1: Country Partner */}
                  <button
                    type="button"
                    onClick={() => setRole('country_partner')}
                    className={`p-2.5 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                      role === 'country_partner'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                        : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                        role === 'country_partner' ? 'bg-[#00A878] text-white' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        Tier 1 Master
                      </span>
                      <Globe className={`w-3.5 h-3.5 ${role === 'country_partner' ? 'text-emerald-400' : 'text-slate-400'}`} />
                    </div>
                    <div className="font-bold text-xs sm:text-[13px] leading-tight">Country Partner</div>
                    <div className={`text-[10px] mt-0.5 ${role === 'country_partner' ? 'text-slate-300' : 'text-slate-400'}`}>
                      National Franchise
                    </div>
                  </button>

                  {/* Tier 2: State Partner */}
                  <button
                    type="button"
                    onClick={() => setRole('state_partner')}
                    className={`p-2.5 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                      role === 'state_partner'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                        : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                        role === 'state_partner' ? 'bg-[#00A878] text-white' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        Tier 2
                      </span>
                      <Building2 className={`w-3.5 h-3.5 ${role === 'state_partner' ? 'text-emerald-400' : 'text-slate-400'}`} />
                    </div>
                    <div className="font-bold text-xs sm:text-[13px] leading-tight">State Partner</div>
                    <div className={`text-[10px] mt-0.5 ${role === 'state_partner' ? 'text-slate-300' : 'text-slate-400'}`}>
                      Under Country Partner
                    </div>
                  </button>

                  {/* Tier 3: Independent Referral Partner */}
                  <button
                    type="button"
                    onClick={() => setRole('referral_consultant')}
                    className={`p-2.5 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                      role === 'referral_consultant'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                        : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                        role === 'referral_consultant' ? 'bg-[#00A878] text-white' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        Tier 3
                      </span>
                      <UserCheck className={`w-3.5 h-3.5 ${role === 'referral_consultant' ? 'text-emerald-400' : 'text-slate-400'}`} />
                    </div>
                    <div className="font-bold text-xs sm:text-[13px] leading-tight">Referral Partner</div>
                    <div className={`text-[10px] mt-0.5 ${role === 'referral_consultant' ? 'text-slate-300' : 'text-slate-400'}`}>
                      Under State Partner
                    </div>
                  </button>
                </div>

                {/* Dynamic Hierarchy Breadcrumb Notice */}
                <div className="mt-2.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] flex items-center gap-2 text-slate-600">
                  <Network className="w-3.5 h-3.5 text-[#00A878] shrink-0" />
                  {role === 'country_partner' && (
                    <span><strong>Tier 1 Hierarchy:</strong> Highest authority for national B2B licensing, approving State Partners & overrides.</span>
                  )}
                  {role === 'state_partner' && (
                    <span><strong>Tier 2 Hierarchy:</strong> Operates <strong>directly under the Country Master Partner</strong> to manage regional agents & operations.</span>
                  )}
                  {role === 'referral_consultant' && (
                    <span><strong>Tier 3 Hierarchy:</strong> Operates <strong>directly under the assigned State Partner</strong> to advise clients & refer applications.</span>
                  )}
                </div>
              </div>

              {/* ═════════ ROLE 1: COUNTRY PARTNER (TIER 1) ═════════ */}
              {role === 'country_partner' && (
                <div className="space-y-3.5 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <CustomSelect
                      label="Operating Master Country *"
                      value={regCountry}
                      onChange={(val) => setRegCountry(val)}
                      options={COUNTRIES}
                      searchable={true}
                      icon={Globe}
                    />

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Tax ID / Business Reg #
                      </label>
                      <input
                        type="text"
                        value={regTaxId}
                        onChange={(e) => setRegTaxId(e.target.value)}
                        placeholder="GSTIN / EIN-9283749"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Legal Entity / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regCompany}
                        onChange={(e) => setRegCompany(e.target.value)}
                        placeholder="Risingat Sports / Global Horizons Ltd."
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regContactName}
                        onChange={(e) => setRegContactName(e.target.value)}
                        placeholder="Prashanth"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="prashanth.e.l@gmail.com"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        WhatsApp / Phone (+Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ═════════ ROLE 2: STATE PARTNER (TIER 2 - UNDER COUNTRY PARTNER) ═════════ */}
              {role === 'state_partner' && (
                <div className="space-y-3.5 animate-fadeIn">
                  {/* Parent Country Partner Selection */}
                  <div className="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-200/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#00A878]" />
                        1. Select Parent Country Partner
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded-md">
                        Hierarchy Level 1
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <CustomSelect
                        label="Country *"
                        value={regCountry}
                        onChange={(val) => setRegCountry(val)}
                        options={COUNTRIES}
                        searchable={true}
                        icon={Globe}
                      />

                      <CustomSelect
                        label="Assigned Country Master Partner *"
                        value={selectedParentCountryPartnerId}
                        onChange={(val) => setSelectedParentCountryPartnerId(val)}
                        options={
                          hierarchyData.countryPartners.map(cp => ({
                            value: String(cp.id),
                            label: `${cp.country} — ${cp.company_name}`,
                            sub: cp.invite_code ? `Invite Code: ${cp.invite_code}` : undefined
                          }))
                        }
                        placeholder="Choose Master Partner..."
                      />
                    </div>
                  </div>

                  {/* State Partner Agency Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        State Agency / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regCompany}
                        onChange={(e) => setRegCompany(e.target.value)}
                        placeholder="Telangana Visa Hub / Risingat Sports"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regContactName}
                        onChange={(e) => setRegContactName(e.target.value)}
                        placeholder="Prashanth"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Custom Operating State Dropdown with Search & Custom Input */}
                    <CustomSelect
                      label={`Operating State / Region (${regCountry}) *`}
                      value={regState}
                      onChange={(val) => setRegState(val)}
                      options={currentStateOptions}
                      searchable={true}
                      allowCustomInput={true}
                      icon={MapPin}
                    />

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Official Agency Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="prashanth.e.l@gmail.com"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      WhatsApp / Phone (+Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                    />
                  </div>
                </div>
              )}

              {/* ═════════ ROLE 3: REFERRAL CONSULTANT (TIER 3 - UNDER STATE PARTNER) ═════════ */}
              {role === 'referral_consultant' && (
                <div className="space-y-3.5 animate-fadeIn">
                  {/* Parent State Partner Selection */}
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-[#00A878]" />
                        1. Select Parent State Partner Network
                      </span>
                      <span className="text-[10px] text-slate-600 font-semibold bg-slate-200 px-2 py-0.5 rounded-md">
                        Hierarchy Level 2
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <CustomSelect
                        label="Country *"
                        value={regCountry}
                        onChange={(val) => setRegCountry(val)}
                        options={COUNTRIES}
                        searchable={true}
                        icon={Globe}
                      />

                      <CustomSelect
                        label="Operating State Partner *"
                        value={selectedParentStatePartnerId}
                        onChange={(val) => setSelectedParentStatePartnerId(val)}
                        options={
                          filteredStatePartners.length > 0
                            ? filteredStatePartners.map(sp => ({
                                value: String(sp.id),
                                label: `${sp.operating_state} — ${sp.partner_name}`
                              }))
                            : [
                                { value: '1', label: `Default ${regCountry} State Agency` }
                              ]
                        }
                        placeholder="Choose State Partner..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Consultant Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regContactName}
                        onChange={(e) => setRegContactName(e.target.value)}
                        placeholder="Sarah Jenkins / Prashanth"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Consultant Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="consultant@immigrationpro.com"
                        className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <CustomSelect
                      label={`Assigned State / City (${regCountry}) *`}
                      value={regState}
                      onChange={(val) => setRegState(val)}
                      options={currentStateOptions}
                      searchable={true}
                      allowCustomInput={true}
                      icon={MapPin}
                    />

                    <CustomSelect
                      label="Primary Advisory Specialization *"
                      value={regSpeciality}
                      onChange={(val) => setRegSpeciality(val)}
                      options={SPECIALIZATION_OPTIONS}
                      icon={Briefcase}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      WhatsApp / Phone (+Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full h-11 px-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                    />
                  </div>
                </div>
              )}

              {/* Password Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Create Password (Min. 8 characters) *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showRegPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full h-11 pl-10 pr-11 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-[13px] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A878]/20 focus:border-[#00A878]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Notice */}
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-3 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#00A878] shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                  Clicking continue will send a 6-digit OTP code to verify your corporate email address.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A878] hover:bg-[#008A62] text-white text-xs sm:text-sm font-semibold tracking-normal flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Verification Code...</span>
                  </div>
                ) : (
                  <>
                    <span>Continue & Verify Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

        {/* Footer info */}
        <div className="text-center mt-5">
          <p className="text-xs text-slate-400 font-normal">
            TravlTik Global Immigration & Mobility Platform &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Instant Activation Loading HUD Overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
          <div className="bg-white rounded-[28px] max-w-[400px] w-full p-8 text-center shadow-2xl border border-slate-200/90 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-[#00A878] shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">Email Verified & Activated!</h3>
            <p className="text-xs text-slate-500 mb-4">Synchronizing B2B operating dashboard...</p>

            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-4 py-2 rounded-xl">
              <div className="w-4 h-4 border-2 border-[#00A878] border-t-transparent rounded-full animate-spin shrink-0" />
              <span>Launching Workspace...</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
