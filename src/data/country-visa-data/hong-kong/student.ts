export default {
  country: 'hong-kong',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Immigration Department of the Government of the Hong Kong Special Administrative Region',
  channels: [
    'Hong Kong Immigration Department Online Application Portal',
    'Chinese Embassy/Consulate General in India (for submission via post or in person)',
    'Direct submission to Hong Kong Immigration Department (by post or in person if applicant is already in HKSAR)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '20-30 working days', // Official sources state "normally four to six weeks", which translates to 20-30 working days.
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'HK$230', // Official fee from HK Immigration Department. Conversion to INR is approximate and subject to current exchange rates.
    vfsServiceFee: 'N/A' // VFS Global is not typically involved in Hong Kong visa applications from India; applications are direct or via Chinese diplomatic missions.
  },
  eVisa: {
    available: false, // Hong Kong student visa is a sticker visa, not an eVisa for entry. Application can be submitted online.
    portal: 'N/A', // There is no eVisa issuance portal, as a physical sticker is issued.
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false, // Letter of Acceptance from institution serves this purpose and is listed separately.
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Duration of study program (typically up to 12 months, renewable)', // Initial visa is typically up to 12 months, renewable in line with study program.
    stickerMultiple: 'Duration of study program (typically up to 12 months, renewable)' // Initial visa is typically up to 12 months, renewable in line with study program.
  },
  entryType: 'Multiple Entry', // Student visas are generally multiple entry for the duration of the program.
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'A copy of the personal particulars page of your valid Indian passport. The passport must be valid for at least 6 months beyond your intended period of stay in Hong Kong and have at least two blank pages for visa endorsement.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'One recent passport-sized photograph (35mm x 45mm) with a plain white background. The photo must be taken within the last 6 months, showing a full frontal view of the face with a neutral expression and without head covering (unless for religious reasons).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form for Entry for Study in the HKSAR (ID 995A)', description: 'Duly completed and signed application form ID 995A. This form is available for download from the official Hong Kong Immigration Department website.', icon: '📋', mandatory: true },
    { key: 'acceptance_letter', title: 'Letter of Acceptance from Educational Institution', description: 'Original or certified copy of the official letter of acceptance from a recognized educational institution in Hong Kong, confirming your enrollment in a full-time study program.', icon: '🎓', mandatory: true },
    { key: 'academic_qualifications', title: 'Proof of Academic Qualifications', description: 'Certified copies of your academic transcripts, diplomas, and certificates from all previous educational institutions. These should demonstrate your eligibility for the chosen course of study.', icon: '📜', mandatory: true },
    { key: 'financial_proof', title: 'Financial Proof', description: 'Original bank statements (for the last 3-6 months), scholarship award letter, education loan sanction letter, or sponsor\'s financial documents. This must clearly demonstrate sufficient funds to cover your tuition fees, accommodation, and living expenses for the entire duration of your study in Hong Kong without the need to work.', icon: '🏦', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Evidence of confirmed accommodation arrangements in Hong Kong, such as an offer letter for university dormitory, a signed rental agreement, or a letter from a host confirming your stay.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Comprehensive travel and medical insurance policy covering the entire period of your intended stay in Hong Kong. While not always a direct visa requirement by the Immigration Department, it is highly recommended and often mandated by educational institutions for student welfare.', icon: '🛡️', mandatory: true },
    { key: 'medical_report', title: 'Medical Examination Report (including HIV test)', description: 'A comprehensive medical examination report, including an HIV test, is mandatory for all applicants intending to stay in Hong Kong for more than 90 days (as per Universal Rule 3). This report may be requested by the Immigration Department during processing.', icon: '🩺', mandatory: true },
    { key: 'pcc', title: 'Police Clearance Certificate (PCC)', description: 'A Police Clearance Certificate (PCC) issued by the relevant authority in India, certifying that you have no criminal record. This document may be requested by the Immigration Department for long-term stay applications.', icon: '👮', mandatory: true },
    { key: 'sponsor_documents', title: 'Sponsor\'s Documents (if applicable)', description: 'If your studies are financially sponsored, provide copies of the sponsor\'s identity document/passport, proof of relationship with the applicant (e.g., birth certificate), and their financial proof (e.g., bank statements, income tax returns).', icon: '👨‍👩‍👧', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all necessary documents as per the checklist, ensuring they are current, complete, and certified where required. Pay special attention to financial proof and acceptance letters.' },
    { step: 2, title: 'Complete Application Form ID 995A', description: 'Accurately fill out the "Application for Entry for Study in the HKSAR" (Form ID 995A). Ensure all sections are completed and signed by the applicant.' },
    { step: 3, title: 'Submit Application', description: 'Submit the completed application form along with all supporting documents. This can be done online via the Hong Kong Immigration Department portal, by post to the Immigration Department in Hong Kong, or through the nearest Chinese Embassy/Consulate General in India.' },
    { step: 4, title: 'Pay Application Fee', description: 'Pay the prescribed visa application fee of HK$230. Payment methods vary depending on the submission channel (e.g., online payment, bank draft, cash at counter for in-person submissions).' },
    { step: 5, title: 'Await Processing and Decision', description: 'The Immigration Department will process your application. The standard processing time is 20-30 working days. You may be contacted for additional information or an interview during this period.' },
    { step: 6, title: 'Receive Visa Sticker', description: 'Upon approval, the visa sticker will be issued. If applied through an Embassy/Consulate, it will be affixed to your passport. If applied directly to the HK Immigration Department, it may be sent to your sponsor/institution in Hong Kong for collection or dispatched to you by post.' }
  ],
  specialRequirements: {
    entry_rules: 'Applicants must genuinely intend to pursue full-time studies and possess sufficient funds to cover all expenses without relying on employment. An HIV test is mandatory for all stays exceeding 90 days. Student visa holders are generally not permitted to take up any employment (paid or unpaid) or establish/join any business without prior permission from the Director of Immigration. However, students may be allowed to take up part-time employment related to their studies or on-campus employment for up to 20 hours per week during term time, and full-time during summer breaks, subject to specific conditions and approval from the Immigration Department.'
  }
};