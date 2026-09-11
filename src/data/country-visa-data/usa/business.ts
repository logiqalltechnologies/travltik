export default {
  country: 'usa',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'U.S. Department of State - Bureau of Consular Affairs',
  serviceProvider: 'VFS Global',
  channels: [
    'https://ceac.state.gov/genniv/',
    'https://www.usvisascheduling.com/',
    'https://www.ustraveldocs.com/in/en',
    'U.S. Embassy & Consulates in India'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '3 to 5 working days (after interview approval)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '185 USD',
    vfsServiceFee: 'N/A'
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
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Up to 180 days per entry'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity beyond the intended stay in the United States and at least two blank pages for visa stamping.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (2x2 inches / 51x51mm)',
      description: 'Two recent physical photographs taken within the last 6 months, 2x2 inches (51x51mm) in size, white background, neutral expression, with no glasses. These must match the digital photo specifications uploaded in the DS-160.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'DS-160 Confirmation Page',
      description: 'Printed confirmation page of the Online Nonimmigrant Visa Application (DS-160) containing the application barcode.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'appointment_confirmation',
      title: 'Visa Appointment Confirmation',
      description: 'Printed copy of the appointment confirmation letter proving scheduled slots for both the Visa Application Center (VAC) biometrics and the Consular Interview.',
      icon: '📅',
      mandatory: true
    },
    {
      key: 'fee_receipt',
      title: 'MRV Fee Payment Receipt',
      description: 'Proof of payment for the 185 USD Machine Readable Visa (MRV) application fee.',
      icon: '💵',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from the host company in the USA detailing the specific business activities, duration of stay, and financial sponsorship details.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Company Cover Letter',
      description: 'An original cover letter on the Indian employer\'s official letterhead detailing the applicant\'s designation, purpose of travel, itinerary, and guaranteeing return to India.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal and company bank statements for the last 6 months showing sufficient funds, along with Income Tax Returns (ITR) for the last 2-3 years and recent salary slips.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Proposed round-trip flight itinerary. Applicants are strongly advised not to purchase non-refundable tickets until the visa is approved and issued.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation confirmation or details of corporate lodging/housing provided by the host company in the USA.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Highly recommended travel medical insurance covering the entire duration of stay in the USA to protect against unexpected medical expenses.',
      icon: '🛡️',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete the DS-160 Form',
      description: 'Fill out the Online Nonimmigrant Visa Application (DS-160) on the CEAC portal, upload your digital photograph, and print the confirmation page with the barcode.'
    },
    {
      step: 2,
      title: 'Create Profile and Pay MRV Fee',
      description: 'Register an account on the official US visa scheduling portal (usvisascheduling.com) and pay the non-refundable 185 USD MRV fee using the available payment methods.'
    },
    {
      step: 3,
      title: 'Schedule Appointments',
      description: 'Schedule two separate appointments: first, the Biometrics appointment at the Visa Application Center (VAC) operated by VFS Global, and second, the Consular Interview at the US Embassy or Consulate.'
    },
    {
      step: 4,
      title: 'Attend VAC Biometrics Appointment',
      description: 'Visit the designated Visa Application Center (VAC) to submit fingerprints and have your digital photograph captured. Bring your passport, DS-160 confirmation, and appointment letter.'
    },
    {
      step: 5,
      title: 'Attend Consular Interview',
      description: 'Appear for the mandatory in-person interview at the US Embassy or Consulate. Bring all original documents, including the business invitation letter, financial proofs, and company cover letter.'
    },
    {
      step: 6,
      title: 'Passport Retrieval',
      description: 'If approved, your passport with the physical visa sticker will be processed within 3 to 5 working days. Collect it from the designated premium delivery location or wait for courier delivery.'
    }
  ],
  specialRequirements: {
    entry_rules: 'The final duration of stay (up to a maximum of 180 days per entry) is determined solely by the Customs and Border Protection (CBP) officer at the US Port of Entry. No specific health mandates or Yellow Fever certificates are required unless arriving from or transiting through endemic zones.'
  }
};