export default {
  country: 'sri-lanka',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Sri Lanka High Commission, New Delhi',
  channels: [
    'https://www.eta.gov.lk',
    'https://www.vfsglobal.com/sri-lanka/india',
    'https://www.srilanka.org.in'
  ],
  processingTime: {
    eVisa: '2-3 working days',
    standardSticker: '5 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: 'USD 30',
    stickerConsularStandard: 'USD 30',
    vfsServiceFee: 'USD 20'
  },
  eVisa: {
    available: true,
    portal: 'https://www.eta.gov.lk',
    territorialScope: 'Nationwide',
    validity: '30 days from date of issue',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '2-3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from date of entry',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online ETA application form',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter indicating stay address',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least USD 30,000 for medical emergencies',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements showing sufficient funds for stay',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Letter from Sri Lankan sponsor/company detailing purpose of visit',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online ETA Application',
      description: 'Visit the official ETA portal and fill in personal and travel details.'
    },
    {
      step: 2,
      title: 'Upload Required Documents',
      description: 'Upload passport scan, photograph, invitation letter, and other supporting documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the eVisa fee (USD 30) plus any service charges using a credit/debit card.'
    },
    {
      step: 4,
      title: 'Receive eVisa Confirmation',
      description: 'The eVisa will be emailed within 2-3 working days; print a copy for travel.'
    },
    {
      step: 5,
      title: 'Travel to Sri Lanka',
      description: 'Present the printed eVisa, passport, and supporting documents at immigration.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa requires a valid invitation letter from a Sri Lankan company and proof of sufficient funds. No yellow fever vaccination is required for Indian travelers.'
  }
};