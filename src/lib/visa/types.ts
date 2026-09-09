// src/lib/visa/types.ts

export interface DocumentRequirement {
  key: string;
  title: string;
  description: string;
  icon: string;
  mandatory: boolean;
  route_applicability: 'ALL_ROUTES' | 'SPECIFIC_ROUTES' | 'ALL_COUNTRIES';
  purpose_applicability: string[];
  countries?: string[]; // For SPECIFIC_ROUTES
  hint: string;
  priority: 1 | 2 | 3 | 4 | 5; // 1 = highest priority
}

export const DOCUMENT_REQUIREMENTS: DocumentRequirement[] = [
  // 1. COVERING LETTER - ALWAYS REQUIRED FOR ALL ROUTES
  {
    key: 'covering_letter',
    title: 'Covering Letter',
    description: 'Signed covering letter explaining purpose of visit, travel dates, and accommodation details',
    icon: '📝',
    mandatory: true,
    route_applicability: 'ALL_ROUTES',
    purpose_applicability: ['tourism', 'student', 'study', 'work', 'employment', 'business', 'family_visit', 'family', 'spouse'],
    hint: 'Must be signed and dated by the applicant. Include purpose, dates, and accommodation.',
    priority: 1
  },
  
  // 2. DETAILED ITINERARY - For Tourism & Business (Recommended for Family Visit)
  {
    key: 'detailed_itinerary',
    title: 'Detailed Itinerary',
    description: 'Day-by-day travel plan showing cities, activities, and dates',
    icon: '🗺️',
    mandatory: true,
    route_applicability: 'ALL_COUNTRIES',
    purpose_applicability: ['tourism', 'business', 'family_visit', 'family'],
    hint: 'Include flight numbers, hotel names, and activities for each day',
    priority: 2
  },
  
  // 3. INVITATION LETTER - For Family Visit, Business, Student, Work
  {
    key: 'invitation_letter',
    title: 'Invitation Letter',
    description: 'Official invitation letter from host/university/employer',
    icon: '✉️',
    mandatory: true,
    route_applicability: 'ALL_COUNTRIES',
    purpose_applicability: ['family_visit', 'family', 'business', 'student', 'study', 'work', 'employment'],
    hint: 'Must be on official letterhead with host/university/employer details',
    priority: 2
  },
  
  // 4. PASSPORT - ALWAYS REQUIRED
  {
    key: 'passport',
    title: 'Valid Passport',
    description: 'Original passport valid for at least 6-12 months beyond intended stay',
    icon: '📘',
    mandatory: true,
    route_applicability: 'ALL_ROUTES',
    purpose_applicability: ['tourism', 'student', 'study', 'work', 'employment', 'business', 'family_visit', 'family', 'spouse'],
    hint: 'Minimum 2 blank visa pages',
    priority: 1
  },
  
  // 5. PASSPORT PHOTOGRAPHS - ALWAYS REQUIRED
  {
    key: 'passport_photo',
    title: 'Two Passport Photographs',
    description: 'Recent color photographs, 35mm x 45mm, white background',
    icon: '📸',
    mandatory: true,
    route_applicability: 'ALL_ROUTES',
    purpose_applicability: ['tourism', 'student', 'study', 'work', 'employment', 'business', 'family_visit', 'family', 'spouse'],
    hint: 'Taken within last 6 months',
    priority: 1
  },
  
  // 6. VISA APPLICATION FORM - ALWAYS REQUIRED
  {
    key: 'visa_form',
    title: 'Visa Application Form',
    description: 'Completed and signed official visa application form',
    icon: '📋',
    mandatory: true,
    route_applicability: 'ALL_ROUTES',
    purpose_applicability: ['tourism', 'student', 'study', 'work', 'employment', 'business', 'family_visit', 'family', 'spouse'],
    hint: 'Must be fully filled and signed',
    priority: 1
  },
  
  // 7. BANK STATEMENT - ALWAYS REQUIRED
  {
    key: 'bank_statement',
    title: 'Bank Statement (6 Months)',
    description: 'Last 6 months stamped bank statements showing sufficient funds',
    icon: '🏦',
    mandatory: true,
    route_applicability: 'ALL_ROUTES',
    purpose_applicability: ['tourism', 'student', 'study', 'work', 'employment', 'business', 'family_visit', 'family', 'spouse'],
    hint: 'Must have official bank branch seal and signature',
    priority: 2
  },
  
  // 8. TRAVEL INSURANCE - ALWAYS REQUIRED
  {
    key: 'travel_insurance',
    title: 'Travel Medical Insurance',
    description: 'Travel insurance covering medical emergencies during the trip',
    icon: '🛡️',
    mandatory: true,
    route_applicability: 'ALL_ROUTES',
    purpose_applicability: ['tourism', 'student', 'study', 'work', 'employment', 'business', 'family_visit', 'family', 'spouse'],
    hint: 'Minimum €30,000 coverage for Schengen countries',
    priority: 3
  },
  
  // 9. FLIGHT BOOKING - ALWAYS REQUIRED
  {
    key: 'flight_booking',
    title: 'Confirmed Return Flight Ticket',
    description: 'Confirmed round-trip flight booking with PNR',
    icon: '✈️',
    mandatory: true,
    route_applicability: 'ALL_ROUTES',
    purpose_applicability: ['tourism', 'student', 'study', 'work', 'employment', 'business', 'family_visit', 'family', 'spouse'],
    hint: 'Must show entry and exit dates',
    priority: 3
  },
  
  // 10. HOTEL BOOKING - For Tourism & Business
  {
    key: 'hotel_booking',
    title: 'Hotel Accommodation Booking',
    description: 'Confirmed hotel booking for entire stay',
    icon: '🏨',
    mandatory: true,
    route_applicability: 'ALL_COUNTRIES',
    purpose_applicability: ['tourism', 'business'],
    hint: 'For full duration of stay',
    priority: 3
  }
];
