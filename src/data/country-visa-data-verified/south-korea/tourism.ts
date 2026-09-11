export default {
  country: 'south-korea',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Republic of Korea in New Delhi / Consulate General in Mumbai and Chennai',
  channels: [
    'VFS Global South Korea Visa Application Centre',
    'Official Korea Visa Portal (for tracking and visa grant notice download)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 to 7 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 3,200',
    vfsServiceFee: 'INR 1,380'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: '30 days per entry (within 1, 3, or 5 years validity)'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of arrival in South Korea, containing at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a solid white background, with a neutral facial expression and 80% face coverage. No headgear except for religious purposes.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Fully completed and signed Visa Application Form (Form No. 17). All fields must be filled accurately in block letters.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight ticket reservation showing entry and exit dates from South Korea.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or voucher for the entire duration of the stay in South Korea, matching the travel dates.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Highly recommended (though not strictly mandatory for tourist visas) to cover medical emergencies, hospitalization, and repatriation during the stay.',
      icon: '🛡️',
      mandatory: false
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 6 months, certified with the bank stamp and signature, showing a healthy balance (minimum INR 1,50,000 to 2,00,000 recommended). Income Tax Returns (ITR) for the last 1 to 2 years must also be submitted.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment Proof & NOC',
      description: 'For salaried employees: Original No Objection Certificate (NOC) on company letterhead with official seal and signature, along with salary slips for the last 3 months. For self-employed: Business registration certificate/GST certificate and company bank statements.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents, including the completed visa application form, original bank statements, ITR, employment proof, and passport-sized photographs.'
    },
    {
      step: 2,
      title: 'Book an Appointment',
      description: 'Schedule an appointment online through the VFS Global portal to submit your physical application at the nearest South Korea Visa Application Centre.'
    },
    {
      step: 3,
      title: 'Submit Application and Pay Fees',
      description: 'Visit the VFS Global center on your appointment date. Submit your physical passport, application form, and supporting documents. Pay the consular fee and VFS service fee.'
    },
    {
      step: 4,
      title: 'Track Application Status',
      description: 'Track the progress of your application online using the VFS tracking tool or the official Korea Visa Portal using your passport number.'
    },
    {
      step: 5,
      title: 'Download Visa Grant Notice',
      description: 'Once approved, South Korea issues a paperless "Visa Grant Notice" instead of a physical sticker. Download and print this notice from the official Korea Visa Portal to present at immigration.'
    }
  ],
  specialRequirements: {
    entry_rules: 'South Korea has transitioned to paperless visas for Indian applicants. No physical sticker is pasted in the passport. Travelers must carry a printed copy of the "Visa Grant Notice" downloaded from the official Korea Visa Portal (www.visa.go.kr) along with their physical passport when traveling.'
  }
};