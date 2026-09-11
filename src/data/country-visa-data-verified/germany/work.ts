export default {
  country: 'germany',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Federal Foreign Office of Germany (Auswärtiges Amt) / German Missions in India',
  channels: [
    'VIDEX National Visa Portal (Online Application Prep)',
    'VFS Global Germany Visa Application Centre (India)',
    'Embassy of Germany in New Delhi / Consulates General (Mumbai, Bengaluru, Chennai, Kolkata)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 to 90 working days',
    expressSticker: '7 to 15 working days (Fast-Track Skilled Worker Procedure § 81a AufenthG with pre-approval)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '75 EUR',
    vfsServiceFee: 'approx. ₹2,000 - ₹2,700 INR'
  },
  eVisa: {
    available: false,
    portal: 'https://consular-services.diplo.de',
    territorialScope: 'Germany (National Visa Category D)',
    validity: '90 to 180 days (Initial Entry Visa)',
    maxStay: 'Duration of employment contract upon conversion to Residence Permit',
    invitationRequired: true,
    processing: '15 to 90 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A',
    stickerMultiple: '90 to 180 days initial sticker (convertible to multi-year Residence Permit in Germany)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 12 months with at least 2 blank pages, issued within the last 10 years.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Biometric Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) biometric photographs with white background, neutral expression, and compliance with ICAO requirements.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VIDEX National Visa Application Form',
      description: 'Duly filled and signed VIDEX National Visa application form along with the signed Declaration under § 54 (2) No. 8 AufenthG.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'German Employment Contract',
      description: 'Binding employment contract or official job offer signed by both employer in Germany and employee, detailing role, hours, and gross annual compensation.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'declaration_employment',
      title: 'Declaration of Employment Relationship (Erklärung zum Beschäftigungsverhältnis)',
      description: 'Official document filled out and certified by the German employer detailing position profile and compliance with statutory labor standards.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'qualification_proof',
      title: 'Proof of Degree & Qualification Recognition',
      description: 'University degree certificate alongside proof of qualification equivalency in Germany (Anabin database printouts showing H+ institution status or ZAB Statement of Comparability).',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'cv',
      title: 'Professional Curriculum Vitae (CV)',
      description: 'Detailed professional CV outlining complete educational backround and professional work experience.',
      icon: 'user-check',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Incoming Health Insurance Coverage',
      description: 'Proof of incoming travel medical insurance (minimum €30,000 coverage) valid from date of entry until integration into statutory or private German health insurance scheme.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'pre_approval',
      title: 'ZAV Approval or Fast-Track Clearance (If Applicable)',
      description: 'Federal Employment Agency (Bundesagentur für Arbeit / ZAV) pre-approval or § 81a AufenthG Fast-Track Skilled Worker approval issued via employer.',
      icon: 'check-circle',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employment Offer & Qualification Check',
      description: 'Secure a valid employment contract in Germany and confirm academic degree equivalence via the Anabin database or ZAB evaluation.'
    },
    {
      step: 2,
      title: 'Complete VIDEX Form & Employer Declarations',
      description: 'Fill out the online VIDEX National Visa form and secure the completed "Erklärung zum Beschäftigungsverhältnis" from your German employer.'
    },
    {
      step: 3,
      title: 'Book Appointment & Submit Dossier',
      description: 'Schedule a visa appointment at the designated VFS Global Centre or German Consulate in India, submit mandatory documents, register biometrics, and pay the €75 consular fee.'
    },
    {
      step: 4,
      title: 'Receive Visa Sticker & Residence Permit Conversion',
      description: 'Collect your passport with National Visa (Type D) sticker, travel to Germany, complete municipal address registration (Bürgeramt) within 14 days, and convert entry visa to a formal Residence Permit / EU Blue Card at the local Ausländerbehörde.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of a German National Visa (Category D) must complete municipal address registration (Anmeldung at Bürgeramt) within 14 days of arrival in Germany and apply to convert the entry visa into an official Residence Permit (Aufenthaltstitel) or EU Blue Card at the local Foreigners Authority (Ausländerbehörde) prior to visa sticker expiration.'
  }
};