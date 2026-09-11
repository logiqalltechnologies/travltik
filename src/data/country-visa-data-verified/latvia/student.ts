export default {
  country: 'latvia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Office of Citizenship and Migration Affairs (PMLP) / Embassy of the Republic of Latvia in New Delhi',
  channels: [
    'VFS Global Latvia Visa Application Centre',
    'Embassy of the Republic of Latvia in New Delhi',
    'PMLP E-Services Portal'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '60 EUR',
    vfsServiceFee: '25 EUR (payable in INR equivalent)'
  },
  eVisa: {
    available: false,
    portal: 'https://epalderis.pmlp.gov.lv/',
    territorialScope: 'Latvia (National Long-Stay D Visa)',
    validity: 'Up to 1 year',
    maxStay: '365 days',
    invitationRequired: true,
    processing: '15 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 365 days (renewable via Temporary Residence Permit)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended stay, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within 6 months) color photos on a light grey/white background, 80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa (Type D) Application Form',
      description: 'Duly completed and signed Long-Stay Visa application form generated via PMLP e-services portal (epalderis.pmlp.gov.lv).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'ocma_invitation',
      title: 'OCMA Approved Invitation Number',
      description: 'Official invitation number approved by the Office of Citizenship and Migration Affairs (PMLP) provided by the Latvian university.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'study_proof',
      title: 'University Acceptance & Study Agreement',
      description: 'Unconditional admission letter from an accredited Latvian university along with signed study contract.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'academic_docs',
      title: 'Apostilled Academic Qualification Documents',
      description: 'Original educational degrees/diplomas and transcripts evaluated by the Academic Information Centre (AIC) and Apostilled by MEA India.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Bank statement for the last 3 months showing minimum required subsistence funds (€700/month or minimum €8,400/year) or official education loan sanction letter.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original Police Clearance Certificate issued by Passport Seva Kendra (PSK) within the last 6 months, Apostilled by MEA India.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Health Insurance',
      description: 'Comprehensive travel health insurance policy covering the entire duration of initial stay with minimum coverage of €42,000.',
      icon: 'document',
      mandatory: true
    }
  ]
};