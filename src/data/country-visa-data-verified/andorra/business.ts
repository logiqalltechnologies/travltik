export default {
  country: 'andorra',
  fromCountry: 'India',
  visaCategory: 'Business Visa (Schengen C for transit to Andorra)',
  authority: 'Embassy of Spain in India / Consulate General of Spain in Mumbai',
  channels: [
    'BLS International (Official Partner for Spain in India)',
    'Embassy / Consulate of Spain'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '15 working days (can extend up to 30 days in complex cases or during busy periods)',
    expressSticker: 'Not Applicable'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '80 EUR (~₹8,800 - ₹9,000, subject to exchange rate)',
    vfsServiceFee: 'INR 1802 (BLS International service charge, inclusive of 18% GST)'
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
    stickerSingleDouble: 'Up to 90 days within any 180-day period in the Schengen Area',
    stickerMultiple: 'Up to 90 days within any 180-day period in the Schengen Area'
  },
  entryType: 'Multiple Entry (Required for re-entry into Schengen Area after visiting Andorra)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay in the Schengen area with at least 2 blank pages. All previous passports, if any, should also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (not older than 6 months) passport-sized photographs with a white background, matte finish, and 80% face coverage.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Duly filled and signed Schengen visa application form. For minors, both parents must sign.', icon: '📋', mandatory: true },
    { key: 'cover_letter_india', title: 'Cover Letter from Indian Company', description: 'Original letter from the Indian company on letterhead, stating the applicant\'s position, purpose of visit, duration, and financial responsibility for the trip.', icon: '📄', mandatory: true },
    { key: 'invitation_andorra', title: 'Invitation Letter from Andorran Company', description: 'Original invitation letter from the host company in Andorra on letterhead, detailing the purpose of the visit, duration, accommodation arrangements, and confirmation of financial responsibility for the applicant\'s stay.', icon: '✉️', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight tickets to and from the Schengen area, and onward travel details to Andorra.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel bookings or other accommodation arrangements for the entire duration of stay in Andorra and any transit stops in the Schengen area.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Schengen-compliant travel medical insurance with a minimum coverage of 30,000 EUR for medical emergencies, hospitalization, and repatriation, valid for the entire duration of stay in the Schengen area and Andorra.', icon: '🛡️', mandatory: true },
    { key: 'financial_proof', title: 'Financial Proof', description: 'Original personal bank statements for the last 3-6 months, Income Tax Returns (ITR) for the last 2-3 years, and salary slips for the last 3 months (if employed), demonstrating sufficient funds for the trip.', icon: '🏦', mandatory: true },
    { key: 'company_registration_india', title: 'Indian Company Registration Documents', description: 'Proof of registration of the Indian company (e.g., Certificate of Incorporation, Memorandum of Association, GST certificate, Partnership deed).', icon: '🏢', mandatory: true },
    { key: 'noc_employer', title: 'No Objection Certificate (NOC)', description: 'NOC from the employer in India stating approval for the leave and business trip (if employed).', icon: '📜', mandatory: true },
    { key: 'employment_proof', title: 'Proof of Employment', description: 'Employment contract, appointment letter, or recent salary slips (if employed).', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Determine Visa Eligibility and Jurisdiction', description: 'Confirm that a multiple-entry Schengen visa is required for transit to Andorra and identify the correct Schengen country embassy/consulate (e.g., Spain or France) based on your itinerary and jurisdiction in India.' },
    { step: 2, title: 'Gather Mandatory Documents', description: 'Assemble all required documents for a Schengen Business Visa, ensuring they meet the specifications of the chosen Schengen country\'s embassy/consulate.' },
    { step: 3, title: 'Complete Application Form and Book Appointment', description: 'Fill out the online Schengen visa application form accurately and book an appointment at the relevant Visa Application Centre (e.g., BLS International for Spain) or embassy/consulate.' },
    { step: 4, title: 'Submit Application and Pay Fees', description: 'Attend the appointment, submit your documents, provide biometrics (if required), and pay the consular visa fee and any applicable service charges.' },
    { step: 5, title: 'Track Application and Receive Passport', description: 'Track the status of your visa application and collect your passport with the affixed Schengen visa once processed.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders require a valid multiple-entry Schengen visa to enter Andorra, as Andorra is landlocked between Spain and France and does not have its own international airport. Entry to Andorra is only possible by transiting through the Schengen Area. A single-entry Schengen visa will not allow re-entry into the Schengen Area after visiting Andorra. No separate Andorran visa is issued or required.'
  }
};