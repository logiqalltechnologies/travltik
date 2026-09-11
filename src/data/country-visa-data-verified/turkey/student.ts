export default {
  country: 'turkey',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Türkiye',
  channels: [
    'https://evisa.gov.tr',
    'https://www.mfa.gov.tr',
    'Turkish Embassy in New Delhi / Consulates General'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-20 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '60 USD',
    vfsServiceFee: 'N/A'
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
    stickerSingleDouble: 'Duration of study program + 15 days',
    stickerMultiple: 'Duration of study program + 15 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay in Turkey. Must have at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm, white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form for long-term student visa. Must be filled in English or Turkish.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official letter of acceptance from a recognized Turkish university or educational institution. Must include course details, duration, and start date.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to cover tuition and living expenses. Education loan sanction letter if applicable. Blocked account statement if required by the university.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'health_insurance',
      title: 'Health Insurance',
      description: 'Valid health insurance policy covering the entire duration of stay in Turkey. Must cover medical expenses up to at least 30,000 EUR.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation in Turkey, such as a rental agreement, university dormitory confirmation, or invitation letter from a host.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or itinerary showing entry and exit dates from Turkey.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Police clearance certificate from India, issued within the last 6 months, confirming no criminal record.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'hiv_test',
      title: 'HIV Test Report',
      description: 'HIV test report from a recognized medical facility, required for stays exceeding 90 days. Must be issued within the last 3 months.',
      icon: '🩺',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission Letter',
      description: 'Secure an official letter of admission from a recognized Turkish university or educational institution.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, financial proof, health insurance, and police clearance certificate.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Turkish Embassy or Consulate General in India.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee of 60 USD at the time of application submission.'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Attend a visa interview if requested by the consular officer.'
    },
    {
      step: 6,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing, which typically takes 15-20 working days.'
    },
    {
      step: 7,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once the application is approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa holders must register with the local police station within 10 days of arrival in Turkey to obtain a residence permit. The visa is valid for the duration of the study program plus 15 days. Multiple entry is allowed for the duration of the visa.'
  }
};