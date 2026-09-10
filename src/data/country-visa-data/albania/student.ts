export default {
  country: 'albania',
  fromCountry: 'India',
  visaCategory: 'Student Visa (Long Stay Type D)',
  authority: 'Ministry for Europe and Foreign Affairs of Albania / Albanian Embassy',
  channels: ['Official e-Visa Portal (e-visa.al)', 'Albanian Embassy in New Delhi'],
  processingTime: {
    eVisa: '15-30 working days',
    standardSticker: '15-30 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'EUR 15 (~₹1,350)',
    stickerConsularStandard: 'EUR 80 (~₹7,200)',
    vfsServiceFee: 'Not applicable (direct submission)'
  },
  eVisa: {
    available: true,
    portal: 'https://e-visa.al/',
    territorialScope: 'Nationwide',
    validity: 'Up to 1 year',
    maxStay: 'Duration of study program',
    invitationRequired: true,
    processing: '15-30 working days'
  },
  stayDuration: {
    eVisa: 'Duration of study program (renewable)',
    stickerSingleDouble: 'Up to 1 year',
    stickerMultiple: 'Up to 1 year (renewable)'
  },
  entryType: 'Multiple Entry (Type D)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond intended stay with minimum 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background, taken within last 6 months', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Type D Visa Application Form', description: 'Completed online application form for long-stay visa', icon: '📋', mandatory: true },
    { key: 'acceptance_letter', title: 'University Admission Letter', description: 'Official admission letter from recognized Albanian educational institution', icon: '🎓', mandatory: true },
    { key: 'academic_docs', title: 'Academic Transcripts & Certificates', description: 'Attested academic certificates and mark sheets', icon: '📄', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Financial Means', description: 'Bank statements for last 6 months or education loan sanction letter', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Dormitory confirmation or rental agreement in Albania', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Minimum €30,000 coverage for medical emergencies', icon: '🛡️', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: 'Apostilled PCC from Indian authorities', icon: '👮', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Health certificate confirming no contagious diseases', icon: '🩺', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking to Albania', icon: '✈️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain University Admission', description: 'Secure admission from recognized Albanian educational institution' },
    { step: 2, title: 'Prepare Documentation', description: 'Gather all required documents including apostilled PCC and academic certificates' },
    { step: 3, title: 'Submit Application', description: 'Apply via e-visa.al portal or submit at Albanian Embassy' },
    { step: 4, title: 'Pay Fees', description: 'Pay applicable consular fees' },
    { step: 5, title: 'Receive Visa', description: 'Collect Type D visa and apply for residence permit on arrival' }
  ],
  specialRequirements: {
    entry_rules: 'Students must apply for residence permit within 30 days of arrival in Albania. Medical certificate and HIV test required for stays >90 days.'
  }
};
