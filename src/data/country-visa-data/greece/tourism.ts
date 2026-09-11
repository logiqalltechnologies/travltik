export default {
  country: 'greece',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of Greece in New Delhi / GVC World',
  channels: ['GVCW Application Centre', 'Embassy of Greece / Consulate General'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '30 EUR (GVCW Service Fee)'
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
    stickerSingleDouble: 'Up to 90 days within 180-day period',
    stickerMultiple: 'Up to 90 days within 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (under 6 months) color photographs, 35x45mm, white background, 70-80% face coverage, neutral facial expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Application Form',
      description: 'Duly filled and signed Schengen visa application form completed online via the GVC World portal.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing travel dates and flight numbers entering and exiting the Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations covering the entire duration of stay in Greece and all other visited Schengen states.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Schengen-compliant health insurance with minimum coverage of 30,000 EUR for emergency medical expenses, hospitalization, and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Employment NOC',
      description: 'Original bank statements for the last 6 months stamped by the bank, Income Tax Returns (ITR-V) for the past 3 years, and No Objection Certificate (NOC) from employer or business registration documents.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Register on the official GVC World portal (in-gr.gvcworld.eu) and complete the online Schengen Type C application form.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Assemble mandatory documents including 6-month bank statements, 3-year ITR, employer NOC, round-trip itinerary, hotel bookings, and 30,000 EUR insurance.'
    },
    {
      step: 3,
      title: 'Submit and Pay Fee',
      description: 'Book an appointment at a GVC World VAC in India, pay the 90 EUR consular fee + GVCW service fee, and submit biometric data.'
    },
    {
      step: 4,
      title: 'Receive Clearance',
      description: 'Track application status on the GVCW portal and collect your passport stamped with the Schengen sticker upon decision.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day limitation applies across all Schengen states. Biometric capture (fingerprints & photo) is mandatory unless previously recorded in VIS within 59 months. Medical insurance must cover minimum 30,000 EUR explicitly across all Schengen countries. Applications can be lodged up to 6 months prior to departure.'
  }
};