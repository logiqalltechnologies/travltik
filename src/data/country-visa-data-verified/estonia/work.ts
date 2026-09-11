export default {
  country: 'estonia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Estonia in New Delhi / Police and Border Guard Board (PPA)',
  channels: [
    'Official MFA Estonia Visa Portal',
    'VFS Global Estonia Visa Application Centre',
    'Embassy of Estonia, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 EUR',
    vfsServiceFee: '22 EUR'
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
    stickerSingleDouble: 'Up to 365 days',
    stickerMultiple: 'Up to 365 days within a 12-month period'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended period of stay, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photos (35x45mm) taken within the last 6 months against a white background, full face coverage without reflections.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'D-Visa Application Form',
      description: 'Completed and printed long-stay D-visa application form filled online via the Estonian Ministry of Foreign Affairs visa portal.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_registration',
      title: 'PPA Short-Term Employment Registration',
      description: 'Confirmation of registered short-term employment issued by the Estonian Police and Border Guard Board (PPA), pre-arranged by the employer.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment agreement or binding job offer detailing job role, salary (meeting Estonian minimum wage criteria), and duration.',
      icon: 'work',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Medical insurance policy covering minimum EUR 30,000 for medical treatment, emergency hospital care, and repatriation, valid across the Schengen area for the entire visa validity.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 6 months certified by the bank, demonstrating sufficient funds to cover initial setup costs prior to receiving salary.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Estonian rental agreement, residential commitment from employer, or temporary hotel reservation covering initial arrival.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Travel Itinerary',
      description: 'Flight reservation or round-trip itinerary detailing entry into Estonia/Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate',
      description: 'Apostilled Police Clearance Certificate (PCC) issued by the Regional Passport Office (RPO) in India, valid within 6 months.',
      icon: 'shield',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Employment Registration',
      description: 'The Estonian employer must pre-register your short-term employment with the Estonian Police and Border Guard Board (PPA).'
    },
    {
      step: 2,
      title: 'Complete Online D-Visa Application',
      description: 'Fill out the official Estonian long-stay (D) visa application form online via the MFA Estonia visa portal and print the signed form.'
    },
    {
      step: 3,
      title: 'Book and Attend VFS Appointment',
      description: 'Schedule an appointment at the VFS Global Estonia center, submit your application dossier, provide biometrics, and pay consular and service fees.'
    },
    {
      step: 4,
      title: 'Passport Retrieval and Clearance',
      description: 'Track your application status online. Upon approval, collect your stamped passport containing the Estonia Long-Stay D Visa.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of long-stay D visa for employment must register their residence with the local Estonian Population Register within 1 month of arriving in Estonia if staying longer than 3 months.'
  }
};