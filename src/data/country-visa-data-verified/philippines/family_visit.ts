export default {
  country: 'philippines',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Republic of the Philippines in New Delhi',
  channels: [
    'https://www.philippine-embassy.org.in',
    'https://visa.vfsglobal.com/ind/en/phl',
    'https://evisa.gov.ph'
  ],
  processingTime: { eVisa: 'N/A', standardSticker: '10-15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: 'INR 3,320 (USD 40)', vfsServiceFee: 'INR 1,180' },
  eVisa: { available: false, portal: 'https://evisa.gov.ph', territorialScope: '', validity: '', maxStay: '', invitationRequired: false, processing: '' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '59 days', stickerMultiple: '59 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay, with at least two blank visa pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed and signed FA Form No. 2 (Visa Application Form).', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip or onward flight ticket.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation / Invitation', description: 'Formal invitation letter from host family in the Philippines along with host Philippine ID/passport, and proof of residence/relationship.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Travel medical insurance covering the duration of stay in the Philippines.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 6 months certified by the bank, demonstrating sufficient financial means.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Prepare Documents', description: 'Collect all required documents including sponsor invitation letter, proof of relationship, and financial proofs.' },
    { step: 2, title: 'Schedule Appointment', description: 'Book an appointment at the nearest VFS Global Philippines Visa Application Centre in India.' },
    { step: 3, title: 'Submit Application & Pay Fees', description: 'Submit documents at VFS Global and pay the consular fee (INR 3,320) and VFS service fee (INR 1,180).' },
    { step: 4, title: 'Processing', description: 'Wait for the Philippine Embassy/Consulate to process the visa application (10-15 working days).' },
    { step: 5, title: 'Collect Passport', description: 'Collect your passport with the stamped 9(a) visitor visa from VFS or via courier.' }
  ],
  specialRequirements: { entry_rules: 'No mandatory health requirements for standard entry. Yellow fever certificate required only if arriving from an endemic area.' }
};