export default {
  country: 'fiji',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Fiji Immigration Department',
  externalServiceProvider: 'VFS Global',
  channels: [
    'https://www.immigration.gov.fj',
    'https://www.vfsglobal.com/Fiji/India',
    'https://www.fijiembassy.gov.in'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: '7 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'FJD 200',
    vfsServiceFee: 'FJD 50'
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
    stickerSingleDouble: 'Up to 12 months',
    stickerMultiple: 'Up to 12 months',
    maxStayDays: 365
  },
  entryType: 'Multiple Entry',
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
      description: 'Completed online via the official immigration portal or printed and signed.',
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
      description: 'Recent bank statements showing sufficient funds for living expenses.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed contract between the applicant and the Fiji employer.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employer_letter',
      title: 'Employer Letter',
      description: 'Letter from the employer confirming job offer and sponsorship.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'qualification_certificate',
      title: 'Qualification Certificate',
      description: 'Copies of degrees or professional certifications relevant to the job.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate',
      description: 'Recent police clearance from India.',
      icon: '🔒',
      mandatory: true
    },
    {
      key: 'health_certificate',
      title: 'Health Certificate',
      description: 'Medical examination report confirming good health.',
      icon: '🩺',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents including passport, photographs, application form, flight itinerary, accommodation proof, travel insurance, financial statements, employment contract, employer letter, qualification certificates, police clearance, and health certificate.'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Apply online via the official immigration portal or submit the printed application at the Fiji Embassy in New Delhi or through VFS Global service center.'
    },
    {
      step: 3,
      title: 'Pay Visa Fees',
      description: 'Pay the consular visa fee (FJD 200) and any applicable VFS service fee (FJD 50) as per the chosen submission method.'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Wait for the standard processing time of 15 working days (express option available for 7 working days).'
    },
    {
      step: 5,
      title: 'Collect Visa',
      description: 'Collect the visa sticker from the embassy or receive it via courier if applicable.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa holders must present a valid employment contract and employer sponsorship. Entry without a valid invitation or contract is not permitted.'
  }
};