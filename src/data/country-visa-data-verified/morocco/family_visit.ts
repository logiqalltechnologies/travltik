export default {
  country: 'morocco',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs, Kingdom of Morocco',
  channels: [
    'VFS Global – Morocco Visa Application Center'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '60 EUR',
    vfsServiceFee: '30 EUR'
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
  entryType: 'Single Entry',
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
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online or printed form, signed and dated.',
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
      description: 'Hotel reservation or invitation letter from family member in Morocco.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least €30,000 for medical expenses and repatriation.',
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
      title: 'Collect Required Documents',
      description: 'Gather all mandatory documents listed above, ensuring they meet the specified criteria.'
    },
    {
      step: 2,
      title: 'Complete Visa Application',
      description: 'Fill out the visa application form online or on paper, sign, and date it.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (60 EUR) and VFS service fee (30 EUR) via the designated payment method.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application and documents either online (if available) or at the VFS center or embassy.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the standard processing time of 5 working days (3 working days for express).'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the visa from the VFS center or receive it by mail, depending on the submission method.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen 90/180-day rule applies. No Yellow Fever vaccine required. No HIV test required for stays under 90 days.'
  }
};