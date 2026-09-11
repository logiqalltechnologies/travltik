export default {
  country: 'malta',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Central Visa Unit (Identità) / High Commission of Malta, New Delhi',
  channels: [
    'VFS Global Malta Visa Application Centre',
    'High Commission of Malta in New Delhi',
    'Identità (Central Visa Unit)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 - 30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 EUR',
    vfsServiceFee: '30 EUR (approx. ₹2,700 INR)'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (Type C Short Stay for short courses)',
    stickerMultiple: 'Up to 365 days (National Type D Long Stay Visa for full-time degree programs)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended stay duration, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within the last 6 months) passport-size photos with 80% face coverage against a plain white background.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa Application Form',
      description: 'Duly filled and signed National Long Stay (Type D) visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Acceptance Letter',
      description: 'Official unconditional acceptance letter from an accredited Maltese educational institution detailing the course title, duration, start/end dates, and ECTS credits.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'tuition_fee_proof',
      title: 'Proof of Tuition Fee Payment',
      description: 'Official receipt or endorsement from the Maltese educational institution confirming full or partial payment of tuition fees.',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Education Loan',
      description: 'Bank statements for the last 6 months showing sufficient funds (at least 75% of national minimum wage per month of stay), sanctioned Education Loan approval letter, or notarized sponsorship affidavit with sponsor tax returns.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'academic_credentials',
      title: 'Academic Certificates & Marksheets',
      description: 'Original high school diploma, undergraduate degree certificates, transcripts, and marksheets duly verified.',
      icon: 'education',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Valid rental agreement registered with the Housing Authority of Malta, official student dormitory contract, or host commitment letter.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Medical insurance policy covering minimum €30,000 for emergency medical expenses, hospitalization, and repatriation across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Roundtrip flight reservation or confirmed travel itinerary specifying travel dates and flight numbers.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'sop_cover_letter',
      title: 'Statement of Purpose (SOP) & Cover Letter',
      description: 'Personal statement outlining academic background, study objectives in Malta, career goals, and intent to return to India upon course completion.',
      icon: 'file-text',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain University Admission',
      description: 'Secure unconditional admission from an accredited Maltese higher education institution and pay required tuition fees.'
    },
    {
      step: 2,
      title: 'Prepare Document Dossier',
      description: 'Assemble all required academic, financial (including education loan documentation), accommodation, and insurance credentials.'
    },
    {
      step: 3,
      title: 'Book VFS Global Appointment',
      description: 'Schedule a National Visa (Type D) appointment at the nearest VFS Global Malta Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Attend Appointment & Pay Fees',
      description: 'Submit physical application, undergo biometric data collection (fingerprints & photo), and pay consular and service fees.'
    },
    {
      step: 5,
      title: 'Visa Processing & Passport Retrieval',
      description: 'Track processing status through VFS and collect the stamped passport once decision is made by the High Commission of Malta.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Students enrolling in courses exceeding 90 days must apply for a temporary e-Residence Permit with Identità (Central Visa Unit) within 30 days of arrival in Malta. Students are permitted to work up to 20 hours per week after completing the first 90 days of their study program.'
  }
};