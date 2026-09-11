export default {
  country: 'kuwait',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Interior / Public Authority of Manpower (PAM), Kuwait',
  channels: [
    'https://evisa.moi.gov.kw',
    'https://www.vfsglobal.com/kuwait/india/',
    'https://www.mofa.gov.kw'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 to 10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '20 KWD (approx. ₹5,400)',
    vfsServiceFee: '₹1,650'
  },
  eVisa: {
    available: false,
    portal: 'https://evisa.moi.gov.kw',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days (entry window to complete Residence Permit / Iqama)',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the arrival date with minimum 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Work Permit / NOC',
      description: 'Original No Objection Certificate (NOC) / Work Permit issued by the Kuwait Public Authority of Manpower (PAM) secured by the employer.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Issued by Passport Seva Kendra (PSK) and attested by the Ministry of External Affairs (MEA), India.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'GAMCA / WAFID Medical Certificate',
      description: 'Medical fitness test report from an authorized WAFID / GAMCA medical center in India.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Recent photographs (35x45mm) with white background, taken within 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Stamping Application Form',
      description: 'Duly completed and signed Kuwait visa application form.',
      icon: '📋',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Work Permit (NOC)',
      description: 'Sponsoring employer in Kuwait obtains the approved Work Permit (NOC) from the Public Authority of Manpower (PAM).'
    },
    {
      step: 2,
      title: 'Medical Check & PCC',
      description: 'Undergo medical fitness test at an authorized WAFID/GAMCA center and obtain an MEA-attested PCC from Passport Seva Kendra.'
    },
    {
      step: 3,
      title: 'Submit Application at VFS Global',
      description: 'Submit passport, NOC, medical fit report, PCC, and application form at the designated VFS Global Kuwait Application Centre.'
    },
    {
      step: 4,
      title: 'Passport Retrieval & Travel',
      description: 'Collect passport stamped with the entry work visa and travel to Kuwait within 90 days to complete residency (Iqama) procedures.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work entry visa is valid for entry within 90 days of issuance. Upon arrival in Kuwait, the applicant must complete fingerprinting and medical testing to obtain full Residence Permit (Iqama).'
  }
};