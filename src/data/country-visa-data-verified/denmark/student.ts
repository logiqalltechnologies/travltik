export default {
  country: 'denmark',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Danish Agency for International Recruitment and Integration (SIRI) / Royal Danish Embassy, New Delhi',
  channels: [
    'SIRI New to Denmark Portal (NyiDanmark.dk)',
    'VFS Global Denmark Visa Application Centre',
    'Royal Danish Embassy, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '60 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'DKK 2,490 (SIRI Case Order ID Fee)',
    vfsServiceFee: 'INR 2,130'
  },
  eVisa: {
    available: false,
    portal: 'https://www.nyidanmark.dk',
    territorialScope: 'Nationwide (Denmark)',
    validity: 'Duration of educational program',
    maxStay: 'Up to duration of studies + 6 months job seeker allowance',
    invitationRequired: true,
    processing: '60 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Duration of study program (up to maximum standard degree length)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Passport',
      description: 'Original Indian passport valid for at least 3 months beyond the intended stay with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photos with white background, taken within the last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'siri_case_order',
      title: 'SIRI Case Order ID Receipt',
      description: 'Receipt confirming payment of the mandatory SIRI Case Order ID fee (DKK 2,490) paid online before submission.',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'st1_form',
      title: 'ST1 Application Form Confirmation',
      description: 'Completed ST1 online application form reference (Part 2 completed by educational institution, Part 1 by student).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Letter of Acceptance',
      description: 'Unconditional admission letter from a recognized Danish higher educational institution.',
      icon: 'school',
      mandatory: true
    },
    {
      key: 'tuition_receipt',
      title: 'Proof of Tuition Fee Payment',
      description: 'Receipt or documentation proving payment of the first semester/year tuition fees or a scholarship grant award.',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Means',
      description: 'Bank statements in applicant name, sanctioned education loan, or scholarship proving availability of required living expenses (~DKK 6,820/month if tuition is paid).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'academic_docs',
      title: 'Academic Certificates and Transcripts',
      description: 'Attested marksheets and degree certificates from secondary school and previous higher education institutions.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'language_proficiency',
      title: 'Proof of English Proficiency',
      description: 'Valid IELTS, TOEFL, or PTE academic score report meeting the Danish institution mandatory threshold.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen-compliant travel medical insurance covering minimum €30,000 until registration with the Danish Civil Registration System (CPR).',
      icon: 'insurance',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Pay SIRI Case Order Fee',
      description: 'Create a Case Order ID on the New to Denmark portal (nyidanmark.dk) and pay the mandatory SIRI fee.'
    },
    {
      step: 2,
      title: 'Complete ST1 Online Application',
      description: 'Ensure the Danish university completes Part 2, then complete Part 1 online and gather required documentation.'
    },
    {
      step: 3,
      title: 'Book VFS Biometric Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Denmark Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Biometrics and Dossier',
      description: 'Attend the VFS appointment to submit physical documents, record biometric data (fingerprints and photo), and pay VFS service charges.'
    },
    {
      step: 5,
      title: 'Receive SIRI Decision and Entry Sticker',
      description: 'Upon approval by SIRI, obtain the entry D-visa sticker in passport to travel to Denmark and obtain CPR registration upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Students must register with the local municipality (Borgerservice) upon arrival in Denmark to obtain a CPR (Civil Registration) number and health insurance card.'
  }
};