export default {
  country: 'cyprus',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa (Long Stay)',
  authority: 'Civil Registry and Migration Department (CRMD) / High Commission of Cyprus in New Delhi',
  channels: ['High Commission of the Republic of Cyprus in New Delhi'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '60-90 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€60 (~₹5,400)',
    vfsServiceFee: 'Not applicable (direct submission)'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable',
    territorialScope: 'Nationwide',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: true,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 1 year',
    stickerMultiple: 'Up to 1 year (renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond intended stay with 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form (M.61)', description: 'Completed national visa application form', icon: '📋', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Signed contract with Cyprus employer', icon: '💼', mandatory: true },
    { key: 'crmd_approval', title: 'CRMD Pre-Approval', description: 'Approval from Civil Registry and Migration Department', icon: '📜', mandatory: true },
    { key: 'qualifications', title: 'Educational & Professional Qualifications', description: 'Apostilled degree certificates and experience letters', icon: '🎓', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: 'Apostilled PCC from Indian authorities', icon: '👮', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Health certificate including HIV, Hepatitis B & C tests', icon: '🩺', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Minimum €30,000 coverage', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Rental agreement or employer accommodation letter', icon: '🏨', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking', icon: '✈️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain CRMD Approval', description: 'Employer secures pre-approval from Civil Registry and Migration Department' },
    { step: 2, title: 'Prepare Documents', description: 'Gather all apostilled documents including PCC and medical certificate' },
    { step: 3, title: 'Submit Application', description: 'Submit complete application at Cyprus High Commission' },
    { step: 4, title: 'Pay Fees', description: 'Pay applicable consular fees' },
    { step: 5, title: 'Receive Visa', description: 'Collect visa and apply for residence permit on arrival' }
  ],
  specialRequirements: {
    entry_rules: 'CRMD pre-approval mandatory before visa application. Medical tests for HIV, Hepatitis B & C required. Register with local authorities within 7 days of arrival.'
  }
};