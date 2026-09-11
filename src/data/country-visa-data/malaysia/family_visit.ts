export default {
  country: 'malaysia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Immigration Department of Malaysia (Jabatan Imigresen Malaysia)',
  channels: [
    'Malaysia eVISA Portal (https://malaysiavisa.imi.gov.my/)',
    'VFS Global Malaysia Visa Application Centre',
    'High Commission of Malaysia, New Delhi'
  ],
  processingTime: {
    eVisa: '2 - 3 working days',
    standardSticker: '4 - 5 working days',
    expressSticker: '2 - 3 working days'
  },
  fees: {
    eVisaTotal: 'MYR 105 (approx. ₹2,000)',
    stickerConsularStandard: '₹1,000 (Consular Visa Fee)',
    vfsServiceFee: '₹1,850 (VFS Service Fee)'
  },
  eVisa: {
    available: true,
    portal: 'https://malaysiavisa.imi.gov.my/',
    territorialScope: 'Nationwide',
    validity: '3 months from date of issue',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '2 - 3 working days'
  },
  stayDuration: {
    eVisa: 'Up to 30 days',
    stickerSingleDouble: 'Up to 30 days',
    stickerMultiple: 'Up to 30 days per entry'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the intended date of entry into Malaysia, containing at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Studio-quality color photograph (35x45mm) on a plain white background, taken within the last 6 months with a neutral facial expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online eVISA application form or physical IMM.47 form for sticker visa application.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from Host',
      description: 'Formal invitation letter from the relative/host residing in Malaysia, stating full name, connection, address, stay duration, and financial responsibility details.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'host_id',
      title: 'Host ID & Status Proof',
      description: 'Copy of host Malaysian NRIC (MyKad) if a citizen, or passport copy along with valid Employment Pass / Residence Pass if a foreign resident.',
      icon: '🪪',
      mandatory: true
    },
    {
      key: 'relationship_proof',
      title: 'Proof of Family Relationship',
      description: 'Official documentary proof of relationship (e.g., Birth Certificate, Marriage Certificate, or household registration).',
      icon: '👨‍👩‍👧',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward airline ticket showing entry and exit dates from Malaysia.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3 months duly stamped/certified by the bank, demonstrating minimum balance of ₹80,000 (~$1,000 USD) per applicant.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Address proof of the host in Malaysia (utility bill or tenancy agreement) or confirmed hotel bookings if staying outside host home.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'mdac',
      title: 'Malaysia Digital Arrival Card (MDAC)',
      description: 'Mandatory online registration completed within 3 days prior to arrival in Malaysia.',
      icon: '📱',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Collect Host & Relationship Documents',
      description: 'Obtain invitation letter, host ID/Pass copy, proof of relationship, host utility bill, and your bank statements.'
    },
    {
      step: 2,
      title: 'Apply via Official eVISA Portal',
      description: 'Create an account on the official Malaysia eVISA portal (malaysiavisa.imi.gov.my) or schedule an appointment at VFS Global for sticker visa submission.'
    },
    {
      step: 3,
      title: 'Submit Application & Pay Fees',
      description: 'Fill out details, upload digital photograph and document scans, and pay fee using online payment gateway or at VFS counter.'
    },
    {
      step: 4,
      title: 'Visa Processing',
      description: 'Application is reviewed by Malaysian Immigration within 2 to 3 working days. Once approved, download and print the eVISA PDF.'
    },
    {
      step: 5,
      title: 'Fill MDAC Before Arrival',
      description: 'Complete the Malaysia Digital Arrival Card (MDAC) online within 3 days before travel and keep physical copies for border entry.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All travelers must submit the Malaysia Digital Arrival Card (MDAC) within 3 days prior to arrival. Although Indian passport holders currently have access to a 30-day visa-exempt entry scheme for tourism, obtaining a formal Social Visit / Family Visit eVISA provides explicit documentation when visiting family members or when required for extension evaluation by Immigration officers.'
  }
};