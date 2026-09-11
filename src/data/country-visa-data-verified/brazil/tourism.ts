export default {
  country: 'brazil',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Brazil, New Delhi / Consulate General of Brazil, Mumbai',
  channels: [
    'https://formulario-mre.serpro.gov.br',
    'VFS Global Brazil Visa Application Centre'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 6,400',
    vfsServiceFee: 'INR 1,850'
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
    stickerMultiple: 'Up to 90 days per entry (validity up to 1 year or 5 years at consular discretion)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the date of entry into Brazil, with at least two blank pages for visa stamping. Damaged or torn passports will not be accepted.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent identical photographs taken within the last 6 months, 35x45mm size, against a plain white background, with a neutral expression, showing full face and shoulders without headgear (except for religious purposes).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form Receipt (RER)',
      description: 'The online application form must be filled out on the official Serpro portal (https://formulario-mre.serpro.gov.br). All supporting documents (photo, signature, passport bio-page, and itinerary) must be uploaded. The printed and signed Visa Application Form Receipt (RER) must be submitted physically.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight ticket or detailed flight itinerary showing entry into and exit from Brazilian territory.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservation for the entire duration of the stay, or a notarized invitation letter (Termo de Consentimento/Compromisso) from a host residing in Brazil, accompanied by the host’s Brazilian ID (RG) or permanent residency card.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance policy covering the entire duration of the stay in Brazil, with a minimum coverage of USD 30,000 or EUR 30,000 for medical emergencies and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3 months, stamped and signed by the issuing bank, showing a healthy balance (minimum equivalent of USD 150 per day of stay) and active transactions. Income Tax Returns (ITR-V) for the last 3 financial years must also be provided.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / NOC',
      description: 'For employed individuals: No Objection Certificate (NOC) on company letterhead with stamp and signature, along with salary slips for the last 3 months. For self-employed: Business registration certificate, GST registration, or partnership deed.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application',
      description: 'Visit the official Brazilian consular portal (https://formulario-mre.serpro.gov.br) and fill out the visa application form. Upload digital copies of your passport bio-page, photograph, signature, and flight itinerary.'
    },
    {
      step: 2,
      title: 'Print and Sign the RER',
      description: 'After submitting the online form, print the generated Visa Application Form Receipt (RER). Affix your physical photograph and sign the receipt in the designated box. The signature must match the signature in your passport.'
    },
    {
      step: 3,
      title: 'Book a VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Brazil Visa Application Centre (under the jurisdiction of the Embassy in New Delhi or Consulate General in Mumbai depending on your state of residence).'
    },
    {
      step: 4,
      title: 'Submit Documents and Pay Fees',
      description: 'Attend your appointment at VFS Global. Submit your physical passport, signed RER, and all supporting documents. Pay the consular visa fee of INR 6,400 along with the VFS service fee.'
    },
    {
      step: 5,
      title: 'Track and Collect Passport',
      description: 'Track your application status online using the VFS tracking tool. Once processed, collect your passport containing the physical sticker visa from the VFS center or opt for secure courier delivery.'
    }
  ],
  specialRequirements: {
    entry_rules: 'An international Yellow Fever vaccination certificate is mandatory if you are arriving from or transiting through yellow fever endemic countries, or if you plan to travel to rural/forested endemic regions within Brazil.'
  }
};