export default {
  country: 'afghanistan',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs of Afghanistan',
  channels: [
    'https://visa.mfa.gov.af',
    'Embassy of Afghanistan in New Delhi',
    'Consulate General of Afghanistan in Mumbai'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: '100 USD',
    stickerConsularStandard: '100 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://visa.mfa.gov.af/visa/',
    territorialScope: 'Afghanistan',
    validity: '30 days',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the date of entry into Afghanistan. Must have at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs with white background, taken within the last 6 months, neutral expression, no glasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed visa application form obtained from the Embassy or Consulate of Afghanistan.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter',
      description: 'Official invitation letter from the family member residing in Afghanistan, including their full name, address, and relationship to the applicant. Copy of the host\'s Afghan ID card or passport.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of accommodation in Afghanistan, such as the host\'s residence address or hotel booking if staying elsewhere.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance covering the entire duration of stay in Afghanistan.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Bank statements for the last 3 months showing sufficient funds to cover the stay. Income Tax Returns (ITR) for the last 2 years.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Application Form',
      description: 'Download or collect the visa application form from the Embassy of Afghanistan in New Delhi or Consulate General in Mumbai.'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather all required documents including passport, photographs, invitation letter, flight itinerary, accommodation proof, insurance, and financial statements.'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Submit the completed application form and supporting documents in person at the Embassy or Consulate. Pay the visa fee of 100 USD.'
    },
    {
      step: 4,
      title: 'Wait for Processing',
      description: 'Processing time is typically 10-15 working days. You may be contacted for an interview or additional documents.'
    },
    {
      step: 5,
      title: 'Collect Passport',
      description: 'Collect your passport with the visa sticker once processing is complete. Verify all details before leaving.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Travelers must register with local authorities within 24 hours of arrival. Women travelers may face additional scrutiny and are advised to travel with a male guardian. Check current security situation and travel advisories before departure.'
  }
};