export default {
  country: 'kuwait',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Interior, Kuwait',
  channels: [
    'https://evisa.moi.gov.kw',
    'VFS Global – Kuwait Visa Application Center',
    'Embassy of Kuwait in New Delhi'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '5-7 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: '3 KWD',
    stickerConsularStandard: '3 KWD',
    vfsServiceFee: '20 USD'
  },
  eVisa: {
    available: false,
    portal: 'https://evisa.moi.gov.kw',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed visa application form signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Visa Permit / Sponsorship Clearance',
      description: 'Official Kuwait Business Visa permit issued by Ministry of Interior (MOI) Kuwait, sponsored by host Kuwaiti company.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirming travel dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or letter of accommodation from Kuwaiti business sponsor.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical and travel insurance covering duration of stay in Kuwait.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 to 6 months showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Business Visa Permit in Kuwait',
      description: 'The host company/sponsor in Kuwait applies for the Commercial/Business Entry Visa via Ministry of Interior (MOI).'
    },
    {
      step: 2,
      title: 'Receive Official Permit Copy',
      description: 'Once approved by MOI, the sponsor sends the original or electronic Kuwait Business Visa Permit to the Indian applicant.'
    },
    {
      step: 3,
      title: 'Submit Documents to Authorized Center',
      description: 'Submit passport, application form, photograph, and MOI visa permit at Kuwait Visa Application Center (VFS Global) or Kuwait Embassy in India.'
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the statutory consular fee (3 KWD equivalent) and VFS service fee.'
    },
    {
      step: 5,
      title: 'Receive Visa & Travel',
      description: 'Collect stamped passport/visa permit and travel to Kuwait within the validity period.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders require prior sponsorship by a Kuwaiti company/entity via MOI to obtain a business visa permit. Direct online eVisa is restricted to specific eligible nationalities/GCC residents. Maximum stay is 30 days.'
  }
};