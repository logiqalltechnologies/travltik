export default {
  country: 'netherlands',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Kingdom of the Netherlands',
  channels: [
    'https://consular.mfaservices.nl/',
    'VFS Global Netherlands Visa Application Centre',
    'Embassy of the Kingdom of the Netherlands, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '29.13 EUR'
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
    stickerSingleDouble: 'Up to 90 days within any 180-day period',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the planned departure date from the Schengen area, containing at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months, with a white background, neutral facial expression, and meeting strict Schengen biometric specifications.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Completed and signed Schengen Visa Application Form, filled out online via the official Dutch Consular Service Portal, printed, and brought to the appointment.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'A round-trip flight reservation or detailed travel itinerary showing entry and exit dates from the Schengen zone.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Sponsorship and/or Private Accommodation',
      description: 'The official Dutch form "Bewijs van garantstelling en/of particuliere logiesverstrekking" (Proof of sponsorship and/or private accommodation) completed by the host in the Netherlands and legalized by their local Dutch municipality. If the host is sponsoring the applicant financially, they must also provide their last 3 months of payslips and employment contract.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Travel insurance certificate valid for all Schengen countries, covering medical emergencies, urgent healthcare, and repatriation with a minimum coverage of EUR 30,000.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 to 6 months showing sufficient funds (at least EUR 55 per day if the host is not sponsoring the trip financially). If the host is sponsoring, the host\'s financial documents must be submitted instead.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Relationship with Host',
      description: 'Documents proving family ties with the host in the Netherlands, such as birth certificates, marriage certificates, or family registers, along with a copy of the host\'s Dutch passport or residence permit.',
      icon: '👥',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / Ties to India',
      description: 'For employees: No Objection Certificate (NOC) from the employer, salary slips for the last 3 months, and Income Tax Return (ITR) V or Form 16 for the last 2 years. For self-employed: Business registration documents and company bank statements.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete the Online Application',
      description: 'Visit the official Dutch Consular Service Portal, fill out the Schengen visa application form online, and print the completed PDF form.'
    },
    {
      step: 2,
      title: 'Receive Legalized Invitation from Host',
      description: 'Ensure your host in the Netherlands completes the "Bewijs van garantstelling en/of particuliere logiesverstrekking" form, has it legalized at their local Dutch municipality, and mails the original physical document to you in India.'
    },
    {
      step: 3,
      title: 'Book a VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Netherlands Visa Application Centre in India to submit your documents and register biometrics.'
    },
    {
      step: 4,
      title: 'Attend the Appointment',
      description: 'Visit the VFS Centre with all required documents, the printed application form, passport, and fees. Submit your biometric data (fingerprints and digital photograph).'
    },
    {
      step: 5,
      title: 'Track and Collect Passport',
      description: 'Track your application status online. Once processed, collect your passport containing the visa sticker from the VFS Centre or opt for secure courier delivery.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The Schengen 90/180-day rule applies strictly. The host\'s legalized sponsorship form is valid for a maximum of 3 months from the date of legalization by the Dutch municipality. Travelers must carry a copy of the sponsorship form and proof of travel insurance when passing through Dutch border control.'
  }
};