import React, { useState, useEffect } from "react";
import {
  Plane,
  Luggage,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Users,
  User,
  Edit2,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  Bell,
  Sun,
  Download,
  Info,
  Check,
  Plus,
  X,
  Compass,
  FileText,
  Trash2
} from "lucide-react";

interface CoTraveller {
  id: string;
  initials: string;
  name: string;
  role: "Primary Traveller" | "Co-Traveller";
  passport: string;
  dob: string;
  avatarBg: string;
}

interface ChecklistItem {
  id: number;
  sectionId: number;
  title: string;
  detail: string;
}

const DEFAULT_CHECKLIST_ITEMS: ChecklistItem[] = [
  // Section 1: Trip & Travel Details
  {
    id: 1,
    sectionId: 1,
    title: "Verify travel dates, destination and total trip duration",
    detail: "From: 12 Oct 2025  To: 16 Oct 2025  (5 days)"
  },
  {
    id: 2,
    sectionId: 1,
    title: "Check visa approval requirement (if applicable)",
    detail: "Not required for domestic trips"
  },
  {
    id: 3,
    sectionId: 1,
    title: "Confirm forex card arrangements",
    detail: "Ensure sufficient balance & enable international usage"
  },
  {
    id: 4,
    sectionId: 1,
    title: "Confirm travel insurance coverage",
    detail: "Valid for entire trip duration"
  },

  // Section 2: Flights & Transportation
  {
    id: 5,
    sectionId: 2,
    title: "Book flight/train/bus tickets",
    detail: "Keep e-tickets / PNR handy"
  },
  {
    id: 6,
    sectionId: 2,
    title: "Check for baggage allowance (as per airline/transport)",
    detail: "Verify weight & number of bags"
  },
  {
    id: 7,
    sectionId: 2,
    title: "Confirm seat numbers and check-in details",
    detail: "Online check-in (if available)"
  },
  {
    id: 8,
    sectionId: 2,
    title: "Arrange local transport at destination",
    detail: "Airport pick-up / hotel transfer / rental car"
  },

  // Section 3: Accommodation
  {
    id: 9,
    sectionId: 3,
    title: "Confirm hotel booking details",
    detail: "Address, contact number, check-in/out time"
  },
  {
    id: 10,
    sectionId: 3,
    title: "Save hotel confirmation voucher",
    detail: "Keep digital/printed copy"
  },

  // Section 4: Documents
  {
    id: 11,
    sectionId: 4,
    title: "Carry original ID proof (Aadhaar / Passport / Driving License)",
    detail: "As applicable"
  },
  {
    id: 12,
    sectionId: 4,
    title: "Keep digital copies of important documents",
    detail: "Email / cloud storage"
  },
  {
    id: 13,
    sectionId: 4,
    title: "Carry printed itinerary, hotel bookings & return tickets",
    detail: "For verification if required"
  },

  // Section 5: Packing & Luggage
  {
    id: 14,
    sectionId: 5,
    title: "Check weather forecast for destination",
    detail: "Pack suitable clothing"
  },
  {
    id: 15,
    sectionId: 5,
    title: "Pack essentials (medicines, chargers, toiletries, etc.)",
    detail: "For international trips"
  },
  {
    id: 16,
    sectionId: 5,
    title: "Keep emergency contacts and embassy/helpline info",
    detail: "Saved in phone and on physical backup"
  }
];

const SECTIONS_META = [
  {
    id: 1,
    title: "Trip & Travel Details",
    subtitle: "Confirm your trip details and itinerary.",
    circleBg: "bg-[#00705a]",
    iconBg: "bg-[#E6F4F1] text-[#00705a] border border-[#CDEAE4]",
    icon: <CreditCard className="w-3.5 h-3.5 text-[#00705a]" />
  },
  {
    id: 2,
    title: "Flights & Transportation",
    subtitle: "Book and confirm your travel arrangements.",
    circleBg: "bg-[#6b46c1]",
    iconBg: "bg-[#F3E8FF] text-[#6b46c1] border border-[#E9D5FF]",
    icon: <Calendar className="w-3.5 h-3.5 text-[#6b46c1]" />
  },
  {
    id: 3,
    title: "Accommodation",
    subtitle: "Make sure your stay is confirmed and ready.",
    circleBg: "bg-[#2563eb]",
    iconBg: "bg-[#EFF6FF] text-[#2563eb] border border-[#DBEAFE]",
    icon: <User className="w-3.5 h-3.5 text-[#2563eb]" />
  },
  {
    id: 4,
    title: "Documents",
    subtitle: "Carry all essential documents for a hassle-free trip.",
    circleBg: "bg-[#f59e0b]",
    iconBg: "bg-[#FEF3C7] text-[#d97706] border border-[#FDE68A]",
    icon: <FileText className="w-3.5 h-3.5 text-[#d97706]" />
  },
  {
    id: 5,
    title: "Packing & Luggage",
    subtitle: "Pack smart and check customs guidelines (for international trips).",
    circleBg: "bg-[#9333ea]",
    iconBg: "bg-[#FCE7F3] text-[#be185d] border border-[#FBCFE8]",
    icon: <Luggage className="w-3.5 h-3.5 text-[#be185d]" />
  }
];

export interface PreDepartureLuggageProps {
  selectedDestination?: string;
  selectedPurpose?: string;
  selectedPassport?: string;
  fullName?: string;
  email?: string;
  visasProcessingState?: any[];
  // Legacy optional props
  isFetchingPreDepartureAi?: boolean;
  fetchPreDepartureAi?: (dest?: string) => Promise<void>;
  luggageProgress?: { packed: number; total: number; percent: number };
  luggageActiveSection?: string;
  setLuggageActiveSection?: (sec: any) => void;
  defaultLuggageItems?: any;
  customLuggageItems?: any[];
  luggageChecklist?: Record<string, boolean>;
  toggleLuggageItem?: (itemId: string) => void;
  newLuggageCategory?: string;
  setNewLuggageCategory?: (cat: any) => void;
  newLuggageItemText?: string;
  setNewLuggageItemText?: (text: string) => void;
  handleAddCustomLuggageItem?: (e?: React.FormEvent) => void;
}

export const PreDepartureLuggage: React.FC<PreDepartureLuggageProps> = ({
  selectedDestination = "Goa",
  fullName = "Lellwyn Prashanth Edwin",
  email = ""
}) => {
  // ── Trip Type Toggle State (Internal Trip vs International Trip) ──
  const [tripType, setTripType] = useState<"internal" | "international">("internal");

  // ── Trip Details State ──
  const [tripDetails, setTripDetails] = useState({
    fromCity: "Bengaluru (BLR)",
    fromCountry: "India",
    toCity: "Goa (GOI)",
    toCountry: "India",
    departureDate: "12 Oct 2025",
    returnDate: "16 Oct 2025",
    duration: "5 Days",
    visaApprovalRequired: "No",
    forexCardRequired: "Required",
    travelInsuranceRequired: "Required",
    destinationImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
  });

  // ── Co-Travellers State ──
  const [coTravellers, setCoTravellers] = useState<CoTraveller[]>([
    {
      id: "trav_1",
      initials: "LP",
      name: fullName || "Lellwyn Prashanth Edwin",
      role: "Primary Traveller",
      passport: "Z1234567",
      dob: "05 Apr 1981",
      avatarBg: "from-teal-600 to-emerald-700"
    },
    {
      id: "trav_2",
      initials: "SE",
      name: "Sarah Edwin",
      role: "Co-Traveller",
      passport: "A9876543",
      dob: "12 Mar 1985",
      avatarBg: "from-teal-600 to-cyan-700"
    }
  ]);

  // ── Pre-Departure Checklist Checked Items State ──
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [isChecklistCollapsed, setIsChecklistCollapsed] = useState(false);

  // ── Modals State ──
  const [showEditTripModal, setShowEditTripModal] = useState(false);
  const [showAddTravellerModal, setShowAddTravellerModal] = useState(false);
  const [editingTraveller, setEditingTraveller] = useState<CoTraveller | null>(null);
  const [showRemindersModal, setShowRemindersModal] = useState(false);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [activeTravellerMenu, setActiveTravellerMenu] = useState<string | null>(null);

  // ── Reminder Settings ──
  const [reminders, setReminders] = useState({
    oneDayBefore: true,
    threeHoursBefore: true,
    departureDay: true,
    viaEmail: true,
    viaSms: false,
    viaWhatsapp: true
  });

  // ── Edit Trip Form State ──
  const [editTripForm, setEditTripForm] = useState({
    fromCity: "Bengaluru (BLR)",
    toCity: "Goa (GOI)",
    departureDate: "12 Oct 2025",
    returnDate: "16 Oct 2025",
    duration: "5 Days"
  });

  // ── Add/Edit Traveller Form State ──
  const [travellerForm, setTravellerForm] = useState({
    name: "",
    role: "Co-Traveller" as "Primary Traveller" | "Co-Traveller",
    passport: "",
    dob: ""
  });

  // Load saved state on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedChecked = localStorage.getItem("pre_departure_checked_items");
        if (savedChecked) setCheckedItems(JSON.parse(savedChecked));

        const savedTravellers = localStorage.getItem("pre_departure_co_travellers");
        if (savedTravellers) setCoTravellers(JSON.parse(savedTravellers));

        const savedTrip = localStorage.getItem("pre_departure_trip_details");
        if (savedTrip) setTripDetails(JSON.parse(savedTrip));

        const savedType = localStorage.getItem("pre_departure_trip_type");
        if (savedType === "internal" || savedType === "international") setTripType(savedType);
      } catch (e) {
        console.error("Failed to load pre-departure storage:", e);
      }
    }
  }, []);

  // Sync when tripType changes
  useEffect(() => {
    if (tripType === "international") {
      setTripDetails((prev) => ({
        ...prev,
        toCity: selectedDestination && selectedDestination !== "Goa" ? `${selectedDestination} Int'l` : "Paris (CDG)",
        toCountry: selectedDestination && selectedDestination !== "Goa" ? selectedDestination : "France",
        visaApprovalRequired: "Yes",
        forexCardRequired: "Required",
        travelInsuranceRequired: "Required",
        destinationImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
      }));
    } else {
      setTripDetails((prev) => ({
        ...prev,
        toCity: "Goa (GOI)",
        toCountry: "India",
        visaApprovalRequired: "No",
        forexCardRequired: "Required",
        travelInsuranceRequired: "Required",
        destinationImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
      }));
    }
    localStorage.setItem("pre_departure_trip_type", tripType);
  }, [tripType, selectedDestination]);

  // Persist checked items
  const handleToggleItem = (itemId: number) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem("pre_departure_checked_items", JSON.stringify(updated));

      // Sync with Neon DB vault
      if (email) {
        fetch("/api/user/vault-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "save_luggage",
            luggage_checklist: updated
          })
        }).catch(() => {});
      }
      return updated;
    });
  };

  // Completed count and progress percentage
  const totalItemsCount = DEFAULT_CHECKLIST_ITEMS.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItemsCount) * 100);

  // SVG circular gauge math
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  // Save Trip Details
  const handleSaveTripDetails = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...tripDetails,
      fromCity: editTripForm.fromCity,
      toCity: editTripForm.toCity,
      departureDate: editTripForm.departureDate,
      returnDate: editTripForm.returnDate,
      duration: editTripForm.duration
    };
    setTripDetails(updated);
    localStorage.setItem("pre_departure_trip_details", JSON.stringify(updated));
    setShowEditTripModal(false);
  };

  // Add / Edit Traveller
  const handleSaveTraveller = (e: React.FormEvent) => {
    e.preventDefault();
    if (!travellerForm.name.trim()) return;

    const parts = travellerForm.name.trim().split(" ");
    const initials = parts.length > 1 ? `${parts[0][0]}${parts[1][0]}`.toUpperCase() : parts[0].slice(0, 2).toUpperCase();

    if (editingTraveller) {
      const updated = coTravellers.map((t) =>
        t.id === editingTraveller.id
          ? {
              ...t,
              name: travellerForm.name,
              role: travellerForm.role,
              passport: travellerForm.passport || t.passport,
              dob: travellerForm.dob || t.dob,
              initials
            }
          : t
      );
      setCoTravellers(updated);
      localStorage.setItem("pre_departure_co_travellers", JSON.stringify(updated));
    } else {
      const newTrav: CoTraveller = {
        id: `trav_${Date.now()}`,
        initials,
        name: travellerForm.name,
        role: travellerForm.role,
        passport: travellerForm.passport || "P-PENDING",
        dob: travellerForm.dob || "01 Jan 1990",
        avatarBg: coTravellers.length % 2 === 0 ? "from-teal-600 to-emerald-700" : "from-emerald-600 to-cyan-700"
      };
      const updated = [...coTravellers, newTrav];
      setCoTravellers(updated);
      localStorage.setItem("pre_departure_co_travellers", JSON.stringify(updated));
    }

    setEditingTraveller(null);
    setTravellerForm({ name: "", role: "Co-Traveller", passport: "", dob: "" });
    setShowAddTravellerModal(false);
  };

  const handleDeleteTraveller = (id: string) => {
    const updated = coTravellers.filter((t) => t.id !== id);
    setCoTravellers(updated);
    localStorage.setItem("pre_departure_co_travellers", JSON.stringify(updated));
    setActiveTravellerMenu(null);
  };

  // Print PDF Trigger
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="space-y-5 animate-fade-up text-left text-slate-800 font-sans sharp-typography visa-readiness-scope">
      {/* ── Hero Banner Card (Matching Reference Design) ── */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xs">
        {/* Right-Side Scenic Landscape Photo with Smooth Fade */}
        <div
          className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] pointer-events-none"
          style={{
            backgroundImage: "url('/images/pre_departure_hero_bg.png')",
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Feathered White Gradient Fade from Left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent sm:via-white/55" />
        </div>

        {/* Banner Content Container (Clean Sharp Dark Typography over Pure White Left) */}
        <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[175px] sm:min-h-[195px] space-y-3 sm:space-y-4">
          {/* 1. Breadcrumbs (Inside Banner at Top-Left) */}
          <nav className="flex items-center gap-1.5 text-xs font-medium">
            <span className="text-[#4f6b92] hover:underline cursor-pointer">Home</span>
            <span className="text-slate-300">&gt;</span>
            <span className="text-[#4f6b92] hover:underline cursor-pointer">Pre-Departure Checklist</span>
            <span className="text-slate-300">&gt;</span>
            <span className="text-slate-700 font-semibold">
              {tripType === "internal" ? "Internal Trip" : "International Trip"}
            </span>
          </nav>

          {/* 2. Main Title & Subtitle */}
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight leading-tight">
              Pre-Departure Checklist
            </h1>
            <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-1 leading-relaxed">
              Stay organized and complete your checklist before your trip. Get timely reminders and travel with confidence.
            </p>
          </div>

          {/* 3. Dual Toggle Buttons & Slogan */}
          <div className="flex items-end justify-between flex-wrap gap-4 pt-1">
            {/* Toggles */}
            <div className="flex items-center gap-3">
              {/* International Trip Button */}
              <button
                type="button"
                onClick={() => setTripType("international")}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-all cursor-pointer bg-white shadow-2xs border ${
                  tripType === "international"
                    ? "border-purple-200 border-b-[3px] border-b-[#6b46c1] text-[#6b46c1]"
                    : "border-slate-200/90 text-slate-800 hover:bg-slate-50/80"
                }`}
              >
                <Plane className={`w-4 h-4 ${tripType === "international" ? "text-[#6b46c1]" : "text-[#7c3aed]"}`} />
                <span>International Trip</span>
              </button>

              {/* Internal Trip Button */}
              <button
                type="button"
                onClick={() => setTripType("internal")}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-all cursor-pointer bg-white shadow-2xs border ${
                  tripType === "internal"
                    ? "border-emerald-200 border-b-[3px] border-b-[#00705a] text-[#00705a]"
                    : "border-slate-200/90 text-slate-800 hover:bg-slate-50/80"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black leading-none transition-colors ${
                    tripType === "internal"
                      ? "bg-[#00705a] text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  P
                </div>
                <span>Internal Trip</span>
              </button>
            </div>

            {/* Right Slogan: Plan • Prepare • Travel */}
            <div className="text-xs sm:text-[13px] font-medium tracking-wide text-white/95 drop-shadow-md pr-3 hidden md:block select-none">
              Plan • Prepare • Travel
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Two-Column Grid: Left Content (Checklist & Details) + Right Sidebar (Summary & Progress) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ══════════ LEFT COLUMN (8 cols) ══════════ */}
        <div className="lg:col-span-8 space-y-5">
          {/* 1. Trip Details Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 tracking-tight">Trip Details</h3>
              <button
                type="button"
                onClick={() => {
                  setEditTripForm({
                    fromCity: tripDetails.fromCity,
                    toCity: tripDetails.toCity,
                    departureDate: tripDetails.departureDate,
                    returnDate: tripDetails.returnDate,
                    duration: tripDetails.duration
                  });
                  setShowEditTripModal(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Edit2 className="w-3 h-3 text-slate-500" />
                <span>Edit</span>
              </button>
            </div>

            {/* Horizontal metrics grid - centered vertical stacks matching original UI */}
            <div className="overflow-x-auto pb-1.5 -mb-1 no-scrollbar">
              <div className="flex items-start justify-between gap-3 min-w-[780px] xl:min-w-0 pt-1">
                {/* 1. From */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[80px]">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">From</span>
                  <span className="text-xs font-bold text-slate-900 whitespace-nowrap mt-0.5">{tripDetails.fromCity}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{tripDetails.fromCountry}</span>
                </div>

                {/* 2. To */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[80px]">
                  <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">To</span>
                  <span className="text-xs font-bold text-slate-900 whitespace-nowrap mt-0.5">{tripDetails.toCity}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{tripDetails.toCountry}</span>
                </div>

                {/* 3. Departure Date */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[85px]">
                  <div className="w-7 h-7 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">Departure Date</span>
                  <span className="text-xs font-bold text-slate-900 whitespace-nowrap mt-0.5">{tripDetails.departureDate}</span>
                </div>

                {/* 4. Return Date */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[85px]">
                  <div className="w-7 h-7 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">Return Date</span>
                  <span className="text-xs font-bold text-slate-900 whitespace-nowrap mt-0.5">{tripDetails.returnDate}</span>
                </div>

                {/* 5. Total Duration */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[80px]">
                  <div className="w-7 h-7 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center mb-1">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">Total Duration</span>
                  <span className="text-xs font-bold text-slate-900 whitespace-nowrap mt-0.5">{tripDetails.duration}</span>
                </div>

                {/* 6. Visa Approval Required */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[90px]">
                  <div className="w-7 h-7 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-1">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 leading-tight">Visa Approval<br />Required</span>
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900 whitespace-nowrap mt-0.5">
                    <span className={tripDetails.visaApprovalRequired === "No" ? "text-slate-800" : "text-indigo-600"}>
                      {tripDetails.visaApprovalRequired}
                    </span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* 7. Forex Card */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[85px]">
                  <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-1">
                    <CreditCard className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">Forex Card</span>
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-teal-700 whitespace-nowrap mt-0.5">
                    <span>{tripDetails.forexCardRequired}</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* 8. Travel Insurance */}
                <div className="flex-1 flex flex-col items-center text-center space-y-0.5 min-w-[90px]">
                  <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">Travel Insurance</span>
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-indigo-700 whitespace-nowrap mt-0.5">
                    <span>{tripDetails.travelInsuranceRequired}</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* 9. Status Badge */}
                <div className="flex-1 flex flex-col items-center justify-center shrink-0 min-w-[95px]">
                  <div className="w-full bg-emerald-50 border border-emerald-300/80 rounded-2xl p-2 text-center flex flex-col items-center justify-center gap-1 shadow-2xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 leading-snug">
                      All mandatory<br />for {tripType === "internal" ? "Internal" : "International"}<br />Trips
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Co-Travellers Section */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 tracking-tight">Co-Travellers</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Add your travel companions to include them in the checklist and receive reminders.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setEditingTraveller(null);
                  setTravellerForm({ name: "", role: "Co-Traveller", passport: "", dob: "" });
                  setShowAddTravellerModal(true);
                }}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#008060] hover:bg-[#006e52] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Co-Traveller</span>
              </button>
            </div>

            {/* Co-Traveller Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {coTravellers.map((trav) => (
                <div
                  key={trav.id}
                  className="bg-white rounded-2xl border border-slate-200 p-3.5 flex items-center justify-between gap-3 shadow-2xs hover:border-teal-500/50 transition-colors relative"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${trav.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      {trav.initials}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">{trav.name}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            trav.role === "Primary Traveller"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-teal-100 text-teal-800"
                          }`}
                        >
                          {trav.role}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">
                        Passport: {trav.passport} | DOB: {trav.dob}
                      </p>
                    </div>
                  </div>

                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveTravellerMenu(activeTravellerMenu === trav.id ? null : trav.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>

                    {activeTravellerMenu === trav.id && (
                      <div className="absolute right-0 top-8 w-32 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-20 text-xs font-semibold">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingTraveller(trav);
                            setTravellerForm({
                              name: trav.name,
                              role: trav.role,
                              passport: trav.passport,
                              dob: trav.dob
                            });
                            setActiveTravellerMenu(null);
                            setShowAddTravellerModal(true);
                          }}
                          className="w-full text-left px-3 py-1.5 text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                        >
                          <Edit2 className="w-3 h-3 text-slate-500" />
                          <span>Edit</span>
                        </button>
                        {trav.role !== "Primary Traveller" && (
                          <button
                            type="button"
                            onClick={() => handleDeleteTraveller(trav.id)}
                            className="w-full text-left px-3 py-1.5 text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3 text-rose-500" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Pre-Departure Checklist (Accordion / List) */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
            {/* Header */}
            <div
              onClick={() => setIsChecklistCollapsed(!isChecklistCollapsed)}
              className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none hover:bg-slate-50/50 transition-colors border-b border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Luggage className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                    Pre-Departure Checklist
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">
                  {completedCount}/{totalItemsCount} completed
                </span>
                <div className="p-1 text-slate-400 hover:text-slate-700">
                  {isChecklistCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Checklist Body */}
            {!isChecklistCollapsed && (
              <div className="divide-y divide-slate-100">
                {SECTIONS_META.map((sec) => {
                  const itemsInSec = DEFAULT_CHECKLIST_ITEMS.filter((it) => it.sectionId === sec.id);

                  return (
                    <div key={sec.id} className="p-4 sm:p-6 space-y-3">
                      {/* Section Title */}
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full ${sec.circleBg} text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs`}
                        >
                          {sec.id}
                        </div>

                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg ${sec.iconBg} shrink-0`}>
                            {sec.icon}
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">{sec.title}</h4>
                            <p className="text-[11px] text-slate-400 font-normal mt-0.5">{sec.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      {/* Items List (Flat rows matching reference) */}
                      <div className="pl-9 sm:pl-11 space-y-1">
                        {itemsInSec.map((item) => {
                          const isDone = Boolean(checkedItems[item.id]);

                          return (
                            <div
                              key={item.id}
                              onClick={() => handleToggleItem(item.id)}
                              className="py-2 sm:py-2.5 px-2 -mx-2 rounded-lg hover:bg-slate-50/70 transition-colors cursor-pointer flex items-center justify-between gap-4 select-none group"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 flex-1 items-center min-w-0">
                                <div className="md:col-span-7 flex items-baseline gap-2 min-w-0">
                                  <span className="text-xs font-semibold text-slate-400 shrink-0 w-4 text-right">
                                    {item.id}.
                                  </span>
                                  <span
                                    className={`text-xs font-semibold truncate ${
                                      isDone ? "line-through text-slate-400" : "text-slate-800"
                                    }`}
                                  >
                                    {item.title}
                                  </span>
                                </div>

                                <div className="md:col-span-5 text-xs text-slate-500 font-normal truncate">
                                  {item.detail}
                                </div>
                              </div>

                              {/* Custom Square Checkbox */}
                              <div
                                className={`w-4 h-4 rounded-[4px] border flex items-center justify-center shrink-0 transition-all ${
                                  isDone
                                    ? "bg-[#00705a] border-[#00705a] text-white shadow-2xs"
                                    : "border-slate-300 bg-white group-hover:border-slate-400"
                                }`}
                              >
                                {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Footer Bar: Automatic Reminders */}
                <div className="p-4 sm:p-5 bg-[#FAF8FF] border-t border-purple-100/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-xl bg-[#F3E8FF] text-[#6b46c1] border border-[#E9D5FF] flex items-center justify-center shrink-0">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Automatic Reminders</div>
                      <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                        You'll get timely notifications 1 day and 3 hours before your departure date.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowRemindersModal(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-purple-200 text-[#5e35b1] text-xs font-bold shadow-2xs hover:bg-purple-50/50 transition-colors cursor-pointer shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#6b46c1]" />
                    <span>Manage Reminders</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ══════════ RIGHT COLUMN (4 cols) ══════════ */}
        <div className="lg:col-span-4 space-y-5">
          {/* Card 1: Trip Summary */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-4 text-left">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <Plane className="w-4 h-4 text-teal-600" />
              <h3 className="text-sm font-black text-slate-900 tracking-tight">Trip Summary</h3>
            </div>

            {/* Destination Thumbnail Card */}
            <div className="flex items-center gap-3.5">
              <img
                src={tripDetails.destinationImage}
                alt={tripDetails.toCity}
                className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-2xs border border-slate-200"
              />

              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight truncate">
                    {tripType === "internal" ? "Goa, India" : `${tripDetails.toCity}, ${tripDetails.toCountry}`}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {tripType === "internal" ? "Internal Trip" : "International"}
                  </span>
                </div>

                <p className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>
                    {tripDetails.departureDate} – {tripDetails.returnDate} ({tripDetails.duration})
                  </span>
                </p>
              </div>
            </div>

            {/* 3 Requirement Pills */}
            <div className="grid grid-cols-3 gap-2 pt-1 text-center">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-2 flex flex-col items-center justify-center space-y-1">
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-slate-700 leading-tight">
                  {tripDetails.visaApprovalRequired === "No" ? "No Visa Required" : "Visa Required"}
                </span>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-2 flex flex-col items-center justify-center space-y-1">
                <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-slate-700 leading-tight">Forex Card Required</span>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-2 flex flex-col items-center justify-center space-y-1">
                <div className="w-7 h-7 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-slate-700 leading-tight">Travel Insurance Required</span>
              </div>
            </div>
          </div>

          {/* Card 2: Checklist Progress */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3 text-left">
            <h3 className="text-sm font-black text-slate-900 tracking-tight">Checklist Progress</h3>

            <div className="flex items-center gap-5 pt-1">
              {/* Circular Gauge */}
              <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    className="stroke-slate-100"
                    strokeWidth="7"
                    fill="transparent"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    className="stroke-teal-600 transition-all duration-700 ease-out"
                    strokeWidth="7"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-black text-slate-900">{progressPercent}%</span>
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xs font-bold text-slate-700">
                  {completedCount} of {totalItemsCount} completed
                </div>
                <p className="text-[11px] text-slate-400 font-medium">
                  {progressPercent === 100
                    ? "✓ All done! Ready for takeoff!"
                    : progressPercent > 50
                    ? "Great momentum! Keep ticking off items."
                    : "Complete all items before your departure date."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-2 text-left">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <Clock className="w-4 h-4 text-slate-600" />
              <h3 className="text-sm font-black text-slate-900 tracking-tight">Quick Actions</h3>
            </div>

            <div className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
              <button
                type="button"
                onClick={() => setShowItineraryModal(true)}
                className="w-full py-2.5 flex items-center justify-between hover:text-teal-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-purple-600" />
                  <span>View Travel Itinerary</span>
                </div>
                <span className="text-slate-400">&gt;</span>
              </button>

              <button
                type="button"
                onClick={() => setShowAddTravellerModal(true)}
                className="w-full py-2.5 flex items-center justify-between hover:text-teal-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Manage Co-Travellers</span>
                </div>
                <span className="text-slate-400">&gt;</span>
              </button>

              <button
                type="button"
                onClick={() => setShowWeatherModal(true)}
                className="w-full py-2.5 flex items-center justify-between hover:text-teal-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>View Weather Forecast</span>
                </div>
                <span className="text-slate-400">&gt;</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadPdf}
                className="w-full py-2.5 flex items-center justify-between hover:text-teal-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-teal-600" />
                  <span>Download Checklist (PDF)</span>
                </div>
                <span className="text-slate-400">&gt;</span>
              </button>
            </div>
          </div>

          {/* Card 4: Smart Reminders */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-3 text-left">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <Bell className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-black text-slate-900 tracking-tight">Smart Reminders</h3>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800">1 day before departure</div>
                  <div className="text-[11px] text-slate-500 font-medium">Check flight details &amp; travel documents</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800">3 hours before departure</div>
                  <div className="text-[11px] text-slate-500 font-medium">Confirm check-in &amp; baggage</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800">On departure day</div>
                  <div className="text-[11px] text-slate-500 font-medium">Carry all essential documents</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Travel Tip */}
          <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/60 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3 text-left relative overflow-hidden">
            <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs">
              <span className="text-amber-500 text-sm">💡</span>
              <span className="tracking-tight font-black">Travel Tip</span>
            </div>

            <p className="text-xs text-emerald-950 font-medium leading-relaxed">
              Keep your documents, forex card and travel insurance easily accessible in your hand luggage.
            </p>

            {/* Visual passport illustration */}
            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-12 h-14 bg-teal-800 rounded-lg shadow-sm border border-teal-700 flex flex-col items-center justify-center text-white p-1">
                  <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center text-[7px]">
                    🌐
                  </div>
                  <span className="text-[6px] font-black uppercase mt-1 tracking-widest">PASSPORT</span>
                </div>

                <div className="w-16 h-10 bg-white rounded-lg shadow-xs border border-teal-200 flex flex-col justify-center px-1.5 text-teal-800">
                  <div className="w-full h-1 bg-teal-200 rounded mb-1" />
                  <div className="w-2/3 h-1 bg-teal-100 rounded" />
                </div>
              </div>

              <span className="text-sm font-black text-emerald-700 italic tracking-tight font-heading">
                Travel Smart
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ MODALS ══════════ */}

      {/* 1. EDIT TRIP DETAILS MODAL */}
      {showEditTripModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl text-left border border-slate-200 animate-fade-up">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-base font-black text-slate-900">Edit Trip Details</h3>
              <button
                type="button"
                onClick={() => setShowEditTripModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveTripDetails} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">From (Origin City &amp; Airport)</label>
                <input
                  type="text"
                  value={editTripForm.fromCity}
                  onChange={(e) => setEditTripForm({ ...editTripForm, fromCity: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">To (Destination City &amp; Airport)</label>
                <input
                  type="text"
                  value={editTripForm.toCity}
                  onChange={(e) => setEditTripForm({ ...editTripForm, toCity: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Departure Date</label>
                  <input
                    type="text"
                    value={editTripForm.departureDate}
                    onChange={(e) => setEditTripForm({ ...editTripForm, departureDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Return Date</label>
                  <input
                    type="text"
                    value={editTripForm.returnDate}
                    onChange={(e) => setEditTripForm({ ...editTripForm, returnDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Total Duration</label>
                <input
                  type="text"
                  value={editTripForm.duration}
                  onChange={(e) => setEditTripForm({ ...editTripForm, duration: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditTripModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. ADD / EDIT CO-TRAVELLER MODAL */}
      {showAddTravellerModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl text-left border border-slate-200 animate-fade-up">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-base font-black text-slate-900">
                {editingTraveller ? "Edit Co-Traveller" : "Add Co-Traveller"}
              </h3>
              <button
                type="button"
                onClick={() => setShowAddTravellerModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveTraveller} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Edwin"
                  value={travellerForm.name}
                  onChange={(e) => setTravellerForm({ ...travellerForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Role / Status</label>
                <select
                  value={travellerForm.role}
                  onChange={(e) =>
                    setTravellerForm({ ...travellerForm, role: e.target.value as "Primary Traveller" | "Co-Traveller" })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Co-Traveller">Co-Traveller</option>
                  <option value="Primary Traveller">Primary Traveller</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Passport / ID Number</label>
                <input
                  type="text"
                  placeholder="e.g. A9876543"
                  value={travellerForm.passport}
                  onChange={(e) => setTravellerForm({ ...travellerForm, passport: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Date of Birth</label>
                <input
                  type="text"
                  placeholder="e.g. 12 Mar 1985"
                  value={travellerForm.dob}
                  onChange={(e) => setTravellerForm({ ...travellerForm, dob: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-semibold focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddTravellerModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                >
                  {editingTraveller ? "Update Companion" : "Add Companion"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. MANAGE REMINDERS MODAL */}
      {showRemindersModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl text-left border border-slate-200 animate-fade-up">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-purple-600" />
                <h3 className="text-base font-black text-slate-900">Manage Reminders</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowRemindersModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Notification Timelines</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                    <input
                      type="checkbox"
                      checked={reminders.oneDayBefore}
                      onChange={(e) => setReminders({ ...reminders, oneDayBefore: e.target.checked })}
                      className="rounded text-teal-600"
                    />
                    <span>1 day before departure (Flight details &amp; packing check)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                    <input
                      type="checkbox"
                      checked={reminders.threeHoursBefore}
                      onChange={(e) => setReminders({ ...reminders, threeHoursBefore: e.target.checked })}
                      className="rounded text-teal-600"
                    />
                    <span>3 hours before departure (Web check-in &amp; baggage confirmation)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                    <input
                      type="checkbox"
                      checked={reminders.departureDay}
                      onChange={(e) => setReminders({ ...reminders, departureDay: e.target.checked })}
                      className="rounded text-teal-600"
                    />
                    <span>On departure morning (Original IDs &amp; tickets alert)</span>
                  </label>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2">Delivery Channels</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                    <input
                      type="checkbox"
                      checked={reminders.viaEmail}
                      onChange={(e) => setReminders({ ...reminders, viaEmail: e.target.checked })}
                      className="rounded text-teal-600"
                    />
                    <span>Email ({email || "registered email"})</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                    <input
                      type="checkbox"
                      checked={reminders.viaWhatsapp}
                      onChange={(e) => setReminders({ ...reminders, viaWhatsapp: e.target.checked })}
                      className="rounded text-teal-600"
                    />
                    <span>WhatsApp Notifications</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                    <input
                      type="checkbox"
                      checked={reminders.viaSms}
                      onChange={(e) => setReminders({ ...reminders, viaSms: e.target.checked })}
                      className="rounded text-teal-600"
                    />
                    <span>SMS Alerts</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowRemindersModal(false)}
                  className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold cursor-pointer"
                >
                  Save Reminder Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. ITINERARY PREVIEW MODAL */}
      {showItineraryModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl text-left border border-slate-200 animate-fade-up max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-600" />
                <h3 className="text-base font-black text-slate-900">
                  {tripDetails.toCity} Itinerary (5-Day Plan)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowItineraryModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900">Day 1: Arrival &amp; Coastal Relaxation</div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Morning flight to Goa (GOI), airport transfer to beach resort, check-in, sunset walk along Calangute beach.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900">Day 2: North Goa Heritage &amp; Forts</div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Explore Aguada Fort, Chapora Fort, Anjuna flea market, followed by authentic Goan coastal dinner.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900">Day 3: Water Sports &amp; River Cruise</div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Water sports at Baga beach (parasailing, jet-ski), evening Mandovi river sunset catamaran cruise.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900">Day 4: South Goa Churches &amp; Spices</div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Basilica of Bom Jesus, Se Cathedral, Sahakari Spice Farm tour with traditional lunch buffet.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900">Day 5: Souvenirs &amp; Departure</div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Panjim Latin Quarter (Fontainhas) walk, local cashew shopping, afternoon departure transfer to airport.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowItineraryModal(false)}
                className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer text-xs"
              >
                Close Itinerary
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. WEATHER FORECAST MODAL */}
      {showWeatherModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl text-left border border-slate-200 animate-fade-up">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <h3 className="text-base font-black text-slate-900">
                  {tripDetails.toCity} Weather Forecast
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowWeatherModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-amber-950">29°C</div>
                  <div className="font-bold text-amber-800">Sunny &amp; Pleasant Coastal Breeze</div>
                  <div className="text-[11px] text-amber-700 mt-0.5">Humidity: 68% | UV Index: 7 (High)</div>
                </div>
                <div className="text-4xl">☀️</div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  <span>12 Oct (Arrival)</span>
                  <span className="font-bold text-slate-800">30°C / 24°C • Sunny</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  <span>13 Oct</span>
                  <span className="font-bold text-slate-800">29°C / 23°C • Clear Sky</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  <span>14 Oct</span>
                  <span className="font-bold text-slate-800">29°C / 24°C • Breezy</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  <span>15 Oct</span>
                  <span className="font-bold text-slate-800">30°C / 24°C • Sunny</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  <span>16 Oct (Departure)</span>
                  <span className="font-bold text-slate-800">28°C / 23°C • Part Sunny</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-medium leading-relaxed">
                💡 <strong>Packing Recommendation:</strong> Pack breathable cotton wear, UV sunglasses, sunscreen lotion, and a lightweight beach hat.
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={() => setShowWeatherModal(false)}
                className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreDepartureLuggage;
