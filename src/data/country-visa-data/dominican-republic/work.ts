export default {
  country: 'dominican-republic',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of the Dominican Republic in New Delhi',
  channels: [
    'https://www.dominicanrepublic.gov.do/visa',
    'https://www.vfsglobal.com/Dominican_Republic/India',
    'https://www.dominicanrepublic.gov.do/embassy'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: '7 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: 'INR 2300'
  },
  eVisa: {
    available: false,
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '60 days',
    stickerMultiple: '60 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least one blank page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the official portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Return flight booking or proof of onward travel.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or employer-provided accommodation details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Insurance covering medical expenses and repatriation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Work Permit',
      description: 'Official work permit issued by the Dominican Republic Ministry of Labor.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed contract between employer and employee outlining job role and salary.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'employer_invitation',
      title: 'Invitation Letter',
      description: 'Letter from the employer confirming employment and sponsorship.',
      icon: '📩',
      mandatory: true
    },
    {
      key: 'proof_of_qualification',
      title: 'Proof of Qualification',
      description: 'Degree certificates or professional qualifications relevant to the job.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Certificate of good conduct issued by the Indian authorities.',
      icon: '🔒',
      mandatory: true
    },
    {
      key: 'health_insurance',
      title: 'Health Insurance',
      description: 'Health insurance covering the duration of stay in the Dominican Republic.',
      icon: '🩺',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents including passport, photographs, work permit, employment contract, and financial proof.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on the official portal and upload scanned copies of documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (100 USD) and VFS service fee (INR 2300) online.'
    },
    {
      step: 4,
      title: 'Schedule Appointment',
      description: 'Book an appointment at the VFS Global service center or the embassy for biometric capture and interview.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Present documents, answer questions, and provide biometric data at the appointment.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect the visa sticker from the embassy or receive it by mail if applicable.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa requires employer sponsorship, a valid work permit, and an employment contract. No entry allowed without these documents. HIV test required for stays exceeding 90 days.'
  }
};