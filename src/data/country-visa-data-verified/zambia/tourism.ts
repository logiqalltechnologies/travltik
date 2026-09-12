export default {
  country: 'zambia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Zambia in New Delhi',
  channels: ['https://visa.zambia.gov.zm/', 'Embassy of Zambia in New Delhi'],
  processingTime: { eVisa: '3-5 working days', standardSticker: '7-10 working days', expressSticker: '3-5 working days' },
  fees: { eVisaTotal: '$30 USD', stickerConsularStandard: '$30 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://visa.zambia.gov.zm/', territorialScope: 'Nationwide', validity: '30 days', maxStay: '30 days', invitationRequired: false, processing: '3-5 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the date of entry and contain at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via the official eVisa portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or confirmed itinerary.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or accommodation confirmation.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Insurance covering medical expenses of at least USD 30,000 for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3 months showing sufficient funds (minimum USD 100 per day of stay).', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Create eVisa Account', description: 'Register on the official Zambia eVisa portal and verify your email.' },
    { step: 2, title: 'Fill Application Form', description: 'Enter personal details, travel information, and upload required documents.' },
    { step: 3, title: 'Upload Documents', description: 'Attach passport scan, photographs, flight itinerary, accommodation proof, travel insurance, and bank statements.' },
    { step: 4, title: 'Pay eVisa Fee', description: 'Pay the eVisa fee of USD 30 via credit/debit card or online payment gateway.' },
    { step: 5, title: 'Receive eVisa', description: 'After approval, download and print the eVisa. Keep a copy for entry.' },
    { step: 6, title: 'Entry to Zambia', description: 'Present the printed eVisa, passport, and supporting documents at the border.' }
  ],
  specialRequirements: { entry_rules: 'Yellow fever vaccination certificate required for travelers from endemic countries. No additional restrictions for Indian tourists.' },
  statutoryConsularFee: '$30 USD',
  externalServiceProvider: 'Embassy direct',
  maximumPermittedStay: 30
};