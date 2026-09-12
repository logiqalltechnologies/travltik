export default {
  country: 'azerbaijan',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'State Migration Service of the Republic of Azerbaijan (SMR)',
  externalServiceProvider: 'Embassy direct',
  channels: [
    'https://evisa.gov.az',
    'Embassy of Azerbaijan in New Delhi',
    'Consulate General of Azerbaijan in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '60 USD',
    vfsServiceFee: 'N/A'
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
  maximumPermittedStay: 365,
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of entry and at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, white background, neutral expression, taken within the last 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form for long-term stay/work.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract with an Azerbaijani employer, legalized by the Ministry of Foreign Affairs of Azerbaijan.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Official invitation letter from the employer in Azerbaijan, approved by the State Migration Service.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Health certificate confirming no infectious diseases, including HIV test (mandatory for stays >90 days).',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Certificate of no criminal record from Indian authorities, apostilled or legalized.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support stay in Azerbaijan.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Rental agreement or hotel booking confirmation for the duration of stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid health insurance covering the entire period of stay in Azerbaijan.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Employment Contract',
      description: 'Secure a signed employment contract with an Azerbaijani employer.'
    },
    {
      step: 2,
      title: 'Legalize Documents',
      description: 'Have the employment contract and other required documents legalized by the Ministry of Foreign Affairs of Azerbaijan.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Azerbaijan in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee of 60 USD for the work visa.'
    },
    {
      step: 5,
      title: 'Attend Biometrics (if required)',
      description: 'Provide biometric data if requested by the embassy.'
    },
    {
      step: 6,
      title: 'Wait for Processing',
      description: 'Wait for the visa to be processed, which typically takes 10 working days.'
    },
    {
      step: 7,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visas require prior approval from the State Migration Service of Azerbaijan. The employment contract must be legalized. HIV testing is mandatory for stays exceeding 90 days.'
  }
};