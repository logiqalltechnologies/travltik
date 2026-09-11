export default {
  country: 'malta',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Central Visa Unit (CVU) / High Commission of Malta in New Delhi',
  channels: ['VFS Global', 'High Commission of Malta'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 to 30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR (approx. ₹8,100)',
    vfsServiceFee: '30 EUR (approx. ₹2,700)'
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
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm), taken within the last 6 months against a white background, showing 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Fully completed and signed Schengen visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Host Invitation & Official Declaration of Proof',
      description: 'Signed invitation letter from the host in Malta along with a formal Declaration of Proof endorsed by the Maltese authorities, plus host’s Maltese ID or residence permit copy.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Official documentation establishing relationship to host (e.g., birth certificate, marriage certificate, or legal family registry attested as required).',
      icon: 'users',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary showing travel dates into and out of Malta/Schengen zone.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Host confirmation stating accommodation provided at their address, or hotel reservations if staying elsewhere during the trip.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen-compliant travel health insurance with minimum coverage of €30,000 covering emergency medical, hospitalization, and repatriation expenses.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 6 months stamped/signed by the bank, along with Income Tax Returns (ITR) for the last 3 years and salary slips (last 3 months) if employed.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'noc_letter',
      title: 'No Objection Certificate (NOC)',
      description: 'NOC from current employer granting leave, or proof of business registration if self-employed, or student ID/sanction letter if studying.',
      icon: 'file-text',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Application Dossier',
      description: 'Fill out the official Schengen application form and collect all required documents, host invitation, and proof of family ties.'
    },
    {
      step: 2,
      title: 'Book Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Malta Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Submit Biometrics & Dossier',
      description: 'Attend the appointment to submit physical documents, record biometric data (fingerprints and photo), and pay consular and service fees.'
    },
    {
      step: 4,
      title: 'Processing and Collection',
      description: 'Track the application online. Once processed by the Central Visa Unit/High Commission, collect the passport with the visa sticker from VFS or via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day rule applies strictly across all member states. First point of entry or main destination must be Malta. The host in Malta may be required to sign an official Declaration of Proof registered with the Central Visa Unit (CVU).'
  }
};