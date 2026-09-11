export default {
  country: 'saudi-arabia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Saudi Arabia in New Delhi',
  channels: [
    'https://ksavisa.sa/',
    'https://visa.mofa.gov.sa/',
    'https://www.vfsglobal.com/saudi-arabia/india/'
  ],
  processingTime: {
    standardSticker: '5-10 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    stickerConsularStandard: 'SAR 200',
    vfsServiceFee: 'SAR 85'
  },
  eVisa: {
    available: false,
    portal: 'https://ksavisa.sa/',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay, with at least two blank pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs', description: 'White background, 35x45mm, taken within the last 6 months.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'MOFA Visa Application Form', description: 'Completed online application submitted via the KSA Visa / MOFA portal.', icon: '📋', mandatory: true },
    { key: 'medical_report', title: 'WAFID Medical Fitness Certificate', description: 'Medical fitness report issued by an authorized WAFID / GAMCA medical center in India.', icon: '🏥', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate (PCC)', description: 'PCC issued by Passport Seva Kendra / Ministry of External Affairs.', icon: '🛡️', mandatory: true },
    { key: 'employment_contract', title: 'Attested Employment Contract', description: 'Signed work contract / job offer verified via the Qiwa / MHRSD portal.', icon: '📝', mandatory: true },
    { key: 'degree_certificate', title: 'Educational Certificates', description: 'Degree/diploma certificates attested by MEA and the Saudi Culture / Embassy (as applicable to job title).', icon: '🎓', mandatory: true },
    { key: 'visa_authorization', title: 'Visa Block / Authorization Letter', description: 'Visa authorization number and sponsor ID issued by Saudi MOFA.', icon: '📄', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Job Offer & Visa Block', description: 'Sponsor issues electronic job offer via Qiwa and obtains Visa Block authorization from MOFA.' },
    { step: 2, title: 'Medical Checkup', description: 'Undergo medical fitness tests at an approved WAFID (GAMCA) medical center.' },
    { step: 3, title: 'Police Clearance & Document Attestation', description: 'Obtain PCC and complete educational certificate attestations.' },
    { step: 4, title: 'MOFA Online Registration', description: 'Fill application and generate Enjaz/MOFA application number.' },
    { step: 5, title: 'VFS Global Submission', description: 'Submit physical documents and complete biometrics at an authorized Saudi Visa Application Centre (VFS Global).' },
    { step: 6, title: 'Receive Visa & Travel', description: 'Collect passport with stamped work entry visa and travel to Saudi Arabia to obtain Iqama.' }
  ],
  specialRequirements: {
    entry_rules: 'The work visa serves as an entry permit. The employer must convert this visa to a Resident Permit (Iqama) within 90 days of arrival.'
  }
};