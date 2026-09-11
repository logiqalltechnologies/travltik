export default {
  country: 'usa',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'U.S. Embassy & Consulates in India',
  channels: ['https://ceac.state.gov/CEAC/', 'https://www.usvisascheduling.com/', 'https://in.usembassy.gov/'],
  processingTime: { eVisa: 'N/A', standardSticker: '3-5 working days (post-interview)', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '185 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '180 days', stickerMultiple: '180 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (2x2 inches / 51x51 mm)', description: 'White background, 6 months recent, neutral expression, no eyeglasses.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete DS-160 via CEAC portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Proof of onward travel (Note: US Embassy advises not to purchase non-refundable tickets before visa approval).', icon: '✈️', mandatory: false },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation, address of stay, or invitation letter.', icon: '🏨', mandatory: false },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation (recommended but not legally mandatory).', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete DS-160', description: 'Fill out the online application form on the CEAC portal and print the confirmation page.' },
    { step: 2, title: 'Pay MRV Fee', description: 'Pay the 185 USD MRV fee online through the official scheduling portal and keep the receipt.' },
    { step: 3, title: 'Schedule Appointments', description: 'Book two appointments through the US Visa Scheduling portal: one for biometrics at the Visa Application Center (VAC) and one for the consular interview.' },
    { step: 4, title: 'Attend Interview', description: 'Attend the interview at the U.S. Embassy/Consulate with all required documents and passport.' }
  ],
  specialRequirements: { entry_rules: 'No specific entry rules for tourism; must comply with standard B1/B2 regulations. Final stay duration is determined by CBP officers at the port of entry.' }
};