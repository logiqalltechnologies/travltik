export default {
  country: 'monaco',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of Monaco',
  channels: [
    'https://www.gouv.mc/Ministere-des-Affaires-Etrangeres',
    'VFS Global (Monaco Visa Application Centre, New Delhi)',
    'Embassy of France (Paris) - Consular Jurisdiction for Monaco'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'Approx. 1,500 INR (varies by location)'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 3 months beyond the intended date of departure from Monaco and have at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, white background, taken within 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Schengen visa application form (Monaco follows Schengen visa regulations).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or itinerary showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Invitation letter from family member in Monaco with proof of their residence status, or hotel booking confirmation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical travel insurance covering at least 30,000 EUR for medical emergencies, valid throughout the Schengen area.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months, Income Tax Returns (ITR) for the last 2 years, and No Objection Certificate (NOC) if employed.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, application form, flight itinerary, accommodation proof, travel insurance, and financial documents.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment at the VFS Global visa application center in New Delhi or Mumbai for Monaco visa applications.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Attend the appointment, submit all documents, and pay the visa fee and service charge.'
    },
    {
      step: 4,
      title: 'Biometric Collection',
      description: 'Provide biometric data (fingerprints and photo) if not previously recorded in the past 59 months.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing to be completed, which typically takes 15 working days.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker from the VFS Global center once notified.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Monaco is not a Schengen member but follows Schengen visa regulations. A valid Schengen visa issued by any Schengen country is also accepted for entry into Monaco. The 90/180-day rule applies to stays in Monaco and other Schengen countries combined.'
  }
};