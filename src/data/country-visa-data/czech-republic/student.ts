export default {
  country: 'czech-republic',
  fromCountry: 'India',
  visaCategory: 'Student Visa (Long Stay Type D)',
  authority: 'Ministry of Foreign Affairs of the Czech Republic / Embassy of the Czech Republic in New Delhi',
  channels: ['Embassy of the Czech Republic in New Delhi'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '60 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: 'CZK 2,500',
    vfsServiceFee: 'Not applicable'
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
    stickerSingleDouble: 'Up to 365 days',
    stickerMultiple: 'Up to 365 days (renewable via long-term residence permit)'
  },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond intended stay, issued within last 10 years, 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Long Stay Visa Application Form', description: 'Completed application form for Type D visa', icon: '📋', mandatory: true },
    { key: 'acceptance_letter', title: 'University Admission Letter', description: 'Official admission letter from recognized Czech educational institution', icon: '🎓', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Financial Means', description: 'Bank statements showing sufficient funds or education loan sanction letter', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Dormitory confirmation or rental agreement in Czech Republic', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Comprehensive travel health insurance from a licensed provider with minimum coverage of €60,000', icon: '🛡️', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: 'Apostilled PCC from Indian authorities (Passport Office)', icon: '👮', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Health certificate confirming no contagious diseases', icon: '🩺', mandatory: true },
    { key: 'academic_docs', title: 'Academic Transcripts', description: 'Apostilled academic certificates and mark sheets', icon: '📄', mandatory: true },
    { key: 'language_proof', title: 'Language Proficiency', description: 'IELTS/TOEFL or Czech language certificate as required', icon: '🗣️', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight booking to Czech Republic', icon: '✈️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain University Admission', description: 'Secure admission from recognized Czech educational institution' },
    { step: 2, title: 'Prepare Documents', description: 'Gather all superlegalized or apostilled documents including PCC and medical certificate' },
    { step: 3, title: 'Submit Application', description: 'Book an appointment and apply directly at the Embassy of the Czech Republic in New Delhi' },
    { step: 4, title: 'Pay Fees', description: 'Pay statutory consular fee of CZK 2,500 equivalent in INR' },
    { step: 5, title: 'Receive Visa', description: 'Collect Type D visa and register with Foreign Police within 3 working days of arrival' }
  ],
  specialRequirements: {
    entry_rules: 'Students must register with Foreign Police within 3 working days of arrival in the Czech Republic.'
  }
};