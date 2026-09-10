export default {
  country: 'iceland',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Directorate of Immigration (Útlendingastofnun) & Directorate of Labour (Vinnumálastofnun)',
  channels: [
    'Directorate of Immigration Portal',
    'VFS Global India',
    'Embassy of Iceland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 to 90 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '16,000 ISK (Residence Permit Fee) + €90 (D-Visa / Entry Visa Fee)',
    vfsServiceFee: '₹2,100'
  },
  eVisa: {
    available: false,
    portal: 'https://utl.is',
    territorialScope: 'Iceland / Schengen Area',
    validity: 'Based on employment contract (typically 1 to 2 years, renewable)',
    maxStay: '365 days (renewable)',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (Initial Entry D-Visa)',
    stickerMultiple: 'Up to 1 to 2 Years (Long-Stay Residence Permit)'
  },
  entryType: 'Single Entry (Entry D-Visa) / Multiple Entry (Residence Card)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (taken within the last 6 months), white background, neutral expression, meeting Schengen standards.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Residence Permit & Visa Application Form',
      description: 'Duly completed and signed Icelandic Residence Permit application form (D-100/Work Permit form) along with the D-Visa application.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Signed Icelandic Employment Contract',
      description: 'Official employment contract signed by both employer and employee, complying with Icelandic collective bargaining agreements and minimum wage standards.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'work_permit_approval',
      title: 'Work Permit Application (Vinnumálastofnun)',
      description: 'Application for a work permit submitted to the Directorate of Labour by the Icelandic employer.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Official criminal record check issued by the Ministry of External Affairs (India) / Passport Seva Kendra, apostilled, issued within the last 6 months.',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'qualifications',
      title: 'Proof of Professional Qualifications',
      description: 'Attested degree certificates, professional diplomas, and resume demonstrating expertise required for the position.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Bank statements for the last 6 months or proof of guaranteed salary from the employer meeting Icelandic minimum support standards.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Signed lease agreement in Iceland or confirmation of housing provided by the employer.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Health Insurance',
      description: 'Insurance certificate covering minimum €30,000 for medical emergencies and repatriation for the initial 6 months until covered by Icelandic Social Insurance.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reserved flight itinerary showing entry travel arrangements to Iceland.',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Submits Work Permit',
      description: 'The Icelandic employer submits the work permit application directly to the Directorate of Labour (Vinnumálastofnun).'
    },
    {
      step: 2,
      title: 'Submit Residence Application',
      description: 'Submit the completed residence permit application form and supporting documents to the Directorate of Immigration (Útlendingastofnun) in Iceland.'
    },
    {
      step: 3,
      title: 'Pay Processing Fees',
      description: 'Pay the non-refundable processing fee (16,000 ISK) to Útlendingastofnun via bank transfer or online payment gateway.'
    },
    {
      step: 4,
      title: 'Schedule Appointment & Biometrics',
      description: 'Upon approval notification, book an appointment at the nearest VFS Global center in India to submit original passport, biometrics, and collect the D-Visa.'
    },
    {
      step: 5,
      title: 'Travel to Iceland & Register',
      description: 'Travel to Iceland, report to Útlendingastofnun for biometric photo collection, obtain national ID (Kennitala), and receive the Residence Permit Card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work permit must be granted prior to arrival in Iceland. Employment contracts must comply with Icelandic trade union wage rates. PCC must be apostilled by MEA India. Applicants must undergo a health examination/registration upon arrival for long-term residency registration.'
  }
};