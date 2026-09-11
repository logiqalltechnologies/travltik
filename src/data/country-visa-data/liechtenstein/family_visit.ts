export default {
  country: 'liechtenstein',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Switzerland in India (Representing the Principality of Liechtenstein)',
  channels: ['VFS Global Switzerland', 'Embassy of Switzerland in India'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '21 EUR'
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
    stickerSingleDouble: 'Up to 90 days within 180 days',
    stickerMultiple: 'Up to 90 days within 180 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized photos (35x45mm), taken within the last 6 months against a plain white background, meeting Schengen specifications.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Completed and signed Schengen visa application form generated online via the Swiss Online Visa Desk.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Host Invitation & ID Proof',
      description: 'Official invitation letter from the host in Liechtenstein detailing relationship, purpose, duration of stay, and host details, alongside a copy of host Liechtenstein passport or residence permit.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Civil status documents such as birth certificates, marriage certificates, or family register confirming the relationship to the host.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation detailing entry and exit from the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Written declaration from the host providing accommodation in Liechtenstein or confirmed hotel reservations for any external travel during stay.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Schengen-compliant travel medical insurance with minimum emergency coverage of €30,000, valid for all Schengen member states for the full stay.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal original bank statements for the last 3 to 6 months certified by the bank and Income Tax Returns (ITR-V) for the last 3 years showing sufficient funds (at least CHF 100/day unless host guarantees funding).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'No Objection Certificate (NOC)',
      description: 'Signed leave approval letter and NOC from current employer for employed individuals, or business registration and company bank statements for self-employed applicants.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Application Online',
      description: 'Fill out the official Schengen visa application form online via the Swiss Online Visa Desk system.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule a visa appointment at the designated VFS Global Switzerland Application Centre in India.'
    },
    {
      step: 3,
      title: 'Assemble Dossier',
      description: 'Collect all mandatory documents including the family host invitation, civil relationship proofs, and financial records.'
    },
    {
      step: 4,
      title: 'Attend VFS Center & Biometrics',
      description: 'Submit application forms, supporting physical documents, pay consular and service fees, and complete biometric data collection.'
    },
    {
      step: 5,
      title: 'Passport Retrieval',
      description: 'Track the application progress online and collect the passport with the Schengen sticker upon decision by the Embassy of Switzerland.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Liechtenstein is represented diplomatically and consularly by Switzerland in India. Standard Schengen 90/180-day limitation applies. If the host in Liechtenstein acts as a financial sponsor, the Swiss/Liechtenstein authorities may require a formal Declaration of Sponsorship (Verpflichtungserklärung).'
  }
};