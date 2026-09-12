export default {
  country: 'papua-new-guinea samoa tonga vanuatu solomon-islands kiribati marshall-islands micronesia palau nauru tuvalu',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Immigration Departments and Embassies of respective Pacific Island Nations',
  externalServiceProvider: 'Embassy direct',
  channels: [
    'https://evisa.png.gov.pg',
    'https://www.immigration.gov.sb'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '7-14 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'USD 50',
    stickerConsularStandard: 'Varies by country',
    vfsServiceFee: '0'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.png.gov.pg',
    territorialScope: 'Nationwide',
    validity: '30-90 days',
    maxStay: '30-90 days',
    invitationRequired: false,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30-90 days',
    stickerSingleDouble: '30-60 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry / Varies by country',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from date of entry',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within last 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete online application on the official eVisa portal or manual form where applicable',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation from family member',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical coverage for the entire stay',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Specific Country Requirements',
      description: 'Determine if the destination country is visa-free, requires visa on arrival, eVisa, or a pre-arranged sticker visa.'
    },
    {
      step: 2,
      title: 'Apply Online or Prepare Documents',
      description: 'For eVisa countries (like PNG), complete the online application. For others, prepare documents for arrival or embassy submission.'
    },
    {
      step: 3,
      title: 'Pay Applicable Fees',
      description: 'Pay the eVisa fee online or prepare cash for visa-on-arrival fees if applicable.'
    },
    {
      step: 4,
      title: 'Receive Approval or Entry Permit',
      description: 'Carry your printed eVisa, entry permit, or supporting documents to present to immigration upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Many Pacific Island nations offer visa-free entry or visa-on-arrival to Indian citizens (e.g., Samoa, Tonga, Vanuatu, Micronesia, Palau, Tuvalu). PNG and Solomon Islands offer eVisa options.'
  }
};