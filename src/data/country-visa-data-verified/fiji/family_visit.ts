export default {
  country: 'fiji',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Fiji Immigration Department',
  channels: [
    'https://visa.fiji.gov.fj',
    'https://www.fiji.org.in',
    'Embassy Direct'
  ],
  externalServiceProvider: 'None (direct through eVisa portal)',
  processingTime: {
    eVisa: '5 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'FJD 100',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.fiji.gov.fj',
    territorialScope: 'Nationwide',
    validity: '6 months from date of issue',
    maxStay: '120 days',
    invitationRequired: true,
    processing: '5 working days'
  },
  stayDuration: {
    eVisa: '120 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months from date of entry',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Complete the online application on the official Fiji eVisa portal',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or invitation letter from family resident in Fiji',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering medical expenses up to at least USD 20,000 for the duration of stay',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) showing sufficient funds for the trip',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Create Account & Fill Application',
      description: 'Register on the Fiji eVisa portal and complete the online application form.'
    },
    {
      step: 2,
      title: 'Upload Required Documents',
      description: 'Upload passport scan, photographs, invitation letter, flight itinerary, accommodation proof, insurance, and bank statements.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Pay the FJD 100 visa fee online using a credit/debit card.'
    },
    {
      step: 4,
      title: 'Submit & Await Processing',
      description: 'Submit the application and wait for 5 working days for approval.'
    },
    {
      step: 5,
      title: 'Receive eVisa & Travel',
      description: 'Download the approved eVisa and present it along with your passport at check‑in.'
    }
  ],
  specialRequirements: {
    entry_rules: 'No Yellow Fever certificate required for Indian nationals; passport must have at least two blank pages.'
  }
};