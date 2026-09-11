export default {
  country: 'mexico',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Mexico in India (Consular Section)',
  channels: [
    'MiConsulado Appointment Portal',
    'Embassy of Mexico, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '53 USD (payable in INR cash at the Embassy)',
    vfsServiceFee: 'N/A (Direct Embassy submission)'
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
    stickerSingleDouble: '180 days (Must be exchanged for a Temporary Resident Student Card in Mexico)',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the date of entry, with at least two blank pages, and a photocopy of the first and last pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'One recent passport-size photograph (35x45mm), white background, taken within 6 months, neutral expression, front view, without glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Visa application form completed in full, printed double-sided on a single sheet of paper, and signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Acceptance Letter',
      description: 'Original acceptance letter from an educational institution belonging to the National Educational System in Mexico. Must include: student\'s full name, level/grade/course, tuition cost, duration of study, and the institution\'s official registration details.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Solvency',
      description: 'Demonstrated through: 1) Original bank statements showing an average monthly balance of approx. 1,000 USD (or equivalent in INR) for the last 150 working days, OR 2) Proof of a fully funded scholarship, OR 3) Educational loan sanction letter, OR 4) Proof of employment/pension with a monthly income of approx. 800 USD for the last 150 working days.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'academic_credentials',
      title: 'Academic Certificates',
      description: 'Original and copy of degrees, diplomas, or transcripts proving previous academic qualifications required for the chosen course of study.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'proof_of_relation',
      title: 'Sponsor Relationship Proof (If Sponsored)',
      description: 'For students under 25 years of age sponsored by parents: original birth certificate, sponsor letter, and the parents\' financial documents covering the last 150 working days.',
      icon: '👪',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Acceptance Letter',
      description: 'Secure admission and receive the official, original acceptance letter from a certified educational institution in Mexico.'
    },
    {
      step: 2,
      title: 'Book Consular Appointment',
      description: 'Schedule an appointment online through the official MiConsulado booking portal for the Embassy of Mexico in New Delhi.'
    },
    {
      step: 3,
      title: 'Prepare Application Package',
      description: 'Complete the visa application form (printed double-sided) and gather all required documents, including 150 working days of financial statements and academic transcripts.'
    },
    {
      step: 4,
      title: 'Attend Consular Interview',
      description: 'Present yourself in person at the Embassy of Mexico in New Delhi for your biometric enrollment and consular interview. Pay the 53 USD visa fee in exact INR cash.'
    },
    {
      step: 5,
      title: 'Visa Collection',
      description: 'If approved, collect your passport with the single-entry student visa sticker, typically processed within 10 working days.'
    },
    {
      step: 6,
      title: 'Exchange for Residence Card in Mexico',
      description: 'Within 30 days of entering Mexico, you must present your student visa at the National Migration Institute (INM) to exchange it for a Temporary Resident Student Card (Tarjeta de Residente Temporal Estudiante).'
    }
  ],
  specialRequirements: {
    entry_rules: 'The student visa sticker issued by the embassy is a single-entry permit valid for 180 days. It does not permit multiple entries until it is exchanged for the physical Temporary Resident Student Card (Tarjeta de Residente Temporal Estudiante) at the National Migration Institute (INM) in Mexico within 30 days of arrival.'
  }
};