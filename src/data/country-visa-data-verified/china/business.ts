export default {
  country: 'china',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the People\'s Republic of China in New Delhi',
  externalServiceProvider: 'VFS Global (China Visa Application Service Center)',
  channels: ['https://visa.china-embassy.gov.in/', 'https://www.vfsglobal.com/China/India/', 'https://chinaembassy.gov.in/'],
  processingTime: { eVisa: 'N/A', standardSticker: '4 working days', expressSticker: '3 working days' },
  fees: { eVisaTotal: 'N/A', consularFee: '4000 INR', serviceFee: '4700 INR' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '30 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport with at least 6 months validity beyond intended stay and at least one blank page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter with accommodation details.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage of at least 30,000 CNY for medical expenses and repatriation.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds for stay.', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Prepare Documents', description: 'Gather all required documents as listed above.' },
    { step: 2, title: 'Submit Application', description: 'Fill out the online application form and upload scanned copies of documents.' },
    { step: 3, title: 'Pay Fees', description: 'Pay the visa fee and VFS service fee online.' },
    { step: 4, title: 'Schedule Appointment', description: 'Book an appointment at the VFS center or embassy for biometric capture.' },
    { step: 5, title: 'Attend Interview', description: 'Attend the interview and submit original documents for verification.' },
    { step: 6, title: 'Collect Visa', description: 'Collect the stamped visa from the embassy or receive it via courier.' }
  ],
  specialRequirements: { entry_rules: 'Invitation letter from a registered Chinese company is mandatory. No Schengen or US rules apply.' }
};