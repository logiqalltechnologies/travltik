export default {
  country: 'russia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa (Private Visa)',
  authority: 'Ministry of Foreign Affairs of the Russian Federation (MFA)',
  channels: ['Unified eVisa Portal (electronic-visa.kdmid.ru)', 'Russian Visa Application Centre (VFS Global)', 'Consular Section of Russian Embassy'],
  processingTime: {
    eVisa: '4 calendar days',
    standardSticker: '7-20 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: '~52 USD (~₹4,300)',
    stickerConsularStandard: 'Single Entry: ₹6,720; Double Entry: ₹10,752',
    vfsServiceFee: '₹1,200 - ₹2,500'
  },
  eVisa: {
    available: true,
    portal: 'electronic-visa.kdmid.ru',
    territorialScope: 'Entire Russian Federation (Nationwide)',
    validity: '60 calendar days from issue date',
    maxStay: 'Up to 16 calendar days per entry',
    invitationRequired: false,
    processing: '4 calendar days'
  },
  stayDuration: {
    eVisa: 'Up to 16 days',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 1 year (Max 90 days per 180-day period)'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond exit date with 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Biometric Passport Photographs (35×45mm)', description: 'Recent color photos, white background, 70-80% face coverage', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Consular Electronic Application Form', description: 'Complete online at electronic-visa.kdmid.ru (eVisa) or visa.kdmid.ru (Sticker)', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Private Invitation Letter', description: 'Official invitation from Russian citizen relative approved by MFA/GUVM (mandatory for Sticker, not required for eVisa)', icon: '✉️', mandatory: false },
    { key: 'host_id_proof', title: 'Host ID/Residence Proof', description: 'Copy of host Russian passport or residence permit', icon: '🪪', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Birth certificate, marriage certificate, or family register', icon: '👨👩👧', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Host address proof or hotel bookings', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Medical Travel Insurance', description: 'Minimum €30,000 coverage across Russian Federation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months, ITR for 3 years', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Select Application Mode', description: 'For stays up to 16 days → Unified eVisa. For longer stays → Regular Sticker Visa' },
    { step: 2, title: 'Obtain Documentation', description: 'For Sticker Visa: Get Private Invitation from Russian relative' },
    { step: 3, title: 'Fill Online Application', description: 'Complete on electronic-visa.kdmid.ru (eVisa) or visa.kdmid.ru (Sticker)' },
    { step: 4, title: 'Pay Fees / Book Appointment', description: 'Pay online for eVisa, or book VFS/Consulate slot for Sticker' },
    { step: 5, title: 'Submit & Biometrics', description: 'Upload digital docs for eVisa, or submit physical dossier at VFS' },
    { step: 6, title: 'Receive Visa', description: 'Download eVisa PDF (within 4 days) or collect stamped passport' }
  ],
  specialRequirements: {
    entry_rules: 'No invitation letter needed for Unified eVisa (16-day limit). Registration with migration authorities required within 7 business days for stays exceeding 7 days.'
  }
};