export default {
  country: 'bangladesh',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'High Commission of Bangladesh, New Delhi',
  channels: ['https://visa.gov.bd', 'https://www.vfsglobal.com/India/Bangladesh/'],
  processingTime: { eVisa: 'N/A', standardSticker: '7-10 working days', expressSticker: '3-5 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '2000 BDT', vfsServiceFee: '200 BDT' },
  eVisa: { available: false, portal: '', territorialScope: '', validity: '', maxStay: '', invitationRequired: false, processing: '' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '1 year', stickerMultiple: '1 year' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay, with at least one blank page', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Form 1 available on the official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirming travel dates', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or employer’s address in Bangladesh', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage of at least 30,000 BDT for medical expenses', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds (minimum 50,000 BDT)', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents listed above' },
    { step: 2, title: 'Fill Application Form', description: 'Complete Form 1 on the official portal' },
    { step: 3, title: 'Pay Fees', description: 'Pay the consular fee and VFS service fee online or at the designated bank' },
    { step: 4, title: 'Submit Application', description: 'Submit the application and documents at VFS Global or directly at the High Commission' },
    { step: 5, title: 'Processing', description: 'Wait for the standard processing time (7-10 working days) or opt for express (3-5 working days)' },
    { step: 6, title: 'Collect Visa', description: 'Collect the visa sticker from the High Commission or receive it via courier' }
  ],
  specialRequirements: { entry_rules: 'Employer’s letter and work permit from Bangladesh Ministry of Labour required; HIV test not mandatory for stays ≤90 days, but required for stays >90 days' }
};