export default {
  country: 'spain',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Spain in New Delhi',
  channels: [
    'https://india.blsspainvisa.com',
    'https://www.exteriores.gob.es/Embajadas/nuevadelhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '15.45 EUR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
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
      description: 'White background, taken within 6 months, neutral expression, 2 copies.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Schengen visa application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking or travel plan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from a Spanish business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least €30,000 for medical expenses and repatriation, valid for the entire Schengen area.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents listed above and ensure they meet the specified criteria.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment through the official BLS International website.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Attend the appointment at the BLS Visa Application Centre, submit the application form, documents, and biometric data.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee (90 EUR) and BLS service fee (15.45 EUR) as instructed.'
    },
    {
      step: 5,
      title: 'Interview (if required)',
      description: 'Attend a brief interview if requested by the consular officer.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect the passport with the visa sticker from the BLS centre or receive it by courier.'
    }
  ],
  specialRequirements: {
    entry_rules: '90 days within any 180-day period, multiple entry allowed, no stay beyond 90 days.'
  }
};