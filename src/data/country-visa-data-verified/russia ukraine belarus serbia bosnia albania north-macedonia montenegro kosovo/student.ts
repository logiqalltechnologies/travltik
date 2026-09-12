export default {
  country: 'russia ukraine belarus serbia bosnia albania north-macedonia montenegro kosovo',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Russia in New Delhi',
  channels: ['https://visa.kdmid.ru', 'https://visa.vfsglobal.com/ind/en/rus', 'https://india.mid.ru'],
  processingTime: { eVisa: 'N/A', standardSticker: '4 to 20 working days', expressSticker: '1 to 3 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '6,480 INR', vfsServiceFee: '1,152 INR' },
  eVisa: { available: false, portal: 'https://evisa.kdmid.ru', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Single',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport with at least 6 months validity and 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online or printed form', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'University accommodation letter or hotel booking', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months and admission fee receipt', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents including admission letter, financial proof, and insurance.' },
    { step: 2, title: 'Submit Application', description: 'Fill out the visa application form and upload documents online or at the embassy.' },
    { step: 3, title: 'Pay Fees', description: 'Pay the visa fee via bank transfer or at the VFS service center.' },
    { step: 4, title: 'Attend Interview', description: 'Schedule and attend a visa interview at the embassy or consulate.' },
    { step: 5, title: 'Receive Visa', description: 'Collect the visa sticker from the embassy or receive it by mail after processing.' }
  ],
  specialRequirements: { entry_rules: 'Student visa requires admission letter, proof of financial means, health insurance, and a valid passport with at least 6 months validity.' }
};