export default {
  country: 'new-zealand',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Immigration New Zealand',
  channels: [
    'https://www.immigration.govt.nz/',
    'https://www.vfsglobal.com/NewZealand/India/',
    'Embassy of New Zealand, New Delhi'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: '30 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'NZ$ 1,530',
    stickerConsularStandard: 'NZ$ 1,530',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.immigration.govt.nz/',
    territorialScope: 'Worldwide',
    validity: 'Up to 5 years',
    maxStay: '1825 days',
    invitationRequired: false,
    processing: '30 working days'
  },
  stayDuration: {
    eVisa: '1825 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  maxStayDays: 1825,
  entryType: 'Single',
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
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the Immigration NZ portal.',
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
      description: 'Hotel booking or employer-provided accommodation details.',
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
      description: 'Recent bank statements showing sufficient funds for living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'job_offer',
      title: 'Job Offer Letter',
      description: 'Official offer from a New Zealand employer detailing position, salary, and duration.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed contract outlining terms of employment.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'letter_of_invitation',
      title: 'Letter of Invitation',
      description: 'Employer’s invitation letter confirming the job offer.',
      icon: '📩',
      mandatory: true
    },
    {
      key: 'proof_of_qualification',
      title: 'Proof of Qualification',
      description: 'Academic certificates or professional qualifications relevant to the job.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Recent police clearance from India.',
      icon: '🔒',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'Medical examination report confirming fitness for work.',
      icon: '🏥',
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
      title: 'Create an Account on Immigration NZ Portal',
      description: 'Register on https://www.immigration.govt.nz/ and set up your profile.'
    },
    {
      step: 3,
      title: 'Complete the Online Application',
      description: 'Fill out the work visa application form, upload documents, and review for accuracy.'
    },
    {
      step: 4,
      title: 'Pay the Visa Fee',
      description: 'Pay NZ$ 1,530 via the portal’s payment gateway.'
    },
    {
      step: 5,
      title: 'Submit Biometrics',
      description: 'Schedule and attend a biometrics appointment at the nearest VFS Global center.'
    },
    {
      step: 6,
      title: 'Await Decision',
      description: 'Processing typically takes 30 working days; monitor status online.'
    },
    {
      step: 7,
      title: 'Receive Visa and Travel',
      description: 'Once approved, your eVisa will be linked to your passport; travel to New Zealand.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa holders must have a valid job offer, meet health and character requirements, and comply with the HIV test requirement for stays exceeding 90 days. No Schengen or US rules apply.'
  }
};