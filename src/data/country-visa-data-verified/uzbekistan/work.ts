export default {
  country: 'uzbekistan',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Uzbekistan',
  channels: [
    'https://evisa.gov.uz',
    'Embassy of Uzbekistan in New Delhi',
    'Consulate General of Uzbekistan in Mumbai'
  ],
  externalServiceProvider: 'VFS Global',
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
    stickerSingleDouble: 'Up to 1 year',
    stickerMultiple: 'Up to 1 year'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay date, with at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm, white background, taken within 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form for work visa, submitted to the Embassy or Consulate.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from Employer',
      description: 'Official invitation letter from the Uzbek employer, stamped by the State Migration Service of Uzbekistan, detailing job role, salary, and duration.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract between the applicant and the Uzbek employer, specifying terms of employment.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Medical certificate confirming good health, including HIV test (mandatory for stays >90 days) and tuberculosis screening.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Certificate of no criminal record issued by Indian authorities, valid for 6 months.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support stay in Uzbekistan.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Uzbekistan, with minimum coverage of 30,000 USD.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Employer Invitation',
      description: 'Secure an official invitation letter from the Uzbek employer, stamped by the State Migration Service of Uzbekistan.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, employment contract, medical certificate, and police clearance.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Uzbekistan in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular visa fee of 60 USD at the time of application submission.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Allow 15 working days for visa processing. Track application status via the Embassy if available.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker once processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa holders must register with the local migration authorities within 3 days of arrival in Uzbekistan. HIV test is mandatory for stays exceeding 90 days. No yellow fever vaccination required.'
  }
};