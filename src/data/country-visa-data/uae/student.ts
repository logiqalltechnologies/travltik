export default {
  country: 'uae',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)',
  channels: [
    'https://smartservices.icp.gov.ae/',
    'https://icp.gov.ae/',
    'https://gdrfad.gov.ae/'
  ],
  processingTime: {
    eVisa: '2-5 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '1,000 AED',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://smartservices.icp.gov.ae/',
    territorialScope: 'Nationwide',
    validity: '60 days (Entry Permit)',
    maxStay: '365 days',
    invitationRequired: true,
    processing: '2-5 working days'
  },
  stayDuration: {
    eVisa: '365 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 6 months beyond the intended stay with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'University Admission Letter',
      description: 'Official acceptance letter from an accredited higher education institution in the UAE.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'medical_fitness',
      title: 'Medical Fitness Test',
      description: 'Medical examination and blood test clearance upon entering the UAE.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements or tuition fee payment confirmation demonstrating financial solvency.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission',
      description: 'Secure formal acceptance from an accredited UAE university or institution.'
    },
    {
      step: 2,
      title: 'Apply for Entry Permit',
      description: 'Submit documents via the host university visa section or directly through the ICP Smart Services portal.'
    },
    {
      step: 3,
      title: 'Receive eVisa Entry Permit',
      description: 'Obtain the 60-day entry permit electronically prior to travel.'
    },
    {
      step: 4,
      title: 'Travel & Complete In-Country Formalities',
      description: 'Travel to the UAE, pass the medical test, and apply for Emirates ID biometrics.'
    },
    {
      step: 5,
      title: 'Issuance of Residence Visa',
      description: 'Receive official 1-year renewable student residence visa.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student residency visa is issued for 1 year (renewable) and requires medical fitness clearance and Emirates ID registration upon arrival.'
  }
};