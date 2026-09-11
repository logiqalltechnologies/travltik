export default {
  country: 'luxembourg',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign and European Affairs (Direction de l\'immigration) / Embassy of Luxembourg in New Delhi',
  channels: [
    'Direction de l\'immigration (Luxembourg)',
    'VFS Global Visa Application Centre',
    'Embassy of Luxembourg in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 to 30 working days (after receiving Autorisation de Séjour)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€50 (National Visa D Fee)',
    vfsServiceFee: '₹1,950'
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
    stickerSingleDouble: 'Up to 90 days (Initial Entry Window)',
    stickerMultiple: '1 Year (Renewable Residence Permit)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond intended entry, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Two recent (35x45mm) color photos, white background, 80% face coverage, compliant with ICAO standards.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'autorisation_de_sejour',
      title: 'Temporary Authorization to Stay (Autorisation de Séjour)',
      description: 'Official approval document issued by the Ministry of Foreign and European Affairs in Luxembourg prior to visa submission.',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa (Type D) Application Form',
      description: 'Fully completed and signed National Visa D application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Signed Employment Contract',
      description: 'Official employment agreement countersigned by the Luxembourg employer and registered with ADEM where required.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'police_clearance',
      title: 'Apostilled Police Clearance Certificate',
      description: 'Official PCC issued by Passport Seva Kendra (MEA India), legalized via Apostille, issued within the last 3 months.',
      icon: 'shield',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed flight reservation or itinerary showing intended date of entry into Luxembourg.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Lease agreement, hotel reservation, or attestation of accommodation by employer covering initial stay.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Medical coverage of minimum €30,000 for Schengen Area covering medical emergency and repatriation for initial travel period.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'medical_certificate',
      title: 'Medical Health Certificate',
      description: 'Official medical certificate confirming absence of diseases posing risks to public health (required for stay >90 days).',
      icon: 'health',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Employer Obtains ADEM Certificate & Approval',
      description: 'Luxembourg employer declares vacancy to ADEM and requests authorization to hire a non-EU national.'
    },
    {
      step: 2,
      title: 'Apply for Temporary Authorization to Stay',
      description: 'Submit the temporary stay authorization dossier (Autorisation de séjour) directly to the Direction de l\'immigration in Luxembourg.'
    },
    {
      step: 3,
      title: 'Legalize Documents (Apostille)',
      description: 'Obtain MEA Apostille on Indian Police Clearance Certificate and civil status documents.'
    },
    {
      step: 4,
      title: 'Book VFS Appointment & Submit Visa D',
      description: 'Upon receiving approval, schedule an appointment at VFS Global in India to submit the Type D visa application and biometrics.'
    },
    {
      step: 5,
      title: 'Pay Fees and Submit Dossier',
      description: 'Pay €50 consular fee and VFS service fees during your appointment.'
    },
    {
      step: 6,
      title: 'Travel and Formalize Residence in Luxembourg',
      description: 'Arrive in Luxembourg, declare arrival at local commune within 3 business days, complete medical check, and collect final Titre de Séjour.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of long-stay Visa D must complete a arrival declaration (déclaration d\'arrivée) at their local Luxembourg municipality (Commune) within 3 working days of arrival and undergo a medical check by the Health Directorate (Direction de la Santé) to obtain the final residence permit (Titre de séjour).'
  }
};