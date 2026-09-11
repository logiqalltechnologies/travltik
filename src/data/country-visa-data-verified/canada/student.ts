export default {
  country: 'canada',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
  channels: [
    'IRCC Portal (Official Online Application)',
    'VFS Global Canada Visa Application Centre'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '40 working days (approx. 8 weeks)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '235 CAD (150 CAD Study Permit Fee + 85 CAD Biometrics Fee)',
    vfsServiceFee: 'Approx. 2,000 INR (Passport Transmission Fee post-approval)'
  },
  eVisa: {
    available: false,
    portal: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Duration of study program plus 90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport with at least 6 months validity beyond the intended stay and at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent digital photographs, 35x45mm, white background, taken within 6 months, neutral expression, showing full face.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online IRCC application forms (including IMM 1294 and Family Information Form IMM 5645) submitted via the IRCC Portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'letter_of_acceptance',
      title: 'Letter of Acceptance (LOA)',
      description: 'Official Letter of Acceptance from a Designated Learning Institution (DLI) in Canada, specifying the course details, tuition fees, and start date.',
      icon: '🏫',
      mandatory: true
    },
    {
      key: 'provincial_attestation',
      title: 'Provincial Attestation Letter (PAL)',
      description: 'A Provincial Attestation Letter (PAL) from the province or territory where you plan to study (mandatory for most undergraduate and college-level students).',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'blocked_account',
      title: 'Guaranteed Investment Certificate (GIC)',
      description: 'Proof of a Canadian blocked account (GIC) of 20,635 CAD from a participating Canadian financial institution to cover first-year living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof & Education Loan',
      description: 'Proof of payment of first-year tuition fees, education loan approval letters from a nationalized/scheduled bank, or bank statements showing sufficient funds.',
      icon: '💰',
      mandatory: true
    },
    {
      key: 'medical_exam',
      title: 'Upfront Medical Exam (IME)',
      description: 'An upfront medical examination report from an IRCC-approved panel physician in India, which includes mandatory HIV testing for stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'academic_docs',
      title: 'Academic Credentials & Language Test',
      description: 'All previous academic transcripts, degrees, and certificates, along with valid English language proficiency test scores (IELTS Academic or PTE Academic).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'statement_of_purpose',
      title: 'Statement of Purpose (SOP)',
      description: 'A detailed study plan/SOP explaining your academic goals, reasons for choosing Canada and the specific DLI, and your ties to India ensuring your return.',
      icon: '📝',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain LOA and PAL',
      description: 'Apply to a Designated Learning Institution (DLI) in Canada, secure your Letter of Acceptance (LOA), and obtain your Provincial Attestation Letter (PAL) if required.'
    },
    {
      step: 2,
      title: 'Arrange Financials & GIC',
      description: 'Pay your first-year tuition fees and purchase a Guaranteed Investment Certificate (GIC) of 20,635 CAD from a participating Canadian bank to establish your blocked account.'
    },
    {
      step: 3,
      title: 'Undergo Upfront Medical Exam',
      description: 'Book and complete your upfront medical examination with an IRCC-approved panel physician in India.'
    },
    {
      step: 4,
      title: 'Submit Online Application',
      description: 'Create an account on the IRCC Portal, fill out the application forms, upload all required documents (LOA, PAL, GIC, Academic transcripts, IELTS, SOP), and pay the 235 CAD fee.'
    },
    {
      step: 5,
      title: 'Enroll Biometrics',
      description: 'Receive your Biometric Instruction Letter (BIL) and book an appointment at a VFS Global Canada Visa Application Centre in India to submit your fingerprints and photo.'
    },
    {
      step: 6,
      title: 'Passport Submission',
      description: 'Once your application is approved, you will receive an Original Passport Request (OPR). Submit your physical passport to VFS Global for visa stamping.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Upon arrival in Canada, you must present your Port of Entry (POE) Letter of Introduction to the border officer to receive your physical Study Permit. Students must maintain full-time enrollment and make progress toward completing their program at a Designated Learning Institution (DLI) to keep their status valid.'
  }
};