export default {
  country: 'afghanistan',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Afghanistan, New Delhi',
  channels: ['https://newdelhi.mfa.gov.af/', 'Embassy Direct'],
  processingTime: { eVisa: 'N/A', standardSticker: '7 working days', expressSticker: '3 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '100 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '30 days', stickerMultiple: 'N/A' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months from date of entry', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (33x48mm)', description: 'White background, taken within 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed visa application form obtained from the embassy portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter indicating place of stay', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Policy covering medical emergencies for the entire stay', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements (last 3 months) showing sufficient funds', icon: '🏦', mandatory: true },
    { key: 'invitation_letter', title: 'Business Invitation Letter', description: 'Letter from Afghan business partner on official letterhead, signed and stamped', icon: '📄', mandatory: true },
    { key: 'company_documents', title: 'Company Registration', description: 'Copy of Indian company registration certificate and PAN card', icon: '🏢', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Document Preparation', description: 'Gather all mandatory documents, ensure passport validity and photograph specifications.' },
    { step: 2, title: 'Complete Application Form', description: 'Fill the visa application form accurately on the embassy portal or obtain a hard copy.' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the consular fee of 100 USD directly at the embassy or via authorized bank transfer.' },
    { step: 4, title: 'Submit Application', description: 'Submit the completed form and documents to the Embassy of Afghanistan, New Delhi in person.' },
    { step: 5, title: 'Biometric & Interview (if required)', description: 'Attend any biometric capture or interview as instructed by the embassy.' },
    { step: 6, title: 'Visa Issuance', description: 'Collect the stamped business visa within the stipulated processing time.' }
  ],
  specialRequirements: { entry_rules: 'Business visa requires a valid invitation from an Afghan company and proof of business activity; no e‑visa option for Indian citizens.' }
};