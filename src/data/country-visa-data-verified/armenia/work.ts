export default {
  country: 'armenia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Armenia',
  channels: [
    'Embassy of Armenia in New Delhi',
    'Consulate General of Armenia in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
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
    stickerSingleDouble: 'Up to 1 year',
    stickerMultiple: 'Up to 1 year'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from date of entry and at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, white background, taken within 6 months, neutral expression, no glasses.',
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
      description: 'Signed employment contract with an Armenian employer, specifying job role, salary, and duration.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Official invitation letter from the Armenian employer or authorized agency, stamped by the Ministry of Foreign Affairs.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Health certificate confirming no contagious diseases, including HIV test (mandatory for stays >90 days).',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support stay in Armenia.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of registered residence or accommodation in Armenia (e.g., rental agreement or hotel booking).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Armenia.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Employment',
      description: 'Obtain a signed employment contract and invitation letter from an Armenian employer.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents, including medical certificate and financial proof.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents to the Embassy of Armenia in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee of 60 USD as per the official fee schedule.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Wait for the standard processing time of 15 working days.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker upon notification.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa requires prior approval from the Armenian employer and registration with local authorities within 30 days of arrival. HIV test is mandatory for stays exceeding 90 days.'
  }
};