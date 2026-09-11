export default {
  country: 'taiwan',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Taipei Economic and Cultural Center (TECC) in India',
  channels: ['https://www.roc-taiwan.org/in_en/index.html', 'Embassy Direct'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 working days', // Official processing time for regular service
    expressSticker: '2 working days' // Official processing time for urgent service
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 5,200', // Fee for Resident Visa (Single Entry) - Verified
    vfsServiceFee: 'N/A' // TECC handles applications directly, no VFS/BLS service fee - Verified
  },
  eVisa: {
    available: false, // eVisa not available for work purposes for Indian citizens - Verified
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (for initial entry, extendable to Alien Resident Certificate)', // Resident Visa allows entry to apply for ARC - Verified
    stickerMultiple: 'N/A (Resident Visa is typically single entry for initial use)'
  },
  entryType: 'Single Entry (for initial Resident Visa)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended stay, with at least two blank pages for visa stamping. Include copies of all relevant pages (bio-data, previous visas, entry/exit stamps).',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within 6 months) passport-sized (3.5 x 4.5 cm) color photographs with a white background. Photos must show a neutral expression, clear facial features, and no head covering (unless for religious reasons).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed and signed online visa application form. The form must be filled out on the official TECO/TECC portal, printed, and signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Work Permit / Approval Letter',
      description: 'Original and copy of the work permit or approval letter issued by the Ministry of Labor (MOL) or Ministry of Economic Affairs (MOEA) of Taiwan. This is a prerequisite for applying for a work visa.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Original and copy of the employment contract signed by both the applicant and the Taiwanese employer, detailing terms of employment, salary, and duration.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'educational_certs',
      title: 'Educational Certificates & Professional Qualifications',
      description: 'Original and copies of highest educational certificates and professional qualifications relevant to the job. These documents must be attested by the Ministry of External Affairs (MEA) in India and subsequently by the Taipei Economic and Cultural Center (TECC) in India.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'resume',
      title: 'Curriculum Vitae (CV) / Resume',
      description: 'A detailed and updated resume outlining educational background, work experience, and professional skills.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'A health certificate issued by a hospital designated by the Taiwan Centers for Disease Control (CDC) or a local public hospital, within 3 months of the application date. It must include an HIV test result, chest X-ray, and stool examination for parasites, as required for stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original Police Clearance Certificate issued by local police authorities in India, attested by the Ministry of External Affairs (MEA) and then by the Taipei Economic and Cultural Center (TECC) in India.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed one-way flight itinerary to Taiwan. A return ticket is generally not required for work visas as the intention is long-term stay.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of initial accommodation in Taiwan (e.g., hotel booking for the first few days, or a letter from the employer stating temporary housing arrangements).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Travel insurance covering the initial period of stay in Taiwan until local health insurance or Alien Resident Certificate (ARC) is obtained. Minimum coverage of USD 30,000 for medical emergencies and repatriation is recommended.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3-6 months showing sufficient funds to support initial expenses, along with a letter from the Taiwanese employer guaranteeing financial support and salary.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'company_registration',
      title: 'Taiwanese Company Registration',
      description: 'Copy of the Taiwanese employer\'s business registration certificate.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Letter of Appointment / Invitation',
      description: 'Official letter of appointment or invitation from the Taiwanese employer, addressed to the TECC, confirming the employment and inviting the applicant.',
      icon: '✉️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Work Permit',
      description: 'The Taiwanese employer must first apply for and secure a work permit or approval letter for the applicant from the Ministry of Labor (MOL) or Ministry of Economic Affairs (MOEA) in Taiwan.'
    },
    {
      step: 2,
      title: 'Gather Documents & Attestations',
      description: 'Collect all required documents, including educational certificates and Police Clearance Certificate (PCC). Ensure all necessary documents are attested by the Ministry of External Affairs (MEA) in India and then by the Taipei Economic and Cultural Center (TECC) in India.'
    },
    {
      step: 3,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form online via the official TECO/TECC portal. Print the completed form and sign it.'
    },
    {
      step: 4,
      title: 'Schedule Appointment & Submit Application',
      description: 'Schedule an appointment at the nearest Taipei Economic and Cultural Center (TECC) in India. Submit the complete set of original documents along with copies and the printed application form. Pay the visa application fee.'
    },
    {
      step: 5,
      title: 'Visa Processing & Collection',
      description: 'The TECC will process the application. Once approved, collect your passport with the Resident Visa stamp from the TECC. Processing times vary based on standard or express service.'
    },
    {
      step: 6,
      title: 'Enter Taiwan & Apply for ARC',
      description: 'Upon entering Taiwan with the Resident Visa, you must apply for an Alien Resident Certificate (ARC) at the local National Immigration Agency (NIA) service center within 15 days of your arrival. The ARC will allow for longer stays and multiple entries/exits.'
    }
  ],
  specialRequirements: {
    entry_rules: 'A valid work permit from the Taiwanese Ministry of Labor (MOL) or Ministry of Economic Affairs (MOEA) is a mandatory prerequisite for applying for this visa. Upon arrival in Taiwan, holders of a Resident Visa must apply for an Alien Resident Certificate (ARC) within 15 days to legalize their long-term stay and obtain multiple entry privileges.'
  }
};