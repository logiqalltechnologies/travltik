export default {
  country: 'colombia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs, Republic of Colombia',
  channels: [
    'https://tramites.cancilleria.gov.co',
    'https://www.vfsglobal.com/colombia/india',
    'https://www.colombia.org.in'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'USD 30'
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
    stickerSingleDouble: '90 days per entry',
    stickerMultiple: '180 days total within a year'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online visa application on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip flight reservation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation for the entire stay or invitation letter from a Colombian host.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical insurance covering at least USD 30,000 for the duration of the trip.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months), Income Tax Return (ITR) copy, and NOC from employer if employed.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, travel insurance, and financial documents.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill the visa application form on the official Colombian portal and upload scanned copies of all documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (USD 100) and VFS service fee (USD 30) through the accepted payment methods.'
    },
    {
      step: 4,
      title: 'Submit Application at VFS',
      description: 'Schedule an appointment, submit the original documents, and provide biometric data if required.'
    },
    {
      step: 5,
      title: 'Collect Visa',
      description: 'Pick up the stamped visa from the VFS center or have it couriered once processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate required (valid 10 days to 10 years before arrival).'
  }
};