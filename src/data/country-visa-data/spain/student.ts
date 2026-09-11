export default {
  country: 'spain',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Spain in New Delhi / Consulate General of Spain in Mumbai',
  channels: [
    'https://www.exteriores.gob.es/Embajadas/NEWDELHI/en/Pages/Inicio.aspx',
    'https://india.blsspainvisa.com/',
    'https://www.exteriores.gob.es/Embajadas/NEWDELHI/en/Pages/Contactos.aspx'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '30 days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 EUR',
    blsServiceFee: '15.45 EUR'
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
    stickerSingleDouble: 'Duration of study (up to 180 days)',
    stickerMultiple: 'Duration of study (over 180 days, renewable via TIE)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Passport must be valid for at least the duration of the intended stay and have at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'White background, taken within 6 months, neutral expression.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed National Visa Application Form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Flight reservation showing intended travel dates.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'University housing confirmation, rental agreement, or host invitation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Public or private health insurance with an entity authorized to operate in Spain, covering all risks normally covered for Spanish citizens.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Admission Letter',
      description: 'Official letter of admission from an authorized educational center in Spain, specifying the study program and hours per week (minimum 20 hours).',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'financial_means',
      title: 'Proof of Financial Means',
      description: 'Proof of availability of at least 100% of the IPREM monthly (approx. €600/month) via bank statements, scholarship, or sponsor letter.',
      icon: '💰',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Required for stays over 180 days. Official certificate stating the applicant does not suffer from diseases with public health implications under International Health Regulations.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'criminal_record',
      title: 'Criminal Record Certificate',
      description: 'Required for stays over 180 days. Police clearance certificate (PCC) issued by Indian authorities, apostilled.',
      icon: '📜',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents, ensuring certificates (medical and criminal record) are apostilled and translated into Spanish if required.'
    },
    {
      step: 2,
      title: 'Complete Application Form',
      description: 'Download, print, and fill out the National Visa Application Form.'
    },
    {
      step: 3,
      title: 'Book Appointment',
      description: 'Schedule an appointment through the official BLS International portal for Spain.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Attend the appointment at the BLS center, submit physical documents, provide biometrics, and pay the visa and service fees.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Wait for the processing of the application, which legally takes up to 30 days.'
    },
    {
      step: 6,
      title: 'Collect Visa',
      description: 'Collect your passport with the visa sticker from the BLS center or receive it via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'For stays exceeding 180 days, students must apply for a Foreigner Identity Card (TIE - Tarjeta de Identidad de Extranjero) at the local police station in Spain within 30 days of entry.'
  }
};