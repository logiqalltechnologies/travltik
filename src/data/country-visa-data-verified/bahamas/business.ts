export default {
  country: 'bahamas',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs, Bahamas',
  channels: [
    'https://mofa.gov.bs/evisa-online-services/',
    'https://www.bahamas.gov.bs'
  ],
  processingTime: {
    eVisa: '7-10 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'USD 110',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://mofa.gov.bs/evisa-online-services/',
    territorialScope: 'All ports of entry in The Bahamas',
    validity: '1 year (Multiple Entry) / 3 months (Single Entry)',
    maxStay: '90 days',
    invitationRequired: true,
    processing: '7-10 working days'
  },
  stayDuration: {
    eVisa: '90 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport biographical page scan, valid for at least 6 months beyond the intended departure date from The Bahamas.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Digital Passport Photograph',
      description: 'Recent digital passport-style photo with a plain white or light-coloured background taken within the last 6 months.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Online Application Form',
      description: 'Completed electronic application submitted via the official Bahamas eVisa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward travel flight itinerary showing intended arrival and departure dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or lodging details in The Bahamas for the duration of the stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements demonstrating sufficient financial resources to cover all expenses during the visit.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from the host organization in The Bahamas stating the business purpose, duration, and contact details.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'company_documents',
      title: 'Employer / Company Letter',
      description: 'Covering letter from the Indian employer confirming employment status, purpose of travel, and financial sponsorship.',
      icon: '🏢',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Prepare digital copies of your passport, photo, business invitation letter, financial proofs, and travel itinerary.'
    },
    {
      step: 2,
      title: 'Access Official eVisa Portal',
      description: 'Navigate to the Bahamas Ministry of Foreign Affairs eVisa portal (https://mofa.gov.bs/evisa-online-services/) and create an applicant account.'
    },
    {
      step: 3,
      title: 'Complete Online Application',
      description: 'Fill in the online business visa application form and upload all requested supporting documents.'
    },
    {
      step: 4,
      title: 'Pay Statutory Consular Fee',
      description: 'Pay the non-refundable visa fee (USD 110 for multiple entry or USD 100 for single entry) securely online via credit card.'
    },
    {
      step: 5,
      title: 'Await Processing',
      description: 'The Ministry processes applications within 7 to 10 working days. Monitor application status through the portal.'
    },
    {
      step: 6,
      title: 'Receive and Print eVisa',
      description: 'Once approved, download and print the official Bahamas electronic visa confirmation to present at border control upon entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders holding a valid visa issued by the USA, Canada, the United Kingdom, or a Schengen Member State may obtain a visa upon arrival in The Bahamas for stays up to 90 days. All other Indian nationals must obtain an eVisa prior to travel. Maximum stay is determined by Bahamas Immigration at port of entry (typically up to 90 days).'
  }
};