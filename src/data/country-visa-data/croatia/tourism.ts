export default {
  country: 'croatia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign and European Affairs of the Republic of Croatia / Embassy of the Republic of Croatia, New Delhi',
  channels: ['VFS Global Visa Application Centre', 'Embassy of the Republic of Croatia, New Delhi'],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '15-45 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: '90 EUR', 
    vfsServiceFee: '28.30 EUR' 
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
      description: 'Two recent (taken within the last 6 months) color passport photographs, 35x45mm size, against a neutral white background, showing 70-80% face coverage.', 
      icon: 'photo', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Schengen Visa Application Form', 
      description: 'Duly completed and signed Schengen visa application form (printed from the official Croatian visa portal or VFS platform).', 
      icon: 'form', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary indicating flight numbers and clear dates of entry and exit from the Schengen area.', 
      icon: 'flight', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Confirmed hotel reservations for the full duration of stay in Croatia/Schengen area, or official Letter of Guarantee endorsed by Croatian authorities if hosted by a private individual.', 
      icon: 'hotel', 
      mandatory: true 
    },
    { 
      key: 'travel_insurance', 
      title: 'Schengen Travel Medical Insurance', 
      description: 'Valid travel medical insurance covering all Schengen states with a minimum coverage of €30,000 for emergency medical expenses, hospitalization, and repatriation.', 
      icon: 'insurance', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Financial Proof', 
      description: 'Original bank statements for the past 6 months certified by the bank showing adequate balance (minimum €70/day, or €30/day if accommodation is prepaid), along with Income Tax Returns (ITR-V) for the last 2-3 years, cover letter, and proof of employment/NOC.', 
      icon: 'bank', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Check Visa Requirements', 
      description: 'Verify Schengen Short-Stay Visa eligibility criteria and assemble required documentation for Croatia.' 
    },
    { 
      step: 2, 
      title: 'Prepare Application & Dossier', 
      description: 'Complete the official Croatian Schengen application form and gather all mandatory financial, travel, and accommodation proofs.' 
    },
    { 
      step: 3, 
      title: 'Submit Application & Biometrics', 
      description: 'Attend your scheduled appointment at the VFS Global center, submit physical documents, provide biometric data, and pay required consular and service fees.' 
    },
    { 
      step: 4, 
      title: 'Track Dossier & Receive Visa', 
      description: 'Track processing status online via VFS tracking tool and retrieve your passport with the Schengen sticker upon decision.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'Croatia is fully integrated into the Schengen Area as of January 1, 2023. Standard Schengen 90/180-day limitation applies. Indian passport holders with valid multi-entry Schengen visas granted by other member states may enter Croatia directly without a separate national visa, subject to remaining permitted days.' 
  }
};