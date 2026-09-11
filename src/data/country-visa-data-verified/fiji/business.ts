export default {
  country: 'fiji',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Fiji Ministry of Foreign Affairs and International Cooperation',
  channels: [
    'https://visa.embassy.gov.fj/',
    'https://www.fiji.gov.fj/immigration/visa',
    'Embassy of Fiji in New Delhi, Dr. B. R. Ambedkar Marg, New Delhi - 110001, India'
  ],
  externalServiceProvider: 'None (direct through Fiji Immigration)',
  statutoryConsularFee: 'FJD 100',
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '5-7 working days',
    expressSticker: '3-4 working days'
  },
  fees: {
    eVisaTotal: 'FJD 100 (≈ USD 45)',
    stickerConsularStandard: 'FJD 100',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.embassy.gov.fj/',
    territorialScope: 'Nationwide',
    validity: '30 days from date of issue',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days (Single Entry)',
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
      description: 'Complete the online eVisa application on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter from Fijian business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to at least USD 20,000 for the entire stay.',
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
      key: 'invitation_letter',
      title: 'Invitation Letter (Optional)',
      description: 'Letter from Fijian business entity detailing purpose and duration of visit.',
      icon: '✉️',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application',
      description: 'Visit the official eVisa portal, fill in personal and travel details, and upload required documents.'
    },
    {
      step: 2,
      title: 'Pay Visa Fee',
      description: 'Pay the FJD 100 visa fee online using a credit/debit card or other accepted payment methods.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Review all information, confirm submission, and note the application reference number.'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'The Fiji Immigration Department reviews the application (typically 3 working days).'
    },
    {
      step: 5,
      title: 'Receive eVisa',
      description: 'The approved eVisa will be emailed as a PDF; print and carry it for travel.'
    },
    {
      step: 6,
      title: 'Travel to Fiji',
      description: 'Present passport, printed eVisa, and supporting documents at the port of entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa permits attendance at meetings, conferences, trade fairs, and short-term business activities. Employment or paid work is not allowed. Carry invitation or business correspondence if requested by immigration officials.'
  }
};