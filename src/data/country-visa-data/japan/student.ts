export default {
  country: 'japan',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Japan in New Delhi',
  channels: ['https://www.mofa.go.jp/', 'https://www.vfsglobal.com/Japan/India/', 'https://www.mofa.go.jp/'],
  processingTime: { eVisa: 'N/A', standardSticker: '5 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '500 INR', vfsServiceFee: '600 INR' },
  eVisa: { available: false, portal: '', territorialScope: '', validity: '', maxStay: '', invitationRequired: false, processing: '' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '1550 days', stickerMultiple: 'N/A' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank visa page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the online application form on the official Ministry of Foreign Affairs portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of travel plans.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'University dormitory letter or lease agreement.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Insurance covering medical expenses and repatriation for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3 months showing sufficient funds for tuition and living expenses, or a blocked account statement.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect passport, photographs, admission letter, financial proof, and other supporting documents.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the visa application form on the Ministry of Foreign Affairs portal and print the confirmation page.' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the consular fee (10,000 JPY) and VFS service fee (1,000 JPY) online or at the designated bank.' },
    { step: 4, title: 'Submit Application at VFS', description: 'Schedule an appointment with VFS Global, submit the application packet, and provide biometric data.' },
    { step: 5, title: 'Attend Interview (if required)', description: 'Attend a brief interview at the embassy or consulate if requested.' },
    { step: 6, title: 'Collect Visa Sticker', description: 'Collect the visa sticker from the embassy or receive it by mail within 10 working days.' }
  ],
  specialRequirements: { entry_rules: 'Must hold a valid student visa; no additional restrictions.' }
};