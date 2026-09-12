export default {
  country: 'papua-new-guinea samoa tonga vanuatu solomon-islands kiribati marshall-islands micronesia palau nauru tuvalu',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Immigration Departments of the Respective Pacific Island Nations',
  channels: [
    'Direct Submission to Respective Immigration Departments',
    'Respective High Commissions and Embassies (Embassy direct)',
    'Direct Submission via Sponsoring Educational Institutions'
  ],
  processingTime: {
    eVisa: '10 to 20 working days (where online portals are available, e.g., Papua New Guinea)',
    standardSticker: '15 to 45 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'Varies by country (e.g., Papua New Guinea is approx. 250 PGK / 70 USD)',
    stickerConsularStandard: 'Varies by country (typically 50 USD to 250 USD depending on the nation)',
    vfsServiceFee: 'N/A (Embassy direct / Direct submission to respective Immigration Departments)'
  },
  eVisa: {
    available: false,
    portal: 'N/A (Papua New Guinea eVisa portal is available at https://evisa.ica.gov.pg/)',
    territorialScope: 'Nationwide',
    validity: 'Duration of study program (typically 12 months, renewable)',
    maxStay: '365 days (renewable annually)',
    invitationRequired: true,
    processing: '15 to 20 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '365 days (renewable)',
    stickerMultiple: '365 days (renewable)'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Must be valid for at least 6 months beyond the intended period of stay in the destination country, with at least two blank pages for visa endorsement.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months against a plain white background, showing a neutral facial expression and full face.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Student Visa/Permit application form specific to the destination country (e.g., PNG Form 1, or respective national immigration forms).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Admission Letter',
      description: 'An official letter of acceptance or enrollment from a registered and recognized educational institution in the destination country, detailing the course name, duration, and tuition fees.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Evidence of sufficient funds to cover tuition fees and living expenses. This must include an approved education loan sanction letter, bank statements of the student or sponsor for the last 6 months, or a scholarship award letter.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'Medical Examination Report',
      description: 'A comprehensive medical certificate issued by an authorized medical practitioner, including a chest X-ray (TB clearance) and an HIV test result, which is mandatory for stays exceeding 90 days.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'A valid Police Clearance Certificate (PCC) issued by the Regional Passport Office (RPO) in India, authenticated or apostilled, required for long-term student residency.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'A confirmed round-trip or onward flight booking, or a formal repatriation guarantee/bond provided by the host educational institution.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Evidence of pre-arranged accommodation, such as a university hostel booking confirmation, a residential rental agreement, or a letter of sponsorship from a local resident.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Admission',
      description: 'Apply to and secure an official letter of acceptance from a recognized educational institution in the destination Pacific country.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents, including the medical report (with HIV/TB clearance), Police Clearance Certificate (PCC), and financial proof (education loan/bank statements).'
    },
    {
      step: 3,
      title: 'Complete Application Form',
      description: 'Download and complete the specific Student Visa/Permit application form for the destination country.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the required visa/permit application fee as specified by the respective country\'s immigration department.'
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Submit the application package directly to the country\'s Immigration Department (often via email/online portal or through the sponsor/institution) or to the nearest High Commission/Embassy (Embassy direct).'
    },
    {
      step: 6,
      title: 'Receive Visa/Permit',
      description: 'Once approved, receive the Student Visa/Permit (either as an eVisa/approval letter to be stamped on arrival or as a physical sticker in the passport).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Students must hold a valid medical clearance certificate (including HIV and TB tests) for stays exceeding 90 days. A Police Clearance Certificate (PCC) from India is mandatory. Many Pacific nations require a repatriation bond or a guarantee from the host educational institution to cover return travel. Yellow Fever vaccination certificate is required only if arriving from or transiting through an endemic country.'
  }
};