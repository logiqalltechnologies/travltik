export default {
  country: 'usa',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'U.S. Department of State - Bureau of Consular Affairs',
  channels: [
    'Official CEAC Portal (https://ceac.state.gov/genniv/)',
    'US Visa Scheduling Portal (https://www.usvisascheduling.com/)',
    'U.S. Embassy & Consulates in India'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '3-5 working days (after interview approval; appointment wait times vary significantly)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '$205 USD (MRV Fee for H, L, O, P, Q, R visas)',
    vfsServiceFee: 'N/A (No mandatory service fee for standard collection at VAC; optional premium courier delivery available for ₹850 INR. Managed by VFS Global)'
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
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 3 years initially (based on Form I-797 approval validity, up to 1095 days)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity beyond the intended stay in the US and at least two blank pages for visa stamping.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (2x2 inches)',
      description: 'Two recent photographs taken within the last 6 months, white background, neutral expression. The US Embassy strictly requires 2x2 inches (51x51 mm) photos for physical submission and digital upload.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'DS-160 Confirmation Page',
      description: 'Printed confirmation page of the completed Online Nonimmigrant Visa Application (Form DS-160) containing the barcode.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'i797_approval',
      title: 'Form I-797 (Notice of Action)',
      description: 'The original or a highly legible copy of the Form I-797 petition approval notice issued by USCIS.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'i129_petition',
      title: 'Form I-129 Copy',
      description: 'A complete copy of the Form I-129 petition submitted to USCIS by your US employer.',
      icon: '📁',
      mandatory: true
    },
    {
      key: 'lca_document',
      title: 'Labor Condition Application (LCA)',
      description: 'A copy of the certified LCA from the US Department of Labor, detailing the wage and working conditions (primarily for H-1B).',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'employment_letter',
      title: 'Employment Offer Letter',
      description: 'Official letter from the US employer detailing your job title, salary, duties, and duration of employment.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'educational_docs',
      title: 'Educational Credentials',
      description: 'Original degree certificates, transcripts, and academic evaluation reports proving qualification for the specialty occupation.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'experience_letters',
      title: 'Professional Experience Proof',
      description: 'Experience letters from previous employers, relieving letters, and payslips from the last 3 months to prove work history.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'mrv_receipt',
      title: 'MRV Fee Payment Receipt',
      description: 'Proof of payment of the $205 USD non-refundable machine-readable visa (MRV) application fee.',
      icon: '💵',
      mandatory: true
    },
    {
      key: 'appointment_confirmation',
      title: 'Appointment Confirmation Letter',
      description: 'Printed confirmation of your scheduled appointments at the Visa Application Center (VAC) and the Consular Section.',
      icon: '📅',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Form DS-160',
      description: 'Fill out the Online Nonimmigrant Visa Application (DS-160) on the CEAC portal. Save your application ID and print the final confirmation page with the barcode.'
    },
    {
      step: 2,
      title: 'Create Profile and Pay MRV Fee',
      description: 'Register on the official US Visa Scheduling portal. Pay the $205 USD MRV fee using the available Indian payment options (NEFT, IMPS, or UPI).'
    },
    {
      step: 3,
      title: 'Schedule Appointments',
      description: 'Schedule two separate appointments: first, the Biometrics appointment at the Visa Application Center (VAC) managed by VFS Global, and second, the Consular Interview at the U.S. Embassy or Consulate.'
    },
    {
      step: 4,
      title: 'Attend VAC Biometrics Appointment',
      description: 'Visit the designated VAC for fingerprinting and digital photo capture. Bring your passport, DS-160 confirmation page, and appointment confirmation.'
    },
    {
      step: 5,
      title: 'Attend Consular Interview',
      description: 'Attend the physical interview at the U.S. Embassy or Consulate. Bring all mandatory documents, including the Form I-797, LCA, educational certificates, and employment letters. Be prepared to answer questions about your job role and qualifications.'
    },
    {
      step: 6,
      title: 'Passport Retrieval',
      description: 'If approved, your passport will be retained for visa stamping. You can track the status online and collect it from the designated premium delivery location or selected VAC within 3-5 working days.'
    }
  ],
  specialRequirements: {
    entry_rules: 'You must present your physical passport containing the valid visa sticker and the original Form I-797 (Notice of Action) to the CBP officer at the US Port of Entry. Applications are subject to administrative processing under Section 221(g) if additional security clearances or documents are required.'
  }
};