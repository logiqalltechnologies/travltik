export default {
  country: 'moldova',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs (MFA) & General Inspectorate for Migration (IGM)',
  channels: [
    'https://evisa.gov.md',
    'Embassy of the Republic of Moldova in New Delhi',
    'General Inspectorate for Migration (IGM) Direct'
  ],
  processingTime: {
    eVisa: '10 - 15 working days',
    standardSticker: '15 - 30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '€80 (Consular fee) + €10 (IT/Processing fee)',
    stickerConsularStandard: '€80',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.gov.md',
    territorialScope: 'Nationwide',
    validity: '90 to 180 days',
    maxStay: '90 days (must convert to Temporary Residence Permit upon entry)',
    invitationRequired: true,
    processing: '10 - 15 working days'
  },
  stayDuration: {
    eVisa: '90 days initial stay',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days per 180-day period'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended visa expiration date, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color passport photos (35x45mm), taken within the last 6 months against a clear white background with a neutral facial expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Completed and signed Type D long-stay visa application form from the evisa.gov.md portal or Embassy.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'IGM Work Authorization / Permit Notice',
      description: 'Favorable opinion/approval letter issued by the General Inspectorate for Migration (IGM) under the Ministry of Internal Affairs of Moldova.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Duly signed employment agreement with a registered company/employer in Moldova specifying salary, position, and duration.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Official PCC issued by the Ministry of External Affairs / Passport Seva Kendra in India, apostilled or legalized, issued within the last 6 months.',
      icon: '⚖️',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate & HIV Test',
      description: 'Official medical certificate confirming overall health fitness and a negative HIV blood test result (mandatory for stays exceeding 90 days).',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Lease agreement, property deed, or notarized declaration from an employer/host guaranteeing residential accommodation in Moldova.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Valid travel medical insurance covering emergency medical care and repatriation with minimum coverage of €30,000 for the entire visa duration.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3–6 months showing adequate funds, or explicit clause in employment contract confirming employer coverage of subsistence expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary / Travel Ticket',
      description: 'Confirmed flight reservation or itinerary showing intended date of arrival into Moldova.',
      icon: '✈️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Obtains Work Authorization',
      description: 'The sponsoring employer in Moldova submits a request to the General Inspectorate for Migration (IGM) to obtain a work permit/favorable opinion for hiring a foreign national.'
    },
    {
      step: 2,
      title: 'Document Legalization',
      description: 'Obtain a Police Clearance Certificate (PCC) in India, ensure medical examinations including HIV testing are completed, and get necessary documents apostilled or legalized.'
    },
    {
      step: 3,
      title: 'Submit Online Application via eVisa Portal',
      description: 'Visit evisa.gov.md, select Long-Stay Visa (Type D/AM for Employment), fill out the form, and upload scanned copies of all required documents including the IGM work permit.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the statutory consular fee (€80) plus processing fee (€10) online using a credit/debit card.'
    },
    {
      step: 5,
      title: 'Receive Approval and Visa Sticker/eVisa',
      description: 'Upon approval, download the Long-Stay eVisa approval letter or follow instructions to obtain the visa sticker via the Embassy of Moldova in New Delhi if required.'
    },
    {
      step: 6,
      title: 'Travel and Register for Residence Permit',
      description: 'Travel to Moldova and apply for a Temporary Residence Permit (Permis de Şedere) at the General Inspectorate for Migration within 30 days of arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of Type D Employment Visa must apply for a Temporary Residence Permit (Permis de Şedere în Scop de Muncă) at the General Inspectorate for Migration (IGM) in Moldova at least 30 days prior to the expiration of the initial 90-day visa stay. Moldova is NOT a Schengen country.'
  }
};