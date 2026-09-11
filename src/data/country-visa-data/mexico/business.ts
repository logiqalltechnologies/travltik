export default {
  country: 'mexico',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Mexico in India',
  channels: [
    'MiConsulado Appointment Portal',
    'Embassy of Mexico, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '2 to 10 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '53 USD (payable in equivalent INR cash or bank draft as per Embassy instructions)',
    vfsServiceFee: 'N/A (Direct submission at the Embassy)'
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
    stickerMultiple: 'Up to 180 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the date of entry into Mexico, with at least two blank pages, and copies of the first and last pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'One recent passport-size photograph (35x45mm), white background, taken within 6 months, neutral expression, front view, without glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Visa application form completed in full, signed by the applicant, and printed double-sided on a single sheet of paper.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'business_invitation',
      title: 'Original Invitation Letter',
      description: 'Original letter from the inviting Mexican organization/company on official letterhead, stating the applicant’s full name, nationality, purpose of visit, duration of stay, and specifying who will cover the travel and living expenses. Must be accompanied by a copy of the official ID of the person signing the letter.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'covering_letter',
      title: 'Covering Letter / NOC',
      description: 'Original letter from the Indian employer/company on official letterhead, detailing the applicant’s position, salary, length of employment, and authorizing the business travel to Mexico.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3 months showing a stable monthly balance/income, along with Income Tax Returns (ITR) for the last 2 years and payslips for the last 3 months.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation showing entry and exit dates from Mexico.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation for the duration of the stay or details of accommodation provided by the host company in Mexico.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents, including the original business invitation letter from Mexico, financial proofs (bank statements and ITR), and the double-sided printed application form.'
    },
    {
      step: 2,
      title: 'Book an Appointment',
      description: 'Schedule an in-person visa appointment online through the official MiConsulado booking portal (https://citas.sre.gob.mx/). Appointments are mandatory for biometric and interview processing.'
    },
    {
      step: 3,
      title: 'Attend the Consular Interview',
      description: 'Visit the Embassy of Mexico in New Delhi on your scheduled appointment date. Submit your physical documents, pay the consular fee of 53 USD in cash (exact INR amount) or bank draft, and undergo a brief consular interview.'
    },
    {
      step: 4,
      title: 'Visa Processing and Collection',
      description: 'After a successful interview, the visa is typically processed within 2 to 10 working days. Collect your passport with the physical sticker visa from the Embassy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals holding a valid, multiple-entry visa for the United States of America, Canada, Japan, United Kingdom, or any of the countries comprising the Schengen Area, or who possess permanent residency in these countries, do not require a Mexican visa to enter Mexico for business or tourism purposes for stays up to 180 days.'
  }
};