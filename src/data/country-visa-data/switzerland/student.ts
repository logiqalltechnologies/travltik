export default {
  country: 'switzerland',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Switzerland in India / Cantonal Migration Authority',
  channels: [
    'https://www.swiss-visa.ch',
    'VFS Global Switzerland Visa Application Centre',
    'Embassy of Switzerland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '40 to 60 working days (8 to 12 weeks)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 CHF (approx. 7,700 INR)',
    vfsServiceFee: 'approx. 2,500 INR'
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
    stickerSingleDouble: '90 to 365 days (renewable residency permit issued upon arrival)',
    stickerMultiple: '90 to 365 days (renewable residency permit issued upon arrival)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, with at least 2 blank pages, valid for at least 3 months beyond the planned stay in Switzerland. Provide three (3) high-quality photocopies of pages 1-2 and the last page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Four (4) identical, recent passport-size photographs taken within the last 6 months. Must have a white background, neutral facial expression, no headgear (except for religious reasons), and meet strict Schengen biometric specifications.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa D Application Form',
      description: 'Three (3) copies of the National Type D visa application form, fully completed and signed by the applicant. Must be filled out in English, German, French, or Italian.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Proof of Admission (Acceptance Letter)',
      description: 'Official certificate of enrollment or letter of acceptance from a recognized Swiss university, college, or school confirming admission to a full-time study program (original and 2 copies).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Resources',
      description: 'Evidence of sufficient funds to cover living costs in Switzerland (minimum CHF 21,000 or equivalent per year of study). Accepted proofs: a Swiss bank account statement in the student\'s name, an official education loan approval letter, or a formal sponsorship guarantee from a solvent sponsor residing in Switzerland or abroad (original and 2 copies).',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'academic_qualifications',
      title: 'Academic Certificates & CV',
      description: 'Original and two copies of previous academic degrees, diplomas, school certificates, and a comprehensive, up-to-date Curriculum Vitae (CV) signed by the applicant.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'study_plan',
      title: 'Motivation Letter & Study Plan',
      description: 'A signed personal statement/motivation letter outlining the purpose of the studies, reasons for choosing Switzerland, future career plans, and a clear study plan detailing the duration and goals of the course.',
      icon: '✍️',
      mandatory: true
    },
    {
      key: 'written_commitment',
      title: 'Written Commitment to Leave Switzerland',
      description: 'A signed, written declaration confirming that the applicant will leave Switzerland and return to their home country upon completion of their studies or in the event of discontinuation.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'language_proof',
      title: 'Proof of Language Proficiency',
      description: 'Language certificate (e.g., IELTS, TOEFL, or equivalent) proving proficiency in the language of instruction (English, German, French, or Italian) depending on the course requirements (original and 2 copies).',
      icon: '🗣️',
      mandatory: true
    },
    {
      key: 'fee_payment',
      title: 'Proof of Tuition Fee Payment',
      description: 'Receipt or confirmation of payment of tuition fees for the first semester or academic year, or confirmation of a scholarship covering these costs.',
      icon: '💳',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Admission',
      description: 'Apply to and secure admission at a recognized Swiss educational institution. Obtain the official letter of acceptance/enrollment.'
    },
    {
      step: 2,
      title: 'Prepare Documents in Triplicate',
      description: 'Gather all required documents. You must prepare three (3) separate sets of documents: one (1) set of originals and two (2) sets of clear photocopies. Any documents not in English, German, French, or Italian must be officially translated.'
    },
    {
      step: 3,
      title: 'Complete Application Forms',
      description: 'Download, print, and complete three (3) copies of the National Visa D application form. Sign all three forms.'
    },
    {
      step: 4,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment online through the official VFS Global Switzerland portal to submit your application at the nearest Visa Application Centre in India.'
    },
    {
      step: 5,
      title: 'Submit Application & Enroll Biometrics',
      description: 'Attend your VFS appointment. Submit the three sets of documents, pay the visa fee and VFS service fee, and enroll your biometric data (fingerprints and digital photograph).'
    },
    {
      step: 6,
      title: 'Cantonal Authority Processing',
      description: 'The Swiss Embassy in India will forward your application to the respective Cantonal Migration Authority in Switzerland. The Canton makes the final decision, which typically takes 8 to 12 weeks (40 to 60 working days).'
    },
    {
      step: 7,
      title: 'Passport Submission & Visa Issuance',
      description: 'Once the Cantonal Migration Authority approves your application, the Swiss Embassy will notify you to submit your original passport for visa stamping. Collect your passport with the stamped National D Visa from VFS or via courier.'
    },
    {
      step: 8,
      title: 'Register in Switzerland',
      description: 'Within 14 days of arrival in Switzerland, you must register at the local Residents\' Registration Office (Einwohnerkontrolle/Contrôle des habitants) in your municipality of residence to obtain your Swiss residence permit (L or B permit).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Mandatory Swiss health insurance must be purchased within 3 months of arrival in Switzerland, unless an exemption is granted for equivalent foreign coverage. Registration with the local Cantonal Migration Office within 14 days of arrival is strictly required to validate your residency status.'
  }
};