export default {
  country: 'bulgaria',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Bulgaria',
  channels: ['VFS Global', 'Embassy of the Republic of Bulgaria, New Delhi'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '35-45 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 EUR',
    vfsServiceFee: 'INR 1,850'
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
    stickerSingleDouble: 'N/A',
    stickerMultiple: '180 days (Type D Long-Stay Visa)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 18 months with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent photos with white background, 35x45mm, taken within last 6 months',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Type D Visa Application Form',
      description: 'Duly completed and signed Long-Stay (Type D) Visa application form',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Bulgarian Work Permit Decision',
      description: 'Official Work Permit approval issued by the Bulgarian National Employment Agency',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract with the registered Bulgarian employer',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Apostilled PCC issued by Passport Seva Kendra (MEA India), valid within 6 months',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Notarized lease agreement or declaration of housing provided in Bulgaria',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Medical coverage minimum of €30,000 covering the initial period of stay',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statement or employer guarantee demonstrating sufficient funds for subsistence',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Work Permit Approval',
      description: 'Sponsoring employer in Bulgaria obtains work authorization from the Bulgarian Employment Agency.'
    },
    {
      step: 2,
      title: 'Document Legalization',
      description: 'Obtain and apostille the Police Clearance Certificate from Ministry of External Affairs (MEA), India.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics',
      description: 'Schedule an appointment and submit the Type D visa application in person at VFS Global or Embassy.'
    },
    {
      step: 4,
      title: 'Visa Issuance & Residence Registration',
      description: 'Collect passport with Type D visa sticker and complete residency registration upon entry in Bulgaria within 14 days.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Upon arrival in Bulgaria, holder of a Type D visa must apply for a Single Permit for Work and Residence (Residence Permit) at the Migration Directorate of the Bulgarian Ministry of Interior.'
  }
};