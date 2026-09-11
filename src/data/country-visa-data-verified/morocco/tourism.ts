export default {
  country: 'morocco',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Morocco in New Delhi',
  channels: ['https://www.acces-maroc.ma/', 'VFS Global Morocco Visa Application Center', 'Embassy of Morocco in New Delhi'],
  processingTime: { eVisa: '3 working days (Express: 1 working day)', standardSticker: '10-15 working days' },
  fees: { eVisaStandard: '770 MAD', eVisaExpress: '1100 MAD', stickerConsularStandard: '330 MAD', vfsServiceFee: '1,516 INR' },
  eVisa: { available: true, portal: 'https://www.acces-maroc.ma/', territorialScope: 'Nationwide', validity: '180 days', maxStay: '30 days', invitationRequired: false, processing: '1-3 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '30-90 days', stickerMultiple: '90 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression, 2 copies.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via the official eVisa portal (acces-maroc.ma) or printed application form for sticker visa via VFS Global.', icon: '📋', mandatory: true },
    { key: 'qualifying_visa', title: 'Qualifying Visa/Residence Permit (for eVisa)', description: 'Indian citizens applying for eVisa must possess a valid visa or residence permit from Schengen, USA, UK, Canada, Australia, Japan, Ireland, or New Zealand (valid for at least 90-180 days). Otherwise, apply for a sticker visa via VFS Global.', icon: '🛂', mandatory: false },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking with dates and flight numbers.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or accommodation confirmation with address and dates.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Insurance covering medical expenses of at least €30,000 for the duration of stay.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for the last 3 months showing sufficient funds for the trip.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Choose Visa Route', description: 'Check eVisa eligibility via acces-maroc.ma (requires valid US/UK/Schengen/etc. visa/residence permit). If not eligible, apply for a sticker visa through VFS Global.' },
    { step: 2, title: 'Complete Application', description: 'Fill in details online on the official portal (acces-maroc.ma) or complete the VFS Morocco visa form.' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay 770 MAD (standard) or 1100 MAD (express) online for eVisa, or pay consular and VFS service fees at the visa application center.' },
    { step: 4, title: 'Submit Application', description: 'Submit online for eVisa or submit passport and documents in person at VFS Global.' },
    { step: 5, title: 'Receive Visa', description: 'Download the approved eVisa sent via email or collect the stamped passport from VFS Global.' },
    { step: 6, title: 'Travel to Morocco', description: 'Carry the printed visa authorization and supporting documents upon entry.' }
  ],
  specialRequirements: { entry_rules: 'Indian passport holders can apply for the eVisa only if they hold a valid visa or residence permit from Schengen, USA, UK, Canada, Australia, Japan, Ireland, or New Zealand. All other Indian passport holders must obtain a sticker visa via VFS Global. eVisa maximum stay is 30 days.' }
};