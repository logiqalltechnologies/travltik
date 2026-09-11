export default {
  country: 'egypt',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Arab Republic of Egypt, New Delhi',
  channels: ['Embassy Direct'],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '7 to 10 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: 'INR 6,500', 
    vfsServiceFee: 'N/A' 
  },
  eVisa: { 
    available: false, 
    portal: 'https://visa2egypt.gov.eg', 
    territorialScope: 'N/A', 
    validity: 'N/A', 
    maxStay: 'N/A', 
    invitationRequired: false, 
    processing: 'N/A' 
  },
  stayDuration: { 
    eVisa: 'N/A', 
    stickerSingleDouble: '30 days', 
    stickerMultiple: '90 days' 
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport with at least 6 months validity from the date of arrival in Egypt, containing at least 2 blank pages.', 
      icon: '📘', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Two recent passport-size photographs (35x45mm) taken within the last 6 months, with a white background, neutral expression, and 80% face coverage.', 
      icon: '📸', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Application Form', 
      description: 'Fully completed and signed physical visa application form. Block letters only, with no corrections or overwriting.', 
      icon: '📋', 
      mandatory: true 
    },
    { 
      key: 'invitation_letter', 
      title: 'Official Business Invitation Letter', 
      description: 'An official invitation letter from the host company in Egypt, detailing the purpose of the visit, duration of stay, and financial responsibility. The letter must be written on company letterhead and officially stamped.', 
      icon: '✉️', 
      mandatory: true 
    },
    { 
      key: 'covering_letter', 
      title: 'Covering Letter from Indian Employer', 
      description: 'An original covering letter on the Indian company letterhead introducing the applicant, stating their designation, salary, purpose of travel, and guaranteeing their return to India.', 
      icon: '🏢', 
      mandatory: true 
    },
    { 
      key: 'company_registration', 
      title: 'Proof of Business Registration', 
      description: 'Registration certificate of the Indian company (GST registration, Certificate of Incorporation, or Import-Export Code).', 
      icon: '📄', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Financial Proof', 
      description: 'Original personal bank statements for the last 6 months, showing a healthy balance, stamped and signed by the bank, along with Income Tax Returns (ITR) for the last 2 years.', 
      icon: '🏦', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Confirmed round-trip flight tickets showing entry and exit from Egypt.', 
      icon: '✈️', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Confirmed hotel booking or proof of residential accommodation provided by the host company in Egypt.', 
      icon: '🏨', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Obtain Host Invitation', 
      description: 'Request and secure a formal business invitation letter from your host partner or company registered in Egypt.' 
    },
    { 
      step: 2, 
      title: 'Prepare Documentation', 
      description: 'Gather your original passport, draft the cover letter on your Indian company letterhead, print your bank statements, and obtain the physical application form.' 
    },
    { 
      step: 3, 
      title: 'Fill the Application Form', 
      description: 'Complete the visa application form manually in English using black ink. Ensure all details match your passport exactly.' 
    },
    { 
      step: 4, 
      title: 'Submit to the Embassy/Consulate', 
      description: 'Submit the physical application, passport, and supporting documents directly to the Embassy of Egypt in New Delhi or the Consulate General in Mumbai (or through an authorized visa agent).' 
    },
    { 
      step: 5, 
      title: 'Pay Consular Fees', 
      description: 'Pay the visa fee in cash (INR) at the consular counter during submission.' 
    },
    { 
      step: 6, 
      title: 'Passport Collection', 
      description: 'Track your application and collect your passport with the physical sticker visa once processed, typically within 7 to 10 working days.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'A Yellow Fever vaccination certificate is mandatory only if arriving from or transiting through Yellow Fever endemic countries. Business travelers must ensure their host invitation is verified and clearly states the nature of the business engagement.' 
  }
};