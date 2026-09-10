export default {
  country: 'croatia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign and European Affairs of the Republic of Croatia / Embassy of the Republic of Croatia, New Delhi',
  channels: [
    'CroVISA Online Application System (crovisa.mvep.hr)',
    'VFS Global Croatia Visa Application Centre (India)',
    'Embassy of the Republic of Croatia in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A (eVisa not available)',
    standardSticker: '15 to 45 calendar days (may extend up to 60 days for residence permit concurrence)',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€93 (~₹8,370)',
    vfsServiceFee: '₹2,050 (inclusive of applicable service taxes)'
  },
  eVisa: {
    available: false,
    portal: 'https://crovisa.mvep.hr/',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 1 year (Type D National Visa)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended stay in Croatia, issued within the last 10 years, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent (taken within the last 6 months) color passport photographs with a clean white background, compliant with ICAO standard.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'CroVISA Application Form',
      description: 'Completed and signed online application form generated from the official CroVISA system (crovisa.mvep.hr).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Letter of Acceptance',
      description: 'Unconditional admission letter from an accredited Croatian Higher Education Institution (University/College) stating program details and duration.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'tuition_fee_receipt',
      title: 'Proof of Tuition Fee Payment',
      description: 'Official bank receipt or confirmation of full or partial tuition fee payment issued by the Croatian educational institution.',
      icon: '🧾',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Original bank account statements for the last 6 months, official Education Loan Sanction letter, or formal scholarship grant letter demonstrating sufficient funds for living expenses in Croatia.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of student dormitory allocation, formal lease agreement, or hotel/private housing reservation in Croatia for the initial period.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen-compliant travel medical insurance with minimum coverage of €30,000 for medical emergencies and repatriation, valid until registration with Croatian health insurance (HZZO).',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'flight_itinerary',
      title: 'Flight Reservation',
      description: 'Confirmed round-trip or one-way flight ticket reservation showing flight routes and travel dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Apostilled Police Clearance Certificate issued by the Ministry of External Affairs / Passport Seva Kendra India, not older than 6 months.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'academic_transcripts',
      title: 'Academic Certificates & Marksheets',
      description: 'Apostilled original copies of previous educational degrees, diplomas, and official transcripts.',
      icon: '📑',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill Online Application',
      description: 'Complete the official online visa application form on the CroVISA portal (crovisa.mvep.hr) and print the summary.'
    },
    {
      step: 2,
      title: 'Legalize Documents',
      description: 'Obtain MEA Apostille on official documents including Police Clearance Certificate and academic degrees.'
    },
    {
      step: 3,
      title: 'Schedule VFS Appointment',
      description: 'Book an appointment at the nearest VFS Global Croatia Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Application & Biometrics',
      description: 'Submit original dossier, register biometrics (fingerprints/photo), and pay consular and VFS service fees.'
    },
    {
      step: 5,
      title: 'Passport Retrieval & MUP Registration',
      description: 'Collect stamped passport with Long-Stay Type D Visa. Upon arrival in Croatia, register at the local Ministry of Interior (MUP) within 3 working days to issue the Temporary Residence Permit card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of a Croatian Long-Stay (Type D) Visa must report to the local Police Administration (MUP - Ministarstvo unutarnjih poslova) within 3 days of arrival in Croatia to complete residence registration and obtain their Temporary Residence Permit card (Privremeni boravak).'
  }
};