export default {
  country: 'south-korea',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Republic of Korea in New Delhi',
  channels: [
    'VFS Global South Korea Visa Application Centre',
    'Consulate General of the Republic of Korea (Mumbai/Chennai/Kolkata)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 to 10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 3,200',
    vfsServiceFee: 'INR 1,145'
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
    stickerMultiple: 'Up to 90 days per entry'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of entry and minimum 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs taken within the last 6 months, white background, neutral expression, matte finish, showing 80% face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Fully completed and signed Visa Application Form (Form No. 17). Hand-written or typed in block letters.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Original or scanned copy of the invitation letter from the host in South Korea, detailing the relationship, purpose, and duration of stay, signed by the inviter.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'inviter_id',
      title: 'Inviter Identity Proof',
      description: 'Copy of the inviter’s Alien Registration Card (ARC) or Resident Registration Card, and passport bio-data page.',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Proof of Relationship',
      description: 'Official government-issued documents proving relationship with the inviter (e.g., Birth Certificate, Marriage Certificate, or Family Register Certificate).',
      icon: '👥',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or itinerary showing entry and exit dates from South Korea.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Details of the inviter’s residential address in South Korea where the applicant will stay, or hotel booking confirmation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Applicant’s personal bank statements for the last 6 months with original bank seal and signature, along with Income Tax Returns (ITR) for the last 1 to 2 years.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'noc_letter',
      title: 'No Objection Certificate (NOC)',
      description: 'Leave sanction letter and NOC from the employer on company letterhead (if employed), or business registration proof (if self-employed).',
      icon: '🏢',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Application Documents',
      description: 'Gather all required documents, including the visa application form, passport, photos, financial proofs, and the specific invitation documents from your family member in South Korea.'
    },
    {
      step: 2,
      title: 'Book an Appointment',
      description: 'Schedule an appointment online through the VFS Global South Korea Visa Application Centre portal corresponding to your jurisdiction (Delhi, Mumbai, Kolkata, or Chennai).'
    },
    {
      step: 3,
      title: 'Submit Application and Pay Fees',
      description: 'Visit the designated VFS Global center on your appointment date. Submit your physical documents, passport, and pay the consular fee (INR 3,200) and VFS service fee (INR 1,145) in cash or card.'
    },
    {
      step: 4,
      title: 'Track Application Status',
      description: 'Track your application status online using the Korea Visa Portal or the VFS tracking tool using your reference number.'
    },
    {
      step: 5,
      title: 'Retrieve Passport and Visa Grant Notice',
      description: 'Once processed, collect your passport from the VFS center or receive it via courier. South Korea issues a paperless "Visa Grant Notice" which must be printed and carried along with your passport.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All travelers must print and carry the physical "Visa Grant Notice" issued by the Korean government, as physical visa stickers are no longer affixed to passports. Ensure your inviter’s Alien Registration Card (ARC) is valid at the time of your entry.'
  }
};