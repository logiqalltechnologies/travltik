export default {
  country: 'belgium',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'FPS Foreign Affairs, Foreign Trade and Development Cooperation / Embassy of Belgium in New Delhi',
  channels: [
    'VisaOnWeb Official Portal (visaonweb.diplomatie.be)',
    'VFS Global Visa Application Centre (India)',
    'Embassy of Belgium, New Delhi / Consulate General of Belgium, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A (Sticker Visa Only)',
    standardSticker: '15 working days (can extend up to 45 days if additional scrutiny required)',
    expressSticker: 'Not applicable'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€90 (~₹8,200 INR for adults) / €45 (~₹4,100 INR for children aged 6–12)',
    vfsServiceFee: '₹2,225 (inclusive of applicable GST)'
  },
  eVisa: {
    available: false,
    portal: 'https://visaonweb.diplomatie.be/',
    territorialScope: 'Schengen Area (29 member states)',
    validity: 'Up to 90 days within a 180-day period',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '15 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days per entry within 180-day period (1 to 5 years validity based on profile)'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond intended departure from Schengen area, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent color photographs (taken within last 6 months), 35×45mm, plain white background, 70–80% face coverage, sharp focus without reflections.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VisaOnWeb Application Form & Barcode',
      description: 'Completed, submitted online form from visaonweb.diplomatie.be, printed and signed by applicant (or parents/guardians for minors).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Proof of Sponsorship / Host Invitation (Annex 3bis)',
      description: 'Official original "Annex 3bis / Engagement de prise en charge / Verbintenis tot tenlasteneming" legalized by the Belgian municipality, OR formal invitation letter + host’s Belgian ID/residence permit and proof of host income (last 3 salary slips).',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official certificates proving relation to the host (e.g., birth certificate, marriage certificate legalised/Apostilled if applicable).',
      icon: '👨‍👩‍👧',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation showing dates, passenger name, and flight numbers to and from Belgium/Schengen territory.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Minimum coverage of €30,000 for emergency medical expenses, hospitalization, and repatriation, valid across all Schengen states for the full stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Self or Sponsor)',
      description: 'Personal bank statements for the last 3–6 months with bank stamp/signature, showing sufficient funds (min. €45/day if staying with host or €95/day if staying in hotel), plus Income Tax Returns (ITR-V) for the last 3 years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'noc_employment',
      title: 'Proof of Employment / Occupation & Leave Sanction',
      description: 'Employment contract/letter, NOC with approved leave from employer; for self-employed: company registration and bank statements; for students: official letter from school/university.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Register & Complete Online Application',
      description: 'Create an account on VisaOnWeb (visaonweb.diplomatie.be), fill out the short-stay (Type C) visa application, choose your submission centre, and print the generated form with barcode.'
    },
    {
      step: 2,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an in-person appointment at the nearest VFS Global Belgium Visa Application Centre in India (e.g., New Delhi, Mumbai, Bengaluru, Chennai, Kolkata).'
    },
    {
      step: 3,
      title: 'Assemble & Legalize Family Visit Documents',
      description: 'Collect host invitation (Annex 3bis legalized by municipality in Belgium), proof of relationship, travel insurance, flight itinerary, financial records, and official NOC/leave approvals.'
    },
    {
      step: 4,
      title: 'Attend VFS Appointment & Biometrics',
      description: 'Submit physical dossier, pay consular and service fees, and capture biometric data (fingerprints and digital photograph) unless biometrics were captured within the last 59 months.'
    },
    {
      step: 5,
      title: 'Track Processing & Receive Passport',
      description: 'Monitor application status online via VFS tracking tool and retrieve your passport with sticker visa upon clearance or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Short-stay visitors must abide by the Schengen 90/180-day rule. Travel insurance of at least €30,000 coverage is mandatory for entry. On arrival, border controls may request proof of sufficient financial means, host details (Annex 3bis), return flight ticket, and travel insurance.'
  }
};