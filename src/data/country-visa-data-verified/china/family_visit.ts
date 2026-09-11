export default {
  country: 'china',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa (Q2 Visa)',
  authority: 'Embassy of the People\'s Republic of China in India / China Visa Application Service Center (CVASC)',
  channels: ['China Online Visa Application (COVA) Portal', 'China Visa Application Service Center (CVASC)'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '4 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 4500 (Single Entry), INR 6750 (Double Entry), INR 9000 (Multiple Entry 6 Months), INR 13500 (Multiple Entry 1 Year)',
    vfsServiceFee: 'INR 2000 (Standard Service, plus applicable taxes)'
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
    stickerSingleDouble: 'Up to 180 days per entry',
    stickerMultiple: 'Up to 180 days per entry, valid for 6 months to 1 year'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended date of entry, with at least two blank visa pages. Photocopies of the passport data page and previous Chinese visas (if any).',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within 6 months) passport-sized color photographs. White background, full face, no head covering (unless for religious reasons), neutral expression, clear and without shadows.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'China Online Visa Application (COVA) Form',
      description: 'Completely filled out and signed application form generated from the COVA portal (https://cova.cs.mfa.gov.cn/). Ensure all information is accurate and matches supporting documents.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from China',
      description: 'An invitation letter issued by a Chinese citizen or a foreign citizen with a Chinese permanent residence permit who resides in China. The letter must include: applicant\'s full name, gender, date of birth; purpose of visit, arrival/departure dates, places to be visited, relationship with inviter, financial source; inviter\'s full name, contact number, address, and signature.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'proof_of_kinship',
      title: 'Proof of Kinship',
      description: 'Photocopy of certification (e.g., marriage certificate, birth certificate, household registration, notarized kinship certificate) showing the relationship between the applicant and the inviter.',
      icon: '👨‍👩‍👧‍👦',
      mandatory: true
    },
    {
      key: 'inviters_id',
      title: 'Inviter\'s ID Proof',
      description: 'Photocopy of the inviter\'s Chinese ID card (both front and back) or foreign passport and permanent residence permit in China.',
      icon: '🆔',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight booking confirmation showing entry and exit dates to and from China.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'If not staying with the inviter, confirmed hotel bookings for the entire duration of stay in China. If staying with inviter, the invitation letter serves as proof.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3-6 months showing sufficient funds to cover personal expenses during the stay. Income Tax Returns (ITR) for the last 2-3 years. If employed, a No Objection Certificate (NOC) from the employer stating leave approval and return to duty.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application Form (COVA)',
      description: 'Fill out the China Online Visa Application (COVA) form accurately at https://cova.cs.mfa.gov.cn/. Print the completed form and the confirmation page.'
    },
    {
      step: 2,
      title: 'Book an Appointment at CVASC',
      description: 'Schedule an appointment online through the China Visa Application Service Center (CVASC) website (https://www.visaforchina.cn/) for your nearest center (Delhi, Mumbai, Kolkata, Bangalore).'
    },
    {
      step: 3,
      title: 'Prepare Documents',
      description: 'Gather all mandatory documents as listed, ensuring they are complete, accurate, and in the required format. Make photocopies where specified.'
    },
    {
      step: 4,
      title: 'Submit Application and Biometrics',
      description: 'Visit the CVASC on your appointment date with all original documents and photocopies. Submit your application, provide biometric data (fingerprints), and pay the visa and service fees.'
    },
    {
      step: 5,
      title: 'Track Application and Collect Passport',
      description: 'Track the status of your application online using the reference number provided by CVASC. Once processed, collect your passport with the visa sticker from the CVASC or opt for courier delivery if available.'
    }
  ],
  specialRequirements: {
    entry_rules: 'An HIV test report is required for stays exceeding 90 days. Yellow Fever vaccination is NOT required for travelers from India to China.'
  }
};