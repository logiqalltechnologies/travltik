export default {
  country: 'albania',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry for Europe and Foreign Affairs of Albania',
  channels: [
    'Official Albania eVisa Portal',
    'Embassy / Consulate (for sticker visa, if applicable via other diplomatic missions)'
  ],
  processingTime: {
    eVisa: '3-15 working days',
    standardSticker: '15-30 working days',
    expressSticker: 'Not officially specified'
  },
  fees: {
    eVisaTotal: 'EUR 15 (~₹1,350)',
    stickerConsularStandard: 'EUR 80 (~₹7,120 - ₹7,920) (for Type D, if applicable for longer business stays)',
    vfsServiceFee: '₹1,000 - ₹2,000 (if applying via an outsourced service provider)'
  },
  eVisa: {
    available: true,
    portal: 'https://e-visa.al/',
    territorialScope: 'Nationwide',
    validity: 'Up to 180 days from issue',
    maxStay: '90 days per stay',
    invitationRequired: true,
    processing: '3-15 working days'
  },
  stayDuration: {
    eVisa: 'Up to 90 days within a 180-day period',
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Multiple Entry (depending on application)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay with a minimum of 2 blank pages. All old passports, if any, should also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (taken within 6 months) color photographs with a white background and 80% face coverage on matte finish paper.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Completed Visa Application Form', description: 'Duly filled and signed online application form. All details must match the passport exactly.', icon: '📋', mandatory: true },
    { key: 'cover_letter_company', title: 'Cover Letter from Indian Company', description: 'On company letterhead, explaining the purpose of visit, duration, detailed itinerary, and ties to India.', icon: '📄', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Albanian Host Company', description: 'Official invitation letter from the host company in Albania, detailing the purpose and duration of the business visit.', icon: '✉️', mandatory: true },
    { key: 'company_registration', title: 'Proof of Legal Status of Indian Company', description: 'Documents such as the Certificate of Registration of the applicant\'s company in India.', icon: '🏢', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight bookings to and from Albania.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel reservations or other accommodation arrangements for the entire stay in Albania.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Health Insurance', description: 'Travel health insurance with medical coverage for the entire duration of stay in Albania.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements (stamped and updated for the last 3-6 months) showing sufficient funds to cover the stay in Albania. Minimum ₹100 per day of stay is often cited.', icon: '🏦', mandatory: true },
    { key: 'previous_visas', title: 'Copies of Previous Visas and Travel History', description: 'Include copies of previously obtained Schengen, US, or UK visas and travel stamps, if any.', icon: '🛂', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility and Type', description: 'Determine if an eVisa (Type C for short-term business) or a sticker visa (Type D for longer stays) is required. Indian citizens can apply for an eVisa online.' },
    { step: 2, title: 'Complete Online Application Form', description: 'Visit the official Albania eVisa portal (e-visa.al) and accurately fill out the online visa application form. Upload scanned copies of required documents.' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the non-refundable visa fee online via the portal. Failure to pay within 15 days may result in application cancellation.' },
    { step: 4, title: 'Submit Documents (if applicable for sticker visa)', description: 'If a sticker visa is required, you may need to submit original documents and passport at a designated diplomatic mission (e.g., Honorary Consulate in Mumbai/Kolkata) after online application and fee payment.' },
    { step: 5, title: 'Await Processing and Receive Decision', description: 'Track your application status online. If approved, the eVisa will be sent electronically. For sticker visas, the passport will be stamped.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders with a valid multiple-entry Schengen, UK, or US visa (previously used in the issuing country) may be exempt from requiring an Albanian visa for stays up to 90 days within a 180-day period. This exemption does not apply to all Indian travelers, and a specific business visa is generally required for business purposes without such prior visas.'
  }
};