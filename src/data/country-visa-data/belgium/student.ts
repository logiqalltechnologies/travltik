export default {
  country: 'belgium',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Belgium in New Delhi / Belgian Immigration Office (Office des Étrangers)',
  channels: [
    'Official Portal (VisaOnWeb)',
    'VFS Global India',
    'Embassy of Belgium / Consulate General'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 to 90 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€180 (Long Stay Visa D Consular Fee) + Belgian Administrative Contribution Fee (approx. €240 - €253)',
    vfsServiceFee: '₹2,110 (approximate VFS Global logistics fee)'
  },
  eVisa: {
    available: false,
    portal: 'https://visaonweb.diplomatie.be/',
    territorialScope: 'Belgium & Schengen Area (upon residence permit issuance)',
    validity: 'Up to 1 year',
    maxStay: '365 days (renewable upon arrival)',
    invitationRequired: true,
    processing: '15 - 90 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 1 year (Visa D)',
    stickerMultiple: 'Up to 1 year (Visa D Multiple Entry)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 12 months, with at least 2 blank pages, issued within the last 10 years',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm), white background, strict ICAO compliance, taken within the last 6 months',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'VisaOnWeb Online Application Form',
      description: 'Completed and signed VisaOnWeb application form with barcode printout',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Proof of Registration / Admission Letter',
      description: 'Official acceptance letter or enrollment certificate from a recognized Belgian higher education institution',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Means',
      description: 'Proof of adequate financial coverage (e.g., University Blocked Account, Annex 32 sponsorship form, scholarship certificate, or sanctioned education loan)',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'Official Belgian medical certificate issued by an Embassy-empanelled medical doctor in India',
      icon: 'health',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (Apostilled)',
      description: 'PCC issued by Regional Passport Office (RPO) within the last 6 months, duly apostilled by MEA India',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'admin_fee_proof',
      title: 'Proof of Administrative Contribution Fee',
      description: 'Bank payment proof of the non-refundable administrative contribution fee paid directly to the Belgian Immigration Office',
      icon: 'receipt',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Comprehensive travel health insurance covering at least €30,000 for emergency medical expenses, valid for the initial entry period',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Reserved round-trip or one-way flight itinerary to Belgium',
      icon: 'flight',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure University Admission & Pay Fees',
      description: 'Obtain an official acceptance letter from a Belgian higher education institution and pay the Belgian Administrative Contribution Fee to the Immigration Office.'
    },
    {
      step: 2,
      title: 'Complete VisaOnWeb Application',
      description: 'Register on the official VisaOnWeb portal, complete the Long Stay Visa D application form, and print the barcoded application document.'
    },
    {
      step: 3,
      title: 'Complete Medical & Legalization Mandates',
      description: 'Undergo a medical examination with an approved Belgian panel doctor in India and obtain an apostilled Police Clearance Certificate (PCC) from MEA.'
    },
    {
      step: 4,
      title: 'Submit Application at VFS Global',
      description: 'Book an appointment at a designated VFS Global Belgium center in India, submit mandatory documents, pay consular and service fees, and capture biometrics.'
    },
    {
      step: 5,
      title: 'Dossier Tracking & Resident Permit Registration',
      description: 'Track application progress via VFS/Immigration Office portal, collect passport with Visa D sticker, and register at the local Belgian commune within 8 days of arrival.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Applicants must provide an Apostilled Police Clearance Certificate issued within 6 months and a Medical Certificate from a Belgian Embassy-empanelled doctor in India. Proof of payment of the Belgian Administrative Contribution Fee must be attached before document submission at VFS Global.'
  }
};