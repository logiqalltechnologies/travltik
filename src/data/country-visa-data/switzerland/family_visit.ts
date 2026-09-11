export default {
  country: 'switzerland',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Switzerland in India / Federal Office for Migration (SEM)',
  channels: [
    'Official Swiss-Visa Portal (https://www.swiss-visa.ch)',
    'VFS Global Switzerland Visa Application Centre',
    'Embassy of Switzerland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'approx. 2,600 INR'
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
    stickerSingleDouble: 'Up to 90 days within any 180-day period',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the planned departure date from the Schengen area, containing at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months, with a white background, neutral facial expression, and meeting Schengen biometric specifications.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed, dated, and signed Swiss-Visa online application form printout from the official Swiss-Visa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates from Switzerland and the Schengen territory.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation & Invitation',
      description: 'A formal signed invitation letter from the host in Switzerland stating their full name, address, relationship to the applicant, and duration of stay, accompanied by a copy of the host’s Swiss passport or residence permit (B/C permit).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Travel insurance policy valid for all Schengen countries, providing a minimum coverage of EUR 30,000 for emergency medical expenses, hospitalization, and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 months showing sufficient funds (minimum CHF 100 per day of stay, or CHF 30 per day for students). Must also include Income Tax Returns (ITR-V) for the last 2 years and salary slips for the last 3 months if employed.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / NOC',
      description: 'No Objection Certificate (NOC) from the employer on official letterhead (if employed), business registration documents (if self-employed), or retirement/pension proof.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form online on the official Swiss-Visa portal (swiss-visa.ch), print the completed form, and sign it.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Switzerland Visa Application Centre to submit your documents and biometrics.'
    },
    {
      step: 3,
      title: 'Prepare Document Dossier',
      description: 'Gather all required documents, including the signed application form, invitation letter from the Swiss host, financial proofs, and travel insurance.'
    },
    {
      step: 4,
      title: 'Attend Appointment & Pay Fees',
      description: 'Visit the VFS centre on your appointment date, submit your physical documents, provide biometric data (fingerprints and photo), and pay the visa fee and service charge.'
    },
    {
      step: 5,
      title: 'Track and Collect Passport',
      description: 'Track your application status online. Once processed, collect your passport from the VFS centre or receive it via secure courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies strictly. If the host in Switzerland is sponsoring the trip financially, the Swiss representation may issue a "Declaration of Sponsorship" form which must be sent to the host to be approved by their local cantonal authority in Switzerland.'
  }
};