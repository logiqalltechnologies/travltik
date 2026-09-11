export default {
  country: 'egypt',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Arab Republic of Egypt in New Delhi',
  channels: ['Embassy of the Arab Republic of Egypt in New Delhi', 'Consulate General of the Arab Republic of Egypt in Mumbai'],
  processingTime: { eVisa: 'N/A', standardSticker: '5-7 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '1,900 INR', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'https://visa2egypt.gov.eg/', territorialScope: 'Nationwide', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the date of arrival with at least two blank pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent passport-size color photographs taken against a plain white background within the last 6 months.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Visa Application Form', description: 'Duly completed and signed Egypt visa application form.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return or onward flight ticket itinerary.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel reservation covering the entire duration of stay in Egypt.', icon: '🏨', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 6 months stamped and signed by the bank, showing sufficient balance.', icon: '🏦', mandatory: true },
    { key: 'cover_letter', title: 'Covering Letter', description: 'Personal covering letter addressed to the Embassy of Egypt stating the purpose and dates of travel.', icon: '📝', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Prepare all required physical documents, photographs, and bank statements.' },
    { step: 2, title: 'Fill Application Form', description: 'Complete and sign the official consular visa application form.' },
    { step: 3, title: 'Submit Application', description: 'Submit the application in person or through an authorized representative directly at the Embassy of Egypt in New Delhi or Consulate in Mumbai.' },
    { step: 4, title: 'Pay Consular Fee', description: 'Pay the statutory consular fee of INR 1,900 (single entry) via cash or demand draft as instructed by the mission.' },
    { step: 5, title: 'Collect Passport', description: 'Collect your passport with the stamped sticker visa after processing (typically 5 to 7 working days).' }
  ],
  specialRequirements: { entry_rules: 'Indian passport holders require a consular sticker visa prior to travel unless they hold a valid, used visa or residence permit from the US, UK, Schengen Area, Japan, Canada, Australia, New Zealand, or GCC countries, which may qualify for Visa on Arrival. No mandatory health or vaccination requirements for entry from India unless arriving from a Yellow Fever endemic zone.' }
};