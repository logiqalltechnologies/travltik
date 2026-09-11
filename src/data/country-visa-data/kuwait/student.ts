export default {
  country: 'kuwait',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Kuwait in New Delhi',
  channels: [
    'https://evisa.moi.gov.kw/',
    'https://www.vfsglobal.com/kuwait/india/',
    'https://www.kuwaitembassy.org.in/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '3-5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '10 KWD',
    vfsServiceFee: '6 KWD'
  },
  eVisa: {
    available: false,
    portal: 'https://evisa.moi.gov.kw/',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least two blank visa pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'entry_permit',
      title: 'Kuwait MOI Student Entry Permit (No. 14)',
      description: 'Original Student Visa NOC issued by Ministry of Interior Kuwait, sponsored by the host educational institution',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Issued by Regional Passport Office (RPO) and attested by the Ministry of External Affairs (MEA), India',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'medical',
      title: 'WAFID / GAMCA Medical Examination',
      description: 'Medical fitness certificate from an authorized WAFID medical centre',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Completed VFS visa endorsement application form',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'University Admission Letter',
      description: 'Official acceptance letter from a recognized Kuwaiti educational institution',
      icon: '🎓',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Entry Permit from Kuwait Host Institution',
      description: 'The educational institution in Kuwait obtains the Student Entry Permit approval from the Kuwait Ministry of Interior.'
    },
    {
      step: 2,
      title: 'Medical Fitness & PCC',
      description: 'Undergo medical check-up at an authorized WAFID centre and obtain an MEA-attested Police Clearance Certificate.'
    },
    {
      step: 3,
      title: 'Submit Passport at VFS Global',
      description: 'Submit passport, entry permit, medical report, PCC, and supporting documents at the VFS Global Kuwait Visa Application Centre.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (10 KWD) and VFS service fee (6 KWD equivalent in INR).'
    },
    {
      step: 5,
      title: 'Receive Passport & Travel',
      description: 'Collect passport stamped with the entry visa and travel to Kuwait within the 90-day validity window to finalize student residency (Iqama).'
    }
  ],
  specialRequirements: {
    entry_rules: 'The entry visa allows 90 days validity from issuance to enter Kuwait. Upon entry, the student must complete residence residency formalities (Iqama) within 30 days.'
  }
};