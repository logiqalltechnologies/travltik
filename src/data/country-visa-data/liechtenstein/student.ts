export default {
  country: 'liechtenstein',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Migration and Passport Office (Ausländer- und Passamt - APA), Vaduz / Embassy of Switzerland in India',
  channels: [
    'VFS Global (Switzerland Visa Application Centre)',
    'Embassy of Switzerland in New Delhi',
    'Migration and Passport Office (APA) Liechtenstein'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '8 to 12 weeks',
    expressSticker: 'Not Applicable'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90 (approx. INR 8,100)',
    vfsServiceFee: 'INR 1,820'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Liechtenstein and Schengen Area',
    validity: 'Up to 1 year (renewable residence permit upon entry)',
    maxStay: 'Duration of academic program',
    invitationRequired: true,
    processing: '8 to 12 weeks'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days initial entry window',
    stickerMultiple: 'Valid for study duration (converted to Liechtenstein Residence Permit)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended stay, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Three recent passport-size photos (35x45mm) taken against a plain white background, neutral facial expression, 80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa (Type D) Application Form',
      description: 'Three fully completed and signed National Visa (Type D) application forms.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Proof of University Admission',
      description: 'Official confirmation letter of admission or enrollment from a recognized institution in Liechtenstein (e.g., University of Liechtenstein).',
      icon: 'education',
      mandatory: true
    },
    {
      key: 'tuition_fee_receipt',
      title: 'Proof of Tuition Fee Payment',
      description: 'Receipt or official confirmation showing full or partial payment of tuition fees for the first academic semester/year.',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Sufficiency',
      description: 'Education loan sanction letter, bank statements (last 6 months), scholarship letter, or blocked account showing at least CHF 21,000 per academic year.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'academic_transcripts',
      title: 'Academic Certificates & Marksheets',
      description: 'Apostilled copies of high school diplomas, bachelor degrees, and academic transcripts verified by MEA India.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'sop_motivation',
      title: 'Statement of Purpose / Motivation Letter',
      description: 'Signed personal motivation letter outlining academic trajectory, choice of Liechtenstein institution, and career goals post-study.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Dormitory allotment letter, signed lease contract, or host confirmation for living arrangements in Liechtenstein.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Medical insurance covering minimum €30,000 (or equivalent CHF) for health/accidents valid for initial 90-180 days until enrollment in Liechtenstein national healthcare.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original PCC issued by Passport Seva Kendra (PSK) within the last 3 months, duly apostilled by the Ministry of External Affairs (MEA), India.',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reserved round-trip flight itinerary or travel plan to Switzerland/Liechtenstein.',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Receive University Admission',
      description: 'Secure an official acceptance letter from a higher education institution in Liechtenstein.'
    },
    {
      step: 2,
      title: 'Prepare Triple-Set Dossier',
      description: 'Assemble three full sets of National Visa (Type D) forms and apostilled supporting documents.'
    },
    {
      step: 3,
      title: 'Book Appointment at VFS Switzerland',
      description: 'Schedule a National Visa appointment at the nearest VFS Global Switzerland application centre in India.'
    },
    {
      step: 4,
      title: 'Submit Biometrics and Consular Fee',
      description: 'Attend appointment, submit biometrics, and pay consular fee (EUR 90) and VFS service fee.'
    },
    {
      step: 5,
      title: 'Dossier Forwarding to Vaduz',
      description: 'The Swiss Embassy forwards the application dossier to the Migration and Passport Office (APA) in Vaduz, Liechtenstein for authority decision.'
    },
    {
      step: 6,
      title: 'Visa Collection and Residence Permit Registration',
      description: 'Collect passport with National D Visa upon authorization and register with the APA in Vaduz within 14 days of arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Liechtenstein is represented consularly by Switzerland in India for visa processing. Long-stay Type D student applications are submitted via VFS Switzerland, then transmitted to the Ausländer- und Passamt (APA) in Vaduz, Liechtenstein for approval. Processing takes 8–12 weeks. Upon arrival, students must register with the APA within 14 days to receive their temporary residence permit (Permit L or B).'
  }
};