export default {
  country: 'kosovo',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs and Diaspora of the Republic of Kosovo',
  channels: ['Embassy / Consulate (Direct)', 'VFS Global (Service Provider)'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '40 EUR',
    vfsServiceFee: 'Approx. 25-35 EUR (varies by location)'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days within 180 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Valid for at least 3 months beyond the intended date of departure from Kosovo, with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent white background photograph taken within the last 6 months',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed application form (often provided by VFS or Embassy), printed and signed',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or onward travel itinerary',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking or officially legalized invitation letter from a resident or organization in Kosovo',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Valid medical insurance covering emergency treatment and repatriation throughout Kosovo with a minimum coverage of €30,000',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Income Tax Returns',
      description: 'Personal bank statements for the last 3 to 6 months and recent Income Tax Returns (ITR) demonstrating sufficient financial means',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Occupation / NOC',
      description: 'Employment contract, Leave Approval/NOC letter from employer, or business registration documents for self-employed applicants',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Exemption Eligibility',
      description: 'Holders of valid multi-entry Schengen visas or valid Schengen residence permits can enter Kosovo without a separate visa for up to 15 days.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment with VFS Global, the official service provider for Kosovo visa applications in India.'
    },
    {
      step: 3,
      title: 'Submit Application & Documents',
      description: 'Submit the application along with mandatory supporting documents at the VFS center or designated Embassy/Consulate.'
    },
    {
      step: 4,
      title: 'Pay Fees and Collect Visa',
      description: 'Pay the €40 consular fee and VFS service fee. Retrieve your passport once decision processing is complete.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of valid multiple-entry Schengen visas or Schengen residence permits are exempt from Kosovo visa requirements for stays up to 15 days. Otherwise, a Kosovo Category C visa must be secured prior to travel. Travel insurance with minimum €30,000 coverage is mandatory.'
  }
};