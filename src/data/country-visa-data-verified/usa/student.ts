export default {
  country: 'usa',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'U.S. Embassy & Consulates in India',
  channels: [
    'https://ceac.state.gov/CEAC/',
    'https://www.usvisascheduling.com/',
    'https://in.usembassy.gov/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '7-10 working days (after interview)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '185 USD',
    vfsServiceFee: 'N/A'
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
    stickerMultiple: 'Duration of program + 60 days'
  },
  entryType: 'Multiple',
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
      title: 'Passport Photographs (2x2 inches / 51x51mm)',
      description: 'White background, taken within the last 6 months, neutral expression, no eyeglasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete DS-160 online via CEAC portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Proof of travel plans. Applicants are advised not to purchase non-refundable tickets before receiving the visa.',
      icon: '✈️',
      mandatory: false
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'University housing confirmation, lease agreement, or intended address in the US.',
      icon: '🏨',
      mandatory: false
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Highly recommended and often required by universities, but not a mandatory consular visa requirement.',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements, education loan approval letters, or sponsor documents covering tuition and living expenses for at least the first year.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'i20',
      title: 'I-20 Form',
      description: 'Certificate of Eligibility for Nonimmigrant Student Status issued and signed by the U.S. institution.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'sevis_fee',
      title: 'SEVIS Fee Receipt',
      description: 'Proof of SEVIS I-901 fee payment ($350 for F-1 students).',
      icon: '💵',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Admission Letter',
      description: 'Official acceptance letter from the SEVP-approved U.S. institution.',
      icon: '📑',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete DS-160',
      description: 'Fill out the online nonimmigrant visa application form and print the confirmation page.'
    },
    {
      step: 2,
      title: 'Pay MRV Fee',
      description: 'Pay the 185 USD MRV fee online through the official US Visa Scheduling portal.'
    },
    {
      step: 3,
      title: 'Schedule Appointments',
      description: 'Book two appointments: one for biometrics at the Visa Application Center (VAC) and one for the visa interview at the Embassy/Consulate.'
    },
    {
      step: 4,
      title: 'Attend Interview',
      description: 'Present all mandatory documents, answer consular officer questions, and provide biometric data.'
    },
    {
      step: 5,
      title: 'Receive Visa',
      description: 'Collect your passport with the physical visa sticker from the designated collection center or via premium delivery.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa entry requires a valid Form I-20, active SEVIS status, and proof of financial support. Students may enter the U.S. up to 30 days before the program start date listed on the I-20.'
  }
};