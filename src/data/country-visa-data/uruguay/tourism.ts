export default {
  country: 'uruguay',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministerio de Relaciones Exteriores y Culto (MREC) / Embassy of Uruguay in New Delhi',
  channels: [
    'https://www.mrec.gub.uy/',
    'Embassy of Uruguay in New Delhi (Direct Submission)',
    'Consulate General of Uruguay in Mumbai (Direct Submission)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 60',
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
      description: 'Original passport with at least 6 months validity from the date of entry into Uruguay and at least 2 blank pages. Must be issued within the last 10 years.',
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
      description: 'Completed and signed visa application form obtained from the Embassy/Consulate or official MREC website.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates from Uruguay.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or a formal invitation letter from a host in Uruguay with proof of their residence.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire stay in Uruguay with a minimum coverage of USD 30,000 for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 6 months showing sufficient funds to cover the stay. Income Tax Returns (ITR) for the last 2 years and a No Objection Certificate (NOC) from employer if employed.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Documents',
      description: 'Collect all mandatory documents including passport, photos, flight itinerary, accommodation proof, insurance, and financial statements.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill out the visa application form accurately and sign it. Ensure all details match the passport.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents in person at the Embassy of Uruguay in New Delhi or Consulate General in Mumbai. Pay the consular fee of USD 60.'
    },
    {
      step: 4,
      title: 'Wait for Processing',
      description: 'The standard processing time is approximately 15 working days. You may be contacted for an interview or additional documents.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once the application is approved. Verify all details on the visa before leaving.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};