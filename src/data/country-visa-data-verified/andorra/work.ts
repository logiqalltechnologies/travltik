export default {
  country: 'andorra',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Andorran Immigration Service (Servei d\'Immigració d\'Andorra) and relevant Schengen Member State Embassy/Consulate (France or Spain)',
  channels: [
    'Embassy / Consulate of France or Spain in India (for Schengen visa application)',
    'VFS Global (for Schengen visa application via France) or BLS International (for Schengen visa application via Spain)',
    'Andorran Immigration Service (Servei d\'Immigració d\'Andorra) - direct submission or online appointment (for Active Residency Permit application)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'Schengen Visa: 15 working days (up to 45 in exceptional cases); Andorran Active Residency Permit: Several weeks to 2 months (subject to annual quota availability)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'Schengen Visa Consular Fee: 90 EUR; Andorran Active Residency Permit Application Fee: 1,200 EUR',
    vfsServiceFee: 'VFS Global or BLS International service fee (varies by location, typically 20-30 EUR equivalent in INR)'
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
    stickerSingleDouble: 'N/A',
    stickerMultiple: 'Andorran Active Residency Permit: Initial 183 days/year, renewable annually for up to 3 times, then long-term after 7 years. Schengen Visa: Up to 90 days in any 180-day period for entry/exit to/from Schengen area.'
  },
  entryType: 'Multiple Entry (Schengen visa required for multiple entries/exits to/from Schengen area to reach Andorra)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond intended stay with a minimum of 2 blank pages. All old passports, if any, must also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (within 6 months) colour photos with white background and matt finish (35×45mm).', icon: '📸', mandatory: true },
    { key: 'schengen_visa_form', title: 'Schengen Visa Application Form', description: 'Duly completed and signed Schengen visa application form (obtained from the relevant Embassy/Consulate or VFS/BLS/TLS centre).', icon: '📋', mandatory: true },
    { key: 'andorra_work_permit_form', title: 'Andorran Active Residency Permit Application Form', description: 'Official immigration authorization application form for active residents.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking showing entry and exit from the Schengen area.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation in Andorra', description: 'Hotel reservations or rental contract/property deed in Andorra.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance_schengen', title: 'Schengen Travel Insurance', description: 'Medical travel insurance with a minimum coverage of EUR 30,000, valid for the entire duration of stay in the Schengen area.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement_india', title: 'Financial Proof (India)', description: 'Original bank statements (stamped and updated for the last 6 months with bank seal) and Income Tax Returns/Form 16 for the last 3 years, showing sufficient funds for the Schengen stay.', icon: '🏦', mandatory: true },
    { key: 'employment_contract_andorra', title: 'Employment Contract with Andorran Company', description: 'Original employment contract with a company based in Andorra, specifying job role, salary, and duration.', icon: '📄', mandatory: true },
    { key: 'cv_resume', title: 'Curriculum Vitae (CV) / Resume', description: 'A comprehensive CV detailing the applicant\'s professional experience.', icon: '📄', mandatory: true },
    { key: 'educational_qualifications', title: 'Educational and Professional Qualifications', description: 'Copies of diplomas, certificates, and any other proof of academic title or specialized skills relevant to the job position.', icon: '🎓', mandatory: true },
    { key: 'birth_certificate', title: 'Birth Certificate', description: 'Original birth certificate.', icon: '📜', mandatory: true },
    { key: 'marriage_certificate', title: 'Marriage Certificate (if applicable)', description: 'Original marriage certificate, if available.', icon: '📜', mandatory: false },
    { key: 'criminal_record_certificate', title: 'Criminal Record Certificate', description: 'Certificate of no criminal record from country of origin (India), current country of residence, and any other countries lived in before. Must be issued within three months of the application date and be apostilled or duly legalized.', icon: '⚖️', mandatory: true },
    { key: 'employer_registration', title: 'Andorran Employer\'s Company Registration', description: 'Original certificate of registration for the employer\'s company in Andorra, along with a photocopy.', icon: '🏢', mandatory: true },
    { key: 'health_insurance_andorra', title: 'Andorran Health Insurance', description: 'Proof of health insurance coverage in Andorra (distinct from Schengen travel insurance).', icon: '🛡️', mandatory: true },
    { key: 'cover_letter_schengen', title: 'Schengen Visa Cover Letter', description: 'A cover letter stating the purpose of visit to the Schengen area (transit to Andorra) and itinerary.', icon: '📝', mandatory: true },
    { key: 'leave_sanctioned_certificate', title: 'Leave Sanctioned Certificate (if currently employed in India)', description: 'Certificate from current Indian employer with company seal providing approval for leave.', icon: '📄', mandatory: false },
    { key: 'apostilled_legalized_documents', title: 'Apostilled/Legalized Foreign Documents', description: 'All foreign official documents submitted for the Andorran Active Residency Permit must carry a Hague Convention apostille or be duly legalized.', icon: '📜', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Secure Employment in Andorra', description: 'Obtain an employment contract with an Andorran company.' },
    { step: 2, title: 'Employer Initiates Work Permit Application', description: 'The Andorran employer submits the work permit application (Active Residency Permit) to the Andorran Department of Labour and Immigration Service, subject to annual quotas.' },
    { step: 3, title: 'Prepare Documentation for Andorran Active Residency Permit', description: 'Assemble all mandatory documents for the Active Residency Permit, ensuring foreign official documents are apostilled or duly legalized.' },
    { step: 4, title: 'Apply for Double/Multiple-Entry Schengen Visa', description: 'Submit a Schengen visa application to the French or Spanish Embassy/Consulate or their authorized application centres in India, requesting a double or multiple-entry visa for transit to Andorra.' },
    { step: 5, title: 'Undergo Medical Examination in Andorra', description: 'Upon arrival in Andorra, undergo a mandatory medical examination as part of the Active Residency Permit process.' },
    { step: 6, title: 'Receive Andorran Active Residency Permit', description: 'Track the application dossier and receive the Active Residency Permit from the Andorran Immigration Service.' }
  ],
  specialRequirements: {
    entry_rules: 'Andorra does not issue its own visa. Indian passport holders must obtain a double or multiple-entry Schengen visa from France or Spain (depending on the country of entry) to access Andorra. Andorra is not part of the Schengen Area.',
    andorra_work_permit_fees_additional: 'In addition to the application fee, the Andorran Active Residency Permit requires a non-refundable contribution of 50,000 EUR to the Andorran Financial Authority (AFA) for the main applicant, plus 12,000 EUR for each dependent. There is also a government fee for the initial residence card issuance: 2,500 EUR for the main applicant and 500 EUR for each family member. Ancillary costs include medical examination fees, social security registration fees, and potential document legalization and translation fees.',
    quota_system: 'The Andorran work permit system operates under an annual government quota ("cupo"), with priority given to nationals of Spain, France, and Portugal.',
    social_security: 'Affiliation to the Caixa Andorrana de Seguretat Social (CASS) is mandatory. Employee contributions are part of a 22% total (15.5% employer + 6.5% employee). Self-employed individuals contribute approximately 430 EUR per month.'
  }
};