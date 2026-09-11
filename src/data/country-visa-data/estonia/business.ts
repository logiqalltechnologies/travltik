export default {
  country: 'estonia',
  fromCountry: 'India',
  visaCategory: 'Business Visa (Schengen Type C)',
  authority: 'Ministry of Foreign Affairs of Estonia / Embassy of Estonia in New Delhi',
  channels: ['VFS Global', 'Embassy of Estonia in New Delhi'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€90 (~₹8,100)',
    vfsServiceFee: '€24 (~₹2,160)'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable',
    territorialScope: 'Schengen Area',
    validity: 'Not applicable',
    maxStay: 'Not applicable',
    invitationRequired: true,
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
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Completed and signed application form', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Business Invitation Letter', description: 'Official invitation from Estonian host company stating purpose, duration, and financial responsibility', icon: '✉️', mandatory: true },
    { key: 'employer_cover_letter', title: 'Employer Cover Letter', description: 'Letter from Indian employer detailing position, purpose, and sponsorship', icon: '📄', mandatory: true },
    { key: 'company_registration', title: 'Company Registration Proof', description: 'Certificate of Incorporation, GST registration', icon: '🏢', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel bookings or host company accommodation letter', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Schengen Travel Insurance', description: 'Minimum €30,000 coverage across Schengen states', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 6 months, ITR for 3 years', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete Application Form', description: 'Fill Schengen visa application form' },
    { step: 2, title: 'Book VFS Appointment', description: 'Schedule appointment at VFS Global Estonia Centre' },
    { step: 3, title: 'Gather Documents', description: 'Prepare all required documents including invitation and financial proof' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at VFS' },
    { step: 5, title: 'Track and Collect', description: 'Track status online and collect passport with visa' }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies. Business invitation must be from registered Estonian entity. Travel insurance mandatory.'
  }
};
