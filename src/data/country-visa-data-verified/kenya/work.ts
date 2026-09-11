export default {
  country: 'kenya',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Directorate of Immigration Services, State Department for Immigration and Citizen Services',
  externalServiceProvider: 'Embassy direct',
  channels: [
    'https://fns.immigration.go.ke/',
    'https://www.etakenya.go.ke/',
    'https://www.kenyaembassy.org.in/'
  ],
  processingTime: {
    eVisa: '30-60 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'KES 20,000 processing fee + KES 500,000/year issuance fee',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://fns.immigration.go.ke/',
    territorialScope: 'Kenya nationwide',
    validity: '1 to 2 years',
    maxStay: '730 days',
    invitationRequired: true,
    processing: '30-60 working days'
  },
  stayDuration: {
    eVisa: '730 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent passport-size photographs taken against a white background.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Employer Cover Letter & Contract',
      description: 'Official letter from the sponsoring Kenyan employer detailing job description, terms of employment, and signed employment contract.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'qualifications',
      title: 'Academic & Professional Certificates',
      description: 'Certified copies of professional and academic certificates and detailed curriculum vitae (CV).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'company_docs',
      title: 'Kenyan Company Documents',
      description: 'Copies of company registration certificate, valid Tax Compliance Certificate (KRA PIN), and list of Kenyan understudies being trained.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Valid Police Clearance Certificate (PCC) issued by the Indian authorities.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Collect all required personal qualifications, police clearance, and sponsoring company registration documents.'
    },
    {
      step: 2,
      title: 'Submit Application Online via eFNS',
      description: 'The prospective employer submits the Class D Work Permit application online on the electronic Foreign Nationals Services (eFNS) portal (fns.immigration.go.ke).'
    },
    {
      step: 3,
      title: 'Pay Processing Fee',
      description: 'Pay the non-refundable statutory processing fee of KES 20,000 online through the eCitizen gateway.'
    },
    {
      step: 4,
      title: 'Permit Committee Processing',
      description: 'Await review and approval by the Immigration Permits Determination Committee (typically 30 to 60 working days).'
    },
    {
      step: 5,
      title: 'Pay Issuance Fee & Obtain eTA',
      description: 'Upon approval, pay the annual permit issuance fee (KES 500,000/year), receive the work permit notification, and submit an Electronic Travel Authorisation (eTA) application at etakenya.go.ke prior to flight boarding.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All traditional sticker visas are discontinued. Indian nationals travelling for work must hold an approved Kenyan Work Permit / Special Pass issued by the Directorate of Immigration Services via eFNS, followed by an approved Kenya eTA (etakenya.go.ke) before boarding.'
  }
};