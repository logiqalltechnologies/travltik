export default {
  country: 'belgium',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Belgium in New Delhi / Consulate General of Belgium in Mumbai',
  channels: [
    'VisaOnWeb Online Portal (visaonweb.diplomatie.be)',
    'VFS Global Visa Application Centre',
    'Embassy / Consulate General of Belgium'
  ],
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '15 working days (up to 45 working days in exceptional cases)',
    expressSticker: 'Not Applicable'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€90 for adults; €45 for children aged 6–12',
    vfsServiceFee: 'Approx. ₹2,130 - ₹2,400 (inclusive of GST)'
  },
  eVisa: {
    available: false,
    portal: 'https://visaonweb.diplomatie.be/',
    territorialScope: 'Schengen Area (29 member states)',
    validity: 'As specified on the issued visa sticker',
    maxStay: '90 days within any 180-day period',
    invitationRequired: false,
    processing: 'Not Applicable'
  },
  stayDuration: {
    eVisa: 'Not Applicable',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Must be issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent (less than 6 months old) color photographs on a white background, 70–80% face coverage, without borders.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VisaOnWeb Application Form',
      description: 'Duly completed and signed VisaOnWeb (VOW) application form along with the electronic application summary sheet.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservations detailing entry and exit dates to and from the Schengen area.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations, tour package booking, or rental contract covering the entire duration of stay in Belgium.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Mandatory travel medical insurance covering minimum €30,000 for emergency medical treatment and repatriation, valid across all Schengen states.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & ITR',
      description: 'Original bank statements for the last 3 to 6 months stamped and signed by the bank, along with Income Tax Returns (ITR-V) for the last 3 years showing sufficient funds (at least €95/day for hotel accommodation).',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Occupation & NOC',
      description: 'Employment contract with salary slips for the last 3 months and an approved Leave/NOC letter from employer; or business registration documents for self-employed individuals.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter',
      description: 'Signed personal cover letter outlining the purpose of travel, detailed day-to-day itinerary, and commitment to return to India.',
      icon: '📝',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete VisaOnWeb Application',
      description: 'Create an account on the official Belgian VisaOnWeb portal (visaonweb.diplomatie.be) and fill out the online Schengen visa application form.'
    },
    {
      step: 2,
      title: 'Schedule VFS Appointment',
      description: 'Book a biometric submission appointment at the nearest VFS Global Belgium Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Assemble Document Dossier',
      description: 'Gather all mandatory documents including travel insurance (€30,000 minimum coverage), 3-6 months bank statements, ITRs, NOC, and flight/accommodation proofs.'
    },
    {
      step: 4,
      title: 'Submit Biometrics & Pay Fees',
      description: 'Attend the appointment at VFS Global to submit physical documents, provide fingerprints and photo biometrics, and pay consular and service fees.'
    },
    {
      step: 5,
      title: 'Track Application & Collect Passport',
      description: 'Track processing status online through VFS Global and collect the passport with visa sticker upon clearance.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180-day rule. Travelers must hold valid travel health insurance covering at least €30,000 and demonstrate sufficient financial capacity (€95 per day for hotel stays or €45 per day if staying with a private host).'
  }
};