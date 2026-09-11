export default {
  country: 'indonesia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Directorate General of Immigration, Ministry of Law and Human Rights, Republic of Indonesia',
  channels: [
    'https://evisa.imigrasi.go.id',
    'https://www.kemlu.go.id/newdelhi'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '150 USD',
    stickerConsularStandard: '150 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.imigrasi.go.id',
    territorialScope: 'National',
    validity: '90 days',
    maxStay: '365 days',
    invitationRequired: true,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '365 days',
    stickerSingleDouble: '365 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least one blank visa page',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application via official e-Visa portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return or onward flight booking',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'University admission letter with accommodation details or residential booking in Indonesia',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses in Indonesia during the stay',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for last 3 months showing minimum USD 2,000 equivalent balance or education sponsorship letter',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'guarantor_letter',
      title: 'Sponsorship / Acceptance Letter',
      description: 'Official acceptance letter from an accredited Indonesian educational institution acting as sponsor/guarantor',
      icon: '✉️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photo, acceptance letter from Indonesian university, sponsor/guarantor details, flight tickets, and financial proof.'
    },
    {
      step: 2,
      title: 'Register on Official e-Visa Portal',
      description: 'Access the Directorate General of Immigration portal at evisa.imigrasi.go.id and create an account.'
    },
    {
      step: 3,
      title: 'Submit Application & Pay Fees',
      description: 'Fill in the online student visa application form, upload documents, and pay the visa fee (150 USD).'
    },
    {
      step: 4,
      title: 'Wait for Processing',
      description: 'Processing takes approximately 5 working days from submission.'
    },
    {
      step: 5,
      title: 'Receive e-Visa',
      description: 'Download and print the approved e-Visa to present upon entry into Indonesia.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen or US rules apply. Yellow fever vaccination required if arriving from infected countries.'
  }
};