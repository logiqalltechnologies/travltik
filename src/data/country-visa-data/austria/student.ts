export default {
  country: 'austria',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Austrian Embassy in New Delhi / Austrian Immigration Authorities',
  channels: [
    'Austrian Embassy in New Delhi',
    'VFS Global Visa Application Centres'
  ],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '2-5 working days (for Visa D issuance after Residence Permit approval)',
    expressSticker: 'Not officially stated for student D-Visa, but some sources mention priority processing for general student visas can be 5 days'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€150 for Visa D (~₹13,500) + €160 for Residence Permit (~₹14,400)', // Assuming 1 EUR = 90 INR for approximation
    vfsServiceFee: 'Applicable outsourced service fee (varies by VFS Global, typically separate from consular fee)'
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
    stickerSingleDouble: 'Up to 6 months (for Visa D, for entry to apply for Residence Permit)',
    stickerMultiple: 'N/A (Visa D is typically single/limited entry; Residence Permit allows long-term stay)'
  },
  entryType: 'Single Entry (for Visa D)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay (for Visa D) or 12 months beyond planned stay (for Residence Permit) with at least 2 blank pages, issued within the previous 10 years.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (within 6 months) biometric passport-sized photographs with a white background.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Duly completed and signed application form for Visa D and the Residence Permit application form (Antrag).', icon: '📋', mandatory: true },
    { key: 'admission_letter', title: 'University Admission Letter', description: 'Original official admission letter (Zulassungsbescheid) from a recognized Austrian university or higher education institution.', icon: '🎓', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Financial Means', description: 'Evidence of sufficient funds to cover living expenses. This can include recent bank statements, scholarship confirmation letters, a blocked account statement, or an education loan. Required amounts are approximately €12,000 per year (€1,000 per month) for students 24 or older, or €6,000 per year for students under 24 with parental guarantee.', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Proof of accommodation in Austria, such as a dormitory acceptance letter, rental agreement, or hotel booking for the initial period.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Health Insurance', description: 'For entry (Visa D), travel health insurance valid throughout the Schengen area with a minimum coverage of €30,000, including repatriation and emergency medical treatment. For the Residence Permit, comprehensive "all risks" health insurance equivalent to Austrian social security coverage (e.g., ÖGK student self-insurance) is required.', icon: '🛡️', mandatory: true },
    { key: 'academic_transcripts', title: 'Academic Transcripts and Certificates', description: 'Relevant academic records, transcripts, and certificates, often requiring apostille or attestation.', icon: '📜', mandatory: true },
    { key: 'language_proficiency', title: 'Language Proficiency Certificate', description: 'Proof of German or English language proficiency, depending on the medium of instruction (e.g., IELTS/TOEFL for English, Goethe-Institut/OeSD for German).', icon: '🗣️', mandatory: true },
    { key: 'statement_of_purpose', title: 'Statement of Purpose (SOP)', description: 'A letter explaining your academic purpose and intent to study in Austria.', icon: '📝', mandatory: true },
    { key: 'police_clearance_certificate', title: 'Police Clearance Certificate (PCC)', description: 'An apostilled Police Clearance Certificate.', icon: '👮', mandatory: true },
    { key: 'flight_itinerary', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservations or travel itinerary.', icon: '✈️', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'A personal cover letter explaining the purpose of your trip and study plans.', icon: '✉️', mandatory: true },
    { key: 'previous_passports', title: 'Previous Passports', description: 'All previous passports, if applicable.', icon: '🛂', mandatory: false },
    { key: 'birth_certificate', title: 'Birth Certificate', description: 'Apostilled Birth Certificate.', icon: '👶', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Secure University Admission', description: 'Obtain a confirmed admission letter from an accredited Austrian educational institution.' },
    { step: 2, title: 'Prepare Documentation', description: 'Gather all mandatory documents, ensuring they are complete, translated (if necessary), and apostilled/attested as required.' },
    { step: 3, title: 'Arrange Finances and Accommodation', description: 'Ensure you have sufficient financial proof and confirmed accommodation in Austria.' },
    { step: 4, title: 'Book Appointment for Residence Permit', description: 'Schedule an appointment with the Austrian Embassy in New Delhi (or VFS Global, if directed by the Embassy) for the Residence Permit application.' },
    { step: 5, title: 'Submit Residence Permit Application & Biometrics', description: 'Attend the appointment, submit your Residence Permit application, and provide biometrics.' },
    { step: 6, title: 'Await Residence Permit Approval', description: 'Wait for the decision on your Residence Permit application from the Austrian authorities. This can take 6-12 weeks or longer.' },
    { step: 7, title: 'Apply for Visa D', description: 'Once your Residence Permit is approved, the Embassy will instruct you to apply for a Visa D (National Visa) for entry into Austria. This is typically done at VFS Global.' },
    { step: 8, title: 'Collect Visa D', description: 'Collect your passport with the affixed Visa D sticker.' },
    { step: 9, title: 'Travel to Austria', description: 'Enter Austria using your Visa D.' },
    { step: 10, title: 'Register Address (Meldezettel)', description: 'Within 3 days of arrival, register your address with the local municipality (Meldeamt) to obtain a Meldezettel.' },
    { step: 11, title: 'Open Austrian Bank Account & Deposit Funds', description: 'If required, open an Austrian bank account and deposit the necessary funds within two weeks of arrival, then send proof to the district authority.' },
    { step: 12, title: 'Collect Residence Permit Card', description: 'Follow instructions from the district authority to collect your physical Residence Permit card.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian students must first apply for a Residence Permit (Aufenthaltsbewilligung Studierende) from India. Once approved, they apply for a Visa D (National Visa) for entry into Austria. The Visa D is a temporary entry visa, and the Residence Permit grants long-term legal residence for study purposes. The overall processing time for the Residence Permit can range from 6 to 16 weeks. Students are generally allowed to work up to 20 hours per week with a student residence permit. No specific HIV test requirement was found in official sources for Austria student visas. Yellow Fever vaccination is not required for travelers from India to Austria.'
  }
};