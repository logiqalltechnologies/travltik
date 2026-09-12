export default {
  country: 'cuba',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of the Republic of Cuba in New Delhi',
  channels: [
    'https://misiones.cubaminrex.cu/en/india'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'https://evisacuba.cu',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank visa page.',
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
      description: 'Completed consular visa application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or travel itinerary.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or corporate accommodation details in Cuba.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Recognized travel medical insurance covering medical emergencies and repatriation in Cuba.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient financial means.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'DIIE Approval & Invitation Letter',
      description: 'Official authorization from the Directorate of Identification, Immigration and Aliens (DIIE) of Cuba transmitted to the Embassy, along with an invitation from the Cuban employer.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract approved by the relevant Cuban ministry/entity.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'proof_of_qualification',
      title: 'Proof of Qualification',
      description: 'Legalized/apostilled degree certificates or professional qualifications relevant to the position.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Police Clearance Certificate issued by regional passport office, authenticated/legalized.',
      icon: '🔒',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Obtains Authorization in Cuba',
      description: 'The prospective employer in Cuba requests work visa approval from the Directorate of Identification, Immigration and Aliens (DIIE) in Cuba. The DIIE communicates clearance directly to the Cuban Embassy in New Delhi.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents including authenticated qualifications, police clearance certificate, employment contract, flight itinerary, and valid passport.'
    },
    {
      step: 3,
      title: 'Submit Application to Embassy Direct',
      description: 'Submit the application form, supporting documentation, and passport directly to the Consular Section of the Embassy of Cuba in New Delhi.'
    },
    {
      step: 4,
      title: 'Pay Consular Fee',
      description: 'Pay the statutory consular fee of 80 USD (or equivalent INR as directed by the consular section) via bank transfer to the official Embassy account.'
    },
    {
      step: 5,
      title: 'Passport Collection',
      description: 'Collect the passport with the affixed D-1 work visa sticker after processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa (Category D-1) requires prior approval from the Directorate of Identification, Immigration and Aliens (DIIE) in Cuba before issuance. Non-tourist visas are handled Embassy direct; eVisaCuba is exclusively for tourism. Upon arrival in Cuba, the holder must register with immigration authorities to obtain the corresponding residency/work identity card.'
  }
};