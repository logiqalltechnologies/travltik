export default {
  country: 'france',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry for Europe and Foreign Affairs / Consulate General of France in India',
  channels: [
    'Official Portal (France-Visas)',
    'VFS Global France Visa Application Centre',
    'Embassy / Consulate General of France'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'Approx. 32 EUR (payable in INR at current consular conversion rate)'
  },
  eVisa: {
    available: false,
    portal: 'https://france-visas.gouv.fr',
    territorialScope: 'Schengen Area',
    validity: 'Up to 5 years (depending on consular decision)',
    maxStay: '90 days within any 180-day period',
    invitationRequired: true,
    processing: '15 calendar days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months, against a plain light/white background, showing neutral facial expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'France-Visas Application Form & Summary',
      description: 'Completed and signed France-Visas application form along with the France-Visas application receipt generated from the official portal.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'attestation_d_accueil',
      title: 'Official Attestation d\'accueil',
      description: 'Original official host invitation certificate (Attestation d\'accueil) issued by the local town hall (Mairie) in France where the inviting family member resides.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official birth certificate, marriage certificate, or family book proving the relation between the applicant and the host in France.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry into and exit from the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Covered by the Attestation d\'accueil, or hotel reservations if part of the stay includes commercial accommodation.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Comprehensive travel medical insurance valid for all Schengen states covering emergency medical treatment, hospitalization, and repatriation with a minimum coverage of 30,000 EUR.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 to 6 months certified by the bank, Indian Income Tax Returns (ITR-V) for the last 2-3 years, and recent salary slips (if employed).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment Proof / NOC',
      description: 'No Objection Certificate (NOC) from the current employer approving leave, or official business registration documents if self-employed.',
      icon: 'document',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Application on France-Visas',
      description: 'Create an account on the France-Visas portal, complete the online application questionnaire for short-stay family visit, and print the resulting registration receipt and form.'
    },
    {
      step: 2,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an appointment at the nearest VFS Global France Visa Application Centre in India to submit biometric data and physical dossier.'
    },
    {
      step: 3,
      title: 'Attend VFS Appointment & Pay Fees',
      description: 'Submit your original documents, France-Visas form, and Attestation d\'accueil at VFS, complete biometric enrollment (fingerprints/photo), and pay consular and service fees.'
    },
    {
      step: 4,
      title: 'Track Application & Collect Passport',
      description: 'Monitor application status online via VFS tracking and retrieve your passport with the Schengen visa sticker once processed by the French Consulate.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule strictly applies across all member states. The primary host document must be the official "Attestation d\'accueil" obtained by the inviter from their local French Mairie. Visitors must carry original proof of insurance and financial means upon entry at French border control.'
  }
};