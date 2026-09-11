export default {
  country: 'singapore',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Immigration & Checkpoints Authority (ICA), Singapore',
  channels: [
    'https://eservices.ica.gov.sg/save/',
    'https://www.vfsglobal.com/Singapore/India',
    'https://www.mfa.gov.sg/Embassy/India'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '30 SGD',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'Varies by Authorised Visa Agent'
  },
  eVisa: {
    available: true,
    portal: 'https://eservices.ica.gov.sg/save/',
    territorialScope: 'Nationwide',
    validity: 'Up to 2 years',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3 working days'
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
      description: 'Passport must be valid for at least 6 months beyond the date of entry and have at least one blank page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 3 months, neutral expression, matt or semi-matt finish.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Form 14A Application',
      description: 'Duly completed and signed Form 14A for submission via Authorised Visa Agent or ICA SAVE portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking showing dates of arrival and departure.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter with address in Singapore.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Recommended comprehensive travel and medical insurance for the duration of stay.',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, completed Form 14A, flight itinerary, hotel booking, and bank statements.'
    },
    {
      step: 2,
      title: 'Select Submission Channel',
      description: 'Apply via a Singapore Local Contact (SC/PR) on https://eservices.ica.gov.sg/save/ or through an Authorised Visa Agent (e.g., VFS Global).'
    },
    {
      step: 3,
      title: 'Submit Application & Pay Fee',
      description: 'Complete the application online or at the authorised agent and pay the 30 SGD consular fee plus service charges if applicable.'
    },
    {
      step: 4,
      title: 'Processing by ICA',
      description: 'Wait approximately 3 working days for application processing by ICA.'
    },
    {
      step: 5,
      title: 'Receive e-Visa',
      description: 'Download and print the approved e-Visa PDF provided by ICA or your agent.'
    },
    {
      step: 6,
      title: 'Submit SG Arrival Card',
      description: 'Fill out the SG Arrival Card (SGAC) with electronic health declaration online within 3 days prior to arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'SG Arrival Card (SGAC) mandatory. Submit online within 3 days prior to arrival in Singapore.'
  }
};