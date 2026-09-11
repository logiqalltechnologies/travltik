export default {
  country: 'egypt',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Egypt in New Delhi',
  channels: [
    'https://visa.mfa.gov.eg/',
    'https://www.vfsglobal.com/egypt/india/',
    'https://www.mfa.gov.eg/embassy/india'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '200 EGP',
    vfsServiceFee: '50 EGP'
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
    stickerSingleDouble: '90 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least two blank pages.',
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
      description: 'Completed online application via the official portal.',
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
      description: 'Coverage for medical expenses and repatriation for the duration of stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed contract between the applicant and the Egyptian employer.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Employer Invitation Letter',
      description: 'Official invitation from the Egyptian employer detailing the position and duration.',
      icon: '📜',
      mandatory: true
    },
    {
      key: 'work_permit',
      title: 'Work Permit',
      description: 'Valid work permit issued by the Egyptian Ministry of Manpower.',
      icon: '🗂️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents including passport, photographs, employment contract, invitation letter, work permit, flight itinerary, accommodation proof, travel insurance, and bank statements.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on the official Egyptian visa portal and upload scanned copies of all documents.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular visa fee (200 EGP) and, if using VFS, the service fee (50 EGP) online or at the designated payment center.'
    },
    {
      step: 4,
      title: 'Schedule Appointment',
      description: 'Book an appointment at the nearest VFS or embassy service center for biometric capture and interview.'
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Present all documents, answer questions, and provide biometric data at the appointment.'
    },
    {
      step: 6,
      title: 'Receive Visa',
      description: 'Collect the stamped passport from the embassy or receive it via courier after processing (15 working days).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa allows multiple entries within a 90‑day validity period. Applicant must carry the employment contract, invitation letter, and work permit at all times.'
  }
};