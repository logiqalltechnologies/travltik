export default {
  country: 'ecuador',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Ecuador in New Delhi',
  channels: ['https://www.embassyofecuador.in/visa', 'Embassy of Ecuador, New Delhi'],
  processingTime: { eVisa: 'N/A', standardSticker: '10 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '100 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: true, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Must be valid for at least 6 months beyond the intended stay and contain at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the online application form on the embassy portal and print the confirmation.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of travel plans.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from family member in Ecuador with address and contact details.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements (last 3 months) showing sufficient funds for the stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents listed above.' },
    { step: 2, title: 'Complete Application', description: 'Fill out the visa application form on the embassy portal and print the confirmation page.' },
    { step: 3, title: 'Schedule Appointment', description: 'Book an appointment at the Embassy of Ecuador in New Delhi.' },
    { step: 4, title: 'Submit Application', description: 'Present the documents and pay the consular fee (100 USD).' },
    { step: 5, title: 'Processing', description: 'Wait for the standard processing time of 10 working days (express 5 working days).' },
    { step: 6, title: 'Collect Visa', description: 'Collect the visa sticker from the embassy or receive it by mail if applicable.' }
  ],
  specialRequirements: { entry_rules: 'No Schengen or US rules apply. Yellow fever vaccination not required for Ecuador. No HIV test required. Must have an invitation letter from a family member in Ecuador, proof of relationship, and financial proof.' }
};