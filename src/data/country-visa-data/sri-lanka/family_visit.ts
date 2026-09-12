export default {
  country: 'sri-lanka',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs, Sri Lanka',
  channels: [
    'https://www.immigration.gov.lk/visa/',
    'https://visa.vfs.gov.in/srilanka/',
    'https://www.mfa.gov.lk/'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '7-10 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: '50 USD',
    stickerConsularStandard: '50 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.immigration.gov.lk/visa/',
    territorialScope: 'Nationwide',
    validity: '30 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry and have at least one blank page.',
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
      description: 'Complete the online eVisa application form on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking showing dates of arrival and departure.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter from family in Sri Lanka.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses of at least USD 30,000 for the duration of stay.',
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
      title: 'Create an Online Account',
      description: 'Register on the official Sri Lanka eVisa portal and log in.'
    },
    {
      step: 2,
      title: 'Fill the Application Form',
      description: 'Enter personal details, travel information, and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay the Visa Fee',
      description: 'Make the payment via the online payment gateway using a credit/debit card.'
    },
    {
      step: 4,
      title: 'Receive eVisa',
      description: 'After approval, download and print the eVisa approval letter.'
    },
    {
      step: 5,
      title: 'Travel to Sri Lanka',
      description: 'Carry the printed eVisa, passport, and supporting documents during travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions. Must carry original eVisa approval letter and passport.'
  }
};