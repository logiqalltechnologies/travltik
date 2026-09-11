export default {
  country: 'saudi-arabia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs, Kingdom of Saudi Arabia',
  channels: [
    'VFS Tasheer (Saudi Visaing Center)',
    'Ministry of Foreign Affairs (MOFA)',
    'Saudi Embassy / Consulate'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '0 SAR',
    vfsServiceFee: '165 SAR'
  },
  eVisa: {
    available: false,
    portal: 'https://visa.mofa.gov.sa',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'As per academic program duration',
    stickerMultiple: 'As per academic program duration'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond intended departure date with minimum two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Recent photographs (35x45mm) with a white background, full face view.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'University Acceptance & MOFA Visa Approval',
      description: 'Official acceptance letter from a recognized Saudi university and MOFA visa authorization approval (Enjaz number).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'educational_attestation',
      title: 'Attested Educational Certificates',
      description: 'Academic degrees/diplomas attested by the Ministry of External Affairs (MEA), India, and the Saudi Culture Center/Embassy.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'GAMCA Medical Examination Certificate',
      description: 'Medical fitness report from a GAMCA/GCCHMC approved medical center in India.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'PCC issued by Passport Seva Kendra (Regional Passport Office) and legalized for Saudi Arabia.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Sponsorship / Scholarship Letter',
      description: 'Official university scholarship letter or bank statement showing sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain University Admission & MOFA Authorization',
      description: 'Secure admission to a recognized Saudi institution and obtain the MOFA visa authorization approval.'
    },
    {
      step: 2,
      title: 'Undergo Medical Examination & PCC',
      description: 'Complete the GAMCA medical test at an authorized center and obtain a Police Clearance Certificate (PCC).'
    },
    {
      step: 3,
      title: 'Attest Academic Credentials',
      description: 'Get educational qualifications attested by HRD, MEA India, and the Saudi Embassy/Cultural Attache.'
    },
    {
      step: 4,
      title: 'Book VFS Tasheer Appointment',
      description: 'Schedule an appointment at the nearest VFS Tasheer (Saudi Visaing Center) in India.'
    },
    {
      step: 5,
      title: 'Submit Application & Biometrics',
      description: 'Submit physical documents, pay service charges, and complete biometric enrolment at VFS Tasheer.'
    },
    {
      step: 6,
      title: 'Visa Issuance & Iqama Registration',
      description: 'Collect stamped passport upon approval. Upon arrival in Saudi Arabia, convert entry visa into a Resident Permit (Iqama).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Saudi Student Visas are issued as initial entry visas. Students must complete medical verification and apply for an Iqama (Residency Permit) through their host university within 90 days of arrival in the Kingdom. GAMCA medical report and Police Clearance Certificate (PCC) are mandatory for Indian applicants.'
  }
};