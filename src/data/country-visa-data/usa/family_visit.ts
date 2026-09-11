export default {
  country: 'usa',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'U.S. Embassy & Consulates in India',
  channels: ['https://ceac.state.gov/CEAC', 'https://www.usvisascheduling.com'],
  processingTime: { eVisa: 'N/A', standardSticker: '3-5 working days (after interview)', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '185 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '180 days', stickerMultiple: '180 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (2x2 inches / 51x51mm)', description: 'White background, 6 months recent, neutral expression, no glasses.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete DS-160 online form and print the confirmation page.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Proof of travel plans (reservation only; purchasing tickets is not recommended before visa approval).', icon: '✈️', mandatory: false },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from family in the U.S.', icon: '🏨', mandatory: false },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Recommended medical insurance coverage for the duration of stay.', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds to cover all expenses during the stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete DS-160', description: 'Fill out the DS-160 form online and print the confirmation page.' },
    { step: 2, title: 'Pay MRV Fee', description: 'Create an account on the US Visa Scheduling portal and pay the 185 USD MRV fee.' },
    { step: 3, title: 'Schedule Appointments', description: 'Book two appointments: one for biometrics at the Visa Application Center (VAC) and one for the visa interview at the Embassy/Consulate.' },
    { step: 4, title: 'Attend Biometrics and Interview', description: 'Attend the VAC appointment for fingerprints and photo, then the interview at the U.S. Embassy/Consulate.' },
    { step: 5, title: 'Receive Visa', description: 'After approval, collect your passport with the visa sticker or have it delivered via courier.' }
  ],
  specialRequirements: { entry_rules: 'The actual duration of stay (up to 180 days) is determined by the CBP officer at the port of entry.' }
};