export default {
  country: 'greece',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Greece in New Delhi / Ministry of Foreign Affairs of the Hellenic Republic',
  channels: ['GVC World (Global Visa Center World)', 'Embassy of Greece in New Delhi'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '30 EUR (GVCW Service Fee)'
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
    stickerSingleDouble: 'Up to 90 days per 180-day period',
    stickerMultiple: 'Up to 90 days per 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended departure from Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color passport photos (35x45mm) taken within the last 6 months against a plain white background with a neutral facial expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed and signed official Schengen visa application form generated through the GVC World portal.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'acceptance_letter',
      title: 'Official Letter of Acceptance',
      description: 'Unconditional admission/enrollment letter from a recognized educational institution or university in Greece.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Education Loan',
      description: 'Last 6 months bank statements, Education Loan Sanction Letter from a recognized bank, or official scholarship confirmation proving adequate funds for study and living expenses.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen-compliant health insurance policy providing minimum coverage of 30,000 EUR for medical emergencies, hospitalization, and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or itinerary detailing entry into and departure from the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of university dormitory housing, long-term rental lease agreement, or temporary hotel reservation in Greece.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'academic_docs',
      title: 'Academic Certificates',
      description: 'Attested original marksheets, academic transcripts, and highest degree certificates obtained in India.',
      icon: 'certificate',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Obtain university acceptance in Greece and assemble mandatory documents including education loan/financial proof and insurance.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Fill out the visa application form via the official GVC World portal (in-gr.gvcworld.eu) and schedule a biometric submission appointment.'
    },
    {
      step: 3,
      title: 'Submit and Pay Fee',
      description: 'Attend appointment at the GVC World application center to submit physical dossier, provide biometrics, and pay 90 EUR consular fee + GVCW service fee.'
    },
    {
      step: 4,
      title: 'Receive Clearance',
      description: 'Track application status online via the GVC World portal and retrieve your stamped passport upon visa issuance.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180-day limitation for short-stay Type C study visas. Applications in India must be processed via GVC World (in-gr.gvcworld.eu), not VFS Global.'
  }
};