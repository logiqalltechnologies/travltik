export default {
  country: 'hungary',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'National Directorate-General for Aliens Policing (NDGAP) / Embassy of Hungary',
  channels: [
    'VFS Global',
    'Embassy of Hungary in New Delhi / Consulate General in Mumbai',
    'Enter Hungary Portal (NDGAP)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '110 EUR',
    vfsServiceFee: '₹1,980 INR'
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
    stickerSingleDouble: '30 days (initial D-visa entry validity to receive Residence Permit)',
    stickerMultiple: 'Duration of Academic Program (renewable annually)'
  },
  entryType: 'Single Entry (Type D Visa) / Multiple Entry (upon issuing Residence Permit Card)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended study duration with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photos taken within the last 6 months against a white background',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application for Residence Permit for Studies',
      description: 'Duly filled and signed Hungarian Residence Permit Application Form along with Appendix 14 for Study',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'University Admission Letter / Scholarship Award',
      description: 'Official letter of acceptance from recognized Hungarian Higher Education Institution or Stipendium Hungaricum Scholarship certificate',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof for Studies',
      description: 'Sponsor bank statements for last 6 months, official Education Loan sanction letter, or Scholarship Confirmation covering tuition and living expenses',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Dormitory allotment letter or rental agreement signed with property owner along with Title Deed (Tulajdoni lap)',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Valid Schengen health insurance covering minimum EUR 30,000 for emergency medical expenses until enrollment in university insurance',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'academic_docs',
      title: 'Academic Certificates & Transcripts',
      description: 'Attested copies of previous educational qualification certificates (10th, 12th, Bachelor degree) and language proficiency proof (IELTS/TOEFL or MOI)',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'sop_cv',
      title: 'Statement of Purpose & CV',
      description: 'Detailed Curriculum Vitae and Motivation Letter stating study plans and post-study intent',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reserved return or one-way flight ticket itinerary to Hungary',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain University Acceptance',
      description: 'Receive the official acceptance letter or Stipendium Hungaricum scholarship certificate from the university.'
    },
    {
      step: 2,
      title: 'Prepare Application Dossier',
      description: 'Assemble all required forms, academic transcripts, financial documents, accommodation proof, and travel insurance.'
    },
    {
      step: 3,
      title: 'Schedule VFS Appointment',
      description: 'Book a visa submission appointment at the designated VFS Global Hungary application centre or Embassy.'
    },
    {
      step: 4,
      title: 'Biometrics & Submission',
      description: 'Submit the application, complete biometric data collection, and pay the consular and VFS service fees.'
    },
    {
      step: 5,
      title: 'Residence Permit Collection',
      description: 'Upon arrival in Hungary on the D-visa, report to local NDGAP office within 30 days to collect the physical Residence Permit card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of the Type D visa must finalize their registration at the regional National Directorate-General for Aliens Policing (NDGAP) office within 30 days of arrival in Hungary to receive their physical Residence Permit card.'
  }
};