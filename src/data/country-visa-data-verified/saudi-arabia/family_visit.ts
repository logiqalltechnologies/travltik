export default {
  country: 'saudi-arabia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Saudi Arabia in New Delhi / Ministry of Foreign Affairs (MOFA)',
  channels: [
    'https://ksavisa.sa/',
    'https://vc.tasheer.com/'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'SAR 200 + mandatory health insurance',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'SAR 135'
  },
  eVisa: {
    available: true,
    portal: 'https://ksavisa.sa/',
    territorialScope: 'Nationwide',
    validity: '90 days (Single) / 365 days (Multiple)',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days (Single) / 90 days per visit (Multiple)',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single or Multiple',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended stay with at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'mofa_invitation',
      title: 'MOFA Family Visit Visa Document',
      description: 'Approved family visit visa document/invitation issued by MOFA to the host residing in Saudi Arabia.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Proof of Relationship',
      description: 'Attested marriage certificate (for spouse) or birth certificate (for children/parents) establishing relationship to host.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (2x2 inches)',
      description: 'White background, recent photo taken within 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'host_iqama',
      title: 'Host Iqama and Passport Copy',
      description: 'Copy of valid Iqama (residence permit) and passport of the host in Saudi Arabia.',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation confirming dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Mandatory Health Insurance',
      description: 'Approved medical insurance issued automatically during application processing via KSA Visa / Tasheer.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Host Requests Invitation',
      description: 'The Saudi sponsor/host applies for the Family Visit Visa Document via the official KSA Visa / MOFA portal.'
    },
    {
      step: 2,
      title: 'Book Tasheer Appointment',
      description: 'Once the visa document is approved, the applicant in India schedules an appointment at a Tasheer (VFS Tasheer) Visa Service Center.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics',
      description: 'Attend the appointment at Tasheer to submit physical documents, passport, and provide biometric data.'
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the visa fee (SAR 200 equivalent), mandatory insurance fee, and Tasheer service fees at the center.'
    },
    {
      step: 5,
      title: 'Receive Digital Visa',
      description: 'Once processed (3-5 working days), receive the e-visa confirmation and stamped passport returned via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Saudi Arabia replaced physical visa stickers with digital visas with QR codes for Indian nationals. Relationship proof (marriage/birth certificates) must be attested by MEA India if required.'
  }
};