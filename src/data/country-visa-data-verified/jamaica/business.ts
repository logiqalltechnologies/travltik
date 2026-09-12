export default {
  country: 'jamaica',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Jamaica in New Delhi',
  externalServiceProvider: 'VFS Global',
  channels: ['https://www.jamaicaembassy.gov.in', 'https://www.vfsglobal.com/Jamaica/India', 'https://www.jamaicaembassy.gov.in/contact'],
  processingTime: { eVisa: 'N/A', standardSticker: '10-15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '7200 INR', vfsServiceFee: '1500 INR' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 30, stickerMultiple: 30 },
  entryType: 'Single/Multiple',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online or paper form as per embassy instructions', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or invitation letter from Jamaican business partner', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements showing sufficient funds for stay', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Complete C5 Immigration Form', description: 'Fill out the mandatory C5 form at enterjamaica.com before boarding the flight' },
    { step: 2, title: 'Submit Visa Application', description: 'Submit the completed application form along with all required documents to the Jamaican Embassy or VFS service center' },
    { step: 3, title: 'Pay Visa Fees', description: 'Pay the applicable visa fee through the designated payment channel (if applicable)' },
    { step: 4, title: 'Processing', description: 'Wait for the visa processing; processing time is not applicable for visa-free stays but may apply for business visa' },
    { step: 5, title: 'Receive Visa or Entry', description: 'If a business visa is issued, collect the visa sticker; otherwise, proceed with visa-free entry for up to 30 days' }
  ],
  specialRequirements: { entry_rules: 'Visa-free 30 days for tourism; business visa required for stays >30 days; C5 immigration form mandatory before boarding.' }
};