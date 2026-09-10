export default {
  country: 'kosovo',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs and Diaspora (MFAD), Republic of Kosovo',
  channels: ['Official Portal', 'Embassy / Consulate'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '40 EUR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'https://visa.rks-gov.net',
    territorialScope: 'Nationwide',
    validity: '90 days',
    maxStay: '90 days (Must apply for Temporary Residence Permit for Study upon entry)',
    invitationRequired: true,
    processing: '15-30 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended stay, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) color passport-size photographs on a white background.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Duly filled and signed National Visa Application form (submitted via the online portal and printed).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Letter of Acceptance',
      description: 'Unconditional admission letter from an accredited higher education institution or university in Kosovo.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Bank statements for the last 6 months, education loan approval letter, or official scholarship agreement proving sufficient funds for study and living costs.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Dormitory placement agreement, lease agreement, or invitation letter with host verification in Kosovo.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Medical Travel Insurance',
      description: 'Valid travel medical insurance covering emergency medical expenses and repatriation with minimum coverage of 30,000 EUR for the initial stay.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original PCC issued by Regional Passport Office / MEA India, officially apostilled or legalised, proving no criminal record.',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'academic_records',
      title: 'Academic Transcripts & Certificates',
      description: 'Apostilled/attested copies of previous educational diplomas, certificates, and mark sheets.',
      icon: 'book',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reserved round-trip or one-way flight itinerary to Kosovo.',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain University Admission',
      description: 'Secure an official admission letter from an accredited Kosovo university or higher education institution.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Register and fill out the visa application form on the official Kosovo Visa Portal (visa.rks-gov.net).'
    },
    {
      step: 3,
      title: 'Schedule Embassy Appointment',
      description: 'Book an appointment at the designated Kosovo Embassy/Consulate (e.g., Sofia, Istanbul, or designated territorial jurisdiction).'
    },
    {
      step: 4,
      title: 'Submit Dossier & Pay Fee',
      description: 'Attend the appointment in person to submit required apostilled documents and pay the consular visa fee (40 EUR).'
    },
    {
      step: 5,
      title: 'Apply for Kosovo Temporary Residence Permit',
      description: 'Upon entry into Kosovo with the entry visa, register with the Department for Citizenship, Asylum and Migration within 30 days to obtain a Temporary Residence Permit for Study.'
    }
  ],
  specialRequirements: {
    entry_rules: 'India does not maintain formal diplomatic representation within Kosovo, and Kosovo visa applications for Indian residents are processed at designated foreign missions (such as Sofia or Istanbul). Upon arrival in Kosovo on an entry visa, students must apply for a Temporary Residence Permit for Study within 30 days.'
  }
};