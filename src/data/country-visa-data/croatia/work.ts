export default {
  country: 'croatia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign and European Affairs of the Republic of Croatia / Embassy of the Republic of Croatia in India / VFS Global',
  channels: ['VFS Global', 'Embassy / Consulate of the Republic of Croatia'],
  processingTime: { standardSticker: '15-30 working days (after work permit approval)' },
  fees: { stickerConsularStandard: '93 EUR', vfsServiceFee: 'INR equivalent of ~25 EUR' },
  eVisa: { available: false },
  stayDuration: { stickerSingleDouble: 'Up to 1 year (renewable)', stickerMultiple: 'Up to 1 year (renewable)' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay with a minimum of two blank pages', icon: 'passport', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent (not older than 6 months) passport-sized photos, white background, matte finish, 80% face coverage', icon: 'photo', mandatory: true },
    { key: 'visa_form', title: 'D-Visa Application Form', description: 'Duly completed and signed long-stay (D-visa) application form', icon: 'form', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Original and copy of the employment contract with a Croatian employer', icon: 'contract', mandatory: true },
    { key: 'work_permit_approval', title: 'Work and Residence Permit Approval', description: 'Decision on approved work and residence permit issued by the Ministry of Interior of the Republic of Croatia', icon: 'approval', mandatory: true },
    { key: 'qualifications', title: 'Proof of Qualifications', description: 'Copies of educational certificates, diplomas, and professional qualifications relevant to the job, apostilled if required', icon: 'certificate', mandatory: true },
    { key: 'cv', title: 'Curriculum Vitae (CV)', description: 'Detailed Curriculum Vitae outlining professional experience and education', icon: 'document', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate (PCC)', description: 'PCC issued by Passport Seva Kendra, apostilled by the Ministry of External Affairs (MEA), not older than 6 months', icon: 'police', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Medical certificate confirming good health and fitness for work, including HIV test results (mandatory for stays exceeding 90 days)', icon: 'health', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Proof of secured accommodation in Croatia (e.g., rental agreement, employer-provided housing letter)', icon: 'hotel', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Comprehensive travel medical insurance covering the initial period of stay in Croatia, valid for all Schengen states, with minimum coverage of 30,000 EUR', icon: 'insurance', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed one-way flight booking to Croatia', icon: 'flight', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Financial Means', description: 'Bank statements for the last 3-6 months showing sufficient funds to cover initial expenses before the first salary, or a letter from the employer guaranteeing financial support', icon: 'bank', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Secure Work Permit Approval', description: 'The employer in Croatia must first obtain a work and residence permit approval from the Ministry of Interior of the Republic of Croatia on your behalf.' },
    { step: 2, title: 'Complete D-Visa Application', description: 'Fill out the long-stay (D-visa) application form accurately, either online or manually, and sign it.' },
    { step: 3, title: 'Gather Required Documents', description: 'Assemble all mandatory documents as per the checklist, ensuring they are valid, apostilled (if required), and translated into Croatian or English by a certified translator.' },
    { step: 4, title: 'Schedule VFS Appointment', description: 'Book an appointment at the nearest VFS Global center for Croatia in India, as they are the authorized visa application center.' },
    { step: 5, title: 'Submit Application and Biometrics', description: 'Attend the scheduled appointment, submit your complete document dossier, provide your biometric data (fingerprints and photo), and pay the consular and VFS service fees.' },
    { step: 6, title: 'Track Application and Receive Visa', description: 'Monitor the status of your visa application through the VFS Global portal and collect your passport with the affixed D-visa once processed and approved.' }
  ],
  specialRequirements: {
    entry_rules: 'All supporting documents not originally in Croatian or English must be accompanied by a certified translation. Certain documents, such as educational certificates and the Police Clearance Certificate, may require an apostille from the Ministry of External Affairs (MEA) in India.'
  }
};