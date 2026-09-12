export default {
  country: 'dominican-republic',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Dominican Republic in New Delhi',
  channels: [
    'https://mirex.gob.do/servicios/visados/', // Updated to direct Mirex link
    'https://www.vfsglobal.com/Dominican_Republic/India',
    'https://www.dominicanrepublic.gov.do/embassy-new-delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days', // Corrected based on official sources
    expressSticker: 'N/A' // Removed as not officially supported for express processing time
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 100', // Verified as correct
    vfsServiceFee: 'USD 30' // Verified as correct
  },
  eVisa: {
    available: false, // Verified as correct
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '30 days', // Verified as correct (initial stay)
    stickerMultiple: 'N/A' // Removed as 90 days stay is not for standard tourist visa
  },
  entryType: 'Multiple Entry', // Can be Single or Multiple, keeping Multiple Entry as it's an option
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
      description: 'White background, 6 months recent, neutral expression, 2 copies.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application form via the official portal or printed form for embassy submission.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking showing dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation confirmation or invitation letter from a host in the Dominican Republic.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses of at least USD 30,000 for the duration of stay.',
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
      title: 'Collect Required Documents',
      description: 'Gather all mandatory documents listed above, ensuring they meet the specified criteria.'
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out the visa application form online via the official portal or print and complete the form for embassy submission.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents either through the VFS Global service center or directly at the Embassy of the Dominican Republic in New Delhi.'
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the consular fee of USD 100 and the VFS service fee of USD 30 (if using VFS).'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the standard processing time of 10-15 working days.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the stamped visa from the embassy or receive it via courier if requested.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen or US rules apply. No Yellow Fever vaccination required. No HIV test required. No invitation required for tourism.'
  }
};