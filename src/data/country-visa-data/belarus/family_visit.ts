export default {
  country: 'belarus',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Belarus / Embassy of the Republic of Belarus in New Delhi',
  channels: [
    'Embassy of the Republic of Belarus in New Delhi (Consular Section)',
    'Honorary Consulates of Belarus in India'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '5 working days',
    expressSticker: '2 working days'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '€60 (~₹5,400 INR) for standard / €120 (~₹10,800 INR) for express',
    vfsServiceFee: '₹0 (Direct submission at the Embassy)'
  },
  eVisa: {
    available: false,
    portal: 'None (Belarus does not offer eVisa for Indian passport holders)',
    territorialScope: 'Not Applicable',
    validity: 'Not Applicable',
    maxStay: 'Not Applicable',
    invitationRequired: true,
    processing: 'Not Applicable'
  },
  stayDuration: {
    eVisa: 'Not Applicable',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within validity period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 90 days beyond intended departure date from Belarus, with at least 2 blank visa pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent color photographs on a light background, 35×45mm, meeting ICAO standards with 70–80% face coverage',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Fully completed and signed Belarusian visa application form (printed single or double-sided)',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'official_invitation',
      title: 'Official Belarusian Invitation (Original)',
      description: 'Original invitation issued by the Citizenship and Migration Department of the Ministry of Internal Affairs of Belarus (OGIM) or an official invitation form certified by a Belarusian notary',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Mandatory Travel Medical Insurance',
      description: 'Insurance policy from a Belarusian insurance company (Belegostrakh/Ingosstrakh) or an accredited foreign provider with a minimum coverage of €10,000, explicitly valid in Belarus',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Documents proving kinship with the host in Belarus (e.g., birth certificate, marriage certificate, notarized copy of host ID/residence permit)',
      icon: '👨‍👩‍👧',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Bank account statement covering the last 3 months showing sufficient funds (at least 2 base units (~€25-30) per day of stay)',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or travel tickets to and from Belarus',
      icon: '✈️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Official Invitation',
      description: 'Have host family member in Belarus obtain the official invitation letter through local Citizenship and Migration Department (OGIM).'
    },
    {
      step: 2,
      title: 'Prepare Application & Travel Insurance',
      description: 'Complete Belarusian visa application form and purchase mandatory medical insurance policy covering at least €10,000 in Belarus.'
    },
    {
      step: 3,
      title: 'Submit Dossier at Embassy',
      description: 'Submit completed dossier, original passport, and invitation at the Embassy of the Republic of Belarus in New Delhi.'
    },
    {
      step: 4,
      title: 'Pay Consular Fee',
      description: 'Pay the €60 standard (5 working days) or €120 express (2 working days) consular fee as instructed by the embassy.'
    },
    {
      step: 5,
      title: 'Collect Visa & Register Upon Arrival',
      description: 'Collect passport with sticker visa and register address with OGIM or online within 10 business days of arrival in Belarus.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Mandatory registration with the Department of Citizenship and Migration (OGIM) or online via portal.gov.by within 10 business days for stays exceeding 10 days in private accommodation. Valid travel insurance policy covering at least €10,000 must be presented at border control upon entry.'
  }
};