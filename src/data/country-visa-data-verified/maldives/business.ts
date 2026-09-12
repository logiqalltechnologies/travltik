export default {
  country: 'maldives',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs, Maldives',
  externalServiceProvider: 'Embassy of Maldives (direct)',
  channels: [
    'https://www.immigration.gov.mv/',
    'Embassy of Maldives, New Delhi',
    'Consulate General of Maldives, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '3-5 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '30 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: null,
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  maximumStayDays: 90,
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into the Maldives. Must have at least two blank visa pages.',
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
      title: 'Application Form',
      description: 'Completed and signed visa application form. Must be filled in English or Arabic.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from the Maldivian company or organization. Must include company details, purpose of visit, duration of stay, and contact information.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'company_letter',
      title: 'Employer Letter',
      description: "Letter from the Indian employer confirming the applicant's position, salary, and purpose of business travel. Must be on company letterhead.",
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking or itinerary showing entry and exit dates from the Maldives.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter stating accommodation arrangements in the Maldives.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the stay. ITR (Income Tax Return) for the last 2 years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel insurance covering medical expenses, repatriation, and emergency evacuation for the duration of the stay.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, invitation letter, employer letter, flight booking, accommodation proof, financial proof, and travel insurance.'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents to the Embassy of Maldives in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: "Pay the visa fee of 30 USD in cash or via bank transfer as per the embassy's instructions."
    },
    {
      step: 4,
      title: 'Wait for Processing',
      description: 'Wait for the visa processing which typically takes 3-5 working days. You may be contacted for additional documents or an interview.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker from the embassy or consulate once the application is approved.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa holders are not permitted to engage in any employment or work activities in the Maldives. The visa is strictly for business meetings, negotiations, and conferences. Overstaying is strictly prohibited and may result in fines or deportation.'
  }
};