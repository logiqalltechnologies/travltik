export default {
  country: 'belarus',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Belarus in the Republic of India',
  channels: [
    'Embassy / Consulate'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 working days (up to 2 weeks)',
    expressSticker: 'Within 48 hours (usually next working day)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '60 EUR (~₹5,400 INR)',
    stickerConsularExpress: '120 EUR (~₹10,800 INR)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single / Double Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months from the date of entry into Belarus with at least 2 blank pages. For applicants under 18, copies of parents\' passports are also required.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'One recent color photograph (not older than 6 months), 35x45 mm, full face (70-80% of the picture) with a light background, without sunglasses, hat, or other head covering.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'One duly completed visa application form, filled out in legible handwriting or typing (in block letters), and signed personally by the applicant (or legal representative for minors).', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed flight itinerary (one-way tickets are accepted).', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking confirmation on the letterhead of a hotel in Belarus, or a letter from the educational institution confirming dormitory accommodation.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Copy of health insurance certificate valid in Belarus with a minimum coverage of EUR 10,000. The territorial validity should include the Republic of Belarus (e.g., "Belarus", "Europe incl. Belarus", or "Worldwide").', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Personal bank account statement for a period of not less than 3 months prior to the date of visa submission, showing sufficient funds (equivalent to at least US $600 per month of stay, or US $25 per day for stays less than one month). Pay slips from the workplace are also acceptable. If sponsored, a sponsorship letter is required.', icon: '🏦', mandatory: true },
    { key: 'invitation_letter', title: 'Official Study Invitation', description: 'Original official invitation letter from a Belarusian educational institution, verified by the Migration Department of Belarus.', icon: '✉️', mandatory: true },
    { key: 'educational_certificates', title: 'Educational Certificates', description: 'Original educational certificates (e.g., graduation certificate from school/other educational institution).', icon: '🎓', mandatory: true },
    { key: 'birth_certificate', title: 'Birth Certificate', description: 'Copy of Birth Certificate (containing information about parents) for applicants under 18 years old.', icon: '👶', mandatory: false },
    { key: 'medical_fitness_certificate', title: 'Medical Fitness Certificate', description: 'Copy of a medical fitness certificate issued by a registered doctor with a stamp.', icon: '🩺', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Secure Official Study Invitation', description: 'Obtain an official invitation letter from a recognized Belarusian educational institution, approved by the Migration Department of Belarus.' },
    { step: 2, title: 'Schedule an Appointment', description: 'Starting from October 7, 2024, all visa applications are received only upon prior appointment. Send an e-mail to india.consul@mfa.gov.by specifying purpose, period of stay, inviting company/person, and permanent address in India.' },
    { step: 3, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents as per the requirements of the Embassy of Belarus in India.' },
    { step: 4, title: 'Submit Application & Pay Fee', description: 'Submit the application in person at the Embassy. Consular fees (60 EUR for standard, 120 EUR for urgent) are payable in Indian Rupees through RBL Bank (located near the Embassy) with reference to the surname. No cash or card facilities at the Embassy. The deposit slip must be brought back to the Embassy by 12:30 PM on the day of application.' },
    { step: 5, title: 'Receive Visa', description: 'Track your application and collect your passport with the visa stamp from the Embassy.' }
  ],
  specialRequirements: {
    entry_rules: 'Upon arrival in Belarus, foreign nationals are required to register at the local citizenship and migration office of the Ministry of Interior of Belarus within 10 business days. If staying in a hotel, this will be arranged by the hotel services. An HIV test report may be required for stays exceeding 90 days (e.g., for obtaining a temporary residence permit).',
    invitationRequired: true,
    appointmentRequired: true,
    paymentMethod: 'Consular fees must be paid in INR through RBL Bank only, no cash or card payments at the Embassy.'
  }
};