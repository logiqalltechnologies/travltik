export default {
  country: 'new-zealand',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'New Zealand Immigration',
  channels: [
    'https://www.immigration.govt.nz/',
    'https://www.vfsglobal.com/newzealand/india/',
    'https://www.mfat.govt.nz/en/embassies/india/'
  ],
  processingTime: {
    eVisa: '20 working days',
    standardSticker: '20 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'NZ$ 211',
    stickerConsularStandard: 'NZ$ 246',
    vfsServiceFee: 'NZ$ 30 (standard) / NZ$ 50 (express)'
  },
  eVisa: {
    available: false,
    portal: 'https://www.immigration.govt.nz/',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '20 working days'
  },
  stayDuration: {
    eVisa: '270 days',
    stickerSingleDouble: '270 days',
    stickerMultiple: '270 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank page.',
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
      description: 'Return flight booking showing dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter with address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least NZ$ 50,000 for medical expenses and repatriation.',
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
      description: 'Register on the New Zealand Immigration eVisa portal.'
    },
    {
      step: 2,
      title: 'Fill Application',
      description: 'Enter personal details, travel plans, and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay NZ$ 211 online using a credit/debit card.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Review and submit the application for processing.'
    },
    {
      step: 5,
      title: 'Receive Visa Decision',
      description: 'Download and print the visa approval once granted.'
    },
    {
      step: 6,
      title: 'Travel to New Zealand',
      description: 'Carry the printed visa and supporting documents during travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry rules for tourism visa.'
  },
  externalServiceProvider: {
    name: 'VFS Global',
    url: 'https://www.vfsglobal.com/newzealand/india/'
  }
};