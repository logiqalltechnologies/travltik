export default {
  country: 'switzerland',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Switzerland in India / State Secretariat for Migration (SEM)',
  channels: [
    'Swiss-Visa Portal (online application)',
    'VFS Global Switzerland Visa Application Centre',
    'Embassy of Switzerland in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '27.50 EUR'
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
      description: 'Must be valid for at least 3 months beyond the planned departure date from the Schengen area, issued within the last 10 years, and contain at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (taken within the last 6 months) measuring 35x45mm, with a solid white background, neutral facial expression, and 70-80% face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Swiss-Visa online application form printout, along with the system-generated PDF confirmation.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit from Switzerland/Schengen territory.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel bookings, hostel reservations, or rental agreements covering the entire duration of the stay in Switzerland and other Schengen countries.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Schengen-compliant travel medical insurance with a minimum coverage of EUR 30,000, valid for the entire Schengen area, covering emergency medical expenses and repatriation.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original personal bank statements for the last 3 months, signed and stamped by the bank, showing sufficient funds (recommended minimum of 100 CHF per day of stay). Income Tax Returns (ITR-V) for the last 2 years must also be provided.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'noc_letter',
      title: 'No Objection Certificate (NOC)',
      description: 'Original leave sanction letter from the employer on company letterhead, signed and stamped, along with salary slips for the last 3 months. For self-employed, business registration documents (GST/Certificate of Incorporation) are required.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form online via the official Swiss-Visa portal, submit it, and print the generated PDF application form.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment online at the nearest VFS Global Switzerland Visa Application Centre to submit your documents and register biometrics.'
    },
    {
      step: 3,
      title: 'Prepare Document Dossier',
      description: 'Gather all required documents, including your passport, photographs, flight itinerary, hotel bookings, travel insurance, bank statements, ITR, and NOC.'
    },
    {
      step: 4,
      title: 'Attend Appointment & Pay Fees',
      description: 'Visit the VFS Centre in person. Submit your physical documents, pay the consular and service fees, and complete your biometric data enrollment (fingerprints and photo).'
    },
    {
      step: 5,
      title: 'Track and Collect Passport',
      description: 'Track your application status online. Once processed, collect your passport with the visa sticker from the VFS Centre or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies. Travelers must carry proof of travel insurance, return flight tickets, and sufficient financial means when crossing the border, as border control officers may request them upon entry.'
  }
};