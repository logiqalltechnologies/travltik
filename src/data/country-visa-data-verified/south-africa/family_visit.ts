export default {
  country: 'south-africa',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of South Africa in New Delhi',
  channels: [
    'https://www.vfsglobal.com/south-africa/india',
    'https://www.vfsglobal.com/india/southafrica',
    'https://www.southafrica.gov.in'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'USD 100',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'INR 2,500'
  },
  eVisa: {
    available: true,
    portal: 'https://www.evisa.gov.za/',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '5 working days'
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
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank page.',
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
      description: 'Complete the online eVisa application on the official portal.',
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
      description: 'Hotel reservation or invitation letter from family member in South Africa.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least USD 30,000 for medical expenses and repatriation.',
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
      title: 'Collect Required Documents',
      description: 'Gather passport, photographs, flight itinerary, accommodation proof, travel insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Create eVisa Account',
      description: 'Register on the official eVisa portal and complete the online application form.'
    },
    {
      step: 3,
      title: 'Upload Documents',
      description: 'Scan and upload all mandatory documents as per the portal guidelines.'
    },
    {
      step: 4,
      title: 'Pay eVisa Fee',
      description: 'Proceed to the payment gateway; the fee is USD 100 for Indian citizens.'
    },
    {
      step: 5,
      title: 'Receive eVisa',
      description: 'After processing (5 working days), download and print the eVisa approval letter.'
    },
    {
      step: 6,
      title: 'Travel to South Africa',
      description: 'Carry the printed eVisa, passport, and supporting documents during travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate required if traveling from an endemic country; Unabridged birth certificate required for minors.'
  }
};