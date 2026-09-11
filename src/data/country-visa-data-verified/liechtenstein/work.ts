export default {
  country: 'liechtenstein',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ausländer- und Passamt (APA) Liechtenstein / Embassy of Switzerland in India',
  channels: ['VFS Global (Switzerland)', 'Embassy of Switzerland in New Delhi', 'Ausländer- und Passamt Liechtenstein'],
  processingTime: { eVisa: 'N/A', standardSticker: '60 to 90 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '90 EUR', vfsServiceFee: 'INR 1,980' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'Up to 1 year (renewable based on work permit)', stickerMultiple: 'Up to 1 year (renewable based on work permit)' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport valid for at least 6 months beyond intended stay with minimum 2 blank pages', icon: 'passport', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: '3 recent photographs (35x45mm), white background, taken within last 6 months', icon: 'photo', mandatory: true },
    { key: 'visa_form', title: 'National Visa D Application Form', description: 'Three fully completed and signed National Visa D application forms', icon: 'form', mandatory: true },
    { key: 'work_approval', title: 'APA Work Permit Pre-Approval', description: 'Official pre-approval certificate or authorization issued by the Liechtenstein Migration and Passport Office (Ausländer- und Passamt)', icon: 'file-text', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Signed employment agreement specifying job title, salary, and employment duration in Liechtenstein', icon: 'briefcase', mandatory: true },
    { key: 'qualifications', title: 'Professional & Academic Credentials', description: 'Attested educational diplomas, CV/Resume, and relevant professional experience certificates', icon: 'award', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate (PCC)', description: 'Official PCC issued by Indian Regional Passport Office, legalized or apostilled', icon: 'shield-check', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Lease agreement, rental contract, or official hotel/housing confirmation in Liechtenstein', icon: 'hotel', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Comprehensive medical insurance covering initial arrival period with minimum EUR 30,000 coverage', icon: 'insurance', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'One-way or return flight reservation showing entry route into the Schengen zone', icon: 'flight', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Employer Applies for Permit in Liechtenstein', description: 'The employer files the work permit request directly with the Ausländer- und Passamt (APA) in Liechtenstein.' },
    { step: 2, title: 'Receive Authorization & Prepare Dossier', description: 'Once APA pre-approval is issued, assemble all mandatory National Visa D documents and legalized certificates.' },
    { step: 3, title: 'Schedule Appointment', description: 'Book a long-stay visa appointment at the Switzerland VFS Global center representing Liechtenstein in India.' },
    { step: 4, title: 'Submit Biometrics & Pay Fees', description: 'Attend the appointment to submit physical documents, record biometric data, and pay the 90 EUR consular fee.' },
    { step: 5, title: 'Passport Retrieval & Residence Registration', description: 'Collect stamped passport with National Visa D and register with the local municipality upon arrival in Liechtenstein within 8 days.' }
  ],
  specialRequirements: { entry_rules: 'Work visa authorization requires primary clearance from the Liechtenstein Migration and Passport Office (APA) prior to visa sticker issuance by the Embassy of Switzerland.' }
};