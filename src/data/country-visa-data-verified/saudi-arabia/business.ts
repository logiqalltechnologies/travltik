export default {
  country: 'saudi-arabia',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Saudi Ministry of Foreign Affairs',
  channels: ['https://ksavisa.sa', 'https://visa.mofa.gov.sa', 'https://vc.tasheer.com'],
  processingTime: { eVisa: '3-5 working days', standardSticker: '3-5 working days', expressSticker: '2 working days' },
  fees: { eVisaTotal: '300 SAR', stickerConsularStandard: '300 SAR', vfsServiceFee: '135 SAR' },
  eVisa: { available: true, portal: 'https://ksavisa.sa', territorialScope: 'Nationwide', validity: '1 year', maxStay: '90 days', invitationRequired: true, processing: '3-5 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '30 days', stickerMultiple: '90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least 2 blank pages.', icon: '📘', mandatory: true },
    { key: 'invitation_letter', title: 'MOFA Business Invitation Letter', description: 'Official commercial invitation letter issued by the Saudi Ministry of Foreign Affairs or Saudi Chamber of Commerce.', icon: '✉️', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression, 2 copies.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online visa application form from the KSA Visa portal.', icon: '📋', mandatory: true },
    { key: 'cover_letter', title: 'Company Cover Letter', description: 'Covering letter from the Indian employer explaining the purpose and duration of the business visit.', icon: '📄', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking or itinerary showing dates of entry and exit.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or confirmation of accommodation in Saudi Arabia.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Mandatory Travel Insurance', description: 'MOFA-approved health insurance policy issued automatically during online visa processing.', icon: '🛡️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain Business Invitation', description: 'Receive an official commercial invitation letter from the Saudi host company approved by MOFA.' },
    { step: 2, title: 'Complete Online Application', description: 'Fill out the visa application on https://ksavisa.sa or https://visa.mofa.gov.sa.' },
    { step: 3, title: 'Pay Visa & Insurance Fees', description: 'Pay consular visa fees and mandatory Saudi medical insurance online.' },
    { step: 4, title: 'Submit Documents / Biometrics', description: 'Book an appointment and submit passport, documents, and biometrics at a Tasheer (VFS Tasheer) center.' },
    { step: 5, title: 'Receive Visa', description: 'Collect your passport with the visa sticker or receive your e-Visa confirmation.' },
    { step: 6, title: 'Travel to Saudi Arabia', description: 'Present your valid passport, visa, and invitation letter at entry.' }
  ],
  specialRequirements: { entry_rules: 'No additional health mandates. Mandatory health insurance is issued automatically through the visa portal.' }
};