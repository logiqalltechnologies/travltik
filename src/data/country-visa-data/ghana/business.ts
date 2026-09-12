export default {
  country: 'ghana',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs, Ghana',
  channels: ['https://www.ghana.gov.gh/visa', 'Embassy Direct'],
  processingTime: { eVisa: '3-5 working days', standardSticker: '7-10 working days', expressSticker: '3-5 working days' },
  fees: { eVisaTotal: '100 USD', stickerConsularStandard: '100 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://www.ghana.gov.gh/visa', territorialScope: 'Nationwide', validity: '90 days', maxStay: '90 days', invitationRequired: true, processing: '3-5 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online eVisa application', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or invitation letter from Ghanaian company', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months', icon: '🏦', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter', description: 'Official invitation from Ghanaian business partner', icon: '📄', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents including invitation letter and financial proof.' },
    { step: 2, title: 'Complete eVisa Application', description: 'Fill out the online application form on the official portal.' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the eVisa fee online.' },
    { step: 4, title: 'Receive eVisa', description: 'Download and print the eVisa approval letter.' },
    { step: 5, title: 'Travel to Ghana', description: 'Carry all documents, including the printed eVisa, to the airport.' },
    { step: 6, title: 'Arrival in Ghana', description: 'Present documents to immigration for entry clearance.' }
  ],
  specialRequirements: { entry_rules: 'Yellow fever vaccination certificate required. No additional health mandates for stays under 90 days.' }
};