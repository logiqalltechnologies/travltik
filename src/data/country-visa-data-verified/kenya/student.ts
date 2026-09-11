export default {
  country: 'kenya',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Directorate of Immigration Services, Ministry of Interior and National Administration, Republic of Kenya',
  channels: [
    'https://fns.immigration.go.ke (Electronic Foreign Nationals Services - eFNS)',
    'https://www.etakenya.go.ke (Official Kenya eTA System)',
    'Kenya High Commission, New Delhi',
    'Directorate of Immigration Services Headquarters, Nyayo House, Nairobi'
  ],
  processingTime: {
    eVisa: '15 - 20 working days',
    standardSticker: '20 - 30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'KES 20,000 per year (Official Student Pass fee via eFNS)',
    stickerConsularStandard: 'KES 20,000 per year',
    vfsServiceFee: 'N/A (Direct application via Immigration eFNS portal / Embassy direct)'
  },
  eVisa: {
    available: true,
    portal: 'https://fns.immigration.go.ke',
    territorialScope: 'Nationwide',
    validity: '1 to 2 academic years (renewable)',
    maxStay: '365 days (renewable annually for the duration of the course)',
    invitationRequired: true,
    processing: '15 - 20 working days'
  },
  stayDuration: {
    eVisa: '365 days (renewable annually for study duration)',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 730 days (renewable for multi-year programs)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended period of stay in Kenya, with a minimum of two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent 35x45mm color photograph taken within the last 6 months against a clear white background, full-face frontal view with a neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form (Form 30 / eFNS Student Pass Application)',
      description: 'Completed and signed Student Pass application form submitted online via the Electronic Foreign Nationals Services (eFNS) portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Letter of Admission',
      description: 'Official acceptance/admission letter from a registered and accredited Kenyan educational institution, stating the course title, start date, and program duration.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward travel flight itinerary or airline reservation showing travel dates into Kenya.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Campus hostel allocation letter, signed tenancy agreement, or official letter from the host institution confirming verified student residential arrangements in Kenya.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel and Health Insurance',
      description: 'Comprehensive international medical and travel insurance policy covering medical expenses, hospitalization, and emergency repatriation for the initial study period.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Verifiable proof of sufficient funds: student education loan sanction letter, scholarship award letter, or sponsor/parent bank statements for the last 6 months accompanied by a formal sponsorship affidavit.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original Police Clearance Certificate issued by the Regional Passport Office (RPO) in India, legalized/attested, certifying no criminal history.',
      icon: '⚖️',
      mandatory: true
    },
    {
      key: 'yellow_fever_certificate',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'Valid International Certificate of Vaccination for Yellow Fever, administered at least 10 days before arrival in Kenya.',
      icon: '💉',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'Medical Examination & HIV Clearance',
      description: 'Official medical fitness certificate including HIV serology test results from a recognized medical practitioner, required for long-term residency (>90 days) in Kenya.',
      icon: '🩺',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Admission at an Accredited Kenyan Institution',
      description: 'Obtain an official unconditional letter of acceptance and clearance from a school, college, or university accredited by the Commission for University Education (CUE) or the Ministry of Education in Kenya.'
    },
    {
      step: 2,
      title: 'Create an Account on the eFNS Portal',
      description: 'Register on the Electronic Foreign Nationals Services portal (fns.immigration.go.ke) managed by the Directorate of Immigration Services.'
    },
    {
      step: 3,
      title: 'Submit the Student Pass Application Online',
      description: 'Complete Form 30 (Application for Student Pass) and upload certified scanned copies of your Indian passport, academic credentials, police clearance, admission letter, and financial guarantees.'
    },
    {
      step: 4,
      title: 'Pay Statutory Application & Processing Fees',
      description: 'Pay the prescribed processing fee online via eFNS using an international credit/debit card, and print the official eFNS payment invoice and acknowledgement slip.'
    },
    {
      step: 5,
      title: 'Obtain Entry Authorization (eTA) and Travel to Kenya',
      description: 'Upon receipt of the Student Pass Approval Letter, apply for entry clearance via etakenya.go.ke if arriving before physical endorsement, and carry your Yellow Fever card and health clearance documents.'
    },
    {
      step: 6,
      title: 'Endorse Student Pass at Immigration Headquarters',
      description: 'Present your original passport, approval notification, and institutional cover letter at Nyayo House in Nairobi (or regional immigration office) for biometric verification and final pass issuance.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever Vaccination Certificate is strictly mandatory for all travellers from India entering Kenya. Stays exceeding 90 days require institutional sponsorship endorsement and verified medical fitness/HIV clearance. Non-East African foreign students must register as foreign nationals (Alien Registration) within 90 days of arrival at Nyayo House.'
  }
};