export default {
  country: 'kazakhstan',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Kazakhstan',
  channels: [
    'Embassy of Kazakhstan in New Delhi',
    'Consulate General of Kazakhstan in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 USD',
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
      description: 'Original passport with at least 6 months validity from date of entry and at least 2 blank visa pages.',
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
      description: 'Completed and signed visa application form for work visa.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation',
      title: 'Invitation Letter',
      description: 'Official invitation letter from the Kazakh employer, stamped by the local migration department (OVIR) or Ministry of Internal Affairs.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract between the applicant and the Kazakh employer, specifying job role, salary, and duration.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Medical certificate confirming the applicant is free from infectious diseases, including HIV test (mandatory for stays >90 days).',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'criminal_record',
      title: 'Criminal Record Certificate',
      description: 'Certificate of no criminal record from India, apostilled or legalized by the Kazakh Embassy.',
      icon: '⚖️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support stay in Kazakhstan.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Kazakhstan.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Employer Invitation',
      description: 'Secure an official invitation letter from the Kazakh employer, stamped by the local migration authorities.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, employment contract, medical certificate, and criminal record.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents to the Embassy of Kazakhstan in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee of 80 USD for the work visa.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Wait for the visa to be processed, which typically takes 10 working days for standard processing.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the passport with the visa sticker from the embassy or consulate.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa requires a valid employment contract and invitation from a Kazakh employer. HIV test is mandatory for stays exceeding 90 days. Criminal record certificate must be apostilled or legalized.'
  }
};