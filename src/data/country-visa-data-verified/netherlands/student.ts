export default {
  country: 'netherlands',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Immigration and Naturalisation Service (IND), Ministry of Justice and Security, Netherlands',
  channels: [
    'https://ind.nl/en/residence-permits/study',
    'VFS Global Service Center',
    'Embassy of the Kingdom of the Netherlands, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '228 EUR',
    vfsServiceFee: '30 EUR'
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
    stickerMultiple: 'Duration of study program (up to 5 years, linked to the Residence Permit)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended stay, containing at least 2 blank pages. Must not be older than 10 years.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs taken within the last 6 months, with a white background, neutral facial expression, and meeting strict Dutch visa photo specifications.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'MVV Issue Form',
      description: 'Completed and signed MVV (Machtiging tot Voorlopig Verblijf) application form, filled out in English.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Letter of Acceptance',
      description: 'Unconditional admission letter from a recognized Dutch higher education institution (recognized sponsor) confirming enrollment in a full-time study program.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Means',
      description: 'Evidence of sufficient financial resources to cover living expenses (minimum IND norm of €1,071.14 per month or €12,853.68 per year for 2025) and tuition fees. Accepted proofs include: a blocked bank account in the Netherlands, an official education loan sanction letter, a scholarship award letter, or a bank statement from a personal account.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'antecedents_certificate',
      title: 'Antecedents Certificate',
      description: 'A completed and signed Appendix Antecedents Certificate (declaration of clean criminal record), which is a mandatory part of the IND application process.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'tb_test_intent',
      title: 'Tuberculosis Test Declaration',
      description: 'A signed Appendix TB Test Referral Form. Indian citizens staying in the Netherlands for more than 3 months are required to undergo a tuberculosis (TB) test at a local public health service (GGD) in the Netherlands within 3 months of arrival.',
      icon: '🩻',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Medical insurance policy covering at least €30,000 for emergency medical expenses and repatriation, valid from the date of entry into the Schengen area until the student registers for Dutch public healthcare.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Admission and University Sponsorship',
      description: 'Apply to and secure admission at a recognized Dutch educational institution. The university acts as your official visa sponsor and will initiate the MVV (entry visa) and VVR (residence permit) application directly with the IND in the Netherlands.'
    },
    {
      step: 2,
      title: 'Submit Documents and Pay Fees to the University',
      description: 'Provide all required documents (financial proof, passport copy, antecedents certificate) to your university. Pay the IND visa application fee of €228 and any tuition fees required by the university.'
    },
    {
      step: 3,
      title: 'Await IND Approval',
      description: 'The university submits the application to the IND. The IND processes the application and sends a positive decision notification to the university and the designated Dutch Embassy/Consulate in India. This typically takes 10 to 20 working days.'
    },
    {
      step: 4,
      title: 'Book an Appointment at VFS Global',
      description: 'Once the IND approves your application, book an appointment online at the nearest VFS Global center in India (Delhi, Mumbai, Bangalore, Chennai, or Kolkata) to submit your passport and biometrics.'
    },
    {
      step: 5,
      title: 'Attend the VFS Appointment',
      description: 'Visit the VFS center with your original passport, printed MVV form, passport photos, IND approval letter, and the appointment confirmation. Submit your biometrics (fingerprints and digital photo) and pay the VFS service fee.'
    },
    {
      step: 6,
      title: 'Collect Your Passport with MVV Sticker',
      description: 'The Embassy will process your passport and affix the MVV sticker. This takes up to 15 working days. Collect your passport from VFS or opt for courier delivery.'
    },
    {
      step: 7,
      title: 'Travel and Obtain Residence Permit (VVR)',
      description: 'Travel to the Netherlands. Within 3 months of arrival, undergo the mandatory Tuberculosis (TB) test at the local GGD. Collect your physical Residence Permit (VVR) card from the designated IND desk and register with your local Dutch municipality.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals must undergo a Tuberculosis (TB) test within 3 months of arrival in the Netherlands. Registration with the local municipal personal records database (BRP) to obtain a Citizen Service Number (BSN) is mandatory within 5 days of arrival.'
  }
};