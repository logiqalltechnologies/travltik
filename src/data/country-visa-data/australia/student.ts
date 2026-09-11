export default {
  country: 'australia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Australian Department of Home Affairs',
  channels: [
    'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/subclass-500',
    'https://www.vfsglobal.com/India/Australia/',
    'https://embassyofaustralia.gov.in/'
  ],
  processingTime: {
    eVisa: '75 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '620 AUD',
    vfsServiceFee: '200 AUD',
    consularFee: '200 AUD'
  },
  eVisa: {
    available: true,
    portal: 'https://online.immi.gov.au/lusc/login',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Multiple Entry',
  externalServiceProvider: 'VFS Global',
  maxStayDays: 1825,
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
      description: 'University accommodation confirmation or hotel booking.',
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
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'eCoE',
      title: 'eCoE (Electronic Confirmation of Enrolment)',
      description: 'Official eCoE issued by the Australian educational institution.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'OSHC',
      title: 'OSHC (Overseas Student Health Cover)',
      description: 'Proof of health insurance covering the entire stay.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'proof_of_enrollment',
      title: 'Proof of Enrollment',
      description: 'Letter of acceptance or enrollment confirmation from the institution.',
      icon: '🎓',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create ImmiAccount',
      description: 'Register on the ImmiAccount portal and start a new visa application.'
    },
    {
      step: 2,
      title: 'Upload Documents',
      description: 'Upload all required documents in PDF or JPEG format.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee online via the portal or through VFS service center.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Review and submit the application for processing.'
    },
    {
      step: 5,
      title: 'Await Decision',
      description: 'Track application status; processing takes up to 75 working days.'
    },
    {
      step: 6,
      title: 'Receive Visa Grant',
      description: 'Once approved, download the visa grant letter and prepare for travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};