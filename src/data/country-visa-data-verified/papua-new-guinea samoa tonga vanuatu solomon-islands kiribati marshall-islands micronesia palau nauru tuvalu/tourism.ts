export default {
  country: 'papua-new-guinea samoa tonga vanuatu solomon-islands kiribati marshall-islands micronesia palau nauru tuvalu',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Respective Ministry of Foreign Affairs / Immigration Departments',
  channels: [
    'PNG eVisa Portal: https://evisa.ica.gov.pg/',
    'Solomon Islands eVisa Portal: https://www.solomonsvisas.com.sb/',
    'Samoa Immigration: https://www.mpmc.gov.ws/',
    'Vanuatu Immigration: https://immigration.gov.vu/',
    'Tonga Immigration: https://mctl.gov.to/',
    'Kiribati Immigration: https://www.mfa.gov.ki/',
    'Nauru Immigration: visa@naurugov.nr (Direct Email)',
    'Direct application to respective Embassies/High Commissions or Visa on Arrival at port of entry'
  ],
  processingTime: {
    eVisa: '1-3 working days (PNG & Solomon Islands)',
    standardSticker: '10-15 working days (Kiribati & Nauru pre-arranged visas)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'PNG: 50 USD | Solomon Islands: 80 SBD (approx. 10 USD)',
    stickerConsularStandard: 'Kiribati: 40 AUD | Nauru: 50 AUD | Samoa, Tonga, Vanuatu, Micronesia, Palau, Tuvalu, Marshall Islands: Free / Visa on Arrival (Note: Palau charges 100 USD environmental fee; Tuvalu may charge 100 USD on arrival)',
    vfsServiceFee: 'N/A (Direct Embassy/Immigration or On Arrival processing only)'
  },
  eVisa: {
    available: true,
    portal: 'PNG: https://evisa.ica.gov.pg/ | Solomon Islands: https://www.solomonsvisas.com.sb/',
    territorialScope: 'Nationwide',
    validity: 'PNG: 30 days from issuance | Solomon Islands: 3 months',
    maxStay: 'PNG: 30 days | Solomon Islands: 90 days',
    invitationRequired: false,
    processing: '1-3 working days'
  },
  stayDuration: {
    eVisa: 'PNG: 30 days | Solomon Islands: up to 90 days',
    stickerSingleDouble: 'Samoa: 60 days | Tonga: 31 days | Vanuatu: 30 days | Micronesia: 30 days | Palau: 30 days | Tuvalu: 30 days | Marshall Islands: 90 days | Kiribati: 30 days | Nauru: 30 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry, with at least 2 blank pages for visa stamps.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized photographs with white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form / Arrival Card',
      description: 'Completed and signed visa application form (for Kiribati/Nauru) or Arrival Card/Declaration completed upon arrival.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or itinerary showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the entire duration of stay or invitation letter from host with proof of address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance covering medical expenses, repatriation, and emergency evacuation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3-6 months showing sufficient funds to cover the trip (typically 50-100 USD per day of stay).',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Entry Requirements by Destination',
      description: 'Determine if your specific destination is Visa-Free, Visa on Arrival, eVisa (PNG, Solomon Islands), or requires a pre-arranged visa (Kiribati, Nauru).'
    },
    {
      step: 2,
      title: 'Apply Online or Prepare Documents',
      description: 'For PNG and Solomon Islands, apply via their official eVisa portals. For Kiribati and Nauru, submit applications directly to their respective immigration departments/embassies. For others, gather documents to present on arrival.'
    },
    {
      step: 3,
      title: 'Pay Applicable Fees',
      description: 'Pay eVisa fees online, pre-arranged visa fees via bank transfer/embassy direct, or environmental/arrival fees at the border if applicable.'
    },
    {
      step: 4,
      title: 'Complete Arrival Declarations',
      description: 'Fill out any mandatory pre-departure digital travel declarations (e.g., Samoa Travel Declaration) or physical arrival cards.'
    },
    {
      step: 5,
      title: 'Present Documents at Border Control',
      description: 'Upon arrival, present your passport, return ticket, proof of funds, accommodation details, and eVisa approval (if applicable) to immigration officers.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Palau requires all visitors to sign the Palau Pledge stamped into their passports on arrival. Samoa requires a digital travel declaration. Palau charges a 100 USD Pristine Paradise Environmental Fee usually included in flight tickets or paid upon departure.'
  }
};