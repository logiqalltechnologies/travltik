export default {
  country: 'belarus',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Republic of Belarus in the Republic of India / Ministry of Foreign Affairs of the Republic of Belarus',
  channels: [
    'Official Portal (e-Visa): e-pasluga.by',
    'Embassy of the Republic of Belarus in New Delhi',
    'Consulate General of Belarus in Mumbai (for specific jurisdictions)'
  ],
  processingTime: {
    eVisa: '7 calendar days',
    standardSticker: '5 working days',
    expressSticker: 'within 48 hours (usually next working day)'
  },
  fees: {
    eVisaTotal: 'EUR 66 (~₹ 6,000 - ₹ 6,500, subject to exchange rate) (EUR 60 consular fee + EUR 6 service fee)',
    stickerConsularStandard: 'EUR 60 (~₹ 5,400 - ₹ 5,800, subject to exchange rate)',
    vfsServiceFee: 'Not applicable (Embassy does not cooperate with external facilitation organizations for sticker visas)'
  },
  eVisa: {
    available: true,
    portal: 'https://e-pasluga.by',
    territorialScope: 'Nationwide (entry through all international checkpoints including road, rail, and airports: Minsk, Brest, Gomel, Grodno, Mogilev, Vitebsk)',
    validity: 'Up to 30 days from issue',
    maxStay: '30 days per stay',
    invitationRequired: false,
    processing: '7 calendar days'
  },
  stayDuration: {
    eVisa: 'Up to 30 days',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per stay, valid for up to 1 year'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original Passport with validity of minimum six months (after completion of the trip) and minimum two blank pages for visa stamping. All old passports, if any, should also be attached.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (not more than 3 months old) colour photographs with matt or semi-matt finish, 60%-80% face coverage, white background, and without border (Size: 35mm x 45mm).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'One or two duly completed and signed visa application forms. Typed applications are required; handwritten applications will not be accepted.', icon: '📋', mandatory: true },
    { key: 'covering_letter', title: 'Covering Letter from Indian Company', description: 'A covering letter from the applicant on the Indian company\'s letterhead stating the applicant\'s name, designation, passport number, purpose, and duration of visit. The letter should be addressed to: The Visa Officer, Embassy of the Republic of Belarus, New Delhi.', icon: '📄', mandatory: true },
    { key: 'invitation_letter', title: 'Original Invitation Letter from Belarus Host', description: 'An original invitation letter from an organization in Belarus, typed on its official letterhead, stating the purpose of travel and duration of stay, duly signed with the signatory\'s name and designation. If the inviting company is a private organization, its Company Registration Certificate, duly notarized in Belarus, is required.', icon: '✉️', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking/itinerary.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Proof of accommodation for your entire stay, such as confirmed hotel reservations or details provided in the invitation letter.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Health insurance with a minimum coverage of EUR 10,000, valid in Belarus for the entire duration of stay. It must be obtained from the Embassy\'s Medical Panel (e.g., Radiant Overseas Pvt. Ltd. is mentioned in some sources).', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof (Bank Statement)', description: 'Original personal bank statements for the last six months, stamped and updated with the bank seal, showing sufficient funds (at least US $25 for each day of stay or US $600 for each month of stay per person).', icon: '🏦', mandatory: true },
    { key: 'itr', title: 'Financial Proof (Income Tax Returns)', description: 'Personal Income Tax Returns for the last 3 years.', icon: '💼', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Check Visa Eligibility', description: 'Determine whether to apply for an eVisa online or a sticker visa through the Embassy/Consulate based on your travel plans and duration of stay.' },
    { step: 2, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents as per the chosen visa type (eVisa or sticker visa).' },
    { step: 3, title: 'Submit Application & Pay Fee', description: 'For eVisa, apply online via e-pasluga.by and pay the fee. For sticker visa, book an appointment via email (india.consul@mfa.gov.by), submit documents in person at the Embassy/Consulate, and pay the statutory consular fees in INR at the designated bank (e.g., RBL Bank near the Embassy).' },
    { step: 4, title: 'Receive Clearance', description: 'Track your application status. Once approved, for eVisa, receive the electronic visa via email. For sticker visa, collect your passport with the visa stamp from the Embassy/Consulate.' }
  ],
  specialRequirements: {
    entry_rules: 'Visitors staying in Belarus for more than 5 working days (or 10 calendar days as per some sources) must register with the local Citizenship and Migration Department of the Ministry of Internal Affairs of Belarus. If staying in a hotel, the hotel management will handle this registration automatically.'
  }
};