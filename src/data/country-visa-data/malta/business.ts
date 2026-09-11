export default {
  country: 'malta',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'High Commission of the Republic of Malta in New Delhi / Central Visa Unit (Identità)',
  channels: ['VFS Global', 'High Commission of Malta'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR (~₹8,200 INR)',
    vfsServiceFee: '30 EUR (~₹2,700 INR)'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages and issued within the last 10 years.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color passport-size photographs taken within the last 6 months, 35x45mm, white background, neutral expression, and 80% facial coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed Schengen Visa Application Form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Business Invitation Letter from Malta',
      description: 'Official invitation letter from the host company in Malta detailing the applicant’s name, purpose of visit, entry/exit dates, and responsibility for accommodation and travel expenses.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Employer Cover Letter / Deputation Letter',
      description: 'Covering letter on Indian company letterhead providing applicant details, employment status, designation, reason for travel, itinerary, and financial guarantee.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'business_registration',
      title: 'Proof of Business Registration',
      description: 'Certificate of Incorporation, GST Registration, or Udyam Certificate of the Indian employer/company.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Statements',
      description: 'Personal and company original bank statements for the last 6 months certified by the bank, plus Income Tax Returns (ITR-V) for the last 3 assessment years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Medical insurance covering all Schengen states with minimum coverage of €30,000 for emergency medical treatment and repatriation, valid for the entire duration of stay.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary specifying travel dates and flight numbers.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking, rental agreement, or explicitly stated host company accommodation coverage in Malta.',
      icon: 'hotel',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather and Verify Required Documents',
      description: 'Assemble all business credentials, official invitation letter, financial proofs, and Schengen insurance policy according to consular guidelines.'
    },
    {
      step: 2,
      title: 'Book VFS Global Appointment',
      description: 'Schedule an in-person appointment at the nearest VFS Malta Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Attend Biometrics & Document Submission',
      description: 'Submit your application dossier, complete biometric enrollment (fingerprints and photo), and pay consular and VFS service fees.'
    },
    {
      step: 4,
      title: 'Track Processing and Passport Retrieval',
      description: 'Track application status through the VFS online portal and retrieve your stamped passport via courier or center pickup once adjudicated.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Subject to the strict 90/180 Schengen rule. Biometric submission is mandatory unless previously registered in the VIS system within the past 59 months. Malta business visas require verifiable proof of genuine business activity between the Indian entity and the Maltese host company.'
  }
};