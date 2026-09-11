export default {
  country: 'brazil',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs (Itamaraty) / Embassy of Brazil, New Delhi',
  channels: [
    'https://formulario-mre.serpro.gov.br',
    'VFS Global Brazil Visa Application Centre',
    'Consulate General of Brazil in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 24000',
    vfsServiceFee: 'INR 1850'
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
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 730 days (2 years, renewable in Brazil)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of entry into Brazil, containing at least two blank pages for visa stamping.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months against a plain white background, showing a neutral facial expression and full front view of the face.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form Receipt (RER)',
      description: 'The online Visa Request Form Receipt (Recibo de Entrega de Requerimento - RER) completed on the official Ministry of Foreign Affairs portal, printed, signed by the applicant, with the physical photo glued to it.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'work_authorization',
      title: 'Ministry of Justice Work Approval',
      description: 'Prior approval of the work permit granted by the Brazilian Ministry of Justice and Public Security (Coordenação-Geral de Imigração Laboral - CGImig) and published in the Brazilian Official Gazette (Diário Oficial da União).',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Police Clearance Certificate issued by the Regional Passport Office (RPO) within the last 3 months, duly apostilled by the Ministry of External Affairs (MEA) of India.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'birth_certificate',
      title: 'Apostilled Birth Certificate',
      description: 'Full birth certificate showing the parents\' full names, duly apostilled by the Ministry of External Affairs (MEA) of India, along with a certified Portuguese translation.',
      icon: '👶',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'International Certificate of Vaccination against Yellow Fever, required for travelers entering Brazil from endemic regions or traveling to specific Brazilian states.',
      icon: '💉',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or one-way flight reservation showing the travel dates and entry point into Brazil.',
      icon: '✈️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Obtains Work Permit',
      description: 'The sponsoring employer in Brazil must apply for and obtain a work permit approval from the Brazilian Ministry of Justice and Public Security (CGImig). The approval must be published in the Diário Oficial da União.'
    },
    {
      step: 2,
      title: 'Complete Online Application Form',
      description: 'Fill out the online visa application form on the official Brazilian Ministry of Foreign Affairs (MRE) portal, upload all required documents (passport photo, signature, and supporting files), and print the generated Visa Application Form Receipt (RER).'
    },
    {
      step: 3,
      title: 'Apostille Personal Documents',
      description: 'Ensure your Police Clearance Certificate (PCC) and Birth Certificate are apostilled by the Ministry of External Affairs (MEA) of India.'
    },
    {
      step: 4,
      title: 'Book Appointment and Submit Documents',
      description: 'Schedule an appointment at the nearest VFS Global Brazil Visa Application Centre or the Brazilian Consulate. Submit the physical documents, printed RER, and pay the consular and service fees.'
    },
    {
      step: 5,
      title: 'Passport Collection and Registration',
      description: 'Track your application status. Once approved, collect your passport with the physical VITEM V sticker. Within 90 days of arrival in Brazil, you must register with the Federal Police (Polícia Federal) to obtain your National Migration Registry Card (CRNM).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of a temporary work visa (VITEM V) must register with the Federal Police (Polícia Federal) in Brazil within 90 days of their arrival to regularize their residency status and obtain their CRNM card.'
  }
};