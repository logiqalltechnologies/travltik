export default {
  country: 'uae',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) / General Directorate of Residency and Foreigners Affairs (GDRFA Dubai)',
  channels: [
    'https://smartservices.icp.gov.ae',
    'https://gdrfad.gov.ae',
    'Amer Centers (UAE) / VFS Global UAE Visa Processing Center'
  ],
  processingTime: {
    eVisa: '2-4 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'AED 350 - AED 750 (varies by 30, 60, or 90-day duration; refundable security deposit of AED 1,000 may apply depending on sponsor relationship)',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'AED 80 - AED 120 (if processed via third-party service centers / DVPC)'
  },
  eVisa: {
    available: true,
    portal: 'https://smartservices.icp.gov.ae',
    territorialScope: 'Nationwide',
    validity: '60 days from date of issue to enter country',
    maxStay: '30, 60, or 90 days from date of entry',
    invitationRequired: true,
    processing: '2-4 working days'
  },
  stayDuration: {
    eVisa: '30, 60, or 90 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport with a minimum validity of 6 months from the date of travel and at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent photograph (35x45mm) taken within the last 6 months against a white background, with a neutral expression and no glare or headwear unless religious.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Online Entry Permit Application Form',
      description: 'Electronic Entry Permit application completed online via ICP or GDRFA portal by the sponsoring UAE resident host.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking showing entry and exit from the UAE within the visa validity period.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation (Ejari / Tenancy Contract)',
      description: 'Valid Ejari (UAE Tenancy Contract) or official residential property title deed registered under the sponsor host’s name.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Valid travel health insurance coverage including emergency medical evacuation and treatment during the entire stay in the UAE.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Host Financial Proof & Salary Certificate',
      description: 'Host sponsor’s 3-month UAE bank statement and official salary certificate confirming minimum required income (minimum AED 4,000–10,000/month depending on degree of kinship).',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Attested Relationship Proof',
      description: 'Official birth certificate or marriage certificate establishing relationship to sponsor, legalised by the Ministry of External Affairs (MEA), India, and UAE Embassy/Consulate.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'host_residency_docs',
      title: 'Sponsor Identity & Residency Documents',
      description: 'Copies of the host relative’s valid UAE Residence Visa, Emirates ID (front and back), and Labour Contract/Salary Certificate.',
      icon: '🆔',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Document Legalisation in India',
      description: 'Attest Indian relationship proof documents (Marriage Certificate / Birth Certificate) through MEA India and the UAE Embassy in India.'
    },
    {
      step: 2,
      title: 'Application Submission by UAE Host',
      description: 'The UAE resident host initiates the Family Visit Visa (Entry Permit) application via ICP Smart Services portal or GDRFA Dubai portal (or at an Amer center).'
    },
    {
      step: 3,
      title: 'Upload Documents and Pay Fees',
      description: 'Upload applicant and sponsor documents, pay the official visa fee, and submit refundable security deposit if requested by immigration.'
    },
    {
      step: 4,
      title: 'Receive Electronic Entry Permit',
      description: 'Upon approval (typically within 2-4 working days), receive the PDF Entry Permit via email and send a copy to the traveler in India.'
    },
    {
      step: 5,
      title: 'Travel to the UAE',
      description: 'Travel to UAE carrying printed e-Visa entry permit, passport, confirmed return tickets, and travel insurance. Complete immigration stamping on arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The Family Visit Visa requires a UAE resident sponsor meeting minimum salary thresholds. Relationship certificates must be attested by MEA India and UAE Embassy. ECR passport holders traveling on a family visit permit must ensure airline "OK To Board" (OTB) clearance is completed if required by their airline.'
  }
};