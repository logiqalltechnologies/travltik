export default {
  country: 'russia ukraine belarus serbia bosnia albania north-macedonia montenegro kosovo',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of the Russian Federation in New Delhi; Ministry of Foreign Affairs of Ukraine; Ministry of Foreign Affairs of the Republic of Belarus; Ministry of Foreign Affairs of the Republic of Serbia; Ministry of Foreign Affairs of Bosnia and Herzegovina; Ministry of Foreign Affairs of Albania; Ministry of Foreign Affairs of North Macedonia; Ministry of Foreign Affairs of Montenegro; Ministry of Foreign Affairs of Kosovo',
  channels: [
    'https://evisa.kdmid.ru/',
    'https://visa.kdmid.ru/',
    'https://evisa.mfa.gov.ua/',
    'http://mfa.gov.by/',
    'https://www.mfa.gov.rs/',
    'http://mvp.gov.ba/',
    'https://e-visa.al/',
    'https://mfa.gov.mk/',
    'https://www.gov.me/mvp',
    'https://mfa-ks.net/',
    'https://www.vfsglobal.com/'
  ],
  processingTime: {
    eVisa: 'Russia: 4 calendar days; Ukraine: 9 working days; Albania: 15 working days; Others: N/A',
    standardSticker: 'Russia: 10-20 working days; Ukraine: 10 working days; Belarus: 5 working days; Serbia: 15 calendar days; Bosnia and Herzegovina: 15 calendar days; Albania: 15 working days; North Macedonia: 10-15 working days; Montenegro: 14-30 calendar days; Kosovo: 15 calendar days',
    expressSticker: 'Russia: 3 working days; Belarus: 2 working days; Ukraine: 5 working days; Others: N/A'
  },
  fees: {
    eVisaTotal: 'Russia: ~52 USD; Ukraine: 20 USD; Albania: 75 EUR; Others: N/A',
    stickerConsularStandard: 'Russia: 40 USD (INR 3200); Ukraine: 65 USD; Belarus: 60 EUR; Serbia: 62 EUR; Bosnia and Herzegovina: 60 EUR; Albania: 75 EUR; North Macedonia: 60 EUR; Montenegro: 35 EUR; Kosovo: 40 EUR',
    vfsServiceFee: 'VFS Global (Russia, Ukraine, Montenegro): Approx. 20-30 USD; Others: N/A (Embassy Direct)'
  },
  eVisa: {
    available: true,
    portal: 'Russia: https://evisa.kdmid.ru/; Ukraine: https://evisa.mfa.gov.ua/; Albania: https://e-visa.al/',
    territorialScope: 'Russia: Entire Russian Federation; Ukraine: Entire Ukraine; Albania: Entire Albania',
    validity: 'Russia: 60 days; Ukraine: 30 days; Albania: Up to 180 days',
    maxStay: 'Russia: 16 days; Ukraine: 30 days; Albania: 90 days',
    invitationRequired: false,
    processing: 'Russia: 4 days; Ukraine: 9 days; Albania: 15 days'
  },
  stayDuration: {
    eVisa: 'Russia: 16 days; Ukraine: 30 days; Albania: 90 days',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per 180-day period (Russia: up to 1 year for private visas based on close relative relationship)'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Minimum 6 months validity from date of entry, at least 2 blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, taken within last 6 months, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Complete the online/physical visa application as per the destination’s official portal', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight reservation (no ticket purchase required)', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking or invitation letter stating host address', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Minimum coverage of USD 30,000 / EUR 30,000 for medical emergencies', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Recent bank statements (last 3 months) + Income Tax Returns + No Objection Certificate from employer', icon: '🏦', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter', description: 'Official invitation letter from the host/family member, notarized or registered with local migration authorities where required', icon: '📄', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Birth certificates, marriage certificate, or official documents establishing family ties', icon: '👪', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Document Collection', description: 'Gather all mandatory documents listed above, ensuring authenticity and translations where required.' },
    { step: 2, title: 'Complete Application Form', description: 'Fill the online visa application on the official portal of the destination country or download the paper form.' },
    { step: 3, title: 'Pay Visa Fees', description: 'Pay the consular fee and any VFS service fee through the accepted payment modes.' },
    { step: 4, title: 'Submit Application', description: 'Submit the completed form and documents at the designated embassy/consulate or VFS service centre (VFS handles Russia, Ukraine, and Montenegro in India; others are Embassy Direct).' },
    { step: 5, title: 'Biometric & Interview (if required)', description: 'Attend biometric data capture and/or interview as instructed by the mission.' },
    { step: 6, title: 'Track & Collect Visa', description: 'Monitor application status online and collect the visa sticker or e‑visa approval.' }
  ],
  specialRequirements: {
    entry_rules: 'Invitation letter must be officially registered or attested by the destination’s Ministry of Interior/Foreign Affairs or local notary; relationship proof is mandatory for family/private visas; travel insurance is mandatory; Kosovo visa applications for Indian citizens must be submitted at the nearest accredited Embassy of Kosovo (e.g., Dhaka, Bangladesh or Istanbul, Turkey).'
  }
};