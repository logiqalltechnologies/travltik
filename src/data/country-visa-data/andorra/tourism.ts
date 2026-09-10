export default {
  country: 'andorra',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa (Schengen required for transit)',
  authority: 'Embassy/Consulate of France or Spain in India (Schengen Visa Authority)',
  channels: [
    'VFS Global (for France Schengen Visa applications)',
    'BLS International (for Spain Schengen Visa applications)',
    'Embassy/Consulate of France in India',
    'Embassy/Consulate of Spain in India'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '10-20 working days',
    expressSticker: 'Not Applicable'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '90 EUR (~₹9,975)',
    vfsServiceFee: '₹2,200 - ₹2,500 (VFS Global/BLS International service fee)'
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
    stickerSingleDouble: 'Not Applicable (Multiple-entry Schengen visa required)',
    stickerMultiple: 'Up to 90 days within any 180-day period (Schengen rule)'
  },
  entryType: 'Multiple Entry (Schengen visa required for transit)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay with a minimum of 2 blank pages. All old passports, if any, should also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (not older than 6 months) color photographs with a white background and matt finish.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Duly completed and signed Schengen visa application form (online or printed consular form).', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking showing entry and exit from the Schengen Area.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel reservations or an invitation letter from a host in Andorra/Schengen Area.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Travel medical insurance with a minimum coverage of 30,000 EUR for emergency medical treatment, hospitalization, and repatriation, valid throughout the entire Schengen area and for the entire duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'financial_proof', title: 'Financial Proof', description: 'Original bank statements for the last 3-6 months, stamped and updated with bank seal, showing sufficient funds to cover the stay (e.g., minimum €108 per day for Spain). Income Tax Returns (ITR) for the last 2-3 years and salary slips for the last 3 months.', icon: '🏦', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'A personal cover letter stating the purpose of the visit, detailed itinerary, and duration of stay.', icon: '📝', mandatory: true },
    { key: 'employment_proof', title: 'Proof of Employment/Occupation', description: 'If employed: Employment letter with approved leave dates. If self-employed: Business registration documents.', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Determine Schengen Country of Application', description: 'Since Andorra is only accessible via France or Spain, apply for a Schengen visa through the Embassy/Consulate of the Schengen country you will enter first or spend the most time in.' },
    { step: 2, title: 'Prepare Documentation', description: 'Assemble all mandatory documents as per the Schengen visa requirements (listed above). Ensure all financial proofs and travel insurance meet the specified criteria.' },
    { step: 3, title: 'Complete Application Form & Book Appointment', description: 'Fill out the online Schengen visa application form for the chosen Schengen country (France or Spain) and book an appointment at their respective Visa Application Centre (VFS Global for France, BLS International for Spain).' },
    { step: 4, title: 'Submit Application & Pay Fee', description: 'Attend the appointment to submit your documents and provide biometrics (fingerprints and photograph). Pay the statutory consular fee (90 EUR) and the applicable service fee.' },
    { step: 5, title: 'Receive Visa', description: 'Track your application status and receive your multiple-entry Schengen visa.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders are not required to obtain a specific visa for Andorra. However, as Andorra can only be accessed by transiting through Spain or France (Schengen Area countries), a valid multiple-entry Schengen visa is mandatory to enter the Schengen Area and subsequently reach Andorra, and to re-enter the Schengen Area upon leaving Andorra.'
  }
};