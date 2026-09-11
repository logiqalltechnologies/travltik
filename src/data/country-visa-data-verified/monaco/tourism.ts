export default {
  country: 'monaco',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Monaco, New Delhi',
  channels: [
    'https://www.monaco-consulate.in/visa',
    'Embassy Direct'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€80',
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the visa application form available on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip flight reservation (no ticket purchase required).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation for the entire stay or a formal invitation from a host in Monaco.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Minimum coverage of €30,000 for medical emergencies, repatriation, and COVID‑19 related treatment.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the trip, along with latest Income Tax Return (ITR) and a No Objection Certificate (NOC) from employer if employed.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Document Preparation',
      description: 'Collect all mandatory documents as per the checklist and ensure they meet the specified criteria.'
    },
    {
      step: 2,
      title: 'Online Application',
      description: 'Fill out the visa application form on the official portal and upload scanned copies of the documents.'
    },
    {
      step: 3,
      title: 'Appointment Booking',
      description: 'Schedule an appointment at the Embassy of Monaco in New Delhi for document submission.'
    },
    {
      step: 4,
      title: 'Submission & Biometric Capture',
      description: 'Attend the appointment, submit originals and copies, and provide biometric data if required.'
    },
    {
      step: 5,
      title: 'Fee Payment',
      description: 'Pay the consular fee (€80) through the accepted payment modes.'
    },
    {
      step: 6,
      title: 'Visa Processing',
      description: 'The embassy processes the application; standard processing time is up to 15 working days.'
    },
    {
      step: 7,
      title: 'Passport Collection',
      description: 'Collect the passport with the visa sticker from the embassy, or opt for courier delivery if available.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};