export default {
  country: 'oman',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Royal Oman Police (ROP)',
  channels: [
    'https://evisa.rop.gov.om',
    'Embassy of the Sultanate of Oman, New Delhi'
  ],
  processingTime: {
    eVisa: '2-4 working days',
    standardSticker: '5-7 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '20 OMR',
    stickerConsularStandard: '20 OMR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.rop.gov.om',
    territorialScope: 'Nationwide',
    validity: '6 months from approval',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '2-4 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay date.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Digital digital photo with a white background, taken within 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'sponsor_documents',
      title: 'Sponsor Resident Card & Passport',
      description: 'Copy of valid Civil ID / Resident Card and passport of the host family member living in Oman.',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Relationship',
      description: 'Attested marriage certificate or birth certificate proving family relationship to the Oman resident/sponsor.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return or onward flight reservation.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation / Host Undertaking',
      description: 'Host address details in Oman or hotel booking.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Required Documents',
      description: 'Gather applicant passport, photo, sponsor Resident Card copy, and attested proof of relationship.'
    },
    {
      step: 2,
      title: 'Submit Application Online',
      description: 'Log in or register on the official Royal Oman Police eVisa portal (https://evisa.rop.gov.om) and select Sponsored/Family Visit Visa.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the statutory visa fee of 20 OMR using a credit or debit card.'
    },
    {
      step: 4,
      title: 'Receive Approved eVisa',
      description: 'Download and print the approved Family Visit eVisa sent via email.'
    },
    {
      step: 5,
      title: 'Travel to Oman',
      description: 'Present the printed eVisa along with your original passport and document copies upon arrival at immigration.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Family Visit Visa requires sponsorship from an Omani citizen or an expatriate resident in Oman with valid residence status.'
  }
};