export default {
  country: 'timor-leste',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs and Cooperation of Timor-Leste',
  channels: [
    'https://www.mfa.gov.tl',
    'Embassy of Timor-Leste in New Delhi',
    'Consulate General of Timor-Leste in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 50',
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
    stickerSingleDouble: 'Duration of study program (up to 1 year, renewable)',
    stickerMultiple: 'Duration of study program (up to 1 year, renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from date of entry and at least 2 blank pages. Photocopies of bio-data page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form obtained from the Embassy or Consulate.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official letter of acceptance from a recognized educational institution in Timor-Leste.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to cover tuition and living expenses. Education loan sanction letter if applicable.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'Medical certificate confirming good health. HIV test required for stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or one-way ticket with proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation in Timor-Leste (hotel booking, rental agreement, or host family invitation).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Timor-Leste.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission Letter',
      description: 'Secure an official letter of admission from a recognized educational institution in Timor-Leste.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, financial proof, and health certificate.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Timor-Leste in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee of USD 50 as per the embassy requirements.'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Attend a visa interview if requested by the embassy.'
    },
    {
      step: 6,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing, which typically takes 15 working days.'
    },
    {
      step: 7,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'HIV test required for stays exceeding 90 days. Yellow Fever vaccination certificate required if arriving from endemic countries.'
  }
};