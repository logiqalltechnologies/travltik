export default {
  country: 'georgia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Georgia in New Delhi',
  channels: ['https://visa.gov.ge', 'VFS Global', 'Embassy Direct'],
  externalServiceProvider: 'VFS Global',
  processingTime: { eVisa: 'N/A', standardSticker: '10 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '100 GEL', vfsServiceFee: '50 GEL' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '365 days', stickerMultiple: '365 days' },
  entryType: 'Single',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least two blank pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the online application form on https://visa.gov.ge and print the confirmation.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of onward travel.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or employer-provided accommodation details.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Insurance covering medical expenses up to 30,000 GEL for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds for the stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Collect Required Documents', description: 'Gather all mandatory documents including passport, photographs, employment contract, and financial proof.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the application form on https://visa.gov.ge and print the confirmation page.' },
    { step: 3, title: 'Schedule Appointment', description: 'Book an appointment through VFS Global or submit directly at the Embassy of Georgia in New Delhi.' },
    { step: 4, title: 'Submit Documents and Pay Fees', description: 'Present all documents, pay the visa fee (100 GEL) and VFS service fee (50 GEL) at the appointment.' },
    { step: 5, title: 'Processing', description: 'Wait for the standard processing time of 10 working days (express available in 5 working days).' },
    { step: 6, title: 'Collect Visa', description: 'Collect the stamped visa from the Embassy or receive it via courier if requested.' }
  ],
  specialRequirements: { entry_rules: 'Work visa holders must present a valid employment contract and an invitation letter from the Georgian employer. No tourism entry allowed on a work visa.' }
};