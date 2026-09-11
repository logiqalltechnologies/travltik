export default {
  country: 'singapore',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Immigration & Checkpoints Authority (ICA)',
  channels: [
    'https://www.ica.gov.sg/reside/STP/apply',
    'https://eservices.ica.gov.sg/solar/index.xhtml'
  ],
  processingTime: { eVisa: '10 working days', standardSticker: 'N/A', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'SGD 135', stickerConsularStandard: 'N/A', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://eservices.ica.gov.sg/solar/index.xhtml', territorialScope: 'Nationwide', validity: 'Duration of course', maxStay: 'Duration of course', invitationRequired: true, processing: '10 working days' },
  stayDuration: { eVisa: 'Duration of course', stickerSingleDouble: 'N/A', stickerMultiple: 'N/A' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the date of entry to Singapore', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photograph', description: 'Digital passport photo conforming to ICA specifications (white background, taken within last 3 months)', icon: '📸', mandatory: true },
    { key: 'solar_registration', title: 'SOLAR Registration Details', description: 'Solar Application Reference Number provided by the Singapore Educational Institution', icon: '📋', mandatory: true },
    { key: 'eform_16', title: 'Completed eForm 16', description: 'Submitted via the SOLAR system on ICA official portal', icon: '📄', mandatory: true },
    { key: 'admission_letter', title: 'Offer Letter / Admission Confirmation', description: 'Official letter of acceptance from an approved Institute of Higher Learning (IHL) or school in Singapore', icon: '🎓', mandatory: true },
    { key: 'bank_statement', title: 'Proof of Financial Capability', description: 'Bank statements or financial sponsorship documents demonstrating sufficient funds for tuition and living expenses', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Institution SOLAR Registration', description: 'Your educational institution registers your details on the SOLAR portal.' },
    { step: 2, title: 'Submit eForm 16 via SOLAR', description: 'Log in to SOLAR using your credentials and complete eForm 16 online.' },
    { step: 3, title: 'Pay Processing Fee', description: 'Pay the non-refundable SGD 45 processing fee online via credit/debit card or net banking.' },
    { step: 4, title: 'Receive In-Principle Approval (IPA) Letter', description: 'Upon approval, download your electronic IPA letter which serves as your single/multiple-entry visa to enter Singapore.' },
    { step: 5, title: 'Formalities & Pass Issuance', description: 'Complete SG Arrival Card (SGAC), travel to Singapore, complete medical examination (if required), pay pass issuance fee (SGD 60 + SGD 30 visa fee if applicable), and retrieve your e-Pass.' }
  ],
  specialRequirements: { entry_rules: 'Submit SG Arrival Card (SGAC) with Electronic Health Declaration within 3 days prior to arrival. IPA letter mandatory for travel.' }
};