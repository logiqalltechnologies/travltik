export default {
  country: 'iraq',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Iraq',
  channels: [
    'https://visa.mofa.gov.iq/',
    'Embassy of Iraq in New Delhi',
    'Consulate General of Iraq in Mumbai'
  ],
  externalServiceProvider: 'Embassy direct',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: 'N/A'
  },
  maxStayDays: 365,
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
    stickerSingleDouble: '1 year (renewable)',
    stickerMultiple: '1 year (renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay date with at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form obtained from the Iraqi Embassy or Consulate.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract with the Iraqi employer, specifying job role, salary, and duration.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Official invitation letter from the Iraqi employer or sponsoring company, stamped by the Ministry of Labor.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Health certificate issued by a government-recognized hospital, including HIV test (mandatory for stays >90 days) and general fitness.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'No Objection Certificate (NOC) or Police Clearance Certificate from the Indian police, valid for 6 months.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support the stay in Iraq.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or one-way ticket if employment is permanent.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of housing arrangement in Iraq, such as a rental agreement or employer-provided housing confirmation.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Employment Offer',
      description: 'Obtain a signed employment contract and invitation letter from the Iraqi employer, approved by the Ministry of Labor.'
    },
    {
      step: 2,
      title: 'Gather Documents',
      description: 'Collect all required documents including passport, photos, medical certificate, police clearance, and financial proof.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Iraqi Embassy in New Delhi or Consulate in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular visa fee of 100 USD in cash or as per embassy instructions.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Allow 15-30 working days for visa processing. Track status via embassy contact if necessary.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker upon notification from the embassy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'HIV test is mandatory for stays exceeding 90 days. Yellow Fever vaccination is not required for Iraq. Work visa requires prior approval from the Iraqi Ministry of Labor.'
  }
};