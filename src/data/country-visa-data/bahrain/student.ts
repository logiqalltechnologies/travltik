export default {
  country: 'bahrain',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Nationality, Passports and Residence Affairs (NPRA) - Ministry of Interior, Kingdom of Bahrain',
  channels: [
    'NPRA E-Services Portal (Submitted by Sponsor/University)',
    'Embassy of the Kingdom of Bahrain, New Delhi',
    'Consulate General of the Kingdom of Bahrain, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'BHD 29 (Approx. INR 6,400 - NPRA issuance fee)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'https://www.evisa.gov.bh/',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '1 Year (Renewable annually)',
    stickerMultiple: '1 Year (Renewable annually)'
  },
  entryType: 'Single Entry for initial entry (converted to multiple entry Residence Permit upon arrival)',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from entry date with minimum 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent 35x45mm color photograph with white background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed NPRA Student Visa Application Form supplied by the host institution or Bahrain Embassy.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Acceptance Letter',
      description: 'Unconditional admission letter from an educational institution in Bahrain accredited by the Higher Education Council (HEC).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'attested_certificates',
      title: 'Attested Educational Certificates',
      description: 'Highest academic degree/marksheets attested by the HRD, Ministry of External Affairs (MEA) India, and Bahrain Embassy.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'WAFID (GAMCA) Medical Fitness Certificate',
      description: 'Medical fitness report from an accredited WAFID/GAMCA clinic in India including HIV, Hepatitis B/C, and Chest X-ray clearance for long-term residency.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Police Clearance Certificate issued by the Passport Seva Kendra / Ministry of External Affairs, India.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the past 6 months of student/sponsor or sanctioned education loan proof demonstrating capability to cover tuition and living costs.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'One-way or return flight reservation to Bahrain International Airport (BAH).',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'University hostel allotment letter or formal lease agreement in Bahrain.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Accredited Admission',
      description: 'Secure admission to an accredited university or higher educational institution in the Kingdom of Bahrain.'
    },
    {
      step: 2,
      title: 'Attest Documents & Obtain PCC',
      description: 'Complete document attestation for your degree certificates and PCC via State HRD, MEA India, and Bahrain Embassy.'
    },
    {
      step: 3,
      title: 'Pass WAFID Medical Check',
      description: 'Complete the compulsory medical examination at an authorized WAFID (GAMCA) center in India.'
    },
    {
      step: 4,
      title: 'Sponsor Submits Application',
      description: 'The educational institution in Bahrain submits the visa application to the Nationality, Passports and Residence Affairs (NPRA).'
    },
    {
      step: 5,
      title: 'Travel to Bahrain',
      description: 'Upon receiving the NPRA approval / No Objection Certificate, travel to Bahrain.'
    },
    {
      step: 6,
      title: 'Residence Permit & CPR Issuance',
      description: 'Complete local medical screening and biometric registration in Bahrain to receive the CPR card and long-term Student Residence Permit.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Student visas require direct sponsorship from a recognized educational institution in Bahrain. Final student residency is conditional upon passing the local medical check in Bahrain and enrolling for the CPR identity card.'
  }
};