export default {
  country: 'singapore',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Manpower (MOM), Singapore',
  channels: [
    'https://www.mom.gov.sg/eservices/services/ep-online',
    'MOM myMOM Portal (Employer Portal)',
    'Direct via MOM Portal'
  ],
  processingTime: {
    eVisa: '10-20 working days',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'SGD 330 (SGD 105 Application Fee + SGD 225 Issuance Fee)',
    stickerConsularStandard: 'N/A',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: true,
    portal: 'https://www.mom.gov.sg/eservices/services/ep-online',
    territorialScope: 'Nationwide',
    validity: '1 to 2 years (Renewable)',
    maxStay: 'Up to 2 years',
    invitationRequired: true,
    processing: '10-20 working days'
  },
  stayDuration: {
    eVisa: '1 to 2 years (Aligned with employment contract)',
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'N/A'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the date of entry into Singapore with at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Taken within the last 6 months, white background, neutral expression, 35mm x 45mm dimensions, matte or semi-matte finish.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'ipa_letter',
      title: 'In-Principle Approval (IPA) Letter',
      description: 'Official IPA letter issued by Singapore Ministry of Manpower (MOM) to the employer. Serves as a single-entry visa clearance for arrival in Singapore.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'educational_docs',
      title: 'Educational Credentials & Verification Report',
      description: 'Degree certificates and academic transcripts verified by a MOM-approved background check agency (e.g., DataFlow) under the COMPASS evaluation framework.',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Offer Letter / Contract',
      description: 'Formal signed employment agreement from the Singapore-registered employer detailing position, monthly salary, and duration.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'sg_arrival_card',
      title: 'SG Arrival Card (SGAC)',
      description: 'Mandatory electronic entry declaration and health declaration submitted via the official ICA portal or MyICA Mobile app within 3 days prior to arrival.',
      icon: '📝',
      mandatory: true
    },
    {
      key: 'medical_report',
      title: 'Medical Examination Report',
      description: 'Mandatory health screening including HIV test and Chest X-ray (Tuberculosis screening) completed post-arrival at an authorized clinic in Singapore.',
      icon: '🩺',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed flight ticket or travel itinerary to Singapore.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Temporary hotel booking, serviced apartment confirmation, or tenancy agreement in Singapore.',
      icon: '🏨',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Job Offer & Degree Verification',
      description: 'Secure an employment offer from a Singapore employer meeting MOM qualifying salary thresholds. Complete educational qualification verification through an MOM-approved background verification agency.'
    },
    {
      step: 2,
      title: 'Online Application by Employer',
      description: 'The Singapore employer or authorized Employment Agency files the Employment Pass (EP) or S Pass application online via MOM EP Online / myMOM Portal.'
    },
    {
      step: 3,
      title: 'Issuance of In-Principle Approval (IPA)',
      description: 'Upon approval (10–20 working days), MOM issues an In-Principle Approval (IPA) letter. The IPA letter acts as an entry visa to enter Singapore.'
    },
    {
      step: 4,
      title: 'Submit SG Arrival Card (SGAC)',
      description: 'Submit the electronic SG Arrival Card (SGAC) with health declaration on the official ICA website within 3 days prior to departing for Singapore.'
    },
    {
      step: 5,
      title: 'Travel & Post-Arrival Medical Check',
      description: 'Travel to Singapore using the IPA letter. Complete the required medical screening (HIV test and Chest X-ray) at a recognized Singapore medical clinic.'
    },
    {
      step: 6,
      title: 'Pass Issuance & Biometric Registration',
      description: 'Employer submits medical clearance on MOM portal to request pass issuance. Complete biometric enrolment at MOM Employment Pass Services Centre (EPSC) to receive the long-term Work Pass card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'SG Arrival Card (SGAC) with health declaration is mandatory within 3 days before arrival via the official ICA portal. Mandatory post-arrival medical checkup (HIV test and Chest X-ray) required for pass issuance. Educational credentials must be verified via MOM-recognized background agencies.'
  }
};