export default {
  country: 'spain',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Spain in New Delhi',
  channels: [
    'https://india.blsspainvisa.com',
    'https://www.exteriores.gob.es/Embajadas/nuevadelhi/en/Paginas/index.aspx'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    serviceFee: '15.50 EUR'
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 3 months beyond the intended stay and contain at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online via the official Spain visa portal and printed for submission.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking or a detailed travel plan with dates and destinations.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservations, rental agreements, or a formal invitation letter from a host in Spain.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least €30,000 for medical expenses and repatriation, valid for the entire Schengen zone.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Collect Required Documents',
      description: 'Gather all mandatory documents listed above and ensure they meet the specifications.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment through the official BLS International website.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Attend the appointment, submit the application form, documents, and biometric data.'
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the consular fee (90 EUR) and the BLS service fee (15.50 EUR) as instructed.'
    },
    {
      step: 5,
      title: 'Interview (if required)',
      description: 'Answer any questions posed by consular staff regarding your travel plans.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect your passport with the visa sticker from the BLS center.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies. No yellow fever vaccination required. No HIV test required for stays under 90 days.'
  }
};