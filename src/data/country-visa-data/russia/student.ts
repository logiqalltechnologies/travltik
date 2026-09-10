export default {
  country: 'russia',
  fromCountry: 'India',
  visaCategory: 'Student Visa (Long Stay)',
  authority: 'Ministry of Foreign Affairs of the Russian Federation (MFA) / GUVM MIA',
  channels: ['Russian Visa Application Centre (VFS Global)', 'Consular Section of Russian Embassy'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '7-20 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: 'Single Entry: ₹6,720; Double Entry: ₹10,752',
    vfsServiceFee: '₹1,200 - ₹2,500'
  },
  eVisa: {
    available: false,
    portal: 'https://visa.kdmid.ru',
    territorialScope: 'Nationwide',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: true,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 90 days (Initial entry visa)',
    stickerMultiple: 'Up to 1 year (Extended on arrival, renewable)'
  },
  entryType: 'Single Entry (Converted to Multiple Entry on arrival)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Must be valid for at least 1.5 years (18 months) from the visa issue date, with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Biometric Passport Photographs (35×45mm)', description: 'Two recent color photos, white background, 70-80% face coverage', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Consular Electronic Application Form', description: 'Completed online at visa.kdmid.ru', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Official Study Invitation', description: 'Official invitation issued by the Ministry of Foreign Affairs (MFA) or GUVM MIA on request of the university', icon: '✉️', mandatory: true },
    { key: 'acceptance_letter', title: 'University Admission Letter', description: 'Official admission letter from recognized Russian institution', icon: '🎓', mandatory: true },
    { key: 'hiv_certificate', title: 'HIV/AIDS Test Certificate', description: 'Mandatory HIV-negative certificate issued within 3 months prior to submission', icon: '🩺', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Health certificate confirming no contagious diseases', icon: '🏥', mandatory: true },
    { key: 'travel_insurance', title: 'Medical Travel Insurance', description: 'Minimum €30,000 coverage across Russian Federation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds', icon: '🏦', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking to Russia', icon: '✈️', mandatory: true },
    { key: 'academic_docs', title: 'Academic Transcripts & Certificates', description: 'Apostilled academic certificates and mark sheets', icon: '📄', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain University Invitation', description: 'Secure official MFA or GUVM MIA invitation through university' },
    { step: 2, title: 'Complete Online Application', description: 'Fill application at visa.kdmid.ru' },
    { step: 3, title: 'Prepare Documents', description: 'Gather required documents including HIV test certificate' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at VFS Global' },
    { step: 5, title: 'Receive Visa & Extend', description: 'Collect 90-day visa and apply for multi-entry extension at university migration unit within arrival period' }
  ],
  specialRequirements: {
    entry_rules: 'Passport must be valid for at least 1.5 years. HIV test certificate mandatory. Must register with local migration authorities within 7 business days of arrival.'
  }
};