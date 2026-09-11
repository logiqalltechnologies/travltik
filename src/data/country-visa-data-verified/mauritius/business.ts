export default {
  country: 'mauritius',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Passport and Immigration Office (PIO) of Mauritius',
  channels: [
    'Visa on Arrival at Port of Entry',
    'Embassy of the Republic of Mauritius, New Delhi'
  ],
  externalServiceProvider: 'Embassy of Mauritius, New Delhi (direct)',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'Immediate (Visa on Arrival)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '0 MUR (free)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'https://evisa.govmu.org',
    territorialScope: 'Nationwide',
    validity: 'Up to 120 days per calendar year',
    maxStay: '90 days per visit',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 60 days',
    stickerMultiple: 'Up to 120 days per calendar year'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of departure from Mauritius, containing at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a white background, showing a neutral expression with full face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Disembarkation Card / Application Form',
      description: 'Completed and signed Mauritius Disembarkation Card (distributed onboard the flight) or Form 5 if applying through the Embassy prior to travel.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Confirmed Return Flight Itinerary',
      description: 'A confirmed return or onward flight ticket showing departure from Mauritius within the permitted stay period.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking or a formal letter of invitation/undertaking from the host company in Mauritius specifying the applicant\'s residential address during the stay.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent bank statements for the last 3 months showing sufficient funds (minimum USD 100 per day of stay) or a formal letter of financial guarantee from the sponsoring company.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'business_invitation',
      title: 'Letter of Invitation from Mauritius',
      description: 'An official invitation letter from the registered host company in Mauritius, detailing the purpose of the visit, duration of stay, and nature of business activities.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'dispatch_letter',
      title: 'Company Cover Letter (India)',
      description: 'A formal dispatch or cover letter from the applicant\'s Indian employer on company letterhead, stating the applicant\'s designation, purpose of travel, and guaranteeing financial responsibility for the trip.',
      icon: '✉️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Business Documentation',
      description: 'Gather your valid Indian passport, passport photos, confirmed return flight tickets, hotel booking, and the mandatory business invitation letter from the Mauritian host company along with the dispatch letter from your Indian employer.'
    },
    {
      step: 2,
      title: 'Complete the Digital Travel Form',
      description: 'Prior to boarding, fill out the official Mauritius All-in-One Travel Digital Form online (available at https://safetravel.mu) and print the generated PDF with the QR code.'
    },
    {
      step: 3,
      title: 'Fill Out Disembarkation Card',
      description: 'During your flight, complete the physical Mauritius Disembarkation Card distributed by the cabin crew.'
    },
    {
      step: 4,
      title: 'Present Documents at Immigration',
      description: 'Upon arrival at Sir Seewoosagur Ramgoolam International Airport (MRU), proceed to the immigration counter and present your passport, return ticket, business invitation, and completed forms.'
    },
    {
      step: 5,
      title: 'Receive Visa on Arrival Stamp',
      description: 'The immigration officer will verify your business credentials and stamp your passport with a Business Visa on Arrival (free of charge) for a stay of up to 60 days.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate is mandatory only if arriving from or transiting through a Yellow Fever endemic country. Business travelers are strictly prohibited from taking up local employment or receiving any form of remuneration from a Mauritian source during their stay.'
  }
};