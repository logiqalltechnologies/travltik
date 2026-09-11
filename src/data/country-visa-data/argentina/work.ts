export default {
  country: 'argentina',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of Argentina in New Delhi',
  channels: [
    'https://eindi.cancilleria.gob.ar/',
    'https://www.argentina.gob.ar/servicio/obtener-visado-para-trabajar-en-la-argentina'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '250 USD',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: '',
    territorialScope: '',
    validity: '',
    maxStay: '',
    invitationRequired: false,
    processing: ''
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '365 days',
    stickerMultiple: '365 days'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least 6 months beyond the intended stay and have at least two blank visa pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'permiso_ingreso',
      title: 'Permiso de Ingreso (Entry Permit)',
      description: 'Official entry permit issued by the National Directorate of Migration (DNM) in Argentina, requested by the host employer.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract',
      description: 'Signed employment contract registered with the DNM, with the employer\'s signature certified by an Argentine notary.',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Apostilled Police Clearance Certificate issued by the Regional Passport Office, required for applicants aged 16 and older.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (40x40mm)',
      description: 'Three recent color photographs, white background, 3/4 profile from the right side.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed visa application form, signed in front of the consular officer.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'birth_certificate',
      title: 'Birth Certificate',
      description: 'Apostilled birth certificate translated into Spanish by a certified translator.',
      icon: '👶',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Entry Permit (Permiso de Ingreso)',
      description: 'The employer in Argentina must initiate the application and obtain the entry permit from the DNM.'
    },
    {
      step: 2,
      title: 'Prepare and Legalize Documents',
      description: 'Gather all required documents, including the PCC and birth certificate, and have them apostilled by the Ministry of External Affairs (MEA) of India and translated into Spanish.'
    },
    {
      step: 3,
      title: 'Request Consular Appointment',
      description: 'Contact the Embassy of Argentina in New Delhi or the Consulate General in Mumbai directly via email to schedule a visa interview once the DNM permit is issued.'
    },
    {
      step: 4,
      title: 'Pay Consular Fees',
      description: 'Pay the consular fee of 250 USD directly to the Embassy\'s designated bank account as instructed during the appointment booking.'
    },
    {
      step: 5,
      title: 'Attend Consular Interview',
      description: 'Present all original documents, apostilles, translations, and proof of payment in person at the Embassy or Consulate for the mandatory interview.'
    },
    {
      step: 6,
      title: 'Visa Issuance',
      description: 'Wait for the visa sticker to be processed and stamped into your passport (typically within 15 working days).'
    }
  ],
  specialRequirements: {
    entry_rules: 'The employment contract must be registered with the Unique Registry of Foreign Petitioners (RENURE) of the DNM. Yellow fever vaccination is recommended if traveling from risk areas.'
  }
};