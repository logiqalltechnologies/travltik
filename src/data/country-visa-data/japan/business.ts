export default {
  country: 'japan',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Japan in New Delhi',
  channels: [
    'https://www.mofa.go.jp/visas/visa.html',
    'https://www.vfsglobal.com/japan/india/visa.html',
    'https://www.mofa.go.jp/embassy/india/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 working days', // Corrected from '10 working days' based on official sources
    expressSticker: 'N/A' // Corrected to 'N/A' as official sources indicate a standard 5 working days, without a separate express service.
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '500 INR', // Corrected from '10,000 JPY' based on official sources (Embassy of Japan in India, VFS Global)
    vfsServiceFee: '472 INR' // Corrected from '1,000 JPY' based on official VFS Global Japan in India website
  },
  eVisa: {
    available: false, // Verified: Indian nationals are not eligible for Japan eVisa at this time.
    portal: '', // Verified: No official portal for eVisa for Indian nationals.
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days', // Verified: Up to 90 days for short-term business visa.
    stickerMultiple: '90 days' // Verified: Up to 90 days per entry for multiple entry short-term business visa.
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.',
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
      description: 'Completed visa application form. Download from the VFS Global or Embassy website.', // Corrected as online application is not available for Indian nationals.
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter with accommodation details.',
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
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Official invitation from the Japanese company detailing purpose and duration of visit.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, application form, flight itinerary, accommodation proof, travel insurance, bank statements, and invitation letter.'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Schedule an appointment at the VFS Global center and submit the completed application form along with all required documents.' // Corrected as online application is not available for Indian nationals.
    },
    {
      step: 3,
      title: 'Pay Fees',
      description: 'Pay the consular fee (500 INR) and VFS service fee (472 INR) at the VFS Global center during submission.' // Corrected fees and payment method based on official sources.
    },
    {
      step: 4,
      title: 'Attend Interview',
      description: 'Attend the visa interview at the VFS center or embassy if required.'
    },
    {
      step: 5,
      title: 'Collect Visa',
      description: 'Collect the visa sticker from the embassy or receive it by mail if processed through the VFS center.'
    }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};