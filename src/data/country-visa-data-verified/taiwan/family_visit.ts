export default {
  country: 'taiwan',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Taipei Economic and Cultural Center in India (TECC India)',
  channels: ['https://visawebapp.boca.gov.tw/', 'Embassy Direct'],
  processingTime: { eVisa: 'N/A', standardSticker: '3 working days', expressSticker: '1 working day' },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 4,000 (Single Entry) / INR 8,000 (Multiple Entry)',
    stickerConsularExpress: 'INR 6,000 (Single Entry) / INR 12,000 (Multiple Entry)', // 50% extra for express service
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
    stickerSingleDouble: 'Up to 60 days (extendable)',
    stickerMultiple: 'Up to 60 days per entry (extendable), valid for 1 year'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport valid for at least 6 months beyond the intended stay, with at least two blank pages for visa stamping. Include copies of all used pages and the biodata page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent (taken within 6 months) color passport-sized photographs (3.5x4.5 cm) with a white background, neutral expression, and clear facial features. No glasses or head coverings (unless for religious reasons).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Online Application Form', description: 'Completed and printed online visa application form from the official BOCA website (https://visawebapp.boca.gov.tw/), signed by the applicant exactly as per passport signature.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight booking showing entry and exit dates for Taiwan. Open-ended tickets are not accepted.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation / Invitation', description: 'An invitation letter from the host family in Taiwan, stating the purpose of visit, relationship, duration of stay, and confirming accommodation. If not staying with family, confirmed hotel bookings for the entire duration of stay.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Comprehensive travel insurance covering the entire duration of stay in Taiwan, with medical coverage for at least NT$1,000,000 (approx. USD 30,000) for medical expenses and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 3-6 months, showing sufficient funds to cover the entire stay in Taiwan. Also, Income Tax Returns (ITR) for the last 3 years. If sponsored, a sponsorship letter from the host along with their financial documents.', icon: '🏦', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Original invitation letter from the family member in Taiwan, clearly stating the relationship, purpose of visit, duration of stay, and contact details. Must be signed by the inviter and include their full address and phone number.', icon: '✉️', mandatory: true },
    { key: 'proof_of_relationship', title: 'Proof of Relationship', description: 'Documents proving the relationship between the applicant and the inviter (e.g., birth certificates, marriage certificates, household registration transcript, family photos, etc.).', icon: '👨‍👩‍👧‍👦', mandatory: true },
    { key: 'host_documents', title: 'Host\'s Documents', description: 'Copy of the inviter\'s Taiwan ID card (both sides) or Alien Resident Certificate (ARC/APRC) if not a citizen. Also, inviter\'s household registration transcript (Hukou) issued within the last 3 months.', icon: '🆔', mandatory: true },
    { key: 'employment_proof', title: 'Employment/Business Proof (Applicant)', description: 'If employed: Original No Objection Certificate (NOC) from employer, last 3 months\' salary slips, and company ID card. If self-employed: Business registration certificate, company bank statements, and ITRs. If student: Student ID card and a letter from the educational institution.', icon: '💼', mandatory: true },
    { key: 'ties_to_home_country', title: 'Proof of Ties to India', description: 'Documents demonstrating strong ties to India (e.g., property deeds, marriage certificate, family registration, school/college enrollment for students, etc.) to assure return to India.', icon: '🏠', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Complete Online Application Form', description: 'Fill out the visa application form on the official Bureau of Consular Affairs (BOCA) website (https://visawebapp.boca.gov.tw/). Print the completed form and sign it.' },
    { step: 2, title: 'Gather Required Documents', description: 'Collect all mandatory documents as per the checklist, ensuring they are complete, accurate, and meet the specified requirements.' },
    { step: 3, title: 'Schedule Appointment (if required) & Submit Application', description: 'Contact the Taipei Economic and Cultural Center (TECC) in India (Delhi or Chennai) to confirm if an appointment is required for submission. Submit the application form and all supporting documents in person at the TECC office.' },
    { step: 4, title: 'Pay Visa Fees', description: 'Pay the applicable visa fees (INR 4,000 for single entry, INR 8,000 for multiple entry, plus 50% extra for express service) at the TECC counter. Fees are typically paid in Indian Rupees at the prevailing exchange rate.' },
    { step: 5, title: 'Collect Passport with Visa', description: 'After the specified processing time (3 working days for standard, 1 working day for express), collect your passport with the affixed visa from the TECC office.' }
  ],
  specialRequirements: {
    entry_rules: 'N/A'
  }
};