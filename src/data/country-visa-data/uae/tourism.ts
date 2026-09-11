export default {
  country: 'uae',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)',
  channels: [
    'https://smartservices.icp.gov.ae/',
    'https://www.gdrfad.gov.ae/',
    'https://visa.vfsglobal.com/ind/en/are/'
  ],
  processingTime: {
    eVisa: '2-4 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '250 AED',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://smartservices.icp.gov.ae/',
    territorialScope: 'Nationwide',
    validity: '60 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '2-4 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity from the intended date of entry and at least two blank pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (4.3x5.5cm / 35x45mm)',
      description: 'Recent photograph with white background, clear facial features, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application on the official ICP/GDRFA portal or airline portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight tickets',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservation or host residence details in UAE',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel health insurance valid for the duration of stay in UAE',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3-6 months showing sufficient funds for stay',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, digital photograph, flight tickets, and hotel reservation.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Apply via the official ICP smart services portal, GDRFA portal, or accredited partner (airlines/VFS Global).'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the non-refundable visa application fee online using a credit or debit card.'
    },
    {
      step: 4,
      title: 'Receive and Print eVisa',
      description: 'Upon approval, download the eVisa PDF sent via email and print a copy for immigration check.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals holding a valid US Visa/Green Card or UK/EU Residence Visa are eligible for Visa on Arrival (14 days) at UAE ports of entry upon payment of prescribed fees.'
  }
};