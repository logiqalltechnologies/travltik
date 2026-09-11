export default {
  country: 'hungary',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs and Trade of Hungary',
  channels: [
    'VFS Global Application Centre',
    'Embassy of Hungary in New Delhi',
    'Consulate General of Hungary in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days (up to 45 days if additional audit required)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90 (approx. INR 8,100)',
    vfsServiceFee: 'INR 2,050'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a plain white background, sharp focus, showing 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed Schengen visa application form (signed in two places for adults, or by both parents/legal guardians for minors).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter',
      description: 'Personal cover letter signed by the applicant detailing the exact travel itinerary, purpose of visit, duration of stay, and commitment to cover all expenses.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or itinerary showing entry and exit points into and out of the Schengen Area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations covering the entire duration of the stay in Hungary and any other Schengen states to be visited.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Comprehensive medical insurance valid for all Schengen countries with a minimum coverage of EUR 30,000 for emergency medical treatment and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements)',
      description: 'Personal bank account statement for the last 6 months, original with seal and signature of the bank, demonstrating adequate liquid funds.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Acknowledgement for the last 3 financial years.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Occupation & Leave Clearance',
      description: 'For employed: Employment contract, last 3 salary slips, and No Objection Certificate (NOC) / Leave approval from employer. For self-employed: Business registration / GST certificate, bank statement, and ITR of the company.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Application Dossier',
      description: 'Complete the official Schengen visa application form and compile all mandatory supporting financial, employment, travel, and accommodation documents.'
    },
    {
      step: 2,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an appointment at the nearest VFS Global Hungary Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics',
      description: 'Attend the appointment in person to submit the hard-copy document dossier, pay the consular (€90) and service fees, and enroll biometric data (fingerprints and photo).'
    },
    {
      step: 4,
      title: 'Track Application & Passport Collection',
      description: 'Track processing status online through the VFS portal and retrieve the passport with the visa sticker via courier or personal collection upon adjudication.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to the Schengen 90/180-day rule. Biometric enrollment (fingerprints and digital photo) is mandatory for applicants unless biometrics were captured for a Schengen visa within the preceding 59 months. Insurance policies must be issued by authorized insurance providers approved for Schengen visas.'
  }
};