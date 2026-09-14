import React, { useState, useMemo, useEffect } from "react";
import {
  Luggage,
  Plane,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  SlidersHorizontal,
  Search,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Plus,
  Download,
  Share2,
  FileText,
  Shield,
  ShieldCheck,
  ShieldAlert,
  ExternalLink,
  X,
  Check,
  Info,
  MoreHorizontal,
  Shirt,
  Pill,
  Laptop,
  Sparkles,
  Edit3,
  User,
  Home,
  Compass,
  ArrowRight,
  Printer,
  Copy,
  FolderDown
} from "lucide-react";

export interface PreDepartureLuggageProps {
  selectedDestination?: string;
  selectedPurpose?: string;
  selectedPassport?: string;
  fullName?: string;
  email?: string;
  visasProcessingState?: any[];
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

interface Traveller {
  id: string;
  initials: string;
  name: string;
  role: string;
  color: string;
  bagName: string;
  bagWeight: string;
  totalItems: number;
}

interface PackingItem {
  id: string;
  categoryId: string;
  name: string;
  quantity: number;
  travellerId: string;
  travellerName: string;
  location: string;
  customsRule: string;
  status: "packed" | "pending" | "action";
  notes?: string;
}

interface PackingCategory {
  id: string;
  title: string;
  itemCount: number;
}

const INITIAL_TRAVELLERS: Traveller[] = [
  {
    id: "t_prashanth",
    initials: "PP",
    name: "Prashanth",
    role: "Main Traveller",
    color: "bg-purple-600 text-white",
    bagName: "Main Suitcase",
    bagWeight: "20kg",
    totalItems: 10
  },
  {
    id: "t_anika",
    initials: "AK",
    name: "Anika",
    role: "Adult",
    color: "bg-pink-500 text-white",
    bagName: "Cabin Bag",
    bagWeight: "7kg",
    totalItems: 6
  },
  {
    id: "t_rahul",
    initials: "RK",
    name: "Rahul",
    role: "Adult",
    color: "bg-blue-600 text-white",
    bagName: "Large Suitcase",
    bagWeight: "23kg",
    totalItems: 10
  },
  {
    id: "t_cabin_shared",
    initials: "CG",
    name: "Cabin Bag (Shared)",
    role: "Shared",
    color: "bg-sky-500 text-white",
    bagName: "Cabin Bag",
    bagWeight: "7kg",
    totalItems: 6
  }
];

const INITIAL_CATEGORIES: PackingCategory[] = [
  { id: "clothing", title: "Essentials & Clothing", itemCount: 8 },
  { id: "meds", title: "Medications & Health", itemCount: 4 },
  { id: "electronics", title: "Electronics & Gadgets", itemCount: 5 },
  { id: "toiletries", title: "Toiletries & Personal Care", itemCount: 6 },
  { id: "documents", title: "Documents & Valuables", itemCount: 3 }
];

const INITIAL_PACKING_ITEMS: PackingItem[] = [
  // Essentials & Clothing (8)
  {
    id: "item-1",
    categoryId: "clothing",
    name: "T-shirts",
    quantity: 5,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-2",
    categoryId: "clothing",
    name: "Jeans",
    quantity: 2,
    travellerId: "t_anika",
    travellerName: "Anika",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-3",
    categoryId: "clothing",
    name: "Formal Shirt",
    quantity: 2,
    travellerId: "t_rahul",
    travellerName: "Rahul",
    location: "Large Suitcase",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-4",
    categoryId: "clothing",
    name: "Jacket",
    quantity: 1,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "pending"
  },
  {
    id: "item-5",
    categoryId: "clothing",
    name: "Socks",
    quantity: 6,
    travellerId: "all",
    travellerName: "All",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-6",
    categoryId: "clothing",
    name: "Thermal Innerwear",
    quantity: 2,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-7",
    categoryId: "clothing",
    name: "Walking Sneakers",
    quantity: 1,
    travellerId: "t_anika",
    travellerName: "Anika",
    location: "Cabin Bag",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-8",
    categoryId: "clothing",
    name: "Rain Poncho / Umbrella",
    quantity: 2,
    travellerId: "all",
    travellerName: "All",
    location: "Cabin Bag",
    customsRule: "No Declaration",
    status: "packed"
  },

  // Medications & Health (4)
  {
    id: "item-9",
    categoryId: "meds",
    name: "Prescription Medicine",
    quantity: 1,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Hand Bag",
    customsRule: "Medical (No Restriction)",
    status: "packed",
    notes: "Doctor prescription attached with official stamp"
  },
  {
    id: "item-10",
    categoryId: "meds",
    name: "Pain Relief Tablets",
    quantity: 1,
    travellerId: "t_anika",
    travellerName: "Anika",
    location: "Cabin Bag",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-11",
    categoryId: "meds",
    name: "Vitamin Supplements",
    quantity: 1,
    travellerId: "t_rahul",
    travellerName: "Rahul",
    location: "Large Suitcase",
    customsRule: "No Declaration",
    status: "pending"
  },
  {
    id: "item-12",
    categoryId: "meds",
    name: "Inhaler",
    quantity: 1,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Hand Bag",
    customsRule: "Medical Declaration Req.",
    status: "action",
    notes: "Requires customs declaration and doctor certificate at airport"
  },

  // Electronics & Gadgets (5)
  {
    id: "item-13",
    categoryId: "electronics",
    name: "Universal Travel Adapter",
    quantity: 2,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Cabin Bag",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-14",
    categoryId: "electronics",
    name: "Power Bank (10,000 mAh)",
    quantity: 1,
    travellerId: "t_anika",
    travellerName: "Anika",
    location: "Hand Bag",
    customsRule: "Cabin Baggage Only (Safety)",
    status: "packed",
    notes: "Aviation security prohibits power banks in checked luggage"
  },
  {
    id: "item-15",
    categoryId: "electronics",
    name: "Noise Cancelling Headphones",
    quantity: 1,
    travellerId: "t_rahul",
    travellerName: "Rahul",
    location: "Cabin Bag",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-16",
    categoryId: "electronics",
    name: "Laptop & Charger",
    quantity: 1,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Cabin Bag",
    customsRule: "High-Value Declaration",
    status: "action",
    notes: "Value exceeding USD 2,000 must be noted for customs entry"
  },
  {
    id: "item-17",
    categoryId: "electronics",
    name: "Smartphone & Cables",
    quantity: 2,
    travellerId: "all",
    travellerName: "All",
    location: "Hand Bag",
    customsRule: "No Declaration",
    status: "packed"
  },

  // Toiletries & Personal Care (6)
  {
    id: "item-18",
    categoryId: "toiletries",
    name: "Travel Toothpaste & Brush",
    quantity: 3,
    travellerId: "all",
    travellerName: "All",
    location: "Cabin Bag",
    customsRule: "Liquids < 100ml Rule",
    status: "packed"
  },
  {
    id: "item-19",
    categoryId: "toiletries",
    name: "Sunscreen SPF 50+",
    quantity: 1,
    travellerId: "t_anika",
    travellerName: "Anika",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-20",
    categoryId: "toiletries",
    name: "Shampoo & Body Wash (Mini)",
    quantity: 2,
    travellerId: "all",
    travellerName: "All",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "packed"
  },
  {
    id: "item-21",
    categoryId: "toiletries",
    name: "Moisturizer & Lip Balm",
    quantity: 2,
    travellerId: "t_anika",
    travellerName: "Anika",
    location: "Hand Bag",
    customsRule: "Liquids < 100ml Rule",
    status: "packed"
  },
  {
    id: "item-22",
    categoryId: "toiletries",
    name: "Electric Shaver & Grooming Kit",
    quantity: 1,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Main Suitcase",
    customsRule: "No Declaration",
    status: "pending"
  },
  {
    id: "item-23",
    categoryId: "toiletries",
    name: "Wet Wipes & Hand Sanitizer",
    quantity: 3,
    travellerId: "all",
    travellerName: "All",
    location: "Hand Bag",
    customsRule: "Liquids < 100ml Rule",
    status: "packed"
  },

  // Documents & Valuables (3)
  {
    id: "item-24",
    categoryId: "documents",
    name: "Passport & Japanese Visa",
    quantity: 4,
    travellerId: "all",
    travellerName: "All",
    location: "Hand Bag",
    customsRule: "Mandatory Customs Check",
    status: "packed",
    notes: "Carry original physical passport with at least 6 months validity"
  },
  {
    id: "item-25",
    categoryId: "documents",
    name: "Forex Card & Currency (Yen)",
    quantity: 1,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Hand Bag",
    customsRule: "Cash Declaration Rule",
    status: "packed"
  },
  {
    id: "item-26",
    categoryId: "documents",
    name: "International Driving Permit",
    quantity: 1,
    travellerId: "t_prashanth",
    travellerName: "Prashanth",
    location: "Hand Bag",
    customsRule: "Verified Entry Mandate",
    status: "packed"
  }
];

export const PreDepartureLuggage: React.FC<PreDepartureLuggageProps> = ({
  selectedDestination = "Japan",
  fullName = "Prashanth",
  email = ""
}) => {
  // ── Trip Information State ──
  const [tripData, setTripData] = useState({
    destination: "Japan",
    startDate: "15 Oct 2026",
    endDate: "28 Oct 2026",
    travellersCount: 4,
    visaApproved: true
  });

  // ── Travellers List State ──
  const [travellers, setTravellers] = useState<Traveller[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("travltik_luggage_travellers");
        if (saved) return JSON.parse(saved);
      } catch (_) {}
    }
    return INITIAL_TRAVELLERS;
  });

  // ── Active Selected Traveller Filter ──
  const [selectedTravellerId, setSelectedTravellerId] = useState<string>("all");

  // ── Active Status Filter Tab ──
  const [activeStatusFilter, setActiveStatusFilter] = useState<"all" | "packed" | "pending" | "action">("all");

  // ── Search & Query State ──
  const [searchQuery, setSearchQuery] = useState("");

  // ── Packing Items State ──
  const [items, setItems] = useState<PackingItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("travltik_luggage_items");
        if (saved) return JSON.parse(saved);
      } catch (_) {}
    }
    return INITIAL_PACKING_ITEMS;
  });

  // ── Collapsible Categories State ──
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    clothing: true,
    meds: true,
    electronics: false,
    toiletries: false,
    documents: false
  });

  // ── Expanded "Show More" items per category ──
  const [showAllInCategory, setShowAllInCategory] = useState<Record<string, boolean>>({
    clothing: false,
    meds: false,
    electronics: false,
    toiletries: false,
    documents: false
  });

  // ── Customs Sidebar Visibility State (Desktop & Mobile) ──
  const [isCustomsOpen, setIsCustomsOpen] = useState(true);

  // ── Mobile Bottom Navigation Tab State ──
  const [mobileActiveNav, setMobileActiveNav] = useState<"home" | "trips" | "luggage" | "customs" | "more">("luggage");

  // ── Modals State ──
  const [showEditTripModal, setShowEditTripModal] = useState(false);
  const [showAddTravellerModal, setShowAddTravellerModal] = useState(false);
  const [showCustomsDetailsModal, setShowCustomsDetailsModal] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showQuickActionModal, setShowQuickActionModal] = useState<string | null>(null);

  // ── Form States ──
  const [newTravellerName, setNewTravellerName] = useState("");
  const [newTravellerRole, setNewTravellerRole] = useState("Adult");
  const [newTravellerBag, setNewTravellerBag] = useState("Cabin Bag (7kg)");

  // Persist items & travellers
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("travltik_luggage_items", JSON.stringify(items));
        localStorage.setItem("travltik_luggage_travellers", JSON.stringify(travellers));
      } catch (_) {}
    }
  }, [items, travellers]);

  // Toggle item packed status
  const handleToggleItemStatus = (itemId: string) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          const nextStatus = item.status === "packed" ? "pending" : "packed";
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  // Toggle category expand/collapse
  const toggleCategory = (catId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Toggle show more rows in category
  const toggleShowMore = (catId: string) => {
    setShowAllInCategory(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Add new traveller
  const handleAddTravellerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTravellerName.trim()) return;

    const initials = newTravellerName
      .trim()
      .split(" ")
      .map(p => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const colors = [
      "bg-emerald-600 text-white",
      "bg-amber-600 text-white",
      "bg-indigo-600 text-white",
      "bg-rose-600 text-white",
      "bg-teal-600 text-white"
    ];
    const pickedColor = colors[travellers.length % colors.length];

    const newT: Traveller = {
      id: `t_${Date.now()}`,
      initials: initials || "TR",
      name: newTravellerName.trim(),
      role: newTravellerRole,
      color: pickedColor,
      bagName: newTravellerBag.split("(")[0].trim() || "Luggage",
      bagWeight: newTravellerBag.match(/\((.*?)\)/)?.[1] || "10kg",
      totalItems: 8
    };

    setTravellers(prev => [...prev, newT]);
    setTripData(prev => ({ ...prev, travellersCount: prev.travellersCount + 1 }));
    setNewTravellerName("");
    setShowAddTravellerModal(false);
  };

  // Calculate Metrics
  const totalItemsCount = items.length;
  const packedItemsCount = items.filter(i => i.status === "packed").length;
  const pendingItemsCount = items.filter(i => i.status === "pending").length;
  const actionItemsCount = items.filter(i => i.status === "action").length;

  // Filtered items based on:
  // 1. Status tab
  // 2. Selected traveller
  // 3. Search query
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Status filter
      if (activeStatusFilter === "packed" && item.status !== "packed") return false;
      if (activeStatusFilter === "pending" && item.status !== "pending") return false;
      if (activeStatusFilter === "action" && item.status !== "action") return false;

      // Traveller filter
      if (selectedTravellerId !== "all") {
        if (item.travellerId !== selectedTravellerId && item.travellerId !== "all") return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesTraveller = item.travellerName.toLowerCase().includes(q);
        const matchesLocation = item.location.toLowerCase().includes(q);
        const matchesCustoms = item.customsRule.toLowerCase().includes(q);
        if (!matchesName && !matchesTraveller && !matchesLocation && !matchesCustoms) return false;
      }

      return true;
    });
  }, [items, activeStatusFilter, selectedTravellerId, searchQuery]);

  // Group items by categories
  const groupedItems = useMemo(() => {
    const map: Record<string, PackingItem[]> = {};
    INITIAL_CATEGORIES.forEach(c => {
      map[c.id] = [];
    });
    filteredItems.forEach(i => {
      if (!map[i.categoryId]) map[i.categoryId] = [];
      map[i.categoryId].push(i);
    });
    return map;
  }, [filteredItems]);

  // Traveller wise packing progress breakdown
  const travellerStats = useMemo(() => {
    return travellers.map(trav => {
      const travItems = items.filter(i => i.travellerId === trav.id || (trav.id === "t_prashanth" && i.travellerId === "all"));
      const checked = travItems.filter(i => i.status === "packed").length;
      const pending = travItems.filter(i => i.status === "pending").length;
      const required = travItems.filter(i => i.status === "action").length;
      const total = trav.totalItems || travItems.length || 8;
      const percent = total > 0 ? Math.min(100, Math.round((checked / total) * 100)) : 0;

      return {
        ...trav,
        checked,
        pending,
        required,
        percent,
        displayTotal: total
      };
    });
  }, [travellers, items]);

  return (
    <div className="w-full text-slate-800 font-sans antialiased [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility] space-y-6 pb-20">
      
      {/* ── DESKTOP HEADER & TOP SEARCH BAR ── */}
      <div className="hidden lg:flex items-center justify-between gap-4 bg-white p-3.5 px-6 rounded-2xl border border-slate-100 shadow-2xs">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search trips, destinations, documents..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Notification Bell with Red Badge */}
          <button
            type="button"
            className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            title="Notifications"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 ring-2 ring-white" />
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
              LP
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-800 cursor-pointer">
              <span>Leilwyn Prashanth</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <button
              type="button"
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── 1. HERO BANNER: LUGGAGE TO BE PACKED ── */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#EFF6FF] via-[#E0F2FE] to-[#F0FDF4] border border-blue-100/80 p-5 sm:p-7 shadow-xs">
        
        {/* Background Scenic Elements & Suitcases Graphic */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 max-w-[420px] pointer-events-none hidden sm:block opacity-90 overflow-hidden">
          {/* Subtle Sun & Cloud Glow */}
          <div className="absolute top-2 right-12 w-24 h-24 bg-sky-200/40 rounded-full blur-xl" />
          
          {/* Plane Flying Across */}
          <div className="absolute top-6 right-36 -rotate-12 text-blue-500/80">
            <Plane className="w-7 h-7 stroke-[2.2]" />
          </div>

          {/* Mountain Silhouettes */}
          <svg className="absolute bottom-0 right-0 w-full h-32 text-blue-200/50" viewBox="0 0 400 120" preserveAspectRatio="none">
            <polygon points="0,120 120,40 220,120" fill="currentColor" opacity="0.6" />
            <polygon points="100,120 250,15 360,120" fill="currentColor" opacity="0.8" />
            <polygon points="200,120 320,35 400,120" fill="currentColor" opacity="0.7" />
          </svg>

          {/* Blue Hard-shell Suitcases Illustration */}
          <div className="absolute bottom-0 right-4 flex items-end gap-1.5 z-10 drop-shadow-md">
            <div className="w-12 h-20 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-lg border-t-2 border-x-2 border-blue-400 relative flex flex-col justify-between p-1 shadow-md">
              <div className="w-4 h-2 bg-slate-900 rounded-t-xs mx-auto -mt-3" />
              <div className="space-y-1 my-auto">
                <div className="h-0.5 bg-blue-400/60 rounded-full" />
                <div className="h-0.5 bg-blue-400/60 rounded-full" />
                <div className="h-0.5 bg-blue-400/60 rounded-full" />
              </div>
            </div>
            <div className="w-14 h-24 bg-gradient-to-b from-sky-500 to-blue-600 rounded-t-lg border-t-2 border-x-2 border-sky-300 relative flex flex-col justify-between p-1 shadow-lg">
              <div className="w-5 h-2.5 bg-slate-900 rounded-t-xs mx-auto -mt-3.5" />
              <div className="space-y-1.5 my-auto">
                <div className="h-0.5 bg-sky-300/60 rounded-full" />
                <div className="h-0.5 bg-sky-300/60 rounded-full" />
                <div className="h-0.5 bg-sky-300/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 space-y-5">
          {/* Title Row */}
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <Luggage className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Luggage to be Packed
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-xl font-normal">
                Organize, check and pack with confidence. Everything you need for a smooth journey.
              </p>
            </div>
          </div>

          {/* Sub-cards Row: Trip Card + 4 Metric Counters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 pt-1">
            
            {/* Left Trip Info Card */}
            <div className="lg:col-span-5 bg-white/95 backdrop-blur-xs rounded-2xl p-3.5 sm:p-4 border border-blue-100 shadow-2xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Plane className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 truncate">
                    Trip to {tripData.destination}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{tripData.startDate} - {tripData.endDate}</span>
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      <Users className="w-3 h-3" />
                      <span>{tripData.travellersCount} Travellers</span>
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowEditTripModal(true)}
                className="px-3 py-1.5 rounded-xl border border-blue-200 text-blue-700 bg-white hover:bg-blue-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs shrink-0 cursor-pointer active:scale-95"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Trip</span>
              </button>
            </div>

            {/* Right 4 Stat Counter Cards */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              
              {/* Counter 1: Travellers */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {tripData.travellersCount}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Travellers
                  </div>
                </div>
              </div>

              {/* Counter 2: Checked Items */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {packedItemsCount}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Checked Items
                  </div>
                </div>
              </div>

              {/* Counter 3: Pending */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {pendingItemsCount}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Pending
                  </div>
                </div>
              </div>

              {/* Counter 4: Action Required */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {actionItemsCount}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Action Required
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── 2. TRAVELLER FILTER PILLS & SEARCH BAR ── */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-100 shadow-2xs">
        
        {/* Horizontal Scrollable Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          
          {/* All Travellers */}
          <button
            type="button"
            onClick={() => setSelectedTravellerId("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer ${
              selectedTravellerId === "all"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Travellers ({tripData.travellersCount})
          </button>

          {/* Individual Travellers */}
          {travellers.map(t => {
            const isSelected = selectedTravellerId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTravellerId(isSelected ? "all" : t.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition shrink-0 cursor-pointer border ${
                  isSelected
                    ? "bg-blue-50 border-blue-400 text-blue-800 shadow-2xs"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className={`w-5 h-5 rounded-full ${t.color} text-[10px] font-bold flex items-center justify-center shrink-0`}>
                  {t.initials}
                </span>
                <span>{t.name}</span>
                <span className="text-slate-400 text-[10px]">({t.role})</span>
              </button>
            );
          })}
        </div>

        {/* Right Search Input & Filter Icon */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative flex-1 md:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search items, locations..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            title="Filters"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* ── 3. MAIN WORKSPACE GRID: 3 COLUMNS ON DESKTOP ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ── COLUMN 1: TRAVELLER WISE LUGGAGE (3.5 COLS) ── */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-2xs space-y-4">
            
            {/* Header */}
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Traveller Wise Luggage
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                View and manage packing status for each traveller
              </p>
            </div>

            {/* Traveller Cards List */}
            <div className="space-y-3">
              {travellerStats.map(t => (
                <div
                  key={t.id}
                  onClick={() => setSelectedTravellerId(selectedTravellerId === t.id ? "all" : t.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                    selectedTravellerId === t.id
                      ? "bg-blue-50/50 border-blue-300 ring-1 ring-blue-300 shadow-xs"
                      : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-2xs"
                  }`}
                >
                  {/* Top: Avatar, Name & Status Pills */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl ${t.color} flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs`}>
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                          {t.name} {t.role === "Main Traveller" && <span className="text-slate-400 font-normal text-[11px]">(Main Traveller)</span>}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-slate-500 font-medium">
                          <span className="text-emerald-700 font-semibold">{t.checked} Checked</span>
                          <span>•</span>
                          <span className="text-amber-700 font-semibold">{t.pending} Pending</span>
                          <span>•</span>
                          <span className="text-rose-700 font-semibold">{t.required} Required</span>
                        </div>
                      </div>
                    </div>
                    
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </div>

                  {/* Sub-row: Suitcase Weight & Progress Bar */}
                  <div className="pt-1 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Luggage className="w-3.5 h-3.5 text-slate-500" />
                        <span>{t.bagName} ({t.bagWeight})</span>
                      </span>
                      <span className="text-slate-500 font-bold">
                        {t.checked}/{t.displayTotal} items
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${t.percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* + Add Traveller Button */}
            <button
              type="button"
              onClick={() => setShowAddTravellerModal(true)}
              className="w-full py-2.5 rounded-xl border border-dashed border-blue-300 hover:border-blue-500 text-blue-600 hover:text-blue-700 bg-blue-50/40 hover:bg-blue-50 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Traveller</span>
            </button>

          </div>
        </div>

        {/* ── COLUMN 2: PACKING CHECKLIST (5.5 COLS) ── */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-2xs space-y-4">
            
            {/* Header & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Packing Checklist
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete your packing list and check customs requirements for each item.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowTemplateModal(true)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <FolderDown className="w-3.5 h-3.5 text-blue-600" />
                  <span>Import from Template</span>
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Tabs Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => setActiveStatusFilter("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer ${
                  activeStatusFilter === "all"
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Items ({totalItemsCount})
              </button>

              <button
                type="button"
                onClick={() => setActiveStatusFilter("packed")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeStatusFilter === "packed"
                    ? "bg-emerald-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Check className="w-3 h-3 stroke-[3]" />
                <span>Packed ({packedItemsCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStatusFilter("pending")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeStatusFilter === "pending"
                    ? "bg-amber-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Clock className="w-3 h-3" />
                <span>Pending ({pendingItemsCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStatusFilter("action")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeStatusFilter === "action"
                    ? "bg-rose-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <AlertCircle className="w-3 h-3" />
                <span>Action Required ({actionItemsCount})</span>
              </button>
            </div>

            {/* Category Groups Table */}
            <div className="space-y-4">
              {INITIAL_CATEGORIES.map(category => {
                const catItems = groupedItems[category.id] || [];
                const isExpanded = expandedCategories[category.id];
                const showAll = showAllInCategory[category.id];
                const visibleItems = showAll ? catItems : catItems.slice(0, 5);
                const hiddenCount = Math.max(0, catItems.length - 5);

                return (
                  <div key={category.id} className="border border-slate-100 rounded-xl overflow-hidden">
                    {/* Category Accordion Header */}
                    <div
                      onClick={() => toggleCategory(category.id)}
                      className="flex items-center justify-between p-3 bg-slate-50/70 hover:bg-slate-100/70 transition cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500" />
                        )}
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {category.title}
                        </span>
                        <span className="text-xs text-slate-400 font-semibold">
                          ({catItems.length})
                        </span>
                      </div>

                      {!isExpanded && (
                        <span className="text-xs text-blue-600 font-semibold hover:underline">
                          Show items
                        </span>
                      )}
                    </div>

                    {/* Table of Items */}
                    {isExpanded && (
                      <div className="overflow-x-auto">
                        {catItems.length === 0 ? (
                          <div className="p-4 text-center text-xs text-slate-400 font-medium">
                            No items found for current filter.
                          </div>
                        ) : (
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-white">
                                <th className="py-2.5 pl-3 pr-2">Item</th>
                                <th className="py-2.5 px-2 text-center">Qty</th>
                                <th className="py-2.5 px-2">Traveller</th>
                                <th className="py-2.5 px-2">Location</th>
                                <th className="py-2.5 px-2">Customs</th>
                                <th className="py-2.5 pr-3 text-right">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {visibleItems.map(item => (
                                <tr
                                  key={item.id}
                                  className="hover:bg-slate-50/60 transition group"
                                >
                                  {/* Checkbox & Item Name */}
                                  <td className="py-2.5 pl-3 pr-2 font-semibold text-slate-900">
                                    <div className="flex items-center gap-2 min-w-0">
                                      <button
                                        type="button"
                                        onClick={() => handleToggleItemStatus(item.id)}
                                        className={`w-4 h-4 rounded-md border flex items-center justify-center transition shrink-0 cursor-pointer ${
                                          item.status === "packed"
                                            ? "bg-emerald-600 border-emerald-600 text-white"
                                            : "border-slate-300 bg-white hover:border-slate-400"
                                        }`}
                                      >
                                        {item.status === "packed" && <Check className="w-3 h-3 stroke-[3]" />}
                                      </button>
                                      <span className={`truncate ${item.status === "packed" ? "text-slate-900" : "text-slate-800"}`}>
                                        {item.name}
                                      </span>
                                    </div>
                                  </td>

                                  {/* Quantity */}
                                  <td className="py-2.5 px-2 text-center text-slate-600 font-bold">
                                    {item.quantity}
                                  </td>

                                  {/* Traveller */}
                                  <td className="py-2.5 px-2 text-slate-700 whitespace-nowrap">
                                    <div className="flex items-center gap-1 text-[11px]">
                                      <User className="w-3 h-3 text-blue-500 shrink-0" />
                                      <span>{item.travellerName}</span>
                                    </div>
                                  </td>

                                  {/* Location */}
                                  <td className="py-2.5 px-2 text-slate-700 whitespace-nowrap">
                                    <div className="flex items-center gap-1 text-[11px]">
                                      <Luggage className="w-3 h-3 text-slate-400 shrink-0" />
                                      <span>{item.location}</span>
                                    </div>
                                  </td>

                                  {/* Customs */}
                                  <td className="py-2.5 px-2 whitespace-nowrap">
                                    <span className={`text-[11px] ${
                                      item.customsRule.includes("Req") || item.customsRule.includes("Declaration") && !item.customsRule.includes("No")
                                        ? "text-rose-600 font-semibold"
                                        : item.customsRule.includes("Liquids")
                                        ? "text-amber-700 font-medium"
                                        : "text-slate-500 font-normal"
                                    }`}>
                                      {item.customsRule}
                                    </span>
                                  </td>

                                  {/* Status Badge */}
                                  <td className="py-2.5 pr-3 text-right whitespace-nowrap">
                                    {item.status === "packed" && (
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                        <span>Packed</span>
                                      </span>
                                    )}
                                    {item.status === "pending" && (
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-bold border border-amber-200">
                                        <Clock className="w-3 h-3" />
                                        <span>Pending</span>
                                      </span>
                                    )}
                                    {item.status === "action" && (
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[11px] font-bold border border-rose-200">
                                        <AlertCircle className="w-3 h-3" />
                                        <span>Action</span>
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}

                        {/* Show More Link */}
                        {hiddenCount > 0 && !showAll && (
                          <div className="p-2.5 bg-slate-50/50 border-t border-slate-100 text-left pl-4">
                            <button
                              type="button"
                              onClick={() => toggleShowMore(category.id)}
                              className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 cursor-pointer"
                            >
                              <span>Show {hiddenCount} more items</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ── COLUMN 3: CUSTOMS & DECLARATIONS + QUICK ACTIONS (3 COLS) ── */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Card 1: Customs & Declarations */}
          {isCustomsOpen && (
            <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-2xs space-y-4 relative">
              
              {/* Top Header with Close Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    Customs &amp; Declarations
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCustomsOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Destination Pill */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2.5">
                  {/* Japan Flag Circle */}
                  <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-2xs overflow-hidden">
                    <div className="w-3 h-3 rounded-full bg-rose-600" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Destination</div>
                    <div className="text-xs font-bold text-slate-900">{tripData.destination}</div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                  <span>Visa Approved</span>
                </span>
              </div>

              {/* Key Customs Requirements List */}
              <div className="space-y-2.5 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Customs Requirements
                </div>

                <div className="space-y-2 text-xs">
                  {/* Item 1 */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Luggage className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Personal items</div>
                      <div className="text-[11px] text-slate-500">No declaration required</div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Pill className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Medications</div>
                      <div className="text-[11px] text-rose-600 font-semibold">Medical declaration required</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Laptop className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Electronics</div>
                      <div className="text-[11px] text-slate-500">May require declaration (depends on value)</div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-bold text-[11px]">¥</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Baggage value</div>
                      <div className="text-[11px] text-slate-500">If over ¥1,000,000 (approx. USD 6,500)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Full Customs Guide Button */}
              <a
                href="/visa/japan?tab=customs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>View Full Customs Guide</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Attention Alert Callout */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-[11.5px] text-slate-700 leading-relaxed">
                    <strong>You have 2 items requiring attention.</strong> Please check the customs requirements for medications and high-value items.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowCustomsDetailsModal(true)}
                  className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  View Details
                </button>
              </div>

            </div>
          )}

          {/* Card 2: Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Quick Actions
              </h3>
            </div>

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setShowQuickActionModal("Search Item Location")}
                className="w-full p-2.5 rounded-xl hover:bg-slate-50 text-left flex items-center justify-between transition cursor-pointer text-xs font-semibold text-slate-700 group"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  <span>Search Item Location</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => setShowQuickActionModal("Check Customs Requirements")}
                className="w-full p-2.5 rounded-xl hover:bg-slate-50 text-left flex items-center justify-between transition cursor-pointer text-xs font-semibold text-slate-700 group"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  <span>Check Customs Requirements</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.print();
                }}
                className="w-full p-2.5 rounded-xl hover:bg-slate-50 text-left flex items-center justify-between transition cursor-pointer text-xs font-semibold text-slate-700 group"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  <span>Download Packing List</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Packing list share link copied to clipboard!");
                }}
                className="w-full p-2.5 rounded-xl hover:bg-slate-50 text-left flex items-center justify-between transition cursor-pointer text-xs font-semibold text-slate-700 group"
              >
                <div className="flex items-center gap-2.5">
                  <Share2 className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  <span>Share with Travellers</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ── 4. MOBILE BOTTOM NAVIGATION BAR ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-2 flex items-center justify-around shadow-lg">
        <button
          type="button"
          onClick={() => setMobileActiveNav("home")}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            mobileActiveNav === "home" ? "text-blue-600" : "text-slate-400"
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>

        <button
          type="button"
          onClick={() => setMobileActiveNav("trips")}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            mobileActiveNav === "trips" ? "text-blue-600" : "text-slate-400"
          }`}
        >
          <Plane className="w-4 h-4" />
          <span>Trips</span>
        </button>

        <button
          type="button"
          onClick={() => setMobileActiveNav("luggage")}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            mobileActiveNav === "luggage" ? "text-blue-600" : "text-slate-400"
          }`}
        >
          <div className="p-1 rounded-lg bg-blue-50 text-blue-600">
            <Luggage className="w-4 h-4" />
          </div>
          <span className="text-blue-600 font-bold">Luggage</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setMobileActiveNav("customs");
            setIsCustomsOpen(true);
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            mobileActiveNav === "customs" ? "text-blue-600" : "text-slate-400"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Customs</span>
        </button>

        <button
          type="button"
          onClick={() => setMobileActiveNav("more")}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            mobileActiveNav === "more" ? "text-blue-600" : "text-slate-400"
          }`}
        >
          <MoreHorizontal className="w-4 h-4" />
          <span>More</span>
        </button>
      </div>

      {/* ── 5. MODALS & POPUPS ── */}

      {/* Edit Trip Modal */}
      {showEditTripModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Edit Trip Details</h3>
              <button
                type="button"
                onClick={() => setShowEditTripModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Destination Country</label>
                <input
                  type="text"
                  value={tripData.destination}
                  onChange={e => setTripData(prev => ({ ...prev, destination: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Start Date</label>
                  <input
                    type="text"
                    value={tripData.startDate}
                    onChange={e => setTripData(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">End Date</label>
                  <input
                    type="text"
                    value={tripData.endDate}
                    onChange={e => setTripData(prev => ({ ...prev, endDate: e.target.value }))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowEditTripModal(false)}
                className="px-4 py-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setShowEditTripModal(false)}
                className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 text-xs font-bold cursor-pointer shadow-xs"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Traveller Modal */}
      {showAddTravellerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <form
            onSubmit={handleAddTravellerSubmit}
            className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Add New Traveller</h3>
              <button
                type="button"
                onClick={() => setShowAddTravellerModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newTravellerName}
                  onChange={e => setNewTravellerName(e.target.value)}
                  placeholder="e.g. Sameer Sharma"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Traveller Role</label>
                <select
                  value={newTravellerRole}
                  onChange={e => setNewTravellerRole(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white"
                >
                  <option value="Adult">Adult</option>
                  <option value="Child">Child</option>
                  <option value="Senior">Senior</option>
                  <option value="Shared">Shared Cabin Bag</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Allocated Luggage</label>
                <select
                  value={newTravellerBag}
                  onChange={e => setNewTravellerBag(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white"
                >
                  <option value="Main Suitcase (20kg)">Main Suitcase (20kg)</option>
                  <option value="Cabin Bag (7kg)">Cabin Bag (7kg)</option>
                  <option value="Large Suitcase (23kg)">Large Suitcase (23kg)</option>
                  <option value="Hand Bag (5kg)">Hand Bag (5kg)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddTravellerModal(false)}
                className="px-4 py-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 text-xs font-bold cursor-pointer shadow-xs"
              >
                Add Traveller
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Customs Attention Modal */}
      {showCustomsDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-600">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-base font-bold text-slate-900">Customs Attention Items</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCustomsDetailsModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              These items require special customs declaration or physical certificates upon arrival in {tripData.destination}:
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
                <div className="font-bold text-rose-950 flex items-center justify-between">
                  <span>1. Inhaler (Prescription Medication)</span>
                  <span className="text-[10px] bg-rose-200 text-rose-800 px-2 py-0.5 rounded-full font-bold">Action Required</span>
                </div>
                <div className="text-rose-800 text-[11px]">
                  Requires an official doctor certificate / prescription copy printed in English detailing dosage and active medical diagnosis.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                <div className="font-bold text-amber-950 flex items-center justify-between">
                  <span>2. Laptop &amp; High-Value Gadgets</span>
                  <span className="text-[10px] bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-bold">Duty Assessment</span>
                </div>
                <div className="text-amber-800 text-[11px]">
                  High-value personal electronics exceeding equivalent of ¥200,000 should be declared on arrival to avoid duty complications upon return.
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowCustomsDetailsModal(false)}
                className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 text-xs font-bold cursor-pointer"
              >
                Understood &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import from Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Import Packing Template</h3>
              <button
                type="button"
                onClick={() => setShowTemplateModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  setItems(INITIAL_PACKING_ITEMS);
                  setShowTemplateModal(false);
                }}
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-left flex items-center justify-between transition cursor-pointer"
              >
                <div>
                  <div className="font-bold text-slate-900">Japan 14-Day Autumn Travel Master List</div>
                  <div className="text-slate-500 text-[11px]">26 Items • Clothes, electronics, cold weather ponchos</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setItems(INITIAL_PACKING_ITEMS);
                  setShowTemplateModal(false);
                }}
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-left flex items-center justify-between transition cursor-pointer"
              >
                <div>
                  <div className="font-bold text-slate-900">International Student Semester Starter</div>
                  <div className="text-slate-500 text-[11px]">Academic documents, power banks, medicines, forex card</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PreDepartureLuggage;
