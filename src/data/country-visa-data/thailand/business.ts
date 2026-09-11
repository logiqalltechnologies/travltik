export default {
  country: 'thailand',
  fromCountry: 'India',
  visaCategory: 'Business Visa (Non-Immigrant B)',
  authority: 'Royal Thai Embassy in New Delhi',
  channels: [
    'https://thaievisa.go.th/',
    'https://www.vfsglobal.com/thailand/india/',
    'https://newdelhi.thaiembassy.org/'
  ],
  processingTime: {
    eVisa: '5-10 working days',
    standardSticker: '7-10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '2,000 THB (Single Entry) / 5,000 THB (Multiple Entry)',
    stickerConsularStandard: '2,000 THB (Single Entry) / 5,000 THB (Multiple Entry)',
    vfsServiceFee: 'VFS Global service fee applies if submitted via VFS center'
  },
  eVisa: {
    available: true,
    portal: 'https://thaievisa.go.th/',
    territorialScope: 'Nationwide',
    validity: '90 days (Single Entry) / 1 year (Multiple Entry)',
    maxStay: '90 days per entry',
    invitationRequired: true,
    processing: '5-10 working days'
  },
  stayDuration: {
    eVisa: '90 days per entry',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days per entry'
  },
  entryType: 'Single Entry / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 6 months beyond the intended stay with minimum 2 blank pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, recent (taken within 6 months), neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Online Application Form',
      description: 'Completed e-Visa application form submitted via the official Thai e-Visa portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from Thai Company',
      description: 'Official invitation letter specifying applicant name, position, purpose, and duration of visit',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter from Indian Employer',
      description: 'Official letter from current employer in India detailing employment and business travel purpose',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'thai_company_docs',
      title: 'Thai Corporate Documents',
      description: 'Business registration certificate (DBD), list of shareholders (BOJ 5), and tax registration',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight tickets or proof of travel arrangements',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or confirmation of place of stay in Thailand',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statement for the last 6 months showing sufficient funds (minimum 20,000 THB / equivalent per person)',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Documents',
      description: 'Obtain invitation letter, corporate registration documents, and personal travel documents'
    },
    {
      step: 2,
      title: 'Create Account on Official Portal',
      description: 'Register an account on the official Thai e-Visa portal (https://thaievisa.go.th/)'
    },
    {
      step: 3,
      title: 'Complete Application Form',
      description: 'Fill out personal and business details online and select the correct visa category (Non-Immigrant B)'
    },
    {
      step: 4,
      title: 'Upload Documents & Pay Fee',
      description: 'Upload required documents and pay consular fee online via portal payment gateway'
    },
    {
      step: 5,
      title: 'Receive Approved eVisa',
      description: 'Track application online, receive approval email, and print out the approved e-Visa certificate'
    }
  ],
  specialRequirements: {
    entry_rules: 'Non-Immigrant B Visa allows a stay of up to 90 days per entry. Invitation from a registered Thai entity and company supporting documents are mandatory.'
  }
};