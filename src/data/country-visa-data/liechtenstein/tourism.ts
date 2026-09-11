export default {
  country: 'liechtenstein',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Switzerland in India (Representing the Principality of Liechtenstein)',
  channels: [
    'VFS Global (Swiss Visa Application Centre)',
    'Embassy of Switzerland in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '23 EUR'
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
    stickerSingleDouble: 'Up to 90 days within 180 days',
    stickerMultiple: 'Up to 90 days per 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs taken within the last 6 months, 35x45mm, white background, 70-80% face coverage, sharp focus.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Completed and signed Swiss/Schengen visa application form (online entry via Swiss Online Visa System printed and signed).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing travel dates and flight numbers entering and leaving Liechtenstein/Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations covering the entire duration of the stay in Liechtenstein and other Schengen states.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Medical insurance covering emergency medical expenses, hospitalization, and repatriation with minimum coverage of 30,000 EUR valid across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements)',
      description: 'Original personal bank statements for the last 3 to 6 months, stamped and signed by the bank, demonstrating minimum CHF 100 (or equivalent) per day of stay.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Form 16 for the last 3 assessment years.',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter',
      description: 'Personal cover letter outlining travel dates, purpose of visit, itinerary, and undertaking of travel expenses.',
      icon: 'file',
      mandatory: true
    }
  ]
};