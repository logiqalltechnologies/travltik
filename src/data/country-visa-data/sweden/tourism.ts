export default {
  country: 'sweden',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Sweden in New Delhi',
  channels: [
    'https://www.migrationsverket.se',
    'https://www.vfsglobal.com/Sweden/India',
    'https://www.swedenabroad.se/newdelhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '40 EUR'
  },
  eVisa: {
    available: false,
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 3 months beyond the intended departure from the Schengen area and contain at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression, no glasses, conforming to ICAO standards.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Schengen Visa Application Form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or detailed travel itinerary.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation, rental agreement, or an invitation letter from a host in Sweden.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Minimum coverage of 30,000 EUR, valid for the entire Schengen area and duration of stay, covering medical emergencies and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds (Sweden requires a reference amount of 450 SEK per day).',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Application',
      description: 'Fill out the Schengen visa application form and gather all required supporting documents.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment to submit your biometrics and documents at a VFS Global center.'
    },
    {
      step: 3,
      title: 'Submit and Pay',
      description: 'Submit your application in person at VFS Global, pay the consular fee (90 EUR) and the VFS service fee (40 EUR).'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Wait for the visa decision, which normally takes up to 15 calendar days.'
    },
    {
      step: 5,
      title: 'Passport Collection',
      description: 'Collect your passport from the VFS Global center or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies. Travel insurance must cover at least 30,000 EUR. Proof of financial sufficiency (450 SEK/day) and return flight are mandatory.'
  }
};