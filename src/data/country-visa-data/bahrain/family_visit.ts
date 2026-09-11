export default {
  country: 'bahrain',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Kingdom of Bahrain in New Delhi',
  channels: [
    'https://www.evisa.gov.bh/',
    'https://www.vfsglobal.com/Bahrain/India/',
    'https://www.bahrainembassy.org.in/'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '5-7 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: '9 BHD',
    stickerConsularStandard: '29 BHD',
    vfsServiceFee: 'Varies by center'
  },
  eVisa: {
    available: true,
    portal: 'https://www.evisa.gov.bh/',
    territorialScope: 'Nationwide',
    validity: '30 days',
    maxStay: '14 days',
    invitationRequired: true,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '14 days',
    stickerSingleDouble: '14 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Single Entry',
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
      description: 'Completed online application via the official eVisa portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking confirming travel dates',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation / CPR',
      description: 'Hotel booking confirmation or Bahrain CPR copy and invitation letter from resident family member',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the duration of stay in Bahrain',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds for stay',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Access Portal',
      description: 'Visit the official Bahrain eVisa portal at www.evisa.gov.bh and select Visa Eligibility.'
    },
    {
      step: 2,
      title: 'Fill Application',
      description: 'Complete the online application form with personal details, travel itinerary, and host/family details in Bahrain.'
    },
    {
      step: 3,
      title: 'Upload Documents',
      description: 'Upload required documents including passport copy, return ticket, and CPR/invitation from host.'
    },
    {
      step: 4,
      title: 'Pay Fee',
      description: 'Pay the non-refundable application processing fee (4 BHD) online via credit/debit card.'
    },
    {
      step: 5,
      title: 'Receive Approval & Pay Visa Fee',
      description: 'Upon approval (3-5 working days), pay the remaining visa issuance fee (5 BHD) to generate the eVisa.'
    },
    {
      step: 6,
      title: 'Entry to Bahrain',
      description: 'Print the approved eVisa and present it alongside your passport and return flight ticket upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'eVisa holders must enter Bahrain through designated international ports of entry. Family visit visa applications may require host CPR and proof of relation.'
  }
};