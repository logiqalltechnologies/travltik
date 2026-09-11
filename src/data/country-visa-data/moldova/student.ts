export default {
  country: 'moldova',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Moldova in New Delhi',
  channels: ['https://evisa.gov.md', 'https://india.mfa.gov.md'],
  processingTime: { eVisa: '10 working days', standardSticker: '10 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: '40 EUR', stickerConsularStandard: '40 EUR', vfsServiceFee: '0 EUR' },
  eVisa: { available: true, portal: 'https://evisa.gov.md', territorialScope: 'Nationwide', validity: 'Up to 1 year', maxStay: '90 days', invitationRequired: false, processing: '10 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 3 months beyond the intended visa expiry date, with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal (evisa.gov.md)', icon: '📋', mandatory: true },
    { key: 'admission_letter', title: 'Letter of Admission', description: 'Official confirmation letter from an accredited educational institution in Moldova', icon: '🎓', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Flight reservation or proof of transport to Moldova', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Dormitory confirmation, host declaration, or rental contract in Moldova', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Coverage for medical expenses and repatriation, minimum 30,000 EUR coverage', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Proof of sufficient financial means for study and living expenses in Moldova', icon: '🏦', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: 'Duly apostilled/legalized clean criminal record certificate from India', icon: '📜', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect university admission letter, police clearance, accommodation, and financial records' },
    { step: 2, title: 'Submit Online Application', description: 'Complete the Type D study visa application on official portal (evisa.gov.md)' },
    { step: 3, title: 'Pay Statutory Consular Fee', description: 'Pay the consular fee (40 EUR) online' },
    { step: 4, title: 'Consular Processing', description: 'Wait for application processing by Moldovan consular officers (approx. 10 working days)' },
    { step: 5, title: 'Receive Visa / eVisa', description: 'Download approved eVisa or follow Embassy instructions for endorsement' },
    { step: 6, title: 'Residence Permit Conversion', description: 'Upon arrival in Moldova, register with the General Inspectorate for Migration to receive a Temporary Residence Permit' }
  ],
  specialRequirements: { entry_rules: 'Type D visa permits entry up to 90 days. Students must apply for a Temporary Residence Permit (Permis de ședere) with the General Inspectorate for Migration (IGM) within their initial stay period.' }
};