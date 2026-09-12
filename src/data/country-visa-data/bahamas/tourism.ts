export default {
  country: 'bahamas',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs and Trade, Government of The Bahamas',
  channels: [
    'https://www.mfat.gov.bs/',
    'Embassy of The Bahamas in New Delhi',
    'Consulate General of The Bahamas in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 50',
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into The Bahamas and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form obtained from the Embassy or Consulate.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or invitation letter from host in The Bahamas.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in The Bahamas.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to cover the stay, along with Income Tax Returns (ITR) for the last 2 years and No Objection Certificate (NOC) if employed.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Application Form',
      description: 'Download or collect the visa application form from the Embassy of The Bahamas in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out the application form accurately and sign it. Ensure all details match the passport.'
    },
    {
      step: 3,
      title: 'Gather Documents',
      description: 'Prepare all required documents including passport, photographs, flight itinerary, accommodation proof, insurance, and financial documents.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application and supporting documents to the Embassy or Consulate along with the visa fee of USD 50.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Allow 10 working days for processing. You may be contacted for an interview or additional documents.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};