export default {
  country: 'greece',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs of the Hellenic Republic / Embassy of Greece in New Delhi',
  channels: [
    'GVCW Visa Application Centre',
    'Embassy of Greece in New Delhi',
    'Consulate General of Greece in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€90 (~₹8,100)',
    vfsServiceFee: '€30 (~₹2,700) GVCW Service Fee'
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
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days per stay within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages, issued within the last 10 years.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) color passport photographs, 35x45mm size, white background, neutral expression, 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Completed and signed Schengen Visa Application Form generated via the official GVCW portal (in-gr.gvcworld.eu).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Business Invitation Letter',
      description: 'Formal invitation letter from the host company in Greece specifying the purpose of visit, duration, detailed itinerary, and confirming financial responsibility or coverage of expenses.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employer_noc',
      title: 'Covering Letter & Employers NOC',
      description: 'Cover letter from the Indian employer on company letterhead detailing employee designation, employment history, purpose of visit, and guarantee of return.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements)',
      description: 'Original personal and company bank statements for the past 6 months, stamped and signed by the bank, demonstrating sufficient funds.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr_proof',
      title: 'Income Tax Returns (ITR)',
      description: 'Personal and business Income Tax Returns (ITR-V) or Form 16 for the last 3 financial years.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Travel health insurance covering all medical expenses, emergency hospital treatment, and repatriation with minimum coverage of €30,000, valid across all Schengen countries.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservations/itinerary showing travel dates into and out of the Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the duration of the stay or explicitly stated host-provided accommodation in the invitation letter.',
      icon: 'hotel',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Registration',
      description: 'Access the official Global Visa Center World (GVCW) portal for Greece (in-gr.gvcworld.eu) and fill in the online Schengen visa application form.'
    },
    {
      step: 2,
      title: 'Book Biometric Appointment',
      description: 'Schedule an in-person appointment at your nearest GVCW Application Centre in India for document submission and biometric enrollment.'
    },
    {
      step: 3,
      title: 'Prepare Business Dossier',
      description: 'Gather all mandatory items, including the official Greek invitation letter, employer covering letter, 6 months bank statements, ITRs, and Schengen insurance.'
    },
    {
      step: 4,
      title: 'Submit Application & Pay Fees',
      description: 'Attend the appointment at the GVCW center to submit physical documents, provide biometrics (fingerprints/photo), and pay the €90 consular fee and GVCW service fee.'
    },
    {
      step: 5,
      title: 'Passport Processing & Pickup',
      description: 'Track application processing online through GVCW portal and collect your passport with the visa sticker once adjudicated.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day limitation applies. Business applicants must present proof of a minimum €30,000 travel health coverage, host invitation from Greece, and complete biometric registration at a GVCW application center.'
  }
};