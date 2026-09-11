export default {
  country: 'mexico',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Mexico in New Delhi',
  channels: [
    'https://embassyofmexico.gov.in/',
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
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
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
      description: 'Original passport with at least 6 months validity beyond intended stay and at least one blank page, along with photocopies of the first and last pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photograph',
      description: 'One recent passport-sized photograph (39.0 mm x 31.0 mm or 45mm x 35mm), white background, front view, without glasses, taken within 30 days.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form (printed on both sides of a single sheet).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3 months showing a stable monthly average balance, or payslips/pension statements for the last 3 months showing stable monthly income meeting the Embassy\'s minimum wage multiples.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Proposed flight itinerary. The Embassy explicitly advises NOT to purchase non-refundable tickets before the visa is granted.',
      icon: '✈️',
      mandatory: false
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter from a Mexican resident/organization.',
      icon: '🏨',
      mandatory: false
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Recommended travel medical insurance covering the duration of stay in Mexico.',
      icon: '🛡️',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect your passport, photograph, completed application form, and financial documents (bank statements or payslips).'
    },
    {
      step: 2,
      title: 'Schedule an Appointment',
      description: 'Book a free visa appointment online through the official MiConsulado portal (citas.sre.gob.mx).'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee of 53 USD in Indian Rupees (INR) via bank transfer or cash as instructed by the Embassy on the day of the appointment.'
    },
    {
      step: 4,
      title: 'Attend Consular Interview',
      description: 'Submit your documents, pay the fee, and undergo a brief personal interview at the Embassy of Mexico in New Delhi.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the visa application to be processed, which typically takes up to 10 working days.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect your passport containing the visa sticker directly from the Embassy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals holding a valid multiple-entry visa or permanent residency of the USA, Canada, Japan, United Kingdom, or any Schengen country do not require a Mexican visa for tourist stays under 180 days.'
  }
};