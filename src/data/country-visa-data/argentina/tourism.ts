export default {
  country: 'argentina',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy and Consulates of the Argentine Republic in India',
  channels: [
    'Official AVE Portal (for US/Schengen Visa holders)',
    'Embassy of the Argentine Republic in New Delhi',
    'Consulate General of the Argentine Republic in Mumbai'
  ],
  processingTime: {
    eVisa: '20 working days',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '200 USD',
    stickerConsularStandard: '0 USD (Gratis for Indian citizens under bilateral agreement)',
    vfsServiceFee: 'N/A (Direct submission to Embassy/Consulate)'
  },
  eVisa: {
    available: true,
    portal: 'https://www.migraciones.gov.ar/ave/index.htm',
    territorialScope: 'Nationwide',
    validity: '3 months from the date of issue',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '20 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of entry into Argentina, containing at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Three recent passport-size photographs (35x45mm), white background, taken within 6 months, neutral expression, front view, without glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Visa application form fully completed in English or Spanish, signed by the applicant. For sticker visas, this must be presented at the interview.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation showing entry and exit dates. Do not purchase actual tickets until the visa is approved.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking for the entire duration of the stay, or an original invitation letter from an Argentine host registered with RENURE (certified by an Argentine Notary Public).',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Travel medical insurance with international coverage of at least 30,000 USD, including coverage for COVID-19 medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 6 months stamped and signed by the bank, showing sufficient funds, along with Income Tax Returns (ITR) for the last 3 years and salary slips for the last 3 months.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'noc_letter',
      title: 'No Objection Certificate (NOC)',
      description: 'Original NOC letter from the employer stating the applicant\'s designation, salary, tenure, and approved leave dates. For business owners, proof of business registration and company bank statements are required.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'travel_itinerary',
      title: 'Day-by-Day Itinerary',
      description: 'A detailed day-by-day travel plan/itinerary in English or Spanish outlining the activities and destinations in Argentina.',
      icon: '🗺️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Determine Eligibility Route',
      description: 'Check if you qualify for the online AVE (Electronic Travel Authorization). Indian passport holders who hold a valid US B1/B2 visa or a Schengen Category C visa can apply online. If you do not hold these, you must apply for a physical sticker visa.'
    },
    {
      step: 2,
      title: 'Prepare the Application Dossier',
      description: 'Gather all required documents, including the completed application form, financial proofs (bank statements, ITR), NOC from your employer, flight itinerary, and hotel bookings.'
    },
    {
      step: 3,
      title: 'Schedule an Interview Appointment',
      description: 'For sticker visas, request an interview appointment by emailing the Embassy of Argentina in New Delhi (for North, East, and South India residents) or the Consulate General in Mumbai (for West India residents) with your scanned passport and details.'
    },
    {
      step: 4,
      title: 'Attend the Personal Interview',
      description: 'Attend the mandatory personal interview at the Embassy or Consulate with all original documents. Note that the tourist visa is gratis (free of charge) for Indian citizens, so no consular fee is collected for the sticker visa.'
    },
    {
      step: 5,
      title: 'Passport Collection',
      description: 'After the interview, the visa processing takes 10 to 15 working days. Once approved, collect your passport with the visa sticker directly or via an authorized representative.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders applying for the AVE (eVisa) must ensure their qualifying US B1/B2 or Schengen Category C visa is valid for at least 3 months beyond their planned departure from Argentina. Yellow Fever vaccination certificate is required only if arriving from or transiting through endemic countries.'
  }
};