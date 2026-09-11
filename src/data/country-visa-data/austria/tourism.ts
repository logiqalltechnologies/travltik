export default {
  country: 'austria',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Austria in India / VFS Global',
  channels: [
    'VFS Global Visa Application Centres',
    'Embassy / Consulate (for specific cases or inquiries)'
  ],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15-20 working days (can extend up to 30-60 working days in complex or exceptional cases)',
    expressSticker: 'Not officially stated/Varies (priority routes may reduce to 5 days for eligible profiles)'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: 'EUR 80 (~₹6,960 - ₹7,080, approximate conversion)',
    vfsServiceFee: '₹1,500 - ₹2,500 (approximate)'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable',
    territorialScope: 'Not applicable',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: false,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 90 days within any 180-day period',
    stickerMultiple: 'Up to 90 days within any 180-day period (validity of 1, 3, or 5 years at discretion of embassy)'
  },
  entryType: 'Single, Double, or Multiple Entry (at discretion of embassy)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond the intended departure from the Schengen Area, issued within the last 10 years, and with at least 2 blank pages. Photocopies of the current passport (front and back) and previous visas are required.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'One recent (taken within the last 6 months) passport-size colour photo (35mm x 45mm) with a white background, full face visible, and neutral expression. Must meet strict biometric photo standards.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Duly filled, printed, and signed Schengen visa application form (in English or German). For minors, it must be signed by both parents or legal guardian.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Round-trip flight reservation showing entry and exit dates from the Schengen Area. A booking confirmation is sufficient; confirmed tickets are not required before visa approval.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel bookings with full address, dates, and applicant name. If staying with a host, an invitation letter along with the host\'s proof of Austrian residence and identification is required.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Travel medical insurance with a minimum coverage of €30,000, valid across all 27 Schengen member states. It must cover medical emergencies, hospitalisation, and repatriation. As of January 1, 2026, only policies from companies on the approved list by the Austrian Embassy/VFS Global are accepted.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Personal bank statements from the last 3-6 months, salary slips from the last 3 months, and Income Tax Returns (ITR) from the last financial year. The balance should demonstrate sufficient funds for the stay (guideline: EUR 60-80 per day).', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Proof of Employment/Occupation', description: 'For employed individuals: No Objection Certificate (NOC) from the employer on company letterhead, stating designation, salary, and approved leave dates. For self-employed, business registration documents. For students, a letter from the educational institution.', icon: '💼', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'A personal cover letter explaining the purpose of the visit, itinerary, and duration of stay.', icon: '📝', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility', description: 'Confirm that Austria is the main destination (longest stay) within the Schengen Area and gather all necessary information.' },
    { step: 2, title: 'Prepare Documentation', description: 'Assemble all mandatory documents as per the official checklist, ensuring they are complete and accurate.' },
    { step: 3, title: 'Fill Application Form', description: 'Complete the Schengen visa application form online or download and fill it manually.' },
    { step: 4, title: 'Book Appointment', description: 'Schedule an appointment at the nearest VFS Global Visa Application Centre in India.' },
    { step: 5, title: 'Submit Application & Pay Fees', description: 'Attend the appointment in person, submit all documents, provide biometrics (fingerprints and facial photo), and pay the consular and VFS service fees.' },
    { step: 6, title: 'Track Application', description: 'Track the status of your visa application online using the reference number provided by VFS Global.' },
    { step: 7, title: 'Collect Passport', description: 'Collect your passport from the VFS Global centre or arrange for courier delivery once the visa decision is made. Verify all details on the visa sticker.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders require a Schengen visa for short stays up to 90 days within any 180-day period. Biometrics are mandatory for all applicants who have not provided them within the last 59 months. Travel medical insurance must be from an approved list of providers as of January 1, 2026. The EU Entry/Exit System (EES) will implement new digital border control for non-EU nationals, requiring additional time at passport control for facial photos and/or fingerprints, replacing passport stamps.',
    health_mandates: 'No specific health mandates like Yellow Fever or HIV test for tourism stays under 90 days.'
  }
};