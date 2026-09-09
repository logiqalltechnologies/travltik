export default {
  country: 'Russia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa (Unified eVisa / Sticker Visa)',
  authority: 'Ministry of Foreign Affairs of the Russian Federation (MFA)',
  channels: [
    'Unified eVisa (electronic-visa.kdmid.ru)',
    'Russian Visa Application Centre (VFS Global)',
    'Consular Section of Russian Embassy'
  ],
  processingTime: {
    eVisa: '4 calendar days (Statutory maximum)',
    standardSticker: '10-15 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: 'Approx. 52 USD (~₹4,300 - ₹4,500 INR)',
    stickerConsularStandard: '₹4,000 - ₹6,000 (varies by entry type)',
    vfsServiceFee: 'Applicable for in-person sticker submission'
  },
  eVisa: {
    available: true,
    portal: 'electronic-visa.kdmid.ru',
    territorialScope: 'Entire Russian Federation (Nationwide)',
    validity: '60 calendar days from issue date',
    maxStay: 'Up to 16 calendar days per entry',
    invitationRequired: false,
    processing: '4 calendar days'
  },
  stayDuration: {
    eVisa: 'Up to 16 days',
    stickerSingleDouble: 'Up to 30 days (based on tourist confirmation)',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Valid for at least 6 months beyond exit date with 2 blank pages',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Biometric Passport Photographs (35×45mm)',
      description: 'Recent color photos, white background, 70-80% face coverage',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Consular Electronic Application Form',
      description: 'Complete online at visa.kdmid.ru (Sticker) or electronic-visa.kdmid.ru (eVisa)',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'tourist_voucher',
      title: 'Tourist Voucher & Confirmation',
      description: '⚠️ MANDATORY for Sticker Visa ONLY. Issued by registered Russian tour operator (RTO number required). NOT required for Unified eVisa.',
      icon: '✉️',
      mandatory: false,
      condition: 'Required for Sticker Visa only'
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Verifiable round-trip ticket reservations',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel bookings matching travel dates',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Medical Travel Insurance',
      description: 'Minimum €30,000 coverage across Russian Federation',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Bank Statements (3 Months)',
      description: 'Original stamped statements showing sufficient funds',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / NOC',
      description: 'Employer leave letter + payslips (or business registration)',
      icon: '💼',
      mandatory: false
    },
    {
      key: 'hiv_certificate',
      title: 'HIV/AIDS Test Certificate',
      description: '⚠️ MANDATORY for Work & Student visas (stays >90 days). NOT required for Tourist visa.',
      icon: '🩺',
      mandatory: false,
      condition: 'For Work & Student visas only'
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Select Application Mode',
      description: 'For stays up to 16 days → Unified eVisa. For longer stays → Regular Sticker Visa'
    },
    {
      step: 2,
      title: 'Obtain Documentation',
      description: 'For Sticker Visa: Get Tourist Confirmation from registered Russian tour operator'
    },
    {
      step: 3,
      title: 'Fill Online Application',
      description: 'Complete on electronic-visa.kdmid.ru (eVisa) or visa.kdmid.ru (Sticker)'
    },
    {
      step: 4,
      title: 'Pay Fees / Book Appointment',
      description: 'Pay online for eVisa, or book VFS/Consulate slot for Sticker'
    },
    {
      step: 5,
      title: 'Submit & Biometrics',
      description: 'Upload digital docs for eVisa, or submit physical dossier at VFS'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Download eVisa PDF (within 4 days) or collect stamped passport'
    }
  ],
  specialRequirements: {
    unified_evisa_waiver: '⚠️ No invitation letter or hotel voucher needed for Unified eVisa!',
    HIV_Test: 'Mandatory for Work and Student visas (stays >90 days); NOT for tourist visas',
    registration_rule: 'Foreigners staying >7 working days must register with migration authorities (hotel handles this)'
  }
};
