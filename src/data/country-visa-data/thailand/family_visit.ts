export default {
  country: 'thailand',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Kingdom of Thailand',
  channels: [
    'Official Thai eVisa Portal (thaievisa.go.th)',
    'VFS Global Thailand Visa Application Centre',
    'Royal Thai Embassy / Consulate-General'
  ],
  processingTime: {
    eVisa: '5-10 working days',
    standardSticker: '3-5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'INR 5,500 (Non-Immigrant O)',
    stickerConsularStandard: 'INR 5,500 (Non-Immigrant O)',
    vfsServiceFee: 'INR 500'
  },
  eVisa: {
    available: true,
    portal: 'https://thaievisa.go.th',
    territorialScope: 'Nationwide',
    validity: '3 months',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '5-10 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days per entry'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport with at least 6 months validity remaining from the date of arrival and minimum 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent 35x45mm color photos with white background, taken within the last 6 months, showing neutral expression and front-facing view.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed online application form submitted via the official Thai eVisa portal or printed paper form for sticker applications.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight ticket showing arrival and departure details from Thailand.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Host accommodation details, rental agreement, house registration (Ta Bien Baan) in Thailand, or hotel booking covering the duration of stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Signed invitation letter from the family member residing in Thailand, along with their Thai ID Card / House Registration or Passport copy with a valid long-term visa/work permit.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Proof of Relationship',
      description: 'Official government document confirming relationship to the host, such as Birth Certificate, Marriage Certificate, or Family Register.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 6 months certified by the bank showing a minimum balance of THB 30,000 per person (~INR 75,000) or THB 60,000 per family.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Collect Required Documents',
      description: 'Obtain the formal invitation letter, relationship proof documents, host details, and certified bank statements.'
    },
    {
      step: 2,
      title: 'Register on Official Portal',
      description: 'Create an account on the official Thai eVisa portal (thaievisa.go.th) and select the corresponding consulate jurisdiction.'
    },
    {
      step: 3,
      title: 'Complete Application Form',
      description: 'Fill in travel and host details accurately and upload clear scans of required documents.'
    },
    {
      step: 4,
      title: 'Pay Visa Application Fee',
      description: 'Pay the mandatory visa fee online using an eligible credit or debit card.'
    },
    {
      step: 5,
      title: 'Receive Approved Visa',
      description: 'Once processed (5-10 working days), receive the eVisa confirmation via email, print it out, and present it to border control upon entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Travelers must hold a valid passport (6+ months validity), approved visa/eVisa printout, confirmed return ticket, and cash equivalent to THB 10,000 - 20,000 per person upon arrival for immigration checks.'
  }
};