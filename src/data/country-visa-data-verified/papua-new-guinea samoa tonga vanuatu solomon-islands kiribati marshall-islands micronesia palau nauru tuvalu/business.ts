export default {
  country: 'papua-new-guinea samoa tonga vanuatu solomon-islands kiribati marshall-islands micronesia palau nauru tuvalu',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Immigration and Citizenship Authorities of the Respective Pacific Island Nations',
  channels: [
    'Official eVisa Portals (PNG / Solomon Islands)',
    'Consular Direct / Email Submission (Kiribati, Nauru)',
    'Visa on Arrival / Entry Permit Counter (Samoa, Tonga, Vanuatu, Palau, Tuvalu, Micronesia, Marshall Islands)'
  ],
  processingTime: {
    eVisa: '5 to 10 working days',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'PNG: USD 190 (Single Entry Business) / USD 500 (Multiple Entry Business); Solomon Islands: SBD 1000 (approx. USD 120)',
    stickerConsularStandard: 'Kiribati: AUD 40; Nauru: AUD 100; Marshall Islands VoA: USD 100; Tuvalu VoA: AUD 100; Samoa, Tonga, Vanuatu, Palau, Micronesia: Free on arrival',
    vfsServiceFee: 'N/A (Direct government / embassy submission)'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.ica.gov.pg/ (PNG eVisa) | https://solomons.gov.sb/ (Solomon Islands)',
    territorialScope: 'Nationwide',
    validity: '30 to 90 days depending on the specific country',
    maxStay: '30 days (PNG, Solomon Islands)',
    invitationRequired: true,
    processing: '5 to 10 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days (Kiribati, Nauru, Tonga, Vanuatu, Palau, Tuvalu, Micronesia, Marshall Islands)',
    stickerMultiple: '60 days (Samoa)'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity beyond the intended stay and a minimum of two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm size, white background, taken within the last 6 months, neutral expression, showing 80% face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form specific to the destination country (or online eVisa application confirmation).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'business_invitation',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from the host company in the destination country, detailing the purpose of the visit, duration of stay, and financial responsibility for the traveler.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter / Dispatch Letter',
      description: 'Original letter from the Indian employer on company letterhead, stating the applicant’s designation, purpose of travel, duration of stay, and guaranteeing return to India.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight tickets showing entry and exit from the destination country.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or a letter of sponsorship from the host company confirming accommodation arrangements.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal and company bank statements for the last 3 months, showing sufficient funds, along with the latest Income Tax Returns (ITR).',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Determine Destination Requirements',
      description: 'Identify the specific entry pathway for your destination: PNG and Solomon Islands require eVisa; Samoa, Tonga, Vanuatu, Palau, Tuvalu, Micronesia, and Marshall Islands offer Visa on Arrival/Permit on Arrival for business; Kiribati and Nauru require pre-arranged sticker visas.'
    },
    {
      step: 2,
      title: 'Gather Business Documentation',
      description: 'Obtain the official business invitation letter from the host entity in the destination country and the dispatch letter from your Indian employer.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'For eVisa countries, upload documents to the official portal and pay the fee. For Visa on Arrival countries, prepare a physical folder with all required documents to present at border control. For sticker visas, submit documents to the designated embassy or honorary consulate.'
    },
    {
      step: 4,
      title: 'Await Processing',
      description: 'Wait for the processing period (typically 5 to 10 working days for eVises and sticker visas). Ensure all contact details are correct in case clarification is needed.'
    },
    {
      step: 5,
      title: 'Receive Visa and Travel',
      description: 'Download the approved eVisa/Permit or collect your passport with the visa sticker. Carry physical copies of all supporting documents, including the invitation letter and return ticket, to present to immigration officers upon arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate is mandatory if arriving from or transiting through an endemic country. Business travelers must not engage in local employment or receive direct local salary during their stay. Ensure passport validity is strictly over 6 months from the date of entry.'
  }
};