export default {
  country: 'france',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of France in India / Ministry for Europe and Foreign Affairs',
  channels: [
    'France-Visas Portal',
    'VFS Global Application Centre',
    'Embassy / Consulate General of France'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '28 EUR'
  },
  eVisa: {
    available: false,
    portal: 'https://france-visas.gouv.fr',
    territorialScope: 'Schengen Area',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (taken within the last 6 months), 35x45mm size, white background, 70-80% face coverage, without borders or headgear except for religious purposes.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'France-Visas Form & Registration Receipt',
      description: 'Completed and signed short-stay visa application form generated from the France-Visas official portal along with the France-Visas receipt.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Business Invitation Letter',
      description: 'Formal invitation letter from the French host company/organization on official letterhead stating the purpose, exact dates, schedule of meetings, and details of funding for the trip.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'company_cover_letter',
      title: 'Employer Cover Letter / Deputation Letter',
      description: 'Original cover letter on the Indian employer company letterhead detailing the applicant position, length of service, business trip purpose, and guarantee of financial sponsorship/expenses.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and departure dates to and from France/Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: "Hotel booking confirmation, invitation mentioning host accommodation, or official attestation d'accueil for the entire period of stay in France.",
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Schengen-compliant travel health insurance with a minimum coverage of 30,000 EUR covering emergency medical expenses, hospitalization, and repatriation of remains.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Income Tax Returns',
      description: 'Original certified personal bank statements for the last 6 months showing sufficient funds, along with Income Tax Returns (ITR-V) for the last 3 assessment years. Company bank statements/ITRs required if sponsored by Indian employer.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application on France-Visas Portal',
      description: 'Create an account on France-Visas, select short-stay business visa, complete the online application, and print the generated application form and registration receipt.'
    },
    {
      step: 2,
      title: 'Book VFS Global Appointment',
      description: 'Schedule an appointment at the nearest VFS Global France Visa Application Centre in India for biometrics and document submission.'
    },
    {
      step: 3,
      title: 'Attend VFS Appointment & Pay Fees',
      description: 'Submit your complete application dossier, provide biometric data (fingerprints and digital photo), and pay the 90 EUR consular fee along with the VFS service fee.'
    },
    {
      step: 4,
      title: 'Track Application & Receive Passport',
      description: 'Track the status of your dossier online using the VFS tracking reference. Collect your passport containing the Schengen Type C sticker visa upon processing completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies. Travelers must carry physical copies of their business invitation letter, proof of return travel, travel medical insurance certificate (minimum €30,000 coverage), and sufficient financial means upon arrival at French border control.'
  }
};