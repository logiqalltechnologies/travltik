export default {
  country: 'mauritius',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Passport and Immigration Office (PIO) of Mauritius',
  externalServiceProvider: 'None (Visa on Arrival)',
  channels: [
    'Visa on Arrival at Sir Seewoosagur Ramgoolam International Airport',
    'Official Passport and Immigration Office Portal'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '0 (on arrival)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '0 MUR (Free of charge)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 60 days',
    stickerMultiple: 'N/A'
  },
  maxStayDays: 60,
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of arrival in Mauritius, containing at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Two recent passport-size photographs (35x45mm) with a white background, neutral expression, taken within the last 6 months. Keep these handy for immigration clearance.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Mauritius All-in-One Travel Digital Form',
      description: 'Must be filled out online prior to boarding. This generates a PDF with a QR code which must be presented to health and immigration authorities upon arrival.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Confirmed Return Flight Ticket',
      description: 'A confirmed return ticket back to India or an onward ticket to a third country of destination before the expiry of the visa.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation & Host Invitation',
      description: 'A formal letter of invitation from the host in Mauritius, a copy of the host\'s National Identity Card (NIC) or residence permit, and a recent utility bill (electricity or water) as proof of address.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements showing sufficient funds to cover the stay (minimum of USD 100 per day of stay), or a formal declaration of sponsorship from the host in Mauritius.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'Required ONLY if arriving from or transiting through a Yellow Fever endemic country in Africa or South America.',
      icon: '💉',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill the All-in-One Travel Form',
      description: 'Complete the official Mauritius All-in-One Travel Digital Form online before your flight. Print the generated PDF containing the QR code.'
    },
    {
      step: 2,
      title: 'Prepare Host Documents',
      description: 'Obtain the signed invitation letter from your host in Mauritius, along with a copy of their Mauritius ID/residence permit and a recent utility bill.'
    },
    {
      step: 3,
      title: 'Gather Financial and Travel Proofs',
      description: 'Ensure you have your confirmed return flight ticket, passport (valid for >6 months), and bank statements showing at least USD 100 per day of stay.'
    },
    {
      step: 4,
      title: 'Present Documents at Immigration',
      description: 'Upon arrival at Sir Seewoosagur Ramgoolam International Airport, present your passport, the printed All-in-One Form QR code, and host documents to the immigration officer.'
    },
    {
      step: 5,
      title: 'Receive Visa on Arrival',
      description: 'The immigration officer will stamp your passport with a free Visa on Arrival valid for up to 60 days.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals do not require a visa prior to travel to Mauritius for family visits. A free Visa on Arrival is granted for up to 60 days. Ensure your host is reachable by phone on the day of your arrival as immigration officers may call to verify the invitation.'
  }
};