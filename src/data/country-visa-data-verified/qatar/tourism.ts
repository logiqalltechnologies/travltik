export default {
  country: 'qatar',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Interior - State of Qatar',
  channels: [
    'Official Hayya Portal (hayya.gov.qa)',
    'Qatar Ministry of Interior (moi.gov.qa)',
    'Visa on Arrival at Hamad International Airport (DOH)'
  ],
  externalServiceProvider: 'Direct (Official Hayya Portal / Ministry of Interior)',
  processingTime: {
    eVisa: '3 to 5 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'QAR 100 (~INR 2,300)',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://hayya.gov.qa',
    territorialScope: 'Nationwide',
    validity: '30 days',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '3 to 5 working days'
  },
  stayDuration: {
    eVisa: '30 days (extendable online for an additional 30 days)',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport with at least 6 months validity remaining from the intended date of entry into Qatar.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent passport-sized photograph (35x45mm) taken within the last 6 months against a plain white background with a neutral facial expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application on the official Hayya Portal (Hayya A3 Entry Permit).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight ticket departing from Qatar.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservation for the duration of stay (booked directly or through Discover Qatar if applicable) or official host registration proof.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Mandatory Qatari Health Insurance',
      description: 'Health insurance policy purchased from a Ministry of Public Health (MOPH) registered Qatar insurance provider (cost: QAR 50/month).',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statement for the last 3 months showing a minimum balance of QAR 5,000 (~INR 1,15,000) or an active international credit card under the applicant\'s name.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Account Registration',
      description: 'Create an account on the official Qatar Hayya Portal (hayya.gov.qa) or through the Hayya mobile app.'
    },
    {
      step: 2,
      title: 'Select Visa Category',
      description: 'Choose the "A3 - Tourist Visa" (Hayya Entry Permit) category for standard holiday visits.'
    },
    {
      step: 3,
      title: 'Upload Documents & Mandatory Insurance',
      description: 'Upload passport bio-page, 35x45mm photo, accommodation details, return ticket, and purchase mandatory MOPH-approved Qatar health insurance.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the non-refundable Hayya visa processing fee of QAR 100 using a credit or debit card.'
    },
    {
      step: 5,
      title: 'Receive Visa Permit',
      description: 'Once processed within 3 to 5 working days, download the approved Hayya Entry Permit to present at airport immigration upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Visitors must purchase mandatory health insurance from an accredited Qatari provider registered with the Ministry of Public Health (MOPH) before travel. Visa on Arrival is also accessible for 30 days provided travelers hold a valid bank statement/credit card, confirmed return ticket, Discover Qatar or verified hotel booking, and MOPH insurance.'
  }
};