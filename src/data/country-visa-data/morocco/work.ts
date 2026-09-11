export default {
  country: 'morocco',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of the Kingdom of Morocco, New Delhi',
  channels: [
    'Embassy of the Kingdom of Morocco, New Delhi',
    'Consulate General of the Kingdom of Morocco, Mumbai'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '10 to 15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '2,700 INR',
    vfsServiceFee: 'N/A (Direct Embassy Submission)'
  },
  eVisa: {
    available: false,
    portal: 'https://www.acces-maroc.ma',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days (must apply for Carte de Séjour within 30 days of arrival)',
    stickerMultiple: 'N/A'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport with at least 6 months validity from the date of entry into Morocco, containing at least two blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (taken within the last 6 months) on a white background, neutral expression, showing 70-80% face coverage.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Visa application form completed in capital letters and signed by the applicant.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'work_contract',
      title: 'Approved Employment Contract',
      description: 'Original employment contract ("Contrat de Travail") duly endorsed and visaed by the Moroccan Ministry of Employment (ANAPEC / Taechir).',
      icon: '💼',
      mandatory: true
    },
    {
      key: 'pcc',
      title: 'Police Clearance Certificate (PCC)',
      description: 'Police Clearance Certificate issued by the Regional Passport Office (Passport Seva Kendra) in India, legalized/apostilled by the Ministry of External Affairs (MEA).',
      icon: '👮',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Certificate',
      description: 'A medical certificate of good health issued by a registered medical practitioner within the last 3 months, certifying that the applicant is free from any contagious or infectious diseases.',
      icon: '🏥',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'One-way or round-trip flight reservation showing the travel dates and flight numbers.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'A lease agreement, hotel booking, or an official letter from the employer in Morocco confirming provision of accommodation.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 3 months, stamped and signed by the bank, to prove sufficient funds for initial settlement.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Secure Moroccan Work Contract',
      description: 'Your employer in Morocco must obtain an approved employment contract ("Contrat de Travail Visé") from the Moroccan Ministry of Employment via the Taechir platform.'
    },
    {
      step: 2,
      title: 'Obtain and Legalize PCC',
      description: 'Apply for a Police Clearance Certificate (PCC) from the Passport Seva Kendra. Once issued, get it apostilled/legalized by the Ministry of External Affairs (MEA), India.'
    },
    {
      step: 3,
      title: 'Prepare Medical Certificate',
      description: 'Undergo a medical examination and obtain a certificate of good health from a registered medical practitioner.'
    },
    {
      step: 4,
      title: 'Complete the Application Form',
      description: 'Download, print, and fill out the official Moroccan Visa Application Form in block letters.'
    },
    {
      step: 5,
      title: 'Submit Application at the Embassy',
      description: 'Submit your physical passport, completed form, and all supporting documents directly to the Embassy of the Kingdom of Morocco in New Delhi or the Consulate General in Mumbai.'
    },
    {
      step: 6,
      title: 'Pay Consular Fees',
      description: 'Pay the visa fee of 2,700 INR in cash or via demand draft as specified by the consular section during submission.'
    },
    {
      step: 7,
      title: 'Collect Visa and Travel',
      description: 'Once processed (10 to 15 working days), collect your passport with the sticker visa and travel to Morocco.'
    },
    {
      step: 8,
      title: 'Apply for Residence Permit',
      description: 'Within 30 days of arrival in Morocco, apply for a residence permit ("Carte de Séjour") at the local police station (Direction Générale de la Sûreté Nationale / Préfecture de Police) nearest to your residence.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Work visa holders must register with the local police department (Direction Générale de la Sûreté Nationale) within 30 days of entry to obtain their Residence Permit (Carte de Séjour). Failure to do so will render the stay illegal.'
  }
};