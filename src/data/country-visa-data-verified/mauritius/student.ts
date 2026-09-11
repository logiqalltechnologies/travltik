export default {
  country: 'mauritius',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Passport and Immigration Office (PIO), Mauritius',
  externalServiceProvider: 'Mauritius High Commission in New Delhi (direct)',
  channels: [
    'https://passport.govmu.org',
    'Through Registered Tertiary Education Institution (TEI) in Mauritius'
  ],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '15 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: 'MUR 2,000', 
    vfsServiceFee: 'N/A (Processed directly via the educational institution and PIO)' 
  },
  eVisa: { 
    available: false, 
    portal: 'https://immigration.govmu.org/English/Pages/Online-Application.aspx', 
    territorialScope: 'N/A', 
    validity: 'N/A', 
    maxStay: 'N/A', 
    invitationRequired: false, 
    processing: 'N/A' 
  },
  stayDuration: { 
    eVisa: 'N/A', 
    stickerSingleDouble: 'Duration of the academic course (up to 1 year, renewable)', 
    stickerMultiple: 'Duration of the academic course (up to 1 year, renewable)' 
  },
  maxStayDays: 365,
  entryType: 'Multiple Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport valid for at least 6 months beyond the intended period of stay, with at least two blank pages.', 
      icon: '📘', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months, with a white background and neutral facial expression.', 
      icon: '📸', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Application Form', 
      description: 'Completed and signed "Application for a Student Visa" form (Form PIO/STU/01).', 
      icon: '📋', 
      mandatory: true 
    },
    { 
      key: 'admission_letter', 
      title: 'Official Letter of Admission', 
      description: 'Official letter of acceptance from a recognized Tertiary Education Institution (TEI) in Mauritius, detailing the course name, duration, and Higher Education Commission (HEC) accreditation.', 
      icon: '🎓', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Financial Proof', 
      description: 'Evidence of financial capability to meet the costs of study and stay in Mauritius (minimum of USD 2,000 or equivalent per year, or a bank guarantee of MUR 100,000, or a formal sponsorship letter with the sponsor\'s bank statements for the last 3 months).', 
      icon: '🏦', 
      mandatory: true 
    },
    { 
      key: 'medical_certificate', 
      title: 'Medical Certificate', 
      description: 'A certified medical report from a registered medical practitioner in India confirming the applicant is free from infectious diseases. This must include negative test results for HIV, Hepatitis B, and a clear Chest X-ray report for Tuberculosis.', 
      icon: '🏥', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Details of lodging arrangements in Mauritius, such as a tenancy agreement, letter from the landlord, or university hostel confirmation.', 
      icon: '🏨', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Confirmed return or onward air ticket to India or country of origin.', 
      icon: '✈️', 
      mandatory: true 
    },
    { 
      key: 'academic_credentials', 
      title: 'Academic Certificates', 
      description: 'Certified copies of academic transcripts, certificates, and mark sheets (Secondary, Higher Secondary, or Degree certificates).', 
      icon: '📜', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Secure Admission', 
      description: 'Apply to and secure admission from a recognized Tertiary Education Institution (TEI) in Mauritius. Obtain the official Letter of Admission.' 
    },
    { 
      step: 2, 
      title: 'Undergo Medical Examinations', 
      description: 'Visit a registered medical practitioner to undergo tests for HIV, Hepatitis B, and a Chest X-ray. Obtain the certified medical report.' 
    },
    { 
      step: 3, 
      title: 'Prepare and Submit Documents', 
      description: 'Complete the Form PIO/STU/01 and compile all required documents (financial proof, academic transcripts, passport copies). Submit these directly to your host institution in Mauritius.' 
    },
    { 
      step: 4, 
      title: 'Institution Application Processing', 
      description: 'The host institution will submit your application on your behalf to the Passport and Immigration Office (PIO) in Mauritius for clearance.' 
    },
    { 
      step: 5, 
      title: 'Receive Provisional Entry Permit', 
      description: 'Once approved, the PIO will issue a provisional entry permit/visa letter. The institution will forward this letter to you.' 
    },
    { 
      step: 6, 
      title: 'Travel and Final Endorsement', 
      description: 'Travel to Mauritius with your provisional entry permit. Upon arrival, present the permit to immigration officers to receive the final Student Visa/Permit endorsement in your passport.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'A Yellow Fever vaccination certificate is mandatory if arriving from or transiting through an endemic country. Additionally, students must undergo a mandatory local medical check-up in Mauritius within 5 working days of arrival to validate their student visa.' 
  }
};