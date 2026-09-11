export default {
  country: 'qatar',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Qatar Ministry of Interior',
  channels: [
    'https://portal.moi.gov.qa/',
    'https://hayya.qa/',
    'https://www.vfsglobal.com/Qatar/India/',
    'https://www.qatarembassy.org.in/'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '7-10 working days',
    expressSticker: '3-5 working days'
  },
  fees: {
    eVisaTotal: '200 QAR',
    stickerConsularStandard: '200 QAR',
    vfsServiceFee: '100 QAR'
  },
  eVisa: {
    available: true,
    portal: 'https://hayya.qa/',
    territorialScope: 'Nationwide',
    validity: '30 days',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport with at least 6 months validity beyond intended stay and at least one blank page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Qatari Company Invitation Letter',
      description: 'Official invitation letter from the Qatari host company approved by MOI/Hayya.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed online application form via official Hayya or MOI portal.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight booking.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or host company accommodation letter.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Mandatory Health Insurance',
      description: 'Health insurance policy from a MOPH-registered Qatari insurance company.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements for last 3 months showing sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Qatari Host Invitation',
      description: 'Ensure the host company in Qatar registers the business invitation or applies via Metrash2 / Hayya Platform.'
    },
    {
      step: 2,
      title: 'Create Account & Fill Application',
      description: 'Register on the Hayya portal (hayya.qa) or MOI portal and complete the business visa application.'
    },
    {
      step: 3,
      title: 'Upload Required Documents',
      description: 'Attach scanned passport, photograph, invitation letter, flight details, and proof of accommodation.'
    },
    {
      step: 4,
      title: 'Pay Visa Fee',
      description: 'Pay the statutory visa fee of 200 QAR online using a credit/debit card.'
    },
    {
      step: 5,
      title: 'Receive Approved Entry Permit',
      description: 'Once approved (3-5 working days), download and print your Business Visa entry permit for travel.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa requires an invitation from an authorized Qatari sponsor/company. Mandatory Qatari health insurance must be purchased prior to arrival.'
  }
};