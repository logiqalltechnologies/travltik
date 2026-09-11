export default {
  country: 'south-korea',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Justice, Republic of Korea',
  channels: [
    'https://www.visa.go.kr',
    'VFS Global South Korea Visa Application Centre',
    'Embassy of the Republic of Korea, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 4,800',
    vfsServiceFee: 'INR 1,310'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: 'N/A',
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'As specified in the Certificate of Visa Issuance (typically 1 to 3 years)',
    stickerMultiple: 'As specified in the Certificate of Visa Issuance'
  },
  entryType: 'Single Entry (Convertible to Multiple Entry via Alien Registration Card)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of entry and minimum two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (taken within the last 6 months) with a white background, neutral expression, and no spectacles.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Fully completed and signed visa application form. If you hold a Certificate of Visa Issuance (CCVI), use the simplified visa application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'ccvi',
      title: 'Certificate of Visa Issuance (CCVI)',
      description: 'The official visa issuance confirmation number or certificate issued by the Ministry of Justice in South Korea, sponsored and applied for by your Korean employer.',
      icon: '🔑',
      mandatory: true
    },
    {
      key: 'tb_test',
      title: 'Tuberculosis (TB) Test Certificate',
      description: 'Mandatory medical report issued by an embassy-designated hospital in India for all long-term visa applicants (staying over 91 days).',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'A copy of the employment contract signed by both the Korean employer and the Indian employee, detailing salary, working hours, and job description.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'company_docs',
      title: 'Korean Company Registration',
      description: 'Copy of the Korean company’s Business Registration Certificate (Saeopja Deungrokjeung) and Certificate of Incorporation.',
      icon: '🏢',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Sponsorship and CCVI Acquisition',
      description: 'Your employer in South Korea must apply for a Certificate of Visa Issuance (CCVI) at the local immigration office in South Korea. Once approved, they will provide you with a CCVI number.'
    },
    {
      step: 2,
      title: 'Undergo Tuberculosis Testing',
      description: 'Visit an embassy-designated hospital in India to undergo a Tuberculosis (TB) screening. Obtain the official TB Test Certificate.'
    },
    {
      step: 3,
      title: 'Prepare the Application',
      description: 'Complete the simplified visa application form (specifically for CCVI holders) and compile all required physical documents, including your passport, photos, and TB certificate.'
    },
    {
      step: 4,
      title: 'Book an Appointment at VFS Global',
      description: 'Schedule an appointment to submit your physical application at the nearest VFS Global South Korea Visa Application Centre (Delhi, Mumbai, Kolkata, Chennai, or Bengaluru).'
    },
    {
      step: 5,
      title: 'Submit Documents and Pay Fees',
      description: 'Attend your appointment, submit your physical documents, and pay the consular fee of INR 4,800 along with the VFS service fee.'
    },
    {
      step: 6,
      title: 'Passport Retrieval and ARC Registration',
      description: 'Once processed (10 to 15 working days), collect your passport. After arriving in South Korea, you must apply for an Alien Registration Card (ARC) at the local immigration office within 90 days.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All long-term visa holders (stays exceeding 90 days) must undergo mandatory Tuberculosis screening at designated clinics in India prior to visa submission. Upon arrival in South Korea, registration for an Alien Registration Card (ARC) at the local immigration office is mandatory within 90 days of entry to maintain legal stay and enable multiple entries.'
  }
};