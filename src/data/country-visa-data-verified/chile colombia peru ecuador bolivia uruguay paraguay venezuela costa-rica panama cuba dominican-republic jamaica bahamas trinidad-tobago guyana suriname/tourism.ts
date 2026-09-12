export default {
  country: 'chile, colombia, peru, ecuador, bolivia, uruguay, paraguay, venezuela, costa-rica, panama, cuba, dominican-republic, jamaica, bahamas, trinidad-tobago, guyana, suriname',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministries of Foreign Affairs / Embassies of the respective destination countries in India / Official eVisa Portals (where applicable)',
  channels: [
    'https://www.vfsglobal.com (for Suriname eVisa)',
    'Embassy/Consulate websites for other countries',
    'Official eVisa portals for Colombia, Bolivia, Guyana'
  ],
  processingTime: {
    eVisa: '3-7 working days (varies by country: Bolivia, Suriname 3-5 days; Colombia 5 days; Guyana 5-7 days)',
    standardSticker: '5-20 working days (varies significantly by country; e.g., Cuba 3-5 days, Costa Rica 5-7 days, Dominican Republic 5-10 days, Chile/Peru/Uruguay/Paraguay/Panama/Trinidad & Tobago 10-15 days, Venezuela 15-20 days)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'USD 25-134 (varies by destination country: Guyana USD 25, Bolivia USD 30, Suriname USD 40, Colombia USD 134)',
    stickerConsularStandard: 'USD 25-100 (varies significantly by destination country; e.g., Cuba USD 25, Peru/Venezuela USD 30, Costa Rica USD 32, Trinidad & Tobago USD 40, Uruguay USD 42, Chile/Panama USD 50, Paraguay USD 60-100, Dominican Republic USD 100. Ecuador, Jamaica, Bahamas are visa-free for Indian citizens.)',
    vfsServiceFee: 'USD 10‑20 (if applicable, e.g., Suriname)'
  },
  eVisa: {
    available: 'Varies by country. Available for Colombia, Bolivia, Guyana, Suriname. Not available for Chile, Peru, Uruguay, Paraguay, Venezuela, Costa Rica, Panama, Cuba, Dominican Republic, Jamaica, Bahamas, Trinidad & Tobago. Ecuador, Jamaica, Bahamas are visa-free. Costa Rica, Panama, Dominican Republic are conditionally visa-free (e.g., if holding a valid US/Schengen visa). Cuba requires a Tourist Card.',
    portal: 'Official eVisa portals vary by country: Colombia (https://tramitesmre.cancilleria.gov.co/tramites/enlinea/solicitarVisa.xhtml), Bolivia (https://www.rree.gob.bo/formvisas/), Guyana (https://evisa.gov.gy/), Suriname (https://suriname.vfsevisa.com/)',
    territorialScope: 'Nationwide',
    validity: 'Varies by country (e.g., 30-90 days from date of issue/entry)',
    maxStay: 'Varies by country (e.g., 30-90 days per visit)',
    invitationRequired: false,
    processing: 'Varies by country (see processingTime.eVisa)'
  },
  stayDuration: {
    eVisa: 'Varies by country (e.g., 30-90 days)',
    stickerSingleDouble: 'Varies by country (e.g., 30-90 days)',
    stickerMultiple: 'Varies by country (e.g., 30-90 days)'
  },
  entryType: 'Multiple Entry (where applicable, single entry also common)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended departure date and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online e‑visa application on the official portal of the destination country or physical form for sticker visas.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round‑trip flight reservation (can be a provisional booking).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation, Airbnb confirmation, or invitation letter from a host in the destination country.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to at least USD 30,000 for the entire stay (recommended for all, mandatory for some).',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the trip, along with Income Tax Return (ITR) copy and NOC from employer if employed.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Specific Country Requirements',
      description: 'Visa requirements, fees, and application processes vary significantly by destination country. Verify the latest information on the official embassy/consulate website or eVisa portal for your chosen country.'
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'For eVisa countries, fill the online application. For sticker visa countries, complete the physical form and gather documents for embassy submission.'
    },
    {
      step: 3,
      title: 'Upload/Submit Documents',
      description: 'Attach/submit passport scan, photograph, flight itinerary, accommodation proof, travel insurance, and financial documents as per the specific country checklist.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the visa fee online (for eVisa) or at the embassy/consulate (for sticker visa). Fees are non‑refundable.'
    },
    {
      step: 5,
      title: 'Processing & Approval',
      description: 'Processing times vary from 3-5 working days for some eVisas to 15-20 working days for some sticker visas. You will be notified once approved.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Download and print your e‑visa, or collect your passport with the sticker visa from the embassy/consulate/VFS.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate is mandatory for Bolivia, Ecuador, Peru, Colombia, Venezuela, Guyana, and Suriname. Travelers should carry the International Certificate of Vaccination (ICV). No additional health tests are generally required for stays up to 90 days, but always check specific country health advisories.'
  }
};