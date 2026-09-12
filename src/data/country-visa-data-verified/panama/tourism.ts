export default {
  country: 'panama',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministerio de Relaciones Exteriores (Panama Ministry of Foreign Affairs)',
  channels: [
    'https://migracion.gob.pa/visa',
    'https://www.vfsglobal.com/panama/india',
    'https://panamaembassy.in'
  ],
  processingTime: {
    eVisa: '5-7 working days',
    standardSticker: '10-15 working days',
    expressSticker: '5-7 working days'
  },
  fees: {
    eVisaTotal: 'USD 250',
    stickerConsularStandard: 'USD 250',
    vfsServiceFee: 'USD 30'
  },
  eVisa: {
    available: true,
    portal: 'https://migracion.gob.pa/visa',
    territorialScope: 'Nationwide',
    validity: '180 days from date of issue',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '5-7 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: 'N/A'
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
      description: 'Complete the online e‑Visa application on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation (no ticket purchase required at application stage).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation, Airbnb confirmation, or invitation letter from a host in Panama.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to USD 50,000 for the entire stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the trip.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'income_tax_return',
      title: 'Income Tax Return (ITR)',
      description: 'Copy of the latest Income Tax Return filed in India.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'noc',
      title: 'No Objection Certificate (NOC)',
      description: 'NOC from employer or educational institution, if applicable.',
      icon: '📝',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create Account & Fill Application',
      description: 'Register on the official Panama e‑Visa portal and complete the online application form.'
    },
    {
      step: 2,
      title: 'Upload Required Documents',
      description: 'Upload passport scan, photographs, flight itinerary, accommodation proof, insurance, and financial documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the USD 250 visa fee plus any service charge using a secure online payment method.'
    },
    {
      step: 4,
      title: 'Submit & Await Processing',
      description: 'Submit the application and wait for the 5‑7 working day processing period.'
    },
    {
      step: 5,
      title: 'Receive eVisa & Print',
      description: 'Download the approved eVisa PDF, print it, and carry it along with your passport.'
    },
    {
      step: 6,
      title: 'Travel to Panama',
      description: 'Present the eVisa and supporting documents at immigration upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate required only if arriving from a yellow‑fever endemic country. No additional health tests for stays up to 90 days.'
  }
};