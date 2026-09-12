export default {
  country: 'chile',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Chile in New Delhi',
  channels: [
    'https://www.mre.gob.cl/india',
    'https://www.vfsglobal.com/Chile/India',
    'https://www.mre.gob.cl/india'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: '30 USD'
  },
  eVisa: {
    available: false,
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 180 days',
    stickerMultiple: 'Up to 180 days'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the Chilean Ministry of Foreign Affairs portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Letter of admission from the Chilean institution and proof of housing (lease or dormitory confirmation).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses up to 30,000 USD for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds (minimum 1,500 USD per month) or a blocked account.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photos, admission letter, financial proof, insurance, and flight itinerary.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on the official Chilean Ministry of Foreign Affairs portal.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee (100 USD) and VFS service fee (30 USD) online.'
    },
    {
      step: 4,
      title: 'Schedule Appointment',
      description: 'Book an appointment at the VFS Global center in New Delhi.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Submit documents and attend the visa interview at the embassy or VFS center.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect the visa sticker from the embassy or receive it by mail if applicable.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa allows stay up to 180 days per entry. Must maintain enrollment and provide proof of financial means. Work is limited to 20 hours per week. No yellow fever vaccination required. HIV test not required for stays under 90 days.'
  }
};