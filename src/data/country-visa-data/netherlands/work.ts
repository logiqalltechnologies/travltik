export default {
  country: 'netherlands',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of the Kingdom of the Netherlands in New Delhi',
  channels: ['https://www.netherlandsworldwide.nl/', 'VFS Global'],
  processingTime: { eVisa: 'N/A', standardSticker: '90 days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '228 EUR', vfsServiceFee: '28 EUR' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '365 days', stickerMultiple: '365 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via the official portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of onward travel.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or employer-provided accommodation details.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds to support stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all mandatory documents including passport, photographs, employment contract, and financial statements.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the visa application form on the official portal and upload scanned copies of documents.' },
    { step: 3, title: 'Pay Visa Fees', description: 'Pay the consular fee (228 EUR) and any applicable VFS service fee (28 EUR) online.' },
    { step: 4, title: 'Book Appointment', description: 'Schedule an appointment at the VFS Global service center or directly at the embassy.' },
    { step: 5, title: 'Attend Interview', description: 'Present documents, attend interview, and provide biometric data if required.' },
    { step: 6, title: 'Collect Visa', description: 'Receive the visa sticker in your passport within the processing time (90 days).'}
  ],
  specialRequirements: { entry_rules: 'Multiple entries allowed within the validity period of the visa.' }
};