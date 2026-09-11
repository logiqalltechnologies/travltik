export default {
  country: 'south-korea',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Korea in New Delhi',
  channels: [
    'https://visa.vfsglobal.com/ind/en/kor/', // VFS Global - primary submission channel
    'https://overseas.mofa.go.kr/in-newdelhi-en/index.do', // Embassy of the Republic of Korea in New Delhi - informational
    'https://visa.go.kr/' // Korea Visa Portal - online application form
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '4,800 INR', // Corrected from 10,000 KRW
    vfsServiceFee: '1,400 INR' // Corrected from 2,000 KRW
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
    stickerSingleDouble: '1 year', // Verified as a reasonable initial duration for student visas
    stickerMultiple: 'N/A'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least one blank visa page',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application via the official portal or printed form',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Flight Itinerary', // Corrected description
      icon: '✈️',
      mandatory: true
    },
    // 'accommodation' and 'travel_insurance' removed as they are not explicitly listed as mandatory for D-2 student visas by official sources.
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds (minimum INR 10,00,000 or USD 15,000)', // Corrected amount and currency
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Admission Letter',
      description: 'Original or copy of the Certificate of Admission from a Korean university',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'university_registration',
      title: 'Certificate of Business Registration of the University',
      description: 'Copy of the university\'s business registration certificate',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'academic_documents',
      title: 'Academic Documents',
      description: 'Copy of Degree/Diploma/Marksheet from previous education',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'language_proficiency',
      title: 'Language Proficiency Proof (if applicable)',
      description: 'Copy of IELTS/TOEFL score or other relevant language test results, if required by the university',
      icon: '🗣️',
      mandatory: false
    },
    {
      key: 'scholarship_certificate',
      title: 'Certificate of Scholarship (if applicable)',
      description: 'Proof of scholarship if receiving financial aid',
      icon: '💰',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, flight itinerary, bank statements, university admission letter, university business registration, academic documents, and other supporting documents.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill out the visa application form online via the official Korea Visa Portal (visa.go.kr) and print it.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents at the Korea Visa Application Centre (KVAC) operated by VFS Global.' // Corrected submission channel
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the consular fee (INR 4,800) and VFS service fee (INR 1,400) as per the payment instructions at the VFS center.'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Attend the scheduled interview at the VFS center if requested by the embassy.' // Corrected to "if required" and VFS center
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect the visa sticker from the VFS service center or receive it via courier if applicable.' // Corrected collection point
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen 90/180 rule applies. No US DS-160 requirement. No Yellow Fever vaccination required. HIV test not required for stays less than 90 days.'
  }
};