export default {
  country: 'estonia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Estonia in New Delhi / Estonian Ministry of Foreign Affairs',
  channels: ['Official MFA Visa Portal', 'VFS Global', 'Embassy of Estonia'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 EUR',
    vfsServiceFee: 'INR 1,850'
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
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 365 days (Long-Stay D Visa)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months after the intended departure date, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'One recent (taken within last 6 months) color photo on light/white background, 35x45mm size, clear face view.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'D-Visa Online Application Form',
      description: 'Completed and signed Estonian Long-Stay (D) Visa application form filled via the official Estonian MFA online portal.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Acceptance Confirmation',
      description: 'Official admission letter or confirmation of study from an accredited Estonian Higher Education Institution.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Statements',
      description: 'Proof of sufficient personal financial funds (bank statements for the last 6 months, sanctioned education loan, or official scholarship letter).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Dormitory confirmation letter, rental agreement, or host housing declaration covering initial stay in Estonia.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Health & Travel Insurance',
      description: 'Medical insurance policy valid for Schengen area / Estonia with minimum coverage of 30,000 EUR for medical emergencies.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'academic_transcripts',
      title: 'Academic Transcripts & Certificates',
      description: 'Prior academic mark sheets, diplomas, and degrees, apostilled/attested as required by admission guidelines.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Reservation',
      description: 'Flight itinerary showing travel reservation to Estonia.',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Receive University Admission',
      description: 'Complete enrollment and obtain the official acceptance letter from your Estonian educational institution.'
    },
    {
      step: 2,
      title: 'Fill Online Application',
      description: 'Complete the Long-Stay (D) Visa application form on the official Estonian Ministry of Foreign Affairs visa portal.'
    },
    {
      step: 3,
      title: 'Book Appointment',
      description: 'Schedule an in-person submission appointment at the VFS Global Estonia Visa Application Centre or the Embassy in New Delhi.'
    },
    {
      step: 4,
      title: 'Submit Dossier & Pay Fees',
      description: 'Attend appointment, submit original physical documents, record biometric data, and pay consular and service fees.'
    },
    {
      step: 5,
      title: 'Visa Collection',
      description: 'Track application processing status online and collect your passport stamped with the Long-Stay D Visa.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Students studying for programs exceeding 1 year must apply for a Temporary Residence Permit (TRP) for studies at the Police and Border Guard Board (PPA) in Estonia or through the Embassy prior to travel.'
  }
};