export default {
  country: 'uzbekistan',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Uzbekistan',
  channels: [
    'https://evisa.gov.uz',
    'https://visa.vfsglobal.com/ind/en/uzb/'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '7 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: 'USD 20',
    stickerConsularStandard: 'USD 30',
    vfsServiceFee: 'USD 10'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.uz',
    territorialScope: 'Nationwide',
    validity: '30 days from date of issue',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from date of entry and have at least two blank pages.',
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
      description: 'Confirmed return flight reservation (can be a reservation, not necessarily ticketed).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or business invitation letter stating place of stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to USD 30,000 for the entire stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the trip.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application',
      description: 'Fill out the e‑visa form on the official portal and upload required documents.'
    },
    {
      step: 2,
      title: 'Pay Visa Fees',
      description: 'Pay the e‑visa fee (USD 20) plus any service charges using a credit/debit card.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Review all entries and submit the application for processing.'
    },
    {
      step: 4,
      title: 'Receive e‑Visa',
      description: 'The e‑visa will be emailed within 3 working days; download and print it.'
    },
    {
      step: 5,
      title: 'Travel to Uzbekistan',
      description: 'Present the printed e‑visa, passport, and supporting documents at the port of entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business invitation letter optional; no yellow fever or HIV test required for stays ≤90 days.'
  }
};