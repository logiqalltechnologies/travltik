export default {
  country: 'malaysia',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'High Commission of Malaysia in New Delhi',
  channels: [
    'https://malaysiavisa.imi.gov.my',
    'https://www.vfsglobal.com/malaysia/india',
    'https://www.mfa.gov.my/web/ind_new-delhi/home'
  ],
  processingTime: {
    eVisa: '2 - 3 working days',
    standardSticker: '5 - 7 working days',
    expressSticker: '3 working days'
  },
  fees: {
    eVisaTotal: '205 MYR',
    stickerConsularStandard: '100 MYR',
    vfsServiceFee: '1380 INR'
  },
  eVisa: {
    available: true,
    portal: 'https://malaysiavisa.imi.gov.my',
    territorialScope: 'Malaysia (all states)',
    validity: '3 months',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '2 - 3 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Studio photograph on white background, taken within 6 months, showing full face.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed eVISA application form online or printed form for VFS submission.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight booking showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or official invitation letter from the host company in Malaysia indicating stay details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter',
      description: 'Official invitation letter from the host company/organization in Malaysia on corporate letterhead.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Covering Letter',
      description: 'Covering letter from the Indian employer stating applicant details, purpose of visit, and financial sponsorship details.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months with sufficient funds for the visit.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect valid passport, employer cover letter, Malaysian company invitation letter, flight itinerary, hotel booking, and bank statements.'
    },
    {
      step: 2,
      title: 'Choose Application Channel',
      description: 'Apply online via the official eVISA portal (malaysiavisa.imi.gov.my) or submit physical application through VFS Global.'
    },
    {
      step: 3,
      title: 'Complete Application Form & Upload Documents',
      description: 'Fill in application details accurately and upload required supporting documents.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the applicable visa consular fee and processing charge online or at the VFS center.'
    },
    {
      step: 5,
      title: 'Application Processing',
      description: 'Wait for application processing (2-3 working days for eVISA, 5-7 working days for VFS sticker visa).'
    },
    {
      step: 6,
      title: 'Receive Visa & Fill MDAC',
      description: 'Download the approved eVISA printout or collect passport from VFS. Complete the Malaysia Digital Arrival Card (MDAC) within 3 days prior to arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All travelers must complete the Malaysia Digital Arrival Card (MDAC) online within 3 days prior to arrival. Note: Visa-free entry for up to 30 days is currently extended for Indian passport holders through 31 December 2026 for tourism and non-employment business visits.'
  }
};