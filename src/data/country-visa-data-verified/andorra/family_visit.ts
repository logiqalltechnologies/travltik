export default {
  country: 'andorra',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy/Consulate of France or Spain in India (for Schengen Visa)',
  channels: [
    'VFS Global (for France)',
    'BLS International (for Spain)',
    'Embassy/Consulate of France in India',
    'Embassy/Consulate of Spain in India'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '15 working days (up to 45 days in exceptional cases)',
    expressSticker: 'Not Applicable'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'Varies by location (approx. 20-30 EUR equivalent in INR)'
  },
  eVisa: {
    available: false,
    portal: 'Not Applicable',
    territorialScope: 'Not Applicable',
    validity: 'Not Applicable',
    maxStay: 'Not Applicable',
    invitationRequired: false,
    processing: 'Not Applicable'
  },
  stayDuration: {
    eVisa: 'Not Applicable',
    stickerSingleDouble: 'Not Applicable (Single/Double entry Schengen visa is not recommended for Andorra)',
    stickerMultiple: 'Up to 90 days within any 180-day period (Schengen rule)'
  },
  entryType: 'Multiple Entry (Schengen Visa)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay with a minimum of 2 blank pages. All old passports, if any, must also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (not older than 6 months) color photographs with a white background and matt finish, meeting Schengen specifications.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Duly completed and signed online or printed consular form for the chosen Schengen country (France or Spain).', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking showing entry and exit from the Schengen area.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Invitation letter from the host in Andorra or the Schengen country of entry, along with their proof of residence. If staying in a hotel, confirmed hotel bookings for the entire duration of stay in Andorra and the Schengen area.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Mandatory travel medical insurance with a minimum coverage of EUR 30,000 for emergency medical treatment, hospitalization, and repatriation, valid throughout the entire Schengen area and for the entire duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 6 months, stamped and updated by the bank, showing sufficient funds to cover the stay. Income Tax Returns (ITR) or Form 16 for the last 3 years.', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Proof of Employment/Occupation', description: 'If employed: Original letter from employer stating position, salary, and approved leave dates. If self-employed: Business registration certificate and company bank statements. If student: Bonafide certificate from educational institution.', icon: '💼', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Original invitation letter from the family member residing in Andorra or the Schengen country, stating the purpose and duration of the visit, relationship with the applicant, and accommodation arrangements. A copy of the host\'s passport/ID and residence permit (if applicable) is also required.', icon: '✉️', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Documents proving the relationship with the inviting family member (e.g., birth certificate, marriage certificate).', icon: '👨‍👩‍👧‍👦', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'A personal cover letter explaining the purpose of the visit, detailed itinerary, and acknowledging the requirement of a multiple-entry Schengen visa to access Andorra.', icon: '📝', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Determine Entry Point and Apply for Schengen Visa', description: 'Since Andorra is only accessible via France or Spain, choose the Schengen country through which you will enter first or spend the most time, and apply for a multiple-entry Schengen C visa (short-stay) at their Embassy/Consulate or VFS Global (France) / BLS International (Spain) center in India.' },
    { step: 2, title: 'Prepare Documentation', description: 'Assemble all mandatory documents as per the Schengen visa requirements for a family visit, ensuring all financial and accommodation proofs are up-to-date and an invitation letter is secured.' },
    { step: 3, title: 'Book Appointment and Submit Application', description: 'Book an appointment online with VFS Global (France) or BLS International (Spain), pay the consular and service fees, and submit your application along with biometrics.' },
    { step: 4, title: 'Receive Visa Clearance', description: 'Track your application status and collect your passport with the affixed multiple-entry Schengen visa once approved.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders do not require a separate visa for Andorra. However, as Andorra is landlocked and accessible only via France or Spain, a valid multiple-entry Schengen visa is mandatory to enter the Schengen Area and subsequently Andorra. A single-entry Schengen visa is insufficient as it would not permit re-entry into the Schengen Area upon leaving Andorra.'
  }
};