export default {
  country: 'kuwait',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Interior (MOI) - State of Kuwait / Embassy of the State of Kuwait, New Delhi',
  channels: [
    'Kuwait MOI Portal / Sahel App (Initiated by Sponsor in Kuwait)',
    'VFS Global Kuwait Visa Application Center (India)',
    'Embassy of the State of Kuwait, New Delhi / Consulate General, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 to 7 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'KWD 3 (Approx. INR 820 paid in Kuwait) + INR 1,250 Embassy Stamping Fee',
    vfsServiceFee: 'INR 1,680'
  },
  eVisa: {
    available: false,
    portal: 'https://moi.gov.kw',
    territorialScope: 'Nationwide',
    validity: '90 days to enter Kuwait',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '3-5 working days (Sponsor approval phase in Kuwait)'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '30 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport with at least 6 months validity beyond the date of intended entry into Kuwait and at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized photos (35x45mm), taken within 6 months on a plain white background, neutral facial expression, 80% face coverage, no headgear unless religious.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Kuwait Visa Application Form',
      description: 'Duly completed and signed Kuwait visa endorsement/stamping application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'visit_approval',
      title: 'Kuwait MOI Family Visit Visa Permit',
      description: 'Original or official copy of the Family Visit Visa issued by the Ministry of Interior (Residency Affairs Department) in Kuwait obtained by the sponsor.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'sponsor_documents',
      title: 'Sponsor Civil ID & Salary Certificate',
      description: 'Copy of sponsor’s valid Kuwait Civil ID, work permit (Iznh Amal), and official salary certificate confirming minimum required monthly salary (minimum KWD 400 for first-degree relatives / KWD 800 for second-degree as per MOI regulations).',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Attested Relationship Proof',
      description: 'Apostilled/attested document proving kinship (Marriage Certificate for spouse, Birth Certificate for children/parents), fully attested by Ministry of External Affairs (MEA) India and Embassy of Kuwait.',
      icon: '💍',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Confirmed Flight Itinerary',
      description: 'Confirmed round-trip air ticket. Under Kuwait MOI visit visa regulations, travel must be booked on Kuwait national carriers (Kuwait Airways or Jazeera Airways).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of residential address in Kuwait where the visitor will reside (Sponsor’s tenancy contract / rental agreement or hotel booking).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Travel & Medical Insurance',
      description: 'Valid travel health insurance policy covering emergency medical treatments and repatriation in Kuwait for the entire stay duration.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Sponsor Financial Proof',
      description: 'Last 3 to 6 months bank statements of the Kuwait sponsor showing sufficient funds to cover the visitor during their stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Sponsor File Application in Kuwait',
      description: 'The sponsor (resident in Kuwait) applies for the Family Visit Entry Permit at the Ministry of Interior General Department of Residency Affairs or via the Sahel App / MOI Portal, submitting salary proof and attested kinship documents.'
    },
    {
      step: 2,
      title: 'Receive Approved Visit Permit',
      description: 'Once approved, the MOI issues the official Family Visit Entry Visa. The sponsor sends a copy of the issued permit to the applicant in India.'
    },
    {
      step: 3,
      title: 'Prepare Document Package in India',
      description: 'Gather original Indian passport, 35x45mm white background photos, attested relationship certificates, visit permit copy, and flight tickets.'
    },
    {
      step: 4,
      title: 'Submit Passport for Stamping',
      description: 'Submit the physical passport and required documentation at a designated VFS Global Kuwait Visa Application Centre or authorised agent for embassy visa stamping.'
    },
    {
      step: 5,
      title: 'Passport Collection & Travel',
      description: 'Collect the stamped passport from the application center and enter Kuwait within 90 days from the visit permit issue date.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Sponsors must meet strict MOI monthly salary thresholds (typically KWD 400 for first-degree relatives, KWD 800 for second-degree). Visitors on Family Visit Visas must travel via Kuwait national carriers (Kuwait Airways or Jazeera Airways) as mandated by current regulations. Overstaying incurs severe fines of KWD 10/day and potential deportation.'
  }
};