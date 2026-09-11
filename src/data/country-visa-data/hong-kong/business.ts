export default {
  country: 'hong-kong',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Hong Kong Immigration Department',
  channels: [
    'https://www.immd.gov.hk/visas/visa-application',
    'https://visa.vfsglobal.com/ind/en/hkg/', // Corrected to direct VFS Global link
    'https://www.gov.hk/en/about/abouthk/visa/visa.htm'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '4 to 6 weeks', // Corrected from '7 working days'
    expressSticker: 'N/A' // Corrected from '3 working days' as no express option is officially stated
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'HK$ 230', // Corrected from 'HK$ 1,200' based on ImmD
    vfsServiceFee: 'INR 1,900' // Corrected from 'HK$ 200' based on VFS Global India
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
    stickerSingleDouble: '90 days', // Corrected from '30 days' based on VFS Global
    stickerMultiple: '90 days' // Corrected from '30 days' based on VFS Global
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least one blank page',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Form 1 filled online or printed, signed and dated',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking with dates and flight numbers',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter from Hong Kong business partner',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least HK$ 30,000 for medical expenses for the duration of stay',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for last 3 months showing sufficient funds (HK$ 10,000 or equivalent)',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, application form, flight itinerary, accommodation proof, travel insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill out Form 1 online via the official portal or print and complete manually.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the HK$ 230 visa fee and INR 1,900 VFS service fee at the VFS Global service center.' // Corrected fees
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the application and documents in person at the VFS Global service center in India.' // Explicitly mentioned VFS Global
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for processing, which typically takes 4 to 6 weeks.' // Corrected processing time
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the visa sticker from the VFS Global service center or receive it by mail if applicable.' // Explicitly mentioned VFS Global
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions. Must have a valid invitation letter for business meetings. No health mandates required.'
  }
};