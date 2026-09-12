export default {
  country: 'chile',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of Chile (Ministerio de Relaciones Exteriores de Chile)',
  channels: [
    'https://www.cancilleria.gob.cl/',
    'Embassy of Chile in New Delhi',
    'Consulate General of Chile in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 35',
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Chile. Must have at least two blank pages for visa stamps.',
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
      description: 'Completed and signed visa application form obtained from the Chilean Embassy or Consulate in India.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates from Chile.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or a letter of invitation from a host in Chile with their ID copy.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Chile, with a minimum coverage of USD 30,000 for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to cover the trip. Income Tax Returns (ITR) for the last 2 years and No Objection Certificate (NOC) if employed.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, flight itinerary, accommodation proof, insurance, and financial statements.'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents at the nearest Chilean Embassy or Consulate in India (New Delhi or Mumbai).'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee of USD 35 at the time of submission. Payment is usually accepted in cash or bank draft as per embassy instructions.'
    },
    {
      step: 4,
      title: 'Wait for Processing',
      description: 'The application will be processed within 10 working days. You may be contacted for an interview or additional documents if required.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once the application is approved. Verify all details on the visa before leaving.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Travelers must present a valid return ticket and proof of sufficient funds. Yellow fever vaccination certificate is required if arriving from a country with risk of yellow fever transmission. No HIV test required for stays under 90 days.'
  }
};