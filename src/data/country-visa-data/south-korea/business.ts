export default {
  country: 'south-korea',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Republic of Korea, New Delhi',
  channels: [
    'https://www.visa.go.kr/', // Updated official Korea Visa Portal URL for information and forms
    'VFS Global South Korea Visa Application Center', // External Service Provider
    'Embassy of the Republic of Korea, New Delhi'
  ],
  processingTime: {
    // eVisa processing time removed as eVisa is not available for Indian business travelers
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    consularFeeSingleEntry: '3200 INR', // Corrected statutory consular fee for single entry
    consularFeeMultipleEntry: '7040 INR', // Corrected statutory consular fee for multiple entry
    vfsServiceFee: '1500 INR' // Corrected VFS service fee
  },
  eVisa: {
    available: false, // eVisa is NOT available for Indian nationals for business purposes
    // Removed other eVisa specific fields as it is not available
  },
  stayDuration: {
    // eVisa stay duration removed as eVisa is not available
    stickerSingleDouble: '90 days', // Maximum Permitted Stay
    stickerMultiple: '90 days' // Maximum Permitted Stay
  },
  entryType: 'Multiple Entry',
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
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly filled and signed visa application form, available on the official Korea Visa Portal or VFS Global website.', // Corrected description for physical form
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or confirmed itinerary.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from Korean business partner.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least 30,000 USD for medical expenses and repatriation.',
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
      title: 'Prepare Application Form and Documents', // Corrected title for physical application
      description: 'Download and fill the visa application form from the official Korea Visa Portal or VFS Global website. Gather all required supporting documents.' // Corrected description
    },
    {
      step: 2,
      title: 'Book Appointment and Pay Fees', // Corrected title for physical application
      description: 'Book an appointment at a VFS Global center. Pay the consular fee and VFS service fee at the center.' // Corrected description, payment is at VFS center
    },
    {
      step: 3,
      title: 'Document Submission',
      description: 'Submit the completed application form and all original documents along with photocopies at the VFS Global application center.' // Clarified description
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Wait for the visa processing within the specified working days.'
    },
    {
      step: 5,
      title: 'Visa Collection',
      description: 'Collect the sticker visa from the VFS Global center or receive it via courier if opted for.' // Clarified description
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions for business travelers.'
  }
};