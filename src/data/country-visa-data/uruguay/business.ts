export default {
  country: 'uruguay',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Uruguay in New Delhi / Ministry of Foreign Affairs of Uruguay',
  channels: [
    'https://uruguay.gob.uy/embassy-india',
    'https://www.vfsglobal.com/uruguay/india',
    'Embassy Direct'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 150',
    vfsServiceFee: 'USD 30'
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
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online form on the official Uruguay visa portal or paper form obtained from the embassy.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip reservation (no ticket purchase required, reservation proof accepted).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter stating address of stay in Uruguay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Minimum coverage USD 30,000 for medical emergencies, repatriation, and COVID‑19 related treatment.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds (minimum USD 2,000) to cover stay.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation from the Uruguayan host company, on letterhead, signed, stating purpose, duration, and responsibility.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'company_documents',
      title: 'Applicant’s Company Documents',
      description: 'Certificate of incorporation, GST registration, and a No Objection Certificate (NOC) from the employer.',
      icon: '🏢',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, financial statements, invitation letter, and all supporting corporate documents.'
    },
    {
      step: 2,
      title: 'Complete Visa Application',
      description: 'Fill the online application on the official portal or obtain the paper form from the embassy.'
    },
    {
      step: 3,
      title: 'Schedule Appointment & Submit',
      description: 'Book an appointment through VFS Global or directly at the embassy and submit the dossier.'
    },
    {
      step: 4,
      title: 'Pay Consular & Service Fees',
      description: 'Pay USD 150 consular fee and USD 30 VFS service fee (if applicable) via accepted payment methods.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Standard processing takes up to 15 working days; express service reduces it to 5 working days.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Pick up the stamped visa from the embassy/VFS or receive it by courier as per the chosen service.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business invitation from a registered Uruguayan entity is mandatory; no Yellow Fever vaccination required as Uruguay is not an endemic zone.'
  }
};