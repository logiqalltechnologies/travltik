export default {
  country: 'czech-republic',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs of the Czech Republic / Ministry of the Interior (MVČR)',
  channels: [
    'VFS Global Visa Application Centre',
    'Embassy of the Czech Republic in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '60 to 90 working days',
    expressSticker: 'Not available for long-term employment visas'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '5,000 CZK (payable in INR equivalent as per monthly consular exchange rate)',
    vfsServiceFee: '₹1,980 (approximate VFS logistics fee, inclusive of taxes)'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (Short-term Schengen Work Visa)',
    stickerMultiple: 'Up to 2 years (Employee Card / Long-term Visa for Employment, renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended visa validity, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm), taken within the last 6 months against a clear white background, showing full face without obstruction.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Employee Card / Long-Term Visa Application Form',
      description: 'Duly completed and signed official application form for an Employee Card or Czech Long-Term Visa.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract or Work Agreement',
      description: 'Original or certified copy of an employment contract, agreement to perform work, or preliminary contract stipulating monthly salary not lower than basic minimum wage and minimum weekly working hours (15 hours/week). Must specify the Vacancy Reference Number registered with the Czech Ministry of Labour (MPSV).',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation in Czech Republic',
      description: 'Document proving secure accommodation (e.g., official lease agreement, sub-lease, or notarized Confirmation of Accommodation from the landlord/property owner on official Czech Ministry of Interior form).',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Police Clearance Certificate issued by Regional Passport Office (RPO) in India, legalized with an Apostille stamp from MEA India, and officially translated into Czech by an authorized Czech certified translator.',
      icon: 'shield-check',
      mandatory: true
    },
    {
      key: 'qualifications',
      title: 'Proof of Professional Qualifications',
      description: 'Degree certificates, diplomas, or professional licenses proving competence for the position. Must be apostilled and officially translated into Czech language.',
      icon: 'award',
      mandatory: true
    },
    {
      key: 'medical_insurance',
      title: 'Comprehensive Travel Medical Insurance',
      description: 'Upon visa approval/collection, proof of comprehensive travel medical insurance from Pojišťovna VZP (PVZP) or a certified provider for the period before joining the public health insurance system, covering minimum benefit limits of €400,000.',
      icon: 'insurance',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Job Offer & Central Register Vacancy Check',
      description: 'Ensure prospective employer registers the job vacancy in the Central Register of Vacancies Available for Employee Card Holders (MPSV portal) and obtains a vacancy reference number.'
    },
    {
      step: 2,
      title: 'Document Legalization and Czech Translation',
      description: 'Obtain Indian Police Clearance Certificate (PCC) and educational qualifications, get them Apostilled by MEA India, and translated into Czech by an officially sworn translator recognized by the Czech Ministry of Justice.'
    },
    {
      step: 3,
      title: 'Appointment Booking at VFS / Embassy',
      description: 'Schedule an appointment for Long-Term Visa / Employee Card application filing at the designated VFS Czech Visa Application Centre or Czech Embassy in New Delhi as per jurisdiction.'
    },
    {
      step: 4,
      title: 'Dossier Submission & Biometrics Collection',
      description: 'Attend the appointment in person, submit physical document set, pay statutory consular fees (5,000 CZK equivalent in INR), and provide biometric data (fingerprints).'
    },
    {
      step: 5,
      title: 'Application Decision & Visa Stamping',
      description: 'Ministry of the Interior of the Czech Republic (MVČR) adjudicates the application (up to 60-90 days). Upon approval, submit passport and PVZP insurance policy for long-term visa D/VR entry sticker issuance.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All documents submitted in support of a Czech long-term work visa application must be either originally in Czech or officially translated into the Czech language by an authorized certified translator. Documents (except passport) cannot be older than 180 days upon submission.'
  }
};