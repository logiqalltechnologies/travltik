export default {
  country: 'thailand',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Thailand in New Delhi',
  channels: [
    'https://www.thaievisa.go.th',
    'https://www.vfsglobal.com/thailand/india',
    'https://embassy.thaiembassy.org/newdelhi'
  ],
  processingTime: {
    eVisa: '5 - 10 working days',
    standardSticker: '5 - 10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '2,000 THB',
    stickerConsularStandard: '2,000 THB',
    vfsServiceFee: '500 INR'
  },
  eVisa: {
    available: true,
    portal: 'https://www.thaievisa.go.th',
    territorialScope: 'Indian passport holders applying for Thai Non-Immigrant Visa ED',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '5 - 10 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '1 year'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 6 months beyond the intended stay with at least 2 blank pages',
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
      description: 'Completed online application via the Official Thai E-Visa Portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Letter of Acceptance',
      description: 'Acceptance letter from an accredited school, university, or educational institution in Thailand',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'moe_approval',
      title: 'Ministry of Education Approval Letter',
      description: 'Official letter of approval from the Ministry of Education of Thailand or relevant agency',
      icon: '🏛️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight itinerary',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Dormitory confirmation, hotel booking, or rental agreement in Thailand',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements showing sufficient funds (at least 30,000 THB per person / 60,000 THB per family equivalent in INR)',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Official School Acceptance & MOE Letter',
      description: 'Secure admission to an accredited Thai educational institution and obtain official approval letters.'
    },
    {
      step: 2,
      title: 'Create Account on Official Thai E-Visa Portal',
      description: 'Register at https://www.thaievisa.go.th and select the Non-Immigrant ED category.'
    },
    {
      step: 3,
      title: 'Fill Application & Upload Documents',
      description: 'Complete the online application form and upload scanned copies of passport, photos, acceptance letter, and financial proofs.'
    },
    {
      step: 4,
      title: 'Pay Consular Fee Online',
      description: 'Pay the statutory consular fee of 2,000 THB online via secure payment gateway.'
    },
    {
      step: 5,
      title: 'Application Processing',
      description: 'Wait 5 to 10 working days for processing by the Royal Thai Embassy / Consulate.'
    },
    {
      step: 6,
      title: 'Receive Approved E-Visa',
      description: 'Download and print the approved Thai E-Visa sent to your registered email.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The Non-Immigrant ED visa grants an initial stay of up to 90 days. Students must extend their visa at the Thai Immigration Bureau within Thailand before the 90-day period expires.'
  }
};