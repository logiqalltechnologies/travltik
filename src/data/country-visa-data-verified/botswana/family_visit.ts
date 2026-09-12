export default {
  country: 'botswana',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Department of Immigration, Botswana',
  externalServiceProvider: {
    name: 'VFS Global',
    website: 'https://www.vfsglobal.com/botswana/india/'
  },
  channels: [
    'https://www.botswana.gov.bw',
    'Embassy of Botswana, New Delhi',
    'Consulate General of Botswana, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '50 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.botswana.gov.bw/visa',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Botswana and have at least two blank visa pages.',
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
      description: 'Completed and signed visa application form obtained from the Embassy or Consulate.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Formal invitation letter from the family member in Botswana stating the purpose of visit, duration, and relationship. Must include host\'s ID copy and proof of residence.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'host_id',
      title: 'Host Identification',
      description: 'Copy of the host\'s Botswana National ID or Passport and proof of residence (utility bill or lease agreement).',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or itinerary showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation for the duration of stay, such as a hotel booking or the host\'s residence details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the stay. ITR (Income Tax Return) for the last 2 years is also required.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Botswana.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, invitation letter, host ID, flight itinerary, accommodation proof, financial proof, and travel insurance.'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Botswana in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee of 50 USD in cash or as per the embassy\'s payment instructions.'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Wait for the visa processing, which typically takes 10 working days for standard service or 5 working days for express service.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker once the application is approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate is required if arriving from a country with risk of yellow fever transmission. HIV test is not required for stays under 90 days.'
  }
};