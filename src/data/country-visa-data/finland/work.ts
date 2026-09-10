export default {
  country: 'finland',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Finnish Immigration Service (Migri) / Embassy of Finland, New Delhi',
  channels: ['Enter Finland Portal', 'VFS Global Application Centre', 'Embassy of Finland, New Delhi'],
  processingTime: {
    eVisa: 'N/A (Electronic Residence Permit E-Service)',
    standardSticker: '30 to 90 working days (Standard Residence Permit for Employed Person)',
    expressSticker: '14 working days (Fast-Track for Specialists & High Earners)'
  },
  fees: {
    eVisaTotal: '€540 (Online Residence Permit Application via Enter Finland)',
    stickerConsularStandard: '€740 (Paper-based Residence Permit Application)',
    vfsServiceFee: 'INR 2,200 (VFS Global Biometric & Document Verification Fee)'
  },
  eVisa: {
    available: false,
    portal: 'https://enterfinland.fi',
    territorialScope: 'Nationwide',
    validity: '1 to 4 years (Continuous A-permit or Fixed-term B-permit)',
    maxStay: 'Duration of employment contract (up to 4 years per issuance)',
    invitationRequired: true,
    processing: '30 to 90 days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to duration of Residence Permit validity (1 to 4 years)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended residence period with minimum 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent passport photo taken within the last 6 months on a light background, conforming to Finnish Police photo guidelines',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Enter Finland Application Summary',
      description: 'Completed electronic application form summary (OLE_TY1 for general employment or Specialist form) from Enter Finland',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Signed Employment Contract / Job Offer',
      description: 'Binding employment contract specifying key working conditions, duties, salary, and working hours adhering to Finnish Collective Agreements',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'employer_terms',
      title: 'Terms of Employment Form (TYP_750)',
      description: 'Filled and signed by the Finnish employer detailing corporate registration, tax ID, and salary guarantees',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'educational_qualifications',
      title: 'Degrees and Professional Qualifications',
      description: 'Attested educational certificates, professional licenses, and updated CV confirming suitability for the role',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Salary Structure',
      description: 'Proof that guaranteed salary meets or exceeds Finnish threshold requirements (€1,399/month minimum for general employment, higher for specialist roles)',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Health Insurance',
      description: 'Private medical insurance covering medical treatments and hospitalization until registered with the Finnish National Health Scheme (Kela)',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'PCC issued by Regional Passport Office (RPO) India, duly legalised/apostilled',
      icon: 'shield',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Initiate Online Application',
      description: 'Receive binding job offer from Finnish employer and create an account on the Enter Finland portal.'
    },
    {
      step: 2,
      title: 'Submit Application & Employer Verification',
      description: 'Complete the employment residence permit application and have the employer complete the Terms of Employment section.'
    },
    {
      step: 3,
      title: 'Biometric Verification at VFS / Embassy',
      description: 'Book an appointment at VFS Global or Embassy of Finland in New Delhi to verify identity, present original documents, and give biometrics.'
    },
    {
      step: 4,
      title: 'Decision and Residence Permit Card Collection',
      description: 'Track application on Enter Finland; upon decision, collect your Finnish Residence Permit Card (or D-visa sticker if fast-tracked).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Mandatory registration with the Digital and Population Data Services Agency (DVV) upon arrival in Finland to obtain a Finnish Personal Identity Code. Guaranteed remuneration must satisfy relevant Finnish Collective Labour Agreements (TES).'
  }
};