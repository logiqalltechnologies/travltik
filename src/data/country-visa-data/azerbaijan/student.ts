export default {
  country: 'azerbaijan',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Azerbaijan',
  channels: [
    'https://evisa.gov.az',
    'Embassy of Azerbaijan in New Delhi',
    'Consulate General of Azerbaijan in Mumbai'
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
    portal: 'https://evisa.gov.az',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Duration of study program (up to 1 year)',
    stickerMultiple: 'Duration of study program (up to 1 year)'
  },
  maxStayDays: 365,
  entryType: 'Multiple Entry',
  externalServiceProvider: 'VFS Global',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of departure from Azerbaijan. Must contain at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm, white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form for long-term stay (Student). Must be filled in English or Russian.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation',
      title: 'Invitation Letter from Educational Institution',
      description: 'Official invitation letter from the accredited university or educational institution in Azerbaijan confirming admission and enrollment.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Admission Letter',
      description: 'Original admission letter or enrollment certificate from the educational institution.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to cover tuition fees and living expenses. Education loan sanction letter if applicable.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'health_insurance',
      title: 'Health Insurance',
      description: 'Valid health insurance policy covering the entire duration of stay in Azerbaijan, including medical evacuation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Medical certificate confirming good health. HIV test required for stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or booking confirmation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation in Azerbaijan (university dormitory confirmation, rental agreement, or invitation from host).',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission',
      description: 'Secure admission from an accredited educational institution in Azerbaijan and obtain the official invitation letter.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, financial proof, health insurance, and medical certificate.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Azerbaijan in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular visa fee of 80 USD as per the prescribed method.'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Attend a visa interview if requested by the consular officer.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker after processing is complete (10 working days standard, 5 working days express).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa holders must register with the State Migration Service of Azerbaijan within 3 working days of arrival. HIV test is mandatory for stays exceeding 90 days. No Yellow Fever vaccination required for Azerbaijan.'
  }
};