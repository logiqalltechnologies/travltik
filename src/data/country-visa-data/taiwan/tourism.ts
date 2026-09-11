export default {
  country: 'taiwan',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Taipei Economic and Cultural Representative Office (TECRO) in India',
  externalServiceProviders: ['VFS Global'],
  channels: [
    'https://visa.taiwan.net.tw/visa/visa_main.aspx?lang=en',
    'https://visa.vfs.gov.in/taiwan/',
    'https://taiwanembassy.gov.in/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '7 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '4500 INR',
    stickerConsularMultiple: '9000 INR',
    vfsServiceFee: '1000 INR'
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
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank visa page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression.',
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
      description: 'Return flight booking confirming dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from a host in Taiwan.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least 30,000 TWD for medical expenses and repatriation.',
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
      title: 'Submit Application',
      description: 'Fill out the online application form and upload required documents.'
    },
    {
      step: 2,
      title: 'Pay Fees',
      description: 'Pay the visa fee and VFS service fee online or at the VFS center.'
    },
    {
      step: 3,
      title: 'Attend Interview',
      description: 'Schedule and attend an interview at the VFS center if required.'
    },
    {
      step: 4,
      title: 'Collect Visa',
      description: 'Collect the stamped visa from the VFS center or receive it by mail.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions. No health mandates for Taiwan.'
  }
};