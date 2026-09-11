export default {
  country: 'cyprus',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Civil Registry and Migration Department / High Commission of the Republic of Cyprus in New Delhi',
  channels: ['VFS Global', 'High Commission of Cyprus in New Delhi', 'Official Educational Institution Portal'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-30 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '60 EUR',
    vfsServiceFee: '1800 INR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Nationwide',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (Entry visa to be converted to Temporary Residence Permit upon arrival)',
    stickerMultiple: 'Duration of academic course (via annual Temporary Residence Permit)'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 2 years or full duration of studies, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Two recent 35x45mm photographs with a white background, taken within the last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form (Form M.58 / M.70)',
      description: 'Duly completed and signed Cyprus long-stay student visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Letter of Acceptance',
      description: 'Unconditional acceptance letter from a recognized Cyprus Higher Education Institution detailing course duration and fees.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'academic_certificates',
      title: 'Educational Qualification Certificates',
      description: 'Attested marksheets and certificates (10th, 12th, and Degree), legalized/attested by MEA India and Cyprus High Commission.',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original PCC issued by Passport Seva Kendra (valid for 6 months), legalized/attested by MEA India.',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Examination Clearance',
      description: 'Medical reports for HIV, Hepatitis B & C, Syphilis, and Chest X-Ray for Tuberculosis issued within 4 months prior to arrival, attested by MEA.',
      icon: 'health',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Guarantee',
      description: 'Original bank statements covering tuition and minimum living expenses (~7,000 EUR equivalent) and/or education loan approval letter.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'fee_receipt',
      title: 'Tuition Fee Payment Receipt',
      description: 'Official payment receipt from the Cyprus educational institution verifying advance fee deposit.',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reserved entry flight ticket to Larnaca or Paphos airport.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'University dormitory agreement or private lease agreement in Cyprus.',
      icon: 'hotel',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'University Admission & Pre-Approval Clearance',
      description: 'Obtain unconditional acceptance letter; institution submits initial clearance dossier to Civil Registry and Migration Department in Nicosia.'
    },
    {
      step: 2,
      title: 'Document Legalization',
      description: 'Apostille / attest educational marksheets, Police Clearance Certificate, and medical test reports at Ministry of External Affairs (MEA), India.'
    },
    {
      step: 3,
      title: 'Dossier Submission & Interview',
      description: 'Submit the complete visa application dossier at VFS Global or the High Commission of Cyprus in New Delhi and attend the consular interview.'
    },
    {
      step: 4,
      title: 'Entry Visa Issuance & Travel',
      description: 'Collect your passport with the entry visa sticker and depart for Cyprus.'
    },
    {
      step: 5,
      title: 'Arrival Registration & Temporary Residence Permit (Pink Slip)',
      description: 'Undergo repeated medical check in Cyprus, register with the Civil Registry and Migration Department within 7 days of arrival to obtain the Temporary Residence Permit.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Cyprus student entry visa acts solely as an entry permit. Students must register at their institution and report to the Migration Department within 7 days of arrival to complete mandatory local blood/health tests and apply for the Temporary Residence Permit (Pink Slip).'
  }
};