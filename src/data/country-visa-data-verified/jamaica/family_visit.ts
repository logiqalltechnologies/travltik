export default {
  country: 'jamaica',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Jamaica Passport, Immigration and Citizenship Agency (JPICA)',
  channels: [
    'https://www.enterjamaica.com',
    'N/A (No VFS/BLS/TLS/GVCW Service Center)',
    'Jamaica High Commission, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5-7 working days', // Corrected from '10 working days' based on official sources.
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'N/A'
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
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Jamaica and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, with a neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'C5 Immigration Form',
      description: 'Completed C5 Immigration Form obtained from enterjamaica.com. This is mandatory before boarding the flight.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking showing entry and exit dates within the 30-day limit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Letter of invitation from the family member in Jamaica including their address, contact details, and copy of their passport/ID, or hotel booking confirmation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of the stay in Jamaica.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months, Income Tax Returns (ITR) for the last 2 years, and a No Objection Certificate (NOC) if applicable, to prove sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete C5 Form',
      description: 'Fill out the C5 Immigration Form online at enterjamaica.com and print the confirmation. This must be done before booking flights.'
    },
    {
      step: 2,
      title: 'Gather Documents',
      description: 'Prepare all required documents including passport, photos, flight itinerary, accommodation proof, insurance, and financial documents.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents to the Jamaica High Commission in New Delhi or the relevant consular office.'
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the visa fee of USD 100 as per the instructions provided by the consular office.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing which typically takes 5-7 working days.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'C5 immigration form at enterjamaica.com is mandatory before boarding. Visa-free 30 days tourism applies, but family visit visa requires prior approval for stays exceeding standard tourist provisions or for specific family visit purposes.'
  }
};