export default {
  country: 'south-africa',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'High Commission of South Africa in New Delhi',
  channels: [
    'https://visa.dfa.gov.za/',
    'https://www.vfsglobal.com/SouthAfrica/India/',
    'https://www.sahc-india.com/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '40 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '3,600 INR',
    vfsServiceFee: '2,300 INR'
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
    stickerSingleDouble: 'Duration of study',
    stickerMultiple: 'Duration of study'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 30 days after the end of the intended visit and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs with a white background, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form (BI-1738)',
      description: 'Completed temporary residence visa application form BI-1738 filled in black ink.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return or onward flight booking.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Details of accommodation during the stay in South Africa.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'medical_cover',
      title: 'South African Medical Cover',
      description: 'Proof of medical cover registered with the South African Council for Medical Schemes.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Letter of Acceptance',
      description: 'Official letter of acceptance from the South African educational institution confirming the duration of the course.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Required for applicants 18 years and older from all countries where they resided for 12 months or longer since turning 18.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'medical_reports',
      title: 'Medical and Radiology Reports',
      description: 'Physical medical report and chest X-ray clearance certificate (not required for pregnant women and children under 12).',
      icon: '🩺',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Application Documents',
      description: 'Gather all required documents including the BI-1738 form, medical reports, and police clearance.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment online through the VFS Global portal to submit your application and biometrics.'
    },
    {
      step: 3,
      title: 'Submit Application and Pay Fees',
      description: 'Visit the VFS center to submit physical documents, enroll biometrics, and pay the consular fee (3,600 INR) and VFS service fee (2,300 INR).'
    },
    {
      step: 4,
      title: 'Track Application',
      description: 'Monitor the status of your application online using the VFS tracking tool.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'Retrieve your passport with the visa sticker from the VFS center once processing is complete (approx. 40 working days).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate is mandatory if traveling from or transiting through a yellow fever endemic zone. Medical and radiological reports are mandatory for all temporary residence applications.'
  }
};