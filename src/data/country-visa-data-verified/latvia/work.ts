export default {
  country: 'latvia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Office of Citizenship and Migration Affairs (PMLP) / Embassy of the Republic of Latvia in New Delhi',
  channels: [
    'Latvian Official Electronic Visa Application System (EPV)',
    'VFS Global Visa Application Centre (India)',
    'Embassy of the Republic of Latvia in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '60 EUR',
    vfsServiceFee: 'INR 1,850'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 1 year (Type D National Visa)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended departure date from Latvia, issued within last 10 years, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a plain white background, neutral facial expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Latvian National Visa Application Form',
      description: 'Electronic application form completed via epv.mfa.gov.lv portal, printed, dated, and signed by the applicant.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'ocma_invitation',
      title: 'PMLP / OCMA Approved Work Invitation',
      description: 'Official invitation approved by the Office of Citizenship and Migration Affairs (PMLP) of Latvia, submitted and registered by the employer.',
      icon: 'file-check',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract / Work Agreement',
      description: 'Signed labor contract or binding draft contract from the Latvian employer detailing position, working hours, and gross salary.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'qualification_proof',
      title: 'Proof of Qualifications & Work Experience',
      description: 'Educational certificates, degrees, and professional experience documentation legalised/apostilled by Ministry of External Affairs (MEA) India.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original PCC issued by Regional Passport Office (RPO) India, legalised with an Apostille by MEA India, issued within the last 6 months.',
      icon: 'shield-check',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Lease agreement, host agreement, or formal letter from employer guaranteeing adequate residential accommodation in Latvia.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Long-Term Travel Medical Insurance',
      description: 'Valid travel medical insurance covering the full duration of initial stay in Schengen zone, minimum coverage €42,000 for emergency medical care and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Salary Statements',
      description: 'Personal bank statements for the last 3-6 months certified by bank, showing sufficient funds or wage proof meeting Latvian minimum monthly salary standards.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reservation of a round-trip or one-way ticket itinerary showing arrival plans in Latvia.',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Obtains PMLP Approval',
      description: 'The employer in Latvia registers a job vacancy and secures an approved invitation number from the Office of Citizenship and Migration Affairs (PMLP).'
    },
    {
      step: 2,
      title: 'Complete E-Visa Form & Prepare Dossier',
      description: 'Fill in the National Visa (Type D) electronic application form on the official MFA portal (epv.mfa.gov.lv), print it, and gather apostilled documents.'
    },
    {
      step: 3,
      title: 'Submit Application at VFS Global / Embassy',
      description: 'Book an appointment at the VFS Latvia Visa Application Centre in India, submit physical documents, pay consular and service fees, and submit biometrics.'
    },
    {
      step: 4,
      title: 'Receive Passport & Apply for Temporary Residence',
      description: 'Collect your passport with the Type D sticker visa, travel to Latvia, and finalize your Temporary Residence Permit (TRP) / Work Registration at PMLP.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All educational and police clearance documents issued in India must be legalised with an Apostille stamp by the Ministry of External Affairs (MEA), India. Long-stay Type D work visa applicants must apply for a Temporary Residence Permit or Work Registration upon arrival at the Office of Citizenship and Migration Affairs (PMLP) in Latvia.'
  }
};