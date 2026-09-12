export default {
  country: 'jamaica',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Jamaica Ministry of Labour and Social Security',
  channels: ['https://www.jamaica.gov.jm/visa', 'https://www.vfsglobal.com/Jamaica/India/', 'https://www.embassyofjamaica.gov.jm/'],
  processingTime: { eVisa: 'N/A', standardSticker: '10-15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '50 USD', vfsServiceFee: '1500 INR' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Single',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay, with at least 2 blank pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via the official portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or employer-provided accommodation details.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds for the stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all mandatory documents listed above, ensuring they meet the specified criteria.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the work visa application form on the official Jamaican visa portal and upload scanned copies of documents.' },
    { step: 3, title: 'Pay Visa Fees', description: 'Submit the consular fee of 50 JMD via the portal or at the embassy; no VFS service fee applies.' },
    { step: 4, title: 'Schedule Appointment', description: 'Book an appointment at the nearest Jamaican embassy or consulate for biometric capture and interview.' },
    { step: 5, title: 'Await Processing', description: 'Processing typically takes 10 working days; you will receive a visa sticker in your passport upon approval.' }
  ],
  specialRequirements: { entry_rules: 'Work permit required; C5 immigration form mandatory before boarding; HIV test required for stays exceeding 90 days.' }
};