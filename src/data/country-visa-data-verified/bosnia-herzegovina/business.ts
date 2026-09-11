export default {
  country: 'bosnia-herzegovina',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs of Bosnia and Herzegovina / Embassy of Bosnia and Herzegovina in New Delhi',
  channels: [
    'Embassy of Bosnia and Herzegovina in New Delhi'
  ],
  processingTime: {
    eVisa: 'Not applicable (eVisa not available)',
    standardSticker: '10–15 working days',
    expressSticker: 'Not offered'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '60 EUR (~₹5,400 INR) for Short-Stay Visa C (Single or Multiple Entry)',
    vfsServiceFee: '₹0 (Direct submission at the Embassy in New Delhi)'
  },
  eVisa: {
    available: false,
    portal: 'None',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
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
      description: 'Original passport valid for at least 3 months beyond the intended departure date, containing at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent color passport photos (35×45mm) taken within the last 6 months on a light/white background.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Fully completed and hand-signed Visa Application Form of Bosnia and Herzegovina.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Certified Official Business Invitation',
      description: 'Original Letter of Invitation from the host company in Bosnia and Herzegovina, verified and certified by the local Field Office of the Service for Foreigners\' Affairs (Služba za poslove sa strancima).',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter from Indian Employer',
      description: 'Official letter from the applicant’s Indian company detailing position, purpose of visit, duration of stay, and commitment to cover expenses.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Reservation',
      description: 'Confirmed round-trip flight booking or full travel itinerary showing arrival and departure details.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservation or explicit mention of accommodation arrangement in the verified invitation letter.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Valid travel health insurance covering medical emergencies and repatriation with minimum coverage of 30,000 EUR for the entire duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Statements',
      description: 'Original bank statements for the last 6 months duly stamped by the bank, demonstrating sufficient funds to cover the stay.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) for the last 3 financial years.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Certified Business Invitation',
      description: 'Ensure host company in Bosnia and Herzegovina secures official verification of the invitation letter from the Service for Foreigners\' Affairs.'
    },
    {
      step: 2,
      title: 'Assemble Document Dossier',
      description: 'Gather passport, certified invitation, employer covering letter, insurance, financial statements, and application form.'
    },
    {
      step: 3,
      title: 'Submit Application to Embassy',
      description: 'Submit physical dossier and pay statutory consular fees (60 EUR) directly at the Embassy of Bosnia and Herzegovina in New Delhi.'
    },
    {
      step: 4,
      title: 'Collect Passport',
      description: 'Collect processed passport with entry sticker upon decision notification (typically 10–15 calendar days).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of valid multiple-entry Schengen visas, EU/Schengen residence permits, or valid multiple-entry visas/residence permits from USA, UK, or OECD member states may enter Bosnia and Herzegovina without a visa for up to 30 days (provided entry is direct from or via an EU/Schengen state).'
  }
};