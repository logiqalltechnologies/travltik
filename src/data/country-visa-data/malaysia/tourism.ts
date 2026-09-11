export default {
  country: 'malaysia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Immigration Department of Malaysia (Jabatan Imigresen Malaysia)',
  channels: [
    'Official Malaysia Digital Arrival Card (MDAC) Portal',
    'Official Malaysia eVisa Portal (malaysiavisa.imi.gov.my)',
    'VFS Global / OSC Malaysia Visa Application Centre',
    'High Commission of Malaysia / Consulate General Direct'
  ],
  processingTime: {
    eVisa: '2 working days',
    standardSticker: '5 working days',
    expressSticker: '2 working days'
  },
  fees: {
    eVisaTotal: 'MYR 105 (approx. INR 1,900) or Visa Exempt via MDAC',
    stickerConsularStandard: 'INR 1,000',
    vfsServiceFee: 'INR 1,950'
  },
  eVisa: {
    available: true,
    portal: 'https://malaysiavisa.imi.gov.my/',
    territorialScope: 'Nationwide',
    validity: '3 months',
    maxStay: '30 days',
    invitationRequired: false,
    processing: '2 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days per visit'
  },
  entryType: 'Multiple Entry / Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport with minimum 6 months validity from the date of arrival in Malaysia and at least 3 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent studio photographs taken within the last 6 months against a clear white background, matte finish, 80% face coverage, and neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'MDAC Registration / Visa Application Form',
      description: 'Completed Malaysia Digital Arrival Card (MDAC) registration submitted online within 3 days prior to arrival, or completed sticker visa application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward air ticket showing entry and exit from Malaysia.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the entire duration of stay, or an invitation letter with host detail and Malaysian IC/Pass copy if staying with private host.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel medical insurance covering overseas emergency medical and hospitalization expenses for the duration of trip.',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statement for the last 3 months with bank stamp/seal, showing a healthy closing balance (minimum USD 500 or equivalent approx. INR 45,000 per person), accompanied by standard ITR or NOC from employer.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Eligibility & Entry Mode',
      description: 'Verify eligibility for the 30-day Visa Exemption facility (valid for Indian citizens until 31 December 2026) or opt for eVisa/Sticker Visa for longer stays.'
    },
    {
      step: 2,
      title: 'Complete MDAC Registration',
      description: 'Fill out the mandatory Malaysia Digital Arrival Card (MDAC) online at the official portal within 3 days prior to your scheduled arrival.'
    },
    {
      step: 3,
      title: 'Prepare Travel Documents',
      description: 'Compile valid passport, confirmed round-trip flight tickets, accommodation proof, and recent bank statements demonstrating adequate funds.'
    },
    {
      step: 4,
      title: 'Immigration Checkpoint Clearance',
      description: 'Present your physical passport, MDAC confirmation printout, return ticket, and accommodation details to the Malaysian immigration officer at the airport.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders enjoy a 30-day visa-free entry facility for tourism (Social Visit Pass) extended through December 31, 2026. All travelers must submit the Malaysia Digital Arrival Card (MDAC) within 3 days prior to arrival. Border authorities mandate proof of confirmed return flights, hotel confirmation, and sufficient cash/funds (minimum USD 500 or equivalent).'
  }
};