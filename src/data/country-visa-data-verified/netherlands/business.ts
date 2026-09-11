export default {
  country: 'netherlands',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Kingdom of the Netherlands in New Delhi',
  channels: [
    'https://www.netherlandsworldwide.nl/',
    'https://visa.visa.nl/',
    'https://www.vfsglobal.com/Netherlands/India/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '27.30 EUR'
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single, Double or Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 3 months beyond the intended departure date from the Schengen area and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, compliant with Schengen specifications, taken within the last 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Schengen visa application form filled out via the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from the host company in the Netherlands detailing the purpose of the visit, duration, and financial coverage.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter',
      description: 'Covering letter from the Indian employer explaining the applicant\'s position, purpose of travel, and duration of stay.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or detailed travel itinerary.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation, rental agreement, or proof of accommodation sponsorship by the host company.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Minimum coverage of €30,000 valid for the entire Schengen area, covering urgent medical care and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal and company bank statements for the last 3 months showing sufficient funds, along with ITR filings.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill Application Online',
      description: 'Complete the Schengen visa application form on the official Netherlands Ministry of Foreign Affairs portal.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment for document submission and biometrics at the nearest VFS Global center.'
    },
    {
      step: 3,
      title: 'Submit Documents & Biometrics',
      description: 'Present all required documents in person and register biometric data at the VFS Global center.'
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the consular fee (90 EUR) and VFS service fee (approx. 27.30 EUR) at the application center.'
    },
    {
      step: 5,
      title: 'Processing & Collection',
      description: 'Wait for processing (typically up to 15 calendar days). Collect your passport from VFS or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Max 90 days within any 180-day period under Schengen rules.'
  }
};