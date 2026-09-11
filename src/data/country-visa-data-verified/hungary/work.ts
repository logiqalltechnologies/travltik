export default {
  country: 'hungary',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'National Directorate-General for Aliens Policing (NDGAP) / Embassy of Hungary, New Delhi',
  channels: [
    'VFS Global Hungary Visa Application Centre',
    'Embassy of Hungary in New Delhi / Consulate General in Mumbai',
    'Enter Hungary Portal (Employer Electronic Filing)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '45-60 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '110 EUR',
    vfsServiceFee: '26 EUR (approx. INR 2,340)'
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
    stickerSingleDouble: '30 days entry window (to collect Residence Permit valid up to 1-2 years)',
    stickerMultiple: 'Up to 2 years (renewable in Hungary)'
  },
  entryType: 'Single Entry (Type D Visa for Residence Permit collection)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 1 year with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport photos, 35x45mm, white background, taken within the last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Residence Permit Application Form & Appendix 11',
      description: 'Completed and signed application form for Residence Permit for Employment and Appendix 11.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Work Contract / Binding Agreement',
      description: 'Valid employment contract or preliminary agreement signed with the Hungarian employer outlining role, salary, and working hours.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Apostilled Police Clearance Certificate (PCC)',
      description: 'Police Clearance Certificate issued by the Regional Passport Office (RPO), apostilled by Ministry of External Affairs (MEA), India.',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'education_proof',
      title: 'Apostilled Educational & Professional Qualifications',
      description: 'Attested and apostilled degree certificates or vocational credentials verifying eligibility for the job role.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation in Hungary',
      description: 'Lease contract, property registry title deed extract (Tulajdoni lap), or formal declaration from the employer providing housing.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Personal Financial Proof',
      description: 'Certified bank statements for the past 6 months showing sufficient funds for initial settlement in Hungary.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen travel medical insurance covering emergency care and repatriation up to €30,000 until enrollment in the Hungarian National Health Insurance (TAJ).',
      icon: 'insurance',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Workforce Registration',
      description: 'The employer in Hungary registers the employment intention and submits pre-approval forms via the Enter Hungary portal.'
    },
    {
      step: 2,
      title: 'Document Legalization & Apostille',
      description: 'Obtain an Indian PCC and apostille all required educational and professional documents via MEA India.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics at VFS/Consulate',
      description: 'Book an appointment, present application forms with Appendix 11, submit physical documents, and complete biometric collection.'
    },
    {
      step: 4,
      title: 'Receive Type D Visa & Complete Local Registration',
      description: 'Upon approval from NDGAP, collect your passport with the Type D entry visa. After arrival in Hungary, report to the regional NDGAP office within 30 days to receive your physical Residence Permit card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The D-type visa allows single entry to Hungary for a maximum of 30 days. Travelers must report to the competent NDGAP regional directorate in Hungary within 30 days of entry to obtain the physical Residence Permit.'
  }
};