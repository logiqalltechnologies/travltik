export default {
  country: 'japan',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Japan in New Delhi',
  channels: [
    'https://www.mofa.go.jp/region/asia-pacific/japan/visa.html',
    'https://www.vfsglobal.com/Japan/India'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '550 INR',
    stickerConsularStandard: '550 INR',
    vfsServiceFee: '470 INR'
  },
  eVisa: {
    available: true,
    portal: 'https://www.evisa.mofa.go.jp/index.html?lang=en',
    territorialScope: 'Indian nationals residing in India',
    validity: 'N/A', // Validity of the visa document itself is not explicitly fixed, tied to travel dates.
    maxStay: '90 days',
    invitationRequired: false,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
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
      description: 'White background, taken within 6 months, neutral expression, 2 copies.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application form via the official Ministry of Foreign Affairs portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip flight booking showing departure and return dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation confirmation or invitation letter from a host in Japan.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses of at least 30,000 JPY for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements for the last 3 months showing sufficient funds for the trip.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete the Online Application',
      description: 'Fill out the visa application form on the official Ministry of Foreign Affairs portal and print the confirmation page.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents listed above, ensuring they meet the specified criteria.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents either in person at the Embassy or via the VFS Global service center.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the consular visa fee (10,000 JPY) and the VFS service fee (1,500 JPY) as per the chosen submission method.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the standard processing time of 10 working days. No express option is available for Indian tourists.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the stamped passport from the Embassy or receive it via courier if requested.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Standard tourist visa allows a single entry for up to 90 days. No additional entry restrictions apply.'
  }
};