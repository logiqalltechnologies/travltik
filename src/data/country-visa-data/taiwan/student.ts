export default {
  country: 'taiwan',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Taiwan Embassy in New Delhi',
  channels: [
    'https://visa.mofa.gov.tw/visa/visa.aspx',
    'https://www.vfsglobal.com/Taiwan/India/',
    'https://www.taiwanembassy.org/india/'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '5 working days', // Corrected from 10 working days
    expressSticker: '2 working days' // Corrected from 5 working days
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '3400 INR', // Corrected from 100 TWD (Resident Visa fee)
    vfsServiceFee: '600 INR' // Corrected from 200 TWD
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
    stickerSingleDouble: '0 days (requires ARC application within 30 days of arrival)', // Corrected from 90 days
    stickerMultiple: 'N/A' // Corrected from 90 days (Resident Visa is typically single entry)
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least one blank visa page.',
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
      description: 'Completed online via the official portal or printed form for submission.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking or travel plan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or university accommodation confirmation.',
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
      description: 'Recent bank statements, scholarship award letter, or education loan documents proving sufficient funds for tuition and living expenses.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect passport, photographs, application form, flight itinerary, accommodation proof, travel insurance, and financial documents.'
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out the visa application form online or on paper and sign.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the application and documents either online via the official portal, through VFS Global, or directly at the embassy.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the consular fee (100 TWD) and VFS service fee (200 TWD) as per the chosen submission method.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the visa processing which typically takes 10 working days for standard service or 5 working days for express.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect the visa from the embassy or receive it via courier if applicable.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No additional entry restrictions. Maintain enrollment status and provide proof of sufficient funds throughout the stay.'
  }
};