export default {
  country: 'bangladesh',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Bangladesh High Commission, New Delhi',
  channels: [
    'https://visa.bangladesh.gov.bd',
    'https://www.vfsglobal.com/bangladesh/india',
    'https://www.bdhcnewdelhi.org'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'BDT 5,000',
    vfsServiceFee: 'BDT 1,200'
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
    stickerSingleDouble: 'Up to 1 year (single entry, renewable)',
    stickerMultiple: 'Up to 2 years (multiple entry, renewable)'
  },
  maximumStayDays: 730,
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay.',
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
      description: 'Complete the online application on the official Bangladesh visa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Letter from university/college confirming hostel or rented accommodation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical coverage of at least USD 30,000 for the entire duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Education loan sanction letter or blocked account statement showing sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Admission Letter',
      description: 'Official admission/offer letter from the recognized Bangladeshi educational institution.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'hiv_test',
      title: 'HIV Test Certificate',
      description: 'Required for stays exceeding 90 days; recent (within 3 months) HIV test report.',
      icon: '🧪',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Document Preparation',
      description: 'Collect all mandatory documents, ensure passport validity, obtain admission letter and financial proof.'
    },
    {
      step: 2,
      title: 'Online Application',
      description: 'Fill and submit the visa application form on the official Bangladesh visa portal.'
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Pay the consular fee (BDT 5,000) and VFS service fee (BDT 1,200) through the designated online/payment gateway.'
    },
    {
      step: 4,
      title: 'Appointment & Submission',
      description: 'Book an appointment at the VFS center or Bangladesh High Commission and submit the printed application with originals.'
    },
    {
      step: 5,
      title: 'Biometric & Interview (if required)',
      description: 'Attend biometric capture and/or interview as instructed by the authorities.'
    },
    {
      step: 6,
      title: 'Visa Issuance',
      description: 'Collect the stamped student visa within the stipulated processing time.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Must present original admission letter from a recognized Bangladeshi institution; HIV test certificate required for stays >90 days.'
  }
};