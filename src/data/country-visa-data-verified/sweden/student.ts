export default {
  country: 'sweden',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Swedish Migration Agency (Migrationsverket)',
  channels: [
    'https://www.migrationsverket.se/',
    'VFS Global Sweden Application Centre',
    'Embassy of Sweden, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '60 to 90 days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'SEK 1,650',
    vfsServiceFee: 'INR 2,400'
  },
  eVisa: {
    available: false,
    portal: 'https://www.migrationsverket.se/',
    territorialScope: 'Sweden and Schengen Area',
    validity: 'Duration of study program (usually 1 to 2 years, renewable)',
    maxStay: 'Duration of study program',
    invitationRequired: true,
    processing: '60 to 90 days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Duration of study program (renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for the entire duration of the requested residence permit, with at least two blank pages, issued within the last 10 years.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm, white background, taken within 6 months, neutral expression, showing full face without headgear (except for religious reasons).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Summary',
      description: 'Printed and signed summary page of the online application submitted via the Swedish Migration Agency (Migrationsverket) portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Acceptance',
      description: 'Official Notification of Selection Results or Letter of Acceptance showing full-time admission to a higher education program in Sweden.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'tuition_receipt',
      title: 'Proof of Tuition Payment',
      description: 'Receipt or official confirmation showing that the first installment of the tuition fee has been paid to the Swedish university, or a scholarship certificate covering the fee.',
      icon: '🧾',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements in the applicant\'s own name showing a minimum of SEK 10,385 per month of stay (for 10 months per year), or an official education loan sanction letter, or a scholarship certificate.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Health Insurance',
      description: 'For study programs lasting less than one year, proof of comprehensive health insurance covering at least EUR 30,000 for medical expenses and repatriation is mandatory. For programs longer than one year, students are covered by the Swedish healthcare system once registered, but initial travel insurance is highly recommended.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure University Admission',
      description: 'Apply and receive a formal, full-time admission offer from a recognized Swedish higher education institution.'
    },
    {
      step: 2,
      title: 'Pay Tuition Fee',
      description: 'Pay the first installment of the tuition fee to the university. The Swedish Migration Agency will not process the permit application until this payment is registered.'
    },
    {
      step: 3,
      title: 'Submit Online Application',
      description: 'Create an account on the Migrationsverket portal, complete the residence permit for studies application, upload digital copies of all required documents, and pay the SEK 1,650 application fee online.'
    },
    {
      step: 4,
      title: 'Book VFS Biometrics Appointment',
      description: 'Schedule an appointment at a VFS Global Sweden Application Centre in India to submit biometrics (fingerprints and photograph) and present original documents for verification.'
    },
    {
      step: 5,
      title: 'Await Decision',
      description: 'The Swedish Migration Agency processes the application. This standard sticker/permit processing takes approximately 60 to 90 days.'
    },
    {
      step: 6,
      title: 'Collect Residence Permit Card (UT-kort)',
      description: 'Once approved, the physical Residence Permit Card (UT-kort) is produced in Sweden and sent to the Embassy of Sweden in New Delhi. Collect the card from the Embassy or designated VFS center before traveling to Sweden.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian citizens must obtain their physical Residence Permit Card (UT-kort) before entering Sweden. Biometrics must be completed at VFS Global in India. Financial proof must be strictly in the applicant\'s own bank account; joint accounts with parents are accepted only under strict conditions (e.g., spouse or if parents are legal sponsors with explicit declarations).'
  }
};