export default {
  country: 'latvia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Latvia / Embassy of Latvia in New Delhi',
  channels: [
    'https://epassport.mfa.gov.lv',
    'VFS Global Latvia Visa Application Centre',
    'Embassy of the Republic of Latvia in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR (~₹8,100)',
    vfsServiceFee: '₹2,020'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
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
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended date of departure from the Schengen area, containing at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a light white background, close-up of face (80% coverage), neutral facial expression, without glare or headgear.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Online application form filled and submitted via the official MFA Latvia Electronic Visa Application portal, printed and signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'pmlp_invitation',
      title: 'PMLP Official Approved Invitation',
      description: 'Official invitation number approved by the Office of Citizenship and Migration Affairs (PMLP) of the Ministry of Interior of the Republic of Latvia, provided by the host.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'proof_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official documents proving family tie to the host in Latvia (e.g., birth certificate, marriage certificate, or official family register document), duly legalized or apostilled.',
      icon: '👥',
      mandatory: true
    },
    {
      key: 'host_id',
      title: 'Host Identification & Residence Proof',
      description: 'Copy of the host\'s Latvian passport, Latvian national ID card, or valid Latvian residence permit.',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary showing travel dates and route in and out of the Schengen territory.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Written confirmation from the host stating accommodation details at their residential address, or confirmed hotel/lodging reservations if staying elsewhere.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Schengen-compliant health insurance policy with minimum coverage of €30,000 for emergency medical treatment, hospitalization, and repatriation, valid across all Schengen states.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Applicant)',
      description: 'Original stamped bank account statements for the last 6 months showing sufficient personal funds, along with Income Tax Returns (ITR-V) for the last 3 assessment years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'sponsorship_proof',
      title: 'Proof of Sponsorship (If Host Funds Trip)',
      description: 'Official sponsorship declaration registered with PMLP, along with the host’s bank statements for the last 3-6 months and proof of employment/income in Latvia.',
      icon: '💵',
      mandatory: false
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / Ties in India',
      description: 'No Objection Certificate (NOC) from employer with leave approval, pay slips for last 3 months, business registration for self-employed, or student enrollment certificate for students.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain PMLP Invitation Code',
      description: 'Your host in Latvia must request and obtain an officially approved invitation from the Office of Citizenship and Migration Affairs (PMLP) in Latvia.'
    },
    {
      step: 2,
      title: 'Complete Online Application Form',
      description: 'Fill out the electronic visa application form on the official MFA Latvia Electronic Visa Portal (epassport.mfa.gov.lv), submit it electronically, and print out the completed signed copy.'
    },
    {
      step: 3,
      title: 'Schedule VFS Appointment',
      description: 'Book an appointment online at the nearest VFS Global Latvia Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Prepare Required Documents',
      description: 'Gather all required supporting documents including proof of relationship, PMLP invitation details, travel insurance, financial records, and flight itinerary.'
    },
    {
      step: 5,
      title: 'Attend VFS Appointment & Submit Biometrics',
      description: 'Visit the VFS centre to submit your physical application, supporting documents, provide biometric data (fingerprints and photograph), and pay consular and service fees.'
    },
    {
      step: 6,
      title: 'Track Application & Receive Passport',
      description: 'Monitor application status online. Once processed (approx. 15 calendar days), collect your passport with the visa sticker from the VFS centre or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to the Schengen 90/180-day rule applies. An officially approved PMLP invitation number is mandatory for family visit applications before scheduling a visa appointment. Travel health insurance must cover all Schengen member states with minimum coverage of 30,000 EUR.'
  }
};