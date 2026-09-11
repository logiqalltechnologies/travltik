export default {
  country: 'oman',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Royal Oman Police (ROP) & Ministry of Labour, Government of Oman',
  channels: [
    'https://evisa.rop.gov.om/',
    'Embassy of the Sultanate of Oman, New Delhi'
  ],
  processingTime: {
    eVisa: '5 - 7 working days',
    standardSticker: '7 - 10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '20 OMR',
    stickerConsularStandard: '20 OMR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.rop.gov.om/',
    territorialScope: 'Sultanate of Oman',
    validity: '3 months to enter',
    maxStay: '2 years',
    invitationRequired: true,
    processing: '5 - 7 working days'
  },
  stayDuration: {
    eVisa: '2 years',
    stickerSingleDouble: '2 years',
    stickerMultiple: '2 years'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond entry and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Recent photographs (4x6 cm) on a white background.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'medical_fitness',
      title: 'WAFID (GAMCA) Medical Certificate',
      description: 'Approved medical fitness certificate from an authorized WAFID medical center in India.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'labour_permit',
      title: 'Ministry of Labour Approval',
      description: 'Labour clearance/approval obtained by the sponsor/employer from Oman Ministry of Labour.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment agreement between the applicant and the Omani employer.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'WAFID Medical Examination',
      description: 'Complete mandatory medical fitness screening at an authorized WAFID medical center in India.'
    },
    {
      step: 2,
      title: 'Labour Clearance & Visa Application',
      description: 'The Omani employer obtains labour clearance and submits the employment visa application via the official ROP eVisa portal.'
    },
    {
      step: 3,
      title: 'Visa Issuance',
      description: 'Upon ROP approval and payment of 20 OMR fee, the electronic employment visa is issued.'
    },
    {
      step: 4,
      title: 'Entry & Residence Card',
      description: 'Travel to Oman within 3 months of visa issuance and complete residence permit/civil card processing upon entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'WAFID medical clearance is mandatory for Indian nationals prior to visa approval. Once in Oman, applicant must complete biometric registration for a Resident Card.'
  }
};