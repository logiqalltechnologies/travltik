export default {
  country: 'nepal',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Nepal in India',
  channels: ['Embassy Direct', 'N/A', 'N/A'],
  processingTime: { eVisa: 'N/A', standardSticker: 'N/A', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '0 INR (Visa Exempt)', vfsServiceFee: 'N/A' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'Unlimited', stickerMultiple: 'Unlimited' },
  entryType: 'Multiple',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport or Voter ID', description: 'Original Indian Passport or Voter ID Card issued by Election Commission of India', icon: '📘', mandatory: true },
    { key: 'admission_letter', title: 'Admission / Offer Letter', description: 'Official acceptance letter from a recognized college or university in Nepal', icon: '🎓', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs', description: 'Recent passport-sized photographs for institutional enrolment', icon: '📸', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Verify Identity Documents', description: 'Ensure you have a valid Indian Passport or Voter ID Card issued by the Election Commission of India' },
    { step: 2, title: 'Secure Enrolment', description: 'Obtain formal admission letter from a recognized educational institution in Nepal' },
    { step: 3, title: 'Travel to Nepal', description: 'Enter Nepal freely via air or land border without visa requirements under the 1950 Indo-Nepal Treaty' },
    { step: 4, title: 'Complete University Enrolment', description: 'Present your identity document and admission letter to complete registration at the institution' }
  ],
  specialRequirements: { entry_rules: 'Visa-free under the 1950 Indo-Nepal Treaty of Peace and Friendship. Indian citizens do not require a visa or student permit to reside or study in Nepal, and there is no limit on length of stay.' }
};