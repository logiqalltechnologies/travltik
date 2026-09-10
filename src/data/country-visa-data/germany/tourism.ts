export default {
  country: 'germany',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa (Schengen Type C)',
  authority: 'Federal Foreign Office of Germany / German Embassy in New Delhi',
  channels: ['VIDEX Portal', 'VFS Global', 'Embassy/Consulate General of Germany'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 calendar days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€90 (~₹8,100)',
    vfsServiceFee: '€13.50 (~₹1,215)'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable',
    territorialScope: 'Schengen Area',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: false,
    processing: 'Not applicable'
  },
  stayDuration: {
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond departure from Schengen, issued within 10 years, 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent biometric photos, white background, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'VIDEX Application Form', description: 'Completed VIDEX application form with Section 54 declaration', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel bookings or host invitation covering entire stay', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Schengen Travel Insurance', description: 'Minimum €30,000 coverage across Schengen states', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months, ITR for 3 years', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Employment Proof / NOC', description: 'Employer leave letter with salary slips or business registration', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete VIDEX Application', description: 'Fill VIDEX application form online and print' },
    { step: 2, title: 'Book VFS Appointment', description: 'Schedule appointment at VFS Global Germany Centre' },
    { step: 3, title: 'Gather Documents', description: 'Prepare all required documents including insurance and financial proof' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at VFS' },
    { step: 5, title: 'Track and Collect', description: 'Track status online and collect passport with visa' }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies. Biometrics mandatory unless captured within last 59 months. Travel insurance must cover all Schengen states.'
  }
};
