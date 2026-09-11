export default {
  country: 'france',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of France in India / VFS Global',
  channels: [
    'France-Visas Official Portal',
    'VFS Global Application Center',
    'Consulate General of France'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '28.50 EUR'
  },
  eVisa: {
    available: false,
    portal: 'https://france-visas.gouv.fr',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: '90 days within any 180-day period'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure from the Schengen area, with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs taken within the last 6 months, 35x45mm, plain white background, neutral expression, 70-80% face coverage',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'France-Visas Application Form & Registration Receipt',
      description: 'Completed and signed application form generated from France-Visas portal along with the official registration receipt',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary showing entry into and exit from the Schengen area',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the entire duration of the stay in France and other Schengen countries, or an official Attestation d\'accueil',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Medical insurance covering emergency medical expenses, hospitalization, and repatriation with a minimum coverage of 30,000 EUR across all Schengen states',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original personal bank statements for the last 6 months stamped and signed by the bank, demonstrating sufficient financial means',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Form 16 for the last 3 financial years',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'noc_employment',
      title: 'Proof of Employment / Leave Sanction (NOC)',
      description: 'Official letter from employer granting leave with company seal, or certificate of business registration and GST returns for self-employed applicants',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Application on France-Visas',
      description: 'Create an account on the France-Visas portal, fill out the online application form, and download the registration receipt and completed application.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the designated VFS Global Visa Application Centre in India for document submission and biometric collection.'
    },
    {
      step: 3,
      title: 'Submit Biometrics and Pay Fees',
      description: 'Attend the VFS appointment to submit mandatory physical documents, provide biometric data (fingerprints and photo), and pay consular (90 EUR) and service fees.'
    },
    {
      step: 4,
      title: 'Track and Receive Passport',
      description: 'Track the application progress via VFS reference number and retrieve the passport with the Schengen sticker visa upon consular clearance.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strictly subject to Schengen 90/180-day limitation rule. Passport must not be older than 10 years at time of entry. Travel medical insurance must be compliant with minimum 30,000 EUR coverage.'
  }
};