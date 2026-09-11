export default {
  country: 'nepal',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Department of Immigration, Ministry of Home Affairs, Nepal',
  channels: ['Visa-Free Entry', 'Embassy Direct'],
  processingTime: { eVisa: 'N/A', standardSticker: 'N/A', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: 'N/A', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'Nationwide', validity: 'N/A', maxStay: 'Unlimited', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'N/A', stickerMultiple: 'N/A' },
  entryType: 'Visa-Free',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport or Voter ID', description: 'Valid Indian Passport or original Election Commission Voter ID Card', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs', description: 'Recent passport-size photographs (may be required at land border checkpoints)', icon: '📸', mandatory: false },
    { key: 'visa_form', title: 'Application Form', description: 'Not required for visa-free entry', icon: '📋', mandatory: false },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return or onward ticket if traveling by air', icon: '✈️', mandatory: false },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or local host address', icon: '🏨', mandatory: false },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Recommended for travel', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Sufficient funds for stay', icon: '🏦', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Enter Nepal', description: 'Present valid Indian Passport or Voter ID Card at immigration border checkpoint or airport.' }
  ],
  specialRequirements: { entry_rules: 'Visa-free entry for Indian citizens under the 1950 Indo-Nepal Treaty of Peace and Friendship. No visa required, no fee, and no maximum stay limit.' }
};