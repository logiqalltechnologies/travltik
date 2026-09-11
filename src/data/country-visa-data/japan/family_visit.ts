export default {
  country: 'japan',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Japan in New Delhi',
  channels: [
    'https://www.mofa.go.jp/emb/ind/index.html',
    'https://www.vfsglobal.com/Japan/India'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '1,000 INR',
    vfsServiceFee: '530 INR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: 'N/A',
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank visa page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application via the Embassy portal or printed form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking showing dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter from family member in Japan.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Coverage of at least 30,000 USD for medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Collect all required documents and ensure they meet the specifications.'
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out the visa application form online or on paper and sign it.'
    },
    {
      step: 3,
      title: 'Submit at VFS',
      description: 'Book an appointment with VFS Global, submit documents, and pay the visa fee.'
    },
    {
      step: 4,
      title: 'Pay Service Fee',
      description: 'Pay the VFS service fee online or at the appointment center.'
    },
    {
      step: 5,
      title: 'Collect Visa',
      description: 'Collect the visa sticker from the Embassy or receive it by courier after processing.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional health mandates; no Yellow Fever vaccination required; no HIV test required.'
  }
};