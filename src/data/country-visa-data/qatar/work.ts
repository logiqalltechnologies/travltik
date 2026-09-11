export default {
  country: 'qatar',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Interior (MOI) & Ministry of Labour (MOL), State of Qatar',
  channels: [
    'Qatar Visa Center (QVC) Portal (India)',
    'Ministry of Interior Metrash2 Portal',
    'Embassy of the State of Qatar, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'QAR 200 (Approx. ₹4,550)',
    vfsServiceFee: 'USD 137 (QVC service fee, typically paid directly by the Qatari employer)'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Nationwide',
    validity: '90 days (Entry validity window from approval date)',
    maxStay: '90 days (Initial entry permit; converts to 1-3 years QID upon arrival)',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '1 to 3 years (Tied to Employment Contract and QID)',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry (Initial entry permit, converted to Residence Permit / QID on entry)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond intended entry date, with minimum 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent photographs taken within 6 months, 35x45mm size, plain white background, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Issued by Regional Passport Office (RPO) in India, attested by Ministry of External Affairs (MEA) and Qatar Embassy.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'attested_certificates',
      title: 'Attested Educational & Skill Certificates',
      description: 'Original degree/diploma legalized by State HRD/Home Dept, MEA India, and Qatar Embassy in New Delhi.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'work_contract',
      title: 'Approved Employment Contract',
      description: 'Official employment contract registered with Qatar Ministry of Labour and signed during the QVC center appointment.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'qvc_medical_biometrics',
      title: 'QVC Medical Assessment & Biometrics',
      description: 'Mandatory medical examination (HIV, Hepatitis B/C, Chest X-ray for TB) and biometric enrollment conducted at an official QVC in India.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'sponsor_approval',
      title: 'MOI Work Visa Block Approval',
      description: 'Pre-approved work permit reference/visa block issued by Qatar Ministry of Interior to the sponsoring Qatari entity.',
      icon: '🏢',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Work Quota Approval in Qatar',
      description: 'The Qatari sponsoring employer secures work permit block approval from the Ministry of Labour (MOL) and Ministry of Interior (MOI).'
    },
    {
      step: 2,
      title: 'PCC & Document Attestation',
      description: 'Obtain an RPO Police Clearance Certificate and complete document attestation chain (State HRD -> MEA India -> Qatar Embassy).'
    },
    {
      step: 3,
      title: 'Book QVC Appointment',
      description: 'Once employer registers candidate on the MOI portal, schedule a biometric and medical appointment at the nearest Qatar Visa Center (QVC) in India.'
    },
    {
      step: 4,
      title: 'Complete QVC Process',
      description: 'Attend QVC appointment to complete biometric enrollment, mandatory health screening (blood tests and X-ray), and sign employment contract.'
    },
    {
      step: 5,
      title: 'Visa Issuance & Entry to Qatar',
      description: 'Upon medical and security clearance, the entry work visa is generated online. Travel to Qatar within the 90-day visa validity.'
    },
    {
      step: 6,
      title: 'In-Country QID Formalities',
      description: 'Employer completes final blood typing, local health insurance setup, and Qatar ID (QID) processing within 30 days of arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Mandatory completion of QVC (Qatar Visa Center) process in India prior to arrival for employment. Medical check requires screening for HIV, Hepatitis B & C, and Tuberculosis (Chest X-ray). Employer must complete Qatar ID (QID) residence permit processing within 30 days of candidate arrival.'
  }
};