export default {
  country: 'new-zealand',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'New Zealand Immigration New Zealand',
  channels: ['https://www.immigration.govt.nz/new-zealand-visas', 'Embassy Direct'],
  externalServiceProvider: 'Embassy Direct',
  processingTime: { eVisa: '20 working days', standardSticker: '30 working days', expressSticker: '15 working days' },
  fees: { eVisaTotal: 'NZ$ 165', stickerConsularStandard: 'NZ$ 210', vfsServiceFee: 'N/A' },
  eVisa: {
    available: true,
    portal: 'https://www.immigration.govt.nz/new-zealand-visas/apply-for-visa',
    territorialScope: 'Nationwide',
    validity: '6 months',
    maxStay: '270 days',
    invitationRequired: true,
    processing: '20 working days'
  },
  stayDuration: { eVisa: '270 days', stickerSingleDouble: '270 days', stickerMultiple: '270 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via Immigration NZ portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of travel plans', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or invitation letter with address', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Create an account on Immigration NZ portal', description: 'Register with your email and create a password' },
    { step: 2, title: 'Complete the online application', description: 'Fill in personal details, travel information, and upload required documents' },
    { step: 3, title: 'Pay the visa fee', description: 'Pay NZ$ 165 via credit/debit card or other accepted methods' },
    { step: 4, title: 'Submit application', description: 'Review all information and submit for processing' },
    { step: 5, title: 'Await decision', description: 'Processing takes up to 20 working days; you will receive an eVisa via email' },
    { step: 6, title: 'Print eVisa and travel', description: 'Print the eVisa confirmation and carry it with your passport when traveling' }
  ],
  specialRequirements: { entry_rules: 'Must provide a valid invitation letter from a New Zealand resident and proof of relationship. No Schengen or US rules apply.' }
};