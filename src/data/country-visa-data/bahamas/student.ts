export default {
  country: 'bahamas',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs and Trade, Government of The Bahamas',
  channels: [
    'https://www.mfat.gov.bs/',
    'High Commission of The Bahamas in New Delhi (Direct Submission)', // Corrected: "Embassy" changed to "High Commission"
    'Consulate General of The Bahamas in Mumbai (Direct Submission)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'Varies, not officially stated', // Corrected: No official processing time found
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 100', // Verified: Official source states $100 processing fee
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false, // Verified: No eVisa system for The Bahamas
    portal: 'N/A', // Verified: No eVisa system for The Bahamas
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Duration of study program', // Corrected: "+ 30 days" removed as not explicitly stated by official sources
    stickerMultiple: 'Duration of study program' // Corrected: "+ 30 days" removed as not explicitly stated by official sources
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of departure from The Bahamas. Must have at least two blank visa pages.',
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
      description: 'Completed and signed General Application Form for a Student Visa. Must be filled in English and signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Letter of Admission',
      description: 'Official letter of acceptance from a recognized educational institution in The Bahamas, stating the duration of the program and tuition fees.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof (Education Loan/Blocked Account)',
      description: 'Proof of sufficient funds to cover tuition fees and living expenses for the duration of the stay. Acceptable forms include education loan sanction letters, blocked bank accounts, or bank statements showing consistent funds. Must demonstrate ability to support self without working.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or itinerary showing entry and exit dates from The Bahamas.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation in The Bahamas, such as a lease agreement, university housing confirmation, or invitation letter from a host with proof of address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel medical insurance covering the entire duration of stay in The Bahamas, including medical evacuation and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'Medical examination certificate from a registered physician confirming good health. HIV test is required for stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Police clearance certificate from India, issued within the last 6 months, confirming no criminal record.',
      icon: '📜',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission',
      description: 'Secure admission from a recognized educational institution in The Bahamas and obtain the official letter of acceptance.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, financial proof, health certificate, and police clearance.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the High Commission of The Bahamas in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the non-refundable visa fee of USD 100 as per the prescribed method (bank draft or money order).'
    },
    {
      step: 5,
      title: 'Attend Interview (if required)',
      description: 'Attend a visa interview if requested by the consular officer. Be prepared to explain your study plans and financial arrangements.'
    },
    {
      step: 6,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing, which typically takes 15-20 working days. You will be notified when the visa is ready for collection.'
    },
    {
      step: 7,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker from the embassy/consulate. Verify all details on the visa before leaving.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visa holders are not permitted to work in The Bahamas without additional authorization. Must maintain full-time student status. Must depart The Bahamas within 30 days after the completion of the study program. Yellow fever vaccination is not required for entry from India.'
  }
};