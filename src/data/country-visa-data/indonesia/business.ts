export default {
  country: 'indonesia',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Directorate General of Immigration, Ministry of Law and Human Rights Indonesia',
  channels: [
    'Official Molina eVisa Portal (evisa.imigrasi.go.id)',
    'Embassy of the Republic of Indonesia, New Delhi',
    'Consulate General of the Republic of Indonesia, Mumbai'
  ],
  processingTime: {
    eVisa: '3 - 5 working days',
    standardSticker: '5 - 7 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'IDR 1,500,000 (approx. USD 100 / INR 8,300) for C2 Single-Entry; IDR 3,000,000 for D2 1-Year Multiple-Entry',
    stickerConsularStandard: 'USD 100 (Single Entry) / USD 200 (Multiple Entry)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.imigrasi.go.id/',
    territorialScope: 'Nationwide',
    validity: '90 days to enter from issue date (C2 Single Entry) / 1 to 5 years (D2 Multiple Entry)',
    maxStay: '60 days per entry (extendable locally)',
    invitationRequired: true,
    processing: '3 - 5 working days'
  },
  stayDuration: {
    eVisa: '60 days per entry',
    stickerSingleDouble: '60 days',
    stickerMultiple: '60 days per entry'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond intended entry date (18 months for multiple-entry visa) with minimum 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color passport photos (35x45mm), white background, taken within 6 months, neutral expression, without headgear unless religious.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form / Online Registration',
      description: 'Completed and signed visa application form or confirmed online registration draft from the official Molina portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight tickets showing entry and exit dates from Indonesia.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or official invitation stating host residence details during the visit.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Travel insurance covering international emergency medical expenses and hospitalization.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3 months stamped by the bank, demonstrating a minimum balance of USD 2,000 (approx. INR 165,000) or equivalent.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Indonesian Host/Sponsor Guarantee Letter',
      description: 'Official invitation/guarantee letter from the host company in Indonesia detailing the purpose of visit, length of stay, financial guarantee, and host Business Identification Number (NIB) / KTP of authorized representative.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Indian Company Cover Letter',
      description: 'Covering letter from the Indian employer on company letterhead outlining the applicant’s role, business visit objective, itinerary, and financial undertaking.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Business Documentation',
      description: 'Obtain the formal invitation and guarantee letter from the Indonesian counterpart company and a cover letter from your Indian employer.'
    },
    {
      step: 2,
      title: 'Access Molina Official Portal',
      description: 'Visit the official Indonesian Directorate General of Immigration portal at evisa.imigrasi.go.id and create an account or register applicant details.'
    },
    {
      step: 3,
      title: 'Select Visa Category',
      description: 'Choose the appropriate business visa index (e.g., C2 for Single-Entry Business or D2 for Multiple-Entry Business).'
    },
    {
      step: 4,
      title: 'Upload Required Files',
      description: 'Upload bio page of the passport, photo (35x45mm, white background), financial proof, and sponsor invitation letters.'
    },
    {
      step: 5,
      title: 'Pay Visa Fees',
      description: 'Pay the statutory visa fee online using a valid international credit or debit card.'
    },
    {
      step: 6,
      title: 'Receive and Print eVisa',
      description: 'Once approved (typically within 3 to 5 working days), download the eVisa PDF document and print it out prior to travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strictly prohibited from undertaking local gainful employment or receiving salary from an Indonesian entity. Ensure passport has minimum 6 months validity (18 months for multiple-entry) on entry.'
  }
};