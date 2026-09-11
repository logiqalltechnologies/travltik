export default {
  country: 'greece',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa (Schengen Type C)',
  authority: 'Embassy of Greece in New Delhi / GVC World',
  channels: ['GVCW Application Centre', 'Embassy of Greece'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€90 (~₹8,100)',
    vfsServiceFee: '€30 GVCW Service Fee'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable',
    territorialScope: 'Schengen Area',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: true,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond departure from Schengen, issued within 10 years, 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Completed and signed application form via GVC World portal', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Official invitation from family member in Greece with host details and relationship proof', icon: '✉️', mandatory: true },
    { key: 'host_id_proof', title: 'Host ID/Residence Proof', description: 'Copy of host passport or Greek residence permit', icon: '🪪', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Birth certificate, marriage certificate, or family register', icon: '👨‍👩‍👧', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Host address proof or hotel bookings', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Schengen Travel Insurance', description: 'Minimum €30,000 coverage across Schengen states', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months, ITR for 3 years', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Register on GVCW Portal', description: 'Complete application via in-gr.gvcworld.eu' },
    { step: 2, title: 'Book Appointment', description: 'Schedule appointment at GVCW Centre' },
    { step: 3, title: 'Gather Documents', description: 'Prepare all required documents including invitation and relationship proof' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at GVCW' },
    { step: 5, title: 'Track and Collect', description: 'Track status online and collect passport with visa' }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies. Invitation letter must include host contact details and relationship. GVCW is the official service provider for Greece in India (NOT VFS Global).'
  }
};
