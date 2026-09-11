export default {
  country: 'australia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Department of Home Affairs',
  channels: [
    'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/visitor-visa-600',
    'VFS Global – Visa Application Centre',
    'Australian High Commission, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '145 AUD',
    vfsServiceFee: '30 AUD'
  },
  eVisa: {
    available: true,
    portal: 'https://online.immi.gov.au/lusc/login',
    territorialScope: 'Nationwide',
    validity: '12 months',
    maxStay: '365 days',
    invitationRequired: false,
    processing: '30 days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '365 days',
    stickerMultiple: '365 days'
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
      description: 'White background, taken within 6 months, neutral expression.',
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
      description: 'Hotel booking confirmation or invitation letter from family in Australia.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses, trip cancellation, and repatriation.',
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
      description: 'Register on the ImmiAccount portal and verify your email.'
    },
    {
      step: 2,
      title: 'Complete the Application',
      description: 'Fill out the Visitor Visa (Subclass 600) application form and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay the Visa Fee',
      description: 'Pay the 145 AUD visa fee online and the 30 AUD VFS service fee if applying through VFS.'
    },
    {
      step: 4,
      title: 'Submit the Application',
      description: 'Submit the application electronically via ImmiAccount.'
    },
    {
      step: 5,
      title: 'Wait for Decision',
      description: 'Processing takes up to 30 days; you will receive an electronic visa grant notice.'
    },
    {
      step: 6,
      title: 'Print the Visa',
      description: 'Print the visa grant notice and keep it with your passport for travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry rules beyond standard Visitor Visa conditions.'
  }
};