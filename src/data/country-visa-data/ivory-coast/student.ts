export default {
  country: 'ivory-coast',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Côte d\'Ivoire in New Delhi',
  channels: [
    'https://www.vfsglobal.com/CoteDIvoire/India',
    'https://embassy.cotedivoire.gov.in'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '120 USD',
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '180 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least 2 blank pages.',
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
      description: 'Complete the online application form on the official portal or download the PDF from the embassy website.',
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
      description: 'Hotel reservation or invitation letter from the educational institution.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses for the duration of stay, minimum coverage of 30,000 USD.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Collect Required Documents',
      description: 'Gather passport, photographs, proof of enrollment, financial statements, insurance, and accommodation details.'
    },
    {
      step: 2,
      title: 'Complete the Application Form',
      description: 'Fill out the visa application form online via the official portal or download the PDF and fill it manually.'
    },
    {
      step: 3,
      title: 'Schedule Appointment',
      description: 'Book an appointment with the embassy or VFS service center to submit documents and pay fees.'
    },
    {
      step: 4,
      title: 'Submit Documents and Pay Fees',
      description: 'Present all documents in person, pay the consular fee (120 USD) and any VFS service fee (30 USD).'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Answer questions regarding your study plans and provide additional documentation if requested.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect the visa sticker from the embassy or receive it by mail within the processing time.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen or US rules apply. Yellow Fever vaccination required if traveling from endemic areas. HIV test required for stays exceeding 90 days.'
  }
};