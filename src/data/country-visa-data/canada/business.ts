export default {
  country: 'canada',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
  channels: [
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html',
    'VFS Global Canada Visa Application Centre'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 CAD',
    vfsServiceFee: 'VFS package transmission fee is covered under the 85 CAD biometrics fee. Optional courier and premium services cost extra.'
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
    stickerSingleDouble: 'Up to 180 days per entry',
    stickerMultiple: 'Up to 180 days per entry (validity up to 10 years or passport expiry)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of intended arrival in Canada and at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent digital photographs (35x45mm), white background, taken within 6 months, neutral expression, face covering 70-80% of the frame.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application forms (IMM 5257 and IMM 5645 Family Information) submitted via the official IRCC Portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'business_invitation',
      title: 'Official Invitation Letter',
      description: 'A formal invitation letter from the host company in Canada detailing the purpose of the visit, duration of stay, contact details, and confirming who will bear the travel expenses.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Covering Letter & NOC',
      description: 'An official covering letter from the Indian employer on company letterhead detailing the applicant’s designation, salary, purpose of travel, and a No Objection Certificate (NOC) confirming return to duty.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'business_registration',
      title: 'Proof of Business Registration',
      description: 'Registration documents of the Indian employer (e.g., GST registration, Certificate of Incorporation, or Partnership Deed) and registration details of the Canadian host company.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal and company bank statements for the last 6 months certified by the bank, along with Income Tax Returns (ITR-V) for the last 2 years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation showing entry and exit dates (do not purchase actual tickets until the visa is approved).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or details of accommodation arranged by the Canadian host company.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Travel medical insurance covering the entire duration of stay in Canada (highly recommended to cover emergency medical expenses).',
      icon: '🛡️',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create IRCC Portal Account',
      description: 'Register and create an account on the official Immigration, Refugees and Citizenship Canada (IRCC) Portal.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the online application forms (IMM 5257 and IMM 5645) and upload all required supporting documents, including the business invitation and financial proofs.'
    },
    {
      step: 3,
      title: 'Pay Fees Online',
      description: 'Pay the visa application fee (100 CAD) and the biometrics fee (85 CAD) online using a credit or debit card.'
    },
    {
      step: 4,
      title: 'Book Biometrics Appointment',
      description: 'Once you receive the Biometric Instruction Letter (BIL), book an appointment at the nearest VFS Global Canada Visa Application Centre in India.'
    },
    {
      step: 5,
      title: 'Attend Biometrics Appointment',
      description: 'Visit the VFS Global center with your passport, appointment letter, and BIL to submit your fingerprints and digital photograph.'
    },
    {
      step: 6,
      title: 'Submit Passport for Stamping',
      description: 'Upon approval, you will receive an Original Passport Request (OPR). Submit your physical passport to VFS Global for visa stamping.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Biometrics are mandatory for all applicants aged 14 to 79. Business visitors must not intend to enter the Canadian labor market (no direct employment or hands-on work is permitted under a business visitor visa).'
  }
};