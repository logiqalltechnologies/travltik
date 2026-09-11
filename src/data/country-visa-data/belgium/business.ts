export default {
  country: 'belgium',
  fromCountry: 'India',
  visaCategory: 'Business Visa (Schengen Type C)',
  authority: 'Embassy of Belgium in New Delhi / Consulate General of Belgium in Mumbai',
  channels: ['VisaOnWeb Portal (visaonweb.diplomatie.be)', 'VFS Global', 'Embassy/Consulate'],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '€90 (~₹8,100)',
    vfsServiceFee: '₹2,250'
  },
  eVisa: {
    available: false,
    portal: 'https://visaonweb.diplomatie.be',
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
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond departure from Schengen, issued within last 10 years, min 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent color photos, white background, 70-80% face coverage', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'VisaOnWeb Application Form', description: 'Completed and signed VisaOnWeb application form with barcode', icon: '📋', mandatory: true },
    { key: 'invitation_letter', title: 'Business Invitation Letter', description: 'Official invitation from Belgian host company stating purpose, duration, and financial responsibility', icon: '✉️', mandatory: true },
    { key: 'employer_cover_letter', title: 'Employer Cover Letter', description: 'Letter from Indian employer on letterhead detailing position, purpose, and sponsorship', icon: '📄', mandatory: true },
    { key: 'company_registration', title: 'Company Registration Proof', description: 'Certificate of Incorporation, GST registration of Indian company', icon: '🏢', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel bookings or host company accommodation letter', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Schengen Travel Insurance', description: 'Minimum €30,000 coverage across Schengen states', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Personal and company bank statements for last 6 months, ITR for 3 years', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete VisaOnWeb Application', description: 'Fill online application at visaonweb.diplomatie.be' },
    { step: 2, title: 'Book VFS Appointment', description: 'Schedule appointment at VFS Global Belgium Centre' },
    { step: 3, title: 'Gather Documents', description: 'Prepare all required documents including invitation and financial proof' },
    { step: 4, title: 'Submit Application', description: 'Submit documents, biometrics, and pay fees at VFS' },
    { step: 5, title: 'Track and Collect', description: 'Track status online and collect passport with visa' }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies. Business invitation must be from registered Belgian entity. Travel insurance mandatory.'
  }
};