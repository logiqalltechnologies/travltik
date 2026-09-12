export default {
  country: 'afghanistan',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of Afghanistan',
  channels: [
    'Embassy of Afghanistan in New Delhi',
    'Consulate General of Afghanistan in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 USD (approx. 8,500 INR)',
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
    stickerSingleDouble: '1 Year (Renewable)',
    stickerMultiple: '1 Year (Renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay period with at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form obtained from the Embassy or Consulate.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract with the Afghan employer detailing job role, salary, and duration.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Official invitation letter from the Afghan employer on company letterhead, stamped and signed by authorized signatory.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'company_registration',
      title: 'Employer Registration Certificate',
      description: 'Copy of the Afghan employer’s valid business registration certificate and tax clearance.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Police clearance certificate from the Indian police authorities, not older than 6 months.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Medical fitness certificate from a recognized hospital, including HIV test (mandatory for stays >90 days).',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support stay in Afghanistan.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance valid for the entire duration of stay in Afghanistan.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Employment',
      description: 'Obtain a signed employment contract and invitation letter from the Afghan employer.'
    },
    {
      step: 2,
      title: 'Gather Documents',
      description: 'Collect all required documents including passport, photos, police clearance, and medical certificate.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and documents to the Embassy of Afghanistan in New Delhi or Consulate in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the statutory visa fee of 100 USD at the time of submission.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Attend a visa interview if scheduled by the consular officer.'
    },
    {
      step: 6,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing, which typically takes 15-30 working days.'
    },
    {
      step: 7,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker once approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa holders must register with the Ministry of Interior within 24 hours of arrival in Afghanistan. HIV test is mandatory for stays exceeding 90 days. No Yellow Fever vaccination required as Afghanistan is not an endemic zone.'
  }
};