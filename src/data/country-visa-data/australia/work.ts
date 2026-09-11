export default {
  country: 'australia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Department of Home Affairs, Australian Government',
  channels: [
    'https://immi.homeaffairs.gov.au/',
    'https://www.vfsglobal.com/india/australia/',
    'https://www.embassyofaustralia.gov.in/'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: '40 working days',
    standardSticker: '40 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '140 AUD',
    vfsServiceFee: '0 AUD'
  },
  eVisa: {
    available: true,
    portal: 'https://online.immi.gov.au/lusc/login',
    territorialScope: 'Australia',
    validity: 'Up to 4 years',
    maxStay: '1460 days',
    invitationRequired: false,
    processing: '40 working days'
  },
  stayDuration: {
    eVisa: '1460 days',
    stickerSingleDouble: '4 years (1460 days)',
    stickerMultiple: 'N/A'
  },
  maximumStayDays: 1460,
  entryType: 'Single',
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
      description: 'Hotel booking or employer-provided accommodation details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements showing sufficient funds for initial period.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_offer',
      title: 'Employment Offer Letter',
      description: 'Official offer from Australian employer detailing role, salary, and duration.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'HIV test certificate (required for stays >90 days).',
      icon: '🩺',
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
      description: 'Fill out the online application form and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay Fees',
      description: 'Pay the visa fee (195 AUD) online via the portal.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application and wait for acknowledgment.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Application will be processed within 40 working days.'
    },
    {
      step: 6,
      title: 'Visa Grant',
      description: 'Receive visa grant notice and collect visa sticker if required.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa holders must have a valid employment offer, meet health and character requirements, and provide an HIV test certificate if stay exceeds 90 days.'
  }
};