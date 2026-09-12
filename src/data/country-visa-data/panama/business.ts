export default {
  country: 'panama',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs of Panama',
  channels: [
    'https://migracion.gob.pa/visa',
    'https://www.vfsglobal.com/panama/india',
    'https://www.embassyofpanama.in'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 200',
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
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay',
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
      description: 'Complete the visa application form available on the official portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter stating address of stay',
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
      description: 'Recent bank statements (last 3 months) showing sufficient funds',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Letter from the Panamanian host company detailing purpose and duration of visit',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Document Preparation',
      description: 'Gather all mandatory documents and ensure they meet the specifications.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill the online visa application form on the official portal.'
    },
    {
      step: 3,
      title: 'Pay Fees',
      description: 'Pay the consular fee (USD 200) and VFS service fee (USD 30) through the designated payment gateway.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the completed form and supporting documents at the VFS Service Center or the Panama Embassy.'
    },
    {
      step: 5,
      title: 'Visa Processing & Collection',
      description: 'Track the application status online; collect the visa sticker once approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa permits a stay of up to 90 days per entry, multiple entries allowed within a 180‑day period. Extensions may be requested from the Panamanian immigration authority.'
  }
};