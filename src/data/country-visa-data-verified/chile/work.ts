export default {
  country: 'chile',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Chile in New Delhi',
  channels: [
    'https://visa.chile.gob.cl/visa',
    'https://visa.vfsglobal.com/ind/chl/',
    'https://embassyofchile.in/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '1,000 CLP',
    vfsServiceFee: '200 USD'
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
    stickerSingleDouble: 'Up to 1 year per entry',
    stickerMultiple: 'Up to 1 year per entry, multiple entries within validity'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.',
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
      description: 'Completed online application via the official Chilean visa portal.',
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
      description: 'Hotel reservation or invitation letter with address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage for medical expenses and repatriation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed contract between the applicant and the Chilean employer.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Letter from the Chilean employer detailing position, salary, and duration.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'proof_of_qualification',
      title: 'Proof of Qualification',
      description: 'Academic certificates or professional qualifications relevant to the job.',
      icon: '🎓',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents including passport, photographs, employment contract, invitation letter, and financial proof.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on the official Chilean visa portal and upload scanned copies of documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (1,000 CLP) and VFS service fee (200 USD) online or at the designated payment center.'
    },
    {
      step: 4,
      title: 'Schedule Appointment',
      description: 'Book an appointment with VFS Global or submit directly to the embassy for biometric capture.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Present documents and attend the visa interview if required by the embassy.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Receive the stamped visa in your passport within 10 working days (standard) or 5 working days (express).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa allows multiple entries within the validity period. Applicants must carry the employment contract and invitation letter at all times.'
  }
};