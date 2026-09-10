export default {
  country: 'germany',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Federal Foreign Office of Germany (Auswärtiges Amt)',
  channels: [
    'VIDEX Online Portal (National Visa)',
    'VFS Global Germany Visa Application Centre',
    'Embassy of the Federal Republic of Germany / Consulate General'
  ],
  processingTime: {
    eVisa: 'N/A (eVisa not available for Category D National Visa)',
    standardSticker: '25 to 60 working days',
    expressSticker: '15 to 30 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '75 EUR',
    vfsServiceFee: 'INR 1,800 - INR 2,500'
  },
  eVisa: {
    available: false,
    portal: 'https://videx-national.diplo.de',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: '90 to 180 days (Initial entry visa, extended via local Foreigners Authority / Ausländerbehörde upon arrival)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 12 months from entry date with at least 2 blank pages, issued within the last 10 years.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'aps_certificate',
      title: 'APS Certificate (Akademische Prüfstelle)',
      description: 'Mandatory verification certificate issued by the Academic Evaluation Centre (APS) India for higher education in Germany.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Proof of Admission / Enrollment',
      description: 'Official unconditional or conditional letter of admission (Zulassungsbescheid) from a recognized German university or higher education institution.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Means (Sperrkonto / Blocked Account)',
      description: 'Confirmation of a Blocked Account (Sperrkonto) with minimum €11,904 per year (€992/month), official DAAD/university scholarship award, or sanctioned education loan.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'academic_records',
      title: 'Academic Transcripts and Certificates',
      description: 'Original and copies of Class 10 and 12 certificates, Bachelor degree certificate, and semester marksheets with English/German translations.',
      icon: 'education',
      mandatory: true
    },
    {
      key: 'language_proof',
      title: 'Proof of Language Proficiency',
      description: 'Official language score report (IELTS/TOEFL for English-taught programs, Goethe-Zertifikat/TestDaF for German-taught programs).',
      icon: 'language',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within 6 months) biometric passport photographs, 35x45mm, plain white background, neutral expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VIDEX National Visa Application Form',
      description: 'Duly completed and signed VIDEX National Visa form (Category D) with 2 printed barcode pages.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'motivation_letter_cv',
      title: 'Motivation Letter and CV',
      description: 'Detailed Statement of Purpose (SOP) outlining career and academic goals alongside a complete professional CV.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel and Health Insurance',
      description: 'Incoming health insurance covering initial entry (min €30,000 coverage) and proof of enrollment in German public or private statutory health insurance.',
      icon: 'insurance',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain APS Verification',
      description: 'Apply on the APS India portal (aps-india.de), submit academic transcripts, and receive the mandatory APS verification certificate.'
    },
    {
      step: 2,
      title: 'Secure Admission and Finance',
      description: 'Obtain university admission letter and open a German Blocked Account (Sperrkonto) with required minimum funds (€11,904) or obtain approved education loan documentation.'
    },
    {
      step: 3,
      title: 'Fill VIDEX Form & Book Appointment',
      description: 'Complete the National Visa application form online on the VIDEX portal and book a submission appointment via VFS Global Germany India.'
    },
    {
      step: 4,
      title: 'Attend VFS Appointment',
      description: 'Submit full physical document dossier, undergo biometric enrollment (fingerprints/photo), and pay applicable consular and VFS service fees.'
    },
    {
      step: 5,
      title: 'Visa Collection and Residence Permit',
      description: 'Collect passport with stamped D-Visa, travel to Germany, complete city address registration (Anmeldung) within 14 days, and convert visa to Residence Permit (Aufenthaltstitel).'
    }
  ],
  specialRequirements: {
    entry_rules: 'APS Certificate is mandatory for all Indian students before submitting the visa application. Upon entering Germany, students must register their address (Anmeldung) with the local registration office (Bürgeramt) within 14 days and apply for a formal Residence Permit (Aufenthaltstitel) at the local Ausländerbehörde before the initial entry visa expires.'
  }
};