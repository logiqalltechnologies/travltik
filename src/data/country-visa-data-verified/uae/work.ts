export default {
  country: 'uae',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'UAE Ministry of Human Resources and Emiratisation (MoHRE) / Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)',
  channels: [
    'https://icp.gov.ae',
    'https://mohre.gov.ae',
    'https://gdrfad.gov.ae'
  ],
  processingTime: {
    eVisa: '2-5 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '250 AED',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://icp.gov.ae',
    territorialScope: 'All UAE Emirates',
    validity: '60 days',
    maxStay: '60 days',
    invitationRequired: true,
    processing: '2-5 working days'
  },
  stayDuration: {
    eVisa: '60 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from the date of entry into the UAE.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Recent white background photograph (passport format).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'employment_offer',
      title: 'MoHRE Job Offer & Work Permit Approval',
      description: 'Official employment offer signed by employer and employee, approved by MoHRE.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'educational_certificate',
      title: 'Attested Educational Certificates',
      description: 'Degrees/diplomas attested by MEA India and UAE Embassy in New Delhi (required for skilled roles).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'entry_permit',
      title: 'Employment Entry Permit',
      description: 'Electronic entry permit issued online by ICP / GDRFA prior to travel.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'MoHRE Approval & Work Permit Quota',
      description: 'UAE employer applies for quota approval and initial work permit from MoHRE.'
    },
    {
      step: 2,
      title: 'Employment Entry Permit Issuance',
      description: 'Employer applies for the electronic Employment Entry Permit via ICP or GDRFA portal.'
    },
    {
      step: 3,
      title: 'Travel to UAE',
      description: 'Employee travels to the UAE using the e-Entry Permit valid for 60 days.'
    },
    {
      step: 4,
      title: 'Medical Fitness Test & Biometrics',
      description: 'Undergo medical fitness screening (HIV, TB, Hepatitis) and Emirates ID biometrics in the UAE.'
    },
    {
      step: 5,
      title: 'Residency Visa Issuance',
      description: 'Residency visa is finalized and Emirates ID issued (typically valid for 2 years).'
    }
  ],
  specialRequirements: {
    entry_rules: 'UAE Work Entry Permits must be initiated and sponsored by the UAE employer via MoHRE and ICP/GDRFA online. VFS does not process employment entry permits. Medical fitness test and Emirates ID completion are mandatory within 60 days of entry into the UAE.'
  }
};