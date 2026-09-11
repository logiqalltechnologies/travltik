export default {
  country: 'qatar',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Interior (MOI) - State of Qatar',
  channels: [
    'Metrash2 Mobile Application',
    'MOI E-Services Portal (portal.moi.gov.qa)',
    'MOI Service Centers (Qatar)'
  ],
  processingTime: {
    eVisa: '5 to 10 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '200 QAR (~4,500 INR) visa fee + 50 QAR (~1,150 INR) mandatory health insurance per month',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://portal.moi.gov.qa',
    territorialScope: 'Nationwide',
    validity: '1 month (extendable up to 6 months for immediate family)',
    maxStay: '30 days initial stay (extendable monthly up to 180 days)',
    invitationRequired: true,
    processing: '5 to 10 working days'
  },
  stayDuration: {
    eVisa: '30 days initial stay (extendable up to 180 days)',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport with at least 6 months validity from the intended date of entry into Qatar.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent passport-sized photograph with a plain white background, taken within the last 6 months, showing neutral facial expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'host_qid',
      title: 'Host Qatar ID & Passport',
      description: 'Copy of the host resident’s valid Qatar ID (QID) and passport page with a valid Qatar Residence Permit.',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Attested Proof of Relationship',
      description: 'Official birth certificate or marriage certificate legally attested by the Ministry of External Affairs (MEA), India, and the Embassy of Qatar / MOFA Qatar.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'host_salary_proof',
      title: 'Host Salary Certificate / Work Contract',
      description: 'Official salary certificate or certified work contract issued by the employer in Qatar showing minimum required monthly salary (typically QAR 5,000+).',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Mandatory Qatari Health Insurance',
      description: 'Health insurance policy purchased from a Ministry of Public Health (MOPH) registered Qatari insurance provider (50 QAR/month).',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Confirmed Return Flight Ticket',
      description: 'Confirmed round-trip flight booking to and from Qatar.',
      icon: '✈️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Host Application Submission',
      description: 'The Qatari resident (host) opens the Metrash2 mobile app or MOI E-Services portal, navigates to "Visa Services" -> "Family Visit Visa", and fills in the applicant’s details.'
    },
    {
      step: 2,
      title: 'Upload Documents',
      description: 'Host uploads the visitor’s passport copy, attested relationship proof, host QID, and official salary certificate via Metrash2.'
    },
    {
      step: 3,
      title: 'Application Verification',
      description: 'The Qatar Ministry of Interior (MOI) processes and verifies the application details. Standard review takes 5 to 10 working days.'
    },
    {
      step: 4,
      title: 'Fee Payment & Health Insurance',
      description: 'Once approved, the host pays the visa fee (200 QAR) and mandatory MOPH-approved health insurance (50 QAR per month) via Metrash2.'
    },
    {
      step: 5,
      title: 'Visa Issuance & Travel',
      description: 'The electronic Family Visit Visa approval is generated. The host downloads and sends the e-visa document to the visitor in India prior to departure.'
    },
    {
      step: 6,
      title: 'Extension & Medical Check (Optional)',
      description: 'To extend stay beyond 30 days, the visitor must undergo a medical examination at a Medical Commission center in Qatar. Immediate relatives (spouse, children, parents) can extend up to 6 months.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Relationship certificates must be fully attested by MEA India and MOFA Qatar. Health insurance must be purchased exclusively from MOPH-authorized Qatari insurance companies. Visa extension beyond the initial 30 days requires passing a medical test in Qatar.'
  }
};