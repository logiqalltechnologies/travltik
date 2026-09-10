export default {
  country: 'bosnia-herzegovina',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs of Bosnia and Herzegovina / Embassy of Bosnia and Herzegovina, New Delhi',
  channels: [
    'Embassy of Bosnia and Herzegovina, New Delhi'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '15–30 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '€72 (~₹6,500)',
    vfsServiceFee: '₹0 (Direct Embassy Submission)'
  },
  eVisa: {
    available: false,
    portal: 'None (In-person sticker application required)',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (Entry period prior to Temporary Residence Permit registration)',
    stickerMultiple: 'Up to 1 year (Visa D - Long Stay for education)'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport valid for at least 3 months beyond intended period of stay with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photographs (35x45 mm) on a plain white background taken within the last 6 months', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Visa Application Form', description: 'Duly completed and signed Long-Stay Visa (Visa D) application form', icon: '📋', mandatory: true },
    { key: 'admission_letter', title: 'University Acceptance Letter', description: 'Official letter of admission or enrolment certificate from a recognized university or educational institution in Bosnia and Herzegovina', icon: '🎓', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Financial Support', description: 'Bank statements for the past 6 months, sanctioned education loan documents, or official scholarship letter showing sufficient funds for tuition and living expenses', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'University dormitory confirmation, rental agreement, or invitation certified by the Service for Foreigners’ Affairs of Bosnia and Herzegovina', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Health Insurance', description: 'Medical health insurance with minimum coverage of €30,000 valid for the initial period of travel', icon: '🛡️', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate (PCC)', description: 'Legalized/Apostilled Police Clearance Certificate issued by the Indian Passport Authority within the last 6 months', icon: '📜', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate & HIV Test', description: 'General medical fitness certificate including an official HIV negative test result required for long-stay student residency', icon: '🩺', mandatory: true },
    { key: 'flight_itinerary', title: 'Flight Reservation', description: 'Confirmed round-trip or one-way travel itinerary to Bosnia and Herzegovina', icon: '✈️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain University Admission', description: 'Secure an official admission letter from an accredited educational institution in Bosnia and Herzegovina.' },
    { step: 2, title: 'Assemble & Legalize Documents', description: 'Compile financial statements, education loan papers, medical fitness with HIV test results, and legalized Police Clearance Certificate.' },
    { step: 3, title: 'Submit at Embassy', description: 'Schedule an appointment and submit the complete physical dossier at the Embassy of Bosnia and Herzegovina in New Delhi.' },
    { step: 4, title: 'Pay Consular Fee', description: 'Pay the non-refundable €72 consular fee as instructed by the embassy.' },
    { step: 5, title: 'Apply for Residence Permit on Arrival', description: 'Register with the local Service for Foreigners’ Affairs field office in Bosnia and Herzegovina within 48 hours of arrival to obtain the Temporary Residence Permit for studies.' }
  ],
  specialRequirements: {
    entry_rules: 'Students entering on a Long Stay Visa D must report to the nearest Field Office of the Service for Foreigners’ Affairs (Služba za poslove sa strancima) within 48 hours of arrival to complete mandatory address registration and finalize their Temporary Residence Permit.'
  }
};