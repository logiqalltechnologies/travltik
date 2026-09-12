export default {
  country: 'colombia',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs of Colombia (Cancillería de Colombia)',
  channels: [
    'https://www.migracioncolombia.gov.co/',
    'Embassy of Colombia in New Delhi',
    'Consulate General of Colombia in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 60',
    vfsServiceFee: 'N/A'
  },
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
    stickerSingleDouble: 'Duration of academic program + 30 days',
    stickerMultiple: 'Duration of academic program + 30 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of departure from Colombia. Must have at least two blank visa pages.',
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
      description: 'Completed and signed visa application form for Student Visa (V-2). Must be filled in English or Spanish.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official letter of acceptance from a recognized Colombian educational institution (university, college, or language school).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof (Education Loan/Blocked Account)',
      description: 'Proof of sufficient funds to cover tuition fees and living expenses for the duration of the stay. This can be in the form of an education loan sanction letter, blocked bank account, or bank statements showing consistent savings. Minimum amount varies by institution but typically covers 1 year of expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'health_insurance',
      title: 'Health Insurance',
      description: 'Valid health insurance policy covering the entire duration of stay in Colombia, including medical evacuation and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'hiv_test',
      title: 'HIV Test Certificate',
      description: 'Negative HIV test certificate issued by a recognized medical laboratory within the last 3 months. Required for stays exceeding 90 days.',
      icon: '🩸',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'Valid Yellow Fever vaccination certificate. Required for travelers arriving from countries with risk of Yellow Fever transmission, including certain parts of India if applicable, or if transiting through endemic areas.',
      icon: '💉',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or itinerary showing entry and exit dates from Colombia.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation in Colombia, such as a rental agreement, university dormitory confirmation, or invitation letter from a host with proof of address.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission Letter',
      description: 'Secure a formal letter of admission from a recognized Colombian educational institution.'
    },
    {
      step: 2,
      title: 'Prepare Financial Documents',
      description: 'Gather proof of funds, such as education loan sanction letters or blocked account statements, to demonstrate ability to cover tuition and living expenses.'
    },
    {
      step: 3,
      title: 'Get Medical Tests',
      description: 'Undergo HIV testing and obtain a negative certificate. Ensure Yellow Fever vaccination if required based on travel history.'
    },
    {
      step: 4,
      title: 'Complete Application Form',
      description: 'Fill out the Student Visa (V-2) application form accurately and sign it.'
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Submit the completed application, all required documents, and visa fee at the nearest Colombian Embassy or Consulate in India.'
    },
    {
      step: 6,
      title: 'Attend Interview (if required)',
      description: 'Attend a visa interview if requested by the consular officer.'
    },
    {
      step: 7,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing, which typically takes 15 working days.'
    },
    {
      step: 8,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa holders must register with Migración Colombia within 30 days of arrival. The visa is valid for the duration of the academic program plus 30 days. Overstaying may result in fines and future entry bans. Work is generally not permitted on a student visa unless specifically authorized.'
  }
};