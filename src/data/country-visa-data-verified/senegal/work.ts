export default {
  country: 'senegal',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs and International Cooperation of Senegal',
  channels: ['https://www.mfa.gov.sn/', 'https://www.vfsglobal.com/Senegal/India/', 'Embassy of Senegal in New Delhi'],
  processingTime: { eVisa: 'N/A', standardSticker: '10 working days', expressSticker: '5 working days' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '100 USD', vfsServiceFee: '30 USD' },
  eVisa: { available: false, portal: '', territorialScope: '', validity: '', maxStay: '', invitationRequired: false, processing: '' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: '90 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay, with at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal or printed form', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of onward travel', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or employer-provided accommodation details', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation, valid for the entire stay', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds for stay', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect passport, photographs, invitation letter, employment contract, and financial statements' },
    { step: 2, title: 'Complete Application', description: 'Fill out the visa application form online or on paper' },
    { step: 3, title: 'Pay Visa Fees', description: 'Pay the consular fee and VFS service fee via the designated payment method' },
    { step: 4, title: 'Submit Application', description: 'Submit the application and documents at the VFS center or embassy' },
    { step: 5, title: 'Processing', description: 'Wait for standard processing (10 working days) or express (5 working days)' },
    { step: 6, title: 'Collect Visa', description: 'Collect the stamped visa from the embassy or receive it by courier' }
  ],
  specialRequirements: { entry_rules: 'Work visa allows multiple entries for the duration of the employment contract, typically up to 1 year, renewable upon renewal of contract' }
};