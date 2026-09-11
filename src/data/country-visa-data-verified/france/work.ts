export default {
  country: 'france',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry for Europe and Foreign Affairs / France-Visas',
  channels: [
    'France-Visas Official Portal',
    'VFS Global Visa Application Centre',
    'Embassy of France in India'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '99 EUR',
    vfsServiceFee: '33 EUR'
  },
  eVisa: {
    available: false,
    portal: 'https://france-visas.gouv.fr/',
    territorialScope: 'France and Schengen Area',
    validity: 'As per work permit / up to 1 year',
    maxStay: '365 days',
    invitationRequired: true,
    processing: '15 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: '365 days (renewable via VLS-TS)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended departure date, issued within the last 10 years with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photos (35x45mm) taken within the last 6 months, light white background, neutral expression, no glare.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'France-Visas Application Form & Receipt',
      description: 'Completed and signed France-Visas application form generated from the official portal along with the registration receipt.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Official Work Permit / Authorization (DIRECCTE / ANEF)',
      description: 'Approved French work authorization document issued by the Ministry of Labor (DIRECCTE/ANEF) or Talent Passport contract confirmation.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'French Employment Contract',
      description: 'Signed employment contract or binding job offer from the French employer detailing position, duration, and remuneration.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Reservation',
      description: 'Round-trip or one-way flight itinerary specifying arrival dates and flight numbers in France.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of residential arrangement in France for the initial period (hotel booking, lease agreement, or employer-provided housing declaration).',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel & Medical Insurance',
      description: 'Medical insurance policy covering minimum €30,000 for emergency medical, hospital treatment, and repatriation across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Income Statements',
      description: 'Personal bank statements for the last 3 to 6 months, Income Tax Returns (ITR) for the last 2-3 years, and recent payslips.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter',
      description: 'Personal letter explaining the purpose of the trip, employment nature, assignment scope, and key contact details in France.',
      icon: 'file-text',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete France-Visas Application',
      description: 'Create an account on France-Visas portal, fill out the long-stay/work visa application, and generate the registration receipt.'
    },
    {
      step: 2,
      title: 'Secure French Work Permit',
      description: 'Ensure the sponsoring French employer has secured the necessary work authorization approval (DIRECCTE/ANEF).'
    },
    {
      step: 3,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule a physical appointment at the nearest VFS Global France Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Biometrics and Pay Fees',
      description: 'Attend the appointment to submit original documents, provide biometric data, and pay the €99 consular fee and VFS service charge.'
    },
    {
      step: 5,
      title: 'Passport Retrieval and Validation',
      description: 'Track processing online, collect your passport upon completion, and validate the VLS-TS online within 3 months of arrival in France.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of Long-Stay Visas serving as Residence Permits (VLS-TS) must validate their visa online via the ANEF portal within 3 months of arrival in France and pay the corresponding tax. Medical examination by OFII may be mandated post-entry depending on visa subtype.'
  }
};