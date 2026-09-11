export default {
  country: 'moldova',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Republic of Moldova in India',
  channels: ['https://evisa.gov.md', 'Embassy of the Republic of Moldova in New Delhi'],
  processingTime: { eVisa: 'Up to 10 calendar days', standardSticker: '10-15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '80 EUR', stickerConsularStandard: '80 EUR', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://evisa.gov.md', territorialScope: 'Nationwide', validity: '90 days', maxStay: '90 days within 180 days', invitationRequired: true, processing: 'Up to 10 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport with at least 3 months validity beyond intended departure date from Moldova and at least two blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Recent color photograph on white background', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application on evisa.gov.md', icon: '📋', mandatory: true },
    { key: 'invitation', title: 'Official Invitation', description: 'Official invitation issued by the General Inspectorate for Migration (IGM) of Moldova (exempt if holding valid Schengen/USA/UK/Canada visa or residence permit)', icon: '✉️', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight ticket or itinerary', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Proof of living conditions at the family host in Moldova or hotel reservation', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Coverage of at least €30,000 for medical emergency and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements showing minimum 30 EUR per day of stay (minimum 300 EUR total)', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain Official Invitation', description: 'Host in Moldova applies for an official invitation through the General Inspectorate for Migration (IGM) of Moldova unless exempt' },
    { step: 2, title: 'Create eVisa Account', description: 'Register on https://evisa.gov.md and fill out the online application form' },
    { step: 3, title: 'Upload Required Documents', description: 'Upload clear scans of passport, photo, invitation letter, flight reservation, accommodation, insurance, and bank statement' },
    { step: 4, title: 'Pay Consular Fee', description: 'Pay the statutory consular fee of 80 EUR electronically' },
    { step: 5, title: 'Receive Approved eVisa', description: 'Download the approved eVisa PDF sent via email upon processing completion' },
    { step: 6, title: 'Travel to Moldova', description: 'Present printed eVisa, valid passport, and original supporting documents upon arrival' }
  ],
  specialRequirements: { entry_rules: 'Standard 90 days within any 180-day rule applies. Official invitation from IGM is mandatory for Indian citizens unless holding a valid Schengen, EU, USA, UK, or Canada visa/residence permit.' }
};