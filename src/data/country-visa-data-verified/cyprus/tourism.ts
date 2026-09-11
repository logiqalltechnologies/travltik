export default {
  country: 'cyprus',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'High Commission of the Republic of Cyprus in New Delhi',
  channels: ['VFS Global', 'High Commission of the Republic of Cyprus'],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '10-15 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: 'EUR 80 (approx. INR 7,200)', 
    vfsServiceFee: 'INR 1,850' 
  },
  eVisa: { 
    available: false, 
    portal: 'N/A', 
    territorialScope: 'Republic of Cyprus (Government-controlled areas)', 
    validity: 'N/A', 
    maxStay: 'N/A', 
    invitationRequired: false, 
    processing: 'N/A' 
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
      description: 'Original passport valid for at least 3 months beyond the intended departure date from Cyprus, issued within the last 10 years, with at least 2 blank pages.', 
      icon: 'passport', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months against a plain white background, sharp focus, showing 70-80% face.', 
      icon: 'photo', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Application Form', 
      description: 'Duly completed and signed official Cyprus Visa Application Form (signed by both parents if applicant is a minor).', 
      icon: 'form', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Confirmed round-trip flight booking detailing entry and exit from Larnaca or Paphos airports.', 
      icon: 'flight', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Confirmed hotel reservation detailing applicant name, stay duration, and contact info, OR official Assumption of Responsibility form signed by host in Cyprus.', 
      icon: 'hotel', 
      mandatory: true 
    },
    { 
      key: 'travel_insurance', 
      title: 'Travel Insurance', 
      description: 'Medical insurance covering emergency medical expenses and repatriation with a minimum coverage of EUR 30,000 valid for the full stay.', 
      icon: 'insurance', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Financial Proof', 
      description: 'Original bank account statements for the past 6 months certified/stamped by the bank, recent ITR-V for the last 2-3 years, and NOC/employment cover letter from employer.', 
      icon: 'bank', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Check Visa Eligibility', 
      description: 'Confirm requirement for a Category C short-stay national sticker visa. Note: Valid double/multiple-entry Schengen visa holders may enter Cyprus directly without a national visa.' 
    },
    { 
      step: 2, 
      title: 'Prepare Documentation', 
      description: 'Assemble all required physical documents including stamped bank statements, ITR, employment NOC, travel insurance, and hotel/flight proofs.' 
    },
    { 
      step: 3, 
      title: 'Submit and Pay Fee', 
      description: 'Book an appointment at the designated VFS Global Cyprus Application Centre, submit physical dossier, provide biometrics if requested, and pay statutory fees.' 
    },
    { 
      step: 4, 
      title: 'Receive Clearance', 
      description: 'Track the application status online and collect the passport with entry visa sticker upon processing completion by the High Commission.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'Holders of valid double or multiple-entry Schengen visas or residence permits do not require a separate Cyprus visa, provided the Schengen visa remains valid for the duration of stay. Entry must strictly be through legal ports of entry (Larnaca and Paphos Airports, or Limassol, Larnaca, Paphos ports).' 
  }
};