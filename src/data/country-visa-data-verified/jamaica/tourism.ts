export default {
  country: 'jamaica',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Jamaica Passport, Immigration and Citizenship Agency (JPICA)',
  channels: [
    'https://www.enterjamaica.com',
    'N/A (No VFS/BLS/TLS/GVCW Service Center)',
    'Jamaica High Commission, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Jamaica. Must have at least two blank pages for immigration stamps.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'C5 Immigration Form',
      description: 'Mandatory C5 Immigration Form completed online at enterjamaica.com before boarding. A printed copy or digital confirmation must be presented to airline staff and immigration officers.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking showing entry and exit dates within the 30-day visa-free period.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation confirmation for the entire duration of stay or a letter of invitation from a host in Jamaica with their passport copy.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance covering medical expenses, repatriation, and emergency evacuation for the duration of the stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the stay. Income Tax Returns (ITR) and No Objection Certificate (NOC) if applicable for employed individuals.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete C5 Form',
      description: 'Visit enterjamaica.com and fill out the C5 Immigration Form online. Ensure all details match your passport exactly.'
    },
    {
      step: 2,
      title: 'Print Confirmation',
      description: 'Print the C5 form confirmation page or save the digital QR code/barcode to present to airline check-in staff.'
    },
    {
      step: 3,
      title: 'Prepare Documents',
      description: 'Gather passport, photographs, flight itinerary, accommodation proof, travel insurance, and financial documents.'
    },
    {
      step: 4,
      title: 'Board Flight',
      description: 'Present passport and C5 form confirmation to airline staff during check-in. No visa stamp is required prior to travel.'
    },
    {
      step: 5,
      title: 'Immigration Check',
      description: 'Upon arrival in Jamaica, present passport and C5 form to immigration officers. You will be granted a 30-day visa-free stay.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Visa-free entry for 30 days for tourism. C5 immigration form at enterjamaica.com is mandatory before boarding. No visa application or fee is required prior to travel.'
  }
};