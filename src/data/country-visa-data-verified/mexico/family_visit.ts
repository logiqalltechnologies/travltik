export default {
  country: 'mexico',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Mexico in New Delhi',
  channels: [
    'https://embamex.sre.gob.mx/india/',
    'https://citas.sre.gob.mx/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'Up to 10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '53 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 180 days',
    stickerMultiple: 'Up to 180 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (39x31mm to 35x45mm)',
      description: 'White background, front view, without glasses, recent (less than 30 days), neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete and sign the visa application form (printed on both sides of a single sheet).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of travel plans.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from Mexican relative with address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least 30,000 USD for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, travel insurance, bank statements, and invitation letter.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill out the visa application form completely and sign it.'
    },
    {
      step: 3,
      title: 'Book Appointment',
      description: 'Schedule an appointment for a consular interview through the official MiConsulado portal (citas.sre.gob.mx).'
    },
    {
      step: 4,
      title: 'Submit Documents and Interview',
      description: 'Present original documents and copies at the Embassy of Mexico in New Delhi or Consulate General in Mumbai, and undergo the consular interview.'
    },
    {
      step: 5,
      title: 'Pay Fees',
      description: 'Pay the consular fee (53 USD in equivalent INR cash or bank transfer as instructed by the Embassy) during your appointment.'
    },
    {
      step: 6,
      title: 'Processing',
      description: 'Wait for the standard processing time of up to 10 working days.'
    },
    {
      step: 7,
      title: 'Collect Visa',
      description: 'Collect your passport with the visa sticker directly from the Embassy or Consulate.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Invitation letter from Mexican relative, proof of relationship, financial support, travel insurance, and return ticket.'
  }
};