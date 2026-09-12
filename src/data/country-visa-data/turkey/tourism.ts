export default {
  country: 'turkey',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Turkey',
  externalServiceProvider: 'Embassy direct (official eVisa portal)',
  channels: [
    'https://www.evisa.gov.tr/en/',
    'VFS Global – Turkey Visa Application Center',
    'Embassy of Turkey in New Delhi'
  ],
  processingTime: {
    eVisa: '1-3 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '90 USD',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.evisa.gov.tr/en/',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '1-3 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry and contain at least one blank page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online via the official eVisa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking showing dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or address of stay in Turkey.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least €30,000 for medical expenses and repatriation.',
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
      title: 'Create an Account',
      description: 'Register on the official eVisa portal and complete the profile.'
    },
    {
      step: 2,
      title: 'Fill Application',
      description: 'Enter personal details, travel itinerary, and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay Fee',
      description: 'Pay the eVisa fee of 90 USD via credit/debit card.'
    },
    {
      step: 4,
      title: 'Receive eVisa',
      description: 'Download the approved eVisa PDF and print it for travel.'
    },
    {
      step: 5,
      title: 'Travel to Turkey',
      description: 'Carry the printed eVisa, passport, and supporting documents during entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen 90/180 rule applies. No health mandates (Yellow Fever or HIV test) required for Turkey. No NOC required for tourism.'
  }
};