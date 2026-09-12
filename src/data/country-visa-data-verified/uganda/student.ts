export default {
  country: 'uganda',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs, Republic of Uganda',
  channels: [
    'https://evisa.immigration.go.ug',
    'https://www.vfsglobal.com/uganda/india',
    'https://www.ugandaembassy.org.in'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '7 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'USD 100',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'USD 30'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.immigration.go.ug',
    territorialScope: 'Nationwide',
    validity: '6 months from issue',
    maxStay: '1 year per entry',
    invitationRequired: false,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '6 months',
    stickerSingleDouble: '1 year',
    stickerMultiple: '2 years'
  },
  maxStayDays: 365,
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the official eVisa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking or university accommodation confirmation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Minimum coverage of USD 30,000 for medical emergencies.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements, education loan sanction letter, or blocked account showing sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create eVisa Account',
      description: 'Register on the official Uganda eVisa portal and obtain a login.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill in personal, academic and travel details accurately.'
    },
    {
      step: 3,
      title: 'Upload Required Documents',
      description: 'Upload passport scan, photographs, admission letter, financial proof, insurance, and flight itinerary.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the eVisa fee (USD 100) plus any VFS service charge using a secure online payment method.'
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Review all information and submit the application for processing.'
    },
    {
      step: 6,
      title: 'Receive eVisa',
      description: 'eVisa will be emailed within 5 working days; print and carry it for travel.'
    },
    {
      step: 7,
      title: 'Travel to Uganda',
      description: 'Present eVisa, passport, and supporting documents at the point of entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate required; HIV test required for stays exceeding 90 days.'
  }
};