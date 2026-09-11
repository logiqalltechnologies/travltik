export default {
  country: 'turkey',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Turkey',
  channels: [
    'https://evisa.gov.tr/',
    'https://ankara.be.mfa.gov.tr/en/',
    'https://www.vfsglobal.com/turkey/india/'
  ],
  processingTime: {
    eVisa: '1-3 working days',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '60 USD',
    stickerConsularStandard: '60 USD',
    vfsServiceFee: 'Approx. 25-30 USD (varies by location)'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.tr/',
    territorialScope: 'Nationwide',
    validity: '180 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '1-3 working days'
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
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Turkey and have at least two blank pages.',
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
      description: 'Completed and signed visa application form. For eVisa, fill out the online form at evisa.gov.tr.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from Family Member',
      description: 'Official invitation letter from the family member residing in Turkey, including their full name, address, phone number, and relationship to the applicant. Must be signed by the host.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'host_proof',
      title: 'Proof of Host Status',
      description: 'Copy of the host’s Turkish ID card (Kimlik) or residence permit (Ikamet) and proof of address (e.g., utility bill or rental contract).',
      icon: '🏠',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or confirmed ticket showing entry and exit dates from Turkey.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation for the entire stay. For family visits, the host’s address and invitation letter serve as proof. If staying in a hotel, provide a booking confirmation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of the stay in Turkey, with a minimum coverage of 30,000 EUR.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3-6 months showing sufficient funds to cover the stay. No blocked account or education loan required.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Documents',
      description: 'Collect all required documents including passport, photos, invitation letter, host’s ID, flight itinerary, insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Apply Online or at Embassy',
      description: 'For eVisa, apply via evisa.gov.tr. For sticker visa, submit application at the Turkish Embassy or VFS Global center in India.'
    },
    {
      step: 3,
      title: 'Pay Fees',
      description: 'Pay the visa fee (60 USD) and any applicable service fees online or at the application center.'
    },
    {
      step: 4,
      title: 'Wait for Processing',
      description: 'eVisa processing takes 1-3 working days. Sticker visa processing takes 10-15 working days.'
    },
    {
      step: 5,
      title: 'Receive Visa',
      description: 'eVisa is sent via email. Sticker visa is issued in the passport. Verify all details before travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};