export default {
  country: 'bulgaria',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Bulgaria / Embassy of the Republic of Bulgaria in New Delhi',
  channels: [
    'VFS Global Bulgaria Visa Application Centre',
    'Embassy of the Republic of Bulgaria in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 EUR',
    vfsServiceFee: '25 EUR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended departure date, issued within the last 10 years, with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm), white background, 80% face coverage, taken within the last 6 months',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Fully completed and signed national Bulgarian Short-Stay / Schengen Visa application form',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'official_invitation',
      title: 'Official Declaration of Invitation',
      description: 'Original Invitation-Declaration (Pokana-Deklaratsia) certified by the Migration Directorate of the Bulgarian Ministry of Interior',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official documents proving family connection (e.g., birth certificate, marriage certificate, legalization where applicable)',
      icon: 'users',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Confirmed round-trip flight reservations detailing entry and exit dates',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Residence details listed in the official Invitation Declaration or certified residential lease/hotel reservation',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Valid travel medical insurance covering minimum €30,000 for emergency medical care and repatriation across Schengen/Bulgaria',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & ITR',
      description: 'Bank account statements for the last 6 months certified by the bank, along with Income Tax Returns (ITR-V) for the last 3 years',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment Status Proof / NOC',
      description: 'No Objection Certificate (NOC) from employer with salary slips for the last 3 months, or trade license/incorporation documents if self-employed',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Certified Invitation',
      description: 'Host in Bulgaria must apply for and send the original certified Invitation-Declaration (Pokana-Deklaratsia) approved by the Bulgarian Migration Directorate.'
    },
    {
      step: 2,
      title: 'Prepare Application Dossier',
      description: 'Gather all mandatory supporting documents including relationship proof, bank statements, ITR, travel insurance, and photographs.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Bulgaria Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Application & Biometrics',
      description: 'Attend the appointment to submit physical documents, pay the 80 EUR consular fee plus VFS service fees, and enroll biometrics.'
    },
    {
      step: 5,
      title: 'Passport Retrieval',
      description: 'Track application status online and collect passport with visa sticker upon completion of consular processing.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The original Invitation-Declaration certified by the Bulgarian Migration