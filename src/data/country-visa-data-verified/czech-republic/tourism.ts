export default {
  country: 'czech-republic',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of the Czech Republic / Embassy of the Czech Republic in New Delhi',
  channels: [
    'VFS Global Visa Application Centre',
    'Embassy of the Czech Republic in New Delhi'
  ],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days (may extend up to 45 working days during peak seasons or detailed scrutiny)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 EUR',
    vfsServiceFee: '₹2,130 (approx. 23 EUR, subject to exchange rate fluctuations)'
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
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended date of departure from the Schengen area, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within the last 6 months) color photographs, size 35x45mm, on a plain white background, 70-80% facial coverage, neutral facial expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed official Schengen visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation/itinerary showing entry and exit from the Czech Republic / Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the entire duration of stay in the Schengen area, or an official invitation verified by the Alien Police of the Czech Republic.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Valid medical insurance with a minimum coverage of €30,000 covering emergency medical expenses, hospitalization, and repatriation, valid across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements)',
      description: 'Original bank account statements for the last 6 months, certified, stamped, and signed by the bank, demonstrating sufficient financial means for the trip.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Form 16 for the last 3 assessment years.',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'noc',
      title: 'Employment Proof & No Objection Certificate (NOC)',
      description: 'NOC / Leave approval from employer with official seal for employed individuals; Business registration / GST certificate for self-employed; or Bonafide letter from school/college for students.',
      icon: 'file',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Verify travel requirements for Schengen Type C Short-Stay Tourist Visa. Note that Indian citizens require a physical sticker visa.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Assemble all mandatory documents, including 6-month bank statements, 3-year ITRs, NOC, travel insurance (€30,000 coverage), flight, and hotel bookings.'
    },
    {
      step: 3,
      title: 'Submit and Pay Fee',
      description: 'Book an appointment at the nearest VFS Global Czech Republic Visa Application Centre in India, submit physical application, capture biometrics, and pay statutory fees.'
    },
    {
      step: 4,
      title: 'Receive Clearance',
      description: 'Track application processing online through VFS portal and collect passport with visa sticker upon decision from the Czech Embassy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict compliance with the Schengen 90/180-day rule. Passport must be valid for at least 3 months beyond the intended departure date from the Schengen territory. Travel health insurance minimum coverage of €30,000 is compulsory and checked at entry points.'
  }
};