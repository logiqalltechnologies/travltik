export default {
  country: 'vietnam',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Vietnam in New Delhi',
  channels: [
    'https://evisa.xuatnhapcanh.gov.vn',
    'https://vietnamembassy.org.in'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '5 working days',
    expressSticker: '1-3 working days'
  },
  fees: {
    eVisaTotal: '25 USD',
    stickerConsularStandard: '25 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.xuatnhapcanh.gov.vn',
    territorialScope: 'Designated international ports of entry in Vietnam',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '365 days'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least two blank pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'approval_letter',
      title: 'Vietnam Immigration Approval Letter',
      description: 'Official visa approval letter obtained by the host educational institution from the Vietnam Immigration Department',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'University Admission Letter',
      description: 'Acceptance letter from a recognized educational institution in Vietnam',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (40x60mm)',
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed visa application form',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Proof of sufficient funds to cover tuition and living expenses in Vietnam',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'University Sponsorship & Approval Letter',
      description: 'The host educational institution in Vietnam applies for a Student Visa (DH) approval letter from the Vietnam Immigration Department.'
    },
    {
      step: 2,
      title: 'Receive Approval Code / Letter',
      description: 'Once approved, receive the official approval letter copy from the university.'
    },
    {
      step: 3,
      title: 'Submit Application to Embassy / CG',
      description: 'Submit your passport, approval letter, photos, and completed application form directly to the Embassy of Vietnam in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Consular Fees',
      description: 'Pay the statutory consular fee directly to the embassy/consulate.'
    },
    {
      step: 5,
      title: 'Collect Visa Sticker',
      description: 'Collect your passport with the student visa sticker after processing.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa (DH category) requires an official visa approval letter issued by the Vietnam Immigration Department upon request of the host educational institution in Vietnam. Upon arrival in Vietnam, long-term students can apply for a Temporary Residence Card (TRC) valid for up to 1 year.'
  }
};