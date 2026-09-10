export default {
  country: 'bosnia-herzegovina',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Bosnia and Herzegovina in New Delhi / Ministry of Foreign Affairs of Bosnia and Herzegovina',
  channels: [
    'Embassy of Bosnia and Herzegovina in New Delhi'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '10-15 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '€31 (~₹2,800) for Single Entry / €57 (~₹5,150) for Multiple Entry',
    vfsServiceFee: '₹0 (Direct submission at Embassy)'
  },
  eVisa: {
    available: false,
    portal: 'Not Applicable',
    territorialScope: 'Not Applicable',
    validity: 'Not Applicable',
    maxStay: 'Not Applicable',
    invitationRequired: false,
    processing: 'Not Applicable'
  },
  stayDuration: {
    eVisa: 'Not Applicable',
    stickerSingleDouble: 'Up to 90 days within 180 days',
    stickerMultiple: 'Up to 90 days within 180 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date, with at least 2 blank visa pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent passport-size photographs (35×45mm), taken within the last 6 months against a white background',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Duly completed and signed Bosnia and Herzegovina visa application form',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Letter of Guarantee (Jamstveno pismo)',
      description: 'Original Guarantee Letter issued by the host family member in Bosnia and Herzegovina, verified and stamped by the competent Field Office of the Service for Foreigners Affairs (Služba za poslove sa strancima)',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official relationship proof (e.g., birth certificate, marriage certificate, or family register entry) duly legalized/certified',
      icon: '👨‍👩‍👧',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary specifying entry and exit dates',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Included in the certified Letter of Guarantee specifying host residence address, or separate accommodation booking',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Valid travel insurance policy providing coverage of at least €30,000 for emergency medical treatment and repatriation across Bosnia and Herzegovina',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & ITR',
      description: 'Original bank statements for the last 6 months signed and stamped by the bank showing sufficient funds (min BAM 150/day or host sponsorship guarantee), plus Income Tax Returns (ITR-V) for the last 2 years',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'noc',
      title: 'No Objection Certificate (NOC)',
      description: 'NOC from employer or institution confirming leave approval and position, or business registration documents if self-employed',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Verified Guarantee Letter',
      description: 'Host in Bosnia and Herzegovina must obtain and verify the official Letter of Guarantee (Jamstveno pismo) from the Service for Foreigners Affairs field office and dispatch the original to the applicant in India.'
    },
    {
      step: 2,
      title: 'Assemble Application Dossier',
      description: 'Complete the visa application form and compile all mandatory documents including relationship proof, bank statements, insurance, and travel itinerary.'
    },
    {
      step: 3,
      title: 'Submit at the Embassy',
      description: 'Schedule an appointment and personally submit the original application dossier and passport at the Embassy of Bosnia and Herzegovina in New Delhi.'
    },
    {
      step: 4,
      title: 'Pay Consular Fee & Collection',
      description: 'Pay the applicable consular visa fee as instructed by the Embassy and collect the passport with the visa sticker upon processing completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of valid multiple-entry Schengen visas, EU member state visas/residence permits, US visas, or UK visas are exempt from visa requirements for stays up to 30 days per entry within 180 days, provided they arrive directly from or transit through EU/Schengen/US/UK territories. For all other Indian passport holders traveling for family visits, an original verified Jamstveno pismo certified by the Service for Foreigners Affairs of BiH is mandatory.'
  }
};