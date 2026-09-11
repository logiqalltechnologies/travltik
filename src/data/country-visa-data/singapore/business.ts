export default {
  country: 'singapore',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Singapore Immigration & Checkpoints Authority (ICA)',
  channels: [
    'https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements',
    'https://save.ica.gov.sg/save-public/',
    'https://www.mfa.gov.sg/Overseas-Missions/New-Delhi'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '30 SGD',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: '650 INR'
  },
  eVisa: {
    available: true,
    portal: 'https://save.ica.gov.sg/save-public/',
    territorialScope: 'National',
    validity: '5 weeks to 2 years',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of entry with at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs taken within the last 3 months, white background, matte/semi-matte finish.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Form 14A',
      description: 'Duly completed and signed Form 14A application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'loi_form',
      title: 'Form V39A (Letter of Introduction)',
      description: 'Letter of Introduction for Visa Application issued by a Singapore-registered business entity or contact.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'company_cover_letter',
      title: 'Covering Letter',
      description: 'Official company covering letter detailing the purpose of the business visit, duration, and financial guarantee.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight itinerary or travel plan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation proof specifying host address in Singapore.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months or corporate bank letter showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Letter of Introduction (Form V39A)',
      description: 'Request Form V39A signed by a Singapore-registered business entity or local contact.'
    },
    {
      step: 2,
      title: 'Prepare Required Documents',
      description: 'Complete Form 14A and gather passport, cover letter, photographs, financial statements, and travel bookings.'
    },
    {
      step: 3,
      title: 'Submit via Authorized Visa Agent / VFS Global',
      description: 'Submit the application and physical documents through an ICA-authorized visa agent or VFS Global in India, or electronically via a Singapore Local Contact using SAVE.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the SGD 30 non-refundable visa processing fee plus authorized agent service charge.'
    },
    {
      step: 5,
      title: 'Receive Electronic Visa (e-Visa)',
      description: 'Upon approval (typically within 3 working days), receive the e-Visa PDF printout via the agent or portal.'
    },
    {
      step: 6,
      title: 'Submit SG Arrival Card (SGAC)',
      description: 'Complete and submit the SG Arrival Card online within 3 days prior to arrival in Singapore.'
    }
  ],
  specialRequirements: {
    entry_rules: 'SG Arrival Card (SGAC) mandatory within 3 days prior to arrival. Applications must be submitted through ICA Authorized Visa Agents in India or a Singapore Local Contact using the SAVE portal.'
  }
};