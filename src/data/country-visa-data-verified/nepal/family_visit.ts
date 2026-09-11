export default {
  country: 'nepal',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Department of Immigration, Ministry of Home Affairs, Nepal',
  channels: ['Immigration Checkpoint Direct', 'Embassy Direct'],
  processingTime: { eVisa: 'N/A', standardSticker: 'N/A', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'Free', stickerConsularStandard: 'Free', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'N/A', stickerMultiple: 'N/A' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport or Voter ID', description: 'Original valid Indian Passport or Election Commission Voter ID card', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs', description: 'Recent passport-sized photographs if entering via land borders', icon: '📸', mandatory: false },
    { key: 'visa_form', title: 'Application Form', description: 'Not required for visa-free entry', icon: '📋', mandatory: false },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return booking optional', icon: '✈️', mandatory: false },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or relative host address details optional', icon: '🏨', mandatory: false },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Optional', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Optional', icon: '🏦', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Enter Nepal', description: 'Indian citizens can enter Nepal visa-free under the 1950 Indo-Nepal Treaty of Peace and Friendship upon presenting a valid Indian Passport or Voter ID.' }
  ],
  specialRequirements: { entry_rules: 'Visa-free entry for Indian citizens under the 1950 Treaty of Peace and Friendship. Valid Indian Passport or Election Commission Voter ID required. Aadhaar card is not accepted as an official entry document at immigration checkpoints.' }
};