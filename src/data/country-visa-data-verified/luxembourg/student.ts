export default {
  country: 'luxembourg',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Directorate of Immigration - Ministry of Foreign and European Affairs, Defence, Development Cooperation and Foreign Trade',
  channels: [
    'Guichet.lu Public Portal',
    'VFS Global Visa Application Centre (India)',
    'Embassy of Luxembourg in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 to 60 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '50 EUR',
    vfsServiceFee: 'INR 2,250 (approx., subject to exchange rate fluctuations)'
  },
  eVisa: {
    available: false,
    portal: 'https://guichet.public.lu',
    territorialScope: 'Luxembourg (National Type D Visa / Schengen Area access)',
    validity: '90 to 365 days',
    maxStay: '1 Academic Year (Renewable annually)',
    invitationRequired: true,
    processing: '30 to 60 days for Temporary Authorisation to Stay'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (Initial Entry Visa)',
    stickerMultiple: 'Long-stay Type D Visa valid for residency registration upon arrival'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 12 months beyond the intended departure date from India, with at least 2 blank visa pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Two recent (taken within the last 6 months) color passport-size photos (35x45mm) on a white background, showing full face without obstruction.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'authorisation_to_stay',
      title: 'Temporary Authorisation to Stay (Autorisation de séjour temporaire)',
      description: 'Official approval document issued by the Directorate of Immigration of the Luxembourg Ministry of Foreign Affairs prior to visa application.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Long-Stay (Type D) Visa Application Form',
      description: 'Duly completed, dated, and signed long-stay visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official University Admission Letter',
      description: 'Official confirmation of enrollment or admission letter from an approved higher education institution in Luxembourg (e.g., University of Luxembourg).',
      icon: 'education',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Means',
      description: 'Evidence of sufficient funds (at least 80% of the social minimum wage in Luxembourg per month, approx. €1,100–€1,250/month). Acceptable proofs: Sanctioned Education Loan letter from a recognized bank, scholarship grant letter, official bank statement for the last 6 months, or an official financial guarantee (Engagement de prise en charge - Form 3 bis) signed by a sponsor.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Lease contract, confirmation of student housing/residence reservation, or host declaration covering the initial period of stay in Luxembourg.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Health Insurance',
      description: 'Travel health insurance valid for the initial entry period covering emergency medical treatment, hospitalization, and repatriation with a minimum coverage of €30,000.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Apostilled Police Clearance Certificate issued by the Passport Seva Kendra / Regional Passport Office (RPO) in India, covering the last 12 months.',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate & HIV/Health Check',
      description: 'Medical certificate issued by an authorized panel doctor certifying that the applicant does not suffer from any illness endanger public health, including TB and general health screening for stays >90 days.',
      icon: 'health',
      mandatory: true
    },
    {
      key: 'academic_credentials',
      title: 'Academic Certificates and Transcripts',
      description: 'Apostilled or certified copies of higher secondary certificates, university degrees, and official mark sheets.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'vfs_appointment',
      title: 'VFS Appointment Receipt',
      description: 'Confirmed appointment booking confirmation for biometric submission at the designated VFS Global center in India.',
      icon: 'calendar',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Apply for Temporary Authorisation to Stay',
      description: 'Submit the application for "Autorisation de séjour temporaire pour étudiant" directly to the Directorate of Immigration in Luxembourg before applying for the visa.'
    },
    {
      step: 2,
      title: 'Receive Approval Certificate',
      description: 'Wait for the official written approval letter sent by the Ministry of Foreign and European Affairs of Luxembourg (typically takes 4-8 weeks).'
    },
    {
      step: 3,
      title: 'Book VFS Appointment & Assemble Visa Dossier',
      description: 'Schedule a biometric submission appointment at VFS Global (New Delhi/Mumbai/Bangalore/etc.) and collect the Type D visa application forms, passport, PCC, and financial documents.'
    },
    {
      step: 4,
      title: 'Submit Biometrics and Collect Sticker Visa',
      description: 'Attend the appointment at VFS, submit biometrics, pay the €50 consular fee plus service fees, and await the Type D sticker visa stamping in the Indian passport.'
    },
    {
      step: 5,
      title: 'Arrival and In-Country Registration in Luxembourg',
      description: 'Within 3 working days of arrival in Luxembourg, declare arrival at the local communal administration (Administration communale / Bureau de population), undergo a local medical check-up, and submit the residence permit (titre de séjour) application.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Two-step process is mandatory: Applicant MUST obtain the Temporary Authorisation to Stay from the Ministry of Foreign Affairs in Luxembourg BEFORE applying for the Type D visa in India. Stays exceeding 90 days require mandatory registration at the local Luxembourg municipality (commune) within 3 business days of arrival and completion of a local medical examination by the Health Directorate (Direction de la santé).'
  }
};