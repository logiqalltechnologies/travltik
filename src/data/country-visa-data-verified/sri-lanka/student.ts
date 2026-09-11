export default {
  country: 'sri-lanka',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Department of Immigration and Emigration, Sri Lanka',
  channels: [
    'High Commission of Sri Lanka in New Delhi',
    'Embassy of Sri Lanka in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 40',
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
    stickerSingleDouble: 'Duration of study program + 15 days',
    stickerMultiple: 'Duration of study program + 15 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of departure from Sri Lanka. Must have at least two blank visa pages.',
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
      description: 'Completed and signed visa application form for Student Visa. Must be filled in English.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official letter of admission from a recognized educational institution in Sri Lanka, stating the course, duration, and start date.',
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
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Certificate from a registered medical practitioner confirming good health. HIV test required for stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Police clearance certificate from the local police station in India, attested by the Home Department.',
      icon: '👮',
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
      description: 'Proof of accommodation in Sri Lanka, such as a hostel admission letter or rental agreement.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel insurance covering medical expenses and repatriation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Admission',
      description: 'Obtain a formal letter of admission from a recognized educational institution in Sri Lanka.'
    },
    {
      step: 2,
      title: 'Gather Documents',
      description: 'Collect all required documents including passport, photographs, financial proof, medical certificate, and police clearance.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the High Commission of Sri Lanka in New Delhi or the Embassy in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee of USD 40 as per the prescribed method.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Attend a visa interview if requested by the consular officer.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker after processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa holders must register with the Department of Immigration and Emigration within 14 days of arrival in Sri Lanka. Overstaying is strictly prohibited and may result in fines or deportation.'
  }
};