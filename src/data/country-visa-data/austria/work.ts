export default {
  country: 'austria',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Austrian Embassy/Consulate in India, VFS Global, and Austrian Residence Authorities (e.g., Public Employment Service - AMS)',
  channels: [
    'VFS Global Application Centres in India',
    'Austrian Embassy / Consulate in India'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '15-30 working days for National D Visa; 8 weeks to 6 months for Residence Permit (e.g., Red-White-Red Card)',
    expressSticker: 'Not explicitly stated for work visas, standard processing applies.'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: 'National D Visa: €150. Residence Permit (e.g., Red-White-Red Card): €120 (application fee) + €20 (issuance) + €20 (personalisation) = €160 total.',
    vfsServiceFee: 'Approximately ₹2,433'
  },
  eVisa: {
    available: false,
    portal: 'Not Applicable',
    territorialScope: 'Not Applicable',
    validity: 'Not Applicable',
    maxStay: 'Not Applicable',
    invitationRequired: false,
    processing: 'Not Applicable'
  },
  stayDuration: {
    eVisa: 'Not Applicable',
    stickerSingleDouble: 'National D Visa: Up to 180 days (6 months). Red-White-Red Card: Up to 24 months (2 years).',
    stickerMultiple: 'National D Visa can be single or multiple entry depending on issuance, valid up to 180 days.'
  },
  entryType: 'Single / Multiple Entry (for National D Visa, depending on issuance)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay with at least 2 blank pages, issued within the last 10 years. Photocopies of front and back pages are required.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (not older than 6 months) passport-size colour photos with a white background, full face visible, and neutral expression, adhering to biometric standards.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Duly completed and signed National Long-Stay Visa (Type D) application form or Residence Permit application form.', icon: '📋', mandatory: true },
    { key: 'work_contract', title: 'Work Contract / Job Offer', description: 'A valid and signed employment contract or binding job offer letter from an Austrian employer, specifying salary, job title, and duration.', icon: '📄', mandatory: true },
    { key: 'qualifications', title: 'Proof of Qualifications & Experience', description: 'Copies of diplomas, degrees, certifications, and work experience letters from previous employers relevant to the job or permit type.', icon: '🎓', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate (PCC)', description: 'A police clearance certificate from India, apostilled/authenticated.', icon: '📜', mandatory: true },
    { key: 'health_insurance', title: 'Travel Medical Insurance', description: 'Medical insurance covering the entire period of stay in Austria and across the Schengen area, with a minimum coverage of €30,000 for medical emergencies, hospitalization, and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Proof of a legal title to locally customary accommodation in Austria (e.g., lease contract, hotel reservation, or invitation letter from host with their proof of residence).', icon: '🏨', mandatory: true },
    { key: 'financial_proof', title: 'Financial Proof', description: 'Personal bank statements for the last 3-6 months, salary slips from the last 3 months, and Income Tax Returns (ITR) for the last 2 years, demonstrating sufficient funds to support your stay.', icon: '🏦', mandatory: true },
    { key: 'flight_itinerary', title: 'Flight Itinerary', description: 'Round-trip flight reservation showing entry and exit dates from the Schengen Area.', icon: '✈️', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'A personal cover letter explaining the purpose of the visit, itinerary, and ties to India.', icon: '📝', mandatory: true },
    { key: 'language_skills', title: 'Proof of Language Skills', description: 'Evidence of German or English language proficiency, if applicable, especially for points-based systems like the Red-White-Red Card.', icon: '🗣️', mandatory: false },
    { key: 'birth_certificate', title: 'Birth Certificate', description: 'Required for children only with first applications.', icon: '👶', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Secure a Job Offer', description: 'Obtain a confirmed job offer and signed employment contract from an Austrian employer.' },
    { step: 2, title: 'Determine Permit Type & Eligibility', description: 'Identify the appropriate residence and work permit (e.g., Red-White-Red Card, EU Blue Card) and ensure you meet the specific eligibility criteria, including any points-based system or salary thresholds.' },
    { step: 3, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents, including certified translations for any non-German documents.' },
    { step: 4, title: 'Submit Residence Permit Application', description: 'The residence permit application can be submitted by your employer in Austria or by you at the competent Austrian representative authority (embassy/consulate) in India.' },
    { step: 5, title: 'Apply for National D Visa (Entry Visa)', description: 'If required, apply for a National Long-Stay Visa (Type D) at the Austrian Embassy or VFS Global to enter Austria and collect your residence permit.' },
    { step: 6, title: 'Book & Attend VFS Appointment', description: 'Schedule an appointment at a VFS Global Application Centre in India for biometric data submission and document submission.' },
    { step: 7, title: 'Await Decision & Receive Clearance', description: 'Track your application and await the decision. Upon approval, you will receive your National D Visa (if applicable) and can then collect your Red-White-Red Card or other residence permit in Austria.' },
    { step: 8, title: 'Register Residence in Austria', description: 'Upon arrival in Austria, register your residence (Meldezettel registration).' }
  ],
  specialRequirements: {
    entry_rules: 'Indian citizens require a combination of an entry visa (National D Visa) and a residence and work permit (such as the Red-White-Red Card or EU Blue Card) to work legally in Austria. The Red-White-Red Card is a points-based system, and a job offer is mandatory for most categories. Minimum salary thresholds and a labor market test may apply. Health insurance must be from an approved list of providers.'
  }
};