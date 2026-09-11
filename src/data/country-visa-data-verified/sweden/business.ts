export default {
  country: 'sweden',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Swedish Migration Agency (Migrationsverket) and the Embassy of Sweden, New Delhi',
  channels: [
    'https://www.migrationsverket.se',
    'VFS Global Sweden Visa Application Centre',
    'Embassy of Sweden, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '37 EUR'
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
    stickerSingleDouble: 'Up to 90 days within any 180-day period',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the planned departure date from the Schengen area, containing at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs taken within the last 6 months. Must have a white background, neutral facial expression, no headwear (except for religious reasons), and 70-80% face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Fully completed, printed, and signed Schengen Visa Application Form. For minors, both parents must sign.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Business Invitation Letter',
      description: 'An official invitation letter from the host company in Sweden written on company letterhead. Must state the applicant’s details, purpose of visit, duration of stay, detailed itinerary, and specify who will cover the travel and accommodation expenses. Must include the Swedish company’s registration number (Organisationsnummer) and contact details.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Employer Cover Letter',
      description: 'An original cover letter from the Indian employer on company letterhead, detailing the applicant’s position, salary, length of employment, purpose of the business trip, and confirming the approval of leave. It must explicitly state who is bearing the travel and living expenses.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'business_registration',
      title: 'Proof of Business Registration',
      description: 'Proof of registration of the Indian employing company (e.g., Certificate of Incorporation, GST registration, or Partnership Deed).',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'A confirmed round-trip flight reservation or detailed travel itinerary showing entry and exit dates from the Schengen area.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation, rental agreement, or a declaration from the inviting Swedish company confirming that accommodation is provided at a specific address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'A valid travel medical insurance policy covering all Schengen countries with a minimum coverage of EUR 30,000 for medical emergencies, urgent medical care, and repatriation. Must be valid for the entire duration of the stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 consecutive months, signed and stamped by the bank, showing sufficient funds. Also requires Income Tax Returns (ITR-V) or Form 16 for the last 2 assessment years.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documentation',
      description: 'Gather all required documents, including the official business invitation letter from Sweden, the cover letter from your Indian employer, financial statements, and travel insurance.'
    },
    {
      step: 2,
      title: 'Complete the Application Form',
      description: 'Download, print, and fill out the Schengen Visa Application Form accurately. Ensure it is signed in the designated fields.'
    },
    {
      step: 3,
      title: 'Book a VFS Appointment',
      description: 'Schedule an appointment online through the VFS Global Sweden portal to submit your application and register biometrics at your nearest Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Attend the Appointment',
      description: 'Visit the VFS Global centre on your scheduled date. Submit your physical documents, pay the visa fee and VFS service fee, and provide your biometric data (fingerprints and digital photograph).'
    },
    {
      step: 5,
      title: 'Track and Collect Passport',
      description: 'Track your application status online. Once processed, collect your passport containing the visa sticker from the VFS centre, or receive it via secure courier if you opted for the service.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies strictly. Travelers must be prepared to present copies of their business invitation letter, travel insurance, and proof of sufficient financial means (minimum 450 SEK per day of stay, unless fully covered by the host) to border control officers upon entry into the Schengen zone.'
  }
};