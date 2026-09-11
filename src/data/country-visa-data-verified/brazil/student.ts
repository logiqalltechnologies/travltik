export default {
  country: 'brazil',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of Brazil, New Delhi',
  channels: [
    'E-consular Portal (https://ec-nova-delhi.itamaraty.gov.br/)',
    'Embassy of Brazil in New Delhi',
    'Consulate General of Brazil in Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 8,000',
    vfsServiceFee: 'N/A'
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
    stickerSingleDouble: 'Up to 365 days',
    stickerMultiple: 'Up to 365 days (renewable annually in Brazil)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least two blank pages, valid for at least 6 months beyond the intended stay in Brazil.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent photographs (35x45mm) taken within the last 6 months against a white background, with a neutral expression and full face clearly visible.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form Receipt (RER)',
      description: 'Completed online application form from the Ministry of Foreign Affairs portal (https://formulario-mre.serpro.gov.br). The printed and signed RER receipt must be submitted with the physical application.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'admission_letter',
      title: 'Official Letter of Acceptance',
      description: 'Original letter of acceptance or proof of enrollment (Comprovante de Matrícula) from a recognized Brazilian educational institution (IES) registered with the Ministry of Education (MEC).',
      icon: '🎓',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Financial Proof',
      description: 'Proof of financial capability to cover tuition and living expenses in Brazil. Accepted documents include education loan approval letters, official scholarship award letters, or bank statements of the applicant/sponsor for the last 3 months showing sufficient funds, accompanied by a notarized affidavit of support.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Police Clearance Certificate issued by the Regional Passport Office (RPO), apostilled by the Ministry of External Affairs (MEA) of India, and issued within the last 90 days.',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'birth_certificate',
      title: 'Apostilled Birth Certificate',
      description: 'Birth certificate containing parents\' full names, apostilled by the Ministry of External Affairs (MEA) of India, required for registration with the Federal Police in Brazil.',
      icon: '👶',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight booking or itinerary showing the intended dates of entry and exit from Brazil.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Proof of secure accommodation in Brazil, such as a student housing contract, hostel/hotel reservation, or a notarized declaration of host accommodation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'International travel insurance policy valid for Brazil, covering medical expenses, emergency hospitalization, and repatriation for the entire duration of the stay.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'yellow_fever',
      title: 'Yellow Fever Vaccination Certificate',
      description: 'International Certificate of Vaccination against Yellow Fever. Highly recommended for travel to Brazil and mandatory for re-entry into India after visiting Brazil.',
      icon: '💉',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill Online Visa Form',
      description: 'Complete the online visa application form (RER) on the official Ministry of Foreign Affairs (MRE) portal and upload all required documents.'
    },
    {
      step: 2,
      title: 'Print and Sign RER',
      description: 'Print the generated Visa Application Form Receipt (RER), paste your physical photo (35x45mm), and sign the form.'
    },
    {
      step: 3,
      title: 'Submit to E-consular Portal',
      description: 'Create an account on the E-consular portal (ec-nova-delhi.itamaraty.gov.br) and upload the RER and supporting documents for pre-approval by the consular team.'
    },
    {
      step: 4,
      title: 'Pay Consular Fee',
      description: 'Once pre-approved on E-consular, pay the consular fee of INR 8,000 via bank transfer/deposit as per the Embassy\'s official payment instructions.'
    },
    {
      step: 5,
      title: 'Submit Physical Documents',
      description: 'Book an appointment through the E-consular portal to submit your physical passport, signed RER, payment receipt, and original apostilled documents directly to the Embassy or Consulate.'
    },
    {
      step: 6,
      title: 'Passport Collection',
      description: 'Track your application. Once processed (typically 10 to 15 working days), collect your passport containing the VITEM IV visa sticker.'
    },
    {
      step: 7,
      title: 'Register with Federal Police',
      description: 'Within 90 days of arrival in Brazil, register with the Federal Police (Polícia Federal) to obtain your National Migration Registration Card (CRNM).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Within 90 days of arrival in Brazil, holders of a Student Visa (VITEM IV) must register with the Federal Police (Polícia Federal) to obtain their National Migration Registration Card (CRNM). Yellow Fever vaccination is highly recommended for entry into Brazil and mandatory for returning to India.'
  }
};