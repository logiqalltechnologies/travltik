export default {
  country: 'bahrain',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Bahrain in New Delhi',
  channels: ['https://www.evisa.gov.bh/', 'VFS Global Bahrain Visa Application Center', 'Embassy Direct'],
  processingTime: { eVisa: '3-5 working days', standardSticker: '10-15 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: '16 BHD', stickerConsularStandard: '16 BHD', vfsServiceFee: '12 BHD' },
  eVisa: { available: true, portal: 'https://www.evisa.gov.bh/', territorialScope: 'Nationwide', validity: '90 days', maxStay: '30 days', invitationRequired: false, processing: '3-5 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '14 days', stickerMultiple: '30 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the date of entry and have at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the online application on the official portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking confirmation or invitation letter.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3 months showing sufficient funds.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents as listed above.' },
    { step: 2, title: 'Apply Online', description: 'Fill out the eVisa application on https://www.evisa.gov.bh/ and upload documents.' },
    { step: 3, title: 'Pay Fees', description: 'Pay the eVisa fee (16 BHD: 4 BHD processing + 12 BHD issuance fee) online.' },
    { step: 4, title: 'Receive eVisa', description: 'The eVisa will be emailed within 3-5 working days. Print a copy for travel.' },
    { step: 5, title: 'Travel to Bahrain', description: 'Present the eVisa and supporting documents at the border.' }
  ],
  specialRequirements: { entry_rules: 'Passport must be valid for at least 6 months beyond the date of entry. No additional health mandates for Bahrain.' }
};