export default {
  country: 'uganda',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Uganda High Commission in New Delhi',
  channels: [
    'https://www.ugandaisland.gov.ug/visa',
    'https://www.vfsglobal.com/uganda/india',
    'https://www.ugandahighcommission.gov.in/visa'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: '100 USD',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: '30 USD'
  },
  eVisa: {
    available: true,
    portal: 'https://www.ugandaisland.gov.ug/visa',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank page.',
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
      description: 'Complete the online application on the official eVisa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or confirmed travel plan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from a Ugandan business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least USD 30,000 for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the eVisa application form on the official portal and upload scanned documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the eVisa fee (USD 100) online via the portal or through VFS service center.'
    },
    {
      step: 4,
      title: 'Submit Supporting Documents',
      description: 'Upload all mandatory documents and submit the application for processing.'
    },
    {
      step: 5,
      title: 'Receive eVisa',
      description: 'Download the approved eVisa PDF and print it for travel. Ensure it is carried during entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow fever vaccination certificate required if traveling from an endemic country. No Schengen or US rules apply.'
  }
};