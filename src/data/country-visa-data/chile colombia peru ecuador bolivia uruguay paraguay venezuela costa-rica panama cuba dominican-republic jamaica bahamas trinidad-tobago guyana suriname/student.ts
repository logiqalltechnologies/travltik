export default {
  country: 'chile colombia peru ecuador bolivia uruguay paraguay venezuela costa-rica panama cuba dominican-republic jamaica bahamas trinidad-tobago guyana suriname',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Chile in New Delhi, Embassy of Colombia in New Delhi, Embassy of Peru in New Delhi, Embassy of Ecuador in New Delhi, Embassy of Bolivia in New Delhi, Embassy of Uruguay in New Delhi, Embassy of Paraguay in New Delhi, Embassy of Venezuela in New Delhi, Embassy of Costa Rica in New Delhi, Embassy of Panama in New Delhi, Embassy of Cuba in New Delhi, Embassy of Dominican Republic in New Delhi, Embassy of Jamaica in New Delhi, Embassy of Bahamas in New Delhi, Embassy of Trinidad and Tobago in New Delhi, Embassy of Guyana in New Delhi, Embassy of Suriname in New Delhi',
  channels: ['Official Portal URL', 'Embassy Direct'],
  processingTime: { eVisa: '30 working days', standardSticker: '15 working days' },
  fees: { eVisaTotal: 'USD 132', stickerConsularStandard: 'USD 100' },
  eVisa: { available: true, portal: 'https://tramitesmre.cancilleria.gov.co/tramites/enlinea/solicitarVisa.xhtml', territorialScope: 'Nationwide', validity: '730 days', maxStay: '730 days', invitationRequired: false, processing: '30 working days' },
  stayDuration: { eVisa: '730 days', stickerSingleDouble: '365 days', stickerMultiple: '365 days' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Completed online or paper form as per embassy instructions', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Return flight booking or proof of onward travel', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or university accommodation confirmation', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Coverage for medical expenses and repatriation', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Bank statements for last 3 months, education loan documents or blocked account statement', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all mandatory documents listed above' },
    { step: 2, title: 'Complete Application', description: 'Fill out the visa application form online or on paper' },
    { step: 3, title: 'Pay Visa Fees', description: 'Pay the consular fee and any VFS service fee as applicable' },
    { step: 4, title: 'Submit Application', description: 'Submit the application and documents to the embassy or VFS center' },
    { step: 5, title: 'Attend Interview', description: 'Attend a visa interview if required by the embassy' },
    { step: 6, title: 'Receive Visa', description: 'Collect the visa sticker or receive eVisa confirmation' }
  ],
  specialRequirements: { entry_rules: 'Yellow Fever vaccination required for all South American countries listed. HIV test required for stays >90 days in certain countries.' }
};