export default {
  country: 'saudi-arabia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Saudi Arabia in New Delhi',
  channels: [
    'https://ksavisa.sa',
    'https://vc.tasheer.com',
    'https://www.visa.visitsaudi.com'
  ],
  processingTime: {
    eVisa: '1-3 working days',
    standardSticker: '3-5 working days',
    expressSticker: '1-2 working days'
  },
  fees: {
    eVisaTotal: '535 SAR',
    stickerConsularStandard: '300 SAR',
    vfsServiceFee: '135 SAR'
  },
  eVisa: {
    available: true,
    portal: 'https://ksavisa.sa',
    territorialScope: 'Nationwide',
    validity: '1 year',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '1-3 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple',
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
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the official KSA Visa platform (ksavisa.sa) or via Tasheer Visa Application Center.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return or onward flight booking showing dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or confirmed address of stay in Saudi Arabia.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Mandatory Health Insurance',
      description: 'Medical insurance issued by an approved provider in Saudi Arabia (included automatically during visa fee payment).',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 to 6 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, passport photos, bank statement, accommodation proof, and flight itinerary.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Apply via the official KSA Visa portal (ksavisa.sa) or schedule an appointment at a Tasheer (Saudi Visa Application) center.'
    },
    {
      step: 3,
      title: 'Pay Visa & Insurance Fees',
      description: 'Pay the statutory visa fee (300 SAR) and mandatory medical insurance fees online or at the center.'
    },
    {
      step: 4,
      title: 'Receive Visa',
      description: 'Upon processing (1–3 working days for eVisa, 3–5 working days for sticker), download/print your issued visa.'
    },
    {
      step: 5,
      title: 'Travel to Saudi Arabia',
      description: 'Present your valid passport, printed visa, and travel booking upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian citizens holding valid US, UK, or Schengen tourist/business visas (used at least once) or valid GCC residency are eligible for instant eVisa/Visa on Arrival. All other Indian passport holders must apply via ksavisa.sa or Tasheer.'
  }
};