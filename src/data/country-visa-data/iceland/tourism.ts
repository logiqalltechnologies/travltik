export default {
  country: 'iceland',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Directorate of Immigration (Útlendingastofnun) / Embassy of Iceland',
  channels: ['VFS Global', 'Embassy / Consulate'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-45 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '23 EUR'
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
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days within a 180-day period'
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
      description: 'Two recent passport-size photographs (35x45mm), taken within the last 6 months against a light white background, 70-80% face coverage, matte finish.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed and signed official Schengen Visa Application Form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary specifying entry and exit dates to/from the Schengen zone.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations, tour itinerary, or rental agreements covering the entire duration of stay in Iceland and other Schengen destinations.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel medical insurance policy covering at least €30,000 for emergency medical expenses, hospitalization, and repatriation across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 6 months stamped and signed by the bank, Income Tax Returns (ITR-V) for the last 3 years, and employment No Objection Certificate (NOC) / Leave Approval.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Verify eligibility for a short-stay Schengen Tourist Visa (Type C) for Indian passport holders.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Gather mandatory documents including passport, financial records (bank statements and ITR), travel insurance, hotel bookings, and flight itinerary.'
    },
    {
      step: 3,
      title: 'Submit and Pay Fee',
      description: 'Schedule an appointment at the VFS Global Iceland Visa Application Centre, submit biometrics, and pay the mandatory €90 consular fee plus service fees.'
    },
    {
      step: 4,
      title: 'Receive Clearance',
      description: 'Track application progress online and collect the passport with the stamped Schengen visa sticker upon approval.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies strictly. Passport must be valid for at least 3 months beyond the intended departure date from the Schengen area. Travel medical insurance minimum coverage of €30,000 is compulsory for entry.'
  }
};