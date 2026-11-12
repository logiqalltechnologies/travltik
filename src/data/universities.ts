export interface UniversityProgram {
  level: string;
  name: string;
  duration: string;
  fee_usd?: number | null;
  fee_eur?: number | null;
  original_fee_eur?: number | null;
  scholarship_fee_usd?: number | null;
  scholarship_fee_eur?: number | null;
  fee_rub?: string | null;
  payment_terms?: string;
  eligibility?: string;
  note?: string;
}

export interface UniversityItem {
  id: string;
  name: string;
  country: string;
  region: string;
  city: string;
  address?: string;
  website: string;
  accreditation: string;
  about: string;
  highlights: string[];
  programs: UniversityProgram[];
  documents_visa: string[];
  contact: {
    name?: string;
    phone?: string;
    email?: string;
    note?: string;
  };
}

export const UNIVERSITIES_DATA: UniversityItem[] = [
  // 1. BPG COLLEGE, MAURITIUS
  {
    id: "bpg-mauritius",
    name: "BPG College (Business & Professional Growth Ltd)",
    country: "Mauritius",
    region: "Africa",
    city: "Port Louis",
    address: "Lot G03, St James court, Port Louis, Mauritius 41302",
    website: "www.bpginstitution.mu",
    accreditation: "MQA Approved",
    about: "BPG is a forward-thinking education provider dedicated to delivering practical, industry-aligned training. From ABE Level 4 & 5 Diplomas to undergraduate degree programs, BPG bridges the gap between academic theory and workplace excellence.",
    highlights: ["IELTS Not Required", "Pay Tuition Fee After Visa Approval", "No Visa Interviews", "Global Pathways to UK & Europe", "Part-time Job Assistance"],
    programs: [
      { level: "Diploma", name: "Business Management Diploma", duration: "1 Year", fee_usd: 4200, payment_terms: "Payable after Visa Approval", eligibility: "10th, 10+2, or Any Graduate. No IELTS." }
    ],
    documents_visa: [
      "Two Passport-size Photographs", "Passport (Valid 6+ months)", 
      "Medical Report (HIV, Hepatitis B/C, Chest X-ray, Leprosy, FBC, VDRL, TPHA)", 
      "Medical Fitness Certificate", "Police Clearance Certificate (Govt of India stamp)", 
      "Educational Documents", "Bank Statement (Last 6 months, Min. INR 4,00,000)"
    ],
    contact: { name: "Rajnish Kumar", phone: "+91 8586900846", email: "southasia@bpginstitution.mu" }
  },
  
  // 2. GATEBRIDGE GERMANY
  {
    id: "gatebridge-germany",
    name: "Gatebridge Germany (EU Business School Partnership)",
    country: "Germany",
    region: "Europe",
    city: "Munich",
    website: "Contact for Details",
    accreditation: "Pathway to EU Business School",
    about: "Gatebridge Germany offers preparation programmes and pathways to degree courses in partnership with EU Business School, Munich.",
    highlights: ["Pathway to EU Degree", "Munich Campus Location", "Preparation Programme Available"],
    programs: [
      { level: "Preparation", name: "Gatebridge Preparation Programme", duration: "N/A", fee_usd: null, eligibility: "Contact for Details" },
      { level: "Degree", name: "EU Business School Degree (Munich)", duration: "N/A", fee_usd: null, eligibility: "Contact for Details" }
    ],
    documents_visa: [
      "Official Admission Letter", "Blocked Account (€11,208 approx)", "Health Insurance", 
      "APS Certificate (Mandatory for Indians)", "Accommodation Proof", "Valid Passport"
    ],
    contact: { note: "Contact University for Details" }
  },

  // 3. A.S. GRIBOYEDOV MOSCOW UNIVERSITY, RUSSIA
  {
    id: "griboyedov-moscow",
    name: "A.S. Griboyedov Moscow University (IMPE)",
    country: "Russia",
    region: "Europe",
    city: "Moscow",
    address: "111024, Moscow, Entuziastov Highway, 21",
    website: "https://www.iile.ru/",
    accreditation: "State Accredited",
    about: "Founded in 1993, A.S. Griboyedov Moscow University offers programs in Economics, Law, Journalism, Psychology, and Linguistics.",
    highlights: ["32 Years Experience", "State Accredited", "Partnerships with Gazprom & Rosseti", "Flexible Study Formats"],
    programs: [
      { level: "Bachelor's", name: "Various (Economics, Law, IT, etc.)", duration: "4 Years", fee_rub: "56,000 RUB/year", fee_usd: null },
      { level: "Master's", name: "Various Programs", duration: "2 Years", fee_rub: null, fee_usd: null }
    ],
    documents_visa: [
      "Official Invitation Letter", "Valid Passport (18+ months validity)", "Visa Application Form", 
      "Passport Photos", "HIV Test Certificate (Valid 3 months)", "Medical Insurance", "Proof of Financial Ability"
    ],
    contact: { phone: "+7 (495) 673-73-71" }
  },

  // 4. CDA COLLEGE, CYPRUS (EU)
  {
    id: "cda-college-cyprus",
    name: "CDA College",
    country: "Cyprus",
    region: "Republic of Cyprus (EU)",
    city: "Nicosia, Limassol, Larnaca, Paphos",
    website: "https://www.cdacollege.ac.cy",
    accreditation: "Registered with Cyprus Ministry of Education",
    about: "One of the largest colleges in Cyprus with 50 years of experience and campuses in 4 cities.",
    highlights: ["Largest College in Cyprus", "State Student Grant Eligible", "Erasmus+ Participation"],
    programs: [
      { level: "Master's", name: "MBA", duration: "N/A", fee_eur: 4500, original_fee_eur: 8325, note: "Special Offer" },
      { level: "Bachelor's", name: "BA Business Administration", duration: "4 Years", fee_eur: 3500, original_fee_eur: 5500, note: "Special Offer" }
    ],
    documents_visa: [
      "High School Certificate", "IELTS/TOEFL or Internal Test", "Registration Fee: €300"
    ],
    contact: { phone: "7777-0232", email: "admissions@cdacollege.ac.cy" }
  },

  // 5. UCLAN CYPRUS (EU)
  {
    id: "uclan-cyprus",
    name: "UCLan Cyprus (University of Central Lancashire)",
    country: "Cyprus",
    region: "Republic of Cyprus (EU)",
    city: "Pyla, Larnaca",
    website: "https://www.uclancyprus.ac.cy",
    accreditation: "UK University Branch Campus",
    about: "UCLan Cyprus is a branch campus of the UK's University of Central Lancashire, offering UK-accredited degrees in a Mediterranean setting.",
    highlights: ["UK Degree Awarded", "Generous Bursaries", "English-Taught Programs"],
    programs: [
      { level: "Bachelor's", name: "Various Bachelor's Programmes", duration: "4 Years", fee_eur: 6000, original_fee_eur: 9950, note: "After €950 bursary" },
      { level: "Master's", name: "Various Master's Programmes", duration: "1-2 Years", fee_eur: 6500, original_fee_eur: 10500, note: "After €1,000 bursary" }
    ],
    documents_visa: [
      "Passport (2+ years validity)", "High School Certificate (Original Stamps)", 
      "Police Certificate (Valid 6 months)", "Medical Report (Valid 4 months)", 
      "Bank Letter (Min £300)", "Bank Statement (Min £7,500)"
    ],
    contact: { email: "admissions@uclancyprus.ac.cy" }
  },

  // 6. CYPRUS WEST UNIVERSITY (TRNC)
  {
    id: "cyprus-west-university",
    name: "Cyprus West University (CWU)",
    country: "Cyprus",
    region: "North Cyprus (TRNC)",
    city: "Famagusta (Gazimağusa)",
    website: "https://www.cwu.edu.tr",
    accreditation: "TRNC-Recognised University",
    about: "Cyprus West University is located in Famagusta, North Cyprus, offering affordable English-taught programmes with generous scholarships.",
    highlights: ["Up to 75% Scholarship", "English-Taught Programmes", "Diverse International Community"],
    programs: [
      { level: "Bachelor's", name: "BSc Psychology", duration: "4 Years", fee_usd: 5500, scholarship_fee_usd: 1375, note: "With 75% scholarship" },
      { level: "Master's", name: "MBA", duration: "N/A", fee_eur: 5000, scholarship_fee_eur: 2500, note: "With 50% scholarship" }
    ],
    documents_visa: [
      "High School Diploma", "Bachelor's Degree (for Master's)", 
      "Note: TRNC visa rules differ from EU. In-person application may be required for some nationalities."
    ],
    contact: { email: "admission@cwu.edu.tr" }
  }
];
