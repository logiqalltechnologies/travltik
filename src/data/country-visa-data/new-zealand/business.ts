export default {
  country: 'new-zealand',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Immigration New Zealand',
  channels: [
    'https://www.immigration.govt.nz/',
    'https://www.vfsglobal.com/new-zealand/india/',
    'https://nzembassy.gov.in/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'NZ$ 341',
    vfsServiceFee: 'INR 1,500'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '3 months',
    stickerMultiple: '3 months'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least one blank page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application via the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirming travel dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from a New Zealand business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents listed above.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on the official portal.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the NZ$ 341 visa fee online or at the embassy.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the completed application and supporting documents.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Processing takes up to 15 working days for standard service.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the visa from the embassy or receive it by mail.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa allows up to 3 months per entry; no Schengen 90/180 rule applies.'
  }
};