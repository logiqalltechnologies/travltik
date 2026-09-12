export default {
  country: 'afghanistan',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Afghanistan, New Delhi',
  externalServiceProvider: 'Embassy direct',
  channels: ['https://visa.afghanembassy.gov.af/visa', 'N/A', 'Embassy of Afghanistan, New Delhi'],
  processingTime: { eVisa: '3-5 working days', standardSticker: 'N/A', expressSticker: 'N/A' },
  fees: { eVisaTotal: '30 USD', stickerConsularStandard: 'N/A', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://visa.afghanembassy.gov.af/visa', territorialScope: 'Nationwide', validity: '30 days', maxStay: '30 days', invitationRequired: false, processing: '3-5 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: 'N/A', stickerMultiple: 'N/A' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay with at least one blank page', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or host invitation letter', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Create Account', description: 'Register on the official e-visa portal' },
    { step: 2, title: 'Fill Application', description: 'Enter personal details, travel plans, and upload required documents' },
    { step: 3, title: 'Pay Fee', description: 'Pay the e-visa fee online via credit/debit card' },
    { step: 4, title: 'Receive e-visa', description: 'Download the approved e-visa PDF and print it' },
    { step: 5, title: 'Travel to Afghanistan', description: 'Carry the printed e-visa and all supporting documents for entry' }
  ],
  specialRequirements: { entry_rules: 'No additional entry rules. No health mandates for Afghanistan.' }
};