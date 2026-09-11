export default {
  country: 'moldova',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Republic of Moldova in India',
  channels: ['https://evisa.gov.md', 'Embassy Direct'],
  processingTime: { eVisa: '10 calendar days', standardSticker: '10 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: '60 EUR', stickerConsularStandard: '60 EUR', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://evisa.gov.md', territorialScope: 'Nationwide', validity: '90 days', maxStay: '90 days', invitationRequired: true, processing: '10 working days' },
  stayDuration: { eVisa: '90 days within 180 days', stickerSingleDouble: '90 days within 180 days', stickerMultiple: '90 days within 180 days' },
  entryType: 'Single',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 3 months beyond intended departure date, with at least two blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application form on evisa.gov.md', icon: '📋', mandatory: true },
    { key: 'invitation', title: 'IGM Official Invitation Letter', description: 'Official invitation issued by the General Inspectorate for Migration (IGM) of Moldova (exempt if holding valid Schengen/EU/US/UK visa or residence permit)', icon: '✉️', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight ticket', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or written undertaking from host/partner in Moldova', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Coverage of at least €30,000 for medical expenses and repatriation valid in Moldova', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Proof of funds equivalent to at least €30 per day for the duration of stay, but not less than €300', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete Online Application', description: 'Fill out the short-stay visa (Type C/BUS) application form on the official portal evisa.gov.md' },
    { step: 2, title: 'Upload Required Documents', description: 'Upload scanned copies of passport, photo, IGM invitation, insurance, bank statement, and flight/hotel bookings' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the statutory consular fee of €60 online using a valid debit or credit card' },
    { step: 4, title: 'Processing', description: 'Wait up to 10 calendar days for the consular authority to review your application' },
    { step: 5, title: 'Receive & Print eVisa', description: 'Download and print the eVisa document sent to your email to present at border control upon entry' }
  ],
  specialRequirements: { entry_rules: 'Maximum stay of 90 days within any 180-day period. Official invitation from the General Inspectorate for Migration (IGM) is mandatory unless holding a valid visa/residence permit issued by an EU/Schengen member state, USA, UK, Canada, or Australia.' }
};