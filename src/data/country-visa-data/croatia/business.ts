export default {
  country: 'croatia',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign and European Affairs of the Republic of Croatia',
  channels: [
    'Official Croatian Visa Application Portal (crovisa.mvep.hr)',
    'VFS Global Visa Application Centre (India)',
    'Embassy of the Republic of Croatia in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'Up to 45 calendar days if individual case assessment requires extended verification'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '26 EUR (payable in INR as per prevailing exchange rate)'
  },
  eVisa: {
    available: false,
    portal: 'https://crovisa.mvep.hr/',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
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
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, containing at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within the last 6 months) color photographs on a plain white background, 35x45mm size, showing 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Schengen Visa Application Form generated online via the official Croatian portal (crovisa.mvep.hr).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'guarantee_letter',
      title: 'Croatian Guarantee Letter (Jamstveno pismo)',
      description: 'Official Guarantee Letter for Legal Persons (Jamstveno pismo za pravnu osobu) issued by the inviting Croatian entity, certified by competent Croatian authorities and registered with the Croatian Ministry of Foreign Affairs.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Employer Cover Letter',
      description: 'Original business cover letter on Indian employer letterhead stating company registration details, applicant designation, purpose of travel, itinerary, and explicitly confirming financial sponsorship.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary specifying flight numbers and entry/exit dates for the Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation covering the entire duration of stay, or explicit declaration of accommodation sponsorship within the certified Croatian Guarantee Letter.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Valid Schengen travel medical insurance policy with a minimum coverage of 30,000 EUR for medical emergency, emergency hospitalization, and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original personal and business bank statements for the last 6 months with bank seal and signature, plus Income Tax Returns (ITR-V) for the last 3 assessment years.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application Form',
      description: 'Fill out the short-stay Schengen visa application form on the official Croatian Crovisas portal (crovisa.mvep.hr) and print the completed summary.'
    },
    {
      step: 2,
      title: 'Assemble Business Dossier',
      description: 'Obtain the verified Croatian Guarantee Letter (Jamstveno pismo) from the host company along with company financials and employer NOC.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment & Submit',
      description: 'Schedule an appointment at the nearest VFS Global Croatia VAC in India, submit physical documents, pay consular/service fees, and enroll biometrics.'
    },
    {
      step: 4,
      title: 'Consular Processing & Collection',
      description: 'Track application status via VFS Global system and collect the passport with Schengen sticker once issued by the Croatian Embassy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'As a full Schengen member state since January 1, 2023, Croatia enforces the 90/180-day short-stay limitation across the entire Schengen Zone. Business travelers must present certified proof of commercial purpose (Guarantee Letter registered at MVEP) upon entry at border control.'
  }
};