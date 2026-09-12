export default {
  country: 'cuba',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Republic of Cuba in New Delhi',
  channels: ['Embassy of the Republic of Cuba in New Delhi'],
  processingTime: { eVisa: 'N/A', standardSticker: '10 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '$100 USD' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: true, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '30 days', stickerMultiple: 'N/A' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay, with at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression, 2 copies.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed application form.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking showing dates of entry and exit.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from a Cuban resident with details of stay.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Insurance covering medical expenses of at least $30,000 for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements for the last 3 months showing sufficient funds for the trip.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all mandatory documents listed above.' },
    { step: 2, title: 'Complete Application Form', description: 'Fill out the visa application form.' },
    { step: 3, title: 'Schedule Appointment', description: 'Book an appointment at the Embassy of the Republic of Cuba in New Delhi for submission.' },
    { step: 4, title: 'Submit Application and Pay Fees', description: 'Present documents in person and pay the visa fee ($100 USD).' },
    { step: 5, title: 'Processing', description: 'Wait for the standard processing time of 10 working days (express 5 working days if requested).' },
    { step: 6, title: 'Collect Visa', description: 'Collect the stamped visa from the embassy or receive it via courier if applicable.' }
  ],
  specialRequirements: { entry_rules: 'No additional health mandates. No yellow fever vaccine required. No HIV test required.' }
};