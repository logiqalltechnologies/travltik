export default {
  country: 'cyprus',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'High Commission of the Republic of Cyprus in New Delhi',
  channels: ['VFS Global', 'High Commission of the Republic of Cyprus'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10-15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90 (approx. ₹8,100)',
    vfsServiceFee: '₹1,650'
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
    stickerMultiple: 'Up to 90 days per entry'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended date of departure from Cyprus, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized photos (35x45mm) with white background, 80% face coverage, neutral expression, and taken within the last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Cyprus Visa Application Form',
      description: 'Duly completed and signed official Republic of Cyprus Short Stay Visa (Category C) application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Invitation & Assumption of Responsibility',
      description: 'Official invitation letter from the host company in Cyprus detailing the commercial purpose and duration, accompanied by an Assumption of Responsibility for Aliens form certified by a Cyprus Certifying Officer.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Company Cover Letter',
      description: 'Cover letter from the sending Indian company on official letterhead outlining applicant role, purpose of travel, itinerary, and financial guarantee.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing entry into and exit from Cyprus.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservation or proof of host accommodation in Cyprus matching the travel dates.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Valid travel medical insurance policy with minimum coverage of €30,000 for emergency medical treatment and repatriation, valid for the entire duration of stay in Cyprus.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements)',
      description: 'Original bank statements of the company and applicant for the last 6 months, stamped and signed by the bank, demonstrating sufficient financial means.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Form 16 of the applicant for the last 3 assessment years.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'business_proof',
      title: 'Indian Company Registration Proof',
      description: 'Certificate of Incorporation, GST Registration Certificate, or official business license of the Indian employer.',
      icon: 'building',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility & Gather Documents',
      description: 'Ensure passport validity requirements and obtain certified host invitation and Assumption of Responsibility documents from Cyprus.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill out and sign the official Republic of Cyprus Category C short-stay visa application form.'
    },
    {
      step: 3,
      title: 'Book & Attend VFS Appointment',
      description: 'Schedule an appointment at the designated VFS Global Cyprus Application Centre in India, submit physical documents, and pay consular and service fees.'
    },
    {
      step: 4,
      title: 'Track & Passport Collection',
      description: 'Track the application status online and collect the passport with the issued national visa sticker upon completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Cyprus is an EU member state but is currently not part of the Schengen area. Holders of valid double or multiple-entry Schengen visas, or residence permits/visas from Bulgaria or Romania, may enter Cyprus without a separate national visa for up to 90 days within a 180-day period.'
  }
};