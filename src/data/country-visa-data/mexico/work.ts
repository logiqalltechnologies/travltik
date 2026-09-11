export default {
  country: 'mexico',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Mexico in India / Instituto Nacional de Migración (INM)',
  channels: [
    'https://embamex.sre.gob.mx/india/index.php/en/',
    'https://citas.sre.gob.mx/',
    'Embassy of Mexico, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'Up to 10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '$53 USD (payable in INR cash as per Embassy exchange rates)',
    vfsServiceFee: 'N/A (Direct Embassy Application)'
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
    stickerSingleDouble: '180 days (must be exchanged for a Temporary Resident Card within 30 days of entry)',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry (to be exchanged for a multiple-entry Temporary Resident Card in Mexico)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the date of entry, with at least two blank pages, and copies of the first and last pages.',
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
      key: 'work_permit',
      title: 'INM Authorization Letter (NUT)',
      description: 'Original and copy of the official authorization letter containing the NUT (Número Único de Trámite) issued by the National Migration Institute (INM) in Mexico to the employer.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'employer_letter',
      title: 'Employer Cover Letter',
      description: 'Original letter from the employer in Mexico addressed to the Embassy, detailing the applicant’s job profile, salary, duration of employment, and company registration details.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements of the applicant for the last 3 months, or proof of financial solvency of the Mexican employer (such as tax returns or corporate bank statements) as required by the NUT.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate & HIV Test',
      description: 'A certified medical certificate of good health, including negative HIV test results, required for long-term work stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'One-way or round-trip flight reservation showing the intended route of travel to Mexico.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Rental agreement, hotel booking, or a letter from the employer confirming that housing/accommodation will be provided in Mexico.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Obtains NUT Authorization',
      description: 'The hiring company in Mexico must apply for and obtain the work permit authorization (NUT - Número Único de Trámite) from the National Migration Institute (INM) in Mexico.'
    },
    {
      step: 2,
      title: 'Schedule Consular Appointment',
      description: 'Once the NUT is approved, schedule an appointment for a consular interview at the Embassy of Mexico in New Delhi using the official MiConsulado online booking portal.'
    },
    {
      step: 3,
      title: 'Prepare Application Dossier',
      description: 'Complete the visa application form (printed double-sided) and gather all required documents, including the NUT letter, passport, photos, and medical certificate.'
    },
    {
      step: 4,
      title: 'Attend Consular Interview',
      description: 'Appear in person at the Embassy of Mexico in New Delhi for your interview, submit biometrics, and pay the consular fee of $53 USD in cash (INR equivalent).'
    },
    {
      step: 5,
      title: 'Visa Issuance and Travel',
      description: 'Upon approval, collect your passport with the single-entry Temporary Resident Visa sticker (usually processed within 2 to 10 working days).'
    },
    {
      step: 6,
      title: 'Exchange Visa for Resident Card (Canje)',
      description: 'Within 30 days of entering Mexico, you must present yourself at the nearest INM office to exchange your visa sticker for a physical Temporary Resident Card (Tarjeta de Residente Temporal).'
    }
  ],
  specialRequirements: {
    entry_rules: 'You must enter Mexico with the physical visa sticker in your passport. Do not enter as a tourist. You must complete the "Canje" process at the local INM office within 30 days of arrival to obtain your resident card, which permits multiple entries and exits.'
  }
};