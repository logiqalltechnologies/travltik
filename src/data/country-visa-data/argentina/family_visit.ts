export default {
  country: 'argentina',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Argentina in New Delhi / Consulate General of Argentina in Mumbai',
  channels: ['https://eindi.cancilleria.gob.ar/', 'https://www.migraciones.gob.ar/ave/index.htm'],
  processingTime: { eVisa: '20 working days', standardSticker: '10-15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '200 USD', stickerConsularStandard: '150 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://www.migraciones.gob.ar/ave/index.htm', territorialScope: 'Argentina', validity: '3 months', maxStay: '90 days', invitationRequired: false, processing: '20 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (40x40mm)', description: 'White background, 3/4 profile from right side, neutral expression, without glasses.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the visa application form (Formulario de Solicitud de Visa) in English or Spanish.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Round-trip flight booking or proof of travel plans.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or an official invitation letter from the family member in Argentina (written in Spanish, certified by an Argentine Notary Public and legalized by the Colegio de Escribanos).', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage of at least 30,000 USD for medical expenses and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent 6 months bank statements showing sufficient funds, along with international credit card copies and salary slips for the last 3 months.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents, including the legalized invitation letter from your family member in Argentina.' },
    { step: 2, title: 'Request Appointment', description: 'Send an email to the Embassy of Argentina in New Delhi or the Consulate General in Mumbai (depending on your jurisdiction) to request a visa interview appointment.' },
    { step: 3, title: 'Fill Application', description: 'Complete the visa application form and prepare the physical dossier.' },
    { step: 4, title: 'Attend Interview & Submit', description: 'Attend the mandatory personal interview at the Embassy/Consulate, submit all physical documents, and pay the consular fee of 150 USD in equivalent INR.' },
    { step: 5, title: 'Processing', description: 'Wait for the visa processing, which typically takes 10 to 15 working days.' },
    { step: 6, title: 'Collect Passport', description: 'Collect your passport with the stamped visa from the Embassy/Consulate.' }
  ],
  specialRequirements: { entry_rules: 'If applying for the eVisa (AVE), the applicant must hold a valid US Category B1/B2 visa or a valid Schengen visa. For the sticker visa, an official invitation letter registered with RENURE (Registro Nacional de Unicos de Requirentes de Extranjeros) is mandatory.' }
};