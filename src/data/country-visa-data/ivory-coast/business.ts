export default {
  country: 'ivory-coast',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Côte d\'Ivoire in New Delhi',
  channels: [
    'https://evisa.ci',
    'Embassy of Côte d\'Ivoire in New Delhi'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '5 working days',
    expressSticker: '2 working days'
  },
  fees: {
    eVisaTotal: '100 USD',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.ci',
    territorialScope: 'Nationwide',
    validity: '30 days',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single',
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
      description: 'Completed online via the official eVisa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirming travel dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from Ivorian company.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for the entire stay, minimum 30 days, including medical and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, travel insurance, bank statements, and invitation letter.'
    },
    {
      step: 2,
      title: 'Complete the eVisa Application',
      description: 'Fill out the online application form on the official portal and upload scanned copies of all documents.'
    },
    {
      step: 3,
      title: 'Pay the Visa Fee',
      description: 'Pay the eVisa fee (100 USD) online via the official portal.'
    },
    {
      step: 4,
      title: 'Submit the Application',
      description: 'Submit the application through the portal and receive a confirmation receipt.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Processing takes 5 working days. Receive the eVisa via email and print it for travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate required; invitation letter from Ivorian company; proof of financial means; travel insurance covering at least 30 days.'
  }
};