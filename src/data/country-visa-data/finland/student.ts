export default {
  country: 'finland',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Finnish Immigration Service (Migri) & Embassy of Finland, New Delhi',
  channels: [
    'Enter Finland Online Portal',
    'VFS Global Finland Application Centre',
    'Embassy of Finland, New Delhi'
  ],
  processingTime: {
    eVisa: '30 to 60 days (e-Application via Enter Finland)',
    standardSticker: '30 to 60 days',
    expressSticker: '14 days (Fast-track for Master degree students and researchers)'
  },
  fees: {
    eVisaTotal: '€350 (Electronic Residence Permit Application Fee)',
    stickerConsularStandard: '€380 (Paper Application Fee)',
    vfsServiceFee: '₹2,270 (VFS Global Service & Biometric Verification Fee)'
  },
  eVisa: {
    available: true,
    portal: 'https://enterfinland.fi',
    territorialScope: 'Finland and Schengen Area',
    validity: 'Duration of the study program (up to 4 years)',
    maxStay: 'Full duration of valid residence permit',
    invitationRequired: false,
    processing: '30 to 60 days'
  },
  stayDuration: {
    eVisa: 'Duration of degree/study program',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Duration of valid study residence permit'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for the entire duration of stay with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent photo taken within the last 6 months, light/white background, adhering to Finnish police photo guidelines',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Enter Finland Application Summary',
      description: 'Submitted online residence permit application form for studies (First Residence Permit)',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Acceptance Letter',
      description: 'Official confirmation/admission letter from a recognized Finnish educational institution',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'tuition_fee_proof',
      title: 'Proof of Tuition Fee Payment or Scholarship',
      description: 'Receipt of paid tuition fees or official documentation of awarded scholarship/grant',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Bank statement under applicant\'s name showing at least €6,720/year (€560/month), or official sanction letter for an Education Loan from a recognized Indian bank',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Health Insurance',
      description: 'Private medical insurance covering treatment costs up to €120,000 (for courses under 2 years) or €40,000 (for courses 2 years or longer)',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'academic_qualifications',
      title: 'Academic Certificates & Transcripts',
      description: 'Attested copies of previous educational certificates, degrees, and mark sheets',
      icon: 'certificate',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Eligibility & Receive Admission',
      description: 'Secure official admission from a recognized university or higher education institute in Finland.'
    },
    {
      step: 2,
      title: 'Submit Online Application on Enter Finland',
      description: 'Create an account on enterfinland.fi, complete the study residence permit application, attach mandatory documents, and pay the €350 fee online.'
    },
    {
      step: 3,
      title: 'Biometric Verification at VFS Global',
      description: 'Schedule and attend an appointment at a VFS Global center in India to verify identity, submit biometrics, and present original documents.'
    },
    {
      step: 4,
      title: 'Receive Residence Permit Card',
      description: 'Track application progress online. Once approved by Migri, receive the Finnish Residence Permit card prior to travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Students must hold a valid Finnish Residence Permit Card before entering Finland. Financial capability (€6,720 per year) must be demonstrated in the student\'s personal bank account or backed by an approved bank education loan. Mandatory biometric verification must be completed in person at a VFS Global center in India.'
  }
};