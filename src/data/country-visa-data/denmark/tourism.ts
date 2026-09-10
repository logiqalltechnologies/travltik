export default {
  country: 'denmark',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of Denmark / Embassy of Denmark, New Delhi',
  channels: ['Official Portal (ApplyVisa)', 'VFS Global Application Centre', 'Embassy of Denmark'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'Up to 45 calendar days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90',
    vfsServiceFee: 'INR 1,490'
  },
  eVisa: {
    available: false,
    portal: 'https://applyvisa.um.dk',
    territorialScope: 'Schengen Area',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
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
      description: 'Two recent (taken within last 6 months) passport-size photos, 35x45mm, white background, 80% face coverage, no headgear unless for religious purposes.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'ApplyVisa Summary & Cover Letter',
      description: 'Signed cover letter and payment receipt generated from the official Denmark Ministry of Foreign Affairs ApplyVisa portal (applyvisa.um.dk).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary with arrival and exit dates from the Schengen zone.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations, tour itinerary, or official invitation form (VU1) if hosted by a resident.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Mandatory travel medical insurance with minimum coverage of EUR 30,000 for emergency medical expenses and repatriation, valid across all Schengen states for the entire travel period.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Income Tax Returns',
      description: 'Original bank statements for the past 3 to 6 months stamped by the bank showing sufficient funds (min. DKK 500/day for hotel stay), along with Income Tax Returns (ITR-V) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_noc',
      title: 'Proof of Employment / Leave Approval',
      description: 'No Objection Certificate (NOC) on official letterhead from employer confirming granted leave, pay slips for the last 3 months, or business ownership documents if self-employed.',
      icon: 'file-text',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Verify travel requirements for short-stay Schengen tourist visa for Indian passport holders.'
    },
    {
      step: 2,
      title: 'Complete Application Online',
      description: 'Register on the official Denmark ApplyVisa portal (applyvisa.um.dk), complete the form, and pay the EUR 90 consular fee online.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Denmark Visa Application Centre in India to submit physical documents and biometrics.'
    },
    {
      step: 4,
      title: 'Submit Dossier and Biometrics',
      description: 'Attend the appointment with printed documents, cover letter, passport, and pay the local VFS service fee for biometric capture.'
    },
    {
      step: 5,
      title: 'Receive Clearance',
      description: 'Track application processing status online and collect passport with stamped Schengen sticker upon completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule strictly enforced. Financial proof requires min. DKK 500 per day for commercial accommodation or DKK 350 per day if hosted. Biometric registration mandatory unless recorded within the last 59 months.'
  }
};