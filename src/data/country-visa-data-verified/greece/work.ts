export default {
  country: 'greece',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Greece in New Delhi / Ministry of Foreign Affairs of the Hellenic Republic',
  channels: [
    'GVCW Visa Application Centre',
    'Embassy of Greece in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'GVCW Service Fee (approx. 30 EUR / INR equivalent)'
  },
  eVisa: {
    available: false,
    portal: 'https://in-gr.gvcworld.eu',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 1 year (National Type D Visa / Work Visa)'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Valid for at least 6 months beyond intended stay with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent 35x45mm photo taken within last 6 months against a plain white background',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa Application Form',
      description: 'Duly filled and signed Greek National Work Visa (Type D) application form',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'work_approval',
      title: 'Greek Ministry Work Approval',
      description: 'Official authorization act from the Decentralized Administration or Greek Ministry of Migration and Asylum',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract with a Greece-registered employer approved by local labor authorities',
      icon: 'contract',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Apostilled PCC issued by Regional Passport Office (RPO) in India within last 3 months',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Official medical certificate from a recognized doctor confirming no contagious or public health diseases (stipulated for stays >90 days)',
      icon: 'medical',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Minimum 30,000 EUR medical coverage valid across all Schengen states',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Last 6 months personal bank statements attested by bank and Income Tax Returns (ITR)',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed flight reservation or itinerary to Greece',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Lease contract, house deed, or temporary hotel reservation in Greece',
      icon: 'hotel',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility & Approval',
      description: 'Ensure employer in Greece has secured official work clearance from the Ministry of Migration and Asylum.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Gather mandatory verified documents including 35x45mm white background photos, Apostilled PCC, medical certificate, and bank statements.'
    },
    {
      step: 3,
      title: 'Submit and Pay Fee at GVCW',
      description: 'Book appointment via GVCW portal (in-gr.gvcworld.eu), submit application dossier, provide biometrics, and pay 90 EUR consular fee plus GVCW service fee.'
    },
    {
      step: 4,
      title: 'Receive Clearance',
      description: 'Track dossier processing through GVCW portal (standard processing time: 15 calendar days) and collect stamped passport.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work applications must be processed via Global Visa Center World (GVCW), the designated service provider for Greece in India, and NOT VFS Global. Upon arrival in Greece, the visa holder must apply for a Greek Residence Permit for Employment within 30 days.'
  }
};