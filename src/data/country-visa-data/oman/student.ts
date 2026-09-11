export default {
  country: 'oman',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Royal Oman Police (ROP)',
  channels: [
    'https://evisa.rop.gov.om/',
    'https://www.mofa.gov.om/'
  ],
  processingTime: {
    eVisa: '5 - 7 working days',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '20 OMR',
    stickerConsularStandard: '20 OMR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.rop.gov.om/',
    territorialScope: 'Sultanate of Oman',
    validity: '1 to 2 years',
    maxStay: '1 to 2 years (renewable)',
    invitationRequired: true,
    processing: '5 - 7 working days'
  },
  stayDuration: {
    eVisa: '1 to 2 years (renewable)',
    stickerSingleDouble: '1 to 2 years',
    stickerMultiple: '1 to 2 years'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least two blank pages.',
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
      key: 'acceptance_letter',
      title: 'University Acceptance / Admission Letter',
      description: 'Official acceptance letter issued by an accredited Omani educational institution.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'sponsorship_letter',
      title: 'Educational Institution Sponsor Form',
      description: 'Approval and sponsorship documents from the educational institution registered with ROP.',
      icon: '🏛️',
      mandatory: true
    },
    {
      key: 'medical_fitness',
      title: 'Medical Fitness Certificate',
      description: 'Medical certificate issued by an authorized health center certifying fitness.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed flight reservation to Oman.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Proof of sufficient funds or sponsorship covering tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Acceptance and Sponsorship',
      description: 'Secure admission to an accredited educational institution in Oman, which will act as your sponsor.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, medical fitness certificate, academic records, and financial proof.'
    },
    {
      step: 3,
      title: 'Online Application via ROP Portal',
      description: 'The educational institution submits the student visa application on the Royal Oman Police (ROP) eVisa portal.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the statutory visa fee of 20 OMR online through the ROP portal.'
    },
    {
      step: 5,
      title: 'Visa Approval and Issuance',
      description: 'Upon approval, receive the electronic visa approval notice to present at entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa must be sponsored by a licensed Omani educational institution. Medical fitness clearance is mandatory for long-term study stays.'
  }
};