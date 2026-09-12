export default {
  country: 'armenia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Armenian Ministry of Foreign Affairs',
  channels: [
    'https://visa.gov.am/',
    'Embassy of Armenia in New Delhi'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '7 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: '25 USD',
    stickerConsularStandard: '25 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.gov.am/',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '3 working days'
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
      description: 'Complete the online application on the official portal.',
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
      description: 'Hotel reservation or invitation letter from a host in Armenia.',
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
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, travel insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the eVisa application form on https://visa.gov.am/.'
    },
    {
      step: 3,
      title: 'Pay eVisa Fee',
      description: 'Pay the eVisa fee of 25 USD via the online payment portal.'
    },
    {
      step: 4,
      title: 'Submit Supporting Documents',
      description: 'Upload scanned copies of all mandatory documents through the portal.'
    },
    {
      step: 5,
      title: 'Receive eVisa Confirmation',
      description: 'After 3 working days, receive the eVisa via email. Print the confirmation for travel.'
    },
    {
      step: 6,
      title: 'Travel to Armenia',
      description: 'Present the printed eVisa and passport upon arrival at Armenian border checkpoints.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions. No health mandates required.'
  }
};