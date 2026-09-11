export default {
  country: 'japan',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Japan in New Delhi',
  channels: [
    'https://www.mofa.go.jp/visas/visa.html',
    'https://www.vfsglobal.com/India/Japan/',
    'https://www.mofa.go.jp/embassy/india/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '500 INR',
    vfsServiceFee: '1,200 INR'
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
    stickerSingleDouble: '90 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
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
      description: 'Completed visa application form, available on the Embassy or VFS Global website.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'coe',
      title: 'Certificate of Eligibility (COE)',
      description: 'Original and a copy of the Certificate of Eligibility issued by the Ministry of Justice in Japan.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed flight booking for initial entry to Japan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or employer-provided housing confirmation (if applicable).',
      icon: '🏨',
      mandatory: false
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation for the initial period of stay until Japanese health insurance is active.',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements showing sufficient funds for living expenses (may be requested in some cases, though COE usually covers this).',
      icon: '🏦',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Certificate of Eligibility (COE)',
      description: 'Your prospective employer in Japan applies for a Certificate of Eligibility (COE) on your behalf at a regional immigration bureau in Japan. Once issued, the COE is sent to you.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Collect all required documents including your passport, photographs, the original Certificate of Eligibility, and other supporting documents.'
    },
    {
      step: 3,
      title: 'Complete Application Form',
      description: 'Fill out the visa application form accurately. This form is typically available on the Embassy or VFS Global website.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (INR 500) and VFS service fee (INR 1,200) at the VFS Global application center or designated bank.'
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Submit your application with all required documents to the VFS Global Japan application center.'
    },
    {
      step: 6,
      title: 'Processing',
      description: 'Wait for the standard processing time of 5 working days. Note that processing may take longer depending on the application details.'
    },
    {
      step: 7,
      title: 'Collect Visa',
      description: 'Collect your passport with the visa sticker from the VFS Global center.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen or US rules apply. No Yellow Fever vaccination required. HIV test not required for Japan work visas.'
  }
};