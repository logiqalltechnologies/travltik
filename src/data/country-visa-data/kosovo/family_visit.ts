export default {
  country: 'kosovo',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa (Short Stay Type C)',
  authority: 'Ministry of Foreign Affairs and Diaspora of the Republic of Kosovo',
  channels: ['Official Portal (visas.rks-gov.net)', 'Embassy of Kosovo in Sofia / Istanbul (Accredited Missions)'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 calendar days',
    expressSticker: 'Up to 30 calendar days (if detailed review required)'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€40 (~₹3,600)',
    vfsServiceFee: 'Not applicable (Direct Embassy submission abroad)'
  },
  eVisa: {
    available: false,
    portal: 'https://visas.rks-gov.net',
    territorialScope: 'Nationwide',
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
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond departure, with 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Visa Application Form', description: 'Completed application form generated via official Kosovo visa portal', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Official invitation from family member in Kosovo authenticated by municipal authorities', icon: '✉️', mandatory: true },
    { key: 'host_id_proof', title: 'Host ID/Residence Proof', description: 'Copy of host passport or Kosovo residence permit', icon: '🪪', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Birth certificate, marriage certificate, or family register', icon: '👨👩👧', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Host address proof or hotel bookings', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Minimum €30,000 coverage', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months, ITR for 3 years', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Employment Proof / NOC', description: 'Employer leave letter with salary slips or business registration', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete Online Application', description: 'Fill application form at visas.rks-gov.net' },
    { step: 2, title: 'Submit to Accredited Embassy', description: 'Submit documents and passport to designated Kosovo Embassy abroad (e.g., Sofia or Istanbul)' },
    { step: 3, title: 'Gather Documents', description: 'Ensure invitation letter is authenticated by Kosovo municipal authorities' },
    { step: 4, title: 'Pay Fees', description: 'Pay statutory consular fee (€40)' },
    { step: 5, title: 'Track and Collect', description: 'Collect passport with visa sticker once issued' }
  ],
  specialRequirements: {
    entry_rules: 'Kosovo is NOT part of the Schengen Area. Holders of a valid multiple-entry Schengen visa or residence permit from a Schengen country are exempt from visa requirements for stays up to 15 days.'
  }
};