export default {
  country: 'lithuania',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Lithuanian Embassy in New Delhi / Migration Department (MIGRIS)',
  channels: ['https://migris.lrv.lt', 'VFS Global Service Center'],
  processingTime: { eVisa: 'N/A', standardSticker: '15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '140 EUR', vfsServiceFee: '15.90 EUR' },
  eVisa: { available: false, portal: 'https://migris.lrv.lt', territorialScope: 'Nationwide', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'Up to 1 year', stickerMultiple: 'Up to 1 year' },
  entryType: 'Multiple',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport issued within the last 10 years, valid for at least 3 months beyond the intended visa validity, containing at least 2 blank pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, light neutral expression.', icon: '📸', mandatory: true },
    { key: 'migris_application', title: 'MIGRIS Application Form', description: 'Completed and printed electronic application submitted via the Lithuanian MIGRIS portal (migris.lrv.lt).', icon: '📋', mandatory: true },
    { key: 'mediation_letter', title: 'Mediation Letter Number', description: 'Electronic mediation letter issued by the Lithuanian Higher Education Institution through MIGRIS.', icon: '🎓', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Sufficient Funds', description: 'Bank statement showing sufficient living funds (at least 0.5 minimum monthly wage per month of stay) and funds for return travel.', icon: '🏦', mandatory: true },
    { key: 'travel_insurance', title: 'Medical Health Insurance', description: 'Valid health insurance covering at least 30,000 EUR for medical emergency and repatriation.', icon: '🛡️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain University Admission', description: 'Secure admission and request the educational institution to submit an electronic Mediation Letter on MIGRIS.' },
    { step: 2, title: 'Complete MIGRIS Application', description: 'Fill out the National Visa (D) application on the official MIGRIS portal (https://migris.lrv.lt).' },
    { step: 3, title: 'Book Appointment', description: 'Schedule a visa appointment at the nearest VFS Global Application Centre in India.' },
    { step: 4, title: 'Submit Documents & Biometrics', description: 'Attend the VFS appointment to submit original documents, provide biometrics, and pay visa fees.' },
    { step: 5, title: 'Receive Decision', description: 'Processing takes approximately 15 calendar days. Collect your passport containing the National Visa D sticker.' }
  ],
  specialRequirements: { entry_rules: 'Students must apply for a Temporary Residence Permit (TRP) or National Visa (D) prior to arrival depending on program length.' }
};