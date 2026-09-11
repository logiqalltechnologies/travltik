export default {
  country: 'uzbekistan',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Uzbekistan',
  channels: [
    'https://evisa.gov.uz',
    'Embassy of Uzbekistan in New Delhi',
    'Consulate General of Uzbekistan in Mumbai'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '20 USD',
    stickerConsularStandard: '60 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.uz',
    territorialScope: 'Nationwide',
    validity: '30 days from date of issue',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Uzbekistan and contain at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, with a neutral expression and no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form. For eVisa, this is filled online on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates from/to Uzbekistan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or a letter of invitation from a host in Uzbekistan.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Uzbekistan with a minimum coverage of 30,000 USD.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the expenses during the stay. Income Tax Returns (ITR) and No Objection Certificate (NOC) from employer if applicable.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Choose Visa Type',
      description: 'Decide between eVisa (online) or sticker visa (via embassy/consulate). eVisa is recommended for tourism.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, flight bookings, accommodation proof, insurance, and financial proof.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'For eVisa: Fill out the online form on evisa.gov.uz and upload documents. For sticker visa: Submit documents at the Embassy or Consulate.'
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the visa fee online for eVisa or at the embassy/consulate for sticker visa.'
    },
    {
      step: 5,
      title: 'Track Application',
      description: 'Track the status of your application online (eVisa) or via email/phone (sticker visa).'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'eVisa will be sent via email. Sticker visa will be issued in the passport.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Travelers must register with the local police within 3 days of arrival in Uzbekistan. This is usually done by the hotel or host. Yellow fever vaccination is not required for travelers from India.'
  }
};