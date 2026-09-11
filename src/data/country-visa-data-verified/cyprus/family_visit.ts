export default {
  country: 'cyprus',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'High Commission of the Republic of Cyprus in New Delhi / Ministry of Foreign Affairs of Cyprus',
  channels: [
    'VFS Global Application Centre',
    'High Commission of the Republic of Cyprus, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90 (payable in INR as per current consular exchange rate)',
    vfsServiceFee: 'INR 1,850'
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
    stickerMultiple: 'Up to 90 days per 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended date of departure from Cyprus, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized color photos (35x45mm), taken within the last 6 months against a white background, face taking up 70-80% of the frame.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed and signed Cyprus Visa Application Form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'assumption_of_responsibility',
      title: 'Assumption of Responsibility Form',
      description: 'Official Assumption of Responsibility form signed by the host in Cyprus, duly completed and certified by a Certifying Officer or Notary Public in the Republic of Cyprus.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'bank_guarantee_host',
      title: 'Host Bank Guarantee',
      description: 'Bank guarantee submitted by the host in Cyprus to the Migration Department (if requested by the consular officer depending on nationality and financial evaluation).',
      icon: 'bank',
      mandatory: false
    },
    {
      key: 'host_id_proof',
      title: 'Host Identification & Status Proof',
      description: 'Copy of host’s Cypriot ID/Passport, or valid Alien Registration Certificate (ARC) / Cyprus residence permit along with proof of employment or income in Cyprus.',
      icon: 'user-check',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official civil status documents establishing relation to the host (e.g., birth certificate, marriage certificate, or passport pages indicating relationship).',
      icon: 'users',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Property title deed or registered lease contract of the host in Cyprus, or official hotel reservation if not staying continuously with host.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Applicant)',
      description: 'Applicant’s personal bank statements for the last 6 months, stamped and signed by the bank, demonstrating sufficient personal liquid funds.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr_documents',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Form 16 for the last 3 financial years.',
      icon: 'file-check',
      mandatory: true
    },
    {
      key: 'employment_noc',
      title: 'Employment NOC / Leave Sanction',
      description: 'Covering letter from employer on letterhead granting sanctioned leave, stating designation, length of service, and salary. Business registration documents if self-employed.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservations or detailed travel itinerary specifying entry and exit dates.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Comprehensive medical insurance with a minimum coverage of EUR 30,000 covering emergency medical expenses and repatriation for the full stay duration in Cyprus.',
      icon: 'insurance',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Documentation & Host Certification',
      description: 'Obtain the certified Assumption of Responsibility form and host documents from Cyprus alongside your personal financial and travel papers.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest designated VFS Global Cyprus Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Submit Application & Pay Fees',
      description: 'Attend the appointment in person, submit physical documents, pay the consular fee (EUR 90 equivalent) and VFS service fees, and submit biometrics if required.'
    },
    {
      step: 4,
      title: 'Passport Collection',
      description: 'Track the application status online and collect your passport with the visa sticker once processed by the High Commission.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of valid double or multiple-entry Schengen visas, or residence permits of EU/EEA member states, the US, or the UK, may enter the Republic of Cyprus without a national visa for up to 90 days within a 180-day period, provided the underlying visa/permit remains valid. Entry to the island via ports or airports in Northern Cyprus (uncontrolled area) is considered illegal by the Republic of Cyprus.'
  }
};