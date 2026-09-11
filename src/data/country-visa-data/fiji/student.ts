export default {
  country: 'fiji',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Fiji High Commission, New Delhi',
  externalServiceProvider: 'VFS Global',
  channels: [
    'https://visa.fiji.gov.fj',
    'https://www.vfsglobal.com/fiji/india',
    'https://www.fijiembassy.org.in'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'FJD 100',
    stickerConsularStandard: 'FJD 100',
    vfsServiceFee: 'FJD 30',
    consularFee: 'FJD 100'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.fiji.gov.fj',
    territorialScope: 'Nationwide',
    validity: '6 months',
    maxStay: '365 days per visit',
    invitationRequired: false,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '12 months',
    stickerSingleDouble: '6 months',
    stickerMultiple: '12 months'
  },
  entryType: 'Multiple Entry',
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
      description: 'Complete the online student visa application on the official portal.',
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
      description: 'Hotel booking or university residence confirmation for the duration of study.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical coverage of at least USD 20,000 for the entire stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) and/or education loan sanction letter showing sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create Online Account',
      description: 'Register on the official Fiji eVisa portal and fill in personal details.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Select “Student Visa”, upload required documents, and answer all questionnaire items.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the eVisa fee (FJD 100) plus any VFS service charge using a secure online payment method.'
    },
    {
      step: 4,
      title: 'Submit Supporting Documents',
      description: 'Upload passport scan, photographs, admission letter from Fiji institution, financial proof, insurance, and flight itinerary.'
    },
    {
      step: 5,
      title: 'Biometric & Health Checks (if required)',
      description: 'Visit the VFS center for biometric data capture and submit HIV test report for stays exceeding 90 days.'
    },
    {
      step: 6,
      title: 'Receive eVisa',
      description: 'The approved eVisa will be emailed as a PDF; print it and carry it with your passport.'
    },
    {
      step: 7,
      title: 'Travel to Fiji',
      description: 'Present the eVisa and supporting documents at the port of entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Proof of enrollment from a recognized Fiji educational institution is mandatory. HIV test result required for stays longer than 90 days.'
  }
};