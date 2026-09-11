export default {
  country: 'brazil',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Brazil in New Delhi',
  channels: [
    'https://formulario-mre.serpro.gov.in',
    'https://www.vfsglobal.com/Brazil/India',
    'https://www.gov.br/mre/pt-br/embaixada-nova-delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 7,200',
    vfsServiceFee: 'INR 1,420'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
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
      description: 'Passport must be valid for at least 6 months beyond the intended stay and contain at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, 6 months recent, neutral expression, 2 copies.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form Receipt (RER)',
      description: 'Complete the online application on the official portal, upload required documents, and print the signed confirmation page (RER).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight booking showing dates of entry and exit.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or invitation letter with accommodation details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Formal invitation letter from the Brazilian company in Portuguese or English, containing the CNPJ number, address, and details of the trip.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'dispatch_letter',
      title: 'Covering Letter',
      description: 'Covering letter from the Indian employer on company letterhead detailing the purpose of the visit and financial responsibility.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months and Income Tax Returns (ITR) showing sufficient funds for the stay.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Collect Required Documents',
      description: 'Gather passport, photographs, invitation letter from Brazil, cover letter from Indian employer, bank statements, and flight itinerary.'
    },
    {
      step: 2,
      title: 'Complete Online Application',
      description: 'Fill out the visa application form on https://formulario-mre.serpro.gov.in, upload the required documents, and print the Visa Application Form Receipt (RER).'
    },
    {
      step: 3,
      title: 'Schedule Appointment',
      description: 'Book an appointment through the VFS Global portal to submit your physical application and biometrics.'
    },
    {
      step: 4,
      title: 'Submit Application and Pay Fees',
      description: 'Attend your appointment at the VFS center, submit your documents, and pay the consular fee of INR 7,200 along with the VFS service fee of INR 1,420.'
    },
    {
      step: 5,
      title: 'Receive Visa',
      description: 'Track your application online and collect your passport with the stamped visa from the VFS center or receive it via courier within 10 to 15 working days.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visitors under the VIVIS category are permitted to engage in meetings, negotiations, and corporate events, but are strictly prohibited from receiving any payment from Brazilian sources or engaging in technical assistance.'
  }
};