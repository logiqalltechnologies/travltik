export default {
  country: 'finland',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry for Foreign Affairs of Finland',
  channels: ['VFS Global Application Centre', 'Embassy of Finland, New Delhi'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '33 EUR'
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
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a plain white background, showing 70-80% face coverage with neutral expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Application Form',
      description: 'Duly completed and signed Schengen visa application form (printed from the official portal).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or detailed travel itinerary showing entry and exit dates from the Schengen zone.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations, holiday home rental confirmation, or an official invitation letter covering the entire duration of stay.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Valid travel medical insurance with a minimum coverage of €30,000 for emergency medical evacuation, repatriation, and urgent hospital care across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original stamped bank statements for the last 3-6 months demonstrating sufficient funds (minimum €30 per day of stay in Finland), along with Income Tax Returns (ITR-V) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Occupation & NOC',
      description: 'Employment contract, salary slips for the last 3 months, and approved No Objection Certificate (NOC) from employer. For self-employed: Business registration documents and company bank statements.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Verify travel dates and ensure Finland is your main destination in the Schengen Area.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Fill out the official Schengen application form and assemble all required supporting documents according to consular guidelines.'
    },
    {
      step: 3,
      title: 'Book & Attend VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Finland application center, submit your physical document dossier, enroll biometric data, and pay consular and service fees.'
    },
    {
      step: 4,
      title: 'Receive Clearance',
      description: 'Track application processing online and collect your passport containing the Schengen visa sticker once adjudicated.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Subject to standard Schengen 90/180-day limitation. Applicants must demonstrate financial solvency of at least €30 per day for Finland. First-time Schengen applicants or those who have not provided biometrics in the last 59 months must attend in person.'
  }
};