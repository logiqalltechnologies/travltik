export default {
  country: 'kenya',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Department of Immigration Services, Ministry of Interior and National Administration, Republic of Kenya',
  externalServiceProvider: 'Embassy direct',
  channels: ['https://evisa.go.ke'],
  processingTime: { 
    eVisa: '2 working days', 
    standardSticker: 'N/A', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: '51 USD', 
    stickerConsularStandard: 'N/A', 
    vfsServiceFee: 'N/A' 
  },
  eVisa: { 
    available: true, 
    portal: 'https://evisa.go.ke', 
    territorialScope: 'Nationwide', 
    validity: 'Valid for travel within 90 days from the date of issue', 
    maxStay: '90 days', 
    invitationRequired: false, 
    processing: '2 working days' 
  },
  stayDuration: { 
    eVisa: 'Up to 90 days', 
    stickerSingleDouble: 'N/A', 
    stickerMultiple: 'N/A' 
  },
  entryType: 'Single Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport with at least 6 months validity from the date of arrival in Kenya and at least one blank page.', 
      icon: '📘', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Recent passport-size photograph (35x45mm) taken within the last 6 months against a white background, showing a neutral expression.', 
      icon: '📸', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'eTA Application Confirmation', 
      description: 'Completed online Electronic Travel Authorization (eTA) application form submitted via the official portal.', 
      icon: '📋', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Confirmed round-trip or onward flight ticket showing entry and exit from Kenya.', 
      icon: '✈️', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Confirmed hotel booking or an invitation letter from the host in Kenya along with their ID/passport copy.', 
      icon: '🏨', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Financial Proof', 
      description: 'Recent 3 months bank statements showing sufficient funds to cover the stay, along with an optional NOC from the employer.', 
      icon: '🏦', 
      mandatory: true 
    },
    { 
      key: 'yellow_fever', 
      title: 'Yellow Fever Vaccination Certificate', 
      description: 'A valid Yellow Fever vaccination certificate is mandatory for all travelers entering Kenya from India.', 
      icon: '💉', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Access the Official Portal', 
      description: 'Visit the official Kenya eTA portal at https://evisa.go.ke.' 
    },
    { 
      step: 2, 
      title: 'Create an Account', 
      description: 'Register an account using a valid email address and complete the verification process.' 
    },
    { 
      step: 3, 
      title: 'Fill the Application Form', 
      description: 'Enter personal details, passport information, travel dates, and accommodation details accurately.' 
    },
    { 
      step: 4, 
      title: 'Upload Required Documents', 
      description: 'Upload clear scans of your passport bio-data page, 35x45mm photograph, flight itinerary, hotel booking, and Yellow Fever certificate.' 
    },
    { 
      step: 5, 
      title: 'Pay the eTA Fee', 
      description: 'Pay the non-refundable fee of 51 USD online using a valid credit or debit card.' 
    },
    { 
      step: 6, 
      title: 'Download and Print eTA', 
      description: 'Once approved (typically within 2 working days), download the eTA PDF, print it, and present it at the port of entry.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'All travelers, including infants and children, must possess an approved eTA prior to travel. A valid Yellow Fever vaccination certificate is strictly required for entry into Kenya and for re-entry back into India.' 
  }
};