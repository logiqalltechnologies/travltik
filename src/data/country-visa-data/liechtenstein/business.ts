export default {
  country: 'liechtenstein',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Switzerland in India (Representing the Principality of Liechtenstein)',
  channels: [
    'VFS Global Switzerland Application Centre',
    'Embassy of Switzerland in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '23 EUR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Schengen Area',
    validity: 'Up to 90 days within a 180-day period',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '15 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended departure from Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized photos (35x45mm), taken within the last 6 months against a white background, showing full face and neutral expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Fully completed and signed Schengen visa application form (submitted via the online Swiss portal www.swiss-visa.ch and printed).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from the host company/partner in Liechtenstein detailing the purpose, duration, address, schedule of meetings, and financial responsibility.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'employer_cover_letter',
      title: 'Employer Cover Letter & NOC',
      description: 'Official cover letter on Indian company letterhead detailing employee role, length of service, salary, purpose of visit, and confirmation of leave me approval/cost coverage.',
      icon: 'building',
      mandatory: true
    },
    {
      key: 'company_registration',
      title: 'Proof of Indian Business Registration',
      description: 'Certificate of Incorporation, GST Registration, or Partnership Deed of the sending Indian employer.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation detailing travel routes, dates, and flight numbers.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservations covering the entire stay in Liechtenstein/Schengen area or confirmation of host-provided lodging.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen-compliant travel health insurance policy covering medical emergencies and repatriation with a minimum coverage of €30,000.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Income Tax Returns',
      description: 'Personal bank statements for the last 3-6 months stamped by the bank, along with Indian Income Tax Returns (ITR-V) for the past 3 assessment years.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application Form',
      description: 'Fill out the official Swiss Schengen Visa Application form online via the Swiss Federal Department of Foreign Affairs (FDFA) portal (www.swiss-visa.ch).'
    },
    {
      step: 2,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an appointment at the nearest VFS Global Switzerland Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Gather and Verify Documents',
      description: 'Assemble all required supporting documents including the business invitation, employer NOC, financial proofs, and travel insurance.'
    },
    {
      step: 4,
      title: 'Submit Application & Provide Biometrics',
      description: 'Attend the appointment to submit physical documents, enroll biometric data (fingerprints and photo), and pay statutory visa fees.'
    },
    {
      step: 5,
      title: 'Passport Collection & Visa Tracking',
      description: 'Track application progress online and collect your passport with the Schengen sticker once processed.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Liechtenstein is represented in visa matters by the Embassy of Switzerland in India. The standard Schengen 90/180-day rule applies strictly across all member states. Travel health insurance with minimum €30,000 coverage is mandatory for entry.'
  }
};