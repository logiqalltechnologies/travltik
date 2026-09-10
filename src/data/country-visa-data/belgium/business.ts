export default {
  country: 'Belgium',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy & Consulates General of Belgium in India / FPS Foreign Affairs',
  channels: [
    'VisaOnWeb Portal (https://visaonweb.diplomatie.be/)',
    'VFS Global Belgium Visa Application Centre',
    'Embassy of Belgium, New Delhi / Consulate General of Belgium, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A (Sticker Visa Only)',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR (~₹8,100)',
    vfsServiceFee: '₹2,250'
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
    stickerSingleDouble: 'Up to 90 days within 180 days',
    stickerMultiple: 'Up to 90 days per stay within 180 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport valid for at least 3 months beyond intended departure from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent white background photographs (35×45mm, taken within 6 months, 80% face coverage, neutral expression).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VisaOnWeb Application Form',
      description: 'Duly completed and signed application form printed from the official VisaOnWeb portal along with the barcode summary sheet.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from host company in Belgium stating trip purpose, duration, itinerary, and financial guarantee if applicable.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'covering_letter',
      title: 'Employer Cover Letter',
      description: 'Covering letter from employer in India detailing candidate position, purpose of visit, trip timeline, and confirmation of financial undertaking.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight itinerary detailing travel dates and entry/exit points from the Schengen zone.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation, corporate apartment confirmation, or official invitation proof covering entire duration of stay in Belgium.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Travel medical insurance with minimum coverage of €30,000 for emergency medical expenses, hospitalization, and repatriation across Schengen states.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 to 6 months stamped by bank, company bank statements (if sponsored by company), and ITR acknowledgements for last 3 years.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete VisaOnWeb Online Form',
      description: 'Register on the official Belgian VisaOnWeb portal (visaonweb.diplomatie.be) and complete the Schengen business visa application form.'
    },
    {
      step: 2,
      title: 'Schedule VFS Appointment',
      description: 'Book an appointment at the nearest VFS Global Belgium Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Assemble Document Dossier',
      description: 'Gather required business invitation, employer covering letter, financial proofs, travel insurance, and flight itinerary.'
    },
    {
      step: 4,
      title: 'Submit Dossier & Enroll Biometrics',
      description: 'Attend VFS appointment, submit physical dossier, record biometric data (fingerprints and photo), and pay consular and service fees.'
    },
    {
      step: 5,
      title: 'Track Application & Passport Collection',
      description: 'Track application status online via VFS Global and collect passport with visa sticker upon completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Subject to Schengen 90/180-day rule. Biometric enrollment is mandatory unless captured for a Schengen visa within the preceding 59 months. Travel health insurance must be obtained from an approved Indian insurance provider recognized by Schengen authorities.'
  }
};