export default {
  country: 'south-africa',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of South Africa, New Delhi',
  channels: ['eVisa Portal', 'VFS Global'],
  processingTime: { eVisa: '7-10 working days', standardSticker: '10-15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '0 INR', stickerConsularStandard: '0 INR', vfsServiceFee: '2040 INR' },
  eVisa: { available: true, portal: 'https://evisa.dha.gov.za/', territorialScope: 'Nationwide', validity: '90 days', maxStay: '30 days', invitationRequired: false, processing: '7-10 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: 'Up to 90 days', stickerMultiple: 'Up to 90 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay with at least two blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression, 70-80% face coverage', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed eVisa application form on the official portal or physical Form DHA-84 for sticker visa', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight booking', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or day-by-day itinerary, or invitation letter with host ID and utility bill if staying with a host', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Highly recommended medical insurance covering the duration of stay', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 3 months with bank seal/stamp, showing sufficient funds (minimum 3000 ZAR equivalent)', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Choose Application Channel', description: 'Decide whether to apply online via the official eVisa portal or physically through VFS Global' },
    { step: 2, title: 'Register & Fill Application', description: 'Create an account on the official DHA eVisa portal or complete the physical DHA-84 form' },
    { step: 3, title: 'Prepare Documents', description: 'Gather passport, photographs, financial proof, flight itinerary, and accommodation details' },
    { step: 4, title: 'Submit Application', description: 'Upload documents on the eVisa portal or submit them physically at a VFS Global center' },
    { step: 5, title: 'Pay Service Fees', description: 'The visa fee is gratis (0 INR) for Indian citizens. Pay the VFS service fee only if applying for a sticker visa' },
    { step: 6, title: 'Track & Receive Visa', description: 'Wait for processing (7-10 working days for eVisa, 10-15 working days for sticker) and download/collect your visa' }
  ],
  specialRequirements: { entry_rules: 'Yellow Fever vaccination certificate is mandatory if traveling from or transiting through a yellow fever endemic zone. Unabridged birth certificate containing details of both parents is strictly required for minors under 18.' }
};