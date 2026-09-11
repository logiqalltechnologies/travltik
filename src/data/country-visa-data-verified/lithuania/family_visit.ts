export default {
  country: 'lithuania',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Republic of Lithuania to New Delhi / Migration Department under the Ministry of the Interior (MIGRIS)',
  channels: ['MIGRIS Information System', 'VFS Global Center', 'Embassy of the Republic of Lithuania'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '15.90 EUR (payable in INR at VFS counter)'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within 6 months) color photos, 35x45mm dimensions, sharp focus, plain white background, showing 70-80% face coverage without headgear unless religious.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly filled and signed Schengen Visa Application Form. Printed from the official portal and signed at designated signature blocks.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'migris_invitation',
      title: 'Official Electronic Invitation (MIGRIS Code)',
      description: 'An official invitation letter approved by the Migration Department of Lithuania via the MIGRIS portal, generated and provided by the host/family member in Lithuania.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official legal documents proving relationship to the host in Lithuania (e.g., Birth Certificate, Marriage Certificate, Family Register, legally translated and apostilled if necessary).',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Confirmed flight reservation detailing entry and exit dates from the Schengen region.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking OR declaration from host verifying accommodation availability stated in the official MIGRIS invitation.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Medical Travel Insurance',
      description: 'Medical insurance policy covering minimum €30,000 for emergency medical treatment and repatriation, valid for all Schengen countries across the entire stay duration.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Income Tax Returns',
      description: 'Original bank statement of the applicant for the past 6 months stamped/signed by bank officials showing sufficient funds, along with Indian Income Tax Returns (ITR-V) for the past 3 assessment years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_noc',
      title: 'Proof of Employment / Occupation',
      description: 'No Objection Certificate (NOC) from employer detailing salary and approved leave, or business registration documents for self-employed applicants.',
      icon: 'document',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Electronic MIGRIS Invitation',
      description: 'Ensure the inviting family member in Lithuania applies for and generates an electronic invitation code through the official MIGRIS system.'
    },
    {
      step: 2,
      title: 'Prepare Application Form and Documents',
      description: 'Complete the Schengen visa application form, gather mandatory documents including proof of family ties, bank statements, ITRs, and travel insurance.'
    },
    {
      step: 3,
      title: 'Schedule and Attend VFS Appointment',
      description: 'Book an appointment at the nearest VFS Global center for Lithuania in India, submit physical documents, pay fees, and enroll biometric data.'
    },
    {
      step: 4,
      title: 'Dossier Tracking and Passport Collection',
      description: 'Track application status online. Upon approval, collect the passport containing the Schengen sticker visa from VFS or via courier service.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Host in Lithuania must lodge the invitation request electronically via the MIGRIS portal. The Schengen 90/180-day limitation rule strictly applies. Travel insurance must cover all Schengen member states with a minimum liability cover of EUR 30,000.'
  }
};