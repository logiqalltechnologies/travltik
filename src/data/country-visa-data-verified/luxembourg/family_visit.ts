export default {
  country: 'luxembourg',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign and European Affairs of Luxembourg / Embassy of Luxembourg, New Delhi',
  channels: [
    'Official Ministry Portal (maee.gouvernement.lu)',
    'VFS Global Luxembourg Visa Application Centre',
    'Embassy of Luxembourg in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-45 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€90 (approx. ₹8,100 for adults)',
    vfsServiceFee: 'approx. ₹2,300 (€25)'
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
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within the last 6 months) passport-size photos, 35x45mm dimensions, white background, neutral expression, meeting ICAO Schengen standards.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed Schengen short-stay visa application form (signed by parent/legal guardian for minors).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'sponsorship_invitation',
      title: 'Official Invitation or Engagement de Prise en Charge',
      description: 'Official sponsorship certificate ("Engagement de prise en charge") validated by the local communal administration in Luxembourg, or an official written invitation letter from the host specifying the duration and purpose of stay.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'host_proofs',
      title: 'Host Legal Status and Residence Proof',
      description: 'Copy of host’s Luxembourg identity card or passport, and Luxembourg residence permit (for non-EU nationals), along with recent utility bills or rental contract as proof of address.',
      icon: 'home',
      mandatory: true
    },
    {
      key: 'family_proof',
      title: 'Proof of Family Relationship',
      description: 'Official civil status documents establishing relationship to the host (e.g., birth certificate, marriage certificate, or family register booklet), apostilled/attested if applicable.',
      icon: 'users',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or detailed travel itinerary showing entry and exit from the Schengen area with dates and flight numbers.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Health Insurance',
      description: 'Medical insurance policy covering minimum €30,000 for emergency medical treatment, hospitalization, and repatriation across all Schengen states for the entire duration of stay.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Applicant)',
      description: 'Personal bank statements for the last 6 consecutive months stamped and signed by the bank, demonstrating sufficient personal liquid funds.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Return (ITR-V) acknowledgements or tax clearance certificates for the last 3 financial years.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment & Leave Clearance (NOC)',
      description: 'Letter from current employer confirming position, salary, period of employment, and approved leave of absence with No Objection Certificate (NOC). For self-employed: Business registration and 6 months company bank statements.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Host Documentation',
      description: 'Receive the official invitation letter or validated "Engagement de prise en charge" along with identity and residence proofs from your family member residing in Luxembourg.'
    },
    {
      step: 2,
      title: 'Complete Application & Prepare Dossier',
      description: 'Fill out the official Schengen Visa Application Form and compile all mandatory documents including financial statements, insurance, and flight itinerary.'
    },
    {
      step: 3,
      title: 'Schedule VFS Appointment',
      description: 'Book an appointment at the nearest VFS Global Luxembourg Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Application & Biometrics',
      description: 'Attend the appointment to submit physical documents, pay the €90 consular fee plus service fees, and enroll biometric data (fingerprints and photo).'
    },
    {
      step: 5,
      title: 'Track Application & Receive Passport',
      description: 'Track the application progress online. Once processed by the Embassy of Luxembourg in New Delhi, collect your passport with the visa sticker or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Subject to the Schengen 90/180-day rule. If the host in Luxembourg acts as a financial guarantor, the formal guarantee "Engagement de prise en charge" must be legalized by the host\'s municipal authority (Commune) and validated by the Directorate of Immigration in Luxembourg prior to visa submission.'
  }
};