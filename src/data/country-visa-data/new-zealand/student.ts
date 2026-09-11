export default {
  country: 'new-zealand',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'New Zealand Immigration New Zealand',
  channels: [
    'https://www.immigration.govt.nz/visa-application',
    'https://www.vfsglobal.com/India/NewZealand',
    'https://www.nzembassy.com/india'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: '20 working days',
    standardSticker: '20 working days',
    expressSticker: '10 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'NZ$330',
    vfsServiceFee: 'NZ$0'
  },
  eVisa: {
    available: true,
    portal: 'https://www.immigration.govt.nz/new-zealand-visas/apply-for-visa',
    territorialScope: 'Nationwide',
    validity: '5 years',
    maxStay: '1825 days',
    invitationRequired: false,
    processing: '20 working days'
  },
  stayDuration: {
    eVisa: '1825 days',
    stickerSingleDouble: '1825 days',
    stickerMultiple: '1825 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least one blank page.',
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
      description: 'Complete the online application via the Immigration NZ portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'University dorm, host family agreement, or hotel booking in New Zealand.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for at least 3 months with medical and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for last 3 months showing sufficient funds (NZ$10,000) and education loan or scholarship documents if applicable.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create an Immigration NZ Account',
      description: 'Register on the official Immigration NZ portal and verify your email.'
    },
    {
      step: 2,
      title: 'Complete the Student Visa Application',
      description: 'Fill out the online form, upload required documents, and review for accuracy.'
    },
    {
      step: 3,
      title: 'Pay the Visa Fee',
      description: 'Pay NZ$330 via the portal using a valid credit/debit card.'
    },
    {
      step: 4,
      title: 'Submit the Application',
      description: 'Submit the completed application and wait for acknowledgment.'
    },
    {
      step: 5,
      title: 'Await Decision',
      description: 'Processing typically takes 20 working days; you will receive an electronic decision.'
    },
    {
      step: 6,
      title: 'Collect Visa (if required)',
      description: 'If a consular visa is issued, collect it from the nearest New Zealand consular office.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa allows stay up to 5 years, must maintain enrollment and meet financial requirements.'
  }
};