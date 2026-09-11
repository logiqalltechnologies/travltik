export default {
  country: 'italy',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa (Type D)',
  authority: 'Ministry of Foreign Affairs and International Cooperation (MAECI) / Embassy of Italy',
  channels: ['VFS Global', 'Embassy/Consulate General of Italy'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '30-90 days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€116',
    vfsServiceFee: '₹2,000'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable',
    territorialScope: 'Italy and Schengen Area',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: true,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 365 days',
    stickerMultiple: 'Up to 365 days (renewable via Residence Permit)'
  },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond intended visa validity, issued within 10 years, 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos (35x45mm), white background, taken within last 6 months', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'National Visa Application Form (Type D)', description: 'Completed and signed National Visa application form', icon: '📋', mandatory: true },
    { key: 'work_permit', title: 'Work Permit (Nulla Osta)', description: 'Work authorization issued by Italian Immigration Desk (Sportello Unico Immigrazione)', icon: '📜', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Signed contract with Italian employer', icon: '💼', mandatory: true },
    { key: 'qualifications', title: 'Educational & Professional Qualifications', description: 'Apostilled degree certificates and experience letters', icon: '🎓', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: 'Apostilled PCC from Indian authorities', icon: '👮', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Minimum €30,000 coverage valid in Italy', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Rental agreement or employer accommodation letter', icon: '🏨', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking to Italy', icon: '✈️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain Work Permit', description: 'Employer secures Nulla Osta from Italian Immigration Desk' },
    { step: 2, title: 'Prepare Documents', description: 'Gather all apostilled documents including PCC' },
    { step: 3, title: 'Submit Application', description: 'Submit complete application at VFS Global or Italian Embassy' },
    { step: 4, title: 'Pay Fees', description: 'Pay applicable consular fees' },
    { step: 5, title: 'Receive Visa', description: 'Collect Type D visa and apply for residence permit on arrival' }
  ],
  specialRequirements: {
    entry_rules: 'Work permit (Nulla Osta) must be obtained by employer before visa application. Apply for Permesso di Soggiorno within 8 days of arrival in Italy.'
  }
};