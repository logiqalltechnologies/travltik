export default {
  country: 'israel',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of Israel',
  channels: [
    'https://www.gov.il/en/departments/Ministry_of_Foreign_Affairs',
    'Embassy of Israel in New Delhi',
    'Consulate General of Israel in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '150 USD',
    vfsServiceFee: 'N/A'
  },
  statutoryConsularFee: '150 USD',
  externalServiceProvider: 'VFS Global',
  maximumPermittedStayDays: 365,
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Duration of employment contract (up to 1 year, renewable)',
    stickerMultiple: 'Duration of employment contract (up to 1 year, renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of departure from Israel. Must have at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm, white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form for B/1 (Business) or B/2 (Work) category, submitted via the Israeli Embassy/Consulate portal or in person.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract with an Israeli employer, specifying job title, salary, duration, and duties. Must be notarized.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'employer_letter',
      title: 'Employer Invitation Letter',
      description: 'Official letter from the Israeli employer confirming the job offer, position, and duration of employment. Must be on company letterhead.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'qualifications',
      title: 'Educational and Professional Certificates',
      description: 'Copies of degree certificates, professional licenses, and CV. Must be attested by the Indian Ministry of External Affairs and the Israeli Embassy.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'medical_exam',
      title: 'Medical Examination Report',
      description: 'Certificate from a licensed physician confirming good health. Includes HIV test if stay exceeds 90 days. No Yellow Fever required for India to Israel.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Certificate of good conduct from the Indian police, dated within the last 6 months.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months showing sufficient funds to support stay in Israel. No blocked account required for work visa.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance covering medical expenses, repatriation, and emergency evacuation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or confirmed ticket. Not mandatory for long-term work visas but recommended for initial entry.',
      icon: '✈️',
      mandatory: false
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Rental agreement or hotel booking for the initial period of stay in Israel.',
      icon: '🏨',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Employment Offer',
      description: 'Obtain a signed employment contract and invitation letter from an Israeli employer. Ensure the employer has obtained a work permit approval from the Population and Immigration Authority (PIA) if required.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photos, medical exam, police clearance, and financial proof. Ensure all documents are attested as per Israeli requirements.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Israeli Embassy in New Delhi or Consulate General in Mumbai. Pay the consular fee of 150 USD.'
    },
    {
      step: 4,
      title: 'Attend Interview',
      description: 'Attend a visa interview if requested by the consular officer. Be prepared to discuss your job role, qualifications, and plans in Israel.'
    },
    {
      step: 5,
      title: 'Wait for Processing',
      description: 'Processing time is approximately 30 working days. You will be notified when the visa is ready for collection.'