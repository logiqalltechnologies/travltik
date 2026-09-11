export default {
  country: 'kuwait',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Interior, Kuwait',
  channels: [
    'https://evisa.moi.gov.kw/',
    'VFS Global – Kuwait Visa Application Center',
    'Embassy of Kuwait in New Delhi'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '3-5 working days',
    expressSticker: 'Not Applicable'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '3 KWD',
    vfsServiceFee: 'Varies by center (approx. 1,500 INR)'
  },
  eVisa: {
    available: false,
    portal: 'https://evisa.moi.gov.kw/',
    territorialScope: 'Nationwide',
    validity: '30 days',
    maxStay: '30 days',
    invitationRequired: true,
    processing: 'Not Applicable'
  },
  stayDuration: {
    eVisa: 'Not Applicable',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
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
      description: 'Complete and signed Kuwait visa application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirmation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation / Sponsor',
      description: 'Hotel reservation or invitation letter/sponsorship from a Kuwaiti entity/host.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation during stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 to 6 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight tickets, accommodation proof, bank statements, and sponsor approval.'
    },
    {
      step: 2,
      title: 'Submit Application via VFS Global / Embassy',
      description: 'Schedule an appointment and submit documents at the VFS Global Kuwait Visa Application Center or Embassy.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the statutory visa fee (3 KWD equivalent) and VFS service fee.'
    },
    {
      step: 4,
      title: 'Track and Receive Stamped Visa',
      description: 'Track application status online and retrieve passport with stamped visa upon processing completion.'
    },
    {
      step: 5,
      title: 'Travel to Kuwait',
      description: 'Present valid passport, visa stamp, and supporting documents at immigration upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'eVisa is restricted to eligible 53 nationalities and GCC residents with approved professions. Ordinary Indian passport holders require sponsorship/consular submission.'
  }
};