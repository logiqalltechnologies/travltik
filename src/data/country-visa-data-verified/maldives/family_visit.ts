export default {
  country: 'maldives',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs, Maldives',
  externalServiceProvider: 'Embassy direct',
  channels: [
    'https://www.immigration.gov.mv/',
    'Embassy of Maldives, New Delhi',
    'Consulate General of Maldives, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'On arrival',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '0 USD',
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
    stickerSingleDouble: '30 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into the Maldives. Must have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized photographs with white background, taken within the last 6 months, with a neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed visa application form signed by the applicant. Available at the Embassy/Consulate or official website.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Formal invitation letter from the family member residing in the Maldives, including their full name, address, and contact details. Copy of their Maldivian ID or Residence Permit.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or itinerary showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation for the duration of stay, such as a hotel booking or a letter from the host family confirming accommodation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the stay. Income Tax Returns (ITR) for the last 2 years may also be required.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel insurance covering medical expenses and repatriation for the duration of the stay.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, invitation letter, flight bookings, accommodation proof, financial statements, and insurance.'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Maldives in New Delhi or Consulate General in Mumbai. Applications can be submitted in person or by post as per embassy guidelines.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee of 0 USD (no fee) as per the embassy\'s payment instructions.'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Visa is issued on arrival; no prior processing required.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'If applying through the embassy, collect your passport with the visa sticker; otherwise, receive the visa upon arrival in the Maldives.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Visa holders must present a valid return ticket and proof of accommodation upon arrival. The visa is valid for a single entry and a stay of up to 30 days. Extensions may be applied for at the Immigration Department in Malé before the visa expires.'
  }
};