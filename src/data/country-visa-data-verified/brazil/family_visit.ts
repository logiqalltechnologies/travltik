export default {
  country: 'brazil',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs (Itamaraty) - Embassy of Brazil, New Delhi',
  channels: [
    'Official SCEDV Portal',
    'VFS Global Brazil Visa Application Centre',
    'Consulate General of Brazil, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 7,200',
    vfsServiceFee: 'INR 1,800'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per entry (valid for up to 5 years)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least two blank pages, valid for at least 6 months from the intended date of entry into Brazil. Damaged or ripped passports are not accepted.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months against a plain white background, showing a neutral facial expression with full face and shoulders clearly visible.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form Receipt (RER)',
      description: 'The online application form must be filled out on the official SCEDV portal. All supporting documents, photo, and signature must be uploaded. The printed and signed Visa Application Form Receipt (RER) must be submitted physically.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight ticket booking showing entry into and exit from Brazilian territory.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation & Invitation Letter',
      description: 'A notarized Invitation Letter (Termo de Compromisso/Responsabilidade) from the host in Brazil, confirming the relationship, duration of stay, and address. Must be accompanied by the host’s Brazilian ID (RG/RNE) and proof of residence in Brazil.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid international travel insurance policy covering medical expenses, emergency hospitalization, and repatriation for the entire duration of the stay in Brazil.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3 months, signed and stamped by the bank, showing sufficient funds to cover the stay. Additionally, Income Tax Returns (ITR) for the last 2 years and an original No Objection Certificate (NOC) / Leave Sanction letter from the employer are required.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Proof of Relationship',
      description: 'Official documents proving the family relationship with the host in Brazil (e.g., birth certificate, marriage certificate) translated into English or Portuguese.',
      icon: '👥',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application',
      description: 'Access the official Ministry of Foreign Affairs (SCEDV) portal and fill out the visa application form. Upload all required documents, including your photo, signature, and passport bio page.'
    },
    {
      step: 2,
      title: 'Print the RER Receipt',
      description: 'After submitting the online form, print the generated Visa Application Form Receipt (RER). Affix one physical photograph and sign the receipt in the designated box.'
    },
    {
      step: 3,
      title: 'Book an Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Brazil Visa Application Centre or directly with the Consulate (depending on jurisdiction) to submit your physical documents.'
    },
    {
      step: 4,
      title: 'Submit Documents and Pay Fees',
      description: 'Attend your appointment to submit your physical passport, signed RER, and all supporting documents. Pay the consular visa fee and VFS service charges at the center.'
    },
    {
      step: 5,
      title: 'Track and Collect Passport',
      description: 'Monitor your application status online. Once processed, collect your passport with the physical sticker visa from the application center or opt for courier delivery.'
    }
  ],
  specialRequirements: {
    entry_rules: 'A Yellow Fever vaccination certificate is mandatory if you have transited through or visited a yellow fever endemic country within 10 days prior to your arrival in Brazil. It is also highly recommended for all travelers visiting Brazil due to local endemic zones.'
  }
};