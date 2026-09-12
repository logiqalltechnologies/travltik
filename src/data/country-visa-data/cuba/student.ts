export default {
  country: 'cuba',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Cuba in New Delhi',
  channels: [
    'Embassy Direct',
    'https://misiones.cubaminrex.cu/en/india'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10–15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'https://evisacuba.cu',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '180 days',
    stickerMultiple: '1 year (renewable)'
  },
  entryType: 'Multiple Entry',
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
      description: 'Completed consular visa application form from the Embassy of Cuba.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip flight reservation or itinerary.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Letter of admission with university housing details or confirmed residence address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive medical insurance covering the entire duration of stay in Cuba.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months OR proof of scholarship/stipend or education loan showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Letter of Acceptance & DIIE Clearance',
      description: 'Official admission letter from an accredited Cuban educational institution and confirmation of prior authorization from the Directorate of Identification, Immigration and Aliens (DIIE).',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Health clearance including negative HIV and serology tests, issued within 3 months and legalized/apostilled.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Police clearance certificate issued by the Regional Passport Office (MEA), attested and legalized.',
      icon: '🔎',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'Required only if arriving from or transiting through yellow‑fever endemic areas.',
      icon: '💉',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain University Admission & Immigration Clearance',
      description: 'Secure admission from a Cuban academic institution, which must initiate prior entry authorization with the Directorate of Identification, Immigration and Aliens (DIIE) in Cuba.'
    },
    {
      step: 2,
      title: 'Gather and Legalize Documents',
      description: 'Assemble passport, photos, academic credentials, medical clearance (with HIV test), and police clearance legalized by the Ministry of External Affairs.'
    },
    {
      step: 3,
      title: 'Pay Statutory Consular Fee',
      description: 'Pay the USD 100 consular fee directly to the Embassy of Cuba via bank transfer/deposit according to consular instructions.'
    },
    {
      step: 4,
      title: 'Submit Application to Embassy',
      description: 'Submit the application form, receipts, and original documents directly to the Consular Section of the Embassy of the Republic of Cuba in New Delhi.'
    },
    {
      step: 5,
      title: 'Visa Issuance & Registration',
      description: 'Collect your student visa sticker upon approval. Register with immigration authorities (DIIE) upon arrival in Cuba to receive your student residence card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa issuance is subject to prior authorization from immigration authorities (DIIE) in Cuba. Yellow fever vaccination is mandatory if arriving from endemic countries. Mandatory medical check and foreign student registration within 30 days of arrival in Cuba.'
  }
};