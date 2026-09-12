export default {
  country: 'ecuador',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Ecuador in India',
  channels: [
    'https://www.mfa.gob.ec/visa',
    'https://visa.vfsglobal.com/ind/ecu/',
    'https://www.embassyofecuador.in/visa'
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
    stickerMultiple: 'N/A'
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
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the official portal or download the form from the embassy website.',
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
      description: 'Hotel reservation or invitation letter from host in Ecuador.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses, minimum USD 30,000, valid for the entire stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for last 3 months, education loan documents, or blocked account statement proving sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Admission Letter',
      description: 'Official letter from the Ecuadorian educational institution confirming enrollment.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents including passport, photographs, admission letter, financial proof, and insurance.'
    },
    {
      step: 2,
      title: 'Complete the Visa Application',
      description: 'Fill out the online application on the official portal or submit the paper form at the embassy.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (100 USD) and VFS service fee (30 USD) online or at the designated bank.'
    },
    {
      step: 4,
      title: 'Schedule Appointment',
      description: 'Book an appointment through VFS Global or the embassy to submit documents and attend the interview.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Present all documents, answer questions, and provide biometric data if required.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect the visa sticker from the embassy or receive it via courier if applicable.'
    }
  ],
  specialRequirements: {
    entry_rules: 'HIV test required for stays exceeding 90 days. Yellow Fever vaccination not required for Ecuador.'
  }
};