export default {
  country: 'dominican-republic',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Dominican Republic in New Delhi',
  channels: [
    'https://www.embassy.gov.do/india',
    'https://www.vfsglobal.com/dominicanrepublic/india',
    'Embassy Direct'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days', // Corrected from '10 working days' based on VFS Global
    expressSticker: 'N/A' // Corrected from '5 working days' as no official express service is listed for this visa type
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: '2000 INR' // Corrected from '50 USD' based on VFS Global
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
    stickerSingleDouble: '60 days', // Corrected from '180 days' based on Mirex and VFS Global
    stickerMultiple: '60 days' // Corrected from '180 days' based on Mirex and VFS Global
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank page.',
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
      description: 'Complete the online application form on the embassy portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from the educational institution.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses and repatriation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, accommodation proof, travel insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on the embassy portal and upload scanned documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (100 USD) and VFS service fee (50 USD) online or at the designated bank.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application through the portal or at the VFS service center.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the standard processing time of 10 working days (express 5 working days).'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the visa sticker from the embassy or receive it by mail if applicable.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen 90/180 rule. No US DS-160 requirement. Yellow fever vaccination not mandatory. HIV test not required for stays under 90 days.'
  }
};