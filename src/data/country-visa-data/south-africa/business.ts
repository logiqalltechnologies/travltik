export default {
  country: 'south-africa',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of South Africa, New Delhi',
  externalServiceProvider: 'VFS Global',
  channels: [
    'https://visa.southafrica.gov.za/',
    'https://www.vfsglobal.com/SouthAfrica/India/',
    'https://southafrica.gov.in/'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'ZAR 3,500',
    stickerConsularStandard: 'ZAR 3,500',
    vfsServiceFee: '2000 INR'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.southafrica.gov.za/',
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
      description: 'Complete the eVisa application form on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or confirmed travel plan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from a South African business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least 30,000 USD for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete eVisa Application',
      description: 'Fill out the online application form on the official portal and upload scanned documents.'
    },
    {
      step: 3,
      title: 'Pay Service Fee',
      description: 'Pay the VFS service fee of 2000 INR via the portal or designated payment methods.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application and wait for processing (3 working days).'
    },
    {
      step: 5,
      title: 'Receive eVisa',
      description: 'Download and print the eVisa approval letter.'
    },
    {
      step: 6,
      title: 'Travel to South Africa',
      description: 'Carry all documents, including the printed eVisa, to the airport.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate required if traveling from an endemic country. No additional restrictions for business travelers.'
  }
};