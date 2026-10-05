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
      { label: "All AI Migration Tools", href: "/ai-tools" },
      { label: "Visa Photo Resizer", href: "/ai-tools/photo-resizer" },
      { label: "AI PDF Audit", href: "/ai-tools/pdf-audit" },
      { label: "SOP Generator", href: "/ai-tools/sop-generator" },
      { label: "CRS Points Calculator", href: "/ai-tools/crs-calculator" },
      { label: "Immigration Eligibility Check", href: "/ai-tools/eligibility" },
    ],
  },
  { label: "Find Experts", href: "/find-experts" },
  { label: "Self Apply", href: "/self-apply" },
  { label: "Jobs", href: "/jobs" },
];

export const FOOTER_NAV: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Trust Standards", href: "/trust" },
];
