export default {
  country: 'thailand',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Royal Thai Embassy, New Delhi',
  channels: [
    'https://thaievisa.go.th/',
    'https://visa.vfsglobal.com/india/thailand/',
    'https://www.thaiembassy.org/newdelhi'
  ],
  processingTime: { eVisa: '3-5 working days', standardSticker: '5-7 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '2,000 THB', stickerConsularStandard: '2,000 THB', vfsServiceFee: '500 INR' },
  eVisa: {
    available: true,
    portal: 'https://thaievisa.go.th/',
    territorialScope: 'Indian nationals residing in India',
    validity: '90 days from date of issuance',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '3-5 working days'
  },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '1 year (90 days per entry)' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Minimum 6 months validity beyond stay, 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within last 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'e-Visa Application Form', description: 'Completed online via official Thai e-Visa portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip or onward travel ticket', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or residential address in Thailand', icon: '🏨', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statement showing sufficient funds (minimum 20,000 THB per person or 40,000 THB per family)', icon: '🏦', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Signed employment contract or letter of employment', icon: '📄', mandatory: true },
    { key: 'wp3_letter', title: 'Approval Letter WP.3 / Work Permit', description: 'WP.3 Approval letter from the Department of Employment, Thai Ministry of Labor, or existing Work Permit', icon: '📝', mandatory: true },
    { key: 'employer_letter', title: 'Employer Invitation Letter', description: 'Official letter from Thai employer confirming position, salary, and duration', icon: '✉️', mandatory: true },
    { key: 'company_registration', title: 'Thai Company Documents', description: 'Copy of Thai company registration (DBD) and tax registration', icon: '🏢', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain WP.3 Approval', description: 'Thai employer files for pre-approval (WP.3 letter) with the Department of Employment, Thai Ministry of Labor.' },
    { step: 2, title: 'Apply via Official Thai e-Visa Portal', description: 'Create an account on https://thaievisa.go.th/, complete the Non-Immigrant B visa application, and upload required documents.' },
    { step: 3, title: 'Pay Consular Fee', description: 'Pay the non-refundable visa fee online (2,000 THB or equivalent) via credit/debit card.' },
    { step: 4, title: 'Processing & Verification', description: 'Wait 3 to 5 working days for the Royal Thai Embassy/Consulate to review and process the application.' },
    { step: 5, title: 'Receive e-Visa Approval', description: 'Receive the approved Thai e-Visa PDF document via email.' },
    { step: 6, title: 'Enter Thailand & Apply for Work Permit', description: 'Travel to Thailand, present e-Visa approval at immigration for a 90-day stay, and complete work permit issuance at Ministry of Labor.' }
  ],
  specialRequirements: { entry_rules: 'Non-Immigrant B visa allows a initial stay of up to 90 days. Upon arrival, applicant must secure the official physical Work Permit before starting work. Stays can be extended annually via Thai Immigration.' }
};