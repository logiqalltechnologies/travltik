export default {
  country: 'ghana',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Ghana in New Delhi',
  channels: ['https://visa.ghana.gov.gh', 'VFS Global Ghana Visa Application Center', 'Embassy of Ghana, New Delhi'],
  processingTime: { eVisa: '3-5 working days', standardSticker: '7-10 working days', expressSticker: '3-5 working days' },
  fees: { consularFee: { amount: 50, currency: 'USD' }, vfsServiceFee: { amount: 20, currency: 'USD' } },
  externalServiceProvider: 'VFS Global',
  eVisa: { available: true, portal: 'https://visa.ghana.gov.gh', territorialScope: 'Nationwide', validity: '90 days', maxStay: '90 days', invitationRequired: true, processing: '3-5 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay, with at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online eVisa application form or printed form for consular submission.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking or itinerary showing dates of entry and exit.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from Ghanaian sponsor with address.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation, valid for the entire stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements covering the last 3 months, showing sufficient funds for the stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents including passport, photographs, flight itinerary, accommodation proof, travel insurance, bank statements, and invitation letter.' },
    { step: 2, title: 'Complete Application', description: 'Fill out the online eVisa application form or download and complete the printed form for consular submission.' },
    { step: 3, title: 'Pay Fees', description: 'Pay the eVisa fee online or the consular visa fee plus VFS service fee at the designated payment portal or service center.' },
    { step: 4, title: 'Submit Application', description: 'Submit the application and documents online via the eVisa portal or in person at the VFS Global center or embassy.' },
    { step: 5, title: 'Await Approval', description: 'Track the application status online; upon approval, receive the eVisa via email or collect the consular visa from the embassy.' }
  ],
  specialRequirements: { entry_rules: 'Invitation letter from a Ghanaian sponsor, proof of relationship, sponsor’s ID, sponsor’s residence proof, and sponsor’s financial support letter.' }
};