export default {
  country: 'indonesia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Republic of Indonesia in New Delhi / Directorate General of Immigration',
  channels: [
    'https://evisa.imigrasi.go.id',
    'https://kemlu.go.id/newdelhi'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '7-10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '500,000 IDR',
    stickerConsularStandard: '500,000 IDR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.imigrasi.go.id',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '60 days'
  },
  entryType: 'Single Entry',
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
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online eVisa application form on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from family member in Indonesia.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses for the duration of stay in Indonesia.',
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
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the eVisa application form on https://evisa.imigrasi.go.id and upload scanned documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the eVisa fee of 500,000 IDR via the official portal online payment gateway.'
    },
    {
      step: 4,
      title: 'Receive eVisa',
      description: 'After processing (3-5 working days), download and print the eVisa approval document.'
    },
    {
      step: 5,
      title: 'Travel to Indonesia',
      description: 'Carry the printed eVisa, passport, and supporting documents when traveling.'
    },
    {
      step: 6,
      title: 'Entry at Border',
      description: 'Present the eVisa and documents to immigration officers upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional health mandates. No vaccination or HIV test required for stays up to 30 days.'
  }
};