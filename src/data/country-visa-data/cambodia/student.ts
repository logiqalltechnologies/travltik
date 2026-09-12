export default {
  country: 'cambodia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs and International Cooperation (Cambodia)',
  channels: [
    'https://evisa.gov.kh',
    'Embassy of Cambodia in New Delhi',
    'Consulate General of Cambodia in Mumbai'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5-7 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '35 USD (Single Entry) / 55 USD (Multiple Entry)',
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
    stickerSingleDouble: 'Up to 1 year (renewable)',
    stickerMultiple: 'Up to 1 year (renewable)'
  },
  maxStayDays: 365,
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
      description: 'Completed and signed visa application form obtained from the Embassy or Consulate.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official letter of acceptance from the recognized educational institution in Cambodia.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to cover tuition and living expenses, or education loan sanction letter.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'Medical certificate confirming good health, including HIV test if stay exceeds 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Certificate of good conduct issued by local police or relevant authority in India.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or one-way ticket with proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Rental agreement, hostel accommodation letter, or invitation letter from host in Cambodia.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission Letter',
      description: 'Secure official admission letter from a recognized Cambodian educational institution.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, financial proof, and health certificate.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Cambodia in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the applicable visa fee in USD as per the embassy requirements.'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Attend a visa interview if requested by the consular officer.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker after processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa holders must register with the Department of Immigration within 24 hours of arrival in Cambodia. Visa is renewable for the duration of the study program. HIV test mandatory for stays exceeding 90 days.'
  }
};