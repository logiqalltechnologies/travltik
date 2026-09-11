export default {
  country: 'kazakhstan',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Kazakhstan',
  channels: [
    'https://evisa.gov.kz',
    'Embassy of Kazakhstan in New Delhi',
    'Consulate General of Kazakhstan in Mumbai'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '50 USD',
    stickerConsularStandard: '50 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.kz',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Kazakhstan. Must contain at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm, white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form. For eVisa, fill out the online form on the official portal. For sticker visa, submit the printed form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from a Kazakhstani company or organization. Must be registered with the Ministry of Internal Affairs of Kazakhstan and include the applicant\'s details, purpose of visit, and duration of stay.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or confirmed ticket showing entry and exit dates from Kazakhstan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or a letter of invitation from the host company providing accommodation details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Kazakhstan with a minimum coverage of 30,000 USD.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the expenses during the stay in Kazakhstan.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Business Invitation',
      description: 'Secure an official invitation letter from a Kazakhstani business partner or organization. Ensure it is registered with the relevant Kazakhstani authorities.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, invitation letter, flight itinerary, accommodation proof, insurance, and bank statements.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application online via the eVisa portal or in person at the Embassy/Consulate of Kazakhstan in India. Pay the required visa fee.'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Wait for the visa processing. eVisa processing takes approximately 5 working days, while sticker visa processing takes approximately 10 working days.'
    },
    {
      step: 5,
      title: 'Receive Visa',
      description: 'For eVisa, download the visa from the portal. For sticker visa, collect the passport with the visa sticker from the Embassy/Consulate.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa holders must register with the local migration authorities within 5 working days of arrival in Kazakhstan. The invitation letter must be valid and registered with the Ministry of Internal Affairs of Kazakhstan.'
  }
};