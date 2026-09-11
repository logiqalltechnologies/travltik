export default {
  country: 'netherlands',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Netherlands Ministry of Foreign Affairs',
  channels: ['https://consular.mfa.nl/', 'https://www.vfsglobal.com/Netherlands/India/', 'https://www.netherlandsworldwide.nl/'],
  processingTime: { eVisa: 'N/A', standardSticker: '15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '90 EUR', vfsServiceFee: '30 EUR' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '90 days within any 180-day period', stickerMultiple: '90 days within any 180-day period' },
  entryType: 'Single, Double, or Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 3 months beyond the intended departure from the Schengen area, with at least 2 blank pages, and issued within the last 10 years', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, compliant with Schengen specifications, taken within the last 6 months', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed and signed Schengen visa application form, filled online via the consular portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Round-trip flight reservation or detailed travel itinerary', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation, rental agreement, or official sponsorship/invitation form if staying with a host', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Schengen-compliant travel medical insurance with minimum coverage of €30,000, valid for the entire stay and covering medical repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements for the last 3 months showing sufficient funds (minimum €55 per day of stay in the Netherlands)', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete Online Application', description: 'Fill out the Schengen visa application form on the official Netherlands consular portal (consular.mfa.nl) and print the completed form' },
    { step: 2, title: 'Book Appointment', description: 'Schedule an appointment for document submission and biometrics at the nearest VFS Global visa application centre' },
    { step: 3, title: 'Submit Application & Biometrics', description: 'Attend your appointment at VFS Global, submit the printed form, physical documents, and register biometric data (fingerprints and photo)' },
    { step: 4, title: 'Pay Fees', description: 'Pay the visa fee (90 EUR) and VFS service fee (approx. 30 EUR) at the application centre' },
    { step: 5, title: 'Processing', description: 'Wait for consular processing, which typically takes up to 15 calendar days' },
    { step: 6, title: 'Collect Passport', description: 'Collect your passport with the visa sticker from VFS Global or receive it via courier' }
  ],
  specialRequirements: { entry_rules: 'Maximum stay of 90 days within any 180-day period across the Schengen Area. No employment or study allowed under a tourist visa.' }
};