export default {
  country: 'bosnia-herzegovina',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of Bosnia and Herzegovina / Embassy of Bosnia and Herzegovina, New Delhi',
  channels: [
    'Embassy of Bosnia and Herzegovina, New Delhi',
    'Consular Section, Embassy of Bosnia and Herzegovina'
  ],
  processingTime: {
    eVisa: 'N/A (No eVisa facility)',
    standardSticker: '10–15 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€60',
    vfsServiceFee: '₹0 (Direct embassy submission)'
  },
  statutoryConsularFee: '€60',
  externalServiceProvider: 'Embassy direct',
  maxStayDays: 90,
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
    stickerSingleDouble: 'Up to 30 days',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended departure date from Bosnia and Herzegovina, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent passport-size photos (35×45mm) taken within the last 6 months against a plain white background, showing 80% face visibility.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed and hand-signed visa application form (Visa C).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry into and exit from Bosnia and Herzegovina.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation / Tourist Voucher',
      description: 'Original tourist voucher issued by a registered travel agency in Bosnia and Herzegovina, or confirmed hotel booking covering entire stay duration.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering emergency medical treatment and repatriation with minimum coverage of €30,000.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Certified bank statements for the last 6 months showing sufficient balance (minimum €50 per day of stay), along with Income Tax Returns (ITR) for the past 2–3 years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'noc_letter',
      title: 'No Objection Certificate (NOC)',
      description: 'NOC from employer (for employed individuals) or company registration proof with leave sanction letter, or student ID/NOC for students.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Tourist Voucher or Hotel Confirmation',
      description: 'Secure an official tourist voucher from a certified travel agency in Bosnia and Herzegovina or confirmed hotel booking for your travel dates.'
    },
    {
      step: 2,
      title: 'Prepare Application Dossier',
      description: 'Download the application form from the official website, fill it completely, and organize all supporting documents including bank statements, insurance, and photo.'
    },
    {
      step: 3,
      title: 'Submit Application to Embassy',
      description: 'Submit your completed application form along with original documents and passport at the Embassy of Bosnia and Herzegovina in New Delhi.'
    },
    {
      step: 4,
      title: 'Pay Statutory Consular Fee',
      description: 'Pay the non-refundable consular fee of €60 as instructed by the Embassy during application submission.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'Upon processing completion (10–15 working days), collect your stamped passport directly from the Embassy or designated delivery service.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Visa Exemption Exemption Rule: Holders of valid multiple-entry Schengen visas, valid visas or residence permits of EU/EEA member states, US, or UK can enter, stay, and transit through Bosnia and Herzegovina visa-free for up to 30 days per entry (provided entry is made directly or through a Schengen country).'
  }
};