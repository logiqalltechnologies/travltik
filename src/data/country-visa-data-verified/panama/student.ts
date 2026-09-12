export default {
  country: 'panama',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs of Panama (Ministerio de Relaciones Exteriores) / Embassy of Panama in New Delhi',
  channels: [
    'https://mire.gob.pa/visa',
    'https://www.vfsglobal.com/panama',
    'Embassy of Panama, New Delhi – 7/8, Shanti Niketan, Chanakyapuri, New Delhi 110021, India'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 200',
    vfsServiceFee: 'USD 30'
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
    stickerSingleDouble: '180 days',
    stickerMultiple: '1 year (renewable)'
  },
  maxStayDays: 180,
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online student visa application on the official portal and print the confirmation page.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip reservation (return ticket) showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Letter from university housing or a rental agreement covering the entire study period.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to USD 30,000 for the whole stay, including repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds OR an approved education loan / blocked account covering tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official acceptance letter from a recognized Panamanian educational institution stating program duration and fees.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'hiv_test',
      title: 'HIV Test Result',
      description: 'Laboratory‑verified HIV negative result (valid for 6 months) – required for stays longer than 90 days.',
      icon: '🧪',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create an Account on the Official Visa Portal',
      description: 'Register using your Indian email address, fill in personal details, and upload a scanned copy of your passport.'
    },
    {
      step: 2,
      title: 'Complete the Online Student Visa Application',
      description: 'Enter academic information, upload the admission letter, financial proof, and health documents. Pay the consular fee online.'
    },
    {
      step: 3,
      title: 'Schedule an Appointment at the Panama Embassy / VFS Center',
      description: 'Select a convenient date, print the appointment confirmation, and gather all original documents.'
    },
    {
      step: 4,
      title: 'Attend the In‑Person Interview',
      description: 'Submit originals, provide biometric data, and answer questions about your study plans.'
    },
    {
      step: 5,
      title: 'Pay Service Fees (if using VFS)',
      description: 'If you opted for VFS processing, pay the additional service fee of USD 30 at the center.'
    },
    {
      step: 6,
      title: 'Collect Your Visa Sticker',
      description: 'Pick up the passport with the student visa sticker within the promised processing time or opt for courier delivery.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Must present a valid admission letter, proof of sufficient funds (education loan or blocked account), travel insurance, and a recent HIV negative test. No Yellow Fever vaccination required for Panama.'
  }
};