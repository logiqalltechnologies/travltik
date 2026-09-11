export default {
  country: 'thailand',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of the Kingdom of Thailand / Royal Thai Embassy',
  channels: ['Official Portal (thaievisa.go.th)', 'VFS Global Application Centre', 'Visa Exemption at Port of Entry'],
  processingTime: { eVisa: '3-5 working days', standardSticker: '3-5 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: '0 THB (Visa Exempt) / 2,000 THB (TR Visa)', stickerConsularStandard: '2,000 THB', vfsServiceFee: '500 INR' },
  eVisa: { available: true, portal: 'https://www.thaievisa.go.th/', territorialScope: 'Nationwide', validity: '3 months', maxStay: '60 days', invitationRequired: false, processing: '3-5 working days' },
  stayDuration: { eVisa: '60 days', stickerSingleDouble: '60 days', stickerMultiple: '60 days per entry' },
  entryType: 'Single',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the date of entry', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: false },
    { key: 'visa_form', title: 'Application Form', description: 'Not required for visa exemption entry', icon: '📋', mandatory: false },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight ticket within 60 days', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or proof of stay in Thailand', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Recommended coverage for medical expenses', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Proof of funds (10,000 THB per person or 20,000 THB per family in cash or bank balance)', icon: '🏦', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Enter Thailand Visa-Free', description: 'Indian passport holders can enter Thailand visa-free for tourism up to 60 days without a prior visa or fee. Present passport, return flight ticket, hotel confirmation, and proof of funds at immigration.' }
  ],
  specialRequirements: { entry_rules: '60 days visa-free entry for Indian passport holders for tourism. Must hold a passport valid for at least 6 months, return ticket, proof of stay, and 10,000 THB per person in funds.' }
};