export default {
  country: 'malta',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry for Foreign and European Affairs and Trade - High Commission of the Republic of Malta, New Delhi',
  channels: ['VFS Global', 'High Commission of Malta in New Delhi'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '30 EUR (approx. ₹2,700)'
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
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond intended departure from the Schengen area, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs taken within the last 6 months on a light white background, 70-80% face coverage, no editing or filters.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed Schengen Short-Stay Visa Application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservations showing travel dates and route in and out of the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the entire stay duration across all visited Schengen states or official Declaration of Proof if hosted.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Medical coverage minimum of €30,000 covering emergency treatment, hospitalization, and repatriation valid across all Schengen countries.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & ITR',
      description: 'Original bank statements for the last 3 to 6 months stamped by the bank showing sufficient funds (min. €48/day of stay) plus Income Tax Returns (ITR-V) for last 2-3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Personal Cover Letter',
      description: 'Detailed travel itinerary, purpose of trip, funding details, and commitment to return to India prior to visa expiration.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Occupation / Leave NOC',
      description: 'No Objection Certificate (NOC) and approved leave letter from employer, or business incorporation documents/GST certificate for self-employed applicants.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Verify Schengen Short-Stay Type C visa application criteria for Malta travel from India.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Assemble mandatory verified documents including 35x45mm photos, Schengen insurance, cover letter, bank statements, and flight/accommodation proof.'
    },
    {
      step: 3,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule a biometric and document submission appointment at the authorized VFS Global Malta Visa Application Centre.'
    },
    {
      step: 4,
      title: 'Submit and Pay Fee',
      description: 'Attend the appointment to submit physical dossier, record biometric data (fingerprints and photo), and pay standard €90 consular fee plus VFS service fees.'
    },
    {
      step: 5,
      title: 'Receive Clearance',
      description: 'Track the application online and retrieve passport with visa sticker upon consular decision.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180-day limitation rule. Must demonstrate at least €48 per day minimum subsistence or formal Declaration of Proof from host. Travel medical insurance must cover full duration of stay in all Schengen states.'
  }
};