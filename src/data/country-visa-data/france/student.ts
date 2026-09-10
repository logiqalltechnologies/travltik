export default {
  country: 'france',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Consulate General of France / France-Visas',
  channels: [
    'Official Portal (France-Visas)',
    'Campus France India (EEF Procedure)',
    'VFS Global Application Centre'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '2,300 INR'
  },
  eVisa: {
    available: false,
    portal: 'https://france-visas.gouv.fr/',
    territorialScope: 'France and Schengen Area',
    validity: 'Course Duration / Up to 1 year (renewable)',
    maxStay: 'Course duration (VLS-TS)',
    invitationRequired: true,
    processing: '15 calendar days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 1 year (renewable via VLS-TS)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent photos (taken within the last 6 months), 35x45mm size, against a light white background, neutral facial expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'France-Visas Application Form',
      description: 'Completed and signed France-Visas application form along with the official online submission receipt.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'campus_france_approval',
      title: 'Campus France / EEF Completion Certificate',
      description: 'Attestation d\'entretien from Campus France India proving completion of the Etudes en France (EEF) procedure.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official University Admission Letter',
      description: 'Official acceptance or enrollment letter from a recognized higher education institution in France detailing course dates and academic degree.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Proof of minimum financial resources of €615 per month (or equivalent in INR): Education loan sanction letter, bank statements (last 3-6 months), or financial guarantor affidavit with income proof.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of housing in France for at least the first 3 months (CROUS letter, student residence booking, lease agreement, or host declaration Attestation d\'hébergement).',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Medical Travel Insurance',
      description: 'Comprehensive medical insurance covering repatriations and emergency medical expenses with minimum coverage of 30,000 EUR, valid until registration in French national social security.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Flight reservation or travel itinerary indicating planned entry date into France.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'academic_transcripts',
      title: 'Academic Records & Qualifications',
      description: 'Copies of educational mark sheets, degree certificates, and language proficiency proof (DELF/DALF or IELTS/TOEFL if requested by institution).',
      icon: 'education',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Campus France Registration',
      description: 'Create an account on the Etudes en France (EEF) portal, submit academic records, and attend the Campus France interview.'
    },
    {
      step: 2,
      title: 'Complete France-Visas Application',
      description: 'Fill out the visa application on the France-Visas online portal and print the completed application form and registration receipt.'
    },
    {
      step: 3,
      title: 'Book & Attend VFS Appointment',
      description: 'Schedule an appointment at a VFS Global center in India, submit paper dossier, undergo biometric collection, and pay fees.'
    },
    {
      step: 4,
      title: 'Track and Passport Retrieval',
      description: 'Monitor application processing status online and collect your passport containing the VLS-TS visa sticker once issued.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of a Long-Stay Student Visa (VLS-TS) must validate their visa online within 3 months of arrival in France and register for French social security (Sécurité Sociale). Proof of minimum funds equivalent to €615/month is strictly enforced.'
  }
};