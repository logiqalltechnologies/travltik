export default {
  country: 'iceland',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Directorate of Immigration (Útlendingastofnun) / Embassy of Iceland',
  channels: ['VFS Global', 'Embassy / Consulate'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'Up to 45 calendar days (if extended scrutiny required)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'INR 2,210'
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
      description: 'Two recent passport-sized photos taken within last 6 months, white background, neutral expression, meeting ICAO specs.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly filled and signed application form for Schengen short-stay visa.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Business Invitation Letter',
      description: 'Formal invitation from the host company in Iceland detailing purpose of visit, exact dates, travel itinerary, and financial responsibility.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Employer Cover Letter / Deputation Letter',
      description: 'Cover letter from Indian employer stating applicant position, length of service, salary, purpose of visit, and confirmation of leave approval.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation / verifiable travel itinerary covering all internal transfers.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservations, corporate lodging confirmations, or host declaration covering entire stay in Iceland.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Schengen-compliant travel health insurance with minimum coverage of 30,000 EUR covering emergency medical evacuation and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal and company bank statements for the last 3–6 months certified by the bank, alongside ITR filings for the last 3 years.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Application Dossier',
      description: 'Complete the Schengen application form and assemble all required business support documents and invitation letter.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Visa Application Centre for Iceland in India.'
    },
    {
      step: 3,
      title: 'Submit Biometrics & Pay Fee',
      description: 'Attend the appointment in person, submit biometric identifiers (fingerprints and photo), and pay statutory fees.'
    },
    {
      step: 4,
      title: 'Dossier Audit & Decision',
      description: 'Track application processing online until embassy decision and collection of passport with visa sticker.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies strictly across all member countries. Comprehensive business documentation demonstrating commercial intent in Iceland is required prior to issuance.'
  }
};