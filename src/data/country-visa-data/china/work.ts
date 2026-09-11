export default {
  country: 'china',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of the People\'s Republic of China in India / Chinese Visa Application Service Center (CVASC)',
  channels: [
    'https://www.visaforchina.cn/ (Chinese Visa Application Service Center Official Portal)',
    'Chinese Visa Application Service Center (CVASC)',
    'Embassy/Consulate General (for specific cases or final decision, generally via CVASC)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '4 working days', // Standard processing time for Z-visa via CVASC, updated from 4-7 working days
    expressSticker: '2-3 working days' // Express processing options (e.g., 3 working days for Express 1, 2 working days for Express 2)
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 4500', // Consular fee for a single-entry Z-visa for Indian citizens
    vfsServiceFee: 'INR 2000' // Standard service fee charged by Chinese Visa Application Service Center (CVASC)
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false, // Not applicable for eVisa
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '30 days from entry (must apply for Residence Permit within this period)', // Z-visa allows entry and requires conversion to Residence Permit
    stickerMultiple: 'N/A (initial Z-visa is typically single entry)'
  },
  entryType: 'Single Entry', // Initial Z-visa is typically issued for single entry
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport valid for at least 6 months beyond the intended date of entry, with at least two blank visa pages. A copy of the passport data page and any previous Chinese visas (if applicable) is also required.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent (taken within the last 6 months) passport-sized color photographs (35x45mm) with a white background. The applicant should have a front view, neutral expression, and no head covering (unless for religious reasons).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Visa Application Form', description: 'Duly completed online visa application form (available on the CVASC website), printed, and signed by the applicant. Ensure all information is accurate and complete.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'A tentative flight itinerary showing the intended date of entry into China. While a return booking is not strictly applicable for a work visa, an entry itinerary is generally recommended.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'A letter from the inviting entity (employer) in China stating they will provide accommodation or assist in finding accommodation, or details of temporary accommodation upon arrival.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Travel insurance is not a mandatory requirement for a China Z-visa from India as per official sources. Health insurance is typically provided by the employer in China after obtaining a Residence Permit.', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Personal bank statements are not a mandatory requirement for a China Z-visa from India. Financial stability for a work visa is primarily demonstrated by the employer\'s commitment and the Work Permit Notification Letter.', icon: '🏦', mandatory: false },
    { key: 'work_permit_notification', title: 'Notification Letter of Foreigner\'s Work Permit', description: 'Original and a copy of the "Notification Letter of Foreigner\'s Work Permit" issued by the Chinese government authorities for human resources and social security. This is a primary document for Z-visa application.', icon: '📄', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter', description: 'Original invitation letter issued by the inviting entity (employer) in China. The letter should contain information about the applicant (full name, gender, date of birth, etc.), details of the planned visit (purpose, dates, place of stay), and information about the inviting entity (name, address, contact, official stamp, authorized signature).', icon: '✉️', mandatory: true },
    { key: 'medical_examination', title: 'Medical Examination Record', description: 'Original "Foreigner Physical Examination Form" completed by a qualified medical institution in India. This form must be filled out within 6 months of the application date and includes tests such as HIV, syphilis, and other general health checks.', icon: '🩺', mandatory: true },
    { key: 'highest_degree', title: 'Highest Degree Certificate', description: 'Original and a copy of the highest academic degree certificate (e.g., Bachelor\'s, Master\'s, PhD) and relevant professional qualification certificates. These documents may need to be attested/apostilled by the relevant authorities in India and/or the Chinese Embassy/Consulate.', icon: '🎓', mandatory: true },
    { key: 'no_criminal_record', title: 'No Criminal Record Certificate', description: 'Original and a copy of a Police Clearance Certificate (PCC) or No Criminal Record Certificate issued by the relevant authority in India. This document may need to be attested/apostilled by the relevant authorities in India and/or the Chinese Embassy/Consulate.', icon: '📜', mandatory: true },
    { key: 'resume', title: 'Resume / Curriculum Vitae (CV)', description: 'A detailed resume outlining the applicant\'s educational background and work experience.', icon: '📝', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'A copy of the employment contract signed between the applicant and the inviting entity (employer) in China.', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all necessary documents as per the checklist, including your passport, photographs, Work Permit Notification, Invitation Letter, Medical Examination Record, attested educational certificates, and Police Clearance Certificate. Ensure all documents are valid and meet the specified requirements.' },
    { step: 2, title: 'Complete Online Application Form', description: 'Visit the official Chinese Visa Application Service Center (CVASC) website (visaforchina.cn), select your jurisdiction (e.g., New Delhi, Mumbai), and accurately fill out the online visa application form. Print the completed form and sign it.' },
    { step: 3, title: 'Book an Appointment', description: 'Schedule an appointment online through the CVASC website for submitting your application at the nearest CVASC center. Walk-in applications are generally not accepted.' },
    { step: 4, title: 'Submit Application and Biometrics at CVASC', description: 'Attend your scheduled appointment at the CVASC with all original documents and their photocopies. Your fingerprints will be collected at this stage. Pay the applicable visa fee and service fee.' },
    { step: 5, title: 'Track Application Status', description: 'You can track the status of your visa application online using the reference number provided by CVASC at the time of submission.' },
    { step: 6, title: 'Collect Passport with Visa', description: 'Once your visa is processed, collect your passport from the CVASC. Verify all details on the visa sticker are correct before leaving the center.' },
    { step: 7, title: 'Apply for Residence Permit in China', description: 'Upon arrival in China with your Z-visa, you must apply for a Residence Permit at the local Public Security Bureau (PSB) Exit and Entry Administration within 30 days of your entry. The Z-visa itself is a temporary entry permit, not a long-term stay permit.' }
  ],
  specialRequirements: {
    entry_rules: 'Applicants must apply for a Residence Permit at the local Public Security Bureau (PSB) Exit and Entry Administration within 30 days of entry into China. Fingerprints are collected at the Chinese Visa Application Service Center (CVASC) during the application submission process. A comprehensive medical examination, including an HIV test, is mandatory for Z-visa applicants, especially for stays exceeding 90 days.',
    additional_notes: 'All non-Chinese documents (e.g., degree certificates, Police Clearance Certificate) must be authenticated by the Ministry of External Affairs (MEA) in India and subsequently by the Chinese Embassy/Consulate in India, or apostilled if applicable under international agreements, before submission.'
  }
};