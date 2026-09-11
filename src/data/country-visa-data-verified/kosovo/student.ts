export default {
  country: 'kosovo',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs and Diaspora (MFAD), Republic of Kosovo',
  channels: ['Official Portal', 'Embassy / Consulate'],
  externalServiceProvider: 'Embassy direct',
  processingTime: {
    eVisa: '15-30 working days',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '40 EUR',
    stickerConsularStandard: '40 EUR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.rks-gov.net',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '90 days (Must apply for Temporary Residence Permit for Study upon entry)',
    invitationRequired: true,
    processing: '15-30 working days'
  },
  stayDuration: {
    eVisa: 'Up to 90 days',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended stay, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) color passport-size photographs on a white background.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Duly filled and signed National Visa Application form (submitted via the online portal and printed).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Letter of Acceptance',
      description: 'Unconditional admission letter from an accredited higher education institution or university in Kosovo.',
      icon: 'file-text',