export default {
  country: 'sweden',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Swedish Migration Agency (Migrationsverket)',
  channels: [
    'Swedish Migration Agency Online Portal',
    'VFS Global Application Centre',
    'Embassy of Sweden, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '60 to 120 working days',
    expressSticker: '15 to 30 working days (for highly qualified/fast-track applications)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'SEK 2,200',
    vfsServiceFee: 'INR 1,620'
  },
  eVisa: {
    available: false,
    portal: 'https://www.migrationsverket.se',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 24 months (renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for the entire duration of the requested work permit, with at least two blank pages, and issued within the last 10 years.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (taken within the last 6 months) with a white background, neutral facial expression, and meeting standard Schengen biometric specifications.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Online Application Summary',
      description: 'Printed and signed copy of the online application summary sheet generated from the Swedish Migration Agency portal after submitting the digital form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_offer',
      title: 'Official Offer of Employment',
      description: 'Anställningserbjudande (Offer of Employment) initiated online by your Swedish employer and approved by the relevant trade union, detailing salary, terms, and duration.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'salary_proof',
      title: 'Proof of Minimum Salary Threshold',
      description: 'Employment contract showing a gross monthly salary of at least SEK 28,480 (or 80% of the Swedish median salary, whichever is higher) or in line with Swedish collective agreements.',
      icon: '💵',
      mandatory: true
    },
    {
      key: 'insurance_proof',
      title: 'Employer Insurance Commitment',
      description: 'Written confirmation from the employer showing they have signed or will sign health, life, employment, and pension insurances for you upon commencement of work.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'academic_proof',
      title: 'Academic and Professional Qualifications',
      description: 'Degree certificates, diplomas, and detailed CV translated into English or Swedish, proving you meet the professional requirements for the position.',
      icon: '🎓',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Initiates Application',
      description: 'Your Swedish employer initiates the work permit application on the Swedish Migration Agency (Migrationsverket) portal by entering details of the employment offer and trade union opinion.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Once the employer completes their part, you will receive an email invitation. Fill out your section of the application, upload all required documents, and pay the application fee of SEK 2,200 online.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global centre in India to present your original passport, submit biometric data (fingerprints and photograph), and verify your identity.'
    },
    {
      step: 4,
      title: 'Await Decision',
      description: 'The Swedish Migration Agency processes the application. If approved, a Residence Permit Card (UT-kort) is manufactured.'
    },
    {
      step: 5,
      title: 'Collect Residence Permit Card',
      description: 'Collect your Residence Permit Card from the Embassy of Sweden or VFS Global centre. This card is required to enter Sweden and prove your legal right to work.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian citizens must obtain their physical Residence Permit Card (UT-kort) before traveling to Sweden. You cannot travel to Sweden to wait for your decision or card.'
  }
};