export default {
  country: 'malaysia',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Home Affairs (Malaysia Immigration Department)',
  channels: [
    'https://www.immigration.gov.my/',
    'https://malaysiavisa.imi.gov.my/',
    'https://visa.vfsglobal.com/ind/mal/'
  ],
  processingTime: {
    eVisa: '2-3 working days',
    standardSticker: '3-5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '105 MYR',
    stickerConsularStandard: '1,000 INR',
    vfsServiceFee: '2,720 INR'
  },
  eVisa: {
    available: true,
    portal: 'https://malaysiavisa.imi.gov.my/',
    territorialScope: 'Nationwide (For applicants holding a valid VDR Approval Letter)',
    validity: '3 months',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '2-3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '1-5 years (upon Employment Pass endorsement in Malaysia)'
  },
  entryType: 'Single',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended entry date and contain at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'vdr_approval',
      title: 'VDR Approval Letter (Visa With Reference)',
      description: 'Official approval letter issued by the Malaysia Immigration Department / Expatriate Services Division (ESD).',
      icon: '📄',
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
      description: 'Completed online via the official eVisa portal (malaysiavisa.imi.gov.my) or VFS submission.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed flight itinerary to Malaysia.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract / Offer Letter',
      description: 'Signed employment agreement or official appointment letter from the Malaysian employer.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Obtains VDR Approval',
      description: 'Sponsoring employer in Malaysia applies for and obtains the Visa With Reference (VDR) approval letter from the Malaysian Immigration Department (ESD / MYXpats).'
    },
    {
      step: 2,
      title: 'Apply for Single Entry Visa (SEV) / eVisa',
      description: 'Apply online via the official Malaysia eVisa portal (malaysiavisa.imi.gov.my) under the VDR category or submit physical documents through VFS Global.'
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Pay the statutory consular fee and processing fees online or at the VFS application center.'
    },
    {
      step: 4,
      title: 'Receive Visa & Travel',
      description: 'Download approved eVisa (VDR) or collect passport with sticker visa and travel to Malaysia within its 3-month validity.'
    },
    {
      step: 5,
      title: 'Employment Pass Endorsement',
      description: 'Upon arrival in Malaysia, the employer submits the passport to Immigration Department within 30 days to endorse the formal Employment Pass sticker.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The Single Entry Visa (VDR) permits initial entry for up to 30 days. The employer must endorse the full Employment Pass sticker at the Malaysia Immigration Department within 30 days of arrival.'
  }
};