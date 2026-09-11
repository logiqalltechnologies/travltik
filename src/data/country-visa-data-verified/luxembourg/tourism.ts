export default {
  country: 'luxembourg',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign and European Affairs, Defence, Development Cooperation and Foreign Trade of Luxembourg / Embassy of Luxembourg in New Delhi',
  channels: ['VFS Global Visa Application Centre', 'Embassy of Luxembourg in New Delhi'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90',
    vfsServiceFee: 'INR 2,200'
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
    stickerSingleDouble: 'Up to 90 days',
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
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a plain white background, showing 80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed official Schengen visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Personal Cover Letter',
      description: 'Cover letter detailing the purpose of the travel, itinerary, duration of stay, and commitment to return to India before visa expiry.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit from the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the entire duration of stay in Luxembourg and other Schengen countries.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen-compliant travel health insurance with minimum coverage of EUR 30,000 covering emergency medical expenses, hospitalization, and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements & ITR)',
      description: 'Original bank statements for the last 6 months stamped and signed by the bank showing sufficient funds (minimum EUR 67 per day of stay), along with Income Tax Returns (ITR-V) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'proof_of_employment',
      title: 'Employment Proof / NOC',
      description: 'For employed individuals: Salary slips for the last 3 months, No Objection Certificate (NOC) from employer detailing leave approval. For self-employed: Business registration certificate and company bank statements.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Application Form',
      description: 'Fill out the official Schengen Visa Application Form with accurate personal and travel details.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Luxembourg Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Gather and Verify Documents',
      description: 'Assemble all mandatory checklist documents including financial statements, insurance, and flight itinerary.'
    },
    {
      step: 4,
      title: 'Submit Application & Enroll Biometrics',
      description: 'Attend the VFS appointment to submit physical documents, pay consular and service fees, and complete biometric data collection (fingerprints and photo).'
    },
    {
      step: 5,
      title: 'Passport Retrieval',
      description: 'Track the application status online and collect the passport with the visa sticker once processed by the Embassy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to the Schengen 90/180-day rule. Travel medical insurance must cover at least EUR 30,000 valid across all Schengen member states. Biometric registration (fingerprints) is mandatory unless biometrics were registered for a Schengen visa within the past 59 months. Financial proof must demonstrate a minimum of EUR 67 per day for applicants with confirmed prepaid accommodation.'
  }
};