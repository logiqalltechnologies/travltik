export default {
  country: 'vietnam',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Socialist Republic of Vietnam in New Delhi',
  channels: [
    'https://evisa.xuatnhapcanh.gov.vn/',
    'https://vietnamembassy-india.org/'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '5 working days',
    expressSticker: '1-2 working days'
  },
  fees: {
    eVisaTotal: '25 USD (Single Entry) / 50 USD (Multiple Entry)',
    stickerConsularStandard: '25 USD (Single Entry) / 50 USD (Multiple Entry)',
    vfsServiceFee: 'N/A (Embassy Direct / Official Portal)'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.xuatnhapcanh.gov.vn/',
    territorialScope: 'All designated international border gates (airports, land ports, and seaports)',
    validity: 'Up to 90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (4x6cm)',
      description: 'White background, taken within last 6 months, no glasses, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete online application on the official Vietnam e-Visa portal or embassy form for sticker visas.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight tickets.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or confirmation of place of stay in Vietnam.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation / Approval Letter',
      description: 'Invitation letter from the Vietnamese business partner/sponsor company (if applying for embassy sticker visa or sponsored entry).',
      icon: '✉️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statement demonstrating adequate funds for the duration of the trip.',
      icon: '🏦',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Choose Application Method',
      description: 'Apply online via the official Vietnam e-Visa portal (recommended) or contact the Embassy of Vietnam directly for a sticker visa.'
    },
    {
      step: 2,
      title: 'Complete Application Form & Upload Documents',
      description: 'Fill in personal details, purpose of visit (Business), and upload digital passport bio page and passport photo.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay non-refundable visa fee online (25 USD for single entry, 50 USD for multiple entry).'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Wait for processing (typically 3 working days for e-Visa).'
    },
    {
      step: 5,
      title: 'Receive & Print e-Visa',
      description: 'Download and print the e-Visa approval letter to present upon arrival at immigration.'
    }
  ],
  specialRequirements: {
    entry_rules: 'e-Visa is valid for 90 days with single or multiple entry options across 39 international ports of entry.'
  }
};