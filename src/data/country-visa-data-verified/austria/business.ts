export default {
  country: 'austria',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Austria in India',
  channels: [
    'VFS Global Visa Application Centres',
    'Embassy / Consulate of Austria in India'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days (can extend up to 30-60 working days during peak season or for complex cases)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 80 (~₹7,080)',
    vfsServiceFee: '₹2,433'
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
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay, issued within the last 10 years, with at least two blank pages. All previous passports, if any, must also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (taken within the last 6 months) passport-sized (35x45mm) color photographs with a white background, showing 70-80% face coverage and a neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Duly filled, dated, and signed by the applicant.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservations, including onward travel within the Schengen area if applicable.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel reservations or a letter of invitation from the host company in Austria, detailing the accommodation arrangements.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Valid for all Schengen states, covering the entire period of stay, with a minimum coverage of EUR 30,000 for medical emergencies, hospitalization, and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Financial Means', description: 'Personal bank statements for the last 3-6 months, stamped and signed by the bank. Income Tax Returns (ITR) for the last 2-3 years. Salary slips for the last 3 months (if employed). Company bank statements for the last 3-6 months (if self-employed). Proof of sufficient funds, generally equivalent to €50 per day of stay.', icon: '🏦', mandatory: true },
    { key: 'company_cover_letter', title: 'Cover Letter from Indian Company', description: 'On company letterhead, stating the applicant\'s designation, purpose of visit, duration of stay, and financial responsibility for the trip.', icon: '📄', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Austrian Host Company', description: 'On company letterhead, detailing the purpose and duration of the visit, scheduled business meetings or training, accommodation arrangements, and indicating if the host company will cover expenses.', icon: '✉️', mandatory: true },
    { key: 'occupation_proof', title: 'Proof of Occupation/Employment', description: 'For employed individuals: Employment contract and a No Objection Certificate (NOC) from the employer. For self-employed individuals: Company registration certificate, GST registration number (for India-based companies), and Memorandum and Articles of Association.', icon: '💼', mandatory: true },
    { key: 'passport_copy', title: 'Passport Copy', description: 'Color copy of the passport\'s bio-data page and last page.', icon: '🖨️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility', description: 'Confirm eligibility for a Schengen Business Visa for Austria.' },
    { step: 2, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents as per the checklist.' },
    { step: 3, title: 'Fill Application Form & Book Appointment', description: 'Complete the online or printed application form and schedule an appointment at VFS Global or the Embassy/Consulate.' },
    { step: 4, title: 'Submit Documents & Pay Fees', description: 'Attend the appointment, submit the application dossier, provide biometrics, and pay the consular and service fees.' },
    { step: 5, title: 'Receive Clearance', description: 'Track the application status and collect the passport with the visa once processed.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders require a Schengen visa for business travel to Austria. The maximum stay allowed is 90 days within any 180-day period across the entire Schengen Area. Biometrics (fingerprints and digital photograph) are mandatory for all Schengen visa applications.'
  }
};