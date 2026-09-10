export default {
  country: 'czech-republic',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs of the Czech Republic',
  channels: ['VFS Global Czech Republic', 'Embassy of the Czech Republic in New Delhi'],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '15 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: '90 EUR', 
    vfsServiceFee: '25 EUR' 
  },
  eVisa: { 
    available: false, 
    portal: '', 
    territorialScope: 'N/A', 
    validity: 'N/A', 
    maxStay: 'N/A', 
    invitationRequired: false, 
    processing: 'N/A' 
  },
  stayDuration: { 
    eVisa: 'N/A', 
    stickerSingleDouble: 'Up to 90 days', 
    stickerMultiple: 'Up to 90 days within any 180-day period' 
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure from the Schengen area, with at least 2 blank pages.', 
      icon: 'passport', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Two recent passport-size photographs taken within the last 6 months against a white background, full face, non-reflective glass.', 
      icon: 'photo', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Schengen Visa Application Form', 
      description: 'Fully completed and signed official Schengen visa application form.', 
      icon: 'form', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Round-trip flight reservation or detailed travel itinerary with dates and flight numbers.', 
      icon: 'flight', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Confirmed hotel reservation, rental agreement, or officially verified invitation form (Pozvání) from the host company.', 
      icon: 'hotel', 
      mandatory: true 
    },
    { 
      key: 'travel_insurance', 
      title: 'Travel Medical Insurance', 
      description: 'Minimum coverage of EUR 30,000 for medical emergency, hospitalization, and repatriation across the entire Schengen zone.', 
      icon: 'insurance', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Financial Proof & ITR', 
      description: 'Personal bank statements for the last 3-6 months, Income Tax Returns (ITR-V) for the last 3 years, and salary slips for the last 3 months.', 
      icon: 'bank', 
      mandatory: true 
    },
    { 
      key: 'business_invitation', 
      title: 'Official Czech Invitation Letter', 
      description: 'Letter of invitation from the host company in the Czech Republic detailing the purpose, duration, and financial sponsorship of the trip, or an official Alien Police Czech Republic stamped invitation form.', 
      icon: 'document', 
      mandatory: true 
    },
    { 
      key: 'employer_noc', 
      title: 'Employer Cover Letter & NOC', 
      description: 'Cover letter from Indian employer stating applicant position, salary, length of employment, approval of leave, and confirmation of business visit details.', 
      icon: 'document', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Complete Schengen Visa Application', 
      description: 'Fill out the Schengen visa application form completely and print it for signature.' 
    },
    { 
      step: 2, 
      title: 'Book VFS Appointment', 
      description: 'Schedule an appointment at the nearest VFS Global Czech Republic Visa Application Centre in India.' 
    },
    { 
      step: 3, 
      title: 'Prepare Documentation Dossier', 
      description: 'Assemble all original mandatory documents, business invitation letters, cover letters, and financial records.' 
    },
    { 
      step: 4, 
      title: 'Submit Biometrics and Application', 
      description: 'Attend the appointment in person to submit application dossier, capture biometric data (fingerprints/photo), and pay consular and service fees.' 
    },
    { 
      step: 5, 
      title: 'Passport Collection', 
      description: 'Track application processing status online and collect the passport with Schengen sticker visa once processed.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'Schengen 90/180-day limitation applies across all Schengen states. If expenses are covered by host company, an official invitation form certified by the Directorate of Alien Police Service in the Czech Republic may be required.' 
  }
};