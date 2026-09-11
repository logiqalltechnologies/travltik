export default {
  country: 'monaco',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Ministry of Foreign Affairs and Cooperation, Monaco',
  channels: [
    'https://www.monaco-consulate.in',
    'https://www.vfsglobal.com/france/india',
    'Embassy of Monaco, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€99',
    vfsServiceFee: '€30'
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
    stickerSingleDouble: '1 year',
    stickerMultiple: '1 year'
  },
  maxStayDays: 365,
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport must be valid for at least 6 months beyond intended stay', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the work visa application form available on the official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight reservation', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel reservation or invitation from employer in Monaco', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Medical coverage of minimum €30,000 for the entire stay', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements (last 3 months) showing sufficient funds', icon: '🏦', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Signed contract with Monaco-based employer, detailing position and salary', icon: '📄', mandatory: true },
    { key: 'work_permit_approval', title: 'Work Permit Approval', description: 'Authorization from Monaco Ministry of Employment (Autorisation de travail)', icon: '✅', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate', description: 'Clearance from Indian authorities, issued within 6 months', icon: '🔎', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate (HIV Test)', description: 'HIV test required for stays exceeding 90 days, issued within 3 months', icon: '🩺', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all mandatory documents listed above, ensuring they meet the specified criteria.' },
    { step: 2, title: 'Complete Application Form', description: 'Fill out the work visa application form on the official Monaco consular portal.' },
    { step: 3, title: 'Submit Application', description: 'Submit the completed form and documents at the Monaco Embassy in New Delhi or via the authorized VFS Global service center.' },
    { step: 4, title: 'Pay Visa Fees', description: 'Pay the consular fee of €99 and the VFS service fee of €30 through the accepted payment methods.' },
    { step: 5, title: 'Attend Interview (if required)', description: 'Appear for an interview at the embassy or VFS center, if the authorities request one.' },
    { step: 6, title: 'Visa Processing', description: 'Wait for the standard processing period of approximately 15 working days.' },
    { step: 7, title: 'Collect Visa', description: 'Pick up the stamped work visa from the embassy/VFS center or receive it via courier as per the chosen option.' }
  ],
  specialRequirements: {
    entry_rules: 'Work contract and approved work permit from Monaco’s Ministry of Employment are mandatory. HIV test required for stays longer than 90 days.'
  }
};