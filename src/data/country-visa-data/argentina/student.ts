export default {
  country: 'argentina',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Argentina in New Delhi',
  channels: ['https://eindi.mrecic.gov.ar', 'https://www.migraciones.gov.ar'],
  processingTime: { eVisa: 'N/A', standardSticker: '15-30 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '250 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: true, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'Up to 1 year', stickerMultiple: 'Up to 1 year' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least two blank visa pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (40x40mm)', description: 'White background, front view, without glasses, recent.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete and sign the visa application form.', icon: '📋', mandatory: true },
    { key: 'renure_enrollment', title: 'Electronic Admission Certificate (RENURE)', description: 'Proof of enrollment issued by the educational institution in Argentina, registered with the National Registry of Petitioners on behalf of Foreign Technical Personnel (RENURE).', icon: '🎓', mandatory: true },
    { key: 'pcc', title: 'Police Clearance Certificate (PCC)', description: 'Apostilled Police Clearance Certificate issued by regional passport office, required for applicants aged 16 and older.', icon: '🛡️', mandatory: true },
    { key: 'birth_certificate', title: 'Birth Certificate', description: 'Apostilled birth certificate translated into Spanish.', icon: '👶', mandatory: true },
    { key: 'financial_proof', title: 'Financial Proof', description: 'Documents proving sufficient financial means to cover study and living expenses (bank statements, international credit cards, or scholarship proof).', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Secure University Enrollment', description: 'Obtain formal admission from an authorized Argentine educational institution registered with RENURE.' },
    { step: 2, title: 'Prepare and Legalize Documents', description: 'Gather all required documents, ensuring the PCC and Birth Certificate are apostilled and translated into Spanish.' },
    { step: 3, title: 'Request Appointment', description: 'Contact the Embassy of Argentina in New Delhi or the Consulate General in Mumbai directly via email to request a student visa interview.' },
    { step: 4, title: 'Pay Consular Fee', description: 'Pay the consular fee of 250 USD as instructed by the Embassy/Consulate.' },
    { step: 5, title: 'Attend Visa Interview', description: 'Present all original documents and undergo a personal interview at the Embassy or Consulate.' },
    { step: 6, title: 'Receive Visa', description: 'Collect your passport with the student visa sticker once processing is complete.' }
  ],
  specialRequirements: { entry_rules: 'Host institution must be registered with RENURE. Police Clearance Certificate (PCC) with an Apostille is mandatory. All non-Spanish documents must be translated by a certified translator.' }
};