export default {
  country: 'denmark',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of Denmark / Danish Immigration Service',
  channels: [
    'ApplyVisa Portal (Official Danish MFA Portal)',
    'VFS Global Application Centre',
    'Embassy of Denmark, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A (Sticker Visa Only)',
    standardSticker: '15 calendar days (can extend up to 45 days if further scrutiny is needed)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'approx. ₹1,480'
  },
  eVisa: {
    available: false,
    portal: 'https://applyvisa.um.dk',
    territorialScope: 'Schengen Area',
    validity: 'Up to 90 days within any 180-day period',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '15 calendar days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days within 180 days',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages, issued within the last 10 years.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) color photos on a white background, size 35x45mm, 70-80% face coverage, no headwear except for religious reasons.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'ApplyVisa Cover Letter & Fee Receipt',
      description: 'Signed Cover Letter generated after online registration and fee payment on the official ApplyVisa (um.dk) portal.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_vu2',
      title: 'Official Danish Invitation Form (VU2)',
      description: 'Online VU2 invitation completed by host in Denmark via the Danish Immigration Service portal, containing host CPR number and detailed stay parameters.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'host_id',
      title: 'Host Passport & Residency Proof',
      description: 'Copy of host’s Danish passport or valid Danish residence permit and CPR card.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Proof of Family Relationship',
      description: 'Official birth certificate, marriage certificate, or legal family ledger proving relation to the Danish host.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation showing intended dates of entry and departure from the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Explicit statement in the host’s VU2 form confirming accommodation at host’s residence, or confirmed hotel/lodging booking.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Comprehensive travel medical insurance with minimum coverage of €30,000 for emergency medical care, hospitalization, and repatriation, valid for the entire Schengen area.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original personal bank statements for the last 3-6 months stamped by the bank. If host is covering costs, host must submit proof of income/bank statements in Denmark.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr_proof',
      title: 'Income Tax Returns (ITR)',
      description: 'ITR-V or Income Tax Acknowledgement for the last 3 assessment years.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'noc_employment',
      title: 'Proof of Employment / Leave Sanction',
      description: 'No Objection Certificate (NOC) from employer detailing position, salary, approved leave dates, and return to work. Self-employed applicants must provide GST registration and company bank statements.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Receive Host Invitation (VU2)',
      description: 'Ensure host in Denmark creates and submits the online VU2 invitation code via the Danish Immigration website.'
    },
    {
      step: 2,
      title: 'Complete Online Portal Application',
      description: 'Register on ApplyVisa.um.dk, complete the application form online, and pay the €90 consular fee.'
    },
    {
      step: 3,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an appointment at the nearest VFS Global Denmark application centre in India.'
    },
    {
      step: 4,
      title: 'Submit Biometrics and Dossier',
      description: 'Attend VFS appointment, submit signed ApplyVisa cover letter, documents, and provide biometric data (fingerprints & photo).'
    },
    {
      step: 5,
      title: 'Receive Passport',
      description: 'Track processing via VFS portal and collect stamped passport upon approval.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Compliance with Schengen 90/180 rule. Short-stay visa holders cannot perform gainful employment in Denmark. Travel insurance must cover full stay duration.'
  }
};