export default {
  country: 'albania',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry for Europe and Foreign Affairs of Albania / Albanian Embassy in New Delhi',
  channels: [
    'e-Albania Portal (for Unique Permit application and initial Type D visa application)',
    'Albanian Embassy in New Delhi (for Type D visa submission and biometrics)'
  ],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '30 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: 'EUR 80',
    workPermitFee: 'ALL 6,000-15,000 (~₹5,940-₹14,850)',
    vfsServiceFee: 'Not applicable (applications directly via e-Albania portal and Embassy)'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable',
    territorialScope: 'Not applicable',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: false,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Not applicable',
    stickerMultiple: 'More than 90 days, linked to work permit/residence permit validity (typically 1 year, renewable)'
  },
  maximumStayDays: 365,
  entryType: 'Multiple Entry',
  externalServiceProvider: 'Embassy direct',
  eVisaPortalUrl: null,
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond intended stay with at least 2 blank pages. Photocopy of biodata page and any pages with previous visas or relevant stamps.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent passport-size photographs with white background, 80% face coverage, taken within 6 months.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online Type D visa application form.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or confirmed travel itinerary.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking, rental agreement, or invitation letter from host in Albania with address and contact details.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Medical travel insurance with minimum EUR 30,000 coverage for the entire duration of stay in Albania.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3-6 months showing sufficient funds to cover stay. Salary slips or employer letter confirming income. Minimum ₹0 for per day of stay (no specific amount publicly specified, but sufficient funds required).', icon: '🏦', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract / Offer Letter', description: 'Signed employment offer letter or contract from a registered Albanian employer, specifying job role and duration of stay.', icon: '📄', mandatory: true },
    { key: 'work_permit', title: 'Work Permit (Unique Permit) Approval', description: 'Approval of the Unique Permit (Leje Unike) from Albanian authorities, combining work and residence authorization.', icon: '📜', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: "Certificate issued in the applicant's home country confirming no criminal record.", icon: '👮', mandatory: true },
    { key: 'professional_skills', title: 'Proof of Professional Skills / Educational Qualification', description: 'Documents demonstrating professional skills, experience certificates, or educational qualifications relevant to the job.', icon: '🎓', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'Personalized letter explaining the purpose of visit, duration, itinerary, and ties to India.', icon: '📝', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Certificate confirming good health and absence of contagious diseases.', icon: '🩺', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain Job Offer and Work Permit', description: 'Secure an employment offer from a registered Albanian employer. The employer must initiate the Unique Permit application via the e-Albania portal, which includes the work permit and residence approval.' },
    { step: 2, title: 'Complete Online Type D Visa Application', description: 'Fill out the Type D long-stay visa application form online via the e-Albania portal (if applicable) or prepare the printed consular form.' },
    { step: 3, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents, including the approved Unique Permit, employment contract, financial proofs, and other personal documents.' },
    { step: 4, title: 'Submit Application and Pay Fees', description: 'Schedule an appointment at the Albanian Embassy in New Delhi. Submit the complete dossier, attend biometric registration, and pay the statutory consular fees for the Type D visa.' },
    { step: 5, title: 'Receive Clearance', description: 'Track the application status. Once approved, the Type D sticker visa will be affixed in the passport. Upon entry to Albania, proceed with any remaining residence permit formalities if required.' }
  ],
  specialRequirements: {
    entry_rules: 'A Type D long-stay visa is required for employment in Albania, which is typically a sticker visa. The Unique Permit (Leje Unike) combines work and residence authorization and is a prerequisite for the Type D visa. Employers must advertise the job role for at least 4 weeks in Albania before hiring a foreign national. Biometrics (fingerprints and photograph) are required for long-stay visa applications. An HIV test is mandatory for stays exceeding 90 days.',
    health_mandates: 'Medical certificate confirming good health and absence of contagious diseases is required. Travel insurance with minimum EUR 30,000 coverage is mandatory.'
  }
};