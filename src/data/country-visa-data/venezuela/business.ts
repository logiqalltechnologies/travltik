export default {
  country: 'venezuela',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Venezuela in New Delhi',
  channels: ['https://www.embassyofvenezuela.org.in/visa/', 'Embassy Direct'],
  processingTime: { eVisa: 'N/A', standardSticker: '15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '150 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '90 days', stickerMultiple: '180 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport with at least 6 months validity and 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the visa application form available on the embassy website', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from Venezuelan business partner', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Minimum coverage of 30,000 USD for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3 months showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents as listed above' },
    { step: 2, title: 'Complete Application', description: 'Fill out the visa application form on the embassy portal' },
    { step: 3, title: 'Submit Application', description: 'Submit the application and documents in person at the Embassy of Venezuela in New Delhi' },
    { step: 4, title: 'Pay Visa Fee', description: 'Pay the consular fee of 150 USD at the embassy counter' },
    { step: 5, title: 'Processing', description: 'Wait for the standard processing time of 15 working days' },
    { step: 6, title: 'Collect Visa', description: 'Collect the stamped visa from the embassy upon approval' }
  ],
  specialRequirements: { entry_rules: 'Yellow fever vaccination certificate required as Venezuela is endemic. No Schengen or US rules apply. HIV test not required for business visa.' }
};