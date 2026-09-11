export default {
  country: 'philippines',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Republic of the Philippines in New Delhi',
  channels: [
    'https://www.philippinevisa.gov.ph',
    'https://www.vfsglobal.com/philippines/india/',
    'https://www.philippineembassy.org.in'
  ],
  processingTime: {
    eVisa: '5-7 working days',
    standardSticker: '10-15 working days',
    expressSticker: '5-7 working days'
  },
  fees: {
    eVisaTotal: '₹3,320 ($40)',
    stickerConsularStandard: '₹3,320',
    vfsServiceFee: '₹1,200'
  },
  eVisa: {
    available: true,
    portal: 'https://www.philippinevisa.gov.ph',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '5-7 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '59 days',
    stickerMultiple: '59 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 6 months beyond the intended stay, with at least two blank pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within last 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly filled application form from the official portal or Embassy',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight ticket',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or official invitation letter from host in Philippines',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Recommended coverage for medical expenses and emergency repatriation',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months certified by bank, showing adequate funds',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Select Application Mode',
      description: 'Choose between the online Philippine eVisa portal or applying via VFS Global India center'
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out the visa application form accurately and gather all mandatory supporting documents'
    },
    {
      step: 3,
      title: 'Pay Fees',
      description: 'Pay the consular fee (₹3,320) and applicable VFS service fee (₹1,200)'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit documents online via e-Visa portal or in person at designated VFS Global center'
    },
    {
      step: 5,
      title: 'Receive Visa',
      description: 'Track application status and collect passport with sticker visa or receive downloadable eVisa PDF'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders holding valid visa/permanent residence from US, Japan, Australia, Canada, Schengen, UK, or Singapore (AJACSSUK) may enter Philippines visa-free for up to 14 days for tourism.'
  }
};