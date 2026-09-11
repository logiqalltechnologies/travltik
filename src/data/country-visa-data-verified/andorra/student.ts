export default {
  country: 'andorra',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Spanish or French Embassy/Consulate in India (for entry visa); Servei d\'Immigració del Govern d\'Andorra (for residence permit)',
  channels: [
    'Embassy of Spain in India',
    'Embassy of France in India',
    'VFS Global (for Spain Schengen visa application)',
    'TLScontact (for France Schengen visa application)',
    'Servei d\'Immigració del Govern d\'Andorra (for residence permit application in Andorra)'
  ],
  externalServiceProvider: 'VFS Global (Spain) / TLScontact (France)',
  processingTime: {
    eVisa: 'Not Applicable',
    standardSticker: '30 working days',
    expressSticker: 'Not available for this category'
  },
  fees: {
    consularFee: '€80 EUR',
    eVisaTotal: 'Not Applicable',
    stickerConsularStandard: '€80 EUR for Schengen long‑stay visa (type D); €200 EUR for Andorran residence permit (paid in Andorra)',
    vfsServiceFee: '€30‑€50 EUR (~₹2,700‑₹4,500 INR) (if applicable)'
  },
  eVisa: {
    available: false,
    portal: null,
    territorialScope: 'Not Applicable',
    validity: 'Not Applicable',
    maxStay: 'Not Applicable',
    invitationRequired: false,
    processing: 'Not Applicable'
  },
  stayDuration: {
    eVisa: 'Not Applicable',
    stickerSingleDouble: 'Duration of studies as per Andorran residence permit (up to 365 days, renewable)',
    stickerMultiple: 'Duration of studies as per Andorran residence permit (up to 365 days, renewable)',
    maxStayDays: 365
  },
  entryType: 'Multiple Entry (Schengen long‑stay visa required to enter/re‑enter Schengen Area)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond your intended stay in Andorra with a minimum of 2 blank pages. All old passports, if any, must also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (less than 6 months old) color photographs with a white background and matt finish.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Long-Stay Application Form', description: 'Duly completed and signed Schengen long-stay visa application form.', icon: '📋', mandatory: true },
    { key: 'acceptance_letter', title: 'Letter of Acceptance from Andorran Institution', description: 'Official acceptance letter from a recognized Andorran university or educational institution.', icon: '🎓', mandatory: true },
    { key: 'financial_proof', title: 'Proof of Sufficient Financial Means', description: 'Bank certificates or statements proving financial means greater than or equal to €15,000 EUR for the study period.', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation in Andorra', description: 'Confirmed accommodation (rental contract, dormitory booking, or invitation letter from a resident in Andorra).', icon: '🏨', mandatory: true },
    { key: 'travel_health_insurance', title: 'Travel and Health Insurance', description: 'Travel insurance covering the entire Schengen area with a minimum medical coverage of €30,000 EUR. Long-term health insurance is mandatory for the residence permit in Andorra (estimated €300-€600 EUR per year).', icon: '🛡️', mandatory: true },
    { key: 'criminal_record', title: 'Criminal Record Certificate', description: 'Police clearance certificate from the country of origin, country of nationality (if different), and all countries of previous residence. Must be apostilled/legalized and issued within three months of application.', icon: '📜', mandatory: true },
    { key: 'flight_itinerary', title: 'Flight Itinerary', description: 'Confirmed flight booking (return or onward) showing entry via Spain or France.', icon: '✈️', mandatory: true },
    { key: 'civil_status', title: 'Civil Status Certificate', description: 'Official document proving civil status.', icon: '📄', mandatory: true },
    { key: 'tuition_fee_proof', title: 'Proof of Tuition Fee Payment', description: 'Evidence that course fees have been paid in full or as required by the institution.', icon: '💸', mandatory: false },
    { key: 'cover_letter', title: 'Cover Letter / Letter of Motivation', description: 'A personal letter explaining the purpose of the visit, study plans, and intent to return to India after studies.', icon: '📝', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Secure Admission to an Andorran Educational Institution', description: 'Obtain an official acceptance letter from a recognized university or institution in Andorra.' },
    { step: 2, title: 'Apply for a Long-Stay Multiple-Entry Schengen Visa', description: 'Submit your application for a long-stay (Type D) multiple-entry Schengen visa through the Spanish or French Embassy/Consulate or their authorized visa application centers (e.g., VFS Global, TLScontact) in India, as Andorra is only accessible via these countries.' },
    { step: 3, title: 'Travel to Andorra', description: 'Enter Andorra via Spain or France using your valid multiple-entry Schengen visa.' },
    { step: 4, title: 'Apply for Andorran Immigration Authorisation for Studies', description: 'Once in Andorra, apply for the "Immigration authorisation for studies, internships, top-level sports training or research (procedure F)" with the Servei d\'Immigració del Govern d\'Andorra (Andorran Immigration Service) for your residence permit.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian citizens require a multiple-entry Schengen visa (issued by Spain or France) to enter Andorra, as Andorra is not part of the Schengen Area but is only accessible through these countries. For stays longer than 90 days, a residence permit (Immigration authorisation for studies) must be obtained from the Andorran Immigration Service upon arrival in Andorra.',
    health_mandates: 'A mandatory medical examination is required in Andorra for the residence permit application. HIV test is required for stays exceeding 90 days (Student/Work).',
    work_permission: 'Students with an Andorran residence permit are authorized to work for a maximum of 20 hours per week in jobs related to their studies or in strategic/priority sectors for the country.'
  }
};