export default {
  country: 'afghanistan',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs of Afghanistan',
  channels: ['https://visa.afghanembassy.gov.in/', 'VFS Global Service Center', 'Embassy Direct'],
  processingTime: { eVisa: 'N/A', standardSticker: '7 working days', expressSticker: '3 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '30 USD', vfsServiceFee: '20 USD' },
  eVisa: { available: false, portal: '', territorialScope: '', validity: '', maxStay: '', invitationRequired: false, processing: '' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '180 days', stickerMultiple: 'N/A' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'University dorm or host accommodation confirmation', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months and admission fee receipt', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents including admission letter and financial proof' },
    { step: 2, title: 'Complete Application', description: 'Fill out the visa application form on the official portal' },
    { step: 3, title: 'Pay Fees', description: 'Pay the visa fee and VFS service fee online' },
    { step: 4, title: 'Submit Application', description: 'Submit the application and documents to the embassy or VFS center' },
    { step: 5, title: 'Receive Visa', description: 'Collect the visa sticker from the embassy or receive it via courier' }
  ],
  specialRequirements: { entry_rules: 'Student visa allows stay up to 180 days, single entry only' }
};