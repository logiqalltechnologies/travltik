export default {
  country: 'hungary',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of Hungary in New Delhi / Ministry of Foreign Affairs and Trade',
  channels: ['VFS Global', 'Embassy of Hungary in New Delhi'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'Approx. 22 EUR (payable in INR)'
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
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days per entry within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color passport photographs (35x45mm) taken within the last 6 months against a solid white background, 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed Schengen visa application form for Hungary.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Hungarian Invitation Letter',
      description: 'Signed business invitation letter from the host company in Hungary detailing the purpose of visit, dates, itinerary, and financial responsibility/sponsorship details.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employer_cover_letter',
      title: 'Employer Cover Letter / NOC',
      description: 'Official cover letter on Indian company letterhead stating position, tenure, purpose of travel, itinerary, and confirming financial guarantee or sponsorship.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'business_proof',
      title: 'Proof of Business Registration',
      description: 'Certificate of Incorporation, GST Registration, or Partnership Deed of the sending Indian employer.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Roundtrip flight reservation showing dates and flight numbers entering and leaving the Schengen zone.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel reservations or formal accommodation undertaking from the Hungarian host company covering the entire stay.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Valid travel insurance policy with minimum coverage of 30,000 EUR covering emergency medical treatments and repatriation across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank account statements for the last 6 months stamped and signed by the bank, along with Income Tax Returns (ITR-V) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Identify Correct Visa Type & Gather Documents',
      description: 'Assemble all required Schengen business visa documents including host invitation, company cover letter, and travel insurance.'
    },
    {
      step: 2,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an appointment at the nearest VFS Global Hungary Application Centre in India.'
    },
    {
      step: 3,
      title: 'Submit Dossier and Biometrics',
      description: 'Attend the appointment in person to submit physical documents, pay consular/service fees, and record biometric data.'
    },
    {
      step: 4,
      title: 'Consular Processing & Passport Retrieval',
      description: 'Track the dossier online during the 15-day processing period and collect the passport with sticker visa upon clearance.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies strictly across all member countries. Travellers must carry copies of their Hungarian invitation letter, business cover letter, travel medical insurance (€30,000 minimum cover), and proof of sufficient funds upon arrival at border control.'
  }
};