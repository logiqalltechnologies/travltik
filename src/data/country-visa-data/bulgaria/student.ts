export default {
  country: 'bulgaria',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Republic of Bulgaria in New Delhi / Ministry of Foreign Affairs',
  channels: ['VFS Global', 'Embassy of the Republic of Bulgaria in New Delhi'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30-35 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 EUR',
    vfsServiceFee: '₹1,980 (approx. 22 EUR)'
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
    stickerSingleDouble: 'Up to 180 days',
    stickerMultiple: 'Up to 1 year (convertible to local Residence Permit upon arrival)'
  },
  entryType: 'Multiple Entry (Type D Long-Stay)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 1 year beyond entry date, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent white background photographs taken within the last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Type D Visa Application Form',
      description: 'Duly completed and signed Bulgarian National Long-Stay (Type D) Visa Application Form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Ministry Certificate of Admission',
      description: 'Official Certificate issued by the Ministry of Education and Science of the Republic of Bulgaria confirming university admission.',
      icon: 'school',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof & Education Loan',
      description: 'Bank statements for 6 months or an official Education Loan sanction letter proving funds for study and living costs.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Notarized tenancy contract in Bulgaria or official University Dormitory / Hostel allotment document.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Clean criminal record certificate issued by Passport Seva Kendra (MEA, India), apostilled and officially translated.',
      icon: 'file-check',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Medical Travel Insurance',
      description: 'Medical insurance policy covering minimum €30,000 for emergency medical treatment in Bulgaria.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'academic_documents',
      title: 'Apostilled Academic Records',
      description: 'Mark sheets, higher secondary certificates, and degree diplomas apostilled by the Ministry of External Affairs (MEA), India.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or one-way flight reservation to Bulgaria.',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Ministry Certificate',
      description: 'Secure admission to a recognized Bulgarian university and obtain the official enrollment certificate from the Ministry of Education and Science.'
    },
    {
      step: 2,
      title: 'Apostille Documents',
      description: 'Get your Police Clearance Certificate (PCC) and academic certificates apostilled by the Ministry of External Affairs (MEA), India.'
    },
    {
      step: 3,
      title: 'Assemble Visa Dossier',
      description: 'Complete the Type D visa application form, compile bank/loan statements, proof of accommodation, and medical insurance.'
    },
    {
      step: 4,
      title: 'Submit at VFS / Embassy',
      description: 'Schedule an appointment, submit the physical dossier, pay consular and service fees, and complete biometrics.'
    },
    {
      step: 5,
      title: 'Collect Visa and Apply for Residence Permit',
      description: 'Collect your passport with the Type D Visa and apply for a Bulgarian Residence Permit at the Migration Directorate within 14 days of entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of a Bulgarian Type D student visa must report to the Migration Directorate of the Ministry of Interior within 14 days of arrival to obtain a Long-Term Residence Permit.'
  }
};