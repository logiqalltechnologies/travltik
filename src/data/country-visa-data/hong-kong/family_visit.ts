export default {
  country: 'hong-kong',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Immigration Department of the Government of the Hong Kong Special Administrative Region',
  channels: [
    'Official Immigration Department Portal (by post)',
    'Local Sponsor in Hong Kong (submission on applicant\'s behalf)',
    'Chinese Embassy/Consulate in India (for onward transmission to HK IMMD)'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '20-30 working days', // 4-6 weeks as per IMMD
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'HK$230',
    vfsServiceFee: 'N/A' // No VFS service for HK visit visas from India
  },
  eVisa: {
    available: false, // Indian nationals can enter visa-free for up to 14 days, but a formal visa for family visit (likely >14 days) is a sticker visa.
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false, // Invitation is for the Family Visit Visa, not an eVisa itself.
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days', // Common maximum for visit visas
    stickerMultiple: 'N/A' // Multiple entry visas are generally not granted for first-time visit visa applicants
  },
  entryType: 'Single Entry', // Most common for visit visas
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport with at least 6 months validity beyond the intended period of stay and at least two blank pages for visa stamping.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent passport-sized colour photographs with a white background, taken within the last 6 months, showing a neutral expression and full face.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form for Visa (ID 1003A)', description: 'Duly completed and signed application form. If sponsored by a local resident, Form ID 1003B for the sponsor is also required.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Copy of confirmed return flight tickets or a detailed itinerary showing entry and exit from Hong Kong.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'An invitation letter from the host in Hong Kong confirming accommodation details, or a copy of hotel booking confirmation for the entire stay.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Highly recommended travel insurance covering medical emergencies and repatriation for the entire duration of stay, though not strictly mandatory by HK Immigration for visit visas.', icon: '🛡️', mandatory: false },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 3-6 months, showing sufficient funds to cover the entire duration of stay in Hong Kong. If sponsored, the sponsor\'s financial proof is required.', icon: '🏦', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'An original invitation letter from the family member residing in Hong Kong, stating the purpose of visit, duration, relationship, and confirming accommodation and financial support if applicable.', icon: '✉️', mandatory: true },
    { key: 'sponsor_id', title: 'Sponsor\'s Hong Kong ID/Passport', description: 'Copy of the inviting family member\'s Hong Kong Identity Card (both sides) or passport copy, along with proof of their residential address in Hong Kong.', icon: '🆔', mandatory: true },
    { key: 'proof_of_relationship', title: 'Proof of Relationship', description: 'Documents proving the relationship between the applicant and the inviting family member (e.g., birth certificate, marriage certificate, family register, etc.).', icon: '👨‍👩‍👧‍👦', mandatory: true },
    { key: 'employment_proof', title: 'Employment Proof / Business Registration', description: 'A letter from the applicant\'s employer stating position, salary, and approved leave dates. For self-employed individuals, business registration documents and bank statements.', icon: '💼', mandatory: true },
    { key: 'noc_letter', title: 'No Objection Certificate (NOC)', description: 'A No Objection Certificate from the applicant\'s employer or educational institution (if student) granting leave for the travel period.', icon: '📝', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all mandatory documents including passport, photographs, application forms, financial proof, invitation letter, and sponsor documents as per the checklist.' },
    { step: 2, title: 'Complete Application Forms', description: 'Fill out the Visa Application Form (ID 1003A) accurately. If applicable, ensure your sponsor completes Form ID 1003B.' },
    { step: 3, title: 'Submit Application', description: 'Submit the completed application forms and supporting documents by post directly to the Hong Kong Immigration Department, or through a local sponsor in Hong Kong, or via the Chinese Embassy/Consulate in India for onward transmission.' },
    { step: 4, title: 'Pay Visa Fees', description: 'Pay the prescribed visa fee of HK$230. Payment methods will be advised by the Immigration Department or the submission channel.' },
    { step: 5, title: 'Await Processing', description: 'The Immigration Department will process the application, which typically takes 20-30 working days upon receipt of all necessary documents.' },
    { step: 6, title: 'Receive Visa', description: 'Upon approval, the visa sticker will be issued and affixed to your passport, or an entry permit will be issued.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian nationals can visit Hong Kong visa-free for up to 14 days. A formal visa is required for stays exceeding 14 days or for specific purposes. All visitors must hold a passport valid for at least one month beyond the intended period of stay, possess sufficient funds, and hold onward/return tickets.',
  }
};