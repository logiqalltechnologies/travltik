export default {
  country: 'kosovo',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa (Short Stay Type C)',
  authority: 'Ministry of Foreign Affairs and Diaspora of the Republic of Kosovo',
  channels: ['Official Application Portal (visas.rks-gov.net)', 'Embassy / Consulate General of Kosovo (e.g., Istanbul, Sofia)'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 calendar days',
    expressSticker: 'Up to 30 calendar days (extendable to 60 days in exceptional cases)'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€40',
    vfsServiceFee: 'Not applicable (Direct submission to Kosovo Diplomatic Mission)'
  },
  eVisa: {
    available: false,
    portal: 'https://visas.rks-gov.net',
    territorialScope: 'Nationwide',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: true,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond intended departure date from Kosovo, with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photographs (35x45mm), white background, taken within the last 6 months', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Visa Application Form', description: 'Completed and printed application form registered via official Kosovo portal (visas.rks-gov.net)', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Official invitation from family member in Kosovo authenticated by local municipal authorities / Directorate for Migration and Foreigners', icon: '✉️', mandatory: true },
    { key: 'host_id_proof', title: 'Host ID/Residence Proof', description: 'Copy of host Kosovar passport/national ID or valid Kosovo residence permit', icon: '🪪', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Official certificates (birth/marriage certificate or family register) demonstrating relationship to the host', icon: '👨‍👩‍👧', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation or itinerary', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Host address confirmation or hotel reservation covering the intended stay', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Valid travel medical insurance with minimum coverage of €30,000 covering emergency medical care and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Personal bank statements for the last 3 to 6 months demonstrating sufficient funds for stay and return', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Employment Proof / NOC', description: 'Employer leave approval letter with recent pay slips, or business registration documents if self-employed', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete Online Pre-Application', description: 'Fill and submit the preliminary visa application form online at visas.rks-gov.net and print the completed form' },
    { step: 2, title: 'Gather & Authenticate Documents', description: 'Obtain authenticated host invitation from Kosovo local municipal authority along with all required supporting documents' },
    { step: 3, title: 'Submit at Diplomatic Mission', description: 'Lodge physical application and original documents in person at an accredited Embassy or Consulate General of Kosovo (e.g., Istanbul or Sofia)' },
    { step: 4, title: 'Pay Consular Fee', description: 'Pay the statutory consular fee of €40 as directed by the consular mission' },
    { step: 5, title: 'Track and Collect', description: 'Await decision (standard 15 calendar days) and collect passport with visa sticker upon approval' }
  ],
  specialRequirements: {
    entry_rules: 'Kosovo is NOT part of the Schengen Area. Holders of a valid multiple-entry Schengen visa or a valid residence permit from a Schengen member state are exempt from Kosovo visa requirements for stays up to 15 days.'
  }
};