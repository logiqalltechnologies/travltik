export default {
  country: 'uae',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)',
  channels: [
    'https://smartservices.icp.gov.ae/',
    'https://www.vfsglobal.com/emiratesservices/',
    'https://www.mofa.gov.ae/'
  ],
  processingTime: {
    eVisa: '24-72 hours',
    standardSticker: '3-5 working days',
    expressSticker: '24-48 hours'
  },
  fees: {
    eVisaTotal: '250 AED',
    stickerConsularStandard: '250 AED',
    vfsServiceFee: '75 AED'
  },
  eVisa: {
    available: true,
    portal: 'https://smartservices.icp.gov.ae/',
    territorialScope: 'Nationwide',
    validity: '60 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '24-72h'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
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
      description: 'White background, 6 months recent, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the official ICP smart services portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirming travel dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter with host details in the UAE.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Medical insurance covering UAE stay duration.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements showing sufficient funds for the stay.',
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
      description: 'Fill out the application form on the official ICP portal or via VFS Global / DVPC.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the official visa fee and applicable processing charges online.'
    },
    {
      step: 4,
      title: 'Receive eVisa',
      description: 'Download and print the approved UAE eVisa / entry permit.'
    },
    {
      step: 5,
      title: 'Entry to UAE',
      description: 'Present the printed eVisa, passport, and supporting documents at UAE immigration.'
    }
  ],
  specialRequirements: {
    entry_rules: 'An invitation letter from a UAE company or partner is recommended. Indian nationals holding a valid US Visa/Green Card or UK/EU Residence Permit are eligible for Visa on Arrival.'
  }
};