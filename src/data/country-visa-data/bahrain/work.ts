export default {
  country: 'bahrain',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Labour Market Regulatory Authority (LMRA) / Embassy of Bahrain in New Delhi',
  channels: ['LMRA EMS Portal (https://www.lmra.gov.bh)', 'NPRA eVisa Portal (https://visa.bahrain.gov.bh)', 'Embassy Direct'],
  processingTime: { eVisa: '5-10 working days', standardSticker: '10 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '200 BHD', stickerConsularStandard: '200 BHD', vfsServiceFee: 'N/A' },
  eVisa: { available: true, portal: 'https://www.lmra.gov.bh', territorialScope: 'Nationwide', validity: '2 years', maxStay: '730 days', invitationRequired: true, processing: '5-10 working days' },
  stayDuration: { eVisa: '730 days', stickerSingleDouble: '730 days', stickerMultiple: '730 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least 2 blank pages.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression.', icon: '📸', mandatory: true },
    { key: 'employment_contract', title: 'Signed Employment Contract', description: 'Official employment contract approved and submitted to LMRA by sponsor.', icon: '📄', mandatory: true },
    { key: 'medical_clearance', title: 'WAFID / GAMCA Medical Fitness Report', description: 'Medical fitness report from an accredited WAFID medical center in India.', icon: '🩺', mandatory: true },
    { key: 'educational_certificates', title: 'Attested Educational Certificates', description: 'Degree/Diploma attested by Ministry of External Affairs (MEA) India and Embassy of Bahrain.', icon: '🎓', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Undergo Medical Examination', description: 'Complete medical fitness testing at a recognized WAFID (GAMCA) center in India.' },
    { step: 2, title: 'Sponsor Submits LMRA Application', description: 'Employer in Bahrain submits the work permit application via LMRA EMS portal.' },
    { step: 3, title: 'Work Permit Approval & Visa Issuance', description: 'LMRA issues the electronic work permit and work entry visa upon payment of BHD 200 fee by the employer.' },
    { step: 4, title: 'Travel to Bahrain', description: 'Travel to Bahrain using the electronic work entry visa.' },
    { step: 5, title: 'Post-Arrival Medical & CPR Card Issuance', description: 'Complete post-arrival medical screening in Bahrain and biometric registration for CPR ID card.' }
  ],
  specialRequirements: { entry_rules: 'Work visa must be sponsored by a registered Bahrain employer through LMRA before travel. Pre-departure medical fit report from WAFID center in India is mandatory.' }
};