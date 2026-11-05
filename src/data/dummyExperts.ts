// Shared dummy experts data for platform consistency
export interface PlatformExpert {
  id: string;
  name: string;
  businessName?: string;
  fullName?: string;
  role: string;
  city: string;
  state?: string;
  country?: string;
  address?: string;
  bio: string;
  tags: string[];
  countries: string[];
  rating: number;
  reviews: number;
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
}

export const dummyExperts: PlatformExpert[] = [
  {
    id: "d1", name: "Arjun Mehta", role: "Canada Immigration Consultant",
    city: "Hyderabad", bio: "10+ years helping Indian students and professionals get Canadian PR, Study Permits & PGWP. 850+ successful cases across Ontario and BC.",
    tags: ["Express Entry", "Study Permit", "PGWP", "PNP", "PR"],
    countries: ["Canada"], rating: 4.9, reviews: 312, isVerified: true, isRemote: true, govReg: "ICCRC-R123456",
    image: "/experts/arjun_mehta.jpg", experienceYears: "10+ Years", languages: ["English", "Hindi", "Telugu"]
  },
  {
    id: "d2", name: "Priya Sharma", role: "UK & Australia Visa Specialist",
    city: "Mumbai", bio: "Specialist in UK Skilled Worker, Graduate Route, and Australian Skilled Independent visa. Former UK Home Office consultant with 8 years' experience.",
    tags: ["UK Skilled Worker", "Graduate Route", "Australia 189", "Student Visa", "SOL"],
    countries: ["United Kingdom", "Australia"], rating: 4.8, reviews: 198, isVerified: true, isRemote: true, govReg: "OISC-L2-00234",
    image: "/experts/priya_sharma.jpg", experienceYears: "8+ Years", languages: ["English", "Hindi", "Marathi"]
  },
  {
    id: "d3", name: "Karthik Reddy", role: "US Immigration Attorney",
    city: "Bangalore", bio: "Specializing in H-1B, L-1, O-1 visas and EB-1/EB-2 NIW green cards. Handled 500+ USCIS petitions with a 96% approval rate.",
    tags: ["H-1B", "L-1A", "EB-1", "EB-2 NIW", "O-1"],
    countries: ["United States"], rating: 5.0, reviews: 421, isVerified: true, isRemote: true, govReg: "BAR-CA-78912",
    image: "/experts/karthik_reddy.jpg", experienceYears: "12+ Years", languages: ["English", "Hindi", "Kannada"]
  },
  {
    id: "d4", name: "Nisha Agarwal", role: "Student Visa Counsellor",
    city: "Delhi", bio: "Helped 1,200+ students secure admissions and visas to top UK, Canada and Australian universities. Free SOP review for first consultation.",
    tags: ["Student Visa", "SOP Review", "University Shortlisting", "GIC", "IELTS Prep"],
    countries: ["Canada", "United Kingdom", "Australia"], rating: 4.7, reviews: 563, isVerified: true, isRemote: true, govReg: "",
    image: "/experts/nisha_agarwal.jpg", experienceYears: "7+ Years", languages: ["English", "Hindi"]
  },
  {
    id: "d5", name: "Rahul Kapoor", role: "Germany & Schengen Visa Specialist",
    city: "Pune", bio: "Fluent in German (C1) with deep expertise in Schengen Tourist Visas, Germany Blue Card, Job Seeker Visa, and EU mobility applications. 7+ years in Frankfurt.",
    tags: ["Schengen Visa", "Tourist Visa", "Visitor Visa", "Germany Blue Card", "Job Seeker Visa", "EU Blue Card", "Freelancer Visa"],
    countries: ["Germany", "Greece", "Schengen Countries", "Netherlands", "Austria", "Europe"], rating: 4.8, reviews: 142, isVerified: true, isRemote: true, govReg: "BAMF-2023-4512",
    image: "/experts/rahul_kapoor.jpg", experienceYears: "7+ Years", languages: ["English", "Hindi", "German"]
  },
  {
    id: "d6", name: "Deepa Nair", role: "PR & Citizenship Consultant",
    city: "Chennai", bio: "Certified RCIC with expertise in Canadian citizenship, sponsorship, and Refugee protection cases. 18 years of experience, 99% approval rate.",
    tags: ["Canadian PR", "Citizenship", "Family Sponsorship", "Refugee", "Super Visa"],
    countries: ["Canada"], rating: 4.9, reviews: 389, isVerified: true, isRemote: true, govReg: "ICCRC-R987654",
    image: "/experts/deepa_nair.jpg", experienceYears: "18+ Years", languages: ["English", "Tamil", "Hindi"]
  },
  {
    id: "d7", name: "Vikram Singh", role: "UAE & Gulf Work Visa Specialist",
    city: "Ahmedabad", bio: "Specialized in UAE employment visas, Dubai Freelancer permits, and Gulf work permits for skilled Indian professionals. 2000+ placements.",
    tags: ["UAE Work Visa", "Dubai Freelancer", "Qatar", "Saudi Iqama", "Kuwait"],
    countries: ["UAE", "Qatar", "Saudi Arabia", "Kuwait"], rating: 4.6, reviews: 278, isVerified: false, isRemote: true, govReg: "",
    image: "/experts/vikram_singh.jpg", experienceYears: "6+ Years", languages: ["English", "Hindi", "Gujarati"]
  },
  {
    id: "d8", name: "Sneha Joshi", role: "New Zealand & Australia Skilled Visa",
    city: "Nagpur", bio: "Expert in New Zealand Skilled Migrant, Essential Skills Visa, and Australian state-nominated PR pathways. 450+ NZ approvals.",
    tags: ["NZ Skilled Migrant", "Essential Skills", "Australia 190", "Australia 491", "RSE"],
    countries: ["New Zealand", "Australia"], rating: 4.7, reviews: 203, isVerified: true, isRemote: true, govReg: "IAA-0023456",
    image: "/experts/sneha_joshi.jpg", experienceYears: "9+ Years", languages: ["English", "Hindi", "Marathi"]
  },
  {
    id: "d9", name: "Amir Khan", role: "Immigration Lawyer",
    city: "Hyderabad", bio: "Immigration law practitioner handling visa refusals, appeals, bans, and court representations for Canada, UK, and Australia. Free 30-min consultation.",
    tags: ["Visa Refusal", "Appeals", "Deportation Defence", "Ban Lifting", "Legal Representation"],
    countries: ["Canada", "United Kingdom", "Australia"], rating: 4.9, reviews: 97, isVerified: true, isRemote: true, govReg: "BAR-HYD-3344",
    image: "/experts/amir_khan.jpg", experienceYears: "11+ Years", languages: ["English", "Hindi", "Urdu", "Telugu"]
  },
  {
    id: "d10", name: "Kavitha Menon", role: "Business & Investor Visa Consultant",
    city: "Kochi", bio: "Helping HNIs and entrepreneurs migrate through Canada Start-Up Visa, UK Innovator Founder, and Portugal Golden Visa programs.",
    tags: ["Canada Start-Up Visa", "UK Innovator", "Portugal Golden Visa", "Business Visa", "Investment"],
    countries: ["Canada", "United Kingdom", "Portugal"], rating: 4.8, reviews: 56, isVerified: true, isRemote: true, govReg: "ICCRC-R556677",
    image: "/experts/kavitha_menon.jpg", experienceYears: "14+ Years", languages: ["English", "Malayalam", "Hindi"]
  },
  {
    id: "d11", name: "Suresh Babu", role: "Work Permit & LMIA Specialist",
    city: "Coimbatore", bio: "LMIA expert with strong employer network in Canada. Helping skilled workers in healthcare, construction, and IT get work permits fast.",
    tags: ["LMIA", "Work Permit", "PGWP", "Healthcare Workers", "NOC Matching"],
    countries: ["Canada"], rating: 4.6, reviews: 184, isVerified: false, isRemote: true, govReg: "",
    image: "/experts/suresh_babu.jpg", experienceYears: "8+ Years", languages: ["English", "Tamil"]
  },
  {
    id: "d12", name: "Ritu Malhotra", role: "Tourist & Visit Visa Specialist",
    city: "Jaipur", bio: "Specializing in Schengen Tourist Visas, Greece & European vacations, USA B-2, Canada visitor, and family visit applications. 98% success rate with fast-track slot booking.",
    tags: ["Tourist Visa", "Visitor Visa", "Schengen Visa", "Greece Tourist", "USA B-2", "Canada Visitor", "Super Visa", "Travel History"],
    countries: ["Greece", "Schengen Countries", "Europe", "Germany", "France", "Italy", "USA", "Canada"], rating: 4.9, reviews: 445, isVerified: true, isRemote: true, govReg: "VERIFIED-TRAVEL-ADVISOR",
    image: "/experts/ritu_malhotra.jpg", experienceYears: "10+ Years", languages: ["English", "Hindi"]
  },
  {
    id: "d13", name: "Dimitris Alexiou", role: "Greece & Schengen Tourist Visa Advisor",
    city: "Athens & Mumbai", bio: "Direct Greek travel mobility liaison facilitating Greece tourist visas, Mediterranean cultural & sports tours, golden visa inquiries, and fast European consular filing.",
    tags: ["Greece Tourist", "Tourist Visa", "Visitor Visa", "Schengen Visa", "Europe Tour", "Sports Tour"],
    countries: ["Greece", "Schengen Countries", "Europe", "Worldwide"], rating: 4.9, reviews: 188, isVerified: true, isRemote: true, govReg: "GNTO-EL-9082",
    image: "/experts/amir_khan.jpg", experienceYears: "9+ Years", languages: ["English", "Greek", "Hindi"]
  },
];

export function getExpertById(id: string): PlatformExpert | undefined {
  if (!id) return undefined;
  const cleanId = id.trim();
  return dummyExperts.find(e => e.id.toLowerCase() === cleanId.toLowerCase());
}
