export default {
  country: 'philippines',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Republic of the Philippines, New Delhi',
  channels: [
    'Official Philippines e-Visa Portal (online.eVisa.gov.ph)',
    'Philippine Visa Application Centre (VFS Global)',
    'Embassy of the Philippines / Consulate General Direct'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '7 to 10 working days',
    expressSticker: '3 to 5 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 3,360 (Single Entry 3 Months) / INR 6,720 (Multiple Entry 6 Months)',
    vfsServiceFee: 'INR 1,200 (approx. service provider fee)'
  },
  eVisa: {
    available: false,
    portal: 'https://online.evisa.gov.ph',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 59 days',
    stickerMultiple: '59 days per entry'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended period of stay in the Philippines, with at least 2 consecutive blank pages. Attach all old passports if applicable.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm), taken within the last 6 months against a plain white background, matte finish, neutral expression, without eyeglasses.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form (FA Form No. 22)',
      description: 'Duly completed and signed Visa Application Form. Ensure all details match passport records exactly without missing entries.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from Philippines Host',
      description: 'Official letter of invitation from the host company/organization in the Philippines notarized locally, detailing the purpose, duration, and financial arrangements for the visit, along with valid government ID of the signatory.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'covering_letter',
      title: 'Employer Covering / Dispatch Letter',
      description: 'Original cover letter on the Indian company letterhead signed by authorized personnel, stating applicant designation, length of service, reason for travel, and confirming financial liability for all expenses.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'company_proof',
      title: 'Proof of Business Registration',
      description: 'Copy of Certificate of Incorporation, GST Registration, or Partnership Deed of the Indian employer/company.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original company and/or personal bank statements for the last 6 months certified/stamped by the bank, alongside latest 3 years Income Tax Returns (ITR) or Form 16.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight itinerary showing entry and exit from the Philippines.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking reservation or written guarantee of stay from the host organization in the Philippines.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Travel medical coverage valid for the duration of stay in the Philippines, recommended coverage minimum USD 35,000 for emergency medical expenses.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather and Verify Documents',
      description: 'Obtain the notarized invitation letter from the Philippine host company and dispatch letter from the Indian employer along with required financial records.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Fill out the official FA Form No. 22 accurately and affix photo as per embassy specifications.'
    },
    {
      step: 3,
      title: 'Submit Application at VFS / Embassy',
      description: 'Book an appointment or walk in at designated VFS Global Philippines Visa Application Centre or Philippine Consular Section to submit application documents.'
    },
    {
      step: 4,
      title: 'Pay Visa and Service Fees',
      description: 'Pay the applicable consular visa fee (INR 3,360 for single entry) and VFS processing fee at the submission counter.'
    },
    {
      step: 5,
      title: 'Passport Collection',
      description: 'Track application status online and collect the passport with entry visa sticker upon completion within 7 to 10 working days.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of valid US, Japan, Australian, Canadian, Schengen, UK, or Singapore visas/permanent residency can enter visa-free for tourism/short visits up to 14 days, but dedicated 9(a) business visa sticker is mandatory for formal business travel or stays exceeding 14 days. Yellow Fever Vaccination Certificate is mandatory ONLY if arriving within 6 days from an endemic country.'
  }
};