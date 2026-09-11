export default {
  country: 'sweden',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Sweden in New Delhi',
  channels: [
    'https://www.migrationsverket.se',
    'https://www.vfsglobal.com/Sweden/India',
    'https://www.swedenabroad.se'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '40 EUR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 3 months beyond the intended stay and contain at least two blank pages.',
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
      description: 'Completed online via the official visa portal and printed.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of intent to return.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter with address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least €30,000 for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Letter from Swedish family member confirming relationship and hosting details.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Relationship',
      description: 'Marriage certificate, birth certificate, or other official documents.',
      icon: '📑',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents including passport, photographs, application form, flight itinerary, accommodation proof, travel insurance, financial statements, invitation letter, and proof of relationship.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment through the official visa portal or VFS Global website.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Attend the appointment, submit the application form, documents, and pay the visa fee.'
    },
    {
      step: 4,
      title: 'Wait for Decision',
      description: 'Processing takes up to 15 calendar days. Track status online if available.'
    },
    {
      step: 5,
      title: 'Collect Visa',
      description: 'Collect the visa sticker from the embassy or receive it by mail if applicable.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies. Must have invitation letter from Swedish family member, proof of relationship, and sufficient financial means.'
  }
};