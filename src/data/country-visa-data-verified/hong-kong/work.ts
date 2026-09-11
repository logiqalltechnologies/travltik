export default {
  country: 'hong-kong',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Immigration Department of the Government of the Hong Kong Special Administrative Region',
  channels: [
    'https://www.immd.gov.hk/eng/services/visas/guide_to_entry_for_employment.html',
    'Online Application via ImmD Portal',
    'Submission via Post to Hong Kong Immigration Department',
    'Submission via Local Sponsor in Hong Kong',
    'Submission via Chinese Embassy/Consulate in India'
  ],
  processingTime: {
    eVisa: '20 working days',
    standardSticker: '20 working days', // Official source states "It normally takes four weeks"
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'HK$230', // Fee for a single journey visa/entry permit, same as sticker
    stickerConsularStandard: 'HK$230', // Fee for a single journey visa/entry permit
    vfsServiceFee: 'N/A' // Applications are typically handled directly by ImmD or Chinese missions, without a separate VFS fee.
  },
  eVisa: {
    available: true,
    portal: 'https://www.immd.gov.hk/eng/online-services/visas/online-application-for-visa-entry-permit.html',
    territorialScope: 'N/A',
    validity: '3 months from date of issue for entry', // Typical validity for entry permit to enter HK
    maxStay: 'Duration tied to employment contract (typically 12-24 months initially)',
    invitationRequired: true, // An employment contract/sponsor is mandatory for a work visa
    processing: '20 working days'
  },
  stayDuration: {
    eVisa: 'Duration tied to employment contract (typically 12-24 months initially)',
    stickerSingleDouble: 'Duration tied to employment contract (typically 12-24 months initially)',
    stickerMultiple: 'N/A' // Initial work visas are generally single entry, extendable upon renewal.
  },
  entryType: 'Single Entry', // For the initial grant of the work visa.
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least six months beyond the intended stay, with at least two blank pages. Photocopies of personal particulars page and any previous Hong Kong visas/entry permits.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized photographs (taken within the last 6 months), with a white background, clear facial features, and neutral expression. Dimensions: 35mm wide by 45mm high.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Forms',
      description: 'Completed and signed Application Form ID(E) 990A (for the applicant) and Form ID(E) 990B (for the sponsor/employer). Forms are available on the Immigration Department website. For online applications, these forms are typically filled out digitally within the portal or uploaded.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Original and photocopy of the signed employment contract or letter of appointment from the Hong Kong employer, detailing position, salary, benefits, and duration of employment.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'academic_qualifications',
      title: 'Academic & Professional Qualifications',
      description: 'Photocopies of all relevant academic qualifications (e.g., degree certificates, diplomas) and professional qualifications (e.g., licenses, certifications) relevant to the proposed employment.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'work_experience',
      title: 'Proof of Work Experience',
      description: 'Photocopies of previous employment certificates, reference letters, or testimonials from former employers, detailing job duties and duration. A comprehensive resume/CV is also required.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'sponsor_documents',
      title: 'Sponsor\'s Company Documents',
      description: 'Documents from the Hong Kong employer (sponsor), including: Business Registration Certificate, financial statements (e.g., audit report, profit and loss account), details of the company\'s business activities, and justification for hiring an overseas professional (e.g., proof of local recruitment efforts).',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'proof_of_remuneration',
      title: 'Proof of Remuneration and Financial Standing',
      description: 'Documents detailing the proposed remuneration package (as per employment contract) and evidence of the sponsor\'s financial capability to support the employment (often covered by sponsor\'s company documents).',
      icon: '💰',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate (including HIV test)',
      description: 'A medical examination report, including an HIV test, is required for all applicants intending to stay in Hong Kong for more than 90 days (as per universal rule for work/student visas).',
      icon: '🩺',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all personal documents, academic and professional qualifications, and proofs of work experience as specified by the Hong Kong Immigration Department. Prepare scanned copies for online submission or physical copies for postal/in-person submission.'
    },
    {
      step: 2,
      title: 'Employer Prepares Sponsor Documents',
      description: 'Your prospective employer in Hong Kong must prepare all necessary company documents, the detailed job offer, and a justification for hiring an overseas professional.'
    },
    {
      step: 3,
      title: 'Complete Application Forms',
      description: 'Accurately fill out Application Form ID(E) 990A (for yourself) and ensure your employer completes Form ID(E) 990B (for the sponsor). Both forms must be signed. For online applications, these details will be entered directly into the portal or forms uploaded.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'The completed forms and all supporting documents can be submitted online via the ImmD portal, by post directly to the Hong Kong Immigration Department, in person by your sponsor in Hong Kong, or through the nearest Chinese diplomatic and consular mission in India.'
    },
    {
      step: 5,
      title: 'Application Processing',
      description: 'The Immigration Department will review your application. They may contact you or your sponsor for additional documents or an interview if required.'
    },
    {
      step: 6,
      title: 'Visa Approval & Collection',
      description: 'If your application is approved, an entry permit/visa label (e-Visa) will be issued. This will typically be sent to the applicant electronically or to the sponsor, to be printed and affixed in your passport, or presented digitally upon arrival.'
    },
    {
      step: 7,
      title: 'Travel to Hong Kong',
      description: 'Upon receiving the e-Visa, print it out or save it digitally. Travel to Hong Kong within its validity period. Present your passport and e-Visa upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The applicant must possess special skills, knowledge, or experience of value to and not readily available in Hong Kong. The employer must demonstrate they cannot readily fill the position locally. An HIV test is required for all applicants intending to stay in Hong Kong for more than 90 days.'
  }
};