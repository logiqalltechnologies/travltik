export default {
  country: 'kosovo',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa (Long Stay Type D)',
  authority: 'Ministry of Foreign Affairs and Diaspora (MFAD), Republic of Kosovo',
  channels: ['Official Portal (visas.rks-gov.net)', 'Embassy of Kosovo in Sofia / Istanbul (Accredited Missions)'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '30-60 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€50 (~₹4,500)',
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
    stickerSingleDouble: 'Up to 90 days (Entry Visa)',
    stickerMultiple: 'Up to 1 year (converted to Residence/Work Permit on arrival)'
  },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond intended stay, with 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Visa Application Form', description: 'Completed application form generated via official Kosovo visa portal', icon: '📋', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Signed contract with Kosovo employer', icon: '💼', mandatory: true },
    { key: 'work_permit', title: 'Work Permit Approval', description: 'Approval from Kosovo Employment Agency / Ministry of Finance, Labour and Transfers', icon: '📜', mandatory: true },
    { key: 'qualifications', title: 'Educational & Professional Qualifications', description: 'Apostilled degree certificates and experience letters', icon: '🎓', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: 'Apostilled PCC from Indian authorities', icon: '👮', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Health certificate confirming fitness to work', icon: '🩺', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Minimum €30,000 coverage', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Rental agreement or employer accommodation letter', icon: '🏨', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking', icon: '✈️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain Work Permit Approval', description: 'Employer secures work permit pre-authorization in Kosovo' },
    { step: 2, title: 'Apply via Kosovo Visa Portal', description: 'Complete online application on visas.rks-gov.net' },
    { step: 3, title: 'Submit Documents to Accredited Mission', description: 'Submit dossier and passport to designated Kosovo Embassy abroad (e.g., Sofia or Istanbul)' },
    { step: 4, title: 'Pay Consular Fee', description: 'Pay the €50 consular fee' },
    { step: 5, title: 'Receive Visa & Travel', description: 'Collect stamped visa and register with Department for Citizenship, Asylum and Migration in Kosovo within 30 days of arrival for Temporary Residence Permit' }
  ],
  specialRequirements: {
    entry_rules: 'Kosovo has no official diplomatic embassy in India. Applications are submitted online and processed through designated overseas diplomatic missions (e.g., Sofia/Istanbul). Work permit registration on arrival is mandatory.'
  }
};