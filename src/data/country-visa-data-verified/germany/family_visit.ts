export default {
  country: 'germany',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Federal Foreign Office of Germany / German Missions in India',
  channels: ['VIDEX Portal', 'VFS Global', 'German Embassy / Consulate General'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '23.50 EUR (~₹2,100 INR)'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Schengen Area',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days per entry within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within last 10 years, valid for at least 3 months beyond intended departure from Schengen area, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent biometric photographs, 35x45mm, white background, neutral facial expression, 70-80% face coverage, taken within last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VIDEX Schengen Application Form',
      description: 'Fully completed and signed VIDEX online application form along with signed declaration under Section 54(2)(8) of the Residence Act.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Formal Obligation Letter or Host Invitation',
      description: 'Official Formal Obligation Letter (Verpflichtungserklärung) under §§ 66-68 AufenthG by host in Germany, OR informal signed invitation with passport/residence permit copy of host.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official certificates proving relationship to host (Birth Certificate, Marriage Certificate, or notarized family tree).',
      icon: 'users',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation / itinerary showing entry and exit travel dates into the Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmation of host address provided in Verpflichtungserklärung / invitation letter, or hotel booking if staying elsewhere.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Health Insurance',
      description: 'Medical insurance policy covering minimum €30,000 for emergency treatment and repatriation, valid across all Schengen countries.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original stamped personal bank statements for the last 3-6 months, ITR acknowledgements for last 3 years, and pay slips if employed.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / NOC',
      description: 'Employment contract, official Leave Sanction/NOC from employer, business registration documents (if self-employed), or student ID card.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill VIDEX Application Online',
      description: 'Complete the short-stay VIDEX Schengen visa form online, generate the PDF, print all pages, and sign the declaration forms.'
    },
    {
      step: 2,
      title: 'Gather Family Visit Dossier',
      description: 'Assemble all required documents including the host invitation / Verpflichtungserklärung, bank statements, ITR, relationship proof, and Schengen insurance.'
    },
    {
      step: 3,
      title: 'Book VFS Global Appointment',
      description: 'Schedule a appointment at the nearest VFS Germany Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Attend Appointment & Biometrics',
      description: 'Submit your physical document file, submit biometric data (fingerprints & photograph), and pay consular and service fees.'
    },
    {
      step: 5,
      title: 'Track and Receive Passport',
      description: 'Track application progress online and collect your passport with visa sticker via courier or in-person pickup.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to 90/180-day Schengen limits. Travel health insurance minimum coverage of €30,000 is mandatory. Host verification required via official Verpflichtungserklärung or formal written invitation with valid residence proof. Biometric collection is compulsory unless biometrics were captured for a Schengen visa within the past 59 months.'
  }
};