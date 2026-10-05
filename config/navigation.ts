export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  icon?: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Find Experts",
    href: "/find-experts",
    children: [
      { label: "Study Visa & Admissions", href: "/find-experts?category=student", icon: "GraduationCap" },
      { label: "Work & Job Visa Counsel", href: "/find-experts?category=work", icon: "Briefcase" },
      { label: "PR & Immigration Agencies", href: "/find-experts?category=pr", icon: "Compass" },
      { label: "Licensed Lawyers & MARA", href: "/emergency", icon: "Scale" },
    ],
  },
  { label: "Self Apply", href: "/self-apply" },
  {
    label: "AI Tools",
    href: "/ai-tools",
    children: [
      { label: "All AI Migration Tools", href: "/ai-tools", icon: "Sparkles" },
      { label: "Visa Photo Resizer", href: "/ai-tools/photo-resizer", icon: "Camera" },
      { label: "AI PDF Audit", href: "/ai-tools/pdf-audit", icon: "FileCheck2" },
      { label: "SOP Generator", href: "/ai-tools/sop-generator", icon: "FileText" },
      { label: "CRS Points Calculator", href: "/ai-tools/crs-calculator", icon: "Compass" },
      { label: "Immigration Eligibility Check", href: "/ai-tools/eligibility", icon: "Scale" },
    ],
  },
  {
    label: "Visa Services",
    href: "/visa-services",
    children: [
      { label: "Visa Documentation Filing", href: "/visa-documentation", icon: "FileText" },
      { label: "Visa Form Filing Assistance", href: "/visa-form-filing", icon: "FileText" },
      { label: "VFS Appointment Support", href: "/vfs-appointment", icon: "Calendar" },
      { label: "Travel Insurance", href: "/services/travel-insurance", icon: "HeartHandshake" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Immigration News & Guides", href: "/visa-guide", icon: "FileText" },
      { label: "Visa Policy Changes 2026", href: "/visa-guide", icon: "Plane" },
      { label: "Verified Visa Experts", href: "/find-experts", icon: "Award" },
    ],
  },
];

export const FOOTER_NAV: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Trust Standards", href: "/trust" },
];
