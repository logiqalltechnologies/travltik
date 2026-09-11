export default {
  country: 'georgia',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Internal Affairs of Georgia',
  externalServiceProvider: 'VFS Global',
  channels: [
    'https://evisa.gov.ge/',
    'Embassy of Georgia in New Delhi',
    'Consulate General of Georgia in Mumbai'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '25 USD',
    stickerConsularStandard: '25 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.ge/',
    territorialScope: 'Georgia',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Georgia. Must have at least two blank visa pages.',
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
      description: 'Completed and signed visa application form. Must be filled in English or Georgian.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from a Georgian company or organization. Must include company details, purpose of visit, duration of stay, and guarantee of expenses if applicable. Must be notarized or certified by the Georgian Ministry of Justice.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or confirmed ticket showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or invitation letter stating accommodation arrangements.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Georgia. Minimum coverage of 30,000 EUR.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the stay. ITR (Income Tax Return) for the last 2 years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment Proof',
      description: 'Letter from employer in India confirming employment, position, salary, and approval for leave. Business registration certificate if self-employed.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, invitation letter, flight bookings, insurance, and financial proofs.'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Submit the completed application form and documents at the Embassy of Georgia in New Delhi or Consulate General in Mumbai. Alternatively, apply through an authorized visa center if available.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee of 25 USD in cash or as per embassy instructions. Keep the receipt for reference.'
    },
    {
      step: 4,
      title: 'Biometric Collection',
      description: 'Provide biometric data (fingerprints and photo) if required. This is usually done at the time of application submission.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Wait for the visa to be processed. Standard processing time is 10 working days. You may be contacted for additional documents or an interview.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker from the embassy or visa center once notified. Verify all details on the visa before leaving.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa holders must present the invitation letter and proof of business activities upon entry. Overstaying is strictly prohibited and may result in fines or deportation. Visa is valid for multiple entries within the validity period, with a maximum stay of 90 days per entry.'
  }
};