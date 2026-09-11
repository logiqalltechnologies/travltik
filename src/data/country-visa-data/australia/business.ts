export default {
  country: 'australia',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Australian High Commission, New Delhi',
  channels: [
    'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/visitor-visa-600',
    'https://www.vfsglobal.com/India/Australia',
    'https://www.australia.gov.au/visas'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '20 working days',
    expressSticker: '10 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '145 AUD',
    vfsServiceFee: '100 AUD'
  },
  eVisa: {
    available: true,
    portal: 'https://online.immi.gov.au/lusc/login',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'Online'
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
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank page.',
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
      description: 'Complete the online application via ImmiAccount portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter from Australian business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least AUD 50,000 for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create ImmiAccount',
      description: 'Register on the Australian immigration portal and verify your email.'
    },
    {
      step: 2,
      title: 'Complete the Application',
      description: 'Fill out the Visitor Visa (Subclass 600) application form with accurate details.'
    },
    {
      step: 3,
      title: 'Upload Documents',
      description: 'Attach all mandatory documents including passport, photographs, itinerary, accommodation, insurance, and bank statements.'
    },
    {
      step: 4,
      title: 'Pay the Visa Fee',
      description: 'Pay the consular fee of 145 AUD and the VFS service fee of 100 AUD online.'
    },
    {
      step: 5,
      title: 'Submit and Await Decision',
      description: 'Submit the application and wait for the processing time of 20 working days for standard or 10 working days for express.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};