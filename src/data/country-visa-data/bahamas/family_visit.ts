export default {
  country: 'bahamas',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs, Government of The Bahamas',
  channels: [
    'https://mofa.gov.bs/evisa-online-services/',
    'https://evisa.gov.bs/'
  ],
  processingTime: {
    eVisa: '7-10 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'USD 100',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://mofa.gov.bs/evisa-online-services/',
    territorialScope: 'All ports of entry in The Bahamas',
    validity: '3 months',
    maxStay: 'Up to 90 days',
    invitationRequired: true,
    processing: '7-10 working days'
  },
  stayDuration: {
    eVisa: 'Up to 90 days',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per entry'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of departure from The Bahamas and contain at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Digital Passport Photograph',
      description: 'Recent digital passport photograph with a white background, taken within the last 6 months, neutral expression, without glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Online Application Form',
      description: 'Completed online application form submitted through the Bahamas eVisa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from Family Member',
      description: 'Signed letter of invitation from the host residing in The Bahamas stating the purpose of visit, duration of stay, and relationship.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'host_proof',
      title: 'Proof of Host Legal Status',
      description: 'Copy of host’s Bahamian passport, citizenship certificate, permanent residency, or valid work permit/residence permit in The Bahamas.',
      icon: '🏠',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Return Flight Itinerary',
      description: 'Confirmed round-trip or onward flight reservation showing entry and exit from The Bahamas.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation indicating host address in The Bahamas or hotel reservation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Valid travel health insurance policy covering the entire duration of stay in The Bahamas.',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Recent bank statements for the last 3 months demonstrating sufficient funds to cover the visit.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Prepare digital scans of your passport, photo, host invitation letter, proof of host status, travel itinerary, and financial statements.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Visit the official Bahamas eVisa portal (https://mofa.gov.bs/evisa-online-services/ or https://evisa.gov.bs/) and fill out the visa application form.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee Online',
      description: 'Pay the non-refundable consular visa fee of USD 100 securely online using a credit or debit card.'
    },
    {
      step: 4,
      title: 'Wait for Processing',
      description: 'Allow 7 to 10 working days for the Bahamas Ministry of Foreign Affairs to review and process your application.'
    },
    {
      step: 5,
      title: 'Receive and Print eVisa',
      description: 'Once approved, download and print the official eVisa confirmation document to present at border control upon arrival in The Bahamas.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders who possess a valid visa or permanent resident card issued by the United States, Canada, the United Kingdom, or a Schengen Member State are eligible to obtain a Bahamian visa on arrival (for up to 90 days). All others must hold an approved eVisa before travel.'
  }
};