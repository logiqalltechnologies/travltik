export default {
  country: 'canada',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
  channels: [
    'IRCC Portal (Official)',
    'VFS Global Visa Application Centre'
  ],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '30 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: '185 CAD (100 CAD Application Fee + 85 CAD Biometrics Fee)', 
    vfsServiceFee: 'Varies by optional services (Courier/SMS)' 
  },
  eVisa: { 
    available: false, 
    portal: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html', 
    territorialScope: 'Nationwide', 
    validity: 'Up to 10 years (or passport expiry)', 
    maxStay: '6 months per entry', 
    invitationRequired: false, 
    processing: 'N/A' 
  },
  stayDuration: { 
    eVisa: 'N/A', 
    stickerSingleDouble: 'N/A', 
    stickerMultiple: 'Up to 6 months per entry' 
  },
  entryType: 'Multiple Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport with at least 6 months validity from the date of arrival in Canada and at least 2 blank pages.', 
      icon: '📘', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Two recent photographs, 35x45mm, white background, taken within 6 months, neutral expression.', 
      icon: '📸', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Application Form', 
      description: 'Completed online application forms via the IRCC Portal, including the Application for Temporary Resident Visa (IMM 5257) and Family Information Form (IMM 5645).', 
      icon: '📋', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Round-trip flight reservation or detailed travel itinerary showing entry and exit dates from Canada.', 
      icon: '✈️', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Hotel booking confirmation, Airbnb reservation, or an invitation letter from a host in Canada along with their proof of status.', 
      icon: '🏨', 
      mandatory: true 
    },
    { 
      key: 'travel_insurance', 
      title: 'Travel Insurance', 
      description: 'Highly recommended travel medical insurance covering the entire duration of stay in Canada.', 
      icon: '🛡️', 
      mandatory: false 
    },
    { 
      key: 'bank_statement', 
      title: 'Financial Proof', 
      description: 'Bank statements for the last 6 months showing sufficient funds, Income Tax Returns (ITR-V) for the last 2 years, and a No Objection Certificate (NOC) from your employer or proof of business ownership.', 
      icon: '🏦', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Create an IRCC Portal Account', 
      description: 'Register and create an account on the official Immigration, Refugees and Citizenship Canada (IRCC) portal.' 
    },
    { 
      step: 2, 
      title: 'Complete Online Application', 
      description: 'Fill out the online visa application forms (IMM 5257 and IMM 5645) and upload all required supporting documents.' 
    },
    { 
      step: 3, 
      title: 'Pay Fees Online', 
      description: 'Pay the non-refundable application fee of 100 CAD and the biometrics fee of 85 CAD using a credit or debit card.' 
    },
    { 
      step: 4, 
      title: 'Book Biometrics Appointment', 
      description: 'Upon receiving the Biometric Instruction Letter (BIL), book an appointment at a VFS Global Visa Application Centre in India to submit your fingerprints and photo.' 
    },
    { 
      step: 5, 
      title: 'Submit Passport for Stamping', 
      description: 'Once your application is approved, you will receive a Passport Submission Letter. Submit your physical passport to VFS Global for visa sticker stamping.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'Biometrics are mandatory for all applicants aged 14 to 79. A physical passport must be submitted to VFS Global for sticker stamping after online approval.' 
  }
};