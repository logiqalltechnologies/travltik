export default {
  country: 'albania',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry for Europe and Foreign Affairs of Albania',
  channels: [
    'Official e-Visa Portal (e-visa.al)',
    'Embassy of Albania in New Delhi (for sticker visa)',
    'Honorary Consulate of Albania in Mumbai (for sticker visa inquiries)'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: '10-15 working days',
    expressSticker: '5-7 working days (if available)'
  },
  fees: {
    eVisa: 'EUR 35',
    stickerStandard: 'EUR 45'
  },
  eVisa: {
    available: true,
    portal: 'https://e-visa.al/',
    territorialScope: 'Nationwide',
    validity: '180 days from issue',
    maxStay: '90 days per 180-day period',
    invitationRequired: false,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '90 days within 180-day period',
    stickerSingleDouble: '90 days within 180-day period',
    stickerMultiple: '90 days within 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  externalServiceProvider: 'None (direct consular processing)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond intended stay with a minimum of 2 blank pages. All old passports, if any, should also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (taken within 6 months) colour photographs with a white background, covering 80% face, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Duly filled and signed online visa application form.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking to and from Albania.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel reservations or an invitation letter from a host in Albania.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Comprehensive travel health insurance with medical coverage of at least €30,000 for the entire duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 3-6 months showing sufficient funds to cover expenses (recommended minimum ₹100 per day of stay).', icon: '🏦', mandatory: true },
    { key: 'cover_letter', title: 'Personal Cover Letter', description: 'A letter explaining the purpose of travel, duration of stay, detailed itinerary, and ties to India.', icon: '📝', mandatory: true },
    { key: 'proof_of_employment', title: 'Proof of Employment/NOC', description: 'If employed: Letter from employer/No Objection Certificate (NOC) and recent salary slips. If self-employed: Business registration documents. If student: Student ID and NOC from educational institution.', icon: '💼', mandatory: true },
    { key: 'itr', title: 'Income Tax Returns (ITR)', description: 'ITR for the last 3 years (recommended for strong financial proof).', icon: '📄', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility', description: 'Determine if you qualify for visa-free entry (e.g., with valid Schengen, US, or UK visa) or if an eVisa/sticker visa is required.' },
    { step: 2, title: 'Complete Online Application', description: 'Visit the official Albanian e-Visa portal (e-visa.al) and fill out the application form accurately.' },
    { step: 3, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents as per the checklist.' },
    { step: 4, title: 'Submit & Pay Fee', description: 'Upload documents and pay the statutory consular fees online. For sticker visas, an appointment at the Embassy/Consulate may be required for submission and biometrics (if applicable).' },
    { step: 5, title: 'Receive Clearance', description: 'Track your application status. Once approved, receive your eVisa confirmation electronically or collect your passport with the sticker visa.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders with a valid multiple-entry Schengen visa (used at least once in a Schengen country), or a valid multiple-entry US or UK visa (used at least once in the country of issuance), or a 10-year UAE residence permit (valid for at least 1 year from entry) are exempt from requiring an Albanian visa for stays up to 90 days within a 180-day period.'
  }
};