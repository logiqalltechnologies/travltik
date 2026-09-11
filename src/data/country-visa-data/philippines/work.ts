export default {
  country: 'philippines',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of the Philippines in New Delhi',
  channels: [
    'https://newdelhipe.dfa.gov.ph/',
    'https://visa.vfsglobal.com/ind/en/phl/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'INR 1,180'
  },
  eVisa: {
    available: false,
    portal: 'https://evisa.gov.ph',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '59 days',
    stickerMultiple: '1 year'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed visa application form signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight reservation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking or letter from the Philippine employer regarding accommodation arrangements.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Travel health insurance with minimum coverage appropriate for overseas travel.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 6 months certified by the bank.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract & AEP',
      description: 'Notarized employment contract and Alien Employment Permit (AEP) issued by DOLE or petition approval from Bureau of Immigration.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'certificate_of_employment',
      title: 'Employer Credentials',
      description: 'SEC registration of employer in Philippines and petition endorsement letter.',
      icon: '🏢',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Philippine Work Authorization',
      description: 'Sponsoring employer in the Philippines must secure the Alien Employment Permit (AEP) from DOLE and approval from the Bureau of Immigration.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      description: 'Collect mandatory documents including the DFA clearance/authorization, passport, photographs, and financial proofs.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the VFS Global Philippine Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Application & Pay Fees',
      description: 'Submit physical documents and pay consular fee (USD 100 equivalent) and VFS service fee (INR 1,180).'
    },
    {
      step: 5,
      title: 'Processing and Passport Collection',
      description: 'Wait 10-15 working days for processing and collect passport with 9(g) visa or 9(a) entry visa endorsed for pre-arranged employment.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Pre-arranged employment (9g) visas require prior Department of Foreign Affairs (DFA) authorization conveyed to the Embassy, along with an Alien Employment Permit (AEP) issued by the Department of Labor and Employment (DOLE).'
  }
};