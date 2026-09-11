export default {
  country: 'azerbaijan',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Azerbaijan',
  channels: [
    'https://evisa.gov.az',
    'Embassy of Azerbaijan in New Delhi',
    'Consulate General of Azerbaijan in Mumbai'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '25 USD',
    stickerConsularStandard: '35 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.az',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Azerbaijan. Must contain at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form. For eVisa, this is filled online on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates from Azerbaijan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or a formal invitation letter from a host in Azerbaijan.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Azerbaijan with a minimum coverage of 30,000 EUR.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the expenses during the stay. Income Tax Returns (ITR) for the last 2 years and No Objection Certificate (NOC) from employer if applicable.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Online Application',
      description: 'Visit the official eVisa portal (evisa.gov.az) and fill out the application form with accurate personal and travel details.'
    },
    {
      step: 2,
      title: 'Document Upload',
      description: 'Upload scanned copies of the passport, photographs, flight itinerary, accommodation proof, travel insurance, and financial documents.'
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Pay the visa fee of 25 USD using a valid credit or debit card. Keep the payment confirmation for reference.'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Wait for the processing period of 3 working days. You will receive an email notification once the visa is processed.'
    },
    {
      step: 5,
      title: 'Download eVisa',
      description: 'Download the eVisa PDF from the portal and print it out. Carry the printed copy along with your passport during travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};