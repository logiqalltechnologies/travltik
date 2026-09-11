export default {
  country: 'hong-kong',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Hong Kong Immigration Department',
  channels: [
    'https://www.immigration.gov.hk/eng/services/visas/visit_transit.html',
    'https://www.immd.gov.hk/eng/services/visas/pre-arrival_registration_for_indian_nationals.html',
    'https://www.vfsglobal.com/hongkong/india/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '4 to 6 weeks', // Corrected from '7 working days'
    expressSticker: 'N/A' // Corrected from '3 working days', as express service is not officially listed
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'HK$ 0', // Corrected from 'HK$ 1,200'. Visa application is free of charge.
    vfsServiceFee: 'INR 1,400' // Corrected from 'HK$ 200', and currency to INR as charged by VFS in India.
  },
  eVisa: {
    available: false,
    portal: '',
    territorialScope: 'N/A', // Corrected from 'Nationwide' as eVisa is not available
    validity: 'N/A', // Corrected from '30 days' as eVisa is not available
    maxStay: 'N/A', // Corrected from '30 days' as eVisa is not available
    invitationRequired: 'N/A', // Corrected from false as eVisa is not available
    processing: 'N/A' // Corrected from '7 working days' as eVisa is not available
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days', // Corrected from '30 days'
    stickerMultiple: '90 days' // Corrected from '30 days'
  },
  entryType: 'Single Entry',
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
      description: 'White background, 6 months recent, neutral expression, as per ICAO standards.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form (ID 1003A and ID 1003B)', // Added specific form numbers
      description: 'Complete the visa application forms (ID 1003A and ID 1003B) downloaded from the official Immigration Department website.', // Corrected description
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
      description: 'Hotel booking confirmation or invitation letter from a host in Hong Kong.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Recommended for the duration of stay, though not explicitly mandatory for visa application by official sources.', // Corrected from mandatory
      icon: '🛡️',
      mandatory: false // Corrected from true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for the trip, or other proof of financial standing.', // Clarified description
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Collect all mandatory documents listed above, including downloaded application forms.'
    },
    {
      step: 2,
      title: 'Complete Application Forms', // Corrected title
      description: 'Fill out the visa application forms (ID 1003A and ID 1003B) accurately.' // Corrected description
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the VFS service fee of INR 1,400 at the designated service center. The consular visa application is free of charge.' // Corrected fees
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the completed application forms and supporting documents in person at the VFS Global center in India.' // Corrected submission method (no online submission for sticker visa)
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the visa processing which typically takes 4 to 6 weeks from the date of submission to the Immigration Department.' // Corrected processing time
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the stamped visa from the VFS Global service center once processed.' // Clarified collection
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals are eligible for visa-free entry to Hong Kong for up to 14 days by completing a free Pre-arrival Registration (PAR) online. A visa (sticker) is required for stays longer than 14 days or if not eligible for PAR. Ensure passport validity of at least 6 months beyond the intended stay.' // Added crucial PAR information
  }
};