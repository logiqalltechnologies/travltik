export default {
  country: 'iraq',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Iraq in New Delhi',
  channels: ['https://visa.iraq.gov.iq/', 'https://embassyofiraq.gov.in/'],
  processingTime: { eVisa: '5 working days', standardSticker: '10 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: '100 USD', stickerConsularStandard: '100 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://visa.iraq.gov.iq/', territorialScope: 'Nationwide', validity: '90 days', maxStay: '30 days', invitationRequired: true, processing: '5 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of onward travel', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter with host details', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation, minimum 30,000 USD', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents including passport, photographs, flight itinerary, accommodation proof, travel insurance, bank statements, and business invitation letter.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the eVisa application form on the official portal and upload scanned copies of documents.' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the eVisa fee of 100 USD via the portal’s payment gateway. For consular visa, pay 100 USD directly to the embassy.' },
    { step: 4, title: 'Submit Application', description: 'Submit the application and wait for processing. Processing time is 5 working days for eVisa.' },
    { step: 5, title: 'Receive Visa and Travel', description: 'Print the eVisa approval letter and travel to Iraq. For consular visa, collect the stamped passport from the embassy.' }
  ],
  specialRequirements: { entry_rules: 'Business invitation letter required. No Schengen or US rules apply.' }
};