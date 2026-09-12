export default {
  country: 'bahamas',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Department of Immigration, The Bahamas',
  channels: [
    'https://www.bahamas.gov.bs/wps/portal/public/gov/government/ministries/ministry%20of%20labour%20and%20immigration/department%20of%20immigration/',
    'Embassy Direct (via designated non-resident mission or direct to Department of Immigration)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '21 working days (for application processing)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '100 BSD (Application Fee) + Variable Annual Permit Fee (e.g., 500 - 15,000+ BSD depending on profession)',
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
    stickerSingleDouble: 'Up to 1 year (renewable)',
    stickerMultiple: 'Up to 1 year (renewable)'
  },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport valid for at least 6 months beyond the intended period of stay, with at least two blank pages for visa stamping. Copies of all relevant pages, including bio-data and previous visas.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent passport-sized photographs (taken within 6 months), 35x45mm, white background, neutral expression, full face view, without head covering (unless for religious reasons).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Work Permit Application Form', description: 'Completed and signed Work Permit Application Form, available on the Department of Immigration portal. Ensure all sections are accurately filled.', icon: '📋', mandatory: true },
    { key: 'job_offer', title: 'Job Offer Letter / Employment Contract', description: 'Original letter of offer from the prospective employer in The Bahamas, detailing the position, salary, duration of employment, and terms and conditions. Must be signed by both employer and applicant.', icon: '📄', mandatory: true },
    { key: 'employer_letter', title: 'Employer\'s Letter of Request', description: 'A letter from the employer addressed to the Director of Immigration, justifying the need for a foreign worker, stating that no qualified Bahamian is available for the position, and outlining the efforts made to recruit locally.', icon: '🏢', mandatory: true },
    { key: 'applicant_letter', title: 'Applicant\'s Letter of Request', description: 'A personal letter from the applicant addressed to the Director of Immigration, requesting the work permit and stating the purpose of their stay.', icon: '📝', mandatory: true },
    { key: 'police_certificate', title: 'Police Character Certificate (PCC)', description: 'Original Police Character Certificate (PCC) from India and any country where the applicant has resided for six months or more in the last five years, issued within the last six months. Must be apostilled or legalized if required.', icon: '📜', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate & HIV Test', description: 'Original medical certificate from a licensed physician, including a chest X-ray and an HIV test result. The HIV test is mandatory for all applicants intending to stay for more than 90 days. Certificate must be recent (e.g., within 3 months).', icon: '🩺', mandatory: true },
    { key: 'educational_certs', title: 'Educational and Professional Certificates', description: 'Copies of all academic degrees, diplomas, and professional qualifications relevant to the position offered. Must be attested or legalized if required by the Bahamian authorities.', icon: '🎓', mandatory: true },
    { key: 'references', title: 'Professional References', description: 'At least two written professional references from previous employers, attesting to the applicant\'s character, skills, and work experience.', icon: '🧑‍💼', mandatory: true },
    { key: 'job_advertisement', title: 'Proof of Local Job Advertisement', description: 'Copies of newspaper advertisements (e.g., in two local Bahamian newspapers for at least three consecutive days) demonstrating that the position was advertised locally and no suitable Bahamian candidate was found.', icon: '📰', mandatory: true },
    { key: 'employer_business_license', title: 'Employer\'s Business License', description: 'Copy of the employer\'s current Business License, demonstrating legal operation in The Bahamas.', icon: '💼', mandatory: true },
    { key: 'employer_nib_compliance', title: 'Employer\'s NIB Compliance Letter', description: 'A letter of good standing from the National Insurance Board (NIB) for the employer, confirming compliance with social security contributions.', icon: '✅', mandatory: true },
    { key: 'flight_booking', title: 'Proposed Travel Itinerary', description: 'Proposed flight itinerary (one-way is acceptable for work permits) to The Bahamas, indicating intended arrival dates.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Proof of accommodation in The Bahamas (e.g., rental agreement, letter from employer stating accommodation provided, or hotel booking for initial period).', icon: '🏨', mandatory: true },
    { key: 'health_insurance', title: 'Health Insurance', description: 'Proof of comprehensive health insurance coverage for the duration of stay in The Bahamas, either provided by the employer or secured by the applicant.', icon: '🛡️', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all necessary personal documents, employer-related documents, and certificates as specified by the Department of Immigration. Ensure all copies are clear and any required attestations/legalizations are obtained.' },
    { step: 2, title: 'Complete Online Application', description: 'Access the official Department of Immigration portal (or obtain physical forms if applying via a mission), complete the Work Permit Application Form accurately, and upload all supporting documents as instructed.' },
    { step: 3, title: 'Pay Application Fee', description: 'Pay the non-refundable application fee of 100 BSD through the online portal or designated payment method. Keep proof of payment.' },
    { step: 4, title: 'Submit Application', description: 'Submit the completed application package online. The employer typically plays a significant role in the submission and sponsorship process. Ensure all documents are correctly attached.' },
    { step: 5, title: 'Await Processing and Decision', description: 'The Department of Immigration will review the application. This process typically takes 21 working days. You or your employer may be contacted for additional information or an interview.' },
    { step: 6, title: 'Pay Permit Fee (Upon Approval)', description: 'If the work permit is approved, the employer or applicant will be notified to pay the annual work permit fee, which varies significantly based on the profession and duration.' },
    { step: 7, title: 'Receive Work Permit Sticker', description: 'Upon payment of the permit fee, the work permit sticker will be issued. This permit allows legal entry and employment in The Bahamas for the specified duration.' }
  ],
  specialRequirements: {
    entry_rules: 'An HIV test is mandatory for all applicants intending to stay in The Bahamas for more than 90 days. Yellow Fever vaccination is not required for travelers arriving from India to The Bahamas.',
    financial_proof_note: 'For an Employment Visa, the primary financial proof is the employment contract and the employer\'s financial standing. While personal bank statements are not typically a primary requirement, applicants should ensure they have sufficient funds for initial settlement and unforeseen circumstances before receiving their first salary.'
  }
};