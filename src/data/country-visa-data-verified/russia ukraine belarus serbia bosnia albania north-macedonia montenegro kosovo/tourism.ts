export default {
  country: 'russia ukraine belarus serbia bosnia albania north-macedonia montenegro kosovo',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Respective Ministry of Foreign Affairs / Embassy of the Destination Country',
  channels: [
    'Official Portals (Russia eVisa: https://evisa.kdmid.ru, Albania eVisa: https://e-visa.al, Ukraine eVisa: https://evisa.mfa.gov.ua)',
    'Embassy Direct (Embassy of Belarus, Serbia, Bosnia & Herzegovina, North Macedonia, and Montenegro in New Delhi; Consulate General of Kosovo in Istanbul)',
    'VFS Global / Visa Application Centers (Russia, Ukraine)'
  ],
  processingTime: {
    eVisa: 'Russia: 4 calendar days | Albania: up to 15 working days',
    standardSticker: '10 to 15 working days (varies by embassy)',
    expressSticker: '3 to 5 working days (available for Russia and Belarus)'
  },
  fees: {
    eVisaTotal: 'Russia: ~52 USD | Albania: 75 EUR | Ukraine: 20 USD (eVisa portal currently suspended)',
    stickerConsularStandard: 'Russia: 40 USD | Belarus: 60 EUR | Serbia: 62 EUR | Bosnia: 60 EUR | Albania: 60 EUR | North Macedonia: 60 EUR | Montenegro: 60 EUR | Kosovo: 40 EUR | Ukraine: 60 USD',
    vfsServiceFee: 'Russia (VFS/IFS): ~30 USD | Ukraine (VFS): ~30 USD | Others: Embassy direct (no external service fee)'
  },
  eVisa: {
    available: true,
    portal: 'Russia: https://evisa.kdmid.ru | Albania: https://e-visa.al | Ukraine: https://evisa.mfa.gov.ua (suspended)',
    territorialScope: 'Russia: Nationwide | Albania: Nationwide | Ukraine: Nationwide',
    validity: 'Russia: 60 days | Albania: Up to 180 days',
    maxStay: 'Russia: 16 days | Albania: 90 days',
    invitationRequired: false,
    processing: 'Russia: 4 working days | Albania: 15 working days'
  },
  stayDuration: {
    eVisa: 'Russia: 16 days | Albania: 90 days',
    stickerSingleDouble: 'Varies by country (typically 30 to 90 days single/double entry)',
    stickerMultiple: 'Up to 90 days per entry within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended date of exit from the destination country.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online/physical visa application form as per the official portal of the destination country.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip reservation (or detailed travel plan) showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation, Airbnb receipt, or invitation letter from a host (if staying with relatives/friends).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to the minimum amount required by the destination (usually ≥ 30,000 EUR/USD).',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) + Income Tax Return (ITR) copy + No Objection Certificate (NOC) from employer (if employed).',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, financial proof, travel itinerary, accommodation proof, and insurance policy.'
    },
    {
      step: 2,
      title: 'Complete Visa Application',
      description: 'Fill the online/physical application form on the official portal of the destination country.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (as per the fee schedule) and the VFS/BLS service fee, if applicable.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Book an appointment and submit the dossier at the designated VFS/BLS/TLScenter or the embassy/consulate.'
    },
    {
      step: 5,
      title: 'Biometric Capture (if required)',
      description: 'Provide fingerprints and photograph at the service center as per the destination’s biometric policy.'
    },
    {
      step: 6,
      title: 'Track & Collect Visa',
      description: 'Monitor application status online; collect the stamped visa passport or receive the e‑visa (if later introduced).'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Schengen or US health mandates apply. Provide proof of sufficient funds, return ticket, and accommodation. No Yellow Fever vaccination required. HIV test not required for stays ≤ 90 days.'
  }
};