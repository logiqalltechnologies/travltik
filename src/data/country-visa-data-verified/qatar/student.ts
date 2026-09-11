export default {
  country: 'qatar',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Interior (MOI) & Embassy of the State of Qatar, New Delhi',
  channels: [
    'https://portal.moi.gov.qa/',
    'https://www.qatarvisacenter.com/',
    'https://www.edu.gov.qa/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '200 QAR',
    vfsServiceFee: 'N/A (Processed via Qatar Visa Center - QVC)'
  },
  eVisa: {
    available: false,
    portal: 'https://portal.moi.gov.qa/',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days (Entry Permit)',
    stickerMultiple: '1 year (Renewable Residence Permit)'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from entry date and minimum two blank pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Recent passport-sized photos with white background, taken within 6 months',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Admission Letter',
      description: 'Unconditional acceptance letter from an accredited higher education institution in Qatar',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'moi_approval',
      title: 'MOI Visa Approval / Entry Permit',
      description: 'Student Visa Approval issued by Qatar Ministry of Interior via sponsoring university',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'attested_certificates',
      title: 'Attested Educational Certificates',
      description: 'Academic degrees/transcripts attested by MEA India and Embassy of Qatar in New Delhi',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof or Scholarship Letter',
      description: 'Official scholarship grant letter or bank statements showing sufficient funds for tuition and living costs',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'PCC issued by Passport Seva Kendra (PSK) and attested by MEA India',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'qvc_medical',
      title: 'QVC Medical & Biometric Completion',
      description: 'Medical fitness report and biometric enrollment completed at Qatar Visa Center (QVC)',
      icon: '🏥',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure University Admission',
      description: 'Gain admission to a recognized Qatari educational institution authorized to sponsor international students.'
    },
    {
      step: 2,
      title: 'University Initiates MOI Visa Approval',
      description: 'The educational institution submits the student visa request directly to Qatar Ministry of Interior (MOI).'
    },
    {
      step: 3,
      title: 'Book Appointment at Qatar Visa Center (QVC)',
      description: 'Once approval is issued, book an appointment at the nearest QVC in India (Delhi, Mumbai, Kolkata, Lucknow, Hyderabad, Chennai, Kochi).'
    },
    {
      step: 4,
      title: 'Complete Biometrics & Medical Examination',
      description: 'Attend QVC appointment to complete mandatory biometric capture and medical screening.'
    },
    {
      step: 5,
      title: 'Pay Fees and Obtain Entry Permit',
      description: 'Pay the 200 QAR visa fee and QVC service charges to receive the Student Entry Visa.'
    },
    {
      step: 6,
      title: 'Travel to Qatar & Finalize QID',
      description: 'Travel to Qatar with the entry permit; complete final in-country procedures to receive the Qatar Residence Permit (QID).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visas require direct institutional sponsorship by an accredited Qatari university. Applications are processed through Qatar Visa Centers (QVC) in India for biometrics and medical testing before departure. Initial entry permit allows arrival to complete Qatar Residence Permit (QID) registration.'
  }
};