export default {
  country: 'venezuela',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of Venezuela',
  channels: [
    'https://www.embassyofvenezuela.org/india/',
    'https://www.vfsglobal.com/venezuela/india/',
    'https://www.embassyofvenezuela.org/india/contact'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: '30 USD'
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least 2 blank pages.',
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
      description: 'Completed online via the official embassy portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or employer-provided accommodation details.',
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
      description: 'Bank statements for the last 3 months.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed contract with the Venezuelan employer.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Official invitation from the Venezuelan employer.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'qualification_certificate',
      title: 'Qualification Certificate',
      description: 'Degree or professional certification relevant to the job.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'tax_clearance',
      title: 'Tax Clearance Certificate',
      description: 'Proof of tax compliance in India.',
      icon: '💰',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents listed above, ensuring they meet the specified criteria.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on the official embassy portal and upload scanned copies of documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (100 USD) and VFS service fee (30 USD) online or at the designated payment center.'
    },
    {
      step: 4,
      title: 'Schedule and Attend Interview',
      description: 'Book an appointment through VFS and attend the interview at the embassy or VFS center.'
    },
    {
      step: 5,
      title: 'Receive Visa Sticker',
      description: 'Collect the visa sticker from the embassy or have it mailed to you within the processing time.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination required. No Schengen or US rules apply.'
  }
};