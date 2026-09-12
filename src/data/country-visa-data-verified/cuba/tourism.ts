export default {
  country: 'cuba',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Republic of Cuba in New Delhi',
  channels: [
    'https://cubaembassy.org.in/visa',
    'Embassy Direct'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5-7 working days',
    expressSticker: '3-4 working days (if expedited)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 30',
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
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days per entry'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from date of entry and have at least two blank pages.',
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
      description: 'Complete the visa application form available on the embassy portal.',
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
      description: 'Hotel reservation or invitation letter from a host in Cuba.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to USD 30,000 for the entire stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for the trip.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'income_tax_return',
      title: 'Income Tax Return (ITR)',
      description: 'Copy of the latest filed Income Tax Return as proof of financial stability.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'noc',
      title: 'No Objection Certificate (NOC)',
      description: 'NOC from employer or educational institution confirming leave for travel.',
      icon: '📝',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents listed above, ensuring they meet the specified criteria.'
    },
    {
      step: 2,
      title: 'Complete Visa Application Form',
      description: 'Fill out the online application form on the embassy portal and print the completed form.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents at the Embassy of Cuba in New Delhi or through an authorized travel agency.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee of USD 30 (cash or demand draft) as per embassy instructions.'
    },
    {
      step: 5,
      title: 'Visa Processing',
      description: 'Embassy processes the visa; standard processing takes 5-7 working days, express service 3-4 working days.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the stamped visa passport from the embassy or receive it via courier if opted for express service.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Tourist visa permits a single entry stay of up to 30 days. Must present return ticket, proof of accommodation, and sufficient funds. No Yellow Fever certificate required for Indian nationals.'
  }
};