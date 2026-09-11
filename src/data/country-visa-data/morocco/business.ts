export default {
  country: 'morocco',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs, Kingdom of Morocco',
  channels: ['https://visa.morocco-embassy.org/', 'VFS Global', 'Embassy Direct'],
  externalServiceProvider: 'VFS Global',
  processingTime: { eVisa: '3-5 working days', standardSticker: '5 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '60 EUR', stickerConsularStandard: '100 EUR', vfsServiceFee: '30 EUR' },
  eVisa: { available: true, portal: 'https://visa.morocco-embassy.org/', territorialScope: 'Nationwide', validity: '90 days', maxStay: '90 days', invitationRequired: false, processing: '3-5 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online eVisa application form.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from Moroccan business partner.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Minimum coverage of 30,000 EUR for medical expenses and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds for stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Collect Required Documents', description: 'Gather passport, photos, flight tickets, accommodation proof, insurance, and bank statements.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the eVisa application form on the official portal and upload scanned documents.' },
    { step: 3, title: 'Pay eVisa Fee', description: 'Pay the 60 EUR fee online using a credit/debit card.' },
    { step: 4, title: 'Await Approval', description: 'Processing takes 3-5 working days. You will receive an electronic visa approval via email.' },
    { step: 5, title: 'Print eVisa and Travel', description: 'Print the eVisa approval and carry it along with all documents during travel.' }
  ],
  specialRequirements: { entry_rules: 'No Schengen or US rules apply. Yellow fever vaccination not required. No HIV test required.' }
};