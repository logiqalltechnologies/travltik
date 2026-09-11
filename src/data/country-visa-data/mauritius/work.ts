export default {
  country: 'mauritius',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Economic Development Board (EDB) Mauritius & Passport and Immigration Office (PIO)',
  channels: [
    'National E-Licensing System (NELS) Portal',
    'Embassy of the Republic of Mauritius, New Delhi',
    'Consulate General of the Republic of Mauritius, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'MUR 20,000',
    vfsServiceFee: 'N/A'
  },
  statutoryConsularFee: {
    amount: 20000,
    currency: 'MUR'
  },
  externalServiceProvider: 'Embassy direct (applications via NELS portal)',
  maximumPermittedStayDays: 3650,
  eVisa: {
    available: false,
    portal: 'https://nels.govmu.org/',
    territorialScope: 'Nationwide',
    validity: 'Up to 10 years (linked to contract)',
    maxStay: 'Co-terminus with employment contract',
    invitationRequired: true,
    processing: '30 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 10 years'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended period of stay in Mauritius, with at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months against a plain white background, showing a neutral facial expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Application Form for a Residence Permit (Form 5) and the Occupation Permit application form submitted via the NELS portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed one-way flight ticket to Mauritius (return ticket is not mandatory for valid work/occupation permit holders).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'A registered lease agreement in Mauritius or a formal letter from the employer confirming provision of suitable accommodation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'International medical insurance coverage valid for the initial transit and entry period until local Mauritian health coverage is activated by the employer.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: "Applicant's personal bank statements for the last 3 months to prove self-sufficiency during the initial relocation period, or an official undertaking of financial responsibility by the employer.",
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Contract of Employment',
      description: 'A signed contract of employment with a Mauritian entity specifying a monthly basic salary of at least MUR 60,000 (or MUR 30,000 for the ICT sector).',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Fitness Certificate',
      description: 'A comprehensive medical report including negative test results for HIV, Hepatitis B, Syphilis, and a clean Chest X-ray. Initial tests can be done in India but must be repeated in Mauritius at an accredited private clinic within 15 days of arrival.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'An official Police Clearance Certificate issued by the Passport Seva Kendra (Ministry of External Affairs, India) within 6 months of the application date.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'academic_credentials',
      title: 'Academic & Professional Qualifications',
      description: 'Certified copies of relevant university degrees, professional diplomas, and a detailed CV demonstrating competence for the designated job role.',
      icon: '🎓',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Employment Offer',
      description: 'Obtain a formal contract of employment from a registered company in Mauritius that meets the minimum salary threshold for an Occupation Permit (Professional).'
    },
    {
      step: 2,
      title: 'Online Application Submission',
      description: 'The employer or the applicant registers on the National E-Licensing System (NELS) portal and uploads all required documents, including academic credentials, CV, and the employment contract.'
    },
    {
      step: 3,
      title: 'Receive Approval-in-Principle',
      description: 'The Economic Development Board (EDB) reviews the application. Upon approval, an Approval-in-Principle (Provisional Entry Permit) is issued via email.'
    },
    {
      step: 4,
      title: 'Travel to Mauritius',
      description: 'Travel to Mauritius using the Approval-in-Principle letter, one-way flight ticket, and original documents for presentation at border control.'
    },
    {
      step: 5,
      title: 'Undergo Local Medical Examinations',
      description: 'Within 15 days of arrival in Mauritius, visit a local registered medical practitioner to undergo the mandatory medical tests (HIV, Hepatitis B, Syphilis, and Chest X-ray) and obtain a local medical certificate.'
    },
    {
      step: 6,
      title: 'Final Permit Issuance',
      description: 'Present the local medical certificate, original passport, and original qualification documents at the EDB/Passport and Immigration Office (PIO) in Port Louis to receive the physical Occupation Permit card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'A medical certificate issued by a registered Mauritian doctor is mandatory to finalize the permit within 15 days of arrival. Yellow Fever vaccination certificate is strictly required if arriving from or transiting through a Yellow Fever endemic country. The minimum monthly salary threshold for the Occupation Permit (Professional) is MUR 60,000, reduced to MUR 30,000 solely for professionals in the Information and Communication Technologies (ICT) sector.'
  }
};