export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "AI Tools",
    href: "/ai-tools",
    children: [
      { label: "Photo Resizer", href: "/ai-tools/photo-resizer" },
      { label: "PDF Audit", href: "/ai-tools/pdf-audit" },
      { label: "SOP Generator", href: "/ai-tools/sop-generator" },
      { label: "CRS Calculator", href: "/ai-tools/crs-calculator" },
      { label: "Eligibility Check", href: "/ai-tools/eligibility" },
    ],
  },
  { label: "Find Experts", href: "/find-experts" },
  { label: "Self Apply", href: "/self-apply" },
  { label: "Jobs", href: "/jobs" },
  { label: "Escrow Protection", href: "/escrow" },
  { label: "Visa Services", href: "/visa-services" },
  { label: "Resources", href: "/resources" },
];

export const FOOTER_NAV: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Trust Standards", href: "/trust" },
];
