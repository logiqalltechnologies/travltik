export default {
  country: 'papua-new-guinea samoa tonga vanuatu solomon-islands kiribati marshall-islands micronesia palau nauru tuvalu',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Immigration Departments and Ministries of Labor of the Respective Pacific Island Nations',
  channels: [
    'Official PNG eVisa Portal (https://evisa.ica.gov.pg/)',
    'High Commission of Papua New Guinea, New Delhi',
    'Direct Application to Respective Island Immigration Departments / Ministries of Internal Affairs'
  ],
  processingTime: {
    eVisa: '15 working days',
    standardSticker: '15 to 20 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'USD 250',
    stickerConsularStandard: 'USD 250',
    vfsServiceFee: 'Embassy Direct (No external service provider)'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.ica.gov.pg/',
    territorialScope: 'Nationwide',
    validity: 'Up to 3 years (linked to Work Permit validity)',
    maxStay: '1095 days',
    invitationRequired: true,
    processing: '15 working days'
  },
  stayDuration: {
    eVisa: 'Up to 1095 days (linked to Work Permit)',
    stickerSingleDouble: 'Up to 365 days',
    stickerMultiple: 'Up to 1095 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of arrival and at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Two recent passport-size photographs (35x45mm), white background, taken within the last 6 months, showing a neutral facial expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Approved Work Permit',
      description: 'Official Work Permit approval letter issued by the respective Ministry of Labor or Department of Labor and Industrial Relations of the destination country.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Signed Employment Contract',
      description: 'A copy of the formal employment contract signed by both the Indian applicant and the sponsoring employer in the destination country, detailing salary, designation, and terms.',
      icon: '🤝',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Apostilled Police Clearance Certificate issued by the Regional Passport Office (RPO) in India, valid within 6 months of the application date.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'Medical Examination Report',
      description: 'Comprehensive medical clearance certificate from an authorized hospital, including mandatory HIV test results and a Chest X-Ray report for Tuberculosis (TB) clearance, required for stays exceeding 90 days.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'sponsor_letter',
      title: 'Employer Letter of Guarantee',
      description: 'A formal letter from the sponsoring employer in the destination country guaranteeing financial maintenance, accommodation, and repatriation costs if required.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'academic_credentials',
      title: 'Educational & Professional Certificates',
      description: 'Attested copies of academic degrees, diplomas, and professional experience certificates matching the job description.',
      icon: '🎓',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Employment and Work Permit',
      description: 'The sponsoring employer in the destination country must apply for and obtain a Work Permit from the local Ministry of Labor/Internal Affairs before the visa application can be initiated.'
    },
    {
      step: 2,
      title: 'Prepare Documents and Medicals',
      description: 'Gather all required documents, including the approved Work Permit, signed contract, apostilled Indian PCC, and complete the medical examinations (including HIV and TB tests).'
    },
    {
      step: 3,
      title: 'Submit Visa Application',
      description: 'Apply online via the official portal (e.g., PNG eVisa) or submit physical documents to the respective High Commission/Embassy in New Delhi, or directly to the island nation\'s Immigration Department as required.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the statutory consular and processing fees online or via bank draft as instructed by the specific country\'s immigration authority.'
    },
    {
      step: 5,
      title: 'Receive Visa and Travel',
      description: 'Once approved, download the eVisa / Authority to Entry letter or collect your passport with the physical sticker visa, and travel within the validity period.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All arrivals must hold a valid Work Permit and a corresponding Work Visa/Entry Permit. Medical clearances (specifically HIV and TB tests) are strictly enforced for all long-term work visas. Yellow Fever vaccination certificate is mandatory only if arriving from or transiting through an endemic country.'
  }
};