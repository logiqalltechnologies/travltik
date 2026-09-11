export default {
  country: 'Denmark',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Danish Agency for International Recruitment and Integration (SIRI) / Royal Danish Embassy, New Delhi',
  channels: ['SIRI Online Portal (Ny i Danmark)', 'VFS Global Denmark Application Centre', 'Royal Danish Embassy'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 to 60 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'DKK 3,000 (SIRI Processing Fee)',
    vfsServiceFee: 'INR 1,680'
  },
  eVisa: {
    available: false,
    portal: 'https://www.nyidanmark.dk',
    territorialScope: 'Denmark',
    validity: 'Up to 4 years (linked to employment contract)',
    maxStay: 'Duration of employment contract',
    invitationRequired: true,
    processing: '30 to 60 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Duration of employment contract (up to 4 years)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond intended stay with minimum 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent white background photo, taken within 6 months, showing full face',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'siri_receipt',
      title: 'SIRI Case Order ID & Fee Receipt',
      description: 'Proof of Case Order ID creation and payment of the official SIRI processing fee',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Danish Employment Contract',
      description: 'Signed job contract specifying salary, working hours, and terms compliant with Danish labor standards',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'qualifications',
      title: 'Educational & Professional Credentials',
      description: 'Attested degree certificates, transcripts, and detailed CV supporting job role requirements',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Coverage for initial transition period until official registration in the Danish CPR network',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'vfs_appointment',
      title: 'VFS Biometric Confirmation',
      description: 'Appointment booking sheet for mandatory biometric recording at VFS Global India',
      icon: 'form',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create Case Order ID & Pay SIRI Fee',
      description: 'Generate Case Order ID on Ny i Danmark portal and settle the statutory SIRI case processing fee.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Employer completes Part 1 and candidate completes Part 2 of the official online work permit form.'
    },
    {
      step: 3,
      title: 'Submit Biometrics at VFS Global',
      description: 'Visit selected VFS Global center in India within 14 days of online submission to record biometrics.'
    },
    {
      step: 4,
      title: 'Receive Decision & D-Visa Sticker',
      description: 'Upon approval by SIRI, receive passport endorsement to enter Denmark and finalize CPR registration.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Biometrics must be recorded at VFS Global within 14 calendar days of online application submission to SIRI. Employment compensation must align with standard Danish collective bargaining agreements or specific minimum salary scheme thresholds.'
  }
};