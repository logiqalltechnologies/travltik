export default {
  country: 'iraq',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Iraq, New Delhi',
  channels: [
    'https://evisa.mofa.gov.iq',
    'https://visa.vfsglobal.com/ind/en/irq',
    'https://newdelhi.embassy.iq'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '7 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: 'USD 100',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'USD 30'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.mofa.gov.iq',
    territorialScope: 'Nationwide',
    validity: '90 days from issue',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '30 days single entry',
    stickerSingleDouble: '30 days single entry',
    stickerMultiple: '90 days multiple entry'
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
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete online application on the official e‑visa portal',
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
      description: 'Hotel booking confirmation or invitation from host in Iraq',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to USD 30,000 for the entire stay',
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
      description: 'Register on the official Iraq e‑visa portal and obtain a login ID.'
    },
    {
      step: 2,
      title: 'Fill Application Form',
      description: 'Enter personal details, travel plans, and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the USD 100 visa fee and any VFS service charge using a secure online gateway.'
    },
    {
      step: 4,
      title: 'Submit and Await Approval',
      description: 'Submit the application; processing takes up to 5 working days.'
    },
    {
      step: 5,
      title: 'Receive e‑Visa',
      description: 'Download the approved e‑visa PDF and print a copy to present on arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions for family visit beyond standard visa conditions.'
  },
  externalServiceProvider: 'Embassy direct',
  maximumPermittedStay: 30
};