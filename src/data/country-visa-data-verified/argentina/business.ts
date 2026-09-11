export default {
  country: 'argentina',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Argentine Republic in New Delhi / Consulate General of the Argentine Republic in Mumbai',
  channels: ['Embassy Direct'],
  processingTime: { 
    eVisa: 'N/A', 
    standardSticker: '10 to 15 working days', 
    expressSticker: 'N/A' 
  },
  fees: { 
    eVisaTotal: 'N/A', 
    stickerConsularStandard: 'USD 200 (payable in equivalent INR as per the consular exchange rate)', 
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
    stickerSingleDouble: 'Up to 60 days', 
    stickerMultiple: 'Up to 60 days per entry (validity up to 1 year)' 
  },
  entryType: 'Multiple Entry',
  documents: [
    { 
      key: 'passport', 
      title: 'Valid Indian Passport', 
      description: 'Original passport with at least 6 months validity from the date of entry into Argentina, containing at least two blank pages.', 
      icon: '📘', 
      mandatory: true 
    },
    { 
      key: 'photographs', 
      title: 'Passport Photographs (35x45mm)', 
      description: 'Three recent passport-size photographs (35x45mm) taken within the last 6 months, with a white background, neutral facial expression, and no spectacles.', 
      icon: '📸', 
      mandatory: true 
    },
    { 
      key: 'visa_form', 
      title: 'Application Form', 
      description: 'Visa application form fully completed in English or Spanish, signed by the applicant. Unsigned forms will lead to rejection.', 
      icon: '📋', 
      mandatory: true 
    },
    { 
      key: 'invitation_letter', 
      title: 'RENURE Invitation Letter', 
      description: 'Original invitation letter from the host company in Argentina, written in Spanish. The host company must be registered with RENURE (Registro Nacional de Único de Requirentes de Extranjeros). The letter must state the host\'s RENURE registration number, be signed by an authorized representative, and be legalized by an Argentine Notary Public (Escribano Público) and the Colegio de Escribanos.', 
      icon: '✉️', 
      mandatory: true 
    },
    { 
      key: 'covering_letter', 
      title: 'Covering Letter from Indian Employer', 
      description: 'Original letter on the Indian company\'s official letterhead, detailing the applicant\'s designation, length of service, purpose of the business visit, duration of stay, and a clear statement guaranteeing that the company will bear all travel and living expenses.', 
      icon: '🏢', 
      mandatory: true 
    },
    { 
      key: 'company_financials', 
      title: 'Indian Company Registration & Financials', 
      description: 'Proof of registration of the Indian company (GST registration certificate or Certificate of Incorporation) along with the company\'s bank statements for the last 3 months, stamped and signed by the bank.', 
      icon: '📊', 
      mandatory: true 
    },
    { 
      key: 'bank_statement', 
      title: 'Personal Financial Proof', 
      description: 'Personal bank statements for the last 6 months, showing active transactions and sufficient funds, stamped and signed by the bank. Additionally, submit Income Tax Returns (ITR) for the last 3 years.', 
      icon: '🏦', 
      mandatory: true 
    },
    { 
      key: 'flight_booking', 
      title: 'Flight Itinerary', 
      description: 'Round-trip flight itinerary showing confirmed dates of travel. Applicants are strongly advised not to purchase non-refundable tickets until the visa is approved.', 
      icon: '✈️', 
      mandatory: true 
    },
    { 
      key: 'accommodation', 
      title: 'Proof of Accommodation', 
      description: 'Confirmed hotel booking for the entire duration of the stay in Argentina, or proof of accommodation arrangements detailed in the official invitation letter.', 
      icon: '🏨', 
      mandatory: true 
    },
    { 
      key: 'travel_insurance', 
      title: 'Travel Insurance', 
      description: 'Travel medical insurance policy with a minimum coverage of USD 50,000, valid for the entire duration of the stay in Argentina, covering medical emergencies and repatriation.', 
      icon: '🛡️', 
      mandatory: true 
    }
  ],
  steps: [
    { 
      step: 1, 
      title: 'Obtain RENURE Invitation Letter', 
      description: 'Ensure your host business partner in Argentina drafts an official invitation letter in Spanish, registers it with RENURE, and has it legalized by an Argentine Notary Public and the Colegio de Escribanos.' 
    },
    { 
      step: 2, 
      title: 'Prepare Documentation', 
      description: 'Gather all required documents, including the covering letter from your Indian employer, GST registration, personal bank statements (6 months, stamped), ITR (3 years), flight itinerary, and hotel bookings.' 
    },
    { 
      step: 3, 
      title: 'Request an Interview Appointment', 
      description: 'Email the consular section of the Embassy of Argentina in New Delhi or the Consulate General in Mumbai (depending on your jurisdiction) to request a visa interview appointment. Attach scanned copies of the invitation letter and covering letter.' 
    },
    { 
      step: 4, 
      title: 'Pay Consular Fees', 
      description: 'Once your appointment is confirmed, pay the consular fee of USD 200 in equivalent Indian Rupees via bank transfer to the designated bank account of the Embassy/Consulate. Keep the original payment receipt.' 
    },
    { 
      step: 5, 
      title: 'Attend Personal Interview', 
      description: 'Appear in person for the mandatory visa interview at the Embassy or Consulate. Bring all original documents, physical copies, passport-size photographs, and the original bank payment receipt.' 
    },
    { 
      step: 6, 
      title: 'Visa Processing and Collection', 
      description: 'The standard processing time is 10 to 15 working days after the interview. Once approved, collect your passport with the stamped sticker visa from the consulate.' 
    }
  ],
  specialRequirements: { 
    entry_rules: 'The host company in Argentina MUST be registered with RENURE. The invitation letter must be written in Spanish and legalized in Argentina. A Yellow Fever vaccination certificate is required only if the traveler is arriving from or has transited through an endemic country.' 
  }
};