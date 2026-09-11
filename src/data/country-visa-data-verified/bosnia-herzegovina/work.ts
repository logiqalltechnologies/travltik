export default {
  country: 'bosnia-herzegovina',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of Bosnia and Herzegovina / Embassy of Bosnia and Herzegovina, New Delhi',
  channels: [
    'Embassy of Bosnia and Herzegovina in New Delhi',
    'Service for Foreigners\' Affairs (Služba za poslove sa strancima)'
  ],
  processingTime: {
    eVisa: 'N/A (eVisa not available for work visas)',
    standardSticker: '15–30 working days',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '72 EUR (~₹6,500 INR) for Long Stay Visa D',
    vfsServiceFee: '₹0 (Applications are submitted directly to the Embassy in New Delhi)'
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
    stickerSingleDouble: 'Up to 180 days (Visa D), leading to Temporary Residence Permit',
    stickerMultiple: 'Up to 1 year renewable upon temporary residence registration'
  },
  entryType: 'Single / Multiple Entry (Visa D)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended stay, issued within the last 10 years with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35×45mm)',
      description: 'Two recent color photographs (35×45mm) taken against a white background, neutral expression, no headwear unless religious.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'BiH Visa Application Form',
      description: 'Duly completed and signed Visa D application form for Bosnia and Herzegovina.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Approved Work Permit (Radna Dozvola)',
      description: 'Official Work Permit issued by the relevant Employment Service in Bosnia and Herzegovina and verified by the Service for Foreigners\' Affairs.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract or letter of intent between the employer in BiH and the applicant detailing terms, salary, and job description.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Apostilled/Legalized Police Clearance Certificate issued by Regional Passport Office (RPO) in India, valid within 3 months of application.',
      icon: '⚖️',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Fitness Certificate',
      description: 'Official medical clearance certificate confirming applicant does not suffer from contagious/infectious diseases, issued by an authorized physician.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Lease agreement in Bosnia and Herzegovina or employer-provided housing confirmation certified by local authorities.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Valid travel health insurance with minimum coverage of €30,000 for medical emergencies and repatriation covering the entry period.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Proof of Financial Means',
      description: 'Personal bank statements for the last 6 months stamped by the bank showing sufficient initial funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Work Permit Issuance by BiH Employer',
      description: 'The employer in Bosnia and Herzegovina applies for and obtains an official Work Permit (Radna Dozvola) from the competent Employment Office in BiH.'
    },
    {
      step: 2,
      title: 'Document Legalization & Preparation',
      description: 'Obtain Indian Police Clearance Certificate (PCC) and medical certificate; submit for legal attestation/apostille as required.'
    },
    {
      step: 3,
      title: 'Visa D Submission at Embassy',
      description: 'Schedule an appointment and submit the completed application, supporting documents, work permit, and Visa D fee in cash/bank transfer at the Embassy of Bosnia and Herzegovina in New Delhi.'
    },
    {
      step: 4,
      title: 'Arrival & Temporary Residence Permit',
      description: 'Travel to Bosnia and Herzegovina, register presence with the Service for Foreigners\' Affairs within 48 hours of arrival, and convert Visa D to a Temporary Residence Permit (Privremeni Boravak).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Mandatory registration with the Service for Foreigners\' Affairs (Služba za poslove sa strancima) or local police station within 48 hours of arrival in Bosnia and Herzegovina. The employer must complete the final local registration for the temporary residence permit based on work.'
  }
};