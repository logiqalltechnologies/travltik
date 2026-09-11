export default {
  country: 'egypt',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the Arab Republic of Egypt, New Delhi',
  channels: ['VFS Global', 'Embassy Direct'],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '7 to 10 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: 'USD 60', 
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
    stickerSingleDouble: '90 days (extendable to student residence permit upon arrival)', 
    stickerMultiple: 'N/A' 
  },
  entryType: 'Single Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport valid for at least 6 months beyond the intended date of entry, with at least two blank pages.', 
      icon: '📘', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Two recent color photographs (taken within the last 6 months) on a solid white background, with a neutral facial expression and no spectacles.', 
      icon: '📸', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Visa Application Form', 
      description: 'Fully completed and signed visa application form. Block letters only, with no corrections or overwriting.', 
      icon: '📋', 
      mandatory: true 
    },
    { 
      key: 'admission_letter', 
      title: 'Official University Admission Letter', 
      description: 'Original enrollment or acceptance letter from a recognized Egyptian university or educational institution, officially stamped and approved by the Egyptian Ministry of Higher Education.', 
      icon: '🎓', 
      mandatory: true 
    },
    { 
      key: 'financial_proof', 
      title: 'Financial Proof & Support', 
      description: 'Proof of sufficient funds to cover tuition fees and living expenses. Must include: Sponsor’s bank statements for the last 6 months (stamped by the bank), an education loan sanction letter (if applicable), or official scholarship award letters.', 
      icon: '🏦', 
      mandatory: true 
    },
    { 
      key: 'medical_clearance', 
      title: 'Medical Certificates & HIV Test', 
      description: 'An official medical certificate including a negative HIV test report (mandatory for all student visas and stays exceeding 90 days in Egypt). A Yellow Fever vaccination certificate is also mandatory if arriving from or transiting through endemic countries.', 
      icon: '🩺', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Documentary proof of student housing, university hostel registration, or a notarized residential lease agreement in Egypt.', 
      icon: '🏨', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Confirmed one-way or round-trip flight booking showing entry into Egypt.', 
      icon: '✈️', 
      mandatory: true 
    },
    { 
      key: 'noc_certificate', 
      title: 'No Objection Certificate (NOC)', 
      description: 'An NOC from the previous school, college, or university in India confirming the student’s academic status and permission to study abroad.', 
      icon: '📝', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Secure University Admission', 
      description: 'Apply to and secure an official admission letter from a recognized educational institution in Egypt. Ensure the letter is registered with the Egyptian Ministry of Higher Education.' 
    },
    { 
      step: 2, 
      title: 'Undergo Medical Testing', 
      description: 'Obtain a certified medical health report, including a mandatory HIV test from an authorized laboratory.' 
    },
    { 
      step: 3, 
      title: 'Prepare the Application Dossier', 
      description: 'Gather all required documents, including financial statements, academic transcripts, the completed visa application form, and passport-sized photographs.' 
    },
    { 
      step: 4, 
      title: 'Submit Application at the Embassy', 
      description: 'Submit the physical application dossier and pay the consular fee in cash directly at the Embassy of Egypt in New Delhi or the Consulate General in Mumbai.' 
    },
    { 
      step: 5, 
      title: 'Visa Issuance and Travel', 
      description: 'Collect your passport with the stamped entry visa once processed, and travel to Egypt.' 
    },
    { 
      step: 6, 
      title: 'Apply for Student Residence Permit', 
      description: 'Within 7 days of arrival in Egypt, register your presence and apply for a formal Student Residence Permit at the Passport, Immigration and Nationality Administration (Mogamma) in Cairo.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'All foreign students staying in Egypt for more than 90 days must undergo a local medical examination (including an HIV test) to secure and renew their annual student residence permit. Registration at the local immigration office within 7 days of arrival is strictly mandatory.' 
  }
};