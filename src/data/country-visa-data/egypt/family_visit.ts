export default {
  country: 'egypt',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Arab Republic of Egypt, New Delhi',
  channels: ['VFS Global'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '7 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'USD 25 (single entry) / USD 50 (multiple entry)',
    vfsServiceFee: 'N/A'
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
    stickerSingleDouble: 'Up to 30 days',
    stickerMultiple: 'Up to 90 days'
  },
  maxStayDays: 90,
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the date of arrival in Egypt, with at least two blank pages for visa stamping.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Two recent passport-size photographs (35x45mm) with a white background, taken within the last 6 months, showing a neutral expression with no spectacles or headwear (except for religious purposes).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'One visa application form fully completed in English block letters and signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Invitation Letter',
      description: 'An official invitation letter from the host/relative residing in Egypt. The invitation must be legalized by the Egyptian Ministry of Foreign Affairs (MFA) or the local police authority in Egypt, accompanied by a copy of the host’s Egyptian ID or valid residence permit.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'proof_of_relationship',
      title: 'Proof of Relationship',
      description: 'Documentary proof establishing the relationship with the host in Egypt (e.g., birth certificate, marriage certificate, or passport copy showing parents/spouse name).',
      icon: '👥',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight tickets or a detailed flight itinerary showing entry and exit from Egypt.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original personal bank statement for the last 6 months, stamped and signed by the bank, showing a healthy balance (minimum equivalent of USD 1,500) to cover all expenses during the stay.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'itr_proof',
      title: 'Income Tax Returns',
      description: 'Income Tax Returns (ITR-V) for the last 2 to 3 assessment years.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'noc_employment',
      title: 'No Objection Certificate (NOC)',
      description: 'An original NOC on company letterhead from the employer in India, stating the applicant’s designation, salary, tenure, and approval of leave. For self-employed individuals, proof of business registration/GST certificate is required.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Valid travel medical insurance policy covering the entire duration of the stay in Egypt, with a minimum coverage of USD 30,000 including COVID-19 coverage.',
      icon: '🛡️',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Receive Legalized Invitation',
      description: 'Have your relative in Egypt draft an invitation letter and get it officially legalized/attested by the Egyptian Ministry of Foreign Affairs (MFA) or local police authorities. They must mail the physical copy or a high-quality scan to you.'
    },
    {
      step: 2,
      title: 'Prepare the Application Dossier',
      description: 'Download and print the Egypt Visa Application Form. Fill it out completely in block letters. Gather all supporting documents, including your 6-month bank statements, ITR, NOC, and relationship proof.'
    },
    {
      step: 3,
      title: 'Submit Documents to the Embassy/Consulate',
      description: 'Submit your physical passport, application form, and all supporting documents directly to the Embassy of Egypt in New Delhi or the Consulate General of Egypt in Mumbai (depending on your jurisdiction). Submissions can be made in person or via an authorized travel agent.'
    },
    {
      step: 4,
      title: 'Pay the Visa Fee',
      description: 'Pay the consular visa fee of USD 25 (single entry) or USD 50 (multiple entry) in cash at the Embassy/Consulate counter at the time of document submission.'
    },
    {
      step: 5,
      title: 'Wait for Security Clearance',
      description: 'The Embassy will process your application and send it for security clearance to Cairo. This standard process takes between 7 working days.'
    },
    {
      step: 6,
      title: 'Passport Collection',
      description: 'Once approved, collect your passport with the stamped sticker visa from the Embassy/Consulate, or receive it via your authorized agent.'
    }
  ],
  specialRequirements: {
    entry_rules: 'A Yellow Fever vaccination certificate is mandatory only if you are arriving from or transiting through a Yellow Fever endemic country. Ensure your passport has at least 6 months validity from your planned date of entry into Egypt.'
  }
};