export default {
  country: 'spain',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Consulate General of Spain in New Delhi / Mumbai',
  channels: [
    'https://www.exteriores.gob.es/Embajadas/NEWDELHI/en/Pages/Inicio.aspx',
    'https://india.blsspainvisas.com/',
    'https://www.exteriores.gob.es/Embajadas/NEWDELHI/en/Pages/Visas.aspx'
  ],
  processingTime: { eVisa: 'N/A', standardSticker: '15 calendar days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '90 EUR', vfsServiceFee: '15.45 EUR' },
  eVisa: { available: false, portal: '', territorialScope: '', validity: '', maxStay: '', invitationRequired: false, processing: '' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 3 months beyond intended stay, with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed and signed Schengen visa application form', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of travel plan', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Official invitation letter (Carta de Invitación) issued by the Police in Spain, or proof of relationship and accommodation', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Minimum €30,000 coverage for medical expenses and repatriation, valid for all Schengen countries', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents including the official invitation letter from Spain' },
    { step: 2, title: 'Book Appointment', description: 'Schedule appointment via BLS International portal' },
    { step: 3, title: 'Submit Application', description: 'Attend appointment at BLS centre, submit documents, and complete biometric capture' },
    { step: 4, title: 'Pay Fees', description: 'Pay visa fee (90 EUR) and BLS service fee (15.45 EUR) at the appointment centre' },
    { step: 5, title: 'Interview', description: 'Attend interview if required by consular officer' },
    { step: 6, title: 'Receive Visa', description: 'Collect passport with visa sticker from BLS or receive by courier' }
  ],
  specialRequirements: { entry_rules: 'Family visit visa allows stay up to 90 days within a 180-day period. Must provide an official invitation letter (Carta de Invitación) issued by the National Police in Spain and proof of relationship.' }
};