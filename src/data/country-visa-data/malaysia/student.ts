export default {
  country: 'malaysia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Immigration Department of Malaysia / Education Malaysia Global Services (EMGS)',
  channels: [
    'https://visa.educationmalaysia.gov.my/',
    'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
    'https://www.vfsglobal.com/malaysia/india'
  ],
  processingTime: {
    eVisa: '2-5 working days',
    standardSticker: '7-10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '105 MYR',
    stickerConsularStandard: '15 MYR',
    vfsServiceFee: '1000 INR'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.educationmalaysia.gov.my/',
    territorialScope: 'All eligible Indian students with approved Visa Approval Letter (VAL)',
    validity: '3 months',
    maxStay: '30 days entry (Student Pass issued for 365 days upon arrival)',
    invitationRequired: true,
    processing: '2-5 working days'
  },
  stayDuration: {
    eVisa: '30 days (initial entry to obtain 1-year Student Pass)',
    stickerSingleDouble: '30 days',
    stickerMultiple: '365 days'
  },
  entryType: 'Single Entry Visa (SEV) converted to Student Pass upon arrival',
  documents: [
    {
      key: 'val_approval',
      title: 'Visa Approval Letter (VAL)',
      description: 'Official Visa Approval Letter issued by EMGS / Immigration Department of Malaysia',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'offer_letter',
      title: 'University Offer Letter',
      description: 'Official letter of acceptance from a recognized Malaysian educational institution',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 18 months from the date of application',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)', description: 'White background, standard biometric format', icon: '📸',
      mandatory: true
    },
    {
      key: 'academic_transcripts',
      title: 'Academic Certificates & Transcripts',
      description: 'Attested copies of previous educational certificates and marksheets',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'Pre-Arrival Medical Examination Report',
      description: 'Medical health check report from an EMGS-approved panel clinic',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Bank statements showing adequate funds for tuition and living costs in Malaysia',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Apply for VAL via EMGS',
      description: 'Submit student visa application online through the EMGS portal (visa.educationmalaysia.gov.my) along with university acceptance letter and documents.'
    },
    {
      step: 2,
      title: 'Receive Visa Approval Letter (VAL)',
      description: 'Once approved by Malaysian Immigration, download the official VAL from the EMGS portal.'
    },
    {
      step: 3,
      title: 'Apply for Single Entry Visa (SEV)',
      description: 'Apply for an eVisa for Students via the official portal or submit passport at VFS Global for Single Entry Visa endorsement.'
    },
    {
      step: 4,
      title: 'Travel to Malaysia',
      description: 'Arrive in Malaysia, present VAL and SEV at immigration point of entry.'
    },
    {
      step: 5,
      title: 'Post-Arrival Health Screening & Pass Endorsement',
      description: 'Complete post-arrival medical checkup within 7 days; educational institution submits passport to Immigration for Student Pass sticker endorsement.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student Pass requires minimum 18-month passport validity at time of application. Pre-arrival and post-arrival medical screening required.'
  }
};