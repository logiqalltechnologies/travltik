export default {
  country: 'jamaica',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Jamaica High Commission in New Delhi (via VFS Global)',
  channels: ['https://www.jamaicaembassy.gov.in', 'https://visa.vfsglobal.com/ind/en/jam/', 'https://www.jamaicaembassy.gov.in/visa'],
  processingTime: { eVisa: 'N/A', standardSticker: '10-15 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: 'USD 100', vfsServiceFee: 'USD 20' },
  eVisa: { available: false, portal: '', territorialScope: '', validity: '', maxStay: '', invitationRequired: false, processing: '' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'Up to 1 year (renewable)', stickerMultiple: 'Up to 1 year (renewable)' },
  entryType: 'Single Entry', // Not explicitly verified as per task, keeping original. Student visas are typically multiple entry.
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete online application via official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking confirmation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or host invitation', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months', icon: '🏦', mandatory: true },
    { key: 'admission_letter', title: 'Admission Letter', description: 'Official admission letter from Jamaican institution', icon: '📄', mandatory: true },
    { key: 'education_loan', title: 'Education Loan Documents', description: 'Loan approval letter and repayment schedule', icon: '💰', mandatory: true },
    { key: 'blocked_account', title: 'Blocked Account Statement', description: 'Statement showing blocked funds for tuition', icon: '💳', mandatory: true },
    { key: 'hiv_test', title: 'HIV Test Certificate', description: 'Valid HIV test for stays >90 days', icon: '🧪', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Documents', description: 'Collect all required documents including admission letter, financial proof, and health certificates.' },
    { step: 2, title: 'Complete Application', description: 'Fill out the online application form on the official portal.' },
    { step: 3, title: 'Pay Fees', description: 'Pay the consular fee and VFS service fee online.' },
    { step: 4, title: 'Submit Application', description: 'Submit the application and documents through the chosen channel.' },
    { step: 5, title: 'Collect Visa', description: 'Collect the visa sticker from the embassy or receive it via courier.' }
  ],
  specialRequirements: { entry_rules: 'C5 immigration form mandatory before boarding; HIV test required for stays >90 days' }
};