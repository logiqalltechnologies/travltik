export default {
  country: 'dominican-republic',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Dominican Republic / Embassy of the Dominican Republic in New Delhi',
  channels: [
    'https://www.mirex.gob.do/visa',
    'https://www.vfsglobal.com/dominican-republic/india',
    'Embassy of the Dominican Republic, New Delhi – Consular Section'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '7-10 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: 'USD 100',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'USD 30'
  },
  eVisa: {
    available: true,
    portal: 'https://e-visa.mirex.gob.do/', // Corrected: Direct e-Visa portal URL
    territorialScope: 'Nationwide',
    validity: '90 days from date of issue',
    maxStay: '30 days per entry',
    invitationRequired: false,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days single entry',
    stickerSingleDouble: '30 days single entry',
    stickerMultiple: '60 days multiple entry (valid for 1 year)' // Corrected: Based on VFS Global information
  },
  entryType: 'Single Entry',
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
      description: 'White background, taken within the last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online e‑visa application on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip reservation showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from family residing in the Dominican Republic.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Minimum coverage of USD 30,000 for medical emergencies and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Letter from the Dominican family member stating purpose, relationship, and duration of visit, notarized and accompanied by a copy of their ID.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create e‑Visa Account',
      description: 'Register on the official Dominican Republic e‑visa portal and obtain a login ID.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill in personal, passport, travel, and family details. Upload required documents in PDF format.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the USD 100 e‑visa fee online via credit/debit card, then pay the USD 30 VFS service fee if using VFS.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Review all entries and submit. You will receive a reference number for tracking.'
    },
    {
      step: 5,
      title: 'Processing & Approval',
      description: 'The consulate reviews the application (3‑5 working days). You will be notified by email.'
    },
    {
      step: 6,
      title: 'Receive e‑Visa',
      description: 'Download the approved e‑visa PDF and print it. Carry it along with your passport to the airport.'
    },
    {
      step: 7,
      title: 'Arrival in Dominican Republic',
      description: 'Present passport, printed e‑visa, and supporting documents to immigration officers on entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Passport must have at least 6 months validity. No Yellow Fever certificate required for Indian nationals. No HIV test required for stays under 90 days.'
  }
};