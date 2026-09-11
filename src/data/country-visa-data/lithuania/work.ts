export default {
  country: 'lithuania',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Migration Department under the Ministry of the Interior of the Republic of Lithuania (MIGRIS)',
  channels: [
    'MIGRIS Portal (Online Application)',
    'VFS Global Visa Application Centre',
    'Embassy of the Republic of Lithuania in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 140',
    vfsServiceFee: 'INR 1,840'
  },
  eVisa: {
    available: false,
    portal: 'https://www.migris.lt',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 1 year (365 days)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended stay in Lithuania, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a white background, with 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'MIGRIS Application Form & Receipt',
      description: 'Completed National Visa D application form submitted online via the MIGRIS portal, printed and signed along with the submission receipt.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'mediation_letter',
      title: 'Electronic Employer Mediation Letter',
      description: 'Official electronic mediation letter (Tarpininkavimo laiškas) submitted by the Lithuanian employer directly through the MIGRIS portal with a valid reference number.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Work Permit or Qualification Document',
      description: 'Work permit issued by the Employment Service under the Ministry of Social Security and Labour of Lithuania, or proof of high professional qualification (if exempt).',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Apostilled Police Clearance Certificate',
      description: 'Original Police Clearance Certificate (PCC) issued by the Regional Passport Office in India within the last 6 months, duly apostilled by the Ministry of External Affairs (MEA), India.',
      icon: 'shield-check',
      mandatory: true
    },
    {
      key: 'proof_of_funds',
      title: 'Financial Proof & Employment Contract',
      description: 'Signed employment contract specifying a salary meeting or exceeding the Lithuanian minimum monthly allowance (MMA), along with bank statements showing sufficient personal funds.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Valid medical insurance policy covering the entire duration of the visa with minimum medical coverage of EUR 30,000, valid across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Proof of intended travel reservation or flight itinerary to Lithuania.',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Submits Mediation Letter',
      description: 'Ensure your Lithuanian employer lodges an electronic mediation request (Tarpininkavimo laiškas) via the MIGRIS system.'
    },
    {
      step: 2,
      title: 'Complete Online Application via MIGRIS',
      description: 'Create an account on migris.lt, complete the National Visa (Type D) application form, upload required documents, and generate the application reference.'
    },
    {
      step: 3,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an appointment at the designated VFS Global Lithuania Application Centre in India for document submission and biometrics.'
    },
    {
      step: 4,
      title: 'Attend VFS Appointment & Submit Biometrics',
      description: 'Submit original documents, apostilled certificates, passport, and complete biometric data collection (fingerprints and photo) at VFS.'
    },
    {
      step: 5,
      title: 'Receive Clearance & Passport Collection',
      description: 'Track application status through MIGRIS/VFS. Once processed, collect your passport stamped with the Lithuanian National Visa D.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All non-EU official documents (e.g., Police Clearance Certificate, educational degree certificates) issued in India must be apostilled by the Ministry of External Affairs (MEA), India, before submission to Lithuanian authorities.'
  }
};