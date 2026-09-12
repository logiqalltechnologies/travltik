export default {
  country: 'venezuela',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs, Republic of Venezuela',
  channels: [
    'https://visa.mre.gob.ve',
    'https://www.vfsglobal.com/venezuela/india',
    'https://www.indianembassyvenezuela.gov.in'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: '7 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 150',
    vfsServiceFee: 'USD 30'
  },
  eVisa: {
    available: false,
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 365 days (renewable)',
    stickerMultiple: 'Up to 365 days (renewable)'
  },
  entryType: 'Multiple Entry',
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
      description: 'White background, taken within the last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online visa application on the official portal and print the confirmation page.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip reservation (return ticket) or proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'University dormitory confirmation, rental agreement, or hotel reservation covering the entire stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical insurance covering at least USD 30,000 for the whole duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'education_loan',
      title: 'Financial Proof – Education Loan / Blocked Account',
      description: 'Official loan sanction letter from a recognized Indian bank or a blocked account statement showing sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'International Certificate of Vaccination (ICV) issued by an authorized health authority.',
      icon: '💉',
      mandatory: true
    },
    {
      key: 'hiv_test',
      title: 'HIV Test Report',
      description: 'Laboratory‑verified HIV negative report (valid for 6 months) required for stays exceeding 90 days.',
      icon: '🧪',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official acceptance letter from the Venezuelan educational institution indicating course duration and fees.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create Online Account',
      description: 'Register on the official Venezuelan visa portal and fill in personal details.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Enter all required information, upload documents, and pay the consular fee online.'
    },
    {
      step: 3,
      title: 'Schedule Appointment',
      description: 'Book a slot at the VFS Global service center or the Venezuelan Embassy in New Delhi.'
    },
    {
      step: 4,
      title: 'Submit Biometric Data',
      description: 'Attend the appointment to provide fingerprints and photograph.'
    },
    {
      step: 5,
      title: 'Document Verification',
      description: 'Embassy reviews submitted documents, including financial proof, admission letter, and health certificates.'
    },
    {
      step: 6,
      title: 'Visa Issuance',
      description: 'Collect the sticker visa (standard or express) from the service center or embassy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate mandatory. HIV negative test required for stays >90 days. Proof of enrollment and sufficient financial resources (education loan or blocked account) must be presented.'
  }
};