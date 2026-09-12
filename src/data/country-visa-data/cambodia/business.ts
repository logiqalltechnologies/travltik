export default {
  country: 'cambodia',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs and International Cooperation, Cambodia',
  channels: ['https://evisa.gov.kh', 'VFS Global – Cambodia Visa Application Center', 'Embassy of Cambodia in New Delhi'],
  externalServiceProvider: 'VFS Global – Cambodia Visa Application Center (New Delhi)',
  processingTime: { eVisa: '3 working days', standardSticker: '7-10 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '30 USD', stickerConsularStandard: '30 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://evisa.gov.kh', territorialScope: 'Nationwide', validity: '30 days', maxStay: '30 days', invitationRequired: false, processing: '3 working days' },
  stayDuration: { eVisa: '30 days', stickerSingleDouble: '30 days', stickerMultiple: '30 days' },
  entryType: 'Single',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the date of entry', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online application via official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation letter from business partner', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage of at least 30,000 USD for medical expenses', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months showing sufficient funds', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Prepare Documents', description: 'Collect all required documents and ensure they meet specifications' },
    { step: 2, title: 'Submit Online Application', description: 'Fill out the e-visa application form on the official portal' },
    { step: 3, title: 'Pay Visa Fee', description: 'Pay the e-visa fee via accepted online payment methods' },
    { step: 4, title: 'Receive e-Visa', description: 'Download and print the e-visa approval letter before travel' },
    { step: 5, title: 'Border Entry', description: 'Present the printed e-visa, passport, and supporting documents at the Cambodian border' }
  ],
  specialRequirements: { entry_rules: 'No additional restrictions for business visa holders' }
};