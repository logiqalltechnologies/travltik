export default {
  country: 'iceland',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Directorate of Immigration (Útlendingastofnun) / Embassy of Iceland, New Delhi',
  channels: ['Directorate of Immigration Portal', 'VFS Global Iceland Application Centre', 'Embassy of Iceland'],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '60 to 90 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: '22,000 ISK (approx. €148 / ₹13,500)', 
    vfsServiceFee: '₹1,850' 
  },
  eVisa: { 
    available: false, 
    portal: 'https://utl.is', 
    territorialScope: 'Iceland (Schengen Area)', 
    validity: 'Duration of Study Program (renewable annually)', 
    maxStay: 'As per academic course duration', 
    invitationRequired: false, 
    processing: 'N/A' 
  },
  stayDuration: { 
    eVisa: 'N/A', 
    stickerSingleDouble: 'Up to 90 days (D-Visa entry sticker)', 
    stickerMultiple: '1 Year (Residence permit duration, renewable)' 
  },
  entryType: 'Multiple Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport valid for at least 3 months beyond the intended stay with at least 2 blank pages', 
      icon: 'passport', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Recent (under 6 months) color photos with white background, neutral expression, 80% face coverage', 
      icon: 'photo', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Residence Permit Application Form (Form C-100)', 
      description: 'Duly completed and signed application form for student residence permit along with VFS checklist', 
      icon: 'form', 
      mandatory: true 
    },
    { 
      key: 'admission_letter', 
      title: 'Official University Admission Letter', 
      description: 'Confirmation of acceptance from an accredited full-time university or higher education institution in Iceland', 
      icon: 'school', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Proof of Financial Means', 
      description: 'Bank statements, sanctioned education loan documents, or official scholarship letters verifying access to a minimum of 239,895 ISK per month for living costs', 
      icon: 'bank', 
      mandatory: true 
    },
    { 
      key: 'criminal_record', 
      title: 'Police Clearance Certificate (PCC)', 
      description: 'Original Apostilled PCC issued by Passport Seva Kendra / Ministry of External Affairs, India, not older than 6 months', 
      icon: 'shield', 
      mandatory: true 
    },
    { 
      key: 'travel_insurance', 
      title: 'Health Insurance Coverage', 
      description: 'Proof of health insurance with minimum coverage of 2,000,000 ISK valid for the first 6 months of stay from an approved provider', 
      icon: 'insurance', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Signed lease agreement, university dorm allocation letter, or housing contract in Iceland', 
      icon: 'hotel', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Reserved travel itinerary/flight reservation into Iceland', 
      icon: 'flight', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Secure University Acceptance', 
      description: 'Obtain an official full-time admission letter from an accredited Icelandic higher education institution.' 
    },
    { 
      step: 2, 
      title: 'Submit Application & Fee to Útlendingastofnun', 
      description: 'Send the completed paper application (Form C-100) and mandatory supporting documents directly to the Directorate of Immigration in Iceland and pay the 22,000 ISK fee.' 
    },
    { 
      step: 3, 
      title: 'Complete Biometrics at VFS Global', 
      description: 'Schedule an appointment at the nearest VFS Global Iceland visa application center in India to enroll biometric data and submit original passport.' 
    },
    { 
      step: 4, 
      title: 'D-Visa Issuance & Entry', 
      description: 'Upon permit approval by Útlendingastofnun, receive the entry D-visa sticker in India to travel to Iceland and collect the biometric residence card upon arrival.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'Mandatory tuberculosis (TB) health screening must be completed upon arrival in Iceland. Students must register their residential address with Registers Iceland (Þjóðskrá) within 2 weeks of arrival to obtain a Kennitala (national ID) and receive their physical Residence Permit Card.' 
  }
};