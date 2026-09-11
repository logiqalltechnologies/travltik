export default {
  country: 'south-africa',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Department of Home Affairs, Republic of South Africa',
  channels: [
    'VFS Global South Africa Visa Application Centre',
    'High Commission of South Africa, New Delhi',
    'Consulate General of South Africa, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '40 working days (approx. 8 weeks)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '7200 INR',
    vfsServiceFee: '2301 INR'
  },
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
    stickerSingleDouble: 'Up to 5 years (depending on contract and visa sub-category)',
    stickerMultiple: 'Up to 5 years (depending on contract and visa sub-category)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 30 days after the intended date of departure from South Africa, containing at least 2 blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Two recent identical passport-size photographs (35x45mm) with a white background, neutral expression, taken within the last 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form DHA-1738',
      description: 'Form DHA-1738 (Application for Visa to Temporarily Reside in the Republic) completed and signed in black ink only.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract & Offer Letter',
      description: 'A contract of employment signed by both the employer and the applicant, detailing the conditions of employment, salary, benefits, and job description conforming to South African labor standards.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'medical_reports',
      title: 'Medical and Radiology Reports',
      description: 'A Medical Report (Form BI-811) completed by a registered medical practitioner, and a Radiology Report (Form BI-806) chest X-ray (exempt for pregnant women and children under 12) not older than 6 months.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'An original Police Clearance Certificate issued by the Regional Passport Office (RPO) in India, and from any other country where the applicant has resided for 12 months or longer since turning 18 years of age. Must be less than 6 months old.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3 consecutive months, certified by the bank, proving sufficient funds to cover initial living expenses before the first salary payment.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employer_undertaking',
      title: 'Employer Undertakings',
      description: 'Written undertaking by the South African employer accepting responsibility for the repatriation costs of the employee and their family members, if necessary, and ensuring the employee holds a valid passport at all times.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'A valid Yellow Fever vaccination certificate is mandatory ONLY if the applicant has traveled through or transited a yellow fever endemic country in Africa or South America.',
      icon: '💉',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Determine Visa Sub-Category',
      description: 'Identify the correct work visa category: General Work Visa (requires Department of Employment and Labour certificate), Critical Skills Work Visa (requires SAQA evaluation and professional body registration), or Intra-Company Transfer (ICT) Work Visa.'
    },
    {
      step: 2,
      title: 'Obtain Medical and Police Clearances',
      description: 'Schedule a medical checkup to complete Form BI-811 and a chest X-ray for Form BI-806. Apply for a Police Clearance Certificate (PCC) from the Regional Passport Office (RPO).'
    },
    {
      step: 3,
      title: 'Prepare the Application Dossier',
      description: 'Complete the DHA-1738 application form in black ink. Gather all supporting documents, including the signed employment contract, qualifications evaluated by SAQA (if applicable), and employer undertakings.'
    },
    {
      step: 4,
      title: 'Book an Appointment at VFS Global',
      description: 'Schedule an appointment online to submit your physical application at the nearest VFS Global South Africa Visa Application Centre in India.'
    },
    {
      step: 5,
      title: 'Submit Application and Enroll Biometrics',
      description: 'Attend your appointment at VFS. Submit your physical application, passport, and documents. Pay the consular visa fee and the VFS service fee. Enroll your biometric data.'
    },
    {
      step: 6,
      title: 'Track and Collect Passport',
      description: 'Track your application status online. Once processed, collect your passport containing the physical work visa sticker from the VFS center or opt for courier delivery.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All applicants for stays exceeding 90 days must submit a Medical Report (BI-811) and a Radiology Report (BI-806). A Yellow Fever vaccination certificate is strictly required if entering South Africa from or transiting through a yellow fever endemic country. Minors under 18 must present an Unabridged Birth Certificate showing details of both parents.'
  }
};