export default {
  country: 'russia ukraine belarus serbia bosnia albania north-macedonia montenegro kosovo',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Internal Affairs / Ministry of Foreign Affairs / Consular Sections of Embassies',
  channels: [
    'https://visa.kdmid.ru (Russia Consular Portal)',
    'https://visa.mfa.gov.ua (Ukraine Visa Application Portal)',
    'https://econsulate.gov.rs (Serbia e-Consulate)',
    'https://e-visa.al (Albania e-Visa Portal)',
    'https://visa.mfa-ks.net (Kosovo Visa Portal)',
    'http://india.mfa.gov.by (Embassy of Belarus in India)',
    'http://www.newdelhi.mfa.gov.ba (Embassy of Bosnia & Herzegovina in India)',
    'https://mfa.gov.mk (North Macedonia MFA)',
    'https://www.gov.me/en/mvp (Montenegro MFA)',
    'VFS Global / IFS (International Visa Services for Russia) / BLS International',
    'Direct Embassy/Consulate Submission'
  ],
  processingTime: {
    eVisa: 'N/A (Work visas require physical sticker or pre-approval)',
    standardSticker: '10-30 working days (varies by country; e.g., Belarus: 5 days, Russia: 10-20 days, Serbia/Montenegro: 15-30 days)',
    expressSticker: 'Available for select countries (e.g., Russia: 1-3 working days, Belarus: 2 working days, Ukraine: 5 working days)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'Russia: 80 USD | Serbia: 36 EUR | Belarus: 60 EUR | Albania: 50 EUR | Montenegro: 99 EUR | Bosnia: 72 EUR | North Macedonia: 60 EUR | Ukraine: 65 USD | Kosovo: 40 EUR',
    vfsServiceFee: 'Varies by country (e.g., Russia IFS/VFS: ~25-30 USD; others direct to Embassy or local partner)'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 to 180 days initially (must be converted to a Temporary Residence / Work Permit upon arrival)',
    stickerMultiple: 'Up to 1 year (renewable locally via residence permit)'
  },
  entryType: 'Single or Multiple Entry (depending on the specific country\'s work visa/permit structure)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay, with at least 2 blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, white background, taken within 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form specific to the destination country. Must be filled in English or local language.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract or offer letter from the employer in the destination country, specifying job role, salary, and duration.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Work Permit / Invitation Letter',
      description: 'Official work permit or invitation letter issued by the employer or relevant government authority in the destination country.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or booking confirmation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking, rental agreement, or invitation letter from employer confirming accommodation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay, with minimum coverage as per destination country requirements.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support stay. No blocked accounts or education loans required for work visas.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Health certificate confirming no contagious diseases. HIV test may be required for stays >90 days depending on country.',
      icon: '🩺',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Employment',
      description: 'Obtain a job offer and signed employment contract from an employer in the destination country.'
    },
    {
      step: 2,
      title: 'Obtain Work Permit',
      description: 'Employer applies for a work permit or invitation letter from the relevant government authority in the destination country.'
    },
    {
      step: 3,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, application form, employment contract, work permit, flight booking, accommodation proof, insurance, and financial proof.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application and documents to the relevant embassy, consulate, or visa service center (VFS/BLS/IFS) in India.'
    },
    {
      step: 5,
      title: 'Attend Biometrics/Interview',
      description: 'Attend biometric appointment or interview if required by the destination country.'
    },
    {
      step: 6,
      title: 'Pay Fees',
      description: 'Pay the visa fee and service provider fee as applicable.'
    },
    {
      step: 7,
      title: 'Wait for Processing',
      description: 'Wait for the visa to be processed. Processing time varies by country (10-30 working days).'
    },
    {
      step: 8,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker once processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visas are strictly for employment purposes. No Schengen 90/180-day rule applies. No US DS-160 form required. Yellow Fever vaccination not required for these destinations. HIV test may be required for stays >90 days depending on country. All processing times are in working days.'
  }
};