export default {
  country: 'moldova',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of the Republic of Moldova',
  channels: ['Official Portal', 'Embassy / Consulate'],
  processingTime: {
    eVisa: '10 calendar days',
    standardSticker: '10-15 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: '€60 (€40 consular fee + €20 processing fee)',
    stickerConsularStandard: '€40',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.md',
    territorialScope: 'Nationwide',
    validity: 'Up to 90 days',
    maxStay: '90 days within a 180-day period',
    invitationRequired: false,
    processing: '10 working days'
  },
  stayDuration: {
    eVisa: 'Up to 90 days within 180 days',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Valid for at least 3 months beyond the intended departure date from Moldova, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent (taken within the last 6 months) color photograph with a plain white background.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed application submitted via the official eVisa portal (evisa.gov.md).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservation or official voucher covering the entire duration of stay.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Medical insurance policy valid in Moldova with minimum coverage of €30,000 for emergency medical costs.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 months showing sufficient funds (minimum €30 per day of stay, but not less than €300 total).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns',
      description: 'ITR acknowledgement or tax returns for the last 1–2 assessment years showing financial stability.',
      icon: 'file',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Requirements',
      description: 'Ensure passport validity, photo specifications, and gather mandatory financial and travel proof.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Access the official Moldovan eVisa portal (evisa.gov.md) and fill out the Tourist Visa (Type C/TS) application.'
    },
    {
      step: 3,
      title: 'Upload Documents & Pay Fee',
      description: 'Upload required scanned documents and pay the consular fee (€40) plus system fee (€20) via credit/debit card.'
    },
    {
      step: 4,
      title: 'Receive eVisa Approval',
      description: 'Track application status online. Upon approval within 10 calendar days, download and print the PDF eVisa for presentation at border control.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals holding a valid visa or residence permit issued by an EU/Schengen member state, USA, UK, or Canada are exempt from certain invitation requirements if applicable. Standard tourist applicants must carry printed copies of their eVisa, health insurance, hotel booking, and bank statements upon entry.'
  }
};