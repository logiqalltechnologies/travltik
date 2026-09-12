export default {
  country: 'dominican-republic',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Dominican Republic in New Delhi',
  channels: ['https://visa.dominicanrepublic.gov.do', 'VFS Global', 'Embassy Direct'],
  processingTime: { eVisa: '5-7 working days', standardSticker: '10-15 working days' },
  fees: { eVisaTotal: '100 USD', stickerConsularStandard: '100 USD', vfsServiceFee: '30 USD' },
  eVisa: { available: true, portal: 'https://visa.dominicanrepublic.gov.do', territorialScope: 'Nationwide', validity: '90 days', maxStay: '60 days', invitationRequired: false, processing: '5-7 working days' },
  stayDuration: { eVisa: '60 days', stickerSingleDouble: '60 days', stickerMultiple: '60 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from business partner', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage of at least 30,000 USD for medical expenses', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Online Application', description: 'Fill out the eVisa application form on the official portal' },
    { step: 2, title: 'Pay Visa Fee', description: 'Pay the eVisa fee via the portal or VFS service' },
    { step: 3, title: 'Submit Documents', description: 'Upload required documents through the portal or submit in person at VFS' },
    { step: 4, title: 'Processing', description: 'Wait for visa approval (5-7 working days)' },
    { step: 5, title: 'Collect Visa', description: 'Download eVisa PDF or collect physical visa from embassy if applicable' }
  ],
  specialRequirements: { entry_rules: 'No Schengen or US rules apply. Yellow fever vaccination not required. No HIV test required.' }
};