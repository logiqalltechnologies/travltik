export default {
  country: 'monaco',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Consulate General of France in Mumbai (Visa Section)',
  channels: [
    'https://visa.gouv.fr',
    'https://www.vfsglobal.com/france/india',
    'Consulate General of France, Mumbai – Visa Section'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 EUR',
    vfsServiceFee: '30 EUR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 3 months beyond intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the official portal and print the confirmation page.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip reservation (no ticket purchase required).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or a letter of invitation from the host in Monaco.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Minimum coverage of €30,000 for medical emergencies and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months, showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Letter from the Monaco‑based company detailing the purpose, duration, and sponsor details.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create Account on Official Portal',
      description: 'Register on https://visa.gouv.fr and fill in the online application form.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      description: 'Prepare all mandatory documents listed above, ensuring they meet the specified formats.'
    },
    {
      step: 3,
      title: 'Schedule Appointment',
      description: 'Book a visa appointment through the VFS Global portal or the consulate’s scheduling system.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (80 EUR) and the VFS service charge (30 EUR) via the accepted payment method.'
    },
    {
      step: 5,
      title: 'Attend Appointment & Submit Biometrics',
      description: 'Submit documents, provide fingerprints, and have a photograph taken at the VFS/consulate center.'
    },
    {
      step: 6,
      title: 'Visa Processing',
      description: 'The consulate reviews the application; standard processing takes ~15 working days.'
    },
    {
      step: 7,
      title: 'Collect Passport',
      description: 'Pick up the passport with the visa sticker or arrange courier delivery as per VFS instructions.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business invitation letter from a Monaco‑registered entity is mandatory; no yellow fever certificate required.'
  }
};