export default {
  country: 'morocco',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Kingdom of Morocco, New Delhi',
  channels: [
    'Embassy of the Kingdom of Morocco, New Delhi',
    'Consulate General of the Kingdom of Morocco, Mumbai'
  ],
  externalServiceProvider: {
    name: 'VFS Global',
    website: 'https://www.vfsglobal.com/morocco/india/'
  },
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 2,500',
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
    stickerSingleDouble: '90 days (must be converted to a Residence Permit/Carte de Séjour within 30 days of arrival)',
    stickerMultiple: 'N/A'
  },
  maxStayDays: 90,
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 90 days beyond the intended stay in Morocco, containing at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months, with a white background and a neutral facial expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Morocco National Visa Application Form (completed in capital letters).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Admission Letter',
      description: 'Official certificate of registration or admission letter from a recognized public or private educational institution in Morocco.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Proof of sufficient financial means to cover tuition and living expenses. This must include an education loan approval letter, a scholarship certificate, or a notarized letter of financial guarantee from a parent/sponsor accompanied by their bank statements for the last 3 months.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'An official Police Clearance Certificate issued by the Regional Passport Office (RPO) in India, apostilled by the Ministry of External Affairs.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'A medical certificate of good health issued by a registered medical practitioner, certifying that the applicant does not suffer from any contagious diseases (issued within 3 months of application).',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Evidence of housing in Morocco, such as a university dormitory confirmation letter, a registered lease agreement, or a notarized invitation from a host residing in Morocco.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'A confirmed one-way or round-trip flight reservation showing the travel dates and flight numbers.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'International travel medical insurance covering repatriation and medical expenses for at least the initial 90 days of stay.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Admission',
      description: 'Apply to and secure an official admission or enrollment letter from a recognized educational institution in Morocco.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents, including obtaining an apostilled Police Clearance Certificate (PCC) and a certified Medical Certificate.'
    },
    {
      step: 3,
      title: 'Complete Application Form',
      description: 'Download, print, and fill out the Morocco National Visa Application Form in block letters.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the physical application, passport, and supporting documents directly to the Embassy of the Kingdom of Morocco in New Delhi or the Consulate General in Mumbai, depending on your jurisdiction.'
    },
    {
      step: 5,
      title: 'Pay Consular Fees',
      description: 'Pay the non-refundable consular visa fee of INR 2,500 in cash or via the designated payment method at the embassy/consulate.'
    },
    {
      step: 6,
      title: 'Visa Processing',
      description: 'Wait approximately 15 working days for the embassy to process the sticker visa.'
    },
    {
      step: 7,
      title: 'Apply for Residence Permit',
      description: 'Upon arrival in Morocco, you must register with the local police authorities (Préfecture de Police) within 30 days to apply for your student residence permit (Carte de Séjour).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Students must convert their entry visa into a formal Residence Permit (Carte de Séjour) within 30 days of arrival in Morocco. Failure to do so will render the stay illegal.'
  }
};