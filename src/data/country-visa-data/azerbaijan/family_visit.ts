export default {
  country: 'azerbaijan',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Azerbaijan',
  channels: [
    'https://evisa.gov.az/',
    'https://india.mfa.gov.az/'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '25 USD',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.az/',
    territorialScope: 'Nationwide',
    validity: '30 days from issuance',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from date of entry',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online e‑visa application on the official portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from family residing in Azerbaijan',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical coverage of at least 30,000 USD for the entire stay',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the trip',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create e‑Visa Account',
      description: 'Register on the official e‑visa portal and fill in personal details.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Enter travel information, upload required documents, and answer eligibility questions.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the non‑refundable fee of 25 USD using a credit/debit card.'
    },
    {
      step: 4,
      title: 'Submit and Await Processing',
      description: 'The application is processed within 3 working days; you will receive an email notification.'
    },
    {
      step: 5,
      title: 'Download e‑Visa',
      description: 'Log in to the portal, download the approved e‑visa PDF, and print a copy for travel.'
    },
    {
      step: 6,
      title: 'Travel to Azerbaijan',
      description: 'Present the printed e‑visa, passport, and supporting documents at the border checkpoint.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Passport must be valid for at least 6 months; travel insurance covering medical expenses is mandatory; no yellow fever certificate required; invitation letter recommended for family visits but not compulsory.'
  }
};