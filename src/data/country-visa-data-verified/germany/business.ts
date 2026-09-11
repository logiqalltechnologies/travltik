export default {
  country: 'germany',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Federal Foreign Office of Germany (Auswärtiges Amt)',
  channels: [
    'VIDEX Portal',
    'VFS Global Germany Visa Application Centre',
    'Embassy / Consulate General of the Federal Republic of Germany'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90',
    vfsServiceFee: 'EUR 24.50'
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
      description: 'Original passport issued within last 10 years, valid for at least 3 months beyond intended departure from Schengen area, with minimum 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent biometric photographs (35x45mm), white background, neutral facial expression, 70-80% face coverage, taken within last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VIDEX Application Form & Section 54 Declaration',
      description: 'Completed and signed VIDEX Schengen visa application form, including signed Section 54(2)(8) declaration of the German Residence Act.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'German Business Invitation Letter',
      description: 'Official invitation letter from German company on letterhead stating purpose, exact dates of visit, itinerary, and financial obligation (if applicable).',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employer_cover_letter',
      title: 'Covering Letter from Indian Employer',
      description: 'Official letter on employer letterhead detailing applicant position, length of employment, purpose of travel, itinerary, and confirmation of financial sponsorship.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing flight numbers and travel dates in and out of the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for entire duration of stay or confirmation of accommodation provided by the host company.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Compliant medical insurance covering medical emergencies and repatriation with minimum coverage of EUR 30,000 valid for all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Statements & ITR',
      description: 'Personal and company original bank statements for the past 3 to 6 months signed/stamped by the bank, plus Personal Income Tax Returns (ITR) for last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'company_registration',
      title: 'Indian Business Registration Proof',
      description: 'Proof of legal entity of the Indian employer (Certificate of Incorporation, GST Registration, or Partnership Deed).',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete VIDEX Application Form',
      description: 'Fill out the official online VIDEX application form, print the generated PDF document, and sign all declaration pages.'
    },
    {
      step: 2,
      title: 'Book VFS Global Appointment',
      description: 'Schedule an in-person submission and biometric capture appointment at the authorized VFS Global German Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics',
      description: 'Attend appointment to submit physical document dossier, enroll biometric data (fingerprints and photo), and pay statutory fees.'
    },
    {
      step: 4,
      title: 'Passport Retrieval',
      description: 'Track application status via reference number and collect passport with Schengen visa sticker upon consular adjudication.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180-day stay rule. Border officials may verify host invitation letter, travel health insurance (€30,000 minimum), return ticket, and financial means upon entry.'
  }
};