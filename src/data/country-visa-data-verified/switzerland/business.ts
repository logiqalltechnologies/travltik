export default {
  country: 'switzerland',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Switzerland in India / State Secretariat for Migration (SEM)',
  channels: [
    'Swiss-Visa Portal (swiss-visa.ch)',
    'VFS Global Visa Application Centre',
    'Embassy of Switzerland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'INR 2,910 (approx. 32 EUR)'
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
    stickerSingleDouble: 'Up to 90 days within any 180-day period',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, with at least two blank pages, valid for at least 3 months beyond the planned departure date from the Schengen area.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (taken within the last 6 months) with a white background, neutral facial expression, and 70-80% face coverage. Dimensions must be exactly 35x45mm.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed, dated, and signed Swiss-Visa online application form printed from the official Swiss-Visa portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates from Switzerland and the Schengen territory.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or proof of accommodation provided by the host company in Switzerland covering the entire duration of the stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Travel medical insurance policy valid for all Schengen states, covering medical emergencies, urgent medical care, and repatriation with a minimum coverage of EUR 30,000.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 months (signed and stamped by the bank) showing sufficient funds (minimum CHF 100 per day of stay), and Income Tax Returns (ITR-V) for the last 2 financial years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'business_invitation',
      title: 'Official Business Invitation',
      description: 'Signed invitation letter from the host company in Switzerland on official letterhead, stating the applicant’s details, purpose of visit, duration of stay, and clarifying who will cover the travel and living expenses.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment Proof & NOC',
      description: 'Cover letter from the Indian employer on company letterhead detailing the applicant’s position, salary, years of service, purpose of the business trip, and confirming the No Objection Certificate (NOC). If self-employed, company registration documents (GST/MOA) are required.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application',
      description: 'Fill out the Schengen visa application form online via the official Swiss-Visa portal (swiss-visa.ch), print the completed form, and sign it.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Visa Application Centre for Switzerland in India to submit your documents and biometrics.'
    },
    {
      step: 3,
      title: 'Prepare Document Dossier',
      description: 'Gather all required documents, including the signed application form, official Swiss business invitation, employment NOC, financial statements, and travel insurance.'
    },
    {
      step: 4,
      title: 'Attend Appointment & Pay Fees',
      description: 'Visit the VFS centre on your appointment date. Submit your physical documents, pay the visa fee (90 EUR equivalent in INR) and VFS service fee, and register your biometric data (fingerprints and photo).'
    },
    {
      step: 5,
      title: 'Track & Collect Passport',
      description: 'Track your application status online. Once processed, collect your passport containing the visa sticker from the VFS centre or receive it via secure courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies strictly. Business travelers must carry a copy of their Swiss host invitation letter, proof of accommodation, and valid travel insurance in their hand luggage, as border control officers may request to inspect them upon entry.'
  }
};