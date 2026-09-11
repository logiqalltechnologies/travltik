export default {
  country: 'italy',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa (Schengen Type C)',
  authority: 'Ministry of Foreign Affairs and International Cooperation (MAECI) / Embassy of Italy',
  channels: ['VFS Global', 'Embassy/Consulate General of Italy'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€90 (~₹8,200)',
    vfsServiceFee: '₹1,414'
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
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Completed and signed application form', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter (Lettera di Invito)', description: 'Official hospitality declaration form signed by host in Italy', icon: '✉️', mandatory: true },
    { key: 'host_id_proof', title: 'Host ID/Residence Proof', description: 'Copy of host passport or Italian residence permit (Permesso di Soggiorno)', icon: '🪪', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Birth certificate, marriage certificate, or family register', icon: '👨‍👩‍👧', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Host address proof or hotel bookings', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Schengen Travel Insurance', description: 'Minimum €30,000 coverage across Schengen states', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months, ITR for 3 years', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Employment Proof / NOC', description: 'Employer leave letter with salary slips or business registration', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete Application Form', description: 'Fill Schengen visa application form' },
    { step: 2, title: 'Book VFS Appointment', description: 'Schedule appointment at VFS Global Italy Centre' },
    { step: 3, title: 'Gather Documents', description: 'Prepare all required documents including hospitality declaration' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at VFS' },
    { step: 5, title: 'Track and Collect', description: 'Track status online and collect passport with visa' }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies. Host must fill the official Lettera di Invito declaration along with proof of legal residence. Travel insurance mandatory.'
  }
};