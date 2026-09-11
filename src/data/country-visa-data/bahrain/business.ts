export default {
  country: 'bahrain',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Kingdom of Bahrain in New Delhi',
  channels: [
    'https://www.evisa.gov.bh/',
    'Embassy of the Kingdom of Bahrain in New Delhi'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '29 BHD',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.evisa.gov.bh/',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online via the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or confirmed itinerary.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from a Bahrain business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least 30,000 BHD for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create an Account',
      description: 'Register on the official Bahrain eVisa portal and verify your email.'
    },
    {
      step: 2,
      title: 'Fill the Application',
      description: 'Enter personal details, travel information, and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay the eVisa Fee',
      description: 'Pay the 29 BHD eVisa fee online (4 BHD non-refundable processing fee + 25 BHD visa fee) using a credit/debit card.'
    },
    {
      step: 4,
      title: 'Submit the Application',
      description: 'Review all information, confirm accuracy, and submit.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for 3-5 working days for approval. You will receive an email with the eVisa PDF.'
    },
    {
      step: 6,
      title: 'Print and Carry',
      description: 'Print the eVisa and carry it along with your passport during travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No vaccination or health mandates required for Bahrain. No HIV test required. No additional financial proof beyond bank statements.'
  }
};