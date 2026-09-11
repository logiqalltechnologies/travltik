export default {
  country: 'bulgaria',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Bulgaria / Embassy of the Republic of Bulgaria in New Delhi',
  channels: [
    'VFS Global Bulgaria Visa Application Centre (India)',
    'Embassy of the Republic of Bulgaria, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A (eVisa not available for tourist short stay)',
    standardSticker: '15 to 45 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€90 (~₹8,100 INR)',
    vfsServiceFee: '₹1,680 INR (inclusive of GST)'
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
      description: 'Must be issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent (taken within last 6 months) color photos, 35×45mm, sharp focus, white background, 70-80% face coverage, without headgear except religious reasons.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly filled in English and signed by the applicant in all required places.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing return travel dates and complete flight path.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations covering the entire duration of stay across Bulgaria and any other Schengen states.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Valid Schengen travel medical insurance covering emergency medical care and repatriation with minimum coverage of €30,000 for the full duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements)',
      description: 'Original official bank statements for the last 3 to 6 months stamped and signed by the bank, demonstrating adequate liquid funds (minimum €50 per day of stay, but not less than €500 total).',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'itr_documents',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Return (ITR-V) acknowledgments for the last 2 to 3 financial years or Form 16.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Personal Cover Letter',
      description: 'Detailed travel itinerary explaining the purpose of the trip, dates of stay, travel plan, and confirmation of financial responsibility.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / Occupation',
      description: 'NOC from employer detailing approved leaves and salary slips for the last 3 months. For self-employed: business registration certificate and company bank statements.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Book VFS Appointment',
      description: 'Schedule a visa appointment at the nearest VFS Global Bulgaria Visa Application Centre in India.'
    },
    {
      step: 2,
      title: 'Prepare Application Dossier',
      description: 'Fill out the Schengen visa application form and compile all mandatory supporting financial, travel, and personal documents.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics',
      description: 'Attend the appointment at VFS Global, submit physical documents, pay the visa and service fees, and complete biometric data collection (fingerprints and photo).'
    },
    {
      step: 4,
      title: 'Consular Processing & Passport Retrieval',
      description: 'Track the application online as it is processed by the Bulgarian Embassy in New Delhi, then collect the passport or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Bulgaria joined the Schengen Area on March 31, 2024. Short-stay visas issued by Bulgaria are standard Schengen (Type C) visas allowing travel throughout the Schengen area for up to 90 days in any 180-day period. Valid multiple-entry Schengen visas or valid Schengen residence permits also allow entry without a separate Bulgarian visa. First-time Schengen applicants must present biometrics in person.'
  }
};