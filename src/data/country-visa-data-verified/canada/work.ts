export default {
  country: 'canada',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
  channels: [
    'https://www.canada.ca/en/immigration-refugees-citizenship.html',
    'https://www.vfsglobal.com/India/Canada/',
    'https://www.canadainternational.gc.ca/india-inde/index.aspx?lang=eng'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '11 weeks',
    expressSticker: '10 working days (Global Skills Strategy)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '155 CAD',
    vfsServiceFee: 'N/A (Biometrics fee of 85 CAD paid to IRCC covers VFS appointment)'
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
    stickerSingleDouble: 'Up to validity of work permit (typically 1-3 years)',
    stickerMultiple: 'Up to validity of work permit (typically 1-3 years)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank page.',
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
      description: 'Complete the online application on the IRCC portal.',
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
      description: 'Hotel reservation or employer-provided housing details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create IRCC Account',
      description: 'Register on the IRCC portal and verify your email.'
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out the work visa application form and upload required documents.'
    },
    {
      step: 3,
      title: 'Pay Fees',
      description: 'Pay the 155 CAD application fee and 85 CAD biometrics fee online.'
    },
    {
      step: 4,
      title: 'Book Biometrics',
      description: 'Schedule a biometrics appointment at a VFS Global Service Center.'
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Submit the application and biometrics data to IRCC.'
    },
    {
      step: 6,
      title: 'Await Decision',
      description: 'Track application status online; processing takes approximately 11 weeks (standard) or 10 working days (GSS).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work permit required; employer must have LMIA or offer of employment; no eTA for work visa.'
  }
};