export default {
  country: 'kenya',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Directorate of Immigration Services, Ministry of Interior and National Administration, Republic of Kenya',
  channels: [
    'https://www.etakenya.go.ke',
    'Kenya High Commission, New Delhi'
  ],
  externalServiceProvider: 'None (direct through eVisa portal)',
  processingTime: {
    eVisa: '2 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'USD 51 (Kenya eVisa fee for Business Single Entry)',
    stickerConsularStandard: 'N/A (Kenya has fully transitioned to an online Electronic Travel Authorisation system)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.etakenya.go.ke',
    territorialScope: 'Nationwide',
    validity: '90 days from date of issue',
    maxStay: '90 days per entry',
    invitationRequired: true,
    processing: '2 working days'
  },
  stayDuration: {
    eVisa: 'Up to 90 days',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original Indian passport valid for at least 6 months beyond the intended departure date from Kenya, containing at least 2 consecutive blank visa pages. A clear color scan of the biodata page is required for online upload.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Recent color digital photograph (35x45mm) taken within the last 6 months against a clear white background, displaying a full front-facing neutral expression without shadows, spectacles, or head coverings (unless for religious purposes).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Online Application Form',
      description: 'Completed Kenya Electronic Travel Authorisation (eTA) online business questionnaire submitted via the official portal (etakenya.go.ke).',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Invitation Letter from Host Company',
      description: 'Formal business invitation letter on company letterhead from the host organization in Kenya. Must outline the purpose of travel, duration of visit, contact information, undertaking of responsibility, and be signed by an authorized signatory.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'host_registration',
      title: 'Kenyan Host Company Registration',
      description: 'Copy of the Certificate of Incorporation / Business Registration Certificate and Kenya Revenue Authority (KRA) PIN Certificate of the inviting Kenyan organization.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'company_cover_letter',
      title: 'Employer Cover Letter / Deputation Letter',
      description: 'Original letter from the employer/firm in India stating the applicant’s designation, duration of employment, purpose and itinerary of the business trip, and clear confirmation of financial coverage for all expenses.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Confirmed Return / Onward Flight Itinerary',
      description: 'Verifiable round-trip or onward air ticket showing confirmed entry and exit dates from Kenya.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking for the duration of stay, or an explicit residential declaration from the inviting party in Kenya detailing the full address and host details.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Recent original bank statements (personal or corporate, depending on sponsorship) for the last 3 months, reflecting sufficient funds to support the stay in Kenya.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'yellow_fever_certificate',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'Mandatory International Certificate of Vaccination for Yellow Fever if arriving from or transiting (>12 hours) through a Yellow Fever endemic country prior to entering Kenya.',
      icon: '💉',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Supporting Business Documents',
      description: 'Secure the formal invitation letter and company registration from the Kenyan business partner, alongside the employer cover letter from your Indian firm.'
    },
    {
      step: 2,
      title: 'Access the Official Kenya eTA Portal',
      description: 'Visit the official government platform at https://www.etakenya.go.ke and create an account or start a new individual/group business travel application.'
    },
    {
      step: 3,
      title: 'Complete Business Details and Upload Files',
      description: 'Fill in the travel details, host company information, and upload required scans (passport biodata page, 35x45mm photo, invitation letter, cover letter, and flight confirmation).'
    },
    {
      step: 4,
      title: 'Pay the Statutory Processing Fee',
      description: 'Pay the non-refundable eTA fee of USD 51 via international credit/debit card on the portal.'
    },
    {
      step: 5,
      title: 'Receive eTA Approval and Print',
      description: 'Monitor application status. Once approved (typically within 2 working days), download and print the Kenya Electronic Travel Authorisation PDF document to present at airport check-in and Kenyan border control.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All travelers to Kenya must hold a valid approved Electronic Travel Authorisation (eTA) prior to boarding. The eTA must be presented alongside a passport valid for at least 6 months and a confirmed return ticket. A Yellow Fever vaccination certificate is strictly inspected if entering from or transiting through an endemic country.'
  }
};