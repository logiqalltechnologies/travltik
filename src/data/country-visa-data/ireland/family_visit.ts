export default {
  country: 'ireland',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa (Short Stay C)',
  authority: 'Immigration Service Delivery (ISD), Department of Justice, Ireland',
  channels: ['AVATS Online Portal', 'VFS Global Ireland Visa Application Centre', 'Embassy of Ireland in New Delhi'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '20-40 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: 'Single Entry: ₹5,400 (€60) / Multiple Entry: ₹9,000 (€100)',
    vfsServiceFee: '₹2,160'
  },
  eVisa: {
    available: false,
    portal: 'https://www.visas.inis.gov.ie/avats/OnlineHome.aspx',
    territorialScope: 'Republic of Ireland',
    validity: 'Up to 90 days',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '20-40 working days'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per visit'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond intended departure from Ireland, with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background, taken within last 6 months', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'AVATS Online Application Summary Sheet', description: 'Signed AVATS online application summary printout', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Official invitation from family member in Ireland with host details and relationship proof', icon: '✉️', mandatory: true },
    { key: 'host_id_proof', title: 'Host ID/Residence Proof', description: 'Copy of host passport or Irish Residence Permit (IRP)', icon: '🪪', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Birth certificate, marriage certificate, or family register', icon: '👨👩👧', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Host address proof or hotel bookings', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Comprehensive Travel Insurance', description: 'Travel health insurance covering emergency medical expenses', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months, ITR for 3 years', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Employment Proof / NOC', description: 'Employer leave letter with salary slips or business registration', icon: '💼', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'Signed letter explaining purpose and commitment to return', icon: '📄', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete AVATS Application', description: 'Fill online application at visas.inis.gov.ie/avats' },
    { step: 2, title: 'Book VFS Appointment', description: 'Schedule appointment at VFS Global Ireland Centre' },
    { step: 3, title: 'Gather Documents', description: 'Prepare all required documents including invitation and relationship proof' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at VFS' },
    { step: 5, title: 'Track and Collect', description: 'Track status online and collect passport with visa' }
  ],
  specialRequirements: {
    entry_rules: 'Ireland is NOT part of Schengen Area. Indian nationals require an Irish visa. The British-Irish Visa Scheme (BIVS) may apply if holding an eligible UK visa marked "BIVS". Travel insurance mandatory.'
  }
};