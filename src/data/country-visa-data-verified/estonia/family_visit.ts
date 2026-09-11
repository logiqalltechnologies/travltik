export default {
  country: 'estonia',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of Estonia / Embassy of Estonia in New Delhi',
  channels: [
    'VFS Global Estonia Visa Application Centre',
    'Embassy of Estonia in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '22.30 EUR'
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
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days per 180-day window'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, with minimum 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within the last 6 months) color passport-size photographs with a clear white background, 70-80% face coverage, without borders.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Completed and signed Estonia Schengen visa application form (filled online via the Estonian MFA e-visa system, printed, and signed).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Invitation Letter',
      description: 'Formal letter of invitation from the family member residing in Estonia containing host details, relationship proof, host residence status, and duration of stay.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Family Relationship',
      description: 'Civil status certificates such as birth certificate, marriage certificate, or official family book proving direct relationship to the host in Estonia.',
      icon: 'users',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservations with detailed travel dates and booking reference numbers.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Declaration of host address in Estonia, utility bills/lease agreement of host, or hotel booking if stay is split.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Travel insurance policy covering medical emergencies, hospitalization, and repatriation with a minimum coverage of €30,000, valid for the entire Schengen territory.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Applicant\'s original bank statements for the last 6 months stamped by the bank, Income Tax Returns (ITR-V) for the last 3 years, and payslips for the last 3 months. If sponsored, host guarantee document and host proof of income.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / Occupation',
      description: 'No Objection Certificate (NOC) from current employer mentioning leave approval, salary slips, or business registration documents if self-employed.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Application Form',
      description: 'Fill out the online Estonian Schengen visa application form via the official Ministry of Foreign Affairs portal, print the completed form, and sign it.'
    },
    {
      step: 2,
      title: 'Gather Supporting Documents',
      description: 'Collect all required documents including official invitation, proof of relationship, bank statements, ITR, travel insurance, and flight itinerary.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment & Submit Dossier',
      description: 'Schedule an appointment at the designated VFS Global Estonia Visa Application Centre in India, submit physical documents, submit biometrics, and pay consular and service fees.'
    },
    {
      step: 4,
      title: 'Process and Collect Passport',
      description: 'Track the application status online. Once processed by the Embassy of Estonia in New Delhi, collect your passport in person or via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180-day stay rule. Travel insurance must cover minimum €30,000 for emergency medical treatment and repatriation. Biometrics (fingerprints and photo) are required every 59 months.'
  }
};