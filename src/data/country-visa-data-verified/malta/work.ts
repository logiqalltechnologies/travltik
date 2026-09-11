export default {
  country: 'malta',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Identità (Expatriate Unit) & High Commission of Malta in New Delhi',
  channels: [
    'Identità Expatriate Unit Portal',
    'VFS Global Visa Application Centre',
    'High Commission of Malta in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A (Identità Approval Letter: 6 to 8 weeks)',
    standardSticker: '15 to 30 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'EUR 300 (Identità Single Permit Application Fee)',
    stickerConsularStandard: 'EUR 150 (National Long Stay Visa D Fee)',
    vfsServiceFee: 'INR 2,800 (Approximate VFS service and processing fee)'
  },
  eVisa: {
    available: false,
    portal: 'https://identita.gov.mt',
    territorialScope: 'Malta (Schengen National D Visa)',
    validity: '1 Year (Renewable upon contract extension)',
    maxStay: '365 Days',
    invitationRequired: true,
    processing: '60 to 90 days total process'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90/180 days initial entry (valid for duration of Type D visa)',
    stickerMultiple: '1 Year (Linked to Malta e-Residence Card duration)'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from Malta, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within the last 6 months) color photographs on a neutral white background, 35mm x 45mm, sharp focus, showing full face.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'identita_approval',
      title: 'Identità Still Approval Letter',
      description: 'Official Work Permit Approval Letter ("Still Approval Letter") issued by Identità Malta to the prospective Maltese employer.',
      icon: 'file-check',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Signed Employment Contract',
      description: 'Duly signed employment contract between the Maltese employer and the applicant, detailing designation, working hours, and gross annual salary.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa Application Form (Type D)',
      description: 'Fully completed and signed Schengen National D Visa application form for long stay.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Original Police Clearance Certificate issued by the Passport Seva Kendra (MEA India), duly Apostilled by Ministry of External Affairs, India, not older than 6 months.',
      icon: 'shield-check',
      mandatory: true
    },
    {
      key: 'educational_qualifications',
      title: 'CV and Qualification Certificates',
      description: 'Detailed Curriculum Vitae (Europass format) along with attested copies of relevant academic degree certificates and work experience letters supporting job eligibility.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or one-way flight reservation/itinerary from India to Malta.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation in Malta',
      description: 'Registered rental lease agreement with Housing Authority approval in Malta, or official Declaration of Proof of Residence signed by landlord.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Comprehensive travel medical insurance policy with minimum coverage of EUR 30,000 for emergency medical and repatriation expenses valid for the initial stay duration.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original personal bank statements for the last 6 months certified by the bank, demonstrating financial self-sufficiency prior to initial payroll.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Identità Work Permit Application',
      description: 'Maltese employer submits Single Permit application online through the Identità Expatriate Unit Portal.'
    },
    {
      step: 2,
      title: 'Receive Still Approval Letter',
      description: 'Upon successful preliminary review, Identità issues a Still Approval Letter authorizing the issuance of a long-stay visa.'
    },
    {
      step: 3,
      title: 'Book VFS Appointment in India',
      description: 'Schedule a National Visa (Type D) appointment at the designated VFS Global Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Submit Dossier and Biometrics',
      description: 'Attend appointment, submit mandatory physical documents, provide biometric data, and pay consular and service fees.'
    },
    {
      step: 5,
      title: 'Visa Issuance & Entry to Malta',
      description: 'Collect passport with National Type D Visa sticker, travel to Malta, and report to Identità to complete biometrics for the final e-Residence Card.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All non-EU workers must finalize their e-Residence Card registration at Identità offices in Msida, Malta within 15 days of arrival using the temporary visa me approval.'
  }
};