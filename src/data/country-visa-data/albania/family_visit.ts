export default {
  country: 'albania',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry for Europe and Foreign Affairs of Albania',
  channels: [
    'Official Albanian e-Visa Portal (e-visa.al)',
    'Embassy / Consulate (for sticker visa, if eVisa is not applicable or preferred)'
  ],
  processingTime: {
    eVisa: 'Up to 15 working days',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A' // Express sticker not consistently found for this category
  },
  fees: {
    eVisaTotal: 'EUR 15 (~₹1,350)', // Official consular fee for Type C e-Visa
    stickerConsularStandard: 'EUR 15 (~₹1,350)', // Official consular fee for Type C visa
    vfsServiceFee: 'N/A' // eVisa is online, no VFS fee applicable. For physical submission, service fees may apply from outsourced centers if used.
  },
  eVisa: {
    available: true,
    portal: 'https://e-visa.al',
    territorialScope: 'Nationwide',
    validity: 'Up to 90 days within a 180-day period from issue (single or multiple entry depending on application)',
    maxStay: '90 days per stay within a 180-day period',
    invitationRequired: true,
    processing: 'Up to 15 working days'
  },
  stayDuration: {
    eVisa: 'Up to 90 days within a 180-day period',
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Multiple Entry (depending on application)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay in Albania, with a minimum of 2 blank pages. A scanned copy of the bio-data page is required for eVisa application.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Recent (taken within the last 6 months) digital passport-size photograph with a white background. For eVisa, JPG/JPEG format is required.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Completed Visa Application Form', description: 'Duly filled and signed online application form via the official Albanian e-Visa portal. All details must match the passport exactly.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking or onward ticket details.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Invitation letter from the host in Albania (for family visit) or confirmed hotel reservations for the entire duration of stay.', icon: '🏨', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter', description: 'An official invitation letter from the family member residing in Albania, including their contact details, address, and relationship to the applicant. The letter should also state the purpose and duration of the visit.', icon: '✉️', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Travel insurance covering medical emergencies for the entire period of stay in Albania. While some sources indicate it\'s not mandatory, others list it as such or highly recommend it.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3-6 months showing sufficient funds to cover expenses during the stay (minimum equivalent of ₹100 per day of stay).', icon: '🏦', mandatory: true },
    { key: 'cover_letter', title: 'Personal Covering Letter', description: 'A letter explaining the purpose of travel to Albania, duration of stay, detailed itinerary, and ties to India.', icon: '📝', mandatory: true },
    { key: 'proof_of_occupation', title: 'Proof of Occupation/Employment', description: 'Letter from employer, business registration, or student ID, as applicable, to demonstrate ties to India.', icon: '💼', mandatory: false } // Not consistently mandatory for all sources, but good to include.
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility', description: 'Determine if you are eligible for an eVisa or if a sticker visa application is required. Indian citizens with valid, used multiple-entry Schengen, US, or UK visas, or a 10-year UAE residence permit, may be exempt from visa requirements for up to 90 days. Otherwise, apply for a Type C eVisa.' },
    { step: 2, title: 'Complete Online Application Form', description: 'Visit the official Albanian e-Visa portal (e-visa.al), create an account, select India as your country of citizenship, choose the Type C visa for family visit, and accurately fill out the online application form.' },
    { step: 3, title: 'Prepare and Upload Documentation', description: 'Assemble all mandatory verified documents as per the requirements and upload them in PDF or JPEG format (max 5MB per file) to the online portal. Ensure all details match your passport exactly.' },
    { step: 4, title: 'Pay Visa Fee', description: 'Pay the non-refundable visa fee of EUR 15 online using a credit or debit card. Failure to pay within 15 days may result in application cancellation.' },
    { step: 5, title: 'Receive and Download eVisa', description: 'Track your application status online. Once approved, you will receive the eVisa confirmation electronically via email. Print a copy to carry during your travel.' },
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders with a valid multiple-entry Schengen, US, or UK visa (which has been used at least once to enter the issuing country) can enter Albania visa-free for up to 90 days within any 180-day period. Holders of a 10-year UAE residence permit (valid for at least one year from entry) are also exempt. No specific COVID-19 health checks or vaccinations are currently mandatory for entry.',
    other_notes: 'The Embassy of Albania in New Delhi, India, was permanently closed in 2014. The eVisa system is the primary method for Indian citizens to apply for short-stay visas.'
  }
};