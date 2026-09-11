export default {
  country: 'mauritius',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Passport and Immigration Office (PIO) of Mauritius',
  externalServiceProvider: 'None (Visa on Arrival at Port of Entry)',
  channels: [
    'Visa on Arrival at Port of Entry',
    'Mauritius All-in-One Travel Digital Portal'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '0 working days (Processed instantly on arrival)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '0 INR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: null,
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 60 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the date of departure from Mauritius, with at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) with a white background, neutral expression, taken within the last 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Mauritius All-in-One Travel Digital Form',
      description: 'Must be filled out online prior to boarding. This generates a PDF with a QR code which must be presented to health and immigration officials upon arrival.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Confirmed Return Flight Itinerary',
      description: 'A confirmed return or onward flight ticket back to India or to a country of subsequent destination.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking voucher for the entire duration of stay, or a formal letter of sponsorship/invitation from a Mauritian resident along with their National Identity Card and utility bill.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Evidence of sufficient funds to cover the cost of stay (minimum of USD 100 per day), demonstrated via recent bank statements, active credit cards, or foreign exchange receipts.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill the All-in-One Travel Digital Form',
      description: 'Visit the official Mauritius Safe Travel portal (safetravel.govmu.org) before your flight and complete the digital declaration form.'
    },
    {
      step: 2,
      title: 'Save and Print the QR Code',
      description: 'Upon successful submission of the digital form, download the generated PDF containing the QR code and print a physical copy.'
    },
    {
      step: 3,
      title: 'Prepare Physical Documents',
      description: 'Gather your original passport, printed QR code, confirmed return flight tickets, hotel booking voucher, and proof of sufficient funds.'
    },
    {
      step: 4,
      title: 'Obtain Visa on Arrival',
      description: 'Upon landing at Sir Seewoosagur Ramgoolam International Airport, present your passport, printed QR code, and supporting documents to the immigration officer to receive your free 60-day tourist visa stamp.'
    }
  ],
  specialRequirements: {
    entry_rules: 'A Yellow Fever vaccination certificate is mandatory ONLY if arriving from or transiting through a Yellow Fever endemic country. Travelers must hold a minimum of USD 100 per day of stay to satisfy immigration requirements.'
  }
};