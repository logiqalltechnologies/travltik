export default {
  country: 'bangladesh',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: "Embassy of the People's Republic of Bangladesh, New Delhi",
  channels: [
    'https://visa.bangladesh.gov.bd/',
    'VFS Global – Bangladesh Visa Application Center, New Delhi',
    'Embassy of Bangladesh, New Delhi'
  ],
  externalServiceProvider: 'VFS Global – Bangladesh Visa Application Center, New Delhi',
  processingTime: {
    eVisa: null,
    standardSticker: '7-10 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    stickerConsularStandard: '$30',
    vfsServiceFee: '$15'
  },
  eVisa: {
    available: false,
    portal: null,
    territorialScope: null,
    validity: null,
    maxStay: null,
    invitationRequired: null,
    processing: null
  },
  stayDuration: {
    eVisa: null,
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 6 months beyond the intended stay, with at least one blank page',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, 6 months recent, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed visa application form on the official portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirming travel dates',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from business partner in Bangladesh',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation, minimum $30,000',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for last 3 months showing sufficient funds',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, travel insurance, bank statements, and invitation letter if applicable.'
    },
    {
      step: 2,
      title: 'Complete Visa Application',
      description: 'Fill out the application form on the VFS Global portal, upload scanned documents, and submit.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee of $30 and the VFS service fee of $15 via the online payment gateway.'
    },
    {
      step: 4,
      title: 'Receive Visa Sticker',
      description: 'After 7-10 working days (standard) or 3-5 working days (express), collect the visa sticker from the VFS center or have it mailed.'
    },
    {
      step: 5,
      title: 'Travel to Bangladesh',
      description: 'Present the visa sticker, passport, and supporting documents at the Bangladesh border or airport upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional health mandates. No Schengen/US rules apply.'
  }
};