export default {
  country: 'singapore',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Singapore Immigration & Checkpoints Authority (ICA)',
  channels: [
    'https://www.ica.gov.sg/enter-transit-depart/entering-singapore/apply-visa',
    'https://save.ica.gov.sg/save-public/',
    'https://www.mfa.gov.sg/Overseas-Missions/New-Delhi'
  ],
  processingTime: {
    eVisa: '3 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'SGD 30',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'INR 650'
  },
  eVisa: {
    available: true,
    portal: 'https://save.ica.gov.sg/save-public/',
    territorialScope: 'All ports of entry in Singapore',
    validity: 'Up to 2 years (Multiple Journey Visa) or 35 days (Single/Double Journey)',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from the date of arrival in Singapore and have at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photograph (35x45mm)',
      description: 'Taken within the last 3 months, white background, matt or semi-matt finish, 80% face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Form 14A',
      description: 'Duly completed and signed application Form 14A.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight ticket or onward travel itinerary.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or Form V39A (Letter of Introduction) with inviter details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Form V39A / Invitation Letter',
      description: 'Form V39A (Letter of Introduction for Visa Application) signed by a Singapore Citizen or Permanent Resident (Local Contact) aged 21 or above, plus a copy of their NRIC/FIN.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months, recent pay slips, or employment letter showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'covering_letter',
      title: 'Covering Letter',
      description: 'Personal covering letter explaining the purpose of visit, travel dates, and itinerary.',
      icon: '✉️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents & Form 14A',
      description: 'Complete Form 14A, obtain Form V39A from your local contact in Singapore, and collect required supporting documents.'
    },
    {
      step: 2,
      title: 'Submit via Local Contact or Authorized Visa Agent',
      description: 'Submit application online via SAVE through a Singapore Citizen/PR contact (Singpass), or physically through an Authorized Visa Agent (AVA) in India.'
    },
    {
      step: 3,
      title: 'Pay Visa Processing Fee',
      description: 'Pay the non-refundable ICA visa fee of SGD 30 (plus agent service fee if applying via AVA).'
    },
    {
      step: 4,
      title: 'Application Processing',
      description: 'Wait for processing, which typically takes 3 working days (excluding day of submission, weekends, and public holidays).'
    },
    {
      step: 5,
      title: 'Receive & Print e-Visa',
      description: 'Once approved, download and print the electronic visa (e-Visa) PDF.'
    },
    {
      step: 6,
      title: 'Submit SG Arrival Card (SGAC)',
      description: 'Complete the free SG Arrival Card online with health declaration within 3 days prior to arrival in Singapore.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All travelers must submit the SG Arrival Card (SGAC) with Electronic Health Declaration within 3 days before arriving in Singapore. Applications for Indian passport holders cannot be made directly at ICA counters; they must go through the online SAVE system via a Singapore local contact (Singpass) or an Authorized Visa Agent (AVA).'
  }
};