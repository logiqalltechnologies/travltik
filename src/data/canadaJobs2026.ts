export interface CanadaJobVacancy {
  sNo: number;
  id: string;
  title: string;
  vacancies: number;
  salaryMonthly: string;
  salaryMin: number;
  salaryMax: number;
  category: "IT & Admin" | "Engineering & Skilled Trades" | "Hospitality & Food" | "General & Operations";
  location: string;
  lmiaStatus: string;
  experienceRequired: string;
  description: string;
}

export const CANADA_VACANCIES_2026: CanadaJobVacancy[] = [
  {
    sNo: 1,
    id: "can-2026-01",
    title: "Computer Operator",
    vacancies: 59,
    salaryMonthly: "$4,230 - $4,880",
    salaryMin: 4230,
    salaryMax: 4880,
    category: "IT & Admin",
    location: "Toronto, ON & Ottawa, ON",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "1+ Year in Computer Operations / Data Systems",
    description: "Responsible for managing and maintaining mainframe/workstation setups, executing scheduled data backups, logging batch processing, and supporting system audits in a corporate office environment."
  },
  {
    sNo: 2,
    id: "can-2026-02",
    title: "Civil Engineering",
    vacancies: 41,
    salaryMonthly: "$4,880 - $4,980",
    salaryMin: 4880,
    salaryMax: 4980,
    category: "Engineering & Skilled Trades",
    location: "Calgary, AB & Edmonton, AB",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "Degree/Diploma + 2+ Years Site Experience",
    description: "Overseeing commercial and infrastructure project construction, site layout verification, coordinating subcontractors, monitoring building code compliance, and drafting weekly progress reports."
  },
  {
    sNo: 3,
    id: "can-2026-03",
    title: "Food Packing",
    vacancies: 67,
    salaryMonthly: "$3,580 - $4,040",
    salaryMin: 3580,
    salaryMax: 4040,
    category: "General & Operations",
    location: "Vancouver, BC & Surrey, BC",
    lmiaStatus: "Guaranteed LMIA Work Permit",
    experienceRequired: "Freshers Welcome · Basic English Comprehension",
    description: "Packaging processed food items on automated conveyers, verifying seal integrity and expiry labeling, sorting batches according to shipping orders, and maintaining strict Canadian food safety hygiene standards."
  },
  {
    sNo: 4,
    id: "can-2026-04",
    title: "A/C Technician",
    vacancies: 12,
    salaryMonthly: "$3,980 - $4,270",
    salaryMin: 3980,
    salaryMax: 4270,
    category: "Engineering & Skilled Trades",
    location: "Mississauga, ON & Brampton, ON",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "HVAC Certification / 2+ Years Experience",
    description: "Installation, preventative maintenance, and diagnostics of residential and commercial HVAC units, troubleshooting cooling systems, pressure testing, and replacing compressors in accordance with environmental regulations."
  },
  {
    sNo: 5,
    id: "can-2026-05",
    title: "Driver (Light & Commercial)",
    vacancies: 75,
    salaryMonthly: "$3,290 - $4,320",
    salaryMin: 3290,
    salaryMax: 4320,
    category: "General & Operations",
    location: "Toronto, ON & Hamilton, ON",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "Valid Driving License (Min 2 Years Experience)",
    description: "Safe transport of goods, materials, and corporate personnel across provincial routes. Performing pre-trip vehicle inspections, maintaining logbooks, adhering to highway safety guidelines, and assisting with loading."
  },
  {
    sNo: 6,
    id: "can-2026-06",
    title: "Chef (Continental & Multi-Cuisine)",
    vacancies: 81,
    salaryMonthly: "$3,440 - $4,180",
    salaryMin: 3440,
    salaryMax: 4180,
    category: "Hospitality & Food",
    location: "Montreal, QC & Quebec City, QC",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "2+ Years in Commercial Kitchen or Hotel",
    description: "Designing recipes, preparing hot and cold dishes for star-rated restaurant operations, managing kitchen inventory, ensuring portion control, and upholding strict HACCP food preparation and sanitation standards."
  },
  {
    sNo: 7,
    id: "can-2026-07",
    title: "Waiter / Food Service Specialist",
    vacancies: 75,
    salaryMonthly: "$3,580 - $4,420",
    salaryMin: 3580,
    salaryMax: 4420,
    category: "Hospitality & Food",
    location: "Vancouver, BC & Victoria, BC",
    lmiaStatus: "Guaranteed LMIA Work Permit",
    experienceRequired: "Pleasing Personality · 6+ Months Hospitality",
    description: "Welcoming international dining guests, presenting seasonal menus, taking computerized food and drink orders, coordinating table service, and delivering exceptional customer satisfaction in upscale dining rooms."
  },
  {
    sNo: 8,
    id: "can-2026-08",
    title: "Supervisor (Operations & Facility)",
    vacancies: 62,
    salaryMonthly: "$4,080 - $5,420",
    salaryMin: 4080,
    salaryMax: 5420,
    category: "General & Operations",
    location: "Toronto, ON & Calgary, AB",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "3+ Years Supervisory or Team Lead Experience",
    description: "Managing daily floor operations, shift allocation, workforce productivity metrics, resolving inter-departmental bottlenecks, enforcing workplace safety protocols, and conducting employee onboarding reviews."
  },
  {
    sNo: 9,
    id: "can-2026-09",
    title: "Computer Operator (IT & Systems)",
    vacancies: 67,
    salaryMonthly: "$3,890 - $4,540",
    salaryMin: 3890,
    salaryMax: 4540,
    category: "IT & Admin",
    location: "Ottawa, ON & Waterloo, ON",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "1+ Year Tech / Systems Support Experience",
    description: "IT support desk operations, database record maintenance, managing computer network connectivity, installing enterprise software suites, and maintaining security access controls across corporate workstations."
  },
  {
    sNo: 10,
    id: "can-2026-10",
    title: "Security Guard",
    vacancies: 62,
    salaryMonthly: "$3,220 - $3,880",
    salaryMin: 3220,
    salaryMax: 3880,
    category: "General & Operations",
    location: "Calgary, AB & Winnipeg, MB",
    lmiaStatus: "Guaranteed LMIA Work Permit",
    experienceRequired: "Physical Fitness · Clean Background",
    description: "Securing commercial premises, conducting routine foot patrols, operating CCTV surveillance stations, logging visitor and contractor credentials, and activating emergency protocol measures when required."
  },
  {
    sNo: 11,
    id: "can-2026-11",
    title: "Hotel Manager",
    vacancies: 45,
    salaryMonthly: "$3,620 - $4,280",
    salaryMin: 3620,
    salaryMax: 4280,
    category: "Hospitality & Food",
    location: "Toronto, ON & Niagara Falls, ON",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "Degree/Diploma in Hospitality + 2+ Years Exp",
    description: "Leading front-office and housekeeping teams, driving guest booking revenue, supervising concierge services, handling guest inquiries and escalations, and maintaining international hotel brand standards."
  },
  {
    sNo: 12,
    id: "can-2026-12",
    title: "Plumber",
    vacancies: 34,
    salaryMonthly: "$3,440 - $3,620",
    salaryMin: 3440,
    salaryMax: 3620,
    category: "Engineering & Skilled Trades",
    location: "Edmonton, AB & Red Deer, AB",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "Plumbing Vocational Trade / 2+ Years Exp",
    description: "Installing and repairing water supply lines, commercial drainage systems, heating pipe connections, and bathroom/kitchen fixtures while complying strictly with Canadian uniform plumbing codes."
  },
  {
    sNo: 13,
    id: "can-2026-13",
    title: "Carpenter",
    vacancies: 15,
    salaryMonthly: "$3,920 - $4,280",
    salaryMin: 3920,
    salaryMax: 4280,
    category: "Engineering & Skilled Trades",
    location: "Vancouver, BC & Kelowna, BC",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "Woodwork / Carpentry Trade + 2+ Years Exp",
    description: "Constructing structural timber frameworks, installing architectural doors, windows, drywall, and customized cabinetry, reading architectural blueprints, and utilizing modern power tools with precision."
  },
  {
    sNo: 14,
    id: "can-2026-14",
    title: "Tile Mason",
    vacancies: 75,
    salaryMonthly: "$3,480 - $3,980",
    salaryMin: 3480,
    salaryMax: 3980,
    category: "Engineering & Skilled Trades",
    location: "Calgary, AB & Regina, SK",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "Masonry / Tiling Experience (Min 1 Year)",
    description: "Surface preparation, leveling concrete beds, cutting ceramic, marble, and porcelain tiles to exact dimensions, applying mortars and water-resistant grouts across residential and commercial buildings."
  },
  {
    sNo: 15,
    id: "can-2026-15",
    title: "Housekeeping Attendant",
    vacancies: 94,
    salaryMonthly: "$3,850 - $4,180",
    salaryMin: 3850,
    salaryMax: 4180,
    category: "Hospitality & Food",
    location: "Toronto, ON & Banff, AB",
    lmiaStatus: "Guaranteed LMIA Work Permit",
    experienceRequired: "Freshers Welcome · Thorough & Diligent",
    description: "Daily sanitization and replenishment of luxury hotel guest rooms, laundering and folding linens, reporting room maintenance requirements, and ensuring spotless aesthetic hygiene across resort corridors."
  },
  {
    sNo: 16,
    id: "can-2026-16",
    title: "Electrician",
    vacancies: 34,
    salaryMonthly: "$4,180 - $4,340",
    salaryMin: 4180,
    salaryMax: 4340,
    category: "Engineering & Skilled Trades",
    location: "Vancouver, BC & Surrey, BC",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "Electrical Trade / Diploma + 2+ Years Exp",
    description: "Laying electrical conduits, pulling wiring harnesses, installing breakers and transformers, testing continuity with multimeters, and ensuring compliance with the Canadian Electrical Code (CEC)."
  },
  {
    sNo: 17,
    id: "can-2026-17",
    title: "Data Entry Specialist",
    vacancies: 65,
    salaryMonthly: "$3,920 - $4,080",
    salaryMin: 3920,
    salaryMax: 4080,
    category: "IT & Admin",
    location: "Montreal, QC & Ottawa, ON",
    lmiaStatus: "Guaranteed LMIA Work Permit",
    experienceRequired: "Min 35+ WPM Typing Speed · Basic Excel",
    description: "Accurately transcribing written documents into ERP systems, cross-checking customer and logistics records for discrepancies, generating routine spreadsheet summaries, and maintaining confidential records."
  },
  {
    sNo: 18,
    id: "can-2026-18",
    title: "Accountant",
    vacancies: 42,
    salaryMonthly: "$5,240 - $5,480",
    salaryMin: 5240,
    salaryMax: 5480,
    category: "IT & Admin",
    location: "Toronto, ON & Mississauga, ON",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "B.Com / Accounting Degree + 2+ Years Exp",
    description: "Preparing general ledgers, accounts payable and receivable reconciliation, processing Canadian payroll taxes (CPP/EI), and aiding certified CPA partners with quarterly financial audits and tax filings."
  },
  {
    sNo: 19,
    id: "can-2026-19",
    title: "Store Keeper / Inventory Clerk",
    vacancies: 15,
    salaryMonthly: "$3,580 - $4,320",
    salaryMin: 3580,
    salaryMax: 4320,
    category: "General & Operations",
    location: "Calgary, AB & Edmonton, AB",
    lmiaStatus: "LMIA Sponsorship Approved",
    experienceRequired: "1+ Year Warehouse / Stockroom Experience",
    description: "Receiving inbound shipments, inspecting invoices against received purchase orders, labeling bins using barcode scanners, coordinating FIFO inventory dispersion, and performing monthly stock takes."
  }
];

export const TOTAL_CANADA_2026_VACANCIES = CANADA_VACANCIES_2026.reduce((acc, j) => acc + j.vacancies, 0);
