export default {
  country: 'kenya',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs, Kenya',
  channels: [
    'https://evisa.go.ke/',
    'VFS Global – New Delhi',
    'VFS Global – Mumbai',
    'VFS Global – Chennai',
    'Embassy of Kenya – New Delhi'
  ],
  processingTime: {
    eVisa: '2-3 working days',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: '51 USD',
    stickerConsularStandard: '51 USD',
    vfsServiceFee: '30 USD'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.go.ke/',
    territorialScope: 'Nationwide',
    validity: '90 days from issue',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '2-3 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank page.',
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
      description: 'Complete the online eVisa application form on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirming travel dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from family member in Kenya.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least USD 30,000 for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Collect Required Documents',
      description: 'Gather passport, photographs, flight itinerary, accommodation proof, travel insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the eVisa application form on https://evisa.go.ke/ and upload scanned documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the eVisa fee of USD 51 online using a valid credit/debit card.'
    },
    {
      step: 4,
      title: 'Receive eVisa',
      description: 'After approval, download and print the eVisa confirmation. Processing takes 2-3 working days.'
    },
    {
      step: 5,
      title: 'Travel to Kenya',
      description: 'Carry the printed eVisa, passport, and supporting documents. Present them at the Kenyan immigration checkpoint.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate required. No HIV test required for stays of 90 days or less.'
  }
};