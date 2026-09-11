export default {
  country: 'indonesia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Directorate General of Immigration, Ministry of Law and Human Rights Indonesia',
  channels: ['Official e-Visa Portal', 'Embassy Direct'],
  processingTime: { eVisa: '5 working days', standardSticker: '10 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '150 USD', stickerConsularStandard: '150 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://evisa.imigrasi.go.id/', territorialScope: 'National', validity: '90 days', maxStay: '365 days', invitationRequired: true, processing: '5 working days' },
  stayDuration: { eVisa: '365 days', stickerSingleDouble: '365 days', stickerMultiple: '365 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport with at least 6 months validity and 1 blank page', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking to Indonesia', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Employer-provided address or residential agreement', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Employer Sponsorship & Permit', description: 'Indonesian employer secures approved RPTKA and initiates application on the official e-Visa portal' },
    { step: 2, title: 'Complete Online Application', description: 'Employer completes visa application on evisa.imigrasi.go.id uploading worker documents' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the statutory consular fee of 150 USD via official online payment gateway' },
    { step: 4, title: 'e-Visa Approval', description: 'Receive approved e-Visa via email within approximately 5 working days' },
    { step: 5, title: 'Travel to Indonesia', description: 'Travel to Indonesia presenting valid passport and approved e-Visa' },
    { step: 6, title: 'Biometrics & ITAS Issuance', description: 'Report to local immigration office in Indonesia to complete biometrics and obtain Limited Stay Permit (ITAS)' }
  ],
  specialRequirements: { entry_rules: 'Work visa requires Indonesian employer sponsorship, valid foreign worker utilization plan (RPTKA), and ITAS conversion upon arrival.' }
};