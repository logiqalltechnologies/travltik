export default {
  country: 'russia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa (Long Stay)',
  authority: 'Ministry of Foreign Affairs of the Russian Federation (MFA) / GUVM MIA',
  channels: ['Russian Visa Application Centre (VFS Global)', 'Consular Section of Russian Embassy'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '7-20 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: 'Single Entry: ₹6,720; Double Entry: ₹10,752; Multiple Entry: ₹20,160',
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
    stickerMultiple: 'Up to 1–3 years (Depending on HQS status, renewable)'
  },
  entryType: 'Single Entry (Converted to Multiple Entry on arrival)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Must be valid for at least 1.5 years (18 months) from the visa issue date, with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Biometric Passport Photographs (35×45mm)', description: 'Two recent color photos, white background, 70-80% face coverage', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Consular Electronic Application Form', description: 'Completed online at visa.kdmid.ru', icon: '📋', mandatory: true },
    { key: 'work_permit', title: 'Work Permit Approval', description: 'Official work permit authorization issued by GUVM MIA', icon: '📜', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Signed contract with registered Russian employer', icon: '💼', mandatory: true },
    { key: 'invitation_letter', title: 'Official Work Invitation', description: 'Official invitation issued by GUVM MIA or MFA', icon: '✉️', mandatory: true },
    { key: 'hiv_certificate', title: 'HIV/AIDS Test Certificate', description: 'Mandatory HIV-negative certificate issued within 3 months prior to submission', icon: '🩺', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Health certificate confirming no contagious diseases', icon: '🏥', mandatory: true },
    { key: 'travel_insurance', title: 'Medical Travel Insurance', description: 'Minimum €30,000 coverage across Russian Federation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months', icon: '🏦', mandatory: true },
    { key: 'qualifications', title: 'Educational & Professional Qualifications', description: 'Apostilled degree certificates and experience letters', icon: '🎓', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking to Russia', icon: '✈️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain Work Permit & Invitation', description: 'Employer secures work permit and GUVM MIA invitation in Russia' },
    { step: 2, title: 'Complete Online Application', description: 'Fill application at visa.kdmid.ru' },
    { step: 3, title: 'Prepare Documents', description: 'Gather required documents including HIV test certificate' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at VFS Global' },
    { step: 5, title: 'Receive Visa', description: 'Collect initial single-entry visa and convert to multi-entry work permit extension on arrival' }
  ],
  specialRequirements: {
    entry_rules: 'Passport must be valid for at least 1.5 years. HIV test mandatory. Register with migration authorities within 7 business days of arrival.'
  }
};