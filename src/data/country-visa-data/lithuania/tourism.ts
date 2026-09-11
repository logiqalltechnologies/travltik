export default {
  country: 'lithuania',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Republic of Lithuania in New Delhi',
  channels: ['VFS Global Lithuania', 'Embassy of the Republic of Lithuania'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '15.90 EUR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Schengen Area',
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
      description: 'Original passport valid for at least 3 months beyond departure date from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) photos, 35x45mm size, white background, 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Completed and signed e-KONSULAT / Schengen visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservations with confirmed dates and flight numbers entering and exiting the Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations or voucher covering the entire duration of stay in Lithuania and other Schengen states.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Comprehensive medical insurance with minimum coverage of 30,000 EUR valid across all Schengen countries covering medical emergencies and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 6 months stamped by the bank, Income Tax Returns (ITR) for the last 3 years, demonstrating minimum daily funds requirement (approx. 40 EUR/day).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'noc_employment',
      title: 'Employment NOC / Cover Letter',
      description: 'Cover letter detailing itinerary, alongside No Objection Certificate (NOC) from employer with approved leave details or business registration for self-employed.',
      icon: 'file',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Application Form',
      description: 'Fill out the electronic Schengen visa application form via official consular channels and print the completed dossier.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Lithuania Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics',
      description: 'Attend the appointment to submit physical documents, enroll biometric data (fingerprints & photo), and pay consular and service fees.'
    },
    {
      step: 4,
      title: 'Passport Collection',
      description: 'Track application online and retrieve passport with the Schengen sticker visa upon processing completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180 day rule applies across the entire Schengen zone. Proof of minimum daily sustenance of at least 40 EUR per day of stay in Lithuania is required.'
  }
};