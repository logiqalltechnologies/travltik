export default {
  country: 'switzerland',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Swiss Embassy in New Delhi',
  channels: [
    'https://www.eda.admin.ch/india/en/home.html',
    'https://www.vfsglobal.com/Switzerland/India/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '8 to 12 weeks',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '27 EUR'
  },
  eVisa: {
    available: false,
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Based on work permit',
    stickerMultiple: 'Based on work permit'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 3 months beyond the planned stay in Switzerland and contain at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Three recent biometric passport-size photographs with a white background, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form (Type D)',
      description: 'Three completed and signed National Visa D application forms.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Flight reservation or proof of travel arrangements.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Rental agreement, hotel reservation, or employer-provided housing confirmation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least 30,000 EUR for medical expenses and repatriation, valid until Swiss health insurance is active.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements showing sufficient funds and salary history.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'work_contract',
      title: 'Employment Contract',
      description: 'Signed Swiss employment contract detailing position, salary, and duration of employment.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'employer_letter',
      title: 'Employer Sponsorship Letter',
      description: 'Letter from the Swiss employer confirming the job offer and sponsorship details.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'work_permit_authorization',
      title: 'Cantonal Work Permit Authorization',
      description: 'The official authorization letter (Ermächtigung zur Visumerteilung / Autorisation d\'entrée) issued by the cantonal migration authority in Switzerland.',
      icon: '📑',
      mandatory: true
    },
    {
      key: 'academic_qualifications',
      title: 'Academic & Professional Certificates',
      description: 'Copies of university degrees, diplomas, and professional CV/resume.',
      icon: '🎓',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Initiates Process',
      description: 'The Swiss employer must apply for a work permit on your behalf at the local cantonal migration office in Switzerland.'
    },
    {
      step: 2,
      title: 'Receive Cantonal Authorization',
      description: 'Wait for the cantonal authority to approve the application and issue the visa authorization (Ermächtigung zur Visumerteilung).'
    },
    {
      step: 3,
      title: 'Book Appointment',
      description: 'Schedule an appointment at the VFS Global Swiss Visa Application Centre in India to submit your passport and biometrics.'
    },
    {
      step: 4,
      title: 'Submit Application & Pay Fees',
      description: 'Attend the appointment, submit the National Visa D application forms, passport, supporting documents, and pay the visa and service fees.'
    },
    {
      step: 5,
      title: 'Visa Issuance',
      description: 'The Swiss Embassy processes the entry visa sticker once the cantonal authorization is confirmed. This typically takes 5-10 working days after authorization is received.'
    },
    {
      step: 6,
      title: 'Register in Switzerland',
      description: 'Upon arrival in Switzerland, register with the local residents\' registration office (Einwohnerkontrolle) within 14 days to receive your physical residence/work permit.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa requires a valid cantonal work permit authorization. Upon arrival in Switzerland, registration with local authorities is mandatory to obtain the physical residence permit (L or B Permit). Swiss health insurance must be obtained within 3 months of arrival.'
  }
};