export default {
  country: 'australia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Department of Home Affairs, Australia',
  externalServiceProvider: 'VFS Global',
  channels: [
    'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-visa-600',
    'https://www.vfsglobal.com/India/Australia/',
    'https://embassyofaustralia.gov.in/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '145 AUD',
    vfsServiceFee: '30 AUD'
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
    stickerSingleDouble: '365 days',
    stickerMultiple: '365 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression, no glasses.',
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
      description: 'Confirmed return flight booking or itinerary showing dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation, rental agreement, or invitation letter from host.',
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
      description: 'Recent bank statements for the last 3 months showing sufficient funds for the stay.',
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
      title: 'Complete Application',
      description: 'Fill out the Visitor Visa (subclass 600) application form and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee online via the portal or through VFS service center.'
    },
    {
      step: 4,
      title: 'Receive e-Visa',
      description: 'Upon approval, download the e-visa and print the confirmation page.'
    },
    {
      step: 5,
      title: 'Travel to Australia',
      description: 'Present the e-visa, passport, and supporting documents at the Australian border.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions; must not overstay; must have sufficient funds; must have return ticket.'
  }
};