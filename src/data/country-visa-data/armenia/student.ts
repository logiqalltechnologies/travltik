export default {
  country: 'armenia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Armenia',
  channels: [
    'Embassy of Armenia in New Delhi',
    'Consulate General of Armenia in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
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
    stickerSingleDouble: 'Duration of study program (up to 1 year, renewable)',
    stickerMultiple: 'Duration of study program (up to 1 year, renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of departure from Armenia. Must have at least two blank visa pages.',
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
      description: 'Completed and signed national visa application form. Must be filled in English or Armenian.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Acceptance',
      description: 'Official letter of acceptance from an accredited educational institution in Armenia, stating the duration of the study program.',
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
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation in Armenia (e.g., university dormitory confirmation, rental agreement, or invitation from a host).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Armenia, with a minimum coverage of 30,000 EUR.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or itinerary showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'Medical certificate confirming good health. HIV test is not mandatory for student visas unless specified by the embassy for stays exceeding 90 days, but a general health check is recommended.',
      icon: '🩺',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission Letter',
      description: 'Secure an official letter of acceptance from an accredited educational institution in Armenia.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, financial proof, accommodation proof, and travel insurance.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Armenia in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee of 60 USD in cash or as per the embassy\'s instructions.'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Attend a visa interview if requested by the embassy.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker after processing is complete (10 working days).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa holders must register with the local police within 3 days of arrival in Armenia. The visa is valid for the duration of the study program and can be renewed upon request.'
  }
};