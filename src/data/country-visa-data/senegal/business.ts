export default {
  country: 'senegal',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs, Senegal / Embassy of Senegal in New Delhi',
  channels: [
    'https://evisa.gouv.sn',
    'https://www.vfsglobal.com/india/senegal',
    'https://www.embassyofsenegal.in'
  ],
  processingTime: {
    eVisa: '5 working days',
    standardSticker: '7 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: '60,000 XOF (approx. 90 EUR)',
    stickerConsularStandard: '60,000 XOF (approx. 90 EUR)',
    vfsServiceFee: '15,000 XOF (approx. 22 EUR)'
  },
  statutoryConsularFee: {
    amount: 60000,
    currency: 'XOF'
  },
  externalServiceProvider: 'VFS Global',
  maxStayDays: 90,
  eVisa: {
    available: true,
    portal: 'https://evisa.gouv.sn',
    territorialScope: 'Nationwide',
    validity: '90 days from date of issue',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days (single entry)',
    stickerMultiple: '180 days (multiple entry)'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from date of entry and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online eVisa application form on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or official invitation letter stating address of stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to at least 30,000 EUR for the entire stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the trip.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Letter from the Senegalese host company on official letterhead, signed, stating purpose and duration of visit.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'International Certificate of Vaccination (valid for at least 10 days before arrival).',
      icon: '💉',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create eVisa Account',
      description: 'Register on the official Senegal eVisa portal and fill in personal details.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Enter travel details, upload required documents, and answer questionnaire.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the eVisa fee and VFS service fee online via secured payment gateway.'
    },
    {
      step: 4,
      title: 'Submit and Await Processing',
      description: 'Submit the application; standard processing takes up to 5 working days.'
    },
    {
      step: 5,
      title: 'Receive eVisa',
      description: 'Download the approved eVisa PDF, print it, and carry it along with supporting documents.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever Vaccination Certificate mandatory; Business invitation letter required; Ensure passport validity of at least 6 months.'
  }
};