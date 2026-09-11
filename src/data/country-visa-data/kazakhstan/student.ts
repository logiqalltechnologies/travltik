export default {
  country: 'kazakhstan',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Kazakhstan in New Delhi',
  channels: [
    'https://visa.kazakhstan.gov.kz/visa/',
    'https://www.vfsglobal.com/Kazakhstan/India/',
    'https://embassy.gov.kz/india/'
  ],
  serviceProvider: 'VFS Global',
  processingTime: {
    eVisa: null,
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: null,
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '30 EUR'
  },
  eVisa: {
    available: false,
    portal: null,
    territorialScope: null,
    validity: null,
    maxStay: null,
    invitationRequired: null,
    processing: null
  },
  stayDuration: {
    eVisa: null,
    stickerSingleDouble: '180 days',
    stickerMultiple: '180 days'
  },
  entryType: 'Single Entry',
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
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online via the official eVisa portal.',
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
      description: 'Hotel reservation or university accommodation confirmation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation, minimum 30,000 EUR.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Admission Letter',
      description: 'Official acceptance letter from the Kazakh university.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photos, flight itinerary, accommodation proof, insurance, bank statements, and admission letter.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the eVisa application form on the official portal and upload scanned documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the eVisa fee (90 EUR) online and the VFS service fee (30 EUR) if using a service center.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application electronically; if required, schedule an appointment at the embassy or VFS center.'
    },
    {
      step: 5,
      title: 'Collect Visa',
      description: 'Receive the eVisa via email or collect the consular visa from the embassy within the processing time.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa allows a stay of up to 180 days per calendar year with a single entry. No additional health mandates required.'
  }
};