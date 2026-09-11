export default {
  country: 'ireland',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Immigration Service Delivery (ISD), Department of Justice, Ireland',
  channels: [
    'AVATS Online Application Portal',
    'VFS Global Ireland Visa Application Centre',
    'Embassy of Ireland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '20 to 40 working days (approx. 4-8 weeks)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€60 (Single Entry Type D - Approx. ₹5,500)',
    vfsServiceFee: 'Approx. ₹2,270'
  },
  eVisa: {
    available: false,
    portal: 'https://www.visas.inis.gov.ie/avats/',
    territorialScope: 'Ireland (Nationwide)',
    validity: '90 days initial entry window',
    maxStay: 'Duration of academic course (renewed annually via IRP card)',
    invitationRequired: false,
    processing: '20 to 40 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Initial 90-day visa sticker (requires local registration for full course duration)',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 12 months beyond the intended completion date of the course, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized color photographs taken within the last 6 months, white background, strictly following Irish immigration guidelines.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'AVATS Online Application Summary Form',
      description: 'Completed and printed AVATS online summary sheet, signed and dated by the applicant.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Unconditional Letter of Acceptance',
      description: 'Official offer letter from a recognized Irish college/university listed on the Interim List of Eligible Programmes (ILEP), confirming full-time enrollment in a course requiring at least 15 hours of daytime study per week.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'fee_receipt',
      title: 'Proof of Tuition Fee Payment',
      description: 'Receipt showing tuition fees paid in full (or minimum €6,000 if fees exceed €6,000) via TransferMate/Flywire or official bank transfer receipt from the Irish institution.',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Statements',
      description: 'Evidence showing immediate access to at least €10,000 for living expenses per year of study, plus 6 consecutive months of bank statements from student/sponsor showing continuous funds with clear source of funds.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'education_loan',
      title: 'Education Loan Sanction Letter',
      description: 'Official loan sanction letter from an approved financial institution explicitly stating funds disbursed for higher studies in Ireland (if applicable).',
      icon: 'briefcase',
      mandatory: false
    },
    {
      key: 'academic_docs',
      title: 'Academic Transcripts & Certificates',
      description: 'Original marksheets, degree certificates, and diploma completion awards from previous educational qualifications.',
      icon: 'award',
      mandatory: true
    },
    {
      key: 'english_proficiency',
      title: 'English Language Proficiency Proof',
      description: 'Official test scorecard (IELTS Academic, TOEFL iBT, PTE Academic, or Duolingo English Test where accepted) meeting minimum grade criteria set by ISD Ireland.',
      icon: 'file-check',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Medical & Private Health Insurance',
      description: 'Proof of comprehensive private medical insurance with minimum coverage of €25,000 for accidents and illness, provided through an Irish insurance provider or college group scheme.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'statement_of_purpose',
      title: 'Statement of Purpose / Cover Letter',
      description: 'Signed letter explaining reasons for studying in Ireland, choice of institution, course relevance to career goals, commitment to abide by visa conditions, and detailed gap explanations if any.',
      icon: 'mail',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Course Acceptance & Fee Payment',
      description: 'Receive an unconditional offer letter from an ILEP-approved Irish institution and pay required tuition fees.'
    },
    {
      step: 2,
      title: 'Complete AVATS Online Application',
      description: 'Fill out the official Irish AVATS visa application form online, select visa type D Study, and print the summary summary page.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment & Submit Dossier',
      description: 'Schedule an appointment at a VFS Global Ireland Application Centre in India, pay consular and service fees, submit physical documents, and record biometrics.'
    },
    {
      step: 4,
      title: 'Track Processing & Decision',
      description: 'Track application progress while ISD New Delhi processes the dossier. Receive passport containing the single-entry Type D study visa sticker.'
    },
    {
      step: 5,
      title: 'Post-Arrival Registration (IRP)',
      description: 'Upon arrival in Ireland, register with Burgh Quay Registration Office / local Garda National Immigration Bureau (GNIB) within 90 days to receive the Irish Residence Permit (IRP) card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Course must be on the Interim List of Eligible Programmes (ILEP). Student must demonstrate access to €10,000/year living expenses in addition to tuition fees. Post-arrival registration for an Irish Residence Permit (IRP) at €300 registration fee is mandatory within 90 days of arrival.'
  }
};