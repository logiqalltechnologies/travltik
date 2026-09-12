export default {
  country: 'cuba',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Republic of Cuba in New Delhi',
  channels: [
    'Embassy Direct',
    'https://misiones.cubaminrex.cu/en/india'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 working days',
    expressSticker: '5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 100',
    vfsServiceFee: 'N/A'
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
    stickerSingleDouble: '30 days',
    stickerMultiple: '90 days'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within the last 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed and signed consular visa application form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed return flight reservation showing entry and exit dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservation or official accommodation arrangements confirmed by the Cuban host.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Policy covering emergency medical and hospitalization expenses in Cuba, recognized by Cuban authorities (Asistur).',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements (last 3 months) + Income Tax Returns + cover letter from the Indian employer.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Business Invitation & Prior Clearance',
      description: 'Official invitation from the Cuban counterpart approved and transmitted through Cuban Immigration Authorities (DIIE/MINCEX) directly to the Embassy in New Delhi.',
      icon: '📄',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Prior Authorization from Cuba',
      description: 'The inviting Cuban company or institution must register the request with the Cuban Directorate of Immigration and Foreigners (DIIE) so an official visa clearance cable is dispatched to the Embassy of Cuba in New Delhi.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      description: 'Assemble passport, photos, completed application form, proof of clearance, travel insurance, flight itinerary, and financial proof.'
    },
    {
      step: 3,
      title: 'Submit Application to Embassy Direct',
      description: 'Submit the application and original passport directly at the Consular Section of the Embassy of the Republic of Cuba in New Delhi.'
    },
    {
      step: 4,
      title: 'Pay Consular Fee',
      description: 'Pay the statutory consular fee of USD 100 (or INR equivalent as directed by the consular section).'
    },
    {
      step: 5,
      title: 'Visa Processing',
      description: 'Once clearance is confirmed, the Embassy processes the sticker visa within 5 to 10 working days.'
    },
    {
      step: 6,
      title: 'Collect Passport',
      description: 'Collect your passport with the business visa sticker from the Embassy consular section.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Business visa (Visa D-7) is strictly for commercial negotiations, meetings, and trade visits authorized by Cuban authorities. Direct employment or receiving local remuneration in Cuba is prohibited. Standard maximum permitted stay is 30 days, extendable locally at immigration offices in Cuba.'
  }
};