export default {
  country: 'china',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Embassy of the People\'s Republic of China in India / Chinese Visa Application Service Center (CVASC)',
  channels: [
    'https://www.visaforchina.cn/', // Official Portal for online application form filling and appointment booking
    'Chinese Visa Application Service Center (CVASC)', // Physical submission of documents and passport collection
    // 'Embassy Direct' - Generally not for standard student visa applications, primarily for diplomatic/official visas.
  ],
  processingTime: {
    eVisa: 'N/A', // e-Visa is not available for China Student Visas (X1/X2)
    standardSticker: '4 working days', // Standard processing time as per CVASC India
    expressSticker: '3 working days', // Express processing time as per CVASC India
    rushSticker: '2 working days' // Rush processing time as per CVASC India
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'NIL (for Indian citizens)', // As per official Chinese Embassy/CVASC policy for Indian citizens
    vfsServiceFee: 'INR 2050 (Standard Service Fee, varies slightly by center)' // Representative service fee charged by CVASC (e.g., Delhi)
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
    stickerSingleDouble: '30 days (requires conversion to Residence Permit)', // X1 visa is initially issued for 30 days, requiring conversion to a Residence Permit within this period.
    stickerMultiple: 'N/A' // Initial X1 visas are typically single entry; multiple entries are granted with the Residence Permit.
  },
  entryType: 'Single Entry', // The X1 visa itself is single entry. The subsequent Residence Permit allows multiple entries.
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport valid for at least 6 months beyond the intended stay, with at least two blank visa pages. A photocopy of the passport\'s data page and the photo page (if separate) is also required.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'One recent (taken within 6 months) color passport-sized photograph. Must have a white background, show a full face with a neutral expression, and no head covering (unless for religious reasons). Photos must be free from shadows or reflections.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Duly completed online Visa Application Form (available on www.visaforchina.cn), printed, and signed. Ensure all information provided is accurate and consistent with supporting documents.', icon: '📋', mandatory: true },
    { key: 'admission_letter', title: 'Admission Letter', description: 'Original and photocopy of the "Admission Letter for Foreign Students" issued by the Chinese university or educational institution.', icon: '🎓', mandatory: true },
    { key: 'jw201_202', title: 'JW201/JW202 Form', description: 'Original and photocopy of "Visa Application for Study in China" (Form JW201 or JW202) issued by the Chinese educational institution. This is a critical document for student visa applications.', icon: '📄', mandatory: true },
    { key: 'medical_exam', title: 'Physical Examination Record', description: 'Original and photocopy of the "Physical Examination Record for Foreigner" completed by a qualified doctor. This is required for X1 visa applicants whose intended stay in China exceeds 6 months. The examination must be conducted within 6 months of the application date and includes tests for HIV, syphilis, and other communicable diseases as per Chinese health regulations.', icon: '🩺', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 3-6 months, a scholarship certificate, an education loan sanction letter, or a letter from parents/sponsor confirming financial support and ability to cover tuition and living expenses in China. The minimum funds required vary based on the duration and location of study.', icon: '🏦', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Proposed flight itinerary to China. While a confirmed return ticket is not strictly mandatory for an X1 visa application (due to its long-term nature), an entry itinerary is recommended.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmation of initial accommodation in China, such as a university dormitory acceptance letter, a hotel booking for the initial days, or an invitation letter from a host if staying with someone.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Recommended travel insurance covering medical emergencies, hospitalization, and repatriation for the initial period of stay. While not explicitly mandatory for the visa application, it is highly advisable for international students.', icon: '🛡️', mandatory: true },
    { key: 'previous_visas', title: 'Previous Chinese Visas (if any)', description: 'Photocopies of any previous Chinese visas obtained by the applicant.', icon: '📜', mandatory: false },
    { key: 'noc_minor', title: 'No Objection Certificate (for minors)', description: 'If the applicant is under 18 years of age, a No Objection Certificate from parents/legal guardians, along with their passport copies and proof of relationship (e.g., birth certificate).', icon: '👨‍👩‍👧', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Complete Online Application Form', description: 'Access the Chinese Visa Application Service Center (CVASC) website (www.visaforchina.cn) to fill out the visa application form accurately. Print the completed form and sign it as required.' },
    { step: 2, title: 'Gather Required Documents', description: 'Collect all mandatory documents as specified, including your valid passport, recent photographs, the Admission Letter, JW201/JW202 Form, Physical Examination Record, and proof of financial support.' },
    { step: 3, title: 'Book an Appointment', description: 'Schedule an appointment online through the CVASC website for the submission of your documents at your nearest Chinese Visa Application Service Center.' },
    { step: 4, title: 'Submit Application at CVASC', description: 'Visit the designated CVASC on your scheduled appointment date. Submit your application along with all original documents and their photocopies. Biometric data (fingerprints) may be collected.' },
    { step: 5, title: 'Pay Service Fee', description: 'Pay the applicable CVASC service fee at the center. Please note that for Indian citizens, the consular visa fee for student visas is NIL.' },
    { step: 6, title: 'Collect Passport with Visa', description: 'Once your application is processed, you will be notified to collect your passport with the affixed X1 visa from the CVASC. Carefully verify all visa details upon collection.' }
  ],
  specialRequirements: {
    entry_rules: 'Holders of an X1 visa must apply for a Residence Permit from the local public security authorities (Exit and Entry Administration Department) within 30 days of entry into China. Failure to do so may result in penalties. The Residence Permit will allow for multiple entries and a longer stay duration corresponding to the study period.'
  }
};