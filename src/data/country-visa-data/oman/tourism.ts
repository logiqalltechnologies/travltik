export default {
  country: 'oman',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Royal Oman Police',
  channels: ['https://evisa.rop.gov.om/', 'Embassy of Oman in New Delhi'],
  processingTime: { eVisa: '1-3 working days', standardSticker: '5-7 working days', expressSticker: '3-5 working days' },
  fees: { eVisaTotal: '20 OMR', stickerConsularStandard: '20 OMR', vfsServiceFee: '0 OMR' },
  eVisa: { available: true, portal: 'https://evisa.rop.gov.om/', territorialScope: 'Nationwide', validity: '30 days', maxStay: '30 days', invitationRequired: false, processing: '1-3 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the date of entry and contain at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the online application form on the official Royal Oman Police portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from a host in Oman.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation during stay in Oman.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3 months showing sufficient funds.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Check Eligibility', description: 'Ensure passport validity and gather required documents.' },
    { step: 2, title: 'Apply Online', description: 'Fill out the eVisa application on the official Royal Oman Police portal (evisa.rop.gov.om) and upload documents.' },
    { step: 3, title: 'Pay Fees', description: 'Pay the eVisa fee (20 OMR) online using a credit or debit card.' },
    { step: 4, title: 'Receive eVisa', description: 'Download and print the eVisa approval letter before travel.' },
    { step: 5, title: 'Travel to Oman', description: 'Present the printed eVisa and supporting documents upon arrival.' }
  ],
  specialRequirements: { entry_rules: 'Ensure passport validity of at least 6 months from entry date; Indian nationals holding valid visa/residence permits from US, UK, Canada, Japan, Australia, NZ or Schengen countries may also be eligible for un-sponsored eVisa or Visa on Arrival.' }
};