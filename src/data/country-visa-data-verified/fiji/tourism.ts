export default {
  country: 'fiji',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Fiji Ministry of Foreign Affairs and Trade',
  channels: ['https://visa.fiji.gov.fj', 'https://www.vfsglobal.com/Fiji/India', 'https://www.fijiembassy.in'],
  externalServiceProvider: 'VFS Global',
  processingTime: { eVisa: '3 working days', standardSticker: '10-15 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: '$50 USD', stickerConsularStandard: '$50 USD', vfsServiceFee: '$30 USD' },
  eVisa: { available: true, portal: 'https://visa.fiji.gov.fj', territorialScope: 'Nationwide', validity: '30 days', maxStay: '30 days', invitationRequired: false, processing: '3 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the date of entry and have at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the online eVisa application on the official portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or confirmed itinerary.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter with address.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage of at least $30,000 for medical expenses and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3 months showing sufficient funds.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents listed above.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the eVisa application on https://visa.fiji.gov.fj.' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the eVisa fee of $50 USD via the online payment portal.' },
    { step: 4, title: 'Receive eVisa', description: 'Download and print the eVisa once approved (processing 3 working days).' },
    { step: 5, title: 'Travel to Fiji', description: 'Carry the printed eVisa and all supporting documents for entry.' }
  ],
  specialRequirements: { entry_rules: 'No vaccination or health mandates required for tourism stays.' }
};