export default {
  country: 'ghana',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Interior, Republic of Ghana',
  channels: [
    'https://www.immigration.gov.gh/',
    'Embassy of Ghana in New Delhi',
    'Consulate General of Ghana in Mumbai'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '160 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.evisa.gov.gh',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Duration of study program + 30 days',
    stickerMultiple: 'Duration of study program + 30 days'
  },
  maximumStayDays: 730,
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of departure from Ghana and have at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form obtained from the Embassy/Consulate or official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official letter of acceptance from a recognized educational institution in Ghana.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to cover tuition and living expenses, or an education loan sanction letter.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'Medical certificate confirming good health, including HIV test results (mandatory for stays >90 days) and Yellow Fever vaccination certificate (endemic zone).',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or one-way ticket to Ghana.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of residence in Ghana, such as a rental agreement or letter from the university hostel.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel medical insurance valid for the duration of stay in Ghana.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission',
      description: 'Secure a formal letter of admission from a recognized educational institution in Ghana.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, financial proof, and health certificates.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Ghana in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the non-refundable visa fee of 160 USD as per the official schedule.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Attend a visa interview if requested by the consular officer.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker after processing is complete (10-15 working days).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate is mandatory for entry into Ghana. HIV test is required for stays exceeding 90 days. Students must register with the Ghana Immigration Service within 14 days of arrival.'
  }
};