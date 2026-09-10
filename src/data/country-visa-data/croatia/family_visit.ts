export default {
  country: 'croatia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign and European Affairs of the Republic of Croatia',
  channels: [
    'Croatia Crovisa Portal',
    'VFS Global Application Centre',
    'Embassy of the Republic of Croatia in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 calendar days',
    expressSticker: 'Up to 45 calendar days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '28.20 EUR'
  },
  eVisa: {
    available: false,
    portal: 'https://crovisa.mvep.hr/',
    territorialScope: 'Schengen Area',
    validity: 'Up to 5 years',
    maxStay: '90 days within any 180-day period',
    invitationRequired: true,
    processing: '15-30 calendar days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: '90 days within a 180-day window'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended departure from Schengen area, issued within last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photos taken within the last 6 months against a white background, 80% face coverage, no headgear except religious grounds.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Crovisa Online Application Form',
      description: 'Completed and signed visa application form filled online at crovisa.mvep.hr and printed with summary barcode page.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'letter_of_guarantee',
      title: 'Official Letter of Guarantee (Jamstveno Pismo)',
      description: 'Original Letter of Guarantee for a foreigner (Jamstveno pismo za stranca) filled out by host in Croatia, authenticated by a Croatian notary public or competent authorities.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'proof_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official documents proving family connection to host (Birth Certificate, Marriage Certificate, Ration Card) duly legalised or apostilled.',
      icon: 'users',
      mandatory: true
    },
    {
      key: 'host_id_proof',
      title: 'Host Identification & Status Proof',
      description: 'Copy of host Croatian Passport / ID card, or valid Croatian residence permit (Osobnica za stranca) if non-EU citizen.',
      icon: 'id-card',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing dates, entry/exit points, and flight numbers.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Health Insurance',
      description: 'Valid medical insurance covering emergency medical expenses and repatriation with minimum coverage of 30,000 EUR across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof of Applicant',
      description: 'Personal bank statements for last 6 months stamped by bank, displaying sufficient balance (min. 70 EUR/day without host support, or 30 EUR/day if host covers maintenance).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'income_tax',
      title: 'Income Tax Returns (ITR)',
      description: 'ITR-V or Acknowledgement slips for the last 3 financial years.',
      icon: 'file-check',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment Status Documents',
      description: 'Employer NOC with leave sanction, last 3 months salary slips, or business registration / GST for self-employed applicants.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Letter of Guarantee',
      description: 'Host in Croatia must complete and notarize the official Letter of Guarantee (Jamstveno Pismo) and send the original or registered digital copy.'
    },
    {
      step: 2,
      title: 'Fill Online Application Form',
      description: 'Complete the official Schengen visa application form on the MVEP Crovisa portal (crovisa.mvep.hr) and print out the summary sheet.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Croatia Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Dossier and Biometrics',
      description: 'Attend appointment in person to submit physical documents, pay standard 90 EUR consular fee + VFS service fee, and capture biometric data.'
    },
    {
      step: 5,
      title: 'Passport Collection',
      description: 'Track application online via VFS and collect passport with Schengen sticker upon decision.'
    }
  ],
  specialRequirements: {
    entry_rules: 'As Croatia is part of the Schengen area, the 90/180-day rule applies strictly across all member countries. The Letter of Guarantee (Jamstveno pismo) must be verified and registered in the database of the Ministry of Foreign and European Affairs of Croatia before application submission.'
  }
};