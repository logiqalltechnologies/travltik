export default {
  country: 'vietnam',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Vietnam Immigration Department, Ministry of Public Security',
  channels: [
    'Official Portal (https://evisa.xuatnhapcanh.gov.vn)',
    'Embassy of Vietnam in New Delhi',
    'Consulate General of Vietnam in Mumbai'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '5-7 working days',
    expressSticker: '1-3 working days'
  },
  fees: {
    eVisaTotal: 'USD 25 (Single Entry) / USD 50 (Multiple Entry)',
    stickerConsularStandard: 'USD 25 (Single Entry) / USD 50 (Multiple Entry)',
    vfsServiceFee: 'N/A (Direct Application - No external service provider required)'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.xuatnhapcanh.gov.vn',
    territorialScope: 'Nationwide',
    validity: 'Up to 90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: 'Up to 90 days',
    stickerSingleDouble: 'Up to 30 days or 90 days',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity beyond the date of entry and minimum 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent photograph taken within the last 6 months, white background, neutral facial expression, clear contrast, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Online e-Visa application form completed via the official portal with complete biographic details and passport page scan.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight itinerary or onward travel ticket with designated entry and exit border checkpoints.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel bookings, resort confirmation, or intended residential address in Vietnam during the stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Travel medical insurance covering medical expenses and hospitalization during stay in Vietnam (recommended).',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank account statements or proof of funds (may be requested for embassy sticker visas; not required for online e-Visa).',
      icon: '🏦',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Access Official Portal',
      description: 'Navigate to the official Vietnam Immigration e-Visa web portal (https://evisa.xuatnhapcanh.gov.vn).'
    },
    {
      step: 2,
      title: 'Upload Documents & Fill Application',
      description: 'Upload high-resolution scans of passport bio page and passport photo (35x45mm, white background), then complete all personal, flight, and accommodation fields.'
    },
    {
      step: 3,
      title: 'Pay Processing Fee',
      description: 'Pay non-refundable e-Visa fee (USD 25 for single entry or USD 50 for multiple entry) using a valid credit or debit card.'
    },
    {
      step: 4,
      title: 'Track Processing Status',
      description: 'Save the provided registration code to track application status online over 3 working days.'
    },
    {
      step: 5,
      title: 'Download & Print e-Visa',
      description: 'Once approved, download the e-Visa PDF document and print a hard copy to present at Vietnam immigration control along with your passport.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Passport must be valid for at least 6 months from entry date. Indian citizens must enter and exit through the exact port of entry selected during the online e-Visa application process.'
  }
};