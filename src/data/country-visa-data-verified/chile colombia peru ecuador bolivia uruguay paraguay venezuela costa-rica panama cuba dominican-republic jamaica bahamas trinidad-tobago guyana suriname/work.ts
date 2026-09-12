export default {
  country: 'chile colombia peru ecuador bolivia uruguay paraguay venezuela costa-rica panama cuba dominican-republic jamaica bahamas trinidad-tobago guyana suriname',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Respective Ministry of Foreign Affairs / Labor Ministry / Immigration Directorate',
  channels: [
    'https://www.gob.cl/ (Chile)',
    'https://www.migracion.gov.co/ (Colombia)',
    'https://www.migracion.gob.pe/ (Peru)',
    'https://www.migracion.gob.ec/ (Ecuador)',
    'https://www.migracion.gob.bo/ (Bolivia)',
    'https://www.migracion.gob.uy/ (Uruguay)',
    'https://www.migracion.gov.py/ (Paraguay)',
    'https://www.migracion.gob.ve/ (Venezuela)',
    'https://www.migracion.go.cr/ (Costa Rica)',
    'https://www.migracion.gob.pa/ (Panama)',
    'https://www.migracion.gob.cu/ (Cuba)',
    'https://www.migracion.gob.do/ (Dominican Republic)',
    'https://www.migration.gov.jm/ (Jamaica)',
    'https://www.migration.gov.bs/ (Bahamas)',
    'https://www.migration.gov.tt/ (Trinidad and Tobago)',
    'https://www.migration.gov.gy/ (Guyana)',
    'https://www.migratie.sr/ (Suriname)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'Varies by country (e.g., Chile: ~$100 USD, Colombia: ~$334 USD, Peru: ~$100 USD, Ecuador: ~$500 USD, Costa Rica: ~$250 USD)',
    vfsServiceFee: 'N/A (Direct Embassy/Consulate submission required for Work Visas)'
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
    stickerSingleDouble: '1-2 years (renewable)',
    stickerMultiple: '1-2 years (renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed application form for Work Visa, specific to the destination country.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed contract with the employer in the destination country, specifying job role, salary, and duration.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'job_offer_letter',
      title: 'Job Offer Letter',
      description: 'Official letter from the employer confirming the job offer and position.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'labor_authorization',
      title: 'Labor Authorization / Work Permit',
      description: 'Pre-approval or work permit issued by the local labor ministry or immigration authority.',
      icon: '🏛️',
      mandatory: true
    },
    {
      key: 'qualifications',
      title: 'Educational Certificates',
      description: 'Notarized copies of degrees, diplomas, and professional certifications relevant to the job.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'experience_letters',
      title: 'Experience Letters',
      description: 'Letters from previous employers detailing job roles, responsibilities, and duration of employment.',
      icon: '📑',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Health certificate issued by an authorized physician, including HIV test if stay exceeds 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Certificate of good conduct from the Indian police or relevant authority, notarized and apostilled.',
      icon: '🚔',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support initial stay.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance covering medical expenses, repatriation, and emergency evacuation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or one-way ticket if relocating.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Lease agreement, hotel booking, or invitation letter from employer/family confirming residence.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Job Offer',
      description: 'Obtain a signed job offer and employment contract from the employer in the destination country.'
    },
    {
      step: 2,
      title: 'Obtain Labor Authorization',
      description: 'Employer applies for labor authorization or work permit from the local labor ministry or immigration authority.'
    },
    {
      step: 3,
      title: 'Prepare Documents',
      description: 'Gather all required documents, including notarized and apostilled educational certificates, police clearance, and medical certificate.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the respective embassy or consulate in India.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Attend a visa interview if required by the embassy or consulate.'
    },
    {
      step: 6,
      title: 'Pay Fees',
      description: 'Pay the applicable visa fee and any additional service charges.'
    },
    {
      step: 7,
      title: 'Wait for Processing',
      description: 'Wait for the visa to be processed, which typically takes 15-30 working days after all pre-approvals are in place.'
    },
    {
      step: 8,
      title: 'Collect Passport',
      description: 'Collect the passport with the visa sticker once approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visas require pre-approval from local labor authorities, which can significantly extend the overall processing time beyond the consular processing period. HIV testing is mandatory for stays exceeding 90 days in many countries. Yellow fever vaccination is required for entry into endemic countries (e.g., Colombia, Peru, Ecuador, Bolivia, Venezuela, Costa Rica, Panama, Dominican Republic, Jamaica, Guyana, Suriname). All documents must be notarized and apostilled where applicable.'
  }
};