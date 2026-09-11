export default {
  country: 'philippines',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Philippines in New Delhi',
  channels: [
    'https://evisa.gov.ph',
    'VFS Global Philippines Visa Application Center',
    'Embassy of the Philippines in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 200',
    vfsServiceFee: 'INR 1,180'
  },
  eVisa: {
    available: false,
    portal: 'https://evisa.gov.ph',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '365 days',
    stickerMultiple: '365 days'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed FA Form No. 2 (Application for Non-Immigrant Visa)',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'noa',
      title: 'Notice of Acceptance (NOA)',
      description: 'Original Notice of Acceptance from the Philippine Higher Education Institution',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'ched_endorsment',
      title: 'CHED / DFA Endorsement',
      description: 'Endorsement letter from CHED to DFA and Embassy clearance',
      icon: '🏛️',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Apostilled/Authenticated Police Clearance Certificate from India',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Health Certificate',
      description: 'Medical examination report including chest X-ray from a recognized clinic',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed flight reservation to the Philippines',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Apostilled bank statement showing sufficient funds for tuition fees and living expenses',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'University Admission & CHED Endorsement',
      description: 'Secure admission at an authorized Philippine university; the institution submits documents to CHED/DFA for visa authorization.'
    },
    {
      step: 2,
      title: 'Gather & Authenticate Documents',
      description: 'Prepare passport, medical report, police clearance, and financial documents with necessary apostille/authentication.'
    },
    {
      step: 3,
      title: 'Schedule VFS / Embassy Appointment',
      description: 'Book an appointment at the VFS Global Philippines Visa Application Center or Embassy.'
    },
    {
      step: 4,
      title: 'Submit Application & Pay Fees',
      description: 'Submit physical documents and pay consular ($200) and VFS service fees.'
    },
    {
      step: 5,
      title: 'Receive Visa & Travel',
      description: 'Collect your passport with the 9(f) Student Visa sticker and travel to the Philippines.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Upon arrival, students must register with the Bureau of Immigration for an ACR I-Card and maintain full-time enrollment.'
  }
};