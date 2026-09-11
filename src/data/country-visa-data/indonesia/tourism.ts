export default {
  country: 'indonesia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Indonesia in New Delhi',
  channels: ['https://evisa.imigrasi.go.id/', 'Embassy of Indonesia in New Delhi'],
  processingTime: { eVisa: '1-3 working days', standardSticker: '7-10 working days', expressSticker: '3-5 working days' },
  fees: { eVisaTotal: '500,000 IDR', stickerConsularStandard: '500,000 IDR', vfsServiceFee: '0 INR' },
  eVisa: { available: true, portal: 'https://evisa.imigrasi.go.id/', territorialScope: 'Nationwide', validity: '90 days', maxStay: '30 days', invitationRequired: false, processing: '1-3 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '60 days', stickerMultiple: '60 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport with at least 6 months validity beyond intended stay and at least one blank page', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed via official eVisa portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking confirmation or invitation letter', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses during stay', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds (minimum USD 2,000 balance)', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Create an account on the official eVisa portal', description: 'Register with your email and create a password at https://evisa.imigrasi.go.id/.' },
    { step: 2, title: 'Fill out the eVisa application form', description: 'Enter personal details, travel information, and upload required documents.' },
    { step: 3, title: 'Upload supporting documents', description: 'Attach passport scan, photographs, flight itinerary, accommodation proof, travel insurance, and bank statements.' },
    { step: 4, title: 'Pay the eVisa fee online', description: 'Use credit/debit card to pay the fee of IDR 500,000.' },
    { step: 5, title: 'Receive eVisa via email', description: 'Download and print the eVisa for travel.' },
    { step: 6, title: 'Arrive in Indonesia and present eVisa', description: 'Show eVisa and passport at immigration.' }
  ],
  specialRequirements: { entry_rules: 'No additional entry restrictions; must have valid eVisa or sticker visa; no Schengen or US rules apply.' }
};