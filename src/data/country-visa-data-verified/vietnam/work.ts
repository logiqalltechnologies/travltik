export default {
  country: 'vietnam',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Labour, Invalids and Social Affairs (MOLISA) & Department of Immigration, Ministry of Public Security',
  channels: ['https://evisa.xuatnhapcanh.gov.vn/', 'Embassy of Vietnam, New Delhi', 'Consulate General of Vietnam, Mumbai'],
  processingTime: { eVisa: '3 working days', standardSticker: '5 working days', expressSticker: '2 working days' },
  fees: { eVisaTotal: '25 USD (Single) / 50 USD (Multiple)', stickerConsularStandard: '50 USD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://evisa.xuatnhapcanh.gov.vn/', territorialScope: 'National (Designated Border Gates)', validity: '90 days', maxStay: '90 days', invitationRequired: false, processing: '3 working days' },
  stayDuration: { eVisa: '90 days', stickerSingleDouble: '90 days', stickerMultiple: '1 year' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Minimum 6 months validity beyond stay, 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (4x6cm)', description: 'White background, taken within last 6 months', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Visa Application Form', description: 'Completed online or hardcopy application form', icon: '📋', mandatory: true },
    { key: 'work_permit', title: 'Work Permit / Work Permit Exemption', description: 'Issued by Department of Labour, Invalids and Social Affairs (DOLISA/MOLISA)', icon: '📄', mandatory: true },
    { key: 'approval_letter', title: 'Immigration Approval Letter', description: 'Approval letter issued by Vietnam Department of Immigration', icon: '✉️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Obtain Work Permit', description: 'Employer in Vietnam secures work permit or exemption certificate from DOLISA/MOLISA' },
    { step: 2, title: 'Immigration Pre-Approval', description: 'Employer applies to Vietnam Department of Immigration for Visa Approval Letter' },
    { step: 3, title: 'Submit Visa Application', description: 'Apply via official eVisa portal or directly at Embassy/Consulate with Approval Letter' },
    { step: 4, title: 'Pay Visa Fees', description: 'Pay statutory consular fee (25 USD single / 50 USD multiple for short-term; 135 USD for 1-year multiple entry)' },
    { step: 5, title: 'Receive Visa & TRC', description: 'Obtain visa stamp/e-Visa and convert to Temporary Residence Card (TRC) upon arrival in Vietnam' }
  ],
  specialRequirements: { entry_rules: 'Work visa (LD1/LD2) can be converted to a Temporary Residence Card (TRC) valid for up to 2 years upon entry into Vietnam.' }
};