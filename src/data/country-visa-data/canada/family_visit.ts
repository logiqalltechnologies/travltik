export default {
  country: 'canada',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
  channels: [
    'IRCC Portal',
    'VFS Global Canada Visa Application Centre'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '185 CAD (100 CAD Application Fee + 85 CAD Biometrics Fee)',
    vfsServiceFee: 'VFS Passport Transmission Fee of approximately 1,200 INR applies if biometrics were completed previously.'
  },
  eVisa: {
    available: false,
    portal: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
    territorialScope: 'Nationwide',
    validity: 'Up to 10 years or until passport expiry',
    maxStay: '180 days',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 180 days per entry'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of intended travel and at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent digital photographs (35x45mm) with a white background, taken within 6 months, showing a neutral expression with 70-80% face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online Application for Temporary Resident Visa (IMM 5257) and Family Information Form (IMM 5645) submitted via the IRCC Portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reserved round-trip flight itinerary showing entry and exit dates. Do not purchase non-refundable tickets until the visa is approved.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Detailed invitation letter from the host in Canada specifying the address where you will stay, or hotel bookings if traveling together within Canada.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Highly recommended travel medical insurance covering emergency medical expenses, evacuation, and repatriation for the entire duration of stay.',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 6 months showing sufficient funds, Income Tax Returns (ITR-V) for the last 2 years, and recent payslips (if employed).',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Letter of Invitation',
      description: 'A formal letter from your family member in Canada detailing their status (PR or Citizen), relationship to you, purpose of visit, duration, and financial support details if applicable.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'host_status_proof',
      title: 'Host Status in Canada',
      description: 'Copy of the host’s Canadian Citizenship card, Canadian Passport, or Permanent Resident (PR) card, along with their recent Canadian tax assessment (NOA) and bank statements.',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'noc_letter',
      title: 'Employment Proof & NOC',
      description: 'No Objection Certificate (NOC) from your current employer in India stating your designation, salary, tenure, and approved leave dates. For business owners, proof of business registration and tax returns.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create an IRCC Portal Account',
      description: 'Register and sign in to the official IRCC Portal online to start your Temporary Resident Visa (TRV) application.'
    },
    {
      step: 2,
      title: 'Complete Online Forms',
      description: 'Fill out the digital application forms, including the IMM 5257 (Visitor Visa) and IMM 5645 (Family Information).'
    },
    {
      step: 3,
      title: 'Upload Required Documents',
      description: 'Upload high-quality scans of your passport, photographs, financial proofs, NOC, invitation letter, and host status documents.'
    },
    {
      step: 4,
      title: 'Pay Visa and Biometric Fees',
      description: 'Pay the 100 CAD application fee and the 85 CAD biometrics fee online using a credit or debit card.'
    },
    {
      step: 5,
      title: 'Book Biometrics Appointment',
      description: 'Once you receive the Biometric Instruction Letter (BIL) via your portal, book an appointment at your nearest VFS Global Canada Visa Application Centre in India.'
    },
    {
      step: 6,
      title: 'Attend Biometrics Appointment',
      description: 'Visit the VFS Global center to submit your fingerprints and digital photograph. Bring your passport and the BIL.'
    },
    {
      step: 7,
      title: 'Submit Passport for Stamping',
      description: 'Upon approval, you will receive an Original Passport Request (OPR) letter. Submit your physical passport to VFS Global for visa stamping.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Applicants must demonstrate strong ties to India (such as employment, property, or family) to satisfy the visa officer that they will return at the end of their authorized stay. Biometrics are mandatory for all applicants aged 14 to 79 unless previously completed within the last 10 years.'
  }
};