export default {
  country: 'nepal',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Department of Immigration, Ministry of Home Affairs, Nepal',
  channels: [
    'Embassy of Nepal, New Delhi',
    'Immigration Checkpoints (On Arrival)',
    'https://nepaliport.immigration.gov.np'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'N/A (Visa Exempt)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 0 (Visa Exempt for Indian Citizens)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'https://nepaliport.immigration.gov.np',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Unlimited (1950 Indo-Nepal Treaty)',
    stickerMultiple: 'Unlimited (1950 Indo-Nepal Treaty)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport_voter_id',
      title: 'Valid Indian Passport or Voter ID',
      description: 'Indian Passport (valid for intended stay) or Voter Identity Card issued by the Election Commission of India',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within last 6 months',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Offer Letter / Contract',
      description: 'Appointment letter or contract from Nepalese employer for Labour Department registration',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'work_permit_doc',
      title: 'Department of Labour Work Permit',
      description: 'Issued by Department of Labour, Nepal for formal employment',
      icon: '🏢',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Enter Nepal Visa-Free',
      description: 'Indian citizens enter Nepal visa-free using a valid Indian Passport or Voter ID Card under the 1950 Indo-Nepal Treaty of Peace and Friendship.'
    },
    {
      step: 2,
      title: 'Employer Submission to Department of Labour',
      description: 'The Nepalese employer applies for a work permit at the Department of Labour, Nepal on behalf of the Indian employee.'
    },
    {
      step: 3,
      title: 'Work Permit Approval & Registration',
      description: 'Receive the official work permit from the Department of Labour to legally commence employment.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Visa-exempt under Article 7 of the 1950 Indo-Nepal Treaty of Peace and Friendship. Indian nationals have equal rights to live and work in Nepal, but formal employment requires work permit registration with the Department of Labour, Nepal.'
  }
};